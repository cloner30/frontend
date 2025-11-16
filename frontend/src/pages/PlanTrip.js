import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Hotel, Plane, DollarSign, Check } from 'lucide-react';
import { cities, hotels } from '../mock';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';
import { useToast } from '../hooks/use-toast';

const PlanTrip = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [tripData, setTripData] = useState({
    startDate: '',
    endDate: '',
    selectedCities: [],
    selectedHotels: [],
    includeFlights: false,
    includeGuide: false,
    budget: '',
  });

  const steps = [
    { number: 1, title: 'Dates', icon: Calendar },
    { number: 2, title: 'Cities', icon: MapPin },
    { number: 3, title: 'Hotels', icon: Hotel },
    { number: 4, title: 'Extras', icon: Plane },
    { number: 5, title: 'Summary', icon: Check },
  ];

  const handleCityToggle = (cityId) => {
    setTripData((prev) => ({
      ...prev,
      selectedCities: prev.selectedCities.includes(cityId)
        ? prev.selectedCities.filter((id) => id !== cityId)
        : [...prev.selectedCities, cityId],
    }));
  };

  const handleHotelToggle = (hotelId) => {
    setTripData((prev) => ({
      ...prev,
      selectedHotels: prev.selectedHotels.includes(hotelId)
        ? prev.selectedHotels.filter((id) => id !== hotelId)
        : [...prev.selectedHotels, hotelId],
    }));
  };

  const handleSubmit = () => {
    toast({
      title: 'Trip Plan Created!',
      description: 'Your custom itinerary has been saved.',
    });
    setTimeout(() => navigate('/account'), 1500);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return tripData.startDate && tripData.endDate;
      case 2:
        return tripData.selectedCities.length > 0;
      case 3:
        return tripData.selectedHotels.length > 0;
      default:
        return true;
    }
  };

  const selectedCitiesData = cities.filter((c) => tripData.selectedCities.includes(c.id));
  const availableHotels = hotels.filter((h) =>
    selectedCitiesData.some((c) => c.name === h.city)
  );
  const selectedHotelsData = hotels.filter((h) => tripData.selectedHotels.includes(h.id));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1a2f4a] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">{t('planYourTrip')}</h1>
          <p className="text-gray-300 mt-2">{t('planYourTripDesc')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = step.number === currentStep;
              const isCompleted = step.number < currentStep;
              return (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isCompleted
                          ? 'bg-green-600 text-white'
                          : isActive
                          ? 'bg-[#1a2f4a] text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      {isCompleted ? <Check className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
                    </div>
                    <span
                      className={`text-sm mt-2 font-medium ${
                        isActive ? 'text-[#1a2f4a]' : 'text-gray-500'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div
                      className={`h-1 flex-1 mx-2 rounded ${
                        step.number < currentStep ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <Card className="mb-6">
          <CardContent className="p-8">
            {/* Step 1: Dates */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-[#1a2f4a] mb-6">Select Your Travel Dates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date
                    </label>
                    <Input
                      type="date"
                      value={tripData.startDate}
                      onChange={(e) =>
                        setTripData({ ...tripData, startDate: e.target.value })
                      }
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date
                    </label>
                    <Input
                      type="date"
                      value={tripData.endDate}
                      onChange={(e) => setTripData({ ...tripData, endDate: e.target.value })}
                      min={tripData.startDate || new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Cities */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-[#1a2f4a] mb-6">
                  Select Cities to Visit
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cities.map((city) => (
                    <Card
                      key={city.id}
                      className={`cursor-pointer transition-all ${
                        tripData.selectedCities.includes(city.id)
                          ? 'ring-2 ring-[#ffce05] shadow-lg'
                          : 'hover:shadow-md'
                      }`}
                      onClick={() => handleCityToggle(city.id)}
                    >
                      <div className="relative h-32">
                        <img
                          src={city.image}
                          alt={city.name}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                        {tripData.selectedCities.includes(city.id) && (
                          <div className="absolute top-2 right-2 bg-[#ffce05] rounded-full p-1">
                            <Check className="h-4 w-4 text-[#1a2f4a]" />
                          </div>
                        )}
                      </div>
                      <CardContent className="p-3">
                        <h3 className="font-bold text-[#1a2f4a]">{city.name}</h3>
                        <p className="text-sm text-gray-600">{city.country}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Hotels */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-[#1a2f4a] mb-6">Select Hotels</h2>
                {availableHotels.length === 0 ? (
                  <p className="text-gray-500">Please select cities first to see available hotels.</p>
                ) : (
                  <div className="space-y-4">
                    {availableHotels.map((hotel) => (
                      <Card
                        key={hotel.id}
                        className={`cursor-pointer transition-all ${
                          tripData.selectedHotels.includes(hotel.id)
                            ? 'ring-2 ring-[#ffce05]'
                            : 'hover:shadow-md'
                        }`}
                        onClick={() => handleHotelToggle(hotel.id)}
                      >
                        <CardContent className="p-4 flex items-center">
                          <Checkbox
                            checked={tripData.selectedHotels.includes(hotel.id)}
                            className="mr-4"
                          />
                          <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-24 h-24 object-cover rounded-lg mr-4"
                          />
                          <div className="flex-1">
                            <h3 className="font-bold text-[#1a2f4a]">{hotel.name}</h3>
                            <p className="text-sm text-gray-600">{hotel.city}</p>
                            <p className="text-sm text-gray-500">
                              {hotel.distanceToShrine} km to shrine
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-[#1a2f4a]">${hotel.price}</div>
                            <div className="text-sm text-gray-500">per night</div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Extras */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-[#1a2f4a] mb-6">Additional Services</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      checked={tripData.includeFlights}
                      onCheckedChange={(checked) =>
                        setTripData({ ...tripData, includeFlights: checked })
                      }
                    />
                    <div>
                      <div className="font-semibold text-[#1a2f4a]">Include Flight Booking</div>
                      <p className="text-sm text-gray-600">
                        We'll help arrange your flights to and from your destinations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      checked={tripData.includeGuide}
                      onCheckedChange={(checked) =>
                        setTripData({ ...tripData, includeGuide: checked })
                      }
                    />
                    <div>
                      <div className="font-semibold text-[#1a2f4a]">Professional Guide</div>
                      <p className="text-sm text-gray-600">
                        Knowledgeable guide for spiritual and historical context
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range (USD)
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g., 2000-3000"
                      value={tripData.budget}
                      onChange={(e) => setTripData({ ...tripData, budget: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Summary */}
            {currentStep === 5 && (
              <div>
                <h2 className="text-2xl font-bold text-[#1a2f4a] mb-6">Trip Summary</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-[#1a2f4a] mb-2">Travel Dates</h3>
                    <p className="text-gray-700">
                      {new Date(tripData.startDate).toLocaleDateString()} -{' '}
                      {new Date(tripData.endDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a2f4a] mb-2">Selected Cities</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCitiesData.map((city) => (
                        <span
                          key={city.id}
                          className="bg-[#1a2f4a] text-white px-3 py-1 rounded-full text-sm"
                        >
                          {city.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a2f4a] mb-2">Selected Hotels</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {selectedHotelsData.map((hotel) => (
                        <li key={hotel.id}>
                          {hotel.name} - {hotel.city}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a2f4a] mb-2">Additional Services</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {tripData.includeFlights && <li>Flight Booking Assistance</li>}
                      {tripData.includeGuide && <li>Professional Guide</li>}
                      {tripData.budget && <li>Budget: ${tripData.budget}</li>}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(currentStep - 1)}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          {currentStep < 5 ? (
            <Button
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={!canProceed()}
              className="bg-[#1a2f4a] hover:bg-[#2a3f5a]"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-[#ffce05] hover:bg-[#c49f27] text-[#1a2f4a]"
            >
              Save Trip Plan
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;