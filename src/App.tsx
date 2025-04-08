import React, { useState } from 'react';
import { Disc as Discord, Youtube, Sun, Moon } from 'lucide-react'
import { Helmet } from 'react-helmet-async';;

function App() {
  const [isDark, setIsDark] = useState(true);



  const pageTitle = "HackServer - Robloxチートコミュニティ";
  const pageDescription = "HackServerはDiscordとYouTubeを拠点とする日本最大級のRobloxチートコミュニティです。スクリプト共有や情報交換など。"; // ← 適切な説明文に変更してください

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />

      </Helmet>
      <div className={`min-h-screen transition-all duration-700 ease-in-out ${
        isDark 
          ? 'bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a]/90 to-[#1E1E2E] text-white' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900'
      }`}>
        {/* Navigation */}
        <nav className={`fixed top-0 w-full transition-all duration-700 ease-in-out ${
          isDark ? 'bg-black/20' : 'bg-white/60'
        } backdrop-blur-sm z-50 border-b ${isDark ? 'border-white/5' : 'border-black/5'}`}>
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold animate-fade-in">HackServer</span>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-110 ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20 hover:ring-2 hover:ring-yellow-400/50' 
                    : 'bg-gray-100 hover:bg-gray-200 hover:ring-2 hover:ring-blue-600/50'
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-400 transition-all duration-500 animate-spin-slow" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-600 transition-all duration-500 animate-bounce-slow" />
                )}
              </button>
              <div className="flex items-center gap-3">

                <a
                  href="https://www.youtube.com/@muu_hack" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 transform hover:scale-110 hover:-rotate-6 ${
                    isDark ? 'text-red-400 hover:text-red-300' : 'text-red-500 hover:text-red-600'
                  }`}
                  aria-label="YouTube チャンネル" 
                >
                  <Youtube className="w-5 h-5" />
                </a>
                

                <a
                  href="https://discord.gg/DJN3FCcWDC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 transform hover:scale-110 hover:rotate-6 ${
                    isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-500 hover:text-indigo-600'
                  }`}
                  aria-label="Discord サーバー" 
                >
                  <Discord className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-8">
              <h1 className="text-6xl font-bold tracking-tight transition-colors duration-500 animate-fade-in">HackServer</h1>
              <p className={`text-xl transition-colors duration-500 animate-fade-in-delay ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                日本最大級のRobloxチートコミュニティ
              </p>
              <div className="flex gap-4 animate-fade-in-delay-2">
                <a 
                  href="https://discord.gg/hcks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 rounded-lg transform hover:scale-105 hover:shadow-lg hover:-translate-y-1"
                >
                  <Discord className="w-5 h-5" />
                  Discordに参加
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div 
                className={`w-72 h-72 rounded-3xl transition-all duration-700 ease-in-out transform rotate-12 hover:rotate-45 hover:scale-110 animate-float ${
                  isDark 
                    ? 'bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 shadow-lg shadow-purple-500/20' 
                    : 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/20'
                }`}
              ></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`px-4 py-20 transition-colors duration-500 ${isDark ? 'bg-black/20' : 'bg-gray-50/50'}`}>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div className={`p-8 rounded-xl backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
              isDark ? 'bg-zinc-900/50 hover:bg-zinc-800/50' : 'bg-white shadow-lg hover:shadow-xl'
            }`}>
              <h2 className="text-xl font-semibold mb-4">HackServerとは?</h2>
              <p className={`transition-colors duration-500 ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                Discordを本拠地としたRobloxのチートコミュニティです。
                また、YouTubeにてRobloxのチートを紹介しています。
              </p>
            </div>
            <div className={`p-8 rounded-xl backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
              isDark ? 'bg-zinc-900/50 hover:bg-zinc-800/50' : 'bg-white shadow-lg hover:shadow-xl'
            }`}>
              <h2 className="text-xl font-semibold mb-4">このサーバーの利点</h2>
              <p className={`transition-colors duration-500 ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                このサーバーは、よくある外国人のチートを扱うDiscordサーバーとは違い、すべて日本語で、非常に親切で、丁寧に困ったことを教えてくれます。
              </p>
            </div>
            <div className={`p-8 rounded-xl backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
              isDark ? 'bg-zinc-900/50 hover:bg-zinc-800/50' : 'bg-white shadow-lg hover:shadow-xl'
            }`}>
              <h2 className="text-xl font-semibold mb-4">主に行っている活動</h2>
              <p className={`transition-colors duration-500 ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                Robloxの人気ゲーム(Blox Fruits、Adopt Me!など)でチートを使う、スクリプトの共有、新しいエクスプロイトの情報交換等...
              </p>
            </div>
          </div>
        </div>
      </div>
  </>

  );
}

export default App;
