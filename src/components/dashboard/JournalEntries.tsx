import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Calendar, Tag, Image, FileText } from 'lucide-react';

const JournalEntries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const entries = [
    {
      id: 1,
      title: 'Won First Place at TechHack 2024',
      date: '2024-01-15',
      tags: ['hackathon', 'web-dev', 'react'],
      content: 'Built a sustainable food delivery app that connects local farmers with consumers...',
      attachments: ['certificate.pdf', 'team-photo.jpg'],
      type: 'achievement'
    },
    {
      id: 2,
      title: 'Completed React Advanced Course',
      date: '2024-01-10',
      tags: ['learning', 'react', 'frontend'],
      content: 'Finished the advanced React course covering hooks, context, and performance optimization...',
      attachments: ['certificate.pdf'],
      type: 'learning'
    },
    {
      id: 3,
      title: 'Started Internship at TechCorp',
      date: '2024-01-05',
      tags: ['internship', 'backend', 'node.js'],
      content: 'First day at TechCorp as a backend development intern. Working on microservices...',
      attachments: ['offer-letter.pdf'],
      type: 'experience'
    }
  ];

  const AddEntryForm = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8 shadow-xl"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Add New Entry</h3>
      
      <div className="space-y-6">
        <input
          type="text"
          placeholder="What did you accomplish today?"
          className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-lg font-medium"
        />
        
        <textarea
          placeholder="Tell us more about it..."
          rows={5}
          className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all duration-300"
        />
        
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
            <Image className="w-5 h-5" />
            Add Image
          </button>
          <button className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
            <FileText className="w-5 h-5" />
            Add Document
          </button>
          <button className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
            <Tag className="w-5 h-5" />
            Add Tags
          </button>
        </div>
        
        <div className="flex gap-4 pt-4">
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Save Entry
          </button>
          <button
            onClick={() => setShowAddForm(false)}
            className="px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight">Journal Entries</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">Capture your daily wins and experiences</p>
        </div>
        
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <Plus className="w-6 h-6" />
          Add Entry
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search entries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-6 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-lg"
          />
        </div>
        
        <button className="flex items-center gap-3 px-6 py-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-white dark:hover:bg-gray-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
          <Filter className="w-6 h-6" />
          Filter
        </button>
      </div>

      {/* Add Entry Form */}
      {showAddForm && <AddEntryForm />}

      {/* Entries List */}
      <div className="space-y-6">
        {entries.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {entry.title}
                </h3>
                <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {new Date(entry.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    {entry.tags.length} tags
                  </div>
                </div>
              </div>
              
              <div className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                entry.type === 'achievement' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                entry.type === 'learning' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' :
                'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
              }`}>
                {entry.type}
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2 text-lg leading-relaxed">
              {entry.content}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-600 dark:text-gray-300 text-sm rounded-full font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            {entry.attachments.length > 0 && (
              <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                <FileText className="w-5 h-5" />
                <span>{entry.attachments.length} attachment{entry.attachments.length > 1 ? 's' : ''}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JournalEntries;