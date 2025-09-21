import React from 'react';
import { Shield, ArrowLeft, Eye, Database, Lock, Users } from 'lucide-react';

interface PrivacyProps {
  setCurrentPage: (page: string) => void;
}

export default function Privacy({ setCurrentPage }: PrivacyProps) {
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
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">隱私政策</h1>
            <p className="text-lg text-gray-400">
              NovaTV 尊重並保護使用者的隱私權益
            </p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4 flex items-center space-x-2">
                <Eye className="h-6 w-6 text-green-400" />
                <span>隱私保護承諾</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                NovaTV 尊重並保護使用者的隱私。我們不會主動蒐集、儲存或追蹤使用者的個人數據。所有影片均透過第三方 API 提供，平台僅在使用者註冊帳號後，保存最基本的操作數據，例如收藏清單與觀看紀錄。這些數據僅限於提供服務使用，並不會對外分享或販售。
              </p>
            </div>

            {/* Data Collection */}
            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4 flex items-center space-x-2">
                <Database className="h-6 w-6 text-blue-400" />
                <span>數據收集範圍</span>
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">註冊資訊</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>使用者名稱</li>
                    <li>電子郵件地址</li>
                    <li>帳號建立時間</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">使用數據</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>收藏清單</li>
                    <li>觀看紀錄（僅用於推薦功能）</li>
                    <li>平台使用偏好設定</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">我們不會收集</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>個人身份證件資訊</li>
                    <li>金融或支付資訊</li>
                    <li>裝置詳細資訊</li>
                    <li>位置數據</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Usage */}
            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4 flex items-center space-x-2">
                <Lock className="h-6 w-6 text-purple-400" />
                <span>數據使用目的</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">合法使用</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• 提供平台基本功能</li>
                    <li>• 維護帳號安全</li>
                    <li>• 發送重要通知</li>
                    <li>• 個人化影片推薦</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">禁止行為</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• 販售用戶數據</li>
                    <li>• 對外分享個人資訊</li>
                    <li>• 第三方廣告追蹤</li>
                    <li>• 商業化數據分析</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4 flex items-center space-x-2">
                <Shield className="h-6 w-6 text-red-400" />
                <span>數據安全措施</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>我們採用以下安全措施保護您的數據：</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>加密儲存所有敏感資訊</li>
                  <li>定期進行安全性檢測</li>
                  <li>限制員工數據存取權限</li>
                  <li>使用安全的第三方服務</li>
                  <li>定期備份與災難恢復機制</li>
                </ul>
              </div>
            </div>

            {/* User Rights */}
            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4 flex items-center space-x-2">
                <Users className="h-6 w-6 text-yellow-400" />
                <span>用戶權利</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>作為 NovaTV 用戶，您享有以下權利：</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">數據控制權</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      <li>查看個人數據</li>
                      <li>修改個人資訊</li>
                      <li>刪除帳號與數據</li>
                      <li>匯出個人數據</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">隱私設定</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      <li>控制推薦功能</li>
                      <li>管理通知偏好</li>
                      <li>設定隱私等級</li>
                      <li>選擇數據保留期限</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-300 mb-3">隱私相關聯繫</h3>
              <p className="text-blue-200 mb-3">
                如果您對隱私政策有任何疑問，或需要行使您的數據權利，請聯繫我們：
              </p>
              <p className="text-blue-100">
                <strong>隱私保護信箱：</strong>
                <a href="mailto:pomelo.yolo@gmail.com" className="text-blue-400 hover:text-blue-300 ml-2">
                  pomelo.yolo@gmail.com
                </a>
              </p>
            </div>

            {/* Updates */}
            <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-300 mb-3">政策更新</h3>
              <p className="text-yellow-200">
                本隱私政策可能會根據法律要求或服務變更而進行調整。任何重大變更都會透過平台公告或電子郵件通知用戶。建議定期查看最新版本的隱私政策。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}