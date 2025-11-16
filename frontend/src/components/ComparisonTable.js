import React from 'react';
import { Check, X } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const ComparisonTable = () => {
  const plans = [
    {
      name: 'Basic Package',
      price: 899,
      popular: false,
      features: [
        { name: 'Flight Tickets', included: true },
        { name: 'Hotel (3 Star)', included: true },
        { name: 'Breakfast', included: true },
        { name: 'City Tours', included: false },
        { name: 'Guide', included: false },
        { name: 'Visa Assistance', included: false },
        { name: '24/7 Support', included: false },
      ]
    },
    {
      name: 'Standard Package',
      price: 1299,
      popular: true,
      features: [
        { name: 'Flight Tickets', included: true },
        { name: 'Hotel (4 Star)', included: true },
        { name: 'All Meals', included: true },
        { name: 'City Tours', included: true },
        { name: 'Guide', included: true },
        { name: 'Visa Assistance', included: false },
        { name: '24/7 Support', included: true },
      ]
    },
    {
      name: 'Premium Package',
      price: 1899,
      popular: false,
      features: [
        { name: 'Flight Tickets', included: true },
        { name: 'Hotel (5 Star)', included: true },
        { name: 'All Meals', included: true },
        { name: 'Private Tours', included: true },
        { name: 'Personal Guide', included: true },
        { name: 'Full Visa Service', included: true },
        { name: 'VIP Support', included: true },
      ]
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan, idx) => (
        <Card key={idx} className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
          plan.popular ? 'ring-4 ring-[#d4af37] shadow-2xl' : 'hover:shadow-xl'
        }`}>
          {plan.popular && (
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#d4af37] to-[#c49f27] text-[#1a2f4a] text-center py-2 font-bold text-sm">
              MOST POPULAR
            </div>
          )}
          <CardContent className={`p-6 ${plan.popular ? 'pt-12' : ''}`}>
            <h3 className="text-2xl font-bold text-[#1a2f4a] mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#1a2f4a]">${plan.price}</span>
              <span className="text-gray-500 ml-2">/ person</span>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, fidx) => (
                <li key={fidx} className="flex items-center">
                  {feature.included ? (
                    <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  ) : (
                    <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                  )}
                  <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
            <Button 
              className={`w-full ${
                plan.popular 
                  ? 'bg-[#d4af37] hover:bg-[#c49f27] text-[#1a2f4a]' 
                  : 'bg-[#1a2f4a] hover:bg-[#2a3f5a] text-white'
              }`}
              size="lg"
            >
              Select Plan
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ComparisonTable;