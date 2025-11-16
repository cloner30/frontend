import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Hotel, Navigation } from 'lucide-react';
import { cities } from '../mock';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const ZiyaratGuide = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1a2f4a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">{t('ziyaratGuideTitle')}</h1>
          <p className="text-gray-300 text-lg">
            Comprehensive guide to holy sites across Iran and Iraq
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-l-4 border-[#d4af37]">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 text-[#d4af37] mb-3" />
              <h3 className="font-bold text-lg text-[#1a2f4a] mb-2">Sacred Sites</h3>
              <p className="text-gray-600 text-sm">
                Visit the most revered shrines and historical locations
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-[#d4af37]">
            <CardContent className="p-6">
              <Navigation className="h-8 w-8 text-[#d4af37] mb-3" />
              <h3 className="font-bold text-lg text-[#1a2f4a] mb-2">Guided Tours</h3>
              <p className="text-gray-600 text-sm">
                Detailed information and visiting tips for each location
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-[#d4af37]">
            <CardContent className="p-6">
              <Hotel className="h-8 w-8 text-[#d4af37] mb-3" />
              <h3 className="font-bold text-lg text-[#1a2f4a] mb-2">Accommodations</h3>
              <p className="text-gray-600 text-sm">
                Find nearby hotels and plan your stay
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Cities Grid */}
        <div>
          <h2 className="text-2xl font-bold text-[#1a2f4a] mb-6">Explore by City</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link key={city.id} to={`/ziyarat-guide/${city.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative h-56">
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{city.name}</h3>
                      <p className="text-gray-200 text-sm mb-2">{city.country}</p>
                      <Badge className="bg-[#d4af37] text-[#1a2f4a]">
                        {city.popularPlaces} {t('popularPlaces')}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-gray-600 mb-4">{city.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-500">
                        <Hotel className="h-4 w-4 mr-1" />
                        <span>{city.hotels} hotels</span>
                      </div>
                      <span className="text-[#d4af37] font-medium">{t('exploreCity')} →</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZiyaratGuide;