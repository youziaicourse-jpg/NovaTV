// src/context/AuthProvider.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase, type AuthUser } from '../lib/supabase';
import type { User, Session } from '@supabase/supabase-js';

interface AuthContextType {
  user: AuthUser | null;
  session: Session | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (username: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);

      if (session?.user) await fetchUserProfile(session.user);
      setIsLoading(false);
    };

    getInitialSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        if (session?.user) await fetchUserProfile(session.user);
        else setUser(null);
        setIsLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const logout = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) console.error('Logout error:', error);
      setUser(null);
      setSession(null);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserProfile = async (authUser: User) => {
    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', authUser.id)
        .maybeSingle();

      if (error) console.error('Error fetching profile:', error);
      if (profile) {
        setUser({
          id: profile.id,
          email: profile.email,
          username: profile.username,
          createdAt: profile.created_at
        });
      }
    } catch (err) {
      console.error('Error in fetchUserProfile:', err);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) return { success: false, error: error.message };
      if (data.user) await fetchUserProfile(data.user);
      return { success: true };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      setIsLoading(true);

      // 1️⃣ 註冊帳號
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { username } }
      });
      if (signUpError) return { success: false, error: signUpError.message };
      if (!signUpData.user) return { success: false, error: '未取得使用者資料' };

      const userId = signUpData.user.id;

      // 2️⃣ 呼叫後端 API 建立 profile（service_role key）  
      // 請確保你有建立 /pages/api/create-profile.ts
      const res = await fetch('/api/create-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, username, email })
      });
      if (!res.ok) {
        const errData = await res.json();
        return { success: false, error: errData.error || '建立 profile 失敗' };
      }

      // 3️⃣ 登入新帳號
      const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({ email, password });
      if (loginError) return { success: false, error: loginError.message };
      if (loginData.user) await fetchUserProfile(loginData.user);

      return { success: true };
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    session,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated: !!session && !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
