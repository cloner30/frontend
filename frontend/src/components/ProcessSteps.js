import React from 'react';
import { Search, Calendar, CreditCard, CheckCircle } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      icon: Search,
      title: 'Search & Compare',
      description: 'Browse through our curated pilgrimage packages and find the perfect journey',
      color: 'bg-blue-500'
    },
    {
      icon: Calendar,
      title: 'Select Dates',
      description: 'Choose your preferred travel dates and customize your itinerary',
      color: 'bg-green-500'
    },
    {
      icon: CreditCard,
      title: 'Secure Booking',
      description: 'Complete your booking with our secure payment system',
      color: 'bg-purple-500'
    },
    {
      icon: CheckCircle,
      title: 'Enjoy Journey',
      description: 'Embark on your spiritual journey with complete peace of mind',
      color: 'bg-orange-500'
    },
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="relative">
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-[#ffce05] to-transparent -ml-8" />
              )}
              
              <div className="text-center">
                <div className={`${step.color} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-12 w-12 text-white" />
                </div>
                <div className="absolute top-8 right-0 bg-[#1a2f4a] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#1a2f4a] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessSteps;