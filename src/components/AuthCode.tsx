import React from 'react';
import { Key, Mail, Clock, AlertCircle, ArrowLeft } from 'lucide-react';

interface AuthCodeProps {
  setCurrentPage: (page: string) => void;
}

export default function AuthCode({ setCurrentPage }: AuthCodeProps) {
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
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Key className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">授權碼獲取</h1>
            <p className="text-lg text-gray-400">
              目前 NovaTV 僅開放授權碼登入，請依照以下步驟獲取授權碼
            </p>
          </div>

          <div className="space-y-8">
            {/* Status Alert */}
            <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-300 mb-2">目前狀態</h3>
                  <p className="text-yellow-200">
                    授權碼系統正在最終測試階段，即將對外開放。請先註冊帳號以便後續接收授權碼通知。
                  </p>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-700/50 p-8 rounded-xl border border-gray-600/50">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">註冊帳號</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  首先需要註冊 NovaTV 帳號，我們會將授權碼發送到您的註冊信箱。
                </p>
                <button
                  onClick={() => setCurrentPage('register')}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                >
                  <span>立即註冊</span>
                </button>
              </div>

              <div className="bg-gray-700/50 p-8 rounded-xl border border-gray-600/50">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">等待通知</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  系統開放後，我們會透過電子郵件向所有註冊用戶發送專屬授權碼。
                </p>
                <div className="flex items-center space-x-2 text-green-400">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">預計開放時間：近期內</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-700/50 p-8 rounded-xl border border-gray-600/50">
              <h3 className="text-xl font-semibold text-gray-100 mb-4 flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>聯繫我們</span>
              </h3>
              <p className="text-gray-400 mb-4">
                如果您有任何關於授權碼的疑問，或需要技術支援，請聯繫我們：
              </p>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-gray-300">
                  <strong>聯繫信箱：</strong>
                  <a href="mailto:pomelo.yolo@gmail.com" className="text-blue-400 hover:text-blue-300 ml-2">
                    pomelo.yolo@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Notice */}
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6">
              <h3 className="font-semibold text-blue-300 mb-3">重要提醒</h3>
              <ul className="space-y-2 text-blue-200">
                <li>• 每個註冊帳號僅能獲得一組授權碼</li>
                <li>• 授權碼具有使用期限，請妥善保管</li>
                <li>• 請勿與他人分享您的授權碼</li>
                <li>• 如授權碼遺失，可透過客服信箱申請重新發送</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}