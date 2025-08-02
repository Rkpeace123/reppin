import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import PublicProfile from './pages/PublicProfile';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/:username" element={<PublicProfile />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;