import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SearchWidget from '../components/SearchWidget';
import { upcomingGroups, packages, cities, testimonials } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 47, 74, 0.7), rgba(26, 47, 74, 0.7)), url('https://images.unsplash.com/photo-1761475878231-32efb0aeff5d')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Sacred Pilgrimage Journeys
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Experience spiritual connection through guided Ziyarat to Iran & Iraq
            </p>
          </div>
          <SearchWidget />
        </div>
      </div>

      {/* Plan Your Trip Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-3 text-[#ffce05]">{t('planYourTrip')}</h2>
              <p className="text-gray-200 text-lg">{t('planYourTripDesc')}</p>
            </div>
            <Link to="/plan-trip">
              <Button
                size="lg"
                className="bg-[#ffce05] hover:bg-[#c49f27] text-[#1a2f4a] font-semibold"
              >
                {t('startPlanning')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Upcoming Groups */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[#1a2f4a]">{t('upcomingGroups')}</h2>
          <Link to="/groups">
            <Button variant="ghost" className="text-[#1a2f4a] hover:text-[#ffce05]">
              {t('viewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingGroups.map((group) => (
            <Card key={group.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={group.image}
                  alt={group.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                  {group.seatsLeft} {t('seatsLeft')}
                </Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-2 text-[#1a2f4a]">{group.title}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-[#ffce05]" />
                    <span>
                      {new Date(group.departure).toLocaleDateString()} -{' '}
                      {new Date(group.return).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-[#ffce05]" />
                    <span>{group.cities.join(', ')}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-[#1a2f4a]">
                      ${group.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">{t('perPerson')}</span>
                  </div>
                  <Link to={`/groups/${group.id}`}>
                    <Button className="bg-[#1a2f4a] hover:bg-[#2a3f5a]">
                      {t('bookNow')}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Packages */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#1a2f4a]">{t('featuredPackages')}</h2>
            <Link to="/packages">
              <Button variant="ghost" className="text-[#1a2f4a] hover:text-[#ffce05]">
                {t('viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.slice(0, 2).map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex items-center space-x-1 bg-white px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-semibold text-sm">{pkg.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-[#1a2f4a]">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.cities.map((city, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-[#1a2f4a] text-white">
                        {city}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">{t('from')}</span>
                      <div className="text-2xl font-bold text-[#1a2f4a]">
                        ${pkg.price}
                      </div>
                      <span className="text-sm text-gray-500">{pkg.duration}</span>
                    </div>
                    <Link to={`/packages/${pkg.id}`}>
                      <Button className="bg-[#ffce05] hover:bg-[#c49f27] text-[#1a2f4a]">
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

      {/* Ziyarat Guide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#1a2f4a] mb-3">{t('ziyaratGuideTitle')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore sacred cities and plan your spiritual journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cities.map((city) => (
            <Link key={city.id} to={`/ziyarat-guide/${city.id}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative h-32">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="font-bold text-white text-sm">{city.name}</h3>
                    <p className="text-xs text-gray-300">{city.country}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-[#1a2f4a] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#ffce05] text-center mb-8">
            {t('testimonials')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-[#1a2f4a]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                    <div className="text-xs text-gray-400 mt-1">{testimonial.trip}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;