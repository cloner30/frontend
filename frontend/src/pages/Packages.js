import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin } from 'lucide-react';
import { packages } from '../mock';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Packages = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1a2f4a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">{t('featuredPackages')}</h1>
          <p className="text-gray-300 text-lg">
            Complete pilgrimage packages with flights, hotels, and guided tours
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-80">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-semibold text-sm">{pkg.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-2xl font-bold text-white mb-2">{pkg.title}</h2>
                  <div className="flex items-center text-gray-200">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{pkg.description}</p>

                {/* Cities */}
                <div className="mb-4">
                  <div className="font-semibold text-[#1a2f4a] mb-2">Cities Covered</div>
                  <div className="flex flex-wrap gap-2">
                    {pkg.cities.map((city, idx) => (
                      <Badge key={idx} className="bg-[#1a2f4a] text-white">
                        {city}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Inclusions */}
                <div className="mb-6">
                  <div className="font-semibold text-[#1a2f4a] mb-2">Package Includes</div>
                  <div className="flex flex-wrap gap-2">
                    {pkg.inclusions.slice(0, 4).map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                    {pkg.inclusions.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{pkg.inclusions.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-sm text-gray-500">{t('from')}</span>
                    <div className="text-3xl font-bold text-[#1a2f4a]">${pkg.price}</div>
                    <span className="text-sm text-gray-500">{t('perPerson')}</span>
                  </div>
                  <Link to={`/packages/${pkg.id}`}>
                    <Button className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]" size="lg">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;