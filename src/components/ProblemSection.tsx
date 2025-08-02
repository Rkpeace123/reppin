import React from 'react';
import { Trophy, Award, Code } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: Trophy,
      title: "Won a hackathon?",
      subtitle: "Posted once and moved on."
    },
    {
      icon: Award,
      title: "Got a certificate?",
      subtitle: "Lost in email or gallery."
    },
    {
      icon: Code,
      title: "Worked on a project?",
      subtitle: "Never documented it."
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            You do so much. But forget to{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              capture it.
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <problem.icon className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600">
                {problem.subtitle}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Reppin turns your everyday efforts into a shareable, living portfolio.
            </h3>
            <p className="text-indigo-100 text-lg">
              Never lose track of your achievements again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;