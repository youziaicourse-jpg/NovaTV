import React from 'react';
import { FileText, ArrowLeft, AlertTriangle, Scale, Shield, Ban } from 'lucide-react';

interface TermsProps {
  setCurrentPage: (page: string) => void;
}

export default function Terms({ setCurrentPage }: TermsProps) {
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
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">服務條款</h1>
            <p className="text-lg text-gray-400">
              使用 NovaTV 服務前，請仔細閱讀以下條款
            </p>
          </div>

          <div className="space-y-8">
            {/* Service Agreement */}
            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4 flex items-center space-x-2">
                <Scale className="h-6 w-6 text-blue-400" />
                <span>服務協議</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                使用 NovaTV 服務即代表使用者同意以下條款：
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300">僅能將本服務用於個人、非商業用途</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300">不得下載、傳播或以其他方式分發未經授權的影片</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300">必須遵守所在國家或地區的相關法律法規</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300">NovaTV 對於第三方 API 提供的內容不承擔任何責任</p>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4 flex items-center space-x-2">
                <Shield className="h-6 w-6 text-green-400" />
                <span>用戶責任</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">允許行為</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• 個人觀影娛樂</li>
                    <li>• 搜尋影片資訊</li>
                    <li>• 使用推薦功能</li>
                    <li>• 建立個人收藏清單</li>
                    <li>• 正常的平台互動</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">禁止行為</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• 商業用途使用</li>
                    <li>• 下載影片檔案</li>
                    <li>• 分享侵權內容</li>
                    <li>• 惡意攻擊平台</li>
                    <li>• 散布不當資訊</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Copyright Disclaimer */}
            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4 flex items-center space-x-2">
                <Ban className="h-6 w-6 text-red-400" />
                <span>版權聲明與免責</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                  <p className="text-red-300 font-semibold mb-2">重要聲明</p>
                  <p className="text-red-200">
                    NovaTV 僅提供影視作品的搜尋與播放入口，本身不存儲、不提供任何影音檔案。
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p>使用者若透過本平台進行侵權行為，必須自行承擔法律責任</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p>一旦接獲權利人通知，我們將立即屏蔽或移除侵權連結</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p>我們尊重正版，並鼓勵使用者透過合法管道支持創作者</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Limitations */}
            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4 flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-yellow-400" />
                <span>服務限制</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>NovaTV 保留以下權利：</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• 隨時修改或終止服務</li>
                  <li>• 限制或暫停特定用戶的服務</li>
                  <li>• 更新服務條款與隱私政策</li>
                  <li>• 移除違規內容或帳號</li>
                  <li>• 在法律要求下配合調查</li>
                </ul>
              </div>
            </div>

            {/* Liability Limitation */}
            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">責任限制</h2>
              <div className="space-y-4 text-gray-300">
                <p>NovaTV 在法律允許的最大範圍內，對以下情況不承擔責任：</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-400">
                    <li>• 第三方內容的準確性</li>
                    <li>• 服務中斷或錯誤</li>
                    <li>• 用戶數據遺失</li>
                    <li>• 因使用服務產生的間接損失</li>
                  </ul>
                  <ul className="space-y-2 text-gray-400">
                    <li>• 第三方網站的安全性</li>
                    <li>• 網路連線問題</li>
                    <li>• 裝置相容性問題</li>
                    <li>• 其他不可抗力因素</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Updates and Changes */}
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-300 mb-3">條款更新</h3>
              <p className="text-blue-200">
                NovaTV 保留隨時修改本服務條款的權利。重大變更將透過平台公告或電子郵件通知用戶。繼續使用服務即表示同意修改後的條款。
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-300 mb-3">法務聯繫</h3>
              <p className="text-green-200 mb-3">
                如對服務條款有任何疑問，或需要法律相關諮詢：
              </p>
              <p className="text-green-100">
                <strong>法務信箱：</strong>
                <a href="mailto:pomelo.yolo@gmail.com" className="text-green-400 hover:text-green-300 ml-2">
                  pomelo.yolo@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}