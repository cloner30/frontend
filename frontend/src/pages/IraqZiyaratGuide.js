import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, Clock, Calendar, Info, Camera, ShoppingBag, Utensils, 
  Phone, AlertCircle, Heart, Star, ChevronDown, ChevronRight,
  Home, Bus, Shield, Book, Globe, Users, Navigation, CheckCircle,
  ArrowLeft, Map as MapIcon, Building, DollarSign, Languages
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { iraqCities, ziyaratSites, practicalInfo, culturalTips, emergencyContacts } from '../data/iraqZiyaratData';
import { use3DTilt } from '../hooks/use3DTilt';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const IraqZiyaratGuide = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState(null);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSelectedSite(null);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleSiteSelect = (site) => {
    setSelectedSite(site);
    setActiveTab('overview');
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  const citySites = selectedCity 
    ? ziyaratSites.filter(site => site.cityId === selectedCity.id)
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 47, 74, 0.85), rgba(26, 47, 74, 0.85)), url('https://images.unsplash.com/photo-1711594937687-eed59068e043')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <Badge className="bg-[#d4af37] text-[#1a2f4a] mb-4">
              COMPREHENSIVE GUIDE
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Iraq Ziyarat Guide
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6">
              Complete information for sacred pilgrimages to Iraq's holiest shrines
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                4 Major Cities
              </div>
              <div className="flex items-center">
                <Building className="h-5 w-5 mr-2" />
                10+ Holy Sites
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                25M+ Annual Pilgrims
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-white shadow-md py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="text-[#1a2f4a]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center space-x-4 text-sm">
              <a href="#cities" className="hover:text-[#d4af37] transition-colors">Cities</a>
              <a href="#practical" className="hover:text-[#d4af37] transition-colors">Practical Info</a>
              <a href="#tips" className="hover:text-[#d4af37] transition-colors">Tips</a>
              <a href="#emergency" className="hover:text-[#d4af37] transition-colors">Emergency</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* City Selection */}
        <div id="cities" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-[#1a2f4a] mb-3">
              Select Your Destination
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose a city to explore its holy shrines, facilities, and practical information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iraqCities.map((city) => {
              const tiltRef = use3DTilt({ maxTilt: 10, scale: 1.05 });
              const isSelected = selectedCity?.id === city.id;

              return (
                <Card
                  key={city.id}
                  ref={tiltRef}
                  onClick={() => handleCitySelect(city)}
                  className={`cursor-pointer overflow-hidden transition-all duration-300 ${
                    isSelected ? 'ring-4 ring-[#d4af37] shadow-2xl' : 'hover:shadow-xl'
                  }`}
                >
                  <div className="relative h-56">
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    {isSelected && (
                      <div className="absolute top-4 right-4 bg-[#d4af37] rounded-full p-2">
                        <CheckCircle className="h-6 w-6 text-[#1a2f4a]" />
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {city.name}
                      </h3>
                      <p className="text-sm text-gray-200 mb-2">{city.nameArabic}</p>
                      <Badge className="bg-[#d4af37] text-[#1a2f4a]">
                        {city.province}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                      {city.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        <MapPin className="inline h-4 w-4 mr-1" />
                        {city.population}
                      </span>
                      <Button size="sm" variant="ghost" className="text-[#d4af37]">
                        Explore <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* City Details & Sites */}
        {selectedCity && (
          <div className="mb-16 animate-fadeIn">
            {/* City Overview Card */}
            <Card className="mb-8 border-l-4 border-[#d4af37]">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold text-[#1a2f4a] mb-4">
                      {selectedCity.name} - {selectedCity.nameArabic}
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {selectedCity.significance}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <Calendar className="h-5 w-5 text-[#d4af37] mt-1" />
                        <div>
                          <div className="font-semibold text-sm">Best Time</div>
                          <div className="text-sm text-gray-600">
                            {selectedCity.bestTimeToVisit}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Navigation className="h-5 w-5 text-[#d4af37] mt-1" />
                        <div>
                          <div className="font-semibold text-sm">Airport</div>
                          <div className="text-sm text-gray-600">
                            {selectedCity.airportDistance}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <DollarSign className="h-5 w-5 text-[#d4af37] mt-1" />
                        <div>
                          <div className="font-semibold text-sm">Currency</div>
                          <div className="text-sm text-gray-600">
                            {selectedCity.currency}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Languages className="h-5 w-5 text-[#d4af37] mt-1" />
                        <div>
                          <div className="font-semibold text-sm">Languages</div>
                          <div className="text-sm text-gray-600">
                            {selectedCity.languages.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-bold text-[#1a2f4a] mb-4 flex items-center">
                      <Phone className="h-5 w-5 mr-2" />
                      Emergency Contacts
                    </h3>
                    <div className="space-y-2 text-sm">
                      {selectedCity.emergencyNumbers && Object.entries(selectedCity.emergencyNumbers).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="capitalize">{key}:</span>
                          <a href={`tel:${value}`} className="font-semibold text-[#d4af37]">
                            {value}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sacred Sites */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#1a2f4a] mb-6 flex items-center">
                <Building className="h-6 w-6 mr-3 text-[#d4af37]" />
                Sacred Sites in {selectedCity.name}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {citySites.map((site) => (
                  <Card
                    key={site.id}
                    onClick={() => handleSiteSelect(site)}
                    className={`cursor-pointer hover:shadow-xl transition-all ${
                      selectedSite?.id === site.id ? 'ring-2 ring-[#d4af37]' : ''
                    }`}
                  >
                    <div className="relative h-48">
                      <img
                        src={site.image}
                        alt={site.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <Badge className={`absolute top-4 left-4 ${
                        site.importance === 'Highest' ? 'bg-red-500' : 'bg-blue-500'
                      } text-white`}>
                        {site.importance} Importance
                      </Badge>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-xl font-bold text-white">{site.name}</h4>
                        <p className="text-sm text-gray-200">{site.nameArabic}</p>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                        {site.description}
                      </p>
                      <Button size="sm" className="w-full bg-[#1a2f4a] hover:bg-[#2a3f5a]">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Detailed Site Information */}
        {selectedSite && (
          <div className="mb-16 animate-fadeIn">
            <Card className="overflow-hidden">
              {/* Site Header */}
              <div className="relative h-80 bg-cover bg-center" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${selectedSite.image}')`
              }}>
                <div className="absolute inset-0 flex items-end">
                  <div className="p-8 text-white w-full">
                    <Badge className="bg-[#d4af37] text-[#1a2f4a] mb-3">
                      {selectedSite.type}
                    </Badge>
                    <h2 className="text-4xl font-bold mb-2">{selectedSite.name}</h2>
                    <p className="text-2xl text-gray-200 mb-4">{selectedSite.nameArabic}</p>
                    <p className="text-lg max-w-3xl">{selectedSite.description}</p>
                  </div>
                </div>
              </div>

              <CardContent className="p-0">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <div className="border-b overflow-x-auto">
                    <TabsList className="w-full justify-start bg-white rounded-none h-auto p-0">
                      <TabsTrigger value="overview" className="px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-[#d4af37]">
                        <Info className="h-4 w-4 mr-2" />
                        Overview
                      </TabsTrigger>
                      <TabsTrigger value="visiting" className="px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-[#d4af37]">
                        <Clock className="h-4 w-4 mr-2" />
                        Visiting Info
                      </TabsTrigger>
                      <TabsTrigger value="facilities" className="px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-[#d4af37]">
                        <Home className="h-4 w-4 mr-2" />
                        Facilities
                      </TabsTrigger>
                      <TabsTrigger value="practical" className="px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-[#d4af37]">
                        <MapIcon className="h-4 w-4 mr-2" />
                        Practical
                      </TabsTrigger>
                      <TabsTrigger value="prayers" className="px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-[#d4af37]">
                        <Book className="h-4 w-4 mr-2" />
                        Prayers
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  {/* Overview Tab */}
                  <TabsContent value="overview" className="p-8">
                    <div className="space-y-8">
                      {/* Historical Background */}
                      <div>
                        <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Historical Background</h3>
                        <p className="text-gray-700 leading-relaxed">{selectedSite.historicalBackground}</p>
                      </div>

                      {/* Architecture */}
                      {selectedSite.architecture && (
                        <div>
                          <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Architecture</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div className="flex items-start space-x-3">
                                <Building className="h-5 w-5 text-[#d4af37] mt-1" />
                                <div>
                                  <div className="font-semibold">Domes</div>
                                  <div className="text-gray-600">{selectedSite.architecture.domes}</div>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <Building className="h-5 w-5 text-[#d4af37] mt-1" />
                                <div>
                                  <div className="font-semibold">Minarets</div>
                                  <div className="text-gray-600">{selectedSite.architecture.minarets}</div>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-[#d4af37] mt-1" />
                                <div>
                                  <div className="font-semibold">Area</div>
                                  <div className="text-gray-600">{selectedSite.architecture.area}</div>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <Users className="h-5 w-5 text-[#d4af37] mt-1" />
                                <div>
                                  <div className="font-semibold">Capacity</div>
                                  <div className="text-gray-600">{selectedSite.architecture.capacity}</div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="font-semibold mb-3">Special Features:</div>
                              <ul className="space-y-2">
                                {selectedSite.architecture.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <Star className="h-4 w-4 text-[#d4af37] mt-1 flex-shrink-0" />
                                    <span className="text-gray-600">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Special Events */}
                      {selectedSite.specialEvents && (
                        <div>
                          <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Special Events</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedSite.specialEvents.map((event, idx) => (
                              <Card key={idx} className="border-l-4 border-[#d4af37]">
                                <CardContent className="p-4">
                                  <div className="font-bold text-[#1a2f4a] mb-2">{event.event}</div>
                                  <div className="text-sm space-y-1">
                                    <div><span className="text-gray-500">Date:</span> {event.date}</div>
                                    <div><span className="text-gray-500">Attendance:</span> {event.attendance}</div>
                                    <div className="text-gray-600 mt-2">{event.description}</div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  {/* Visiting Info Tab */}
                  <TabsContent value="visiting" className="p-8">
                    <div className="space-y-8">
                      {/* Visiting Hours */}
                      {selectedSite.visitingHours && (
                        <div>
                          <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4 flex items-center">
                            <Clock className="h-6 w-6 mr-3 text-[#d4af37]" />
                            Visiting Hours
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card className="bg-gray-50">
                              <CardContent className="p-6">
                                <div className="space-y-3">
                                  <div>
                                    <div className="font-semibold text-sm text-gray-600">Open Hours</div>
                                    <div className="text-lg text-[#1a2f4a]">{selectedSite.visitingHours.dailyOpen}</div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-sm text-gray-600">Closed Days</div>
                                    <div className="text-lg text-[#1a2f4a]">{selectedSite.visitingHours.closedDays}</div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="bg-[#d4af37]/10">
                              <CardContent className="p-6">
                                <div className="font-semibold mb-3 text-[#1a2f4a]">Best Times to Visit:</div>
                                <ul className="space-y-2">
                                  {selectedSite.visitingHours.bestTimes.map((time, idx) => (
                                    <li key={idx} className="flex items-center space-x-2">
                                      <CheckCircle className="h-4 w-4 text-[#d4af37]" />
                                      <span>{time}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      )}

                      {/* Prayer Times */}
                      {selectedSite.prayerTimes && (
                        <div>
                          <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Prayer Times</h3>
                          <Card>
                            <CardContent className="p-6">
                              <p className="text-sm text-gray-600 mb-4">{selectedSite.prayerTimes.note}</p>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {Object.entries(selectedSite.prayerTimes).filter(([key]) => key !== 'note').map(([prayer, time]) => (
                                  <div key={prayer} className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="font-bold text-[#1a2f4a] capitalize mb-1">{prayer}</div>
                                    <div className="text-sm text-gray-600">{time}</div>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      )}

                      {/* Etiquette */}
                      {selectedSite.etiquette && (
                        <div>
                          <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Etiquette & Guidelines</h3>
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="dress">
                              <AccordionTrigger className="text-[#1a2f4a]">
                                <div className="flex items-center">
                                  <Heart className="h-5 w-5 mr-3 text-[#d4af37]" />
                                  Dress Code
                                </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                <ul className="space-y-2 ml-8">
                                  {selectedSite.etiquette.dressCode.map((rule, idx) => (
                                    <li key={idx} className="flex items-start space-x-2">
                                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                      <span className="text-gray-700">{rule}</span>
                                    </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="behavior">
                              <AccordionTrigger className="text-[#1a2f4a]">
                                <div className="flex items-center">
                                  <Users className="h-5 w-5 mr-3 text-[#d4af37]" />
                                  Behavior Guidelines
                                </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                <ul className="space-y-2 ml-8">
                                  {selectedSite.etiquette.behavior.map((rule, idx) => (
                                    <li key={idx} className="flex items-start space-x-2">
                                      <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                                      <span className="text-gray-700">{rule}</span>
                                    </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>

                            {selectedSite.etiquette.prohibited && (
                              <AccordionItem value="prohibited">
                                <AccordionTrigger className="text-[#1a2f4a]">
                                  <div className="flex items-center">
                                    <AlertCircle className="h-5 w-5 mr-3 text-red-500" />
                                    Prohibited Actions
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <ul className="space-y-2 ml-8">
                                    {selectedSite.etiquette.prohibited.map((rule, idx) => (
                                      <li key={idx} className="flex items-start space-x-2">
                                        <AlertCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">{rule}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                            )}
                          </Accordion>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  {/* Facilities Tab */}
                  <TabsContent value="facilities" className="p-8">
                    <div className="space-y-8">
                      {selectedSite.facilities && (
                        <>
                          <h3 className="text-2xl font-bold text-[#1a2f4a] mb-6">Available Facilities</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {Object.entries(selectedSite.facilities).map(([key, value]) => (
                              <Card key={key} className="border-l-4 border-[#d4af37]">
                                <CardContent className="p-4">
                                  <div className="font-semibold text-[#1a2f4a] capitalize mb-2">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                  </div>
                                  <div className="text-sm text-gray-600">{value}</div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </>
                      )}

                      {/* Accommodation */}
                      {selectedSite.accommodation && (
                        <div className="mt-8">
                          <h3 className="text-2xl font-bold text-[#1a2f4a] mb-6">Nearby Accommodation</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {selectedSite.accommodation.nearbyHotels.map((hotel, idx) => (
                              <Card key={idx} className="hover:shadow-xl transition-shadow">
                                <CardContent className="p-6">
                                  <div className="flex items-center justify-between mb-3">
                                    <h4 className="font-bold text-[#1a2f4a]">{hotel.name}</h4>
                                    <div className="flex items-center">
                                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                      <span className="ml-1 font-semibold">{hotel.rating}</span>
                                    </div>
                                  </div>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex items-center text-gray-600">
                                      <MapPin className="h-4 w-4 mr-2 text-[#d4af37]" />
                                      {hotel.distance} from shrine
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <span className="text-gray-600">Price Range:</span>
                                      <span className="font-semibold text-[#1a2f4a]">{hotel.priceRange}</span>
                                    </div>
                                  </div>
                                  <Button size="sm" className="w-full mt-4 bg-[#1a2f4a] hover:bg-[#2a3f5a]">
                                    View Details
                                  </Button>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  {/* Practical Tab */}
                  <TabsContent value="practical" className="p-8">
                    <div className="space-y-8">
                      {/* Transportation */}
                      {selectedSite.transportation && (
                        <div>
                          <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4 flex items-center">
                            <Bus className="h-6 w-6 mr-3 text-[#d4af37]" />
                            Transportation
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(selectedSite.transportation).map(([key, value]) => (
                              <Card key={key}>
                                <CardContent className="p-4">
                                  <div className="font-semibold text-[#1a2f4a] capitalize mb-2">{key}</div>
                                  <div className="text-sm text-gray-600">{value}</div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Nearby Attractions */}
                      {selectedSite.nearbyAttractions && (
                        <div>
                          <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Nearby Attractions</h3>
                          <div className="space-y-4">
                            {selectedSite.nearbyAttractions.map((attraction, idx) => (
                              <Card key={idx} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-5">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <h4 className="font-bold text-[#1a2f4a] mb-1">{attraction.name}</h4>
                                      {attraction.significance && (
                                        <p className="text-sm text-gray-600 mb-2">{attraction.significance}</p>
                                      )}
                                      <div className="flex items-center space-x-4 text-sm">
                                        <span className="text-gray-500">
                                          <MapPin className="inline h-4 w-4 mr-1" />
                                          {attraction.distance}
                                        </span>
                                        <span className="text-gray-500">
                                          <Clock className="inline h-4 w-4 mr-1" />
                                          {attraction.walking} walk
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Safety Tips */}
                      {selectedSite.safetyTips && (
                        <div>
                          <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4 flex items-center">
                            <Shield className="h-6 w-6 mr-3 text-[#d4af37]" />
                            Safety Tips
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {selectedSite.safetyTips.map((tip, idx) => (
                              <div key={idx} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                                <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{tip}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  {/* Prayers Tab */}
                  <TabsContent value="prayers" className="p-8">
                    <div className="space-y-8">
                      {selectedSite.ziyaratPrayers && (
                        <>
                          <h3 className="text-2xl font-bold text-[#1a2f4a] mb-6 flex items-center">
                            <Book className="h-6 w-6 mr-3 text-[#d4af37]" />
                            Recommended Ziyarat Prayers
                          </h3>
                          <div className="space-y-4">
                            {selectedSite.ziyaratPrayers.map((prayer, idx) => (
                              <Card key={idx} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                      <div className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center">
                                        <span className="text-[#1a2f4a] font-bold">{idx + 1}</span>
                                      </div>
                                      <span className="font-semibold text-[#1a2f4a]">{prayer}</span>
                                    </div>
                                    <Button size="sm" variant="outline">
                                      <Book className="h-4 w-4 mr-2" />
                                      Read
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </>
                      )}

                      {/* Note about prayers */}
                      <Card className="bg-[#d4af37]/10 border-l-4 border-[#d4af37]">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-[#1a2f4a] mb-3 flex items-center">
                            <Info className="h-5 w-5 mr-2" />
                            Important Note
                          </h4>
                          <p className="text-sm text-gray-700">
                            These prayers can be recited in Arabic or your native language. The sincerity of your intention 
                            is more important than the language. Printed prayer books are available at the shrine, 
                            and many pilgrims use smartphone apps for guided recitation.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Practical Information Section */}
        <div id="practical" className="mb-16">
          <h2 className="text-4xl font-bold text-[#1a2f4a] mb-8 text-center">Practical Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Visa Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-[#1a2f4a] mb-4 flex items-center">
                  <Globe className="h-6 w-6 mr-3 text-[#d4af37]" />
                  Visa Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold mb-1">On Arrival:</div>
                    <ul className="list-disc list-inside text-gray-600">
                      {practicalInfo.visa.onArrival.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Requirements:</div>
                    <ul className="list-disc list-inside text-gray-600">
                      {practicalInfo.visa.requirements.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Currency */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-[#1a2f4a] mb-4 flex items-center">
                  <DollarSign className="h-6 w-6 mr-3 text-[#d4af37]" />
                  Currency
                </h3>
                <div className="space-y-3 text-sm">
                  {Object.entries(practicalInfo.currency).map(([key, value]) => (
                    <div key={key}>
                      <div className="font-semibold capitalize">{key}:</div>
                      <div className="text-gray-600">{value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Health */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-[#1a2f4a] mb-4 flex items-center">
                  <Heart className="h-6 w-6 mr-3 text-[#d4af37]" />
                  Health
                </h3>
                <div className="space-y-3 text-sm">
                  {Object.entries(practicalInfo.health).map(([key, value]) => (
                    <div key={key}>
                      <div className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</div>
                      <div className="text-gray-600">
                        {Array.isArray(value) ? value.join(', ') : value}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Safety */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-[#1a2f4a] mb-4 flex items-center">
                  <Shield className="h-6 w-6 mr-3 text-[#d4af37]" />
                  Safety
                </h3>
                <div className="space-y-3 text-sm">
                  {Object.entries(practicalInfo.safety).map(([key, value]) => (
                    <div key={key}>
                      <div className="font-semibold capitalize">{key}:</div>
                      <div className="text-gray-600">{value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Transportation */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-[#1a2f4a] mb-4 flex items-center">
                  <Bus className="h-6 w-6 mr-3 text-[#d4af37]" />
                  Transportation
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold mb-1">Between Cities:</div>
                    <ul className="list-disc list-inside text-gray-600">
                      {practicalInfo.transportation['between Cities'].map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">In City:</div>
                    <ul className="list-disc list-inside text-gray-600">
                      {practicalInfo.transportation.inCity.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shopping */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-[#1a2f4a] mb-4 flex items-center">
                  <ShoppingBag className="h-6 w-6 mr-3 text-[#d4af37]" />
                  Shopping
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold mb-1">Popular Items:</div>
                    <div className="flex flex-wrap gap-2">
                      {practicalInfo.shopping.items.map((item, idx) => (
                        <Badge key={idx} variant="secondary">{item}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-gray-600">{practicalInfo.shopping.bargaining}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Cultural Tips */}
        <div id="tips" className="mb-16">
          <h2 className="text-4xl font-bold text-[#1a2f4a] mb-8 text-center">Cultural Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {culturalTips.map((tip, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-5 flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#d4af37] mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{tip}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div id="emergency" className="mb-16">
          <Card className="bg-red-50 border-l-4 border-red-500">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-red-700 mb-6 flex items-center">
                <AlertCircle className="h-8 w-8 mr-3" />
                Emergency Contacts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(emergencyContacts).map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="font-bold text-[#1a2f4a] capitalize mb-2">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <a href={`tel:${value}`} className="text-2xl font-bold text-red-600">
                      {value}
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IraqZiyaratGuide;
