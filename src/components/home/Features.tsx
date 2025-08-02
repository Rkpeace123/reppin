import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Image, 
  FolderOpen, 
  MessageSquare, 
  FileText, 
  Link, 
  Lock, 
  Calendar,
  Zap,
  Users
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Journal",
      description: "Smart algorithms transform your daily entries into professional portfolio content",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Image,
      title: "Visual Memory",
      description: "Upload certificates, photos, and documents with automatic organization",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FolderOpen,
      title: "Smart Organization",
      description: "Intelligent categorization by projects, skills, and career objectives",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageSquare,
      title: "LinkedIn Generator",
      description: "Generate engaging LinkedIn content from your achievements",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FileText,
      title: "Resume Builder",
      description: "Create professional resumes in multiple formats instantly",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Link,
      title: "Shareable Profile",
      description: "Beautiful public portfolio at reppin.ai/yourname",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "You control what's public and what stays private",
      color: "from-gray-500 to-slate-500"
    },
    {
      icon: Calendar,
      title: "Daily Habits",
      description: "Build consistent journaling habits with smart reminders",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Capture experiences in seconds, not minutes",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with other students and professionals",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Showcase Yourself
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Powerful features designed to make portfolio building effortless and automatic
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;