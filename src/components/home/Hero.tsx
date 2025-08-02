import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="relative text-center">
          {/* Always Free Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-green-200/50 dark:border-green-800/50 shadow-lg backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            Always Free to Start
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-gray-900 dark:text-white mb-8 leading-[0.9] tracking-tight"
          >
            You Live It.{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Reppin
            </span>{' '}
            Remembers It.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-medium"
          >
            Turn your daily wins — hackathons, workshops, internships — into a portfolio that evolves with you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <Link
              to="/dashboard"
              className="group relative bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <span className="relative">Start for Free</span>
              <ArrowRight className="relative w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            <button className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-10 py-5 rounded-2xl font-bold text-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3">
              <Play className="w-6 h-6" />
              View Sample Portfolio
            </button>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative max-w-7xl mx-auto"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
            
            <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
              {/* Browser Bar */}
              <div className="bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm px-8 py-6 border-b border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full shadow-sm"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-sm"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full shadow-sm"></div>
                  </div>
                  <div className="flex-1 max-w-md mx-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                      🔒 reppin.ai/dashboard
                    </div>
                  </div>
                  <div className="w-20"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-8">
                {/* Tabs */}
                <div className="flex gap-8 border-b border-gray-200 dark:border-gray-700 mb-8">
                  <button className="pb-4 border-b-3 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold text-lg relative">
                    Journal Entries
                    <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"></div>
                  </button>
                  <button className="pb-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium text-lg transition-colors">
                    Portfolio
                  </button>
                  <button className="pb-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium text-lg transition-colors">
                    Resume Builder
                  </button>
                  <button className="pb-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium text-lg transition-colors">
                    LinkedIn Posts
                  </button>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + item * 0.1 }}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 h-40 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-600/50"
                    >
                      <div className="w-full h-5 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-500 rounded-lg mb-4 animate-pulse"></div>
                      <div className="w-3/4 h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-500 rounded-lg mb-3 animate-pulse"></div>
                      <div className="w-1/2 h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-500 rounded-lg mb-4 animate-pulse"></div>
                      <div className="flex gap-2">
                        <div className="w-16 h-6 bg-indigo-200 dark:bg-indigo-800 rounded-full animate-pulse"></div>
                        <div className="w-20 h-6 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;