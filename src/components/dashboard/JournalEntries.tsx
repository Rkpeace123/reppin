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
      className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-6"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add New Entry</h3>
      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="What did you accomplish today?"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        
        <textarea
          placeholder="Tell us more about it..."
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
        />
        
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <Image className="w-4 h-4" />
            Add Image
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <FileText className="w-4 h-4" />
            Add Document
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <Tag className="w-4 h-4" />
            Add Tags
          </button>
        </div>
        
        <div className="flex gap-3">
          <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
            Save Entry
          </button>
          <button
            onClick={() => setShowAddForm(false)}
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Journal Entries</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Capture your daily wins and experiences</p>
        </div>
        
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Entry
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search entries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        
        <button className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
          <Filter className="w-5 h-5" />
          Filter
        </button>
      </div>

      {/* Add Entry Form */}
      {showAddForm && <AddEntryForm />}

      {/* Entries List */}
      <div className="space-y-4">
        {entries.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {entry.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(entry.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {entry.tags.length} tags
                  </div>
                </div>
              </div>
              
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                entry.type === 'achievement' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                entry.type === 'learning' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' :
                'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
              }`}>
                {entry.type}
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {entry.content}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            {entry.attachments.length > 0 && (
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <FileText className="w-4 h-4" />
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