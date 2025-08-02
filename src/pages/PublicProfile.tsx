import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Github, Linkedin, Mail, Calendar, MapPin, Award, Code, GraduationCap } from 'lucide-react';

const PublicProfile = () => {
  const { username } = useParams();

  const profile = {
    name: 'Alex Johnson',
    username: 'alexjohnson',
    bio: 'Passionate computer science student with a love for web development and AI. Always eager to learn new technologies and contribute to meaningful projects.',
    location: 'Chennai, India',
    university: 'SRM University',
    field: 'Computer Science',
    joinedDate: '2023-09-15',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    social: {
      linkedin: 'https://linkedin.com/in/alexjohnson',
      github: 'https://github.com/alexjohnson',
      email: 'alex@example.com'
    }
  };

  const experiences = [
    {
      id: 1,
      title: 'TechHack 2024 Winner',
      category: 'hackathon',
      date: '2024-01-15',
      description: 'Built a sustainable food delivery app connecting local farmers with consumers, reducing food waste by 40%.',
      tags: ['React', 'Node.js', 'MongoDB', 'Sustainability'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      achievements: ['1st Place', '₹50,000 Prize', 'Best Innovation Award']
    },
    {
      id: 2,
      title: 'Backend Development Internship',
      category: 'internship',
      date: '2024-01-05',
      description: 'Developed microservices architecture for e-commerce platform serving 1M+ users at TechCorp.',
      tags: ['Node.js', 'Docker', 'AWS', 'Microservices'],
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      achievements: ['Performance Optimization', 'System Architecture', 'Team Collaboration']
    },
    {
      id: 3,
      title: 'Open Source Contribution',
      category: 'project',
      date: '2023-12-20',
      description: 'Contributed to React component library with accessibility improvements, impacting 10K+ developers.',
      tags: ['React', 'TypeScript', 'A11y', 'Open Source'],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      achievements: ['500+ GitHub Stars', 'Community Recognition', 'Accessibility Champion']
    },
    {
      id: 4,
      title: 'Machine Learning Workshop',
      category: 'learning',
      date: '2023-12-10',
      description: 'Completed advanced ML workshop focusing on neural networks and deep learning applications.',
      tags: ['Python', 'TensorFlow', 'ML', 'Deep Learning'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      achievements: ['Certificate of Excellence', 'Top 5% Performance', 'Project Showcase']
    }
  ];

  const categories = [
    { id: 'hackathon', name: 'Hackathons', icon: Award, color: 'from-yellow-500 to-orange-500' },
    { id: 'internship', name: 'Internships', icon: Code, color: 'from-blue-500 to-indigo-500' },
    { id: 'project', name: 'Projects', icon: Github, color: 'from-green-500 to-emerald-500' },
    { id: 'learning', name: 'Learning', icon: GraduationCap, color: 'from-purple-500 to-pink-500' }
  ];

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Award;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {profile.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl">
                {profile.bio}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4" />
                  {profile.university}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined {new Date(profile.joinedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </div>
              </div>
              
              <div className="flex gap-3">
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${profile.social.email}`}
                  className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => {
            const count = experiences.filter(exp => exp.category === category.id).length;
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {count}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {category.name}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Experiences */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((experience, index) => {
              const Icon = getCategoryIcon(experience.category);
              const colorClass = getCategoryColor(experience.category);
              
              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className={`w-10 h-10 bg-gradient-to-r ${colorClass} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {experience.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(experience.date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Create Your Own Portfolio</h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Start journaling your experiences and let AI build your professional portfolio automatically.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            Get Started Free
            <ExternalLink className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PublicProfile;