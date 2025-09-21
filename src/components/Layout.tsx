import React from 'react';
import { Film, User, Bell, Home, Shield, FileText, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Layout({ children, currentPage, setCurrentPage }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Film className="h-8 w-8 text-red-500 mr-3" />
              <h1 
                className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent cursor-pointer"
                onClick={() => setCurrentPage('home')}
              >
                NovaTV
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => setCurrentPage('home')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  currentPage === 'home' ? 'text-red-400 bg-red-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <Home className="h-4 w-4" />
                <span>首頁</span>
              </button>
              <button
                onClick={() => setCurrentPage('announcements')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  currentPage === 'announcements' ? 'text-red-400 bg-red-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <Bell className="h-4 w-4" />
                <span>公告中心</span>
              </button>
              <button
                onClick={() => setCurrentPage('privacy')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  currentPage === 'privacy' ? 'text-red-400 bg-red-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <Shield className="h-4 w-4" />
                <span>隱私政策</span>
              </button>
              <button
                onClick={() => setCurrentPage('terms')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  currentPage === 'terms' ? 'text-red-400 bg-red-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <FileText className="h-4 w-4" />
                <span>服務條款</span>
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  currentPage === 'contact' ? 'text-red-400 bg-red-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <Mail className="h-4 w-4" />
                <span>聯繫我們</span>
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage('login')}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg hover:from-red-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                <User className="h-4 w-4" />
                <span>登入</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/70 border-t border-gray-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">© 2025 NovaTV. All rights reserved.</p>
            <p className="text-sm">免費線上觀影平台 | 不儲存影音檔案 | 僅提供搜尋與播放入口</p>
          </div>
        </div>
      </footer>
    </div>
  );
}