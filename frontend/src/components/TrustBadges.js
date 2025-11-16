import React from 'react';
import { Shield, Award, CheckCircle, Lock, Phone, Globe } from 'lucide-react';
import { Card } from './ui/card';

const TrustBadges = () => {
  const badges = [
    { icon: Shield, text: 'Secure Booking', color: 'text-green-600' },
    { icon: Lock, text: 'SSL Encrypted', color: 'text-blue-600' },
    { icon: Award, text: 'Award Winning', color: 'text-yellow-600' },
    { icon: CheckCircle, text: 'Verified Reviews', color: 'text-green-600' },
    { icon: Phone, text: '24/7 Support', color: 'text-purple-600' },
    { icon: Globe, text: 'Global Coverage', color: 'text-cyan-600' },
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <Card key={idx} className="text-center p-4 hover:shadow-lg transition-shadow duration-300 border-t-2 border-transparent hover:border-[#d4af37]">
                <Icon className={`h-8 w-8 mx-auto mb-2 ${badge.color}`} />
                <p className="text-xs font-semibold text-gray-700">{badge.text}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;