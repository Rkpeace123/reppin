import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Ready to start your journey?</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Start Reppin What You've Done.
          </h2>
          
          <p className="text-xl sm:text-2xl text-indigo-100 mb-10 max-w-3xl mx-auto">
            You've done more than you think. Let Reppin help you remember and show it.
          </p>
          
          <button className="group bg-white hover:bg-gray-50 text-indigo-600 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto">
            Start Journaling with AI
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-indigo-200 mt-6">
            Join thousands of students and professionals building their story
          </p>
        </div>
        
        {/* Visual Flow */}
        <div className="mt-16 flex justify-center items-center gap-8 opacity-60">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white text-center">
            <div className="w-16 h-12 bg-white/30 rounded mb-2 mx-auto"></div>
            <span className="text-sm">Journal</span>
          </div>
          
          <ArrowRight className="w-6 h-6 text-white/60" />
          
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white text-center">
            <div className="w-16 h-12 bg-white/30 rounded mb-2 mx-auto"></div>
            <span className="text-sm">Portfolio</span>
          </div>
          
          <ArrowRight className="w-6 h-6 text-white/60" />
          
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white text-center">
            <div className="w-16 h-12 bg-white/30 rounded mb-2 mx-auto"></div>
            <span className="text-sm">Success</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;