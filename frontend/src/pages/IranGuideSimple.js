import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, ArrowLeft, Star, Users, Building, BookOpen, CheckCircle,
  Clock, Calendar, Info, Phone, DollarSign, ChevronRight, X, Globe,
  Briefcase, Package, Book, AlertCircle, Plane, Hotel, Shield
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  iranCities, 
  iranZiyaratSites,
  iranPreparationTips,
  iranWeatherGuide,
  iranTravelInfo
} from '../data/iranZiyaratData';

const IranGuideSimple = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);
  const [activeTab, setActiveTab] = useState('cities');

  const citySites = selectedCity 
    ? iranZiyaratSites.filter(site => site.cityId === selectedCity.id)
    : [];

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSelectedSite(null);
  };

  const handleSiteSelect = (site) => {
    setSelectedSite(site);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1626005989833-34f64e3c3e7f)'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center">
          <div className="max-w-5xl">
            <div className="flex justify-center mb-4">
              <Badge className="bg-[#ffce05] text-[#1a2f4a] px-6 py-2 text-sm font-semibold">
                <BookOpen className="h-4 w-4 inline mr-2" />
                COMPREHENSIVE PILGRIMAGE GUIDE
              </Badge>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Iran Ziyarat Guide
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Your complete companion for sacred pilgrimages to Iran's holiest shrines
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="h-8 w-8 mx-auto mb-2 text-[#ffce05]" />
                <div className="text-2xl font-bold">{iranCities.length}</div>
                <div className="text-sm text-gray-200">Major Cities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Building className="h-8 w-8 mx-auto mb-2 text-[#ffce05]" />
                <div className="text-2xl font-bold">{iranZiyaratSites.length}+</div>
                <div className="text-sm text-gray-200">Holy Sites</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="h-8 w-8 mx-auto mb-2 text-[#ffce05]" />
                <div className="text-2xl font-bold">30M+</div>
                <div className="text-sm text-gray-200">Annual Pilgrims</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Star className="h-8 w-8 mx-auto mb-2 text-[#ffce05]" />
                <div className="text-2xl font-bold">3</div>
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
              className="text-[#1a2f4a] hover:text-[#ffce05]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-4 text-sm font-medium">
              <button 
                onClick={() => setActiveTab('cities')} 
                className={`hover:text-[#ffce05] transition-colors ${activeTab === 'cities' ? 'text-[#ffce05]' : 'text-gray-700'}`}
              >
                Cities
              </button>
              <button 
                onClick={() => setActiveTab('preparation')} 
                className={`hover:text-[#ffce05] transition-colors ${activeTab === 'preparation' ? 'text-[#ffce05]' : 'text-gray-700'}`}
              >
                Preparation
              </button>
              <button 
                onClick={() => setActiveTab('travel')} 
                className={`hover:text-[#ffce05] transition-colors ${activeTab === 'travel' ? 'text-[#ffce05]' : 'text-gray-700'}`}
              >
                Travel Info
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
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1a2f4a] mb-4">Select Your Destination</h2>
              <p className="text-xl text-gray-600">Explore the holy cities and sacred shrines of Iran</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {iranCities.map((city) => (
                <Card 
                  key={city.id} 
                  className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-[#ffce05]"
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
                        <Badge className="bg-[#ffce05] text-[#1a2f4a] mt-2">
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
                        className="text-[#ffce05] hover:bg-[#ffce05]/10"
                      >
                        Explore
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* City Details Modal */}
            {selectedCity && (
              <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
                <div className="min-h-screen p-4 md:p-8">
                  <div className="max-w-6xl mx-auto">
                    <Card className="border-4 border-[#ffce05] shadow-2xl">
                      <CardContent className="p-0">
                        {/* City Header */}
                        <div className="relative h-80">
                          <img 
                            src={selectedCity.image} 
                            alt={selectedCity.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <h2 className="text-5xl font-bold mb-2">{selectedCity.name}</h2>
                            <p className="text-2xl mb-2">{selectedCity.nameArabic}</p>
                            {selectedCity.title && (
                              <Badge className="bg-[#ffce05] text-[#1a2f4a] text-lg px-4 py-2">
                                {selectedCity.title}
                              </Badge>
                            )}
                          </div>
                          <Button 
                            variant="ghost" 
                            onClick={() => setSelectedCity(null)}
                            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white"
                            size="lg"
                          >
                            <X className="h-6 w-6" />
                          </Button>
                        </div>

                        <div className="p-8">
                          {/* Welcome Message */}
                          {selectedCity.welcomeMessage && (
                            <div className="mb-8 p-6 bg-[#ffce05]/10 border-l-4 border-[#ffce05] rounded-lg">
                              <p className="text-lg italic text-gray-800">{selectedCity.welcomeMessage}</p>
                            </div>
                          )}

                          {/* Key Information Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <h4 className="font-bold text-[#1a2f4a] mb-2 flex items-center">
                                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                                Location
                              </h4>
                              <p className="text-sm text-gray-700">{selectedCity.province}</p>
                              {selectedCity.airportDistance && (
                                <p className="text-sm text-gray-600 mt-1">{selectedCity.airportDistance}</p>
                              )}
                            </div>
                            
                            <div className="bg-green-50 p-4 rounded-lg">
                              <h4 className="font-bold text-[#1a2f4a] mb-2 flex items-center">
                                <Calendar className="h-5 w-5 mr-2 text-green-600" />
                                Best Time
                              </h4>
                              <p className="text-sm text-gray-700">{selectedCity.bestTimeToVisit}</p>
                            </div>
                            
                            <div className="bg-red-50 p-4 rounded-lg">
                              <h4 className="font-bold text-[#1a2f4a] mb-2 flex items-center">
                                <Phone className="h-5 w-5 mr-2 text-red-600" />
                                Emergency
                              </h4>
                              <p className="text-sm text-gray-700">
                                Police: {selectedCity.emergencyNumbers.police}<br/>
                                Ambulance: {selectedCity.emergencyNumbers.ambulance}
                              </p>
                            </div>
                          </div>

                          {/* Description and Significance */}
                          <div className="mb-8">
                            <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">About {selectedCity.name}</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">{selectedCity.description}</p>
                            {selectedCity.significance && (
                              <p className="text-gray-700 leading-relaxed">{selectedCity.significance}</p>
                            )}
                          </div>

                          {/* Primary Landmarks */}
                          {selectedCity.primaryLandmarks && (
                            <div className="mb-8">
                              <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Primary Landmarks</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {selectedCity.primaryLandmarks.map((landmark, idx) => (
                                  <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <Star className="h-5 w-5 text-[#ffce05] mt-1 shrink-0" />
                                    <span className="text-gray-700">{landmark}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Holy Sites in This City */}
                          {citySites.length > 0 && (
                            <div>
                              <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Holy Sites & Shrines</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {citySites.map((site) => (
                                  <Card 
                                    key={site.id}
                                    className="group cursor-pointer hover:shadow-xl transition-all border-2 hover:border-[#ffce05]"
                                    onClick={() => handleSiteSelect(site)}
                                  >
                                    <CardContent className="p-4">
                                      <div className="flex items-start justify-between mb-2">
                                        <h4 className="text-lg font-bold text-[#1a2f4a] group-hover:text-[#ffce05] transition-colors">
                                          {site.name}
                                        </h4>
                                        <Badge className={site.importance === 'Highest' ? 'bg-[#ffce05] text-[#1a2f4a]' : 'bg-gray-200'}>
                                          {site.type}
                                        </Badge>
                                      </div>
                                      <p className="text-sm text-gray-600 mb-2">{site.nameArabic}</p>
                                      <p className="text-sm text-gray-700 line-clamp-2">{site.description}</p>
                                    </CardContent>
                                  </Card>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {/* Site Details Modal */}
            {selectedSite && (
              <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] overflow-y-auto">
                <div className="min-h-screen p-4 md:p-8">
                  <div className="max-w-6xl mx-auto">
                    <Card className="border-4 border-[#ffce05] shadow-2xl">
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

                        <div className="p-8">
                          {selectedSite.image && (
                            <img 
                              src={selectedSite.image} 
                              alt={selectedSite.name}
                              className="w-full h-80 object-cover rounded-lg mb-6"
                            />
                          )}

                          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{selectedSite.description}</p>

                          {selectedSite.buriedHere && selectedSite.buriedHere.length > 0 && (
                            <div className="mb-6">
                              <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Who is Buried Here</h3>
                              {selectedSite.buriedHere.map((person, idx) => (
                                <Card key={idx} className="mb-4 border-l-4 border-[#ffce05]">
                                  <CardContent className="p-6">
                                    <h4 className="text-xl font-bold text-[#1a2f4a] mb-2">{person.name}</h4>
                                    {person.title && <p className="text-md text-gray-600 mb-2">{person.title}</p>}
                                    {person.lineage && <p className="text-sm text-gray-600 mb-2"><strong>Lineage:</strong> {person.lineage}</p>}
                                    {person.birthDate && <p className="text-sm text-gray-600 mb-1"><strong>Birth:</strong> {person.birthDate}</p>}
                                    {person.martyrdomDate && <p className="text-sm text-gray-600 mb-1"><strong>Martyrdom:</strong> {person.martyrdomDate}</p>}
                                    {person.deathDate && <p className="text-sm text-gray-600 mb-1"><strong>Passed:</strong> {person.deathDate}</p>}
                                    {person.story && <p className="text-sm text-gray-700 mt-3">{person.story}</p>}
                                    {person.significance && <p className="text-sm text-gray-700 mt-2"><strong>Significance:</strong> {person.significance}</p>}
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          )}

                          {selectedSite.specialDaysForZiyarah && (
                            <div className="mb-6">
                              <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4">Special Days for Ziyarat</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {selectedSite.specialDaysForZiyarah.map((day, idx) => (
                                  <div key={idx} className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                                    <Calendar className="h-5 w-5 text-[#ffce05] mt-1 shrink-0" />
                                    <span className="text-sm text-gray-700">{day}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
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
              <h2 className="text-4xl font-bold text-[#1a2f4a] mb-4">Prepare for Your Journey to Iran</h2>
              <p className="text-xl text-gray-600">Essential guidance for a smooth pilgrimage</p>
            </div>

            {/* Visa Requirements */}
            <Card className="border-2 border-[#ffce05]/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4 flex items-center">
                  <Globe className="h-6 w-6 mr-3 text-[#ffce05]" />
                  {iranPreparationTips.visa.title}
                </h3>
                <p className="text-gray-700 mb-4">{iranPreparationTips.visa.description}</p>
                <ul className="space-y-2">
                  {iranPreparationTips.visa.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Currency & Money */}
            <Card className="border-2 border-green-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4 flex items-center">
                  <DollarSign className="h-6 w-6 mr-3 text-green-600" />
                  {iranPreparationTips.currency.title}
                </h3>
                <p className="text-gray-700 mb-4">{iranPreparationTips.currency.description}</p>
                <ul className="space-y-2">
                  {iranPreparationTips.currency.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Airport Declarations */}
            <Card className="border-2 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4 flex items-center">
                  <Plane className="h-6 w-6 mr-3 text-blue-600" />
                  {iranPreparationTips.declarations.title}
                </h3>
                <p className="text-gray-700 mb-4">{iranPreparationTips.declarations.description}</p>
                <ul className="space-y-2">
                  {iranPreparationTips.declarations.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Weather Guide */}
            <Card className="border-2 border-orange-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4 flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-orange-600" />
                  {iranWeatherGuide.title}
                </h3>
                <p className="text-gray-700 mb-4">{iranWeatherGuide.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(iranWeatherGuide.seasons).map(([key, season]) => (
                    <div key={key} className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-bold text-[#1a2f4a] mb-2">{season.months}</h4>
                      <p className="text-sm text-gray-700">{season.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Export Allowances */}
            <Card className="border-2 border-purple-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4 flex items-center">
                  <Package className="h-6 w-6 mr-3 text-purple-600" />
                  {iranPreparationTips.exportAllowances.title}
                </h3>
                <ul className="space-y-2">
                  {iranPreparationTips.exportAllowances.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Travel Info Tab */}
        {activeTab === 'travel' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1a2f4a] mb-4">Travel Information for Iran</h2>
              <p className="text-xl text-gray-600">Practical tips for your journey</p>
            </div>

            {/* Transportation */}
            <Card className="border-2 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4 flex items-center">
                  <Car className="h-6 w-6 mr-3 text-blue-600" />
                  {iranTravelInfo.transportation.title}
                </h3>
                <ul className="space-y-2">
                  {iranTravelInfo.transportation.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Accommodation */}
            <Card className="border-2 border-green-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4 flex items-center">
                  <Hotel className="h-6 w-6 mr-3 text-green-600" />
                  {iranTravelInfo.accommodation.title}
                </h3>
                <ul className="space-y-2">
                  {iranTravelInfo.accommodation.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Communication */}
            <Card className="border-2 border-purple-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#1a2f4a] mb-4 flex items-center">
                  <Phone className="h-6 w-6 mr-3 text-purple-600" />
                  {iranTravelInfo.communication.title}
                </h3>
                <ul className="space-y-2">
                  {iranTravelInfo.communication.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-[#1a2f4a] to-[#2a4f6a] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-200 mb-8">
            May your pilgrimage be blessed and your prayers answered
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={() => navigate('/')}
              size="lg"
              className="bg-[#ffce05] text-[#1a2f4a] hover:bg-[#ffce05]/90 font-semibold px-8"
            >
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
            <Button 
              onClick={() => setActiveTab('cities')}
              size="lg"
              variant="outline"
              className="bg-white/10 text-white hover:bg-white/20 border-white font-semibold px-8"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Explore Cities
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Missing import for Car icon
import { Car } from 'lucide-react';
import { Home } from 'lucide-react';

export default IranGuideSimple;
