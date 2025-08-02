import React from 'react';
import { PenTool, Brain, Share2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: PenTool,
      title: "Log Your Experience",
      description: "Add a quick journal entry — upload a certificate, event photo, or just type what you did.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "AI Organizes Everything",
      description: "Reppin tags it, summarizes it, and files it neatly into your portfolio.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Share2,
      title: "Share or Repurpose",
      description: "Get a LinkedIn post, resume update, or publish it to your public Reppin page.",
      color: "from-blue-500 to-cyan-500"
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform your daily experiences into a powerful portfolio
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                <div className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-gray-100 text-gray-600 text-sm font-medium px-4 py-2 rounded-full mb-4">
                    Step {index + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* UI Screenshots Preview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 h-48">
            <div className="w-full h-6 bg-gray-200 rounded mb-4"></div>
            <div className="w-3/4 h-4 bg-gray-200 rounded mb-3"></div>
            <div className="w-1/2 h-4 bg-gray-200 rounded mb-6"></div>
            <div className="w-full h-20 bg-gradient-to-r from-indigo-100 to-blue-100 rounded"></div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 h-48">
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="w-full h-8 bg-gray-200 rounded"></div>
              ))}
            </div>
            <div className="w-full h-16 bg-gradient-to-r from-purple-100 to-indigo-100 rounded"></div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 h-48">
            <div className="w-full h-4 bg-gray-200 rounded mb-3"></div>
            <div className="w-5/6 h-4 bg-gray-200 rounded mb-3"></div>
            <div className="w-4/5 h-4 bg-gray-200 rounded mb-6"></div>
            <div className="w-full h-20 bg-gradient-to-r from-blue-100 to-cyan-100 rounded"></div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 h-48">
            <div className="flex justify-between items-center mb-4">
              <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
              <div className="w-12 h-8 bg-indigo-200 rounded"></div>
            </div>
            <div className="w-full h-28 bg-gradient-to-r from-cyan-100 to-blue-100 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;