import React, { useState } from 'react';
import { Mail, ArrowLeft, Send, AlertTriangle, FileText, User, MessageSquare } from 'lucide-react';

interface ContactProps {
  setCurrentPage: (page: string) => void;
}

export default function Contact({ setCurrentPage }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
    attachments: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate sending email
    setTimeout(() => {
      setIsLoading(false);
      alert('感謝您的來信！我們會盡快回覆您。');
      setFormData({
        name: '',
        email: '',
        subject: 'general',
        message: '',
        attachments: ''
      });
    }, 1000);
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
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">投訴與反饋</h1>
            <p className="text-lg text-gray-400">
              我們重視您的意見，請透過以下方式與我們聯繫
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-100 mb-6">聯繫表單</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    姓名 / 組織名稱
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="請輸入您的姓名或組織名稱"
                      required
                    />
                  </div>
                </div>

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
                      className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="請輸入您的電子郵件"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    聯繫事由
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-3 border border-gray-600 rounded-lg bg-gray-700/50 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="general">一般諮詢</option>
                    <option value="copyright">版權投訴</option>
                    <option value="technical">技術問題</option>
                    <option value="account">帳號問題</option>
                    <option value="suggestion">建議與回饋</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    詳細說明
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="block w-full px-3 py-3 border border-gray-600 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="請詳細說明您的問題或建議..."
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="attachments" className="block text-sm font-medium text-gray-300 mb-2">
                    相關連結或附件說明
                  </label>
                  <input
                    type="text"
                    id="attachments"
                    name="attachments"
                    value={formData.attachments}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-3 border border-gray-600 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="如有相關連結或檔案，請說明"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span className="font-semibold">發送訊息</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-100 mb-6">聯繫方式</h2>
                <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50">
                  <div className="flex items-start space-x-3 mb-4">
                    <Mail className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-100 mb-2">主要聯繫信箱</h3>
                      <p className="text-purple-400 text-lg">
                        <a href="mailto:pomelo.yolo@gmail.com" className="hover:text-purple-300 transition-colors">
                          pomelo.yolo@gmail.com
                        </a>
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        我們通常在 24-48 小時內回覆
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copyright Complaint Guidelines */}
              <div>
                <h2 className="text-2xl font-semibent text-gray-100 mb-6 flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-yellow-400" />
                  <span>版權投訴指南</span>
                </h2>
                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-xl p-6">
                  <p className="text-yellow-200 mb-4">
                    若您是版權方或相關權利人，發現 NovaTV 平台顯示的搜索結果中存在侵權內容，請在投訴信件中提供：
                  </p>
                  <ul className="space-y-2 text-yellow-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>身份證明文件</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>權利證明文件</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>涉及侵權內容的具體連結</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>相關侵權說明</span>
                    </li>
                  </ul>
                  <p className="text-yellow-200 mt-4 text-sm">
                    我們在收到投訴後，將立即進行審查。若確認侵權，會立即屏蔽相關連結並停止展示，處理結果也將回覆給您。
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50">
                <h3 className="font-semibold text-gray-100 mb-3 flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-blue-400" />
                  <span>回覆時間</span>
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between items-center">
                    <span>一般諮詢</span>
                    <span className="text-blue-400">24-48 小時</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>技術問題</span>
                    <span className="text-green-400">12-24 小時</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>版權投訴</span>
                    <span className="text-red-400">立即處理</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>帳號問題</span>
                    <span className="text-purple-400">6-12 小時</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}