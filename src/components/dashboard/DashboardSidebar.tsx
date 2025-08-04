import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  BookOpen,
  FolderOpen,
  FileText,
  MessageSquare,
  Settings as SettingsIcon,
  Menu,
  X,
  Moon,
  Sun
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const navItems = [
  { id: 'journal', name: 'Journal', icon: BookOpen },
  { id: 'portfolio', name: 'Portfolio', icon: FolderOpen },
  { id: 'resume', name: 'Resume', icon: FileText },
  { id: 'linkedin', name: 'Posts', icon: MessageSquare },
  { id: 'settings', name: 'Settings', icon: SettingsIcon }
];

const DashboardSidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const { isDark, toggleTheme } = useTheme();

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-6">
      {/* Logo */}
      <Link to="/" className="flex items-center mb-8 group">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
        >
          <Brain className="w-6 h-6 text-white" />
        </motion.div>
        <span className="ml-3 text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Reppin
        </span>
      </Link>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              setSidebarOpen(false);
            }}
            className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 
              ${activeTab === item.id
                ? 'bg-gradient-to-r from-indigo-100 to-pink-100 text-indigo-700 dark:from-indigo-800 dark:to-pink-800 dark:text-indigo-300 shadow'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}`}
          >
            <item.icon className={`w-6 h-6 mr-3 ${activeTab === item.id ? 'text-indigo-600 dark:text-indigo-300' : ''}`} />
            <span className="text-base font-semibold">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center p-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          {isDark ? <Sun className="w-6 h-6 mr-3" /> : <Moon className="w-6 h-6 mr-3" />}  
          <span className="font-medium">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      >
        <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed top-0 left-0 h-full w-64 z-40">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/40 z-40"
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 z-50 shadow-lg"
            >
              <div className="flex justify-end p-4">
                <button onClick={() => setSidebarOpen(false)}>
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                </button>
              </div>
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DashboardSidebar;
