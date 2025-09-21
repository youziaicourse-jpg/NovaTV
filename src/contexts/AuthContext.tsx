import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 檢查本地存儲中的用戶信息
  useEffect(() => {
    const checkAuthStatus = () => {
      try {
        const storedUser = localStorage.getItem('novatv_user');
        const token = localStorage.getItem('novatv_token');
        
        if (storedUser && token) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        localStorage.removeItem('novatv_user');
        localStorage.removeItem('novatv_token');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // 模擬 API 調用
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 檢查預設的測試帳號
      const testUsers = [
        { email: 'test@novatv.com', password: 'password123', username: 'TestUser' },
        { email: 'admin@novatv.com', password: 'admin123', username: 'Admin' }
      ];
      
      const foundUser = testUsers.find(u => u.email === email && u.password === password);
      
      if (foundUser) {
        const userData: User = {
          id: Math.random().toString(36).substr(2, 9),
          username: foundUser.username,
          email: foundUser.email,
          createdAt: new Date().toISOString()
        };
        
        const token = 'mock_jwt_token_' + Math.random().toString(36).substr(2, 9);
        
        localStorage.setItem('novatv_user', JSON.stringify(userData));
        localStorage.setItem('novatv_token', token);
        
        setUser(userData);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // 模擬 API 調用
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 檢查是否已存在相同 email
      const existingUsers = JSON.parse(localStorage.getItem('novatv_registered_users') || '[]');
      const userExists = existingUsers.some((u: any) => u.email === email);
      
      if (userExists) {
        return false;
      }
      
      const userData: User = {
        id: Math.random().toString(36).substr(2, 9),
        username,
        email,
        createdAt: new Date().toISOString()
      };
      
      const token = 'mock_jwt_token_' + Math.random().toString(36).substr(2, 9);
      
      // 保存到註冊用戶列表
      existingUsers.push({ ...userData, password });
      localStorage.setItem('novatv_registered_users', JSON.stringify(existingUsers));
      
      // 自動登入
      localStorage.setItem('novatv_user', JSON.stringify(userData));
      localStorage.setItem('novatv_token', token);
      
      setUser(userData);
      return true;
    } catch (error) {
      console.error('Register error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('novatv_user');
    localStorage.removeItem('novatv_token');
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};