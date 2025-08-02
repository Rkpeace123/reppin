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
    <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Showcase Yourself
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Powerful features designed to make portfolio building effortless and automatic
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
            >
              {/* Background glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="relative text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="relative text-gray-600 dark:text-gray-300 leading-relaxed">
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