import React, { useState } from 'react';
import { GraduationCap, Briefcase, Code, Palette } from 'lucide-react';

const UseCases = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const useCases = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Showcase campus activities, internships, events",
      quote: "Finally, all my college achievements in one place!",
      author: "Arjun, Final Year CS",
      features: ["Track hackathons and competitions", "Document internship experiences", "Showcase academic projects", "Build network connections"]
    },
    {
      icon: Briefcase,
      title: "Professionals",
      description: "Capture projects, courses, recognitions",
      quote: "My promotion review became so much easier with Reppin.",
      author: "Sarah, Product Manager",
      features: ["Document career milestones", "Track skill development", "Showcase team projects", "Prepare for reviews"]
    },
    {
      icon: Code,
      title: "Developers",
      description: "Log hackathons, open source, side-projects",
      quote: "Every commit, every deploy, every win — all captured automatically.",
      author: "Rahul, Full-Stack Developer",
      features: ["Track coding projects", "Document technical skills", "Showcase open source work", "Build developer brand"]
    },
    {
      icon: Palette,
      title: "Creators",
      description: "Archive content, collabs, community work",
      quote: "From idea to impact — Reppin helps me tell my creative story.",
      author: "Maya, Content Creator",
      features: ["Document creative projects", "Track collaborations", "Showcase community impact", "Build creator portfolio"]
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Built for Every Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're starting out or scaling up, Reppin adapts to your unique path
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {useCases.map((useCase, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === index
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <useCase.icon className="w-5 h-5" />
              {useCase.title}
            </button>
          ))}
        </div>
        
        {/* Active Tab Content */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center">
                  {React.createElement(useCases[activeTab].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {useCases[activeTab].title}
                  </h3>
                  <p className="text-gray-600">
                    {useCases[activeTab].description}
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 mb-6">
                <p className="text-lg text-gray-700 italic mb-4">
                  "{useCases[activeTab].quote}"
                </p>
                <p className="text-sm text-gray-500">
                  — {useCases[activeTab].author}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {useCases[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mock UI */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-indigo-100 rounded-full"></div>
                <div>
                  <div className="w-24 h-3 bg-gray-200 rounded mb-1"></div>
                  <div className="w-16 h-2 bg-gray-100 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border border-gray-100 rounded-lg p-4">
                    <div className="w-3/4 h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="w-1/2 h-2 bg-gray-100 rounded mb-3"></div>
                    <div className="flex gap-2">
                      <div className="w-16 h-6 bg-indigo-100 rounded-full"></div>
                      <div className="w-20 h-6 bg-blue-100 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;