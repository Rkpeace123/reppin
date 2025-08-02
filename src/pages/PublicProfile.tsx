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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-32 h-32 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700"
            />
            
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                {profile.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl text-lg leading-relaxed">
                {profile.bio}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  {profile.university}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Joined {new Date(profile.joinedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </div>
              </div>
              
              <div className="flex gap-4">
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${profile.social.email}`}
                  className="p-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl hover:bg-green-200 dark:hover:bg-green-900/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {categories.map((category) => {
            const count = experiences.filter(exp => exp.category === category.id).length;
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 text-center border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-black text-gray-900 dark:text-white mb-2">
                  {count}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {category.name}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Experiences */}
        <div className="space-y-12">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tight">Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => {
              const Icon = getCategoryIcon(experience.category);
              const colorClass = getCategoryColor(experience.category);
              
              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${colorClass} rounded-xl flex items-center justify-center shadow-xl`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        {experience.title}
                      </h3>
                      <span className="text-gray-500 dark:text-gray-400 font-medium">
                        {new Date(experience.date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      {experience.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-600 dark:text-gray-300 text-sm rounded-full font-medium shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full shadow-sm"></div>
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
          className="mt-20 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative">
            <h3 className="text-3xl lg:text-4xl font-black mb-6 tracking-tight">Create Your Own Portfolio</h3>
            <p className="text-indigo-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Start journaling your experiences and let AI build your professional portfolio automatically.
          </p>
          <Link
            to="/"
              className="inline-flex items-center gap-3 bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
          >
            Get Started Free
              <ExternalLink className="w-6 h-6" />
          </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PublicProfile;