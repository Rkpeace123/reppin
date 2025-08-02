import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Share, Edit, RefreshCw, ThumbsUp, MessageCircle, Send } from 'lucide-react';

const LinkedInPosts = () => {
  const [selectedEntry, setSelectedEntry] = useState(1);
  const [generatedPost, setGeneratedPost] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const journalEntries = [
    {
      id: 1,
      title: 'TechHack 2024 Winner',
      date: '2024-01-15',
      description: 'Built a sustainable food delivery app connecting local farmers with consumers',
      tags: ['hackathon', 'web-dev', 'react']
    },
    {
      id: 2,
      title: 'Backend Development Internship',
      date: '2024-01-05',
      description: 'Started internship at TechCorp working on microservices architecture',
      tags: ['internship', 'backend', 'node.js']
    },
    {
      id: 3,
      title: 'Open Source Contribution',
      date: '2023-12-20',
      description: 'Contributed to React component library with accessibility improvements',
      tags: ['opensource', 'react', 'accessibility']
    }
  ];

  const samplePosts = [
    {
      id: 1,
      content: `🏆 Thrilled to share that our team won first place at TechHack 2024! 

We built a sustainable food delivery platform that directly connects local farmers with consumers, reducing food waste by 40% and supporting local agriculture.

The 48-hour hackathon was intense, but seeing our solution come to life was incredibly rewarding. Special thanks to my amazing teammates and the organizers for creating such an inspiring environment.

Key takeaways:
✅ Collaboration is everything
✅ Sustainable tech solutions can drive real impact
✅ Never underestimate the power of a good coffee break ☕

Excited to continue developing this project and explore its potential for real-world implementation!

#TechHack2024 #Sustainability #Innovation #Teamwork #WebDevelopment`,
      engagement: { likes: 127, comments: 23, shares: 8 },
      status: 'published'
    },
    {
      id: 2,
      content: `🚀 Day 1 at TechCorp as a Backend Development Intern!

Starting this new chapter with excitement and curiosity. Today I dove into their microservices architecture and I'm already impressed by the scale and complexity of the systems.

Looking forward to:
• Learning from experienced engineers
• Contributing to meaningful projects
• Growing my skills in distributed systems
• Building something that impacts millions of users

The onboarding process has been fantastic - shoutout to the team for making me feel welcome from day one!

#Internship #BackendDevelopment #TechCorp #LearningJourney #Microservices`,
      engagement: { likes: 89, comments: 15, shares: 4 },
      status: 'draft'
    }
  ];

  const generatePost = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const entry = journalEntries.find(e => e.id === selectedEntry);
      if (entry) {
        const newPost = `🎉 Excited to share my latest achievement!

${entry.description}

This experience taught me so much about ${entry.tags.join(', ')} and reinforced my passion for technology and innovation.

Key learnings:
✅ Persistence pays off
✅ Great things happen when you step out of your comfort zone
✅ The tech community is incredibly supportive

Grateful for this opportunity and excited for what's next!

#${entry.tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1)).join(' #')} #TechJourney #Growth`;
        
        setGeneratedPost(newPost);
      }
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">LinkedIn Posts</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Generate engaging LinkedIn content from your achievements</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Entry Selection & Generation */}
        <div className="space-y-6">
          {/* Entry Selection */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Select Entry to Convert</h2>
            
            <div className="space-y-3">
              {journalEntries.map((entry) => (
                <button
                  key={entry.id}
                  onClick={() => setSelectedEntry(entry.id)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    selectedEntry === entry.id
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">{entry.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{entry.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
            
            <button
              onClick={generatePost}
              disabled={isGenerating}
              className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-lg font-medium transition-colors"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate LinkedIn Post
                </>
              )}
            </button>
          </div>

          {/* Generated Post */}
          {generatedPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Generated Post</h2>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300 font-sans">
                  {generatedPost}
                </pre>
              </div>
              
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  <Send className="w-4 h-4" />
                  Post to LinkedIn
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  Save as Draft
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Right Column - Previous Posts */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Previous Posts</h2>
            
            <div className="space-y-4">
              {samplePosts.map((post) => (
                <div
                  key={post.id}
                  className="border border-gray-200 dark:border-gray-600 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.status === 'published'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                    }`}>
                      {post.status}
                    </span>
                    
                    <div className="flex gap-2">
                      <button className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                        <Edit className="w-3 h-3" />
                      </button>
                      <button className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                        <Share className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-4">
                    {post.content}
                  </p>
                  
                  {post.status === 'published' && (
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3" />
                        {post.engagement.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {post.engagement.comments}
                      </div>
                      <div className="flex items-center gap-1">
                        <Share className="w-3 h-3" />
                        {post.engagement.shares}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInPosts;