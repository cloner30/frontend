import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, Package, Book, Phone } from 'lucide-react';

const QuickLinks = () => {
  const links = [
    { icon: MapPin, label: 'Ziyarat Guide', to: '/ziyarat-guide', color: 'bg-blue-500' },
    { icon: Calendar, label: 'Plan Trip', to: '/plan-trip', color: 'bg-green-500' },
    { icon: Users, label: 'Group Tours', to: '/groups', color: 'bg-purple-500' },
    { icon: Package, label: 'Packages', to: '/packages', color: 'bg-orange-500' },
    { icon: Book, label: 'My Bookings', to: '/account', color: 'bg-pink-500' },
    { icon: Phone, label: 'Contact Us', to: '/contact', color: 'bg-cyan-500' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {links.map((link, idx) => {
        const Icon = link.icon;
        return (
          <Link key={idx} to={link.to}>
            <div className="group cursor-pointer">
              <div className={`${link.color} rounded-2xl p-6 text-white text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                <Icon className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm font-semibold">{link.label}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default QuickLinks;