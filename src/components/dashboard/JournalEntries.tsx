import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Calendar } from 'lucide-react';

const JournalEntries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [newEntry, setNewEntry] = useState({ title: '', description: '', tags: [] as string[] });
  const [entries, setEntries] = useState<typeof newEntry[]>([]);

  const addEntry = () => {
    if (!newEntry.title || !newEntry.description) return;
    setEntries([newEntry, ...entries]);
    setNewEntry({ title: '', description: '', tags: [] });
    setShowForm(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Reppin Journal</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          <Plus /> Add Entry
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search by title or tags"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* New Entry Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 bg-white p-6 rounded-lg shadow-md mb-6"
        >
          <input
            value={newEntry.title}
            onChange={e => setNewEntry({ ...newEntry, title: e.target.value })}
            placeholder='Title (e.g., "Attended React Meetup")'
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            value={newEntry.description}
            onChange={e => setNewEntry({ ...newEntry, description: e.target.value })}
            rows={3}
            placeholder="Brief note (max 200 characters)"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
          <input
            value={newEntry.tags.join(',')}
            onChange={e => setNewEntry({ ...newEntry, tags: e.target.value.split(',') })}
            placeholder="Tags (comma separated, e.g., react, workshop)"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="flex gap-4">
            <button
              onClick={addEntry}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Save
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      )}

      {/* Entries List */}
      <div className="space-y-4">
        {entries
          .filter(
            e =>
              e.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              e.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
          )
          .map((entry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{entry.title}</h2>
                <span className="text-sm text-gray-500 flex items-center">
                  <Calendar className="mr-1" />
                  {new Date().toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700 mb-2">{entry.description}</p>
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default JournalEntries;
