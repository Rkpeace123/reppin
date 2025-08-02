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

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  activeTab,
  setActiveTab,
  sidebarOpen,
  setSidebarOpen
}) => {
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: 'journal', name: 'Journal Entries', icon: BookOpen },
    { id: 'portfolio', name: 'Portfolio', icon: FolderOpen },
    { id: 'resume', name: 'Resume Builder', icon: FileText },
    { id: 'linkedin', name: 'LinkedIn Posts', icon: MessageSquare },
    { id: 'settings', name: 'Settings', icon: SettingsIcon },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      {/* Logo */}
      <div className="p-8 border-b border-gray-200/50 dark:border-gray-700/50">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Reppin</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-300 group ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 text-indigo-700 dark:text-indigo-300 shadow-lg border border-indigo-200/50 dark:border-indigo-800/50'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <item.icon className={`w-6 h-6 transition-all duration-300 ${
                  activeTab === item.id ? 'scale-110' : 'group-hover:scale-105'
                }`} />
                <span className="font-semibold text-base">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Theme Toggle */}
      <div className="p-6 border-t border-gray-200/50 dark:border-gray-700/50">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center gap-4 px-5 py-4 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group"
        >
          {isDark ? <Sun className="w-6 h-6 group-hover:scale-105 transition-transform" /> : <Moon className="w-6 h-6 group-hover:scale-105 transition-transform" />}
          <span className="font-semibold text-base">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 w-72 h-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-700/50 z-40 shadow-xl">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50"
            >
              {/* Close Button */}
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="w-5 h-5" />
              </button>

              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DashboardSidebar;