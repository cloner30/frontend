import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, Clock, Calendar, Info, Camera, ShoppingBag, Utensils, 
  Phone, AlertCircle, Heart, Star, ChevronDown, ChevronRight,
  Home, Bus, Shield, Book, Globe, Users, Navigation, CheckCircle,
  ArrowLeft, Map as MapIcon, Building, DollarSign, Languages,
  Sparkles, BookOpen, Compass, Package, Plane, Hotel, Briefcase
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { 
  iraqCities, 
  ziyaratSites, 
  preparationTips,
  ziyarahEtiquette,
  packingList,
  specialEvents,
  importantDuas,
  travelInformation 
} from '../data/iraqZiyaratData';

const IraqZiyaratGuideEnhanced = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);
  const [activeTab, setActiveTab] = useState('cities');

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSelectedSite(null);
    // Don't change tab or scroll - keep user in place
  };

  const handleSiteSelect = (site) => {
    setSelectedSite(site);
    // Don't scroll - keep modal in view
  };

  const citySites = selectedCity 
    ? ziyaratSites.filter(site => site.cityId === selectedCity.id)
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 47, 74, 0.95), rgba(212, 175, 55, 0.3)), url('https://images.unsplash.com/photo-1711594937687-eed59068e043')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-5xl px-4">
            <div className="flex justify-center mb-4">
              <Badge className="bg-[#d4af37] text-[#1a2f4a] px-6 py-2 text-sm font-semibold">
                <BookOpen className="h-4 w-4 inline mr-2" />
                COMPREHENSIVE PILGRIMAGE GUIDE
              </Badge>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Iraq Ziyarat Guide
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Your complete companion for sacred pilgrimages to Iraq's holiest shrines
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="h-8 w-8 mx-auto mb-2 text-[#d4af37]" />
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm text-gray-200">Major Cities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Building className="h-8 w-8 mx-auto mb-2 text-[#d4af37]" />
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-gray-200">Holy Sites</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="h-8 w-8 mx-auto mb-2 text-[#d4af37]" />
                <div className="text-2xl font-bold">25M+</div>
                <div className="text-sm text-gray-200">Annual Pilgrims</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Star className="h-8 w-8 mx-auto mb-2 text-[#d4af37]" />
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm text-gray-200">Imam Shrines</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="text-[#1a2f4a] hover:text-[#d4af37]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-6 text-sm font-medium">
              <button 
                onClick={() => setActiveTab('cities')} 
                className={`hover:text-[#d4af37] transition-colors ${activeTab === 'cities' ? 'text-[#d4af37]' : 'text-gray-700'}`}
              >
                Cities
              </button>
              <button 
                onClick={() => setActiveTab('preparation')} 
                className={`hover:text-[#d4af37] transition-colors ${activeTab === 'preparation' ? 'text-[#d4af37]' : 'text-gray-700'}`}
              >
                Preparation
              </button>
              <button 
                onClick={() => setActiveTab('duas')} 
                className={`hover:text-[#d4af37] transition-colors ${activeTab === 'duas' ? 'text-[#d4af37]' : 'text-gray-700'}`}
              >
                Duas & Prayers
              </button>
              <button 
                onClick={() => setActiveTab('practical')} 
                className={`hover:text-[#d4af37] transition-colors ${activeTab === 'practical' ? 'text-[#d4af37]' : 'text-gray-700'}`}
              >
                Travel Info
              </button>
              <button 
                onClick={() => setActiveTab('events')} 
                className={`hover:text-[#d4af37] transition-colors ${activeTab === 'events' ? 'text-[#d4af37]' : 'text-gray-700'}`}
              >
                Events
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Cities Tab */}
        {activeTab === 'cities' && (
          <div className="space-y-12">
            {/* City Modal Overlay */}
            {selectedCity && (
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto">
                <div className="min-h-screen p-4 md:p-8">
                  <div className="max-w-7xl mx-auto">
                    <Card className="border-4 border-[#d4af37] shadow-2xl">
                      <CardContent className="p-0">
                        {/* Modal Header */}
                        <div 
                          className="relative h-80 bg-cover bg-center"
                          style={{
                            backgroundImage: `linear-gradient(rgba(26, 47, 74, 0.8), rgba(26, 47, 74, 0.8)), url('${selectedCity.image}')`,
                          }}
                        >
                          <Button 
                            variant="ghost" 
                            onClick={() => setSelectedCity(null)}
                            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm"
                            size="lg"
                          >
                            ✕ Close
                          </Button>
                          <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8">
                            <div>
                              <h1 className="text-5xl font-bold mb-4">{selectedCity.name}</h1>
                              <p className="text-2xl mb-4">{selectedCity.nameArabic}</p>
                              {selectedCity.title && (
                                <Badge className="bg-[#d4af37] text-[#1a2f4a] text-lg px-4 py-2">
                                  {selectedCity.title}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8 max-h-[600px] overflow-y-auto">
                          {selectedCity.welcomeMessage && (
                            <div className="mb-6 p-4 bg-[#d4af37]/10 rounded-lg border-l-4 border-[#d4af37]">
                              <p className="text-gray-700 italic">"{selectedCity.welcomeMessage}"</p>
                            </div>
                          )}

                          {/* City Info Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <Card className="border-l-4 border-[#d4af37]">
                              <CardContent className="p-4">
                                <div className="flex items-center mb-2">
                                  <MapPin className="h-4 w-4 text-[#d4af37] mr-2" />
                                  <h3 className="font-bold text-sm text-[#1a2f4a]">Location</h3>
                                </div>
                                <p className="text-xs text-gray-700">{selectedCity.province}</p>
                                <p className="text-xs text-gray-600 mt-1">{selectedCity.airportDistance}</p>
                              </CardContent>
                            </Card>

                            <Card className="border-l-4 border-[#d4af37]">
                              <CardContent className="p-4">
                                <div className="flex items-center mb-2">
                                  <Calendar className="h-4 w-4 text-[#d4af37] mr-2" />
                                  <h3 className="font-bold text-sm text-[#1a2f4a]">Best Time</h3>
                                </div>
                                <p className="text-xs text-gray-700">{selectedCity.bestTimeToVisit}</p>
                              </CardContent>
                            </Card>

                            <Card className="border-l-4 border-[#d4af37]">
                              <CardContent className="p-4">
                                <div className="flex items-center mb-2">
                                  <Phone className="h-4 w-4 text-[#d4af37] mr-2" />
                                  <h3 className="font-bold text-sm text-[#1a2f4a]">Emergency</h3>
                                </div>
                                {selectedCity.emergencyNumbers && (
                                  <div className="text-xs text-gray-700 space-y-1">
                                    <div>Police: {selectedCity.emergencyNumbers.police}</div>
                                    <div>Ambulance: {selectedCity.emergencyNumbers.ambulance}</div>
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          </div>

                          {/* Ziyarat Sites */}
                          <div>
                            <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Holy Sites & Shrines</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {citySites.map((site) => (
                                <Card 
                                  key={site.id}
                                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-[#d4af37]"
                                  onClick={() => handleSiteSelect(site)}
                                >
                                  <div className="relative h-32 overflow-hidden">
                                    <img 
                                      src={site.image || selectedCity.image} 
                                      alt={site.name}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 right-2">
                                      <Badge className="bg-[#d4af37] text-[#1a2f4a] text-xs">
                                        {site.importance}
                                      </Badge>
                                    </div>
                                  </div>
                                  <CardContent className="p-4">
                                    <h3 className="text-lg font-bold text-[#1a2f4a] mb-1">{site.name}</h3>
                                    <p className="text-xs text-gray-600 mb-2">{site.nameArabic}</p>
                                    <p className="text-xs text-gray-700 line-clamp-2 mb-3">
                                      {site.description}
                                    </p>
                                    <Button 
                                      variant="ghost" 
                                      size="sm"
                                      className="w-full text-[#d4af37] hover:bg-[#d4af37]/10 text-xs"
                                    >
                                      View Details
                                      <ChevronRight className="h-3 w-3 ml-1" />
                                    </Button>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {/* City Grid - Always Visible */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1a2f4a] mb-4">Select Your Destination</h2>
              <p className="text-xl text-gray-600">Explore the holy cities and sacred shrines of Iraq</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {iraqCities.map((city) => (
                <Card 
                  key={city.id} 
                  className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-[#d4af37]"
                  onClick={() => handleCitySelect(city)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={city.image} 
                      alt={city.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-3xl font-bold mb-2">{city.name}</h3>
                      <p className="text-lg text-gray-200 mb-1">{city.nameArabic}</p>
                      {city.title && (
                        <Badge className="bg-[#d4af37] text-[#1a2f4a] mt-2">
                          {city.title}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4 line-clamp-3">{city.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        {city.population}
                      </div>
                      <Button 
                        variant="ghost" 
                        className="text-[#d4af37] hover:bg-[#d4af37]/10"
                      >
                        Explore
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Site Details Modal - Nested on top of City Modal */}
            {selectedSite && (
              <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] overflow-y-auto">
                <div className="min-h-screen p-4 md:p-8">
                  <div className="max-w-6xl mx-auto">
                    <Card className="border-4 border-[#d4af37] shadow-2xl">
                      <CardContent className="p-0">
                        <div className="p-6 bg-gradient-to-r from-[#1a2f4a] to-[#2a4f6a] text-white flex items-center justify-between">
                          <div>
                            <h2 className="text-3xl font-bold mb-2">{selectedSite.name}</h2>
                            <p className="text-lg">{selectedSite.nameArabic}</p>
                          </div>
                          <Button 
                            variant="ghost" 
                            onClick={() => setSelectedSite(null)}
                            className="bg-white/20 hover:bg-white/40 text-white"
                            size="lg"
                          >
                            ✕ Close
                          </Button>
                        </div>

                        <div className="p-8 max-h-[70vh] overflow-y-auto">

                    <Card className="border-2 border-[#d4af37]/30">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h2 className="text-4xl font-bold text-[#1a2f4a] mb-2">{selectedSite.name}</h2>
                            <p className="text-2xl text-gray-600">{selectedSite.nameArabic}</p>
                          </div>
                          <Badge className="bg-[#d4af37] text-[#1a2f4a] text-lg px-4 py-2">
                            {selectedSite.importance} Importance
                          </Badge>
                        </div>

                        <Tabs defaultValue="overview" className="w-full">
                          <TabsList className="grid w-full grid-cols-4 mb-8">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="history">History</TabsTrigger>
                            <TabsTrigger value="visiting">Visiting</TabsTrigger>
                            <TabsTrigger value="prayers">Prayers</TabsTrigger>
                          </TabsList>

                          <TabsContent value="overview" className="space-y-6">
                            <div>
                              <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Description</h3>
                              <p className="text-gray-700 leading-relaxed">{selectedSite.description}</p>
                            </div>

                            {selectedSite.significance && (
                              <div>
                                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Significance</h3>
                                <p className="text-gray-700 leading-relaxed">{selectedSite.significance}</p>
                              </div>
                            )}

                            {selectedSite.buriedHere && selectedSite.buriedHere.length > 0 && (
                              <div>
                                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Buried Here</h3>
                                <div className="space-y-4">
                                  {selectedSite.buriedHere.map((person, idx) => (
                                    <Card key={idx} className="bg-gradient-to-r from-[#d4af37]/5 to-transparent">
                                      <CardContent className="p-4">
                                        <h4 className="font-bold text-[#1a2f4a] mb-2">{person.name}</h4>
                                        {person.title && <p className="text-sm text-gray-600 mb-2">{person.title}</p>}
                                        {person.description && <p className="text-sm text-gray-700">{person.description}</p>}
                                      </CardContent>
                                    </Card>
                                  ))}
                                </div>
                              </div>
                            )}

                            {selectedSite.architecture && (
                              <div>
                                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Architecture</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {selectedSite.architecture.goldenDome && (
                                    <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                      <Building className="h-5 w-5 text-[#d4af37] mt-1" />
                                      <div>
                                        <div className="font-semibold text-[#1a2f4a]">Golden Dome</div>
                                        <div className="text-sm text-gray-600">{selectedSite.architecture.goldenDome}</div>
                                      </div>
                                    </div>
                                  )}
                                  {selectedSite.architecture.minarets && (
                                    <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                      <Building className="h-5 w-5 text-[#d4af37] mt-1" />
                                      <div>
                                        <div className="font-semibold text-[#1a2f4a]">Minarets</div>
                                        <div className="text-sm text-gray-600">{selectedSite.architecture.minarets}</div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </TabsContent>

                          <TabsContent value="history" className="space-y-6">
                            {selectedSite.historicalBackground && (
                              <div>
                                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Historical Background</h3>
                                <p className="text-gray-700 leading-relaxed">{selectedSite.historicalBackground}</p>
                              </div>
                            )}

                            {selectedSite.historicalTimeline && (
                              <div>
                                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Timeline</h3>
                                <div className="space-y-3">
                                  {selectedSite.historicalTimeline.map((item, idx) => (
                                    <div key={idx} className="flex items-start space-x-4 p-4 border-l-4 border-[#d4af37] bg-gray-50">
                                      <Badge className="bg-[#1a2f4a] text-white shrink-0">{item.year}</Badge>
                                      <p className="text-sm text-gray-700">{item.event}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {selectedSite.scholarsBuried && (
                              <div>
                                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Renowned Scholars Buried Here</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {selectedSite.scholarsBuried.map((scholar, idx) => (
                                    <div key={idx} className="flex items-center space-x-2 p-3 bg-gradient-to-r from-[#d4af37]/10 to-transparent rounded-lg">
                                      <Star className="h-4 w-4 text-[#d4af37] shrink-0" />
                                      <span className="text-sm text-gray-700">{scholar}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </TabsContent>

                          <TabsContent value="visiting" className="space-y-6">
                            {selectedSite.visitingHours && (
                              <Card className="bg-[#d4af37]/5">
                                <CardContent className="p-6">
                                  <div className="flex items-center mb-3">
                                    <Clock className="h-5 w-5 text-[#d4af37] mr-2" />
                                    <h3 className="font-bold text-[#1a2f4a]">Visiting Hours</h3>
                                  </div>
                                  <p className="text-gray-700">{selectedSite.visitingHours}</p>
                                </CardContent>
                              </Card>
                            )}

                            {selectedSite.dressCode && (
                              <Card className="bg-blue-50">
                                <CardContent className="p-6">
                                  <div className="flex items-center mb-3">
                                    <Info className="h-5 w-5 text-blue-600 mr-2" />
                                    <h3 className="font-bold text-[#1a2f4a]">Dress Code</h3>
                                  </div>
                                  <p className="text-gray-700">{selectedSite.dressCode}</p>
                                </CardContent>
                              </Card>
                            )}

                            {selectedSite.specialDaysForZiyarah && (
                              <div>
                                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Special Days for Ziyārah</h3>
                                <div className="space-y-2">
                                  {selectedSite.specialDaysForZiyarah.map((day, idx) => (
                                    <div key={idx} className="flex items-start space-x-3 p-3 border-l-2 border-[#d4af37] bg-gray-50">
                                      <Calendar className="h-4 w-4 text-[#d4af37] mt-1 shrink-0" />
                                      <span className="text-sm text-gray-700">{day}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {selectedSite.etiquette && (
                              <div>
                                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Etiquette</h3>
                                <div className="space-y-2">
                                  {selectedSite.etiquette.map((rule, idx) => (
                                    <div key={idx} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                                      <span className="text-sm text-gray-700">{rule}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </TabsContent>

                          <TabsContent value="prayers" className="space-y-6">
                            {selectedSite.ziyaratPrayers && (
                              <div>
                                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Recommended Ziyārat Prayers</h3>
                                {typeof selectedSite.ziyaratPrayers === 'object' && !Array.isArray(selectedSite.ziyaratPrayers) ? (
                                  <div className="space-y-4">
                                    {Object.entries(selectedSite.ziyaratPrayers).map(([key, value]) => (
                                      <Card key={key} className="border-l-4 border-[#d4af37]">
                                        <CardContent className="p-6">
                                          <h4 className="font-bold text-[#1a2f4a] mb-2 capitalize">
                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                          </h4>
                                          <p className="text-sm text-gray-700">{value}</p>
                                        </CardContent>
                                      </Card>
                                    ))}
                                  </div>
                                ) : (
                                  <p className="text-gray-600">Prayer information available at the shrine</p>
                                )}
                              </div>
                            )}

                            {selectedSite.meritsOfVisiting && (
                              <Card className="bg-gradient-to-r from-[#d4af37]/10 to-transparent">
                                <CardContent className="p-6">
                                  <div className="flex items-center mb-3">
                                    <Heart className="h-5 w-5 text-red-500 mr-2" />
                                    <h3 className="font-bold text-[#1a2f4a]">Merits of Visiting</h3>
                                  </div>
                                  <p className="text-gray-700 italic">"{selectedSite.meritsOfVisiting}"</p>
                                </CardContent>
                              </Card>
                            )}
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Preparation Tab */}
        {activeTab === 'preparation' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1a2f4a] mb-4">Prepare for Your Journey</h2>
              <p className="text-xl text-gray-600">Essential guidance for a meaningful pilgrimage</p>
            </div>

            {/* Preparation Tips */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(preparationTips).map(([key, section]) => (
                <Card key={key} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#d4af37]">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#d4af37]/10 rounded-full mb-4 mx-auto group-hover:bg-[#d4af37]/20 transition-colors">
                      {key === 'mental' && <Brain className="h-8 w-8 text-[#d4af37]" />}
                      {key === 'spiritual' && <Heart className="h-8 w-8 text-[#d4af37]" />}
                      {key === 'physical' && <Activity className="h-8 w-8 text-[#d4af37]" />}
                      {key === 'family' && <Users className="h-8 w-8 text-[#d4af37]" />}
                    </div>
                    <h3 className="text-xl font-bold text-[#1a2f4a] mb-3 text-center">{section.title}</h3>
                    <p className="text-sm text-gray-700 mb-4 text-center">{section.description}</p>
                    {section.practices && (
                      <ul className="space-y-2 text-sm">
                        {section.practices.slice(0, 3).map((practice, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                            <span className="text-gray-700">{practice}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.tips && (
                      <ul className="space-y-2 text-sm">
                        {section.tips.slice(0, 3).map((tip, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                            <span className="text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.suggestions && (
                      <ul className="space-y-2 text-sm">
                        {section.suggestions.slice(0, 3).map((suggestion, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                            <span className="text-gray-700">{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Etiquette */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a2f4a] mb-6 text-center">Etiquette of Ziyārah</h2>
              <Card className="border-2 border-[#d4af37]/30">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {ziyarahEtiquette.rules.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="text-xl font-bold text-[#1a2f4a] mb-4 flex items-center">
                          <div className="w-2 h-8 bg-[#d4af37] mr-3 rounded"></div>
                          {category.category}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-5">
                          {category.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                              <CheckCircle className="h-4 w-4 text-[#d4af37] mt-1 shrink-0" />
                              <span className="text-sm text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Packing List */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a2f4a] mb-6 text-center">Packing List</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(packingList).map(([key, section]) => {
                  if (key === 'notes') return null;
                  return (
                    <Card key={key} className="border-l-4 border-[#d4af37]">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {key === 'essentials' && <Briefcase className="h-6 w-6 text-[#d4af37] mr-2" />}
                          {key === 'clothing' && <Package className="h-6 w-6 text-[#d4af37] mr-2" />}
                          {key === 'prayerItems' && <Book className="h-6 w-6 text-[#d4af37] mr-2" />}
                          <h3 className="text-xl font-bold text-[#1a2f4a] capitalize">{section.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                        {section.womenNote && (
                          <div className="mt-4 p-3 bg-pink-50 rounded-lg">
                            <p className="text-xs text-pink-900">
                              <AlertCircle className="h-3 w-3 inline mr-1" />
                              {section.womenNote}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Duas & Prayers Tab */}
        {activeTab === 'duas' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1a2f4a] mb-4">Important Duʿās & Prayers</h2>
              <p className="text-xl text-gray-600">Recommended supplications for your pilgrimage</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {importantDuas.map((dua, idx) => (
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#d4af37]">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#1a2f4a] mb-2">{dua.name}</h3>
                        {dua.forWhom && (
                          <p className="text-sm text-gray-600">For: {dua.forWhom}</p>
                        )}
                      </div>
                      <Book className="h-8 w-8 text-[#d4af37]" />
                    </div>

                    <div className="space-y-3 text-sm">
                      {dua.recitedOn && (
                        <div className="flex items-start space-x-2">
                          <Clock className="h-4 w-4 text-[#d4af37] mt-0.5 shrink-0" />
                          <div>
                            <span className="font-semibold">When:</span>
                            <p className="text-gray-700">{dua.recitedOn}</p>
                          </div>
                        </div>
                      )}

                      {dua.significance && (
                        <div className="flex items-start space-x-2">
                          <Star className="h-4 w-4 text-[#d4af37] mt-0.5 shrink-0" />
                          <div>
                            <span className="font-semibold">Significance:</span>
                            <p className="text-gray-700">{dua.significance}</p>
                          </div>
                        </div>
                      )}

                      {dua.merit && (
                        <div className="flex items-start space-x-2">
                          <Heart className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                          <div>
                            <span className="font-semibold">Merit:</span>
                            <p className="text-gray-700">{dua.merit}</p>
                          </div>
                        </div>
                      )}

                      {dua.location && (
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 text-[#d4af37] mt-0.5 shrink-0" />
                          <div>
                            <span className="font-semibold">Where:</span>
                            <p className="text-gray-700">{dua.location}</p>
                          </div>
                        </div>
                      )}

                      {dua.content && (
                        <div className="mt-4 p-3 bg-[#d4af37]/10 rounded-lg">
                          <p className="text-xs text-gray-700 font-mono">{dua.content}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Practical Travel Info Tab */}
        {activeTab === 'practical' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1a2f4a] mb-4">Practical Travel Information</h2>
              <p className="text-xl text-gray-600">Everything you need to know for a smooth journey</p>
            </div>

            {/* Visa & Entry */}
            <Card className="border-2 border-[#d4af37]/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-[#d4af37] mr-3" />
                  <h3 className="text-2xl font-bold text-[#1a2f4a]">Visa & Entry Requirements</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">{travelInformation.visaAndEntry.visa}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {travelInformation.visaAndEntry.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                          <span className="text-sm text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Airports */}
            <div>
              <h3 className="text-2xl font-bold text-[#1a2f4a] mb-6 flex items-center">
                <Plane className="h-6 w-6 text-[#d4af37] mr-2" />
                Airports
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {travelInformation.airports.map((airport, idx) => (
                  <Card key={idx} className="border-l-4 border-[#d4af37]">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-[#1a2f4a] mb-2">{airport.name}</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><span className="font-semibold">Code:</span> {airport.code}</p>
                        <p><span className="font-semibold">Location:</span> {airport.location}</p>
                        <p><span className="font-semibold">Distances:</span> {airport.distance}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Transportation */}
            <Card className="border-2 border-[#d4af37]/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Bus className="h-8 w-8 text-[#d4af37] mr-3" />
                  <h3 className="text-2xl font-bold text-[#1a2f4a]">Transportation</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Between Cities:</h4>
                    <ul className="space-y-2">
                      {travelInformation.transportation.betweenCities.map((option, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <ChevronRight className="h-4 w-4 text-[#d4af37] mt-1 shrink-0" />
                          <span className="text-sm text-gray-700">{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Within Cities:</h4>
                    <ul className="space-y-2">
                      {travelInformation.transportation.withinCities.map((option, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <ChevronRight className="h-4 w-4 text-[#d4af37] mt-1 shrink-0" />
                          <span className="text-sm text-gray-700">{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Currency */}
            <Card className="border-2 border-[#d4af37]/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <DollarSign className="h-8 w-8 text-[#d4af37] mr-3" />
                  <h3 className="text-2xl font-bold text-[#1a2f4a]">Currency & Money</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold">Official Currency:</span> {travelInformation.currency.official}</p>
                  <p><span className="font-semibold">Exchange:</span> {travelInformation.currency.exchange}</p>
                  <p><span className="font-semibold">USD:</span> {travelInformation.currency.usd}</p>
                  <p><span className="font-semibold">ATM:</span> {travelInformation.currency.atm}</p>
                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                    <AlertCircle className="h-4 w-4 inline text-yellow-600 mr-2" />
                    <span className="text-sm font-semibold">Tip:</span>
                    <p className="text-sm mt-1">{travelInformation.currency.recommendation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accommodation */}
            <Card className="border-2 border-[#d4af37]/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Hotel className="h-8 w-8 text-[#d4af37] mr-3" />
                  <h3 className="text-2xl font-bold text-[#1a2f4a]">Accommodation</h3>
                </div>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {travelInformation.accommodation.options.map((option, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                        <span className="text-sm text-gray-700">{option}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <AlertCircle className="h-4 w-4 inline text-blue-600 mr-2" />
                    <span className="text-sm font-semibold">Booking:</span>
                    <p className="text-sm mt-1">{travelInformation.accommodation.booking}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Safety */}
            <Card className="border-2 border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-[#1a2f4a]">Safety Information</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold">General:</span> {travelInformation.safety.general}</p>
                  <p><span className="font-semibold">Shrine Areas:</span> {travelInformation.safety.shrineAreas}</p>
                  <p><span className="font-semibold">Valuables:</span> {travelInformation.safety.valuables}</p>
                  <p><span className="font-semibold">For Women:</span> {travelInformation.safety.women}</p>
                  <p><span className="font-semibold">Emergency:</span> {travelInformation.safety.emergency}</p>
                </div>
              </CardContent>
            </Card>

            {/* Climate */}
            <Card className="border-2 border-[#d4af37]/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Calendar className="h-8 w-8 text-[#d4af37] mr-3" />
                  <h3 className="text-2xl font-bold text-[#1a2f4a]">Climate & Best Time to Visit</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-red-900">Summer</h4>
                    <p className="text-sm text-gray-700">{travelInformation.climate.summer}</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-900">Winter</h4>
                    <p className="text-sm text-gray-700">{travelInformation.climate.winter}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-900">Spring</h4>
                    <p className="text-sm text-gray-700">{travelInformation.climate.spring}</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-yellow-900">Fall</h4>
                    <p className="text-sm text-gray-700">{travelInformation.climate.fall}</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-[#d4af37]/10 rounded-lg">
                  <Star className="h-4 w-4 inline text-[#d4af37] mr-2" />
                  <span className="font-semibold">Best Time:</span>
                  <p className="text-sm mt-1">{travelInformation.climate.bestTime}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1a2f4a] mb-4">Special Events & Commemorations</h2>
              <p className="text-xl text-gray-600">Important dates in the Islamic calendar</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialEvents.map((event, idx) => (
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#d4af37] overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-[#1a2f4a] to-[#d4af37]"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#1a2f4a] mb-2">{event.name}</h3>
                        <Badge className="bg-[#d4af37] text-[#1a2f4a]">{event.date}</Badge>
                      </div>
                      <Calendar className="h-8 w-8 text-[#d4af37]" />
                    </div>

                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-semibold text-gray-600">Location:</span>
                        <p className="text-gray-700">{event.location}</p>
                      </div>

                      <div>
                        <span className="text-sm font-semibold text-gray-600">Description:</span>
                        <p className="text-gray-700">{event.description}</p>
                      </div>

                      <div>
                        <span className="text-sm font-semibold text-gray-600">Significance:</span>
                        <p className="text-gray-700">{event.significance}</p>
                      </div>

                      {event.activities && (
                        <div>
                          <span className="text-sm font-semibold text-gray-600">Activities:</span>
                          <ul className="mt-2 space-y-1">
                            {event.activities.map((activity, actIdx) => (
                              <li key={actIdx} className="flex items-start space-x-2">
                                <ChevronRight className="h-4 w-4 text-[#d4af37] mt-0.5 shrink-0" />
                                <span className="text-sm text-gray-700">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {event.volunteers && (
                        <div className="mt-4 p-3 bg-green-50 rounded-lg">
                          <Users className="h-4 w-4 inline text-green-600 mr-2" />
                          <p className="text-xs text-green-900">{event.volunteers}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-[#1a2f4a] to-[#2a4f6a] py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-200 mb-8">
            May your pilgrimage be blessed and your prayers answered
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              size="lg" 
              className="bg-[#d4af37] text-[#1a2f4a] hover:bg-[#c49d2f]"
              onClick={() => navigate('/')}
            >
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-[#1a2f4a]"
              onClick={() => setActiveTab('cities')}
            >
              <Compass className="h-5 w-5 mr-2" />
              Explore Cities
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add missing icon imports
const Brain = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Activity = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export default IraqZiyaratGuideEnhanced;
