import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 z-50 shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Reppin</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                {item.name}
              </a>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <Link
              to="/dashboard"
              className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-lg"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-800/50 shadow-xl"
          >
            <div className="px-6 py-6 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-semibold text-lg py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-200/50 dark:border-gray-800/50">
                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-lg"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                
                <Link
                  to="/dashboard"
                  className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;