import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Users,
  Hotel,
  Car,
  Plus,
  Minus,
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  GripVertical,
  Star,
  Clock,
  DollarSign,
  Plane,
  Shield,
  Wifi,
  Camera,
  UserCheck,
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { hotels } from '../mock';
import iraqZiyaratData from '../data/iraqZiyaratData';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { useToast } from '../hooks/use-toast';

const PlanTripEnhanced = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [tripData, setTripData] = useState({
    // Step 1
    dateFrom: '',
    dateTo: '',
    country: '',
    selectedCities: [],
    passengers: {
      adults: 2,
      childrenWithBed: 0,
      childrenWithoutBed: 0,
      infants: 0
    },
    // Step 2
    cityOrder: [],
    cityNights: {},
    // Step 3
    hotelCategory: '',
    selectedHotels: {},
    // Step 4
    airportTransfer: false,
    interCityTransport: {},
    // Step 5
    cityActivities: {},
    // Step 6
    addOns: [],
    // Pricing
    pricing: {
      hotels: 0,
      transport: 0,
      activities: 0,
      addOns: 0,
      total: 0
    }
  });

  const steps = [
    { number: 1, title: 'Trip Overview', icon: Calendar },
    { number: 2, title: 'City Planning', icon: MapPin },
    { number: 3, title: 'Hotels', icon: Hotel },
    { number: 4, title: 'Transport', icon: Car },
    { number: 5, title: 'Activities', icon: Check },
    { number: 6, title: 'Add-ons', icon: Plus },
    { number: 7, title: 'Review & Book', icon: FileText }
  ];

  const countries = ['Iraq', 'Iran', 'Iraq & Iran'];
  const iraqCities = ['Karbala', 'Najaf', 'Baghdad', 'Samarra', 'Kadhimiya'];
  const iranCities = ['Mashhad', 'Qom', 'Tehran'];

  const addOnsOptions = [
    { id: 'insurance', name: 'Travel Insurance', price: 50, icon: Shield },
    { id: 'sim', name: 'SIM Card & WiFi', price: 25, icon: Wifi },
    { id: 'photography', name: 'Photography Package', price: 150, icon: Camera },
    { id: 'guide', name: 'Private Guide Service', price: 200, icon: UserCheck },
    { id: 'visa', name: 'Visa Assistance', price: 75, icon: FileText }
  ];

  // Calculate total days
  const getTotalDays = () => {
    if (!tripData.dateFrom || !tripData.dateTo) return 0;
    const from = new Date(tripData.dateFrom);
    const to = new Date(tripData.dateTo);
    const diffTime = Math.abs(to - from);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const totalDays = getTotalDays();
  const totalNights = totalDays > 0 ? totalDays - 1 : 0;

  // Get available cities based on country
  const getAvailableCities = () => {
    if (tripData.country === 'Iraq') return iraqCities;
    if (tripData.country === 'Iran') return iranCities;
    if (tripData.country === 'Iraq & Iran') return [...iraqCities, ...iranCities];
    return [];
  };

  // Calculate total passengers
  const getTotalPassengers = () => {
    return tripData.passengers.adults + 
           tripData.passengers.childrenWithBed + 
           tripData.passengers.childrenWithoutBed + 
           tripData.passengers.infants;
  };

  // Calculate allocated nights
  const getAllocatedNights = () => {
    return Object.values(tripData.cityNights).reduce((sum, nights) => sum + nights, 0);
  };

  // Get hotels for a city
  const getHotelsForCity = (city) => {
    let filtered = hotels.filter(h => h.city === city);
    
    if (tripData.hotelCategory) {
      if (tripData.hotelCategory === 'budget') {
        filtered = filtered.filter(h => h.stars <= 3);
      } else if (tripData.hotelCategory === '4star') {
        filtered = filtered.filter(h => h.stars === 4);
      } else if (tripData.hotelCategory === '5star') {
        filtered = filtered.filter(h => h.stars === 5);
      }
    }
    
    return filtered;
  };

  // Get ziyarat places for a city
  const getZiyaratForCity = (city) => {
    const cityData = iraqZiyaratData.cities.find(c => c.name === city);
    return cityData?.holySites || [];
  };

  // Calculate pricing
  useEffect(() => {
    let hotelCost = 0;
    let transportCost = 0;
    let activitiesCost = 0;
    let addOnsCost = 0;

    // Hotels
    Object.keys(tripData.selectedHotels).forEach(city => {
      const hotel = tripData.selectedHotels[city];
      const nights = tripData.cityNights[city] || 0;
      if (hotel && nights > 0) {
        hotelCost += hotel.price * nights;
      }
    });

    // Transport
    if (tripData.airportTransfer) {
      transportCost += 50; // Mock price
    }
    Object.keys(tripData.interCityTransport).forEach(key => {
      if (tripData.interCityTransport[key]) {
        transportCost += 80; // Mock price per inter-city transfer
      }
    });

    // Activities (mock - some activities may have costs)
    Object.keys(tripData.cityActivities).forEach(city => {
      const activities = tripData.cityActivities[city] || [];
      activitiesCost += activities.length * 10; // Mock price
    });

    // Add-ons
    tripData.addOns.forEach(addonId => {
      const addon = addOnsOptions.find(a => a.id === addonId);
      if (addon) {
        addOnsCost += addon.price;
      }
    });

    const total = hotelCost + transportCost + activitiesCost + addOnsCost;

    setTripData(prev => ({
      ...prev,
      pricing: {
        hotels: hotelCost,
        transport: transportCost,
        activities: activitiesCost,
        addOns: addOnsCost,
        total: total
      }
    }));
  }, [tripData.selectedHotels, tripData.cityNights, tripData.airportTransfer, 
      tripData.interCityTransport, tripData.cityActivities, tripData.addOns]);

  // Validation for each step
  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 1:
        return tripData.dateFrom && tripData.dateTo && tripData.country && 
               tripData.selectedCities.length > 0 && getTotalPassengers() > 0;
      case 2:
        return tripData.cityOrder.length > 0 && getAllocatedNights() === totalNights;
      case 3:
        return Object.keys(tripData.selectedHotels).length === tripData.cityOrder.length;
      case 4:
        return true; // Transport is optional
      case 5:
        return true; // Activities are optional
      case 6:
        return true; // Add-ons are optional
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (canProceedToNextStep()) {
      setCurrentStep(prev => Math.min(prev + 1, 7));
    } else {
      toast({
        title: 'Incomplete Information',
        description: 'Please complete all required fields before proceeding.',
        variant: 'destructive'
      });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Drag and drop handlers
  const handleDragStart = (e, index) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/html'));
    const newOrder = [...tripData.cityOrder];
    const draggedCity = newOrder[dragIndex];
    newOrder.splice(dragIndex, 1);
    newOrder.splice(dropIndex, 0, draggedCity);
    setTripData(prev => ({ ...prev, cityOrder: newOrder }));
  };

  // Step 1: Trip Overview
  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">When do you want to travel?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>From Date</Label>
            <Input
              type="date"
              value={tripData.dateFrom}
              onChange={(e) => setTripData(prev => ({ ...prev, dateFrom: e.target.value }))}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div>
            <Label>To Date</Label>
            <Input
              type="date"
              value={tripData.dateTo}
              onChange={(e) => setTripData(prev => ({ ...prev, dateTo: e.target.value }))}
              min={tripData.dateFrom || new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
        {totalDays > 0 && (
          <p className="text-sm text-gray-600 mt-2">
            Total duration: <span className="font-bold text-[#1a2f4a]">{totalDays} days / {totalNights} nights</span>
          </p>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Where do you want to go?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {countries.map(country => (
            <button
              key={country}
              onClick={() => {
                setTripData(prev => ({ ...prev, country, selectedCities: [] }));
              }}
              className={`p-4 border-2 rounded-lg transition-all ${
                tripData.country === country
                  ? 'border-[#d4af37] bg-[#d4af37]/10'
                  : 'border-gray-300 hover:border-[#d4af37]/50'
              }`}
            >
              <div className="font-semibold text-lg">{country}</div>
            </button>
          ))}
        </div>

        {tripData.country && (
          <div>
            <Label className="mb-3 block">Select Cities to Visit</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {getAvailableCities().map(city => (
                <div key={city} className="flex items-center">
                  <Checkbox
                    id={`city-${city}`}
                    checked={tripData.selectedCities.includes(city)}
                    onCheckedChange={(checked) => {
                      setTripData(prev => ({
                        ...prev,
                        selectedCities: checked
                          ? [...prev.selectedCities, city]
                          : prev.selectedCities.filter(c => c !== city),
                        cityOrder: checked
                          ? [...prev.cityOrder, city]
                          : prev.cityOrder.filter(c => c !== city)
                      }));
                    }}
                  />
                  <label htmlFor={`city-${city}`} className="ml-2 cursor-pointer text-sm">
                    {city}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">How many travelers?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">Adults</div>
                  <div className="text-xs text-gray-600">Age 12+</div>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTripData(prev => ({
                      ...prev,
                      passengers: { ...prev.passengers, adults: Math.max(1, prev.passengers.adults - 1) }
                    }))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-bold text-xl w-8 text-center">{tripData.passengers.adults}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTripData(prev => ({
                      ...prev,
                      passengers: { ...prev.passengers, adults: prev.passengers.adults + 1 }
                    }))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">Children (with bed)</div>
                  <div className="text-xs text-gray-600">Age 2-11</div>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTripData(prev => ({
                      ...prev,
                      passengers: { ...prev.passengers, childrenWithBed: Math.max(0, prev.passengers.childrenWithBed - 1) }
                    }))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-bold text-xl w-8 text-center">{tripData.passengers.childrenWithBed}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTripData(prev => ({
                      ...prev,
                      passengers: { ...prev.passengers, childrenWithBed: prev.passengers.childrenWithBed + 1 }
                    }))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">Children (without bed)</div>
                  <div className="text-xs text-gray-600">Age 2-11</div>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTripData(prev => ({
                      ...prev,
                      passengers: { ...prev.passengers, childrenWithoutBed: Math.max(0, prev.passengers.childrenWithoutBed - 1) }
                    }))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-bold text-xl w-8 text-center">{tripData.passengers.childrenWithoutBed}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTripData(prev => ({
                      ...prev,
                      passengers: { ...prev.passengers, childrenWithoutBed: prev.passengers.childrenWithoutBed + 1 }
                    }))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">Infants</div>
                  <div className="text-xs text-gray-600">Under 2</div>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTripData(prev => ({
                      ...prev,
                      passengers: { ...prev.passengers, infants: Math.max(0, prev.passengers.infants - 1) }
                    }))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-bold text-xl w-8 text-center">{tripData.passengers.infants}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTripData(prev => ({
                      ...prev,
                      passengers: { ...prev.passengers, infants: prev.passengers.infants + 1 }
                    }))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm text-gray-600 mt-3">
          Total travelers: <span className="font-bold text-[#1a2f4a]">{getTotalPassengers()}</span>
        </p>
      </div>
    </div>
  );

  // Step 2: City Planning
  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Arrange Your Cities</h2>
        <p className="text-gray-600 mb-4">Drag and drop to arrange cities in the order you want to visit them</p>
        
        <div className="space-y-3">
          {tripData.cityOrder.map((city, index) => (
            <div
              key={city}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              className="bg-white border-2 border-gray-200 rounded-lg p-4 cursor-move hover:border-[#d4af37] transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <GripVertical className="h-5 w-5 text-gray-400" />
                  <div className="w-8 h-8 bg-[#d4af37] text-[#1a2f4a] rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{city}</div>
                    <div className="text-sm text-gray-600">
                      {getHotelsForCity(city).length} hotels available
                    </div>
                  </div>
                </div>
                <MapPin className="h-5 w-5 text-[#d4af37]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Allocate Nights per City</h2>
        <p className="text-gray-600 mb-4">
          Total nights to allocate: <span className="font-bold">{totalNights}</span> | 
          Allocated: <span className="font-bold text-[#d4af37]">{getAllocatedNights()}</span> | 
          Remaining: <span className="font-bold text-[#1a2f4a]">{totalNights - getAllocatedNights()}</span>
        </p>

        <div className="space-y-4">
          {tripData.cityOrder.map(city => (
            <Card key={city}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Hotel className="h-5 w-5 text-[#d4af37]" />
                    <div>
                      <div className="font-semibold">{city}</div>
                      <div className="text-xs text-gray-600">
                        {tripData.cityNights[city] || 0} night(s)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const currentNights = tripData.cityNights[city] || 0;
                        setTripData(prev => ({
                          ...prev,
                          cityNights: {
                            ...prev.cityNights,
                            [city]: Math.max(0, currentNights - 1)
                          }
                        }));
                      }}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-bold text-xl w-12 text-center">
                      {tripData.cityNights[city] || 0}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const currentNights = tripData.cityNights[city] || 0;
                        const allocated = getAllocatedNights();
                        if (allocated < totalNights) {
                          setTripData(prev => ({
                            ...prev,
                            cityNights: {
                              ...prev.cityNights,
                              [city]: currentNights + 1
                            }
                          }));
                        }
                      }}
                      disabled={getAllocatedNights() >= totalNights}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {getAllocatedNights() !== totalNights && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-yellow-800">
              ⚠️ Please allocate all {totalNights} nights before proceeding to the next step.
            </p>
          </div>
        )}
      </div>
    </div>
  );

  // Continuing in next part due to length...
  // Step 3: Hotels
  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Select Hotel Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['budget', '4star', '5star'].map(category => (
            <button
              key={category}
              onClick={() => setTripData(prev => ({ ...prev, hotelCategory: category }))}
              className={`p-4 border-2 rounded-lg transition-all ${
                tripData.hotelCategory === category
                  ? 'border-[#d4af37] bg-[#d4af37]/10'
                  : 'border-gray-300 hover:border-[#d4af37]/50'
              }`}
            >
              <div className="font-semibold text-lg capitalize">
                {category === 'budget' ? 'Budget (3★ or less)' : 
                 category === '4star' ? '4-Star Hotels' : '5-Star Luxury'}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Select Hotels for Each City</h2>
        {tripData.cityOrder.map(city => (
          <div key={city} className="mb-6">
            <h3 className="text-xl font-bold text-[#1a2f4a] mb-3">
              {city} ({tripData.cityNights[city]} night{tripData.cityNights[city] !== 1 ? 's' : ''})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getHotelsForCity(city).map(hotel => (
                <Card
                  key={hotel.id}
                  className={`cursor-pointer transition-all ${
                    tripData.selectedHotels[city]?.id === hotel.id
                      ? 'border-2 border-[#d4af37] shadow-lg'
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => {
                    setTripData(prev => ({
                      ...prev,
                      selectedHotels: {
                        ...prev.selectedHotels,
                        [city]: hotel
                      }
                    }));
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="font-bold text-[#1a2f4a]">{hotel.name}</h4>
                          {tripData.selectedHotels[city]?.id === hotel.id && (
                            <Check className="h-5 w-5 text-green-600" />
                          )}
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(hotel.stars)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-[#d4af37] text-[#d4af37]" />
                          ))}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <MapPin className="h-3 w-3 mr-1" />
                          {hotel.distanceToShrine} km to shrine
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-lg font-bold text-[#1a2f4a]">${hotel.price}</span>
                            <span className="text-xs text-gray-600">/night</span>
                          </div>
                          <div className="text-xs text-gray-600">
                            Total: ${hotel.price * (tripData.cityNights[city] || 0)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Step 4: Transport
  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Airport Transfer</h2>
        <Card className="cursor-pointer" onClick={() => setTripData(prev => ({ ...prev, airportTransfer: !prev.airportTransfer }))}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Plane className="h-6 w-6 text-[#d4af37]" />
                <div>
                  <div className="font-semibold">Airport Pickup & Drop-off</div>
                  <div className="text-sm text-gray-600">Private transfer service</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#1a2f4a]">$50</span>
                <Checkbox checked={tripData.airportTransfer} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {tripData.cityOrder.length > 1 && (
        <div>
          <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Inter-City Transport</h2>
          <p className="text-gray-600 mb-4">Select transport between cities</p>
          {tripData.cityOrder.map((city, index) => {
            if (index === tripData.cityOrder.length - 1) return null;
            const nextCity = tripData.cityOrder[index + 1];
            const routeKey = `${city}-${nextCity}`;
            
            return (
              <Card
                key={routeKey}
                className="mb-3 cursor-pointer"
                onClick={() => {
                  setTripData(prev => ({
                    ...prev,
                    interCityTransport: {
                      ...prev.interCityTransport,
                      [routeKey]: !prev.interCityTransport[routeKey]
                    }
                  }));
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Car className="h-6 w-6 text-[#d4af37]" />
                      <div>
                        <div className="font-semibold">{city} → {nextCity}</div>
                        <div className="text-sm text-gray-600">Private transport</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#1a2f4a]">$80</span>
                      <Checkbox checked={tripData.interCityTransport[routeKey]} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );

  // Step 5: Activities  
  const renderStep5 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Plan Your Daily Activities</h2>
        <p className="text-gray-600 mb-4">Select ziyarat and activities for each day in each city</p>
      </div>

      {tripData.cityOrder.map(city => {
        const nights = tripData.cityNights[city] || 0;
        const ziyaratPlaces = getZiyaratForCity(city);
        
        return (
          <div key={city} className="mb-6">
            <h3 className="text-xl font-bold text-[#1a2f4a] mb-3">{city}</h3>
            
            {[...Array(nights + 1)].map((_, dayIndex) => (
              <Card key={dayIndex} className="mb-3">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-[#1a2f4a] mb-3">Day {dayIndex + 1}</h4>
                  
                  {ziyaratPlaces.length > 0 ? (
                    <div className="space-y-2">
                      {ziyaratPlaces.slice(0, 3).map((place, idx) => (
                        <div key={idx} className="flex items-center">
                          <Checkbox
                            id={`${city}-day${dayIndex}-${idx}`}
                            checked={tripData.cityActivities[city]?.includes(place.name)}
                            onCheckedChange={(checked) => {
                              setTripData(prev => {
                                const cityActivities = prev.cityActivities[city] || [];
                                return {
                                  ...prev,
                                  cityActivities: {
                                    ...prev.cityActivities,
                                    [city]: checked
                                      ? [...cityActivities, place.name]
                                      : cityActivities.filter(a => a !== place.name)
                                  }
                                };
                              });
                            }}
                          />
                          <label htmlFor={`${city}-day${dayIndex}-${idx}`} className="ml-2 text-sm cursor-pointer">
                            {place.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-600">Free day for personal activities</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        );
      })}
    </div>
  );

  // Step 6: Add-ons
  const renderStep6 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Enhance Your Trip</h2>
        <p className="text-gray-600 mb-4">Select optional add-ons to make your journey more comfortable</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addOnsOptions.map(addon => {
          const Icon = addon.icon;
          return (
            <Card
              key={addon.id}
              className={`cursor-pointer transition-all ${
                tripData.addOns.includes(addon.id)
                  ? 'border-2 border-[#d4af37] bg-[#d4af37]/5'
                  : 'hover:shadow-lg'
              }`}
              onClick={() => {
                setTripData(prev => ({
                  ...prev,
                  addOns: prev.addOns.includes(addon.id)
                    ? prev.addOns.filter(id => id !== addon.id)
                    : [...prev.addOns, addon.id]
                }));
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <div className="font-semibold">{addon.name}</div>
                      <div className="text-sm text-gray-600">${addon.price}</div>
                    </div>
                  </div>
                  <Checkbox checked={tripData.addOns.includes(addon.id)} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  // Step 7: Review & Book
  const renderStep7 = () => {
    const [expandedCity, setExpandedCity] = useState(null);

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-[#1a2f4a] mb-2">Review Your Trip</h2>
          <p className="text-gray-600">Please review all details before proceeding to booking</p>
        </div>

        {/* Trip Summary */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-[#1a2f4a] mb-4">Trip Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold">{totalDays} days / {totalNights} nights</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Dates</div>
                <div className="font-semibold">
                  {new Date(tripData.dateFrom).toLocaleDateString()} - {new Date(tripData.dateTo).toLocaleDateString()}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Destination</div>
                <div className="font-semibold">{tripData.country}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Travelers</div>
                <div className="font-semibold">{getTotalPassengers()} people</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Itinerary */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-[#1a2f4a] mb-4">Day-by-Day Itinerary</h3>
            {tripData.cityOrder.map((city, cityIndex) => {
              const nights = tripData.cityNights[city];
              const hotel = tripData.selectedHotels[city];
              
              return (
                <div key={city} className="mb-4">
                  <button
                    onClick={() => setExpandedCity(expandedCity === city ? null : city)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#d4af37] text-[#1a2f4a] rounded-full flex items-center justify-center font-bold">
                        {cityIndex + 1}
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-lg">{city}</div>
                        <div className="text-sm text-gray-600">{nights} night{nights !== 1 ? 's' : ''} • {hotel?.name}</div>
                      </div>
                    </div>
                    {expandedCity === city ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  
                  {expandedCity === city && (
                    <div className="p-4 border border-gray-200 rounded-lg mt-2">
                      <div className="mb-3">
                        <div className="font-semibold mb-2">Accommodation</div>
                        <div className="flex items-center gap-3">
                          <img src={hotel.image} alt={hotel.name} className="w-16 h-16 object-cover rounded" />
                          <div>
                            <div className="font-medium">{hotel.name}</div>
                            <div className="text-sm text-gray-600">
                              {[...Array(hotel.stars)].map((_, i) => '⭐').join('')}
                            </div>
                            <div className="text-sm text-gray-600">
                              ${hotel.price}/night × {nights} nights = ${hotel.price * nights}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {tripData.cityActivities[city]?.length > 0 && (
                        <div>
                          <div className="font-semibold mb-2">Planned Activities</div>
                          <ul className="list-disc list-inside text-sm text-gray-700">
                            {tripData.cityActivities[city].map((activity, idx) => (
                              <li key={idx}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Transport */}
        {(tripData.airportTransfer || Object.values(tripData.interCityTransport).some(v => v)) && (
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#1a2f4a] mb-4">Transport</h3>
              <div className="space-y-2 text-sm">
                {tripData.airportTransfer && (
                  <div className="flex items-center justify-between">
                    <span>✓ Airport Transfer</span>
                    <span className="font-semibold">$50</span>
                  </div>
                )}
                {Object.keys(tripData.interCityTransport).map(route => {
                  if (tripData.interCityTransport[route]) {
                    return (
                      <div key={route} className="flex items-center justify-between">
                        <span>✓ {route.replace('-', ' → ')}</span>
                        <span className="font-semibold">$80</span>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add-ons */}
        {tripData.addOns.length > 0 && (
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#1a2f4a] mb-4">Add-ons</h3>
              <div className="space-y-2 text-sm">
                {tripData.addOns.map(addonId => {
                  const addon = addOnsOptions.find(a => a.id === addonId);
                  return (
                    <div key={addonId} className="flex items-center justify-between">
                      <span>✓ {addon.name}</span>
                      <span className="font-semibold">${addon.price}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={() => {
              toast({
                title: 'Trip Saved!',
                description: 'Your itinerary has been saved. You can continue editing or proceed to booking.'
              });
            }}
            variant="outline"
            className="flex-1"
          >
            Save Itinerary
          </Button>
          <Button
            onClick={() => {
              toast({
                title: 'Booking Initiated!',
                description: 'Redirecting to payment...'
              });
            }}
            className="flex-1 bg-[#d4af37] hover:bg-[#c49f27] text-[#1a2f4a] font-bold"
          >
            Proceed to Booking
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a2f4a] to-[#2a4f6a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Plan Your Own Trip</h1>
          <p className="text-gray-200 text-lg">Create a personalized itinerary that suits your needs</p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;
              
              return (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-[#d4af37] text-[#1a2f4a]'
                          : isCompleted
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {isCompleted ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                    </div>
                    <div className="text-xs mt-2 text-center hidden md:block">
                      <div className={isActive ? 'font-bold' : ''}>{step.title}</div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-all ${
                        isCompleted ? 'bg-green-500' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
                {currentStep === 4 && renderStep4()}
                {currentStep === 5 && renderStep5()}
                {currentStep === 6 && renderStep6()}
                {currentStep === 7 && renderStep7()}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  
                  {currentStep < 7 ? (
                    <Button
                      onClick={nextStep}
                      disabled={!canProceedToNextStep()}
                      className="bg-[#d4af37] hover:bg-[#c49f27] text-[#1a2f4a]"
                    >
                      Next Step
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-32">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1a2f4a] mb-4">Trip Summary</h3>
                
                <div className="space-y-3 mb-6">
                  {totalDays > 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold">{totalDays} days / {totalNights} nights</span>
                    </div>
                  )}
                  
                  {tripData.selectedCities.length > 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Cities</span>
                      <span className="font-semibold">{tripData.selectedCities.length}</span>
                    </div>
                  )}
                  
                  {getTotalPassengers() > 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Travelers</span>
                      <span className="font-semibold">{getTotalPassengers()}</span>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4 mb-6">
                  <h4 className="font-semibold mb-3">Price Breakdown</h4>
                  <div className="space-y-2 text-sm">
                    {tripData.pricing.hotels > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Hotels</span>
                        <span className="font-semibold">${tripData.pricing.hotels}</span>
                      </div>
                    )}
                    {tripData.pricing.transport > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Transport</span>
                        <span className="font-semibold">${tripData.pricing.transport}</span>
                      </div>
                    )}
                    {tripData.pricing.activities > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Activities</span>
                        <span className="font-semibold">${tripData.pricing.activities}</span>
                      </div>
                    )}
                    {tripData.pricing.addOns > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Add-ons</span>
                        <span className="font-semibold">${tripData.pricing.addOns}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-3xl text-[#1a2f4a]">
                      ${tripData.pricing.total}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">Per person pricing available at checkout</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTripEnhanced;
