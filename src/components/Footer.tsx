import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Heart } from 'lucide-react';

const Footer = () => {
  const links = [
    { title: 'Privacy', href: '/privacy' },
    { title: 'Terms', href: '/terms' },
    { title: 'Support', href: '/support' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Reppin</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Turn your daily experiences into a portfolio that evolves with you.
            </p>
          </div>
          
          {/* Links */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-8">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>to help students, professionals, and builders own their story.</span>
          </div>
          
          <div className="text-gray-500 text-sm">
            © 2024 Reppin. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;