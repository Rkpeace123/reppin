import React from 'react';
import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started with portfolio building",
      features: [
        "Unlimited journal entries",
        "AI-powered portfolio organization",
        "Basic shareable profile",
        "Certificate uploads",
        "Mobile app access"
      ],
      cta: "Start for Free",
      popular: false
    },
    {
      name: "Pro",
      price: "₹299",
      period: "per month",
      description: "Everything you need to stand out professionally",
      features: [
        "Everything in Free",
        "Resume builder with PDF export",
        "LinkedIn post generator",
        "Portfolio analytics",
        "Custom themes and branding",
        "Priority AI processing",
        "Advanced sharing options",
        "Weekly insights reports"
      ],
      cta: "Try Pro Free",
      popular: true
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you're ready to unlock your full potential
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-3xl p-8 ${plan.popular ? 'ring-2 ring-indigo-600 shadow-2xl scale-105' : 'shadow-lg'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 ${
                plan.popular
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg'
                  : 'bg-gray-900 hover:bg-gray-800 text-white'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Try for Free — No Credit Card Required
          </p>
          <p className="text-sm text-gray-500">
            Cancel anytime. All plans include 24/7 support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;