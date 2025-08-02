import React from 'react';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TrustSection />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <UseCases />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;