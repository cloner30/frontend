import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Accessibility, Plus } from 'lucide-react';
import { cities, ziyaratPlaces, hotels } from '../mock';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';

const CityGuide = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { toast } = useToast();

  const city = cities.find((c) => c.id === parseInt(id));
  const places = ziyaratPlaces.filter((p) => p.cityId === parseInt(id));
  const cityHotels = hotels.filter((h) => h.city === city?.name);

  if (!city) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-500 mb-4">City not found</p>
            <Button onClick={() => navigate('/ziyarat-guide')}>Back to Guide</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const addToItinerary = (placeName) => {
    toast({
      title: 'Added to Itinerary',
      description: `${placeName} has been added to your trip plan`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-96"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 47, 74, 0.6), rgba(26, 47, 74, 0.6)), url('${city.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <Button
            variant="ghost"
            onClick={() => navigate('/ziyarat-guide')}
            className="self-start mb-6 text-white hover:text-[#ffce05] hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Guide
          </Button>
          <h1 className="text-5xl font-bold text-white mb-3">{city.name}</h1>
          <p className="text-2xl text-gray-200 mb-4">{city.description}</p>
          <div className="flex items-center space-x-2">
            <Badge className="bg-[#ffce05] text-[#1a2f4a] text-base px-4 py-1">
              {city.country}
            </Badge>
            <Badge className="bg-white/20 text-white text-base px-4 py-1">
              {city.popularPlaces} Sacred Places
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Places to Visit */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#1a2f4a] mb-6">Places to Visit</h2>
          <div className="space-y-6">
            {places.map((place) => (
              <Card key={place.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-80 h-64 md:h-auto flex-shrink-0">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-[#1a2f4a] mb-2">
                          {place.name}
                        </h3>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-1 text-[#ffce05]" />
                          <span className="text-sm">{place.distance} km from city center</span>
                        </div>
                      </div>
                      <Button
                        onClick={() => addToItinerary(place.name)}
                        className="bg-[#ffce05] hover:bg-[#c49f27] text-[#1a2f4a]"
                        size="sm"
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Add to Trip
                      </Button>
                    </div>

                    <p className="text-gray-700 mb-4">{place.description}</p>

                    {/* Visiting Tips */}
                    <div className="mb-3">
                      <div className="font-semibold text-[#1a2f4a] mb-1 flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-[#ffce05]" />
                        Visiting Tips
                      </div>
                      <p className="text-sm text-gray-600 ml-6">{place.visitingTips}</p>
                    </div>

                    {/* Accessibility */}
                    <div className="mb-3">
                      <div className="font-semibold text-[#1a2f4a] mb-1 flex items-center">
                        <Accessibility className="h-4 w-4 mr-2 text-[#ffce05]" />
                        Accessibility
                      </div>
                      <p className="text-sm text-gray-600 ml-6">{place.accessibility}</p>
                    </div>

                    {/* Prayer Times */}
                    <div>
                      <div className="font-semibold text-[#1a2f4a] mb-2">Prayer Times</div>
                      <div className="flex flex-wrap gap-2">
                        {place.prayerTimes.map((time, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {time}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Nearby Hotels */}
        {cityHotels.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-[#1a2f4a]">Nearby Accommodations</h2>
              <Link to={`/search?type=hotels&destination=${city.name}`}>
                <Button variant="ghost" className="text-[#1a2f4a] hover:text-[#ffce05]">
                  View All
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityHotels.slice(0, 3).map((hotel) => (
                <Card key={hotel.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg text-[#1a2f4a] mb-2">{hotel.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1 text-[#ffce05]" />
                      <span>{hotel.distanceToShrine} km to shrine</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-[#1a2f4a]">${hotel.price}</span>
                        <span className="text-sm text-gray-500 ml-1">/ night</span>
                      </div>
                      <Link to={`/hotels/${hotel.id}`}>
                        <Button size="sm" className="bg-[#1a2f4a] hover:bg-[#2a3f5a]">
                          View
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CityGuide;