import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import JournalEntries from '../components/dashboard/JournalEntries';
import Portfolio from '../components/dashboard/Portfolio';
import ResumeBuilder from '../components/dashboard/ResumeBuilder';
import LinkedInPosts from '../components/dashboard/LinkedInPosts';
import Settings from '../components/dashboard/Settings';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('journal');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'journal':
        return <JournalEntries />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <ResumeBuilder />;
      case 'linkedin':
        return <LinkedInPosts />;
      case 'settings':
        return <Settings />;
      default:
        return <JournalEntries />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <DashboardSidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <div className="flex-1 lg:ml-64">
        <motion.main
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6"
        >
          {renderContent()}
        </motion.main>
      </div>
    </div>
  );
};

export default Dashboard;