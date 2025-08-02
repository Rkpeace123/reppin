import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Settings, FileText, Plus, Check } from 'lucide-react';

const ResumeBuilder = () => {
  const [selectedEntries, setSelectedEntries] = useState<number[]>([1, 3, 4]);
  const [resumeTemplate, setResumeTemplate] = useState('modern');

  const journalEntries = [
    {
      id: 1,
      title: 'TechHack 2024 Winner',
      category: 'Achievement',
      date: '2024-01-15',
      description: 'Built a sustainable food delivery app connecting local farmers with consumers',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'React Advanced Course',
      category: 'Learning',
      date: '2024-01-10',
      description: 'Completed advanced React course covering hooks, context, and performance optimization',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      id: 3,
      title: 'Backend Development Internship',
      category: 'Experience',
      date: '2024-01-05',
      description: 'Developed microservices architecture for e-commerce platform at TechCorp',
      tags: ['Node.js', 'Docker', 'AWS']
    },
    {
      id: 4,
      title: 'Open Source Contribution',
      category: 'Project',
      date: '2023-12-20',
      description: 'Contributed to React component library with accessibility improvements',
      tags: ['React', 'TypeScript', 'A11y']
    }
  ];

  const templates = [
    { id: 'modern', name: 'Modern', description: 'Clean and contemporary design' },
    { id: 'classic', name: 'Classic', description: 'Traditional professional layout' },
    { id: 'creative', name: 'Creative', description: 'Bold and eye-catching design' }
  ];

  const toggleEntry = (entryId: number) => {
    setSelectedEntries(prev =>
      prev.includes(entryId)
        ? prev.filter(id => id !== entryId)
        : [...prev, entryId]
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Resume Builder</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Generate professional resumes from your journal entries</p>
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Entry Selection */}
        <div className="lg:col-span-2 space-y-6">
          {/* Template Selection */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Choose Template</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setResumeTemplate(template.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    resumeTemplate === template.id
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  <div className="w-full h-24 bg-gray-100 dark:bg-gray-700 rounded mb-3"></div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{template.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{template.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Entry Selection */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Select Entries ({selectedEntries.length} selected)
            </h2>
            
            <div className="space-y-3">
              {journalEntries.map((entry) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedEntries.includes(entry.id)
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                  onClick={() => toggleEntry(entry.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 ${
                      selectedEntries.includes(entry.id)
                        ? 'border-indigo-600 bg-indigo-600'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}>
                      {selectedEntries.includes(entry.id) && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-gray-900 dark:text-white">{entry.title}</h3>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                          {entry.category}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {entry.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Resume Preview */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 sticky top-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Preview</h2>
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                <Settings className="w-4 h-4" />
              </button>
            </div>
            
            {/* Resume Preview */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4" style={{ aspectRatio: '8.5/11' }}>
              <div className="w-full h-full bg-white dark:bg-gray-800 rounded shadow-sm p-4 text-xs">
                <div className="text-center mb-4">
                  <div className="w-16 h-4 bg-gray-300 dark:bg-gray-600 rounded mx-auto mb-2"></div>
                  <div className="w-24 h-2 bg-gray-200 dark:bg-gray-600 rounded mx-auto"></div>
                </div>
                
                <div className="space-y-3">
                  {selectedEntries.slice(0, 3).map((_, index) => (
                    <div key={index} className="border-b border-gray-200 dark:border-gray-600 pb-2">
                      <div className="w-3/4 h-2 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>
                      <div className="w-full h-1 bg-gray-200 dark:bg-gray-600 rounded mb-1"></div>
                      <div className="w-2/3 h-1 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {selectedEntries.length} entries selected
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
              <FileText className="w-4 h-4" />
              Generate Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;