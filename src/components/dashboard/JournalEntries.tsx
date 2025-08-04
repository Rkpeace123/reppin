import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Calendar, Tag, Image, FileText } from 'lucide-react';

const JournalEntries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [entryType, setEntryType] = useState('achievement');

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

  const handleSubmit = async () => {
    const payload = {
      user_id: 'user123',
      title,
      description,
      type: entryType,
      date: new Date().toISOString()
    };

    try {
      const res = await fetch("https://becoming-ferret-informally.ngrok-free.app/webhook-test/Journal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert("Entry sent successfully!");
        setShowAddForm(false);
      } else {
        alert("Failed to send entry");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to backend.");
    }
  };

  const AddEntryForm = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-300/50 dark:border-gray-700/50 mb-10 shadow-2xl"
    >
      <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">New Journal Entry</h3>
      <div className="space-y-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Entry Title"
          className="w-full px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          placeholder="Write about your experience..."
          className="w-full px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
        />
        <div className="flex gap-4 pt-4">
          <button
            onClick={handleSubmit}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-bold transition hover:scale-105 shadow-xl"
          >
            Save Entry
          </button>
          <button
            onClick={() => setShowAddForm(false)}
            className="px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition shadow-xl hover:scale-105"
          >
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
        <div>
          <h1 className="text-5xl font-black text-gray-900 dark:text-white">Reppin Journal</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Turn everyday moments into professional proof</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-bold hover:scale-105 shadow-xl"
        >
          <Plus className="w-6 h-6" />
          Add Entry
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search entries..."
            className="w-full pl-14 pr-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md">
          <Filter className="w-6 h-6" />
          Filter
        </button>
      </div>

      {showAddForm && <AddEntryForm />}

      <div className="grid gap-8">
        {entries
          .filter((entry) => entry.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{entry.title}</h3>
                <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                  entry.type === 'achievement' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                  entry.type === 'learning' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                  'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                }`}>
                  {entry.type}
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="w-5 h-5" />
                {new Date(entry.date).toLocaleDateString()}
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{entry.content}</p>
              <div className="flex flex-wrap gap-3 mb-4">
                {entry.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200 rounded-full font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
              {entry.attachments.length > 0 && (
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
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
