import React, { useState } from 'react';
import { User, Mail, Calendar, Settings, ArrowLeft, Edit3, Save, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface UserProfileProps {
  setCurrentPage: (page: string) => void;
}

export default function UserProfile({ setCurrentPage }: UserProfileProps) {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    username: user?.username || '',
    email: user?.email || ''
  });

  const handleSave = () => {
    // 這裡可以添加保存用戶資料的邏輯
    console.log('Saving user data:', editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      username: user?.username || '',
      email: user?.email || ''
    });
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-gray-400 mb-4">請先登入以查看個人資料</p>
          <button
            onClick={() => setCurrentPage('login')}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg hover:from-red-700 hover:to-purple-700 transition-all duration-200"
          >
            前往登入
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>返回首頁</span>
        </button>

        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-100 mb-2">個人資料</h1>
            <p className="text-gray-400">管理您的帳號資訊</p>
          </div>

          <div className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                使用者名稱
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.username}
                  onChange={(e) => setEditData(prev => ({ ...prev, username: e.target.value }))}
                  className="block w-full px-3 py-3 border border-gray-600 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              ) : (
                <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                  <User className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-100">{user.username}</span>
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                電子郵件
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={editData.email}
                  onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
                  className="block w-full px-3 py-3 border border-gray-600 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              ) : (
                <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-100">{user.email}</span>
                </div>
              )}
            </div>

            {/* Created At */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                註冊時間
              </label>
              <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                <Calendar className="h-5 w-5 text-gray-400" />
                <span className="text-gray-100">
                  {new Date(user.createdAt).toLocaleDateString('zh-TW', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6">
              {isEditing ? (
                <>
                  <button
                    onClick={handleCancel}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-600 rounded-lg hover:border-gray-400 hover:bg-gray-700/50 transition-all duration-200"
                  >
                    <X className="h-4 w-4" />
                    <span>取消</span>
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200"
                  >
                    <Save className="h-4 w-4" />
                    <span>保存</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                >
                  <Edit3 className="h-4 w-4" />
                  <span>編輯資料</span>
                </button>
              )}
            </div>
          </div>

          {/* Account Stats */}
          <div className="mt-8 p-6 bg-gray-700/30 border border-gray-600/30 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-100 mb-4 flex items-center space-x-2">
              <Settings className="h-5 w-5 text-blue-400" />
              <span>帳號統計</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">0</p>
                <p className="text-gray-400 text-sm">收藏影片</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">0</p>
                <p className="text-gray-400 text-sm">觀看記錄</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}