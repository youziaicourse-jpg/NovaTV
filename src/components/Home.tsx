import React from 'react';
import { Play, Shield, Users, Smartphone, Star, ArrowRight, ExternalLink } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const handleWatchNow = () => {
    window.open('https://novatv.pages.dev/', '_blank');
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            NovaTV
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            免費線上觀影平台
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            致力於為使用者提供便捷的線上觀影體驗。平台本身不存放任何影音檔案，所有影片內容均來自第三方 API，我們僅作為入口，讓使用者能快速搜尋與播放各種類型的影視作品。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWatchNow}
              className="flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-red-600 to-purple-600 rounded-xl hover:from-red-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Play className="h-6 w-6" />
              <span className="text-lg font-semibold">立即觀影</span>
              <ExternalLink className="h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrentPage('register')}
              className="flex items-center justify-center space-x-3 px-8 py-4 border-2 border-gray-600 rounded-xl hover:border-gray-400 hover:bg-gray-800/50 transition-all duration-300"
            >
              <Users className="h-6 w-6" />
              <span className="text-lg font-semibold">註冊帳號</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">
            平台特色
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-100">隱私保護</h4>
              <p className="text-gray-400 leading-relaxed">
                我們不會主動蒐集、儲存或追蹤使用者的個人數據。僅在註冊後保存基本操作數據，且不會對外分享或販售。
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-100">多裝置支援</h4>
              <p className="text-gray-400 leading-relaxed">
                支援電腦、手機、平板等多種裝置，響應式設計確保在任何螢幕尺寸下都能獲得最佳觀影體驗。
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-100">個人化推薦</h4>
              <p className="text-gray-400 leading-relaxed">
                登入後享受個人化影片推薦服務，我們不會收集私人數據，僅基於觀看偏好提供建議。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Account Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">
            使用者帳號與功能
          </h3>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-700/50">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              為了提供更完整的體驗，NovaTV 提供註冊與登入功能。使用者可以建立專屬帳號，登入後即可享受以下功能：
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-100 mb-2">平台公告</h4>
                  <p className="text-gray-400">接收平台公告與更新通知</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-100 mb-2">影片推薦</h4>
                  <p className="text-gray-400">不會收集私人數據的個人化推薦</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-yellow-900/20 border border-yellow-700/50 rounded-xl">
              <p className="text-yellow-300 font-semibold mb-2">
                <strong>注意：</strong> 目前 NovaTV 僅開放授權碼登入，即將開放用戶登入
              </p>
              <button
                onClick={() => setCurrentPage('auth-code')}
                className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <span>授權碼獲取請點此</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Update Policy */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">
            更新政策
          </h3>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-700/50">
            <p className="text-lg text-gray-300 mb-8">
              NovaTV 會不定期進行更新，以提升服務品質。更新內容包含：
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100 mb-2">功能升級</h4>
                  <p className="text-gray-400">例如搜尋、分類與收藏功能的優化</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100 mb-2">內容更新</h4>
                  <p className="text-gray-400">即時同步第三方 API 提供的最新影視資訊</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100 mb-2">規範修訂</h4>
                  <p className="text-gray-400">隱私政策與版權聲明將依照相關法律要求隨時調整</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-blue-900/20 border border-blue-700/50 rounded-xl">
              <p className="text-blue-300">
                <strong>注意：</strong> 所有最新的更新訊息，將會透過「公告中心」對外發布，使用者登入後即可查看。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}