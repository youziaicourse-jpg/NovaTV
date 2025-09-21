import React from 'react';
import { Bell, Calendar, ArrowLeft, Star, AlertTriangle, Info } from 'lucide-react';

interface AnnouncementsProps {
  setCurrentPage: (page: string) => void;
}

export default function Announcements({ setCurrentPage }: AnnouncementsProps) {
  const announcements = [
    {
      id: 1,
      type: 'important',
      title: '授權碼登入系統即將上線',
      date: '2025-01-20',
      content: 'NovaTV 授權碼登入系統正在進行最終測試，預計近期內正式開放。已註冊的用戶將收到專屬授權碼通知。'
    },
    {
      id: 2,
      type: 'update',
      title: '平台界面全新升級',
      date: '2025-01-18',
      content: '我們對 NovaTV 的使用者界面進行了全面優化，提供更流暢的觀影體驗和更直觀的操作介面。'
    },
    {
      id: 3,
      type: 'info',
      title: '隱私政策更新說明',
      date: '2025-01-15',
      content: '為了更好地保護用戶隱私，我們更新了隱私政策條款。請查看最新版本了解我們的數據保護措施。'
    },
    {
      id: 4,
      type: 'update',
      title: '第三方 API 整合優化',
      date: '2025-01-12',
      content: '我們優化了第三方影片 API 的整合機制，提升了搜尋速度和內容載入效率，為用戶帶來更好的觀影體驗。'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'important':
        return <AlertTriangle className="h-5 w-5 text-red-400" />;
      case 'update':
        return <Star className="h-5 w-5 text-blue-400" />;
      default:
        return <Info className="h-5 w-5 text-green-400" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'important':
        return 'bg-red-900/20 border-red-700/50 text-red-300';
      case 'update':
        return 'bg-blue-900/20 border-blue-700/50 text-blue-300';
      default:
        return 'bg-green-900/20 border-green-700/50 text-green-300';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'important':
        return '重要公告';
      case 'update':
        return '功能更新';
      default:
        return '一般資訊';
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>返回首頁</span>
        </button>

        <div className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-2xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">公告中心</h1>
            <p className="text-lg text-gray-400">
              最新的平台消息與更新資訊
            </p>
          </div>

          <div className="space-y-6">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50 hover:border-gray-500/50 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getIcon(announcement.type)}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-100 mb-1">
                        {announcement.title}
                      </h3>
                      <div className="flex items-center space-x-3">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getBadgeColor(announcement.type)}`}>
                          {getTypeLabel(announcement.type)}
                        </span>
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{announcement.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {announcement.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-700/30 border border-gray-600/30 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-100 mb-3 flex items-center space-x-2">
              <Bell className="h-5 w-5 text-blue-400" />
              <span>通知設定</span>
            </h3>
            <p className="text-gray-400 mb-4">
              登入後，您將自動接收所有重要公告與更新通知。我們會透過平台內訊息和電子郵件向您發送最新消息。
            </p>
            <button
              onClick={() => setCurrentPage('login')}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              <span>立即登入</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}