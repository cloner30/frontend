import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { cities } from '../mock';

const PopularDestinations = () => {
  const popularCities = cities.slice(0, 4).map((city, idx) => ({
    ...city,
    trending: idx === 0,
    bookings: [245, 189, 312, 156][idx],
    rating: [4.9, 4.8, 4.9, 4.7][idx]
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {popularCities.map((city) => (
        <Link key={city.id} to={`/ziyarat-guide/${city.id}`}>
          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
              
              {/* Trending Badge */}
              {city.trending && (
                <Badge className="absolute top-3 left-3 bg-red-500 text-white animate-pulse">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Trending
                </Badge>
              )}
              
              {/* Rating */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="font-semibold text-sm">{city.rating}</span>
              </div>
              
              {/* City Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-2xl font-bold text-white mb-1">{city.name}</h3>
                <div className="flex items-center text-gray-200 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{city.country}</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">{city.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">{city.bookings}+ bookings</span>
                  <span className="text-[#d4af37] font-semibold group-hover:text-white transition-colors">
                    Explore →
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default PopularDestinations;