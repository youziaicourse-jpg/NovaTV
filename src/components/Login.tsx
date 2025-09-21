import React, { useState } from 'react';
import { User, Lock, Mail, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface LoginProps {
  setCurrentPage: (page: string) => void;
}

export default function Login({ setCurrentPage }: LoginProps) {
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setSuccess('');
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!formData.email.trim() || !formData.password.trim()) {
      setError('請填寫所有必填欄位');
      return;
    }

    try {
      const success = await login(formData.email, formData.password);
      
      if (success) {
        setSuccess('登入成功！正在跳轉...');
        setTimeout(() => {
          setCurrentPage('home');
        }, 1500);
      } else {
        setError('電子郵件或密碼錯誤');
      }
    } catch (error) {
      setError('登入時發生錯誤，請稍後再試');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full">
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-100 mb-2">登入 NovaTV</h2>
            <p className="text-gray-400">使用您的帳號登入</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-700/50 rounded-lg flex items-center space-x-3">
              <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
              <p className="text-red-300">{error}</p>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-900/20 border border-green-700/50 rounded-lg flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              <p className="text-green-300">{success}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                電子郵件
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="請輸入電子郵件"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                密碼
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="請輸入密碼"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg hover:from-red-700 hover:to-purple-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Lock className="h-5 w-5" />
                  <span className="font-semibold">登入</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 space-y-4">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">測試帳號：</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>test@novatv.com / password123</p>
                <p>admin@novatv.com / admin123</p>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => setCurrentPage('register')}
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                還沒有帳號？註冊新帳號
              </button>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
            <p className="text-blue-300 text-sm text-center">
              登入後即可享受個人化推薦與收藏功能
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}