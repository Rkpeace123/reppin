import React from 'react';
import { Star } from 'lucide-react';

const TrustSection = () => {
  const companies = ['Google', 'Microsoft', 'Meta', 'Netflix', 'Spotify'];
  const universities = ['SRM', 'IITM', 'BITS', 'NIT', 'IIIT'];
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-8">
            Loved by students and professionals from
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {universities.map((uni) => (
              <div key={uni} className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {uni}
              </div>
            ))}
            {companies.map((company) => (
              <div key={company} className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {company}
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-lg text-gray-700 italic mb-4">
              "I never thought daily journaling would build my resume — Reppin makes it effortless."
            </p>
            <p className="text-sm text-gray-500">
              — Priya, SRM University
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;