import React from 'react';
import { Brain, Image, FolderOpen, MessageSquare, FileText, Link, Lock, Calendar } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Journal-to-Portfolio",
      description: "Smart algorithms transform your daily entries into professional portfolio content"
    },
    {
      icon: Image,
      title: "Certificate and Image Upload",
      description: "Upload certificates, photos, and documents with automatic organization"
    },
    {
      icon: FolderOpen,
      title: "Auto-Organized by Role/Goal",
      description: "Intelligent categorization by projects, skills, and career objectives"
    },
    {
      icon: MessageSquare,
      title: "Smart LinkedIn Post Generator",
      description: "Generate engaging LinkedIn content from your achievements"
    },
    {
      icon: FileText,
      title: "Resume Generator (PDF + Web)",
      description: "Create professional resumes in multiple formats instantly"
    },
    {
      icon: Link,
      title: "Shareable Profile Page",
      description: "Beautiful public portfolio at reppin.ai/yourname"
    },
    {
      icon: Lock,
      title: "Private by Default",
      description: "You control what's public and what stays private"
    },
    {
      icon: Calendar,
      title: "Daily Streaks & Reminders",
      description: "Build consistent journaling habits with smart reminders"
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Showcase Yourself
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to make portfolio building effortless and automatic
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;