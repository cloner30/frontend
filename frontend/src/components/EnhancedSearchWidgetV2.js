import React, { useState } from 'react';
import { Search, Calendar as CalendarIcon, Users, Plane, Hotel, MapPin, Plus, Minus, X, Check, UserCircle, Baby, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { format, addDays } from 'date-fns';
import { cn } from '../lib/utils';

const EnhancedSearchWidgetV2 = () => {
  const [searchType, setSearchType] = useState('hotels');
  const [destination, setDestination] = useState('');
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  // Room configuration
  const [rooms, setRooms] = useState([
    { adults: 2, children: 0 }
  ]);
  
  // Flight passengers
  const [flightPassengers, setFlightPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  });

  const navigate = useNavigate();
  const { t } = useLanguage();

  // Popular destinations
  const popularDestinations = [
    { name: 'Karbala', country: 'Iraq', icon: '🕌' },
    { name: 'Najaf', country: 'Iraq', icon: '⭐' },
    { name: 'Mashhad', country: 'Iran', icon: '🌟' },
    { name: 'Qom', country: 'Iran', icon: '🕋' },
    { name: 'Baghdad', country: 'Iraq', icon: '🏛️' },
    { name: 'Tehran', country: 'Iran', icon: '🏙️' }
  ];

  // Guest presets
  const guestPresets = [
    { label: 'Solo Traveler', adults: 1, children: 0, rooms: 1 },
    { label: 'Couple', adults: 2, children: 0, rooms: 1 },
    { label: 'Family (4)', adults: 2, children: 2, rooms: 1 },
    { label: 'Large Group', adults: 4, children: 2, rooms: 2 }
  ];

  const getTotalGuests = () => {
    return rooms.reduce((total, room) => total + room.adults + room.children, 0);
  };

  const getTotalFlightPassengers = () => {
    return flightPassengers.adults + flightPassengers.children + flightPassengers.infants;
  };

  const addRoom = () => {
    if (rooms.length < 5) {
      setRooms([...rooms, { adults: 1, children: 0 }]);
    }
  };

  const removeRoom = (index) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter((_, i) => i !== index));
    }
  };

  const updateRoom = (index, field, value) => {
    const newRooms = [...rooms];
    newRooms[index][field] = Math.max(field === 'adults' ? 1 : 0, value);
    setRooms(newRooms);
  };

  const updateFlightPassengers = (field, value) => {
    setFlightPassengers({
      ...flightPassengers,
      [field]: Math.max(field === 'adults' ? 1 : 0, value)
    });
  };

  const applyGuestPreset = (preset) => {
    if (searchType === 'hotels') {
      const newRooms = [];
      for (let i = 0; i < preset.rooms; i++) {
        newRooms.push({
          adults: Math.floor(preset.adults / preset.rooms),
          children: i === 0 ? preset.children : 0
        });
      }
      setRooms(newRooms);
    } else {
      setFlightPassengers({
        adults: preset.adults,
        children: preset.children,
        infants: 0
      });
    }
    setShowGuestsDropdown(false);
  };

  const validateSearch = () => {
    const errors = {};
    
    if (!destination.trim()) {
      errors.destination = 'Please enter a destination';
    }
    
    if (searchType === 'hotels') {
      if (!checkInDate) {
        errors.checkIn = 'Select check-in date';
      }
      if (!checkOutDate) {
        errors.checkOut = 'Select check-out date';
      }
    } else {
      if (!departureDate) {
        errors.departure = 'Select departure date';
      }
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (!validateSearch()) {
      return;
    }
    
    if (searchType === 'hotels') {
      const params = new URLSearchParams({
        type: searchType,
        destination,
        checkIn: checkInDate ? format(checkInDate, 'yyyy-MM-dd') : '',
        checkOut: checkOutDate ? format(checkOutDate, 'yyyy-MM-dd') : '',
        rooms: rooms.length.toString(),
        guests: getTotalGuests().toString(),
      });
      navigate(`/search?${params.toString()}`);
    } else {
      const params = new URLSearchParams({
        type: searchType,
        from: 'London',
        destination,
        departure: departureDate ? format(departureDate, 'yyyy-MM-dd') : '',
        return: returnDate ? format(returnDate, 'yyyy-MM-dd') : '',
        passengers: getTotalFlightPassengers().toString(),
      });
      navigate(`/search?${params.toString()}`);
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-100">
      {/* Search Type Tabs */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setSearchType('hotels')}
          className={cn(
            "flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3",
            searchType === 'hotels'
              ? "bg-gradient-to-r from-[#1a2f4a] to-[#2a4f6a] text-white shadow-lg scale-105"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
        >
          <Hotel className="h-6 w-6" />
          Hotels
        </button>
        <button
          onClick={() => setSearchType('flights')}
          className={cn(
            "flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3",
            searchType === 'flights'
              ? "bg-gradient-to-r from-[#1a2f4a] to-[#2a4f6a] text-white shadow-lg scale-105"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
        >
          <Plane className="h-6 w-6" />
          Flights
        </button>
        <button
          onClick={() => navigate('/groups')}
          className="flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          <Users className="h-6 w-6" />
          Group Tours
        </button>
      </div>

      <form onSubmit={handleSearch}>
        <div className="space-y-6">
          {/* Destination with Popular Cities */}
          <div>
            <Label className="text-sm font-semibold text-gray-700 mb-2 block">
              Where do you want to go?
            </Label>
            <div className="relative">
              <MapPin className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-[#ffce05] z-10" />
              <Input
                type="text"
                placeholder="Enter destination (e.g., Karbala, Najaf, Mashhad)"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  setShowDestinationSuggestions(true);
                  if (validationErrors.destination) {
                    setValidationErrors({ ...validationErrors, destination: null });
                  }
                }}
                onFocus={() => setShowDestinationSuggestions(true)}
                className={cn(
                  "h-16 pl-16 pr-12 text-lg rounded-xl border-2 transition-all",
                  validationErrors.destination 
                    ? "border-red-500 focus:border-red-500" 
                    : destination 
                    ? "border-green-500 focus:border-green-600" 
                    : "border-gray-300 focus:border-[#1a2f4a]"
                )}
              />
              {destination && !validationErrors.destination && (
                <Check className="absolute right-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-green-600" />
              )}
              {validationErrors.destination && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.destination}</p>
              )}
            </div>

            {/* Popular Destinations */}
            {(!destination || showDestinationSuggestions) && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Popular destinations:</p>
                <div className="flex flex-wrap gap-2">
                  {popularDestinations.map((dest, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setDestination(dest.name);
                        setShowDestinationSuggestions(false);
                        setValidationErrors({ ...validationErrors, destination: null });
                      }}
                      className="px-4 py-2 bg-gray-100 hover:bg-[#ffce05] hover:text-[#1a2f4a] rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 border-2 border-transparent hover:border-[#ffce05]"
                    >
                      <span>{dest.icon}</span>
                      <span>{dest.name}</span>
                      <span className="text-xs text-gray-500">{dest.country}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Dates - Hotels */}
          {searchType === 'hotels' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Check-in Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-16 justify-start text-left font-normal text-lg rounded-xl border-2 pl-16 hover:border-[#1a2f4a]",
                        !checkInDate && "text-gray-500",
                        validationErrors.checkIn ? "border-red-500" : checkInDate ? "border-green-500" : "border-gray-300"
                      )}
                    >
                      <CalendarIcon className="absolute left-5 h-6 w-6 text-[#ffce05]" />
                      {checkInDate ? format(checkInDate, 'PPP') : <span>Select check-in date</span>}
                      {checkInDate && (
                        <Check className="absolute right-5 h-6 w-6 text-green-600" />
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <div className="p-3 border-b">
                      <p className="font-semibold mb-2">Quick Select:</p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setCheckInDate(new Date());
                            setValidationErrors({ ...validationErrors, checkIn: null });
                          }}
                        >
                          Today
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            const tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            setCheckInDate(tomorrow);
                            setValidationErrors({ ...validationErrors, checkIn: null });
                          }}
                        >
                          Tomorrow
                        </Button>
                      </div>
                    </div>
                    <Calendar
                      mode="single"
                      selected={checkInDate}
                      onSelect={(date) => {
                        setCheckInDate(date);
                        setValidationErrors({ ...validationErrors, checkIn: null });
                      }}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {validationErrors.checkIn && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.checkIn}</p>
                )}
              </div>

              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Check-out Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-16 justify-start text-left font-normal text-lg rounded-xl border-2 pl-16 hover:border-[#1a2f4a]",
                        !checkOutDate && "text-gray-500",
                        validationErrors.checkOut ? "border-red-500" : checkOutDate ? "border-green-500" : "border-gray-300"
                      )}
                    >
                      <CalendarIcon className="absolute left-5 h-6 w-6 text-[#ffce05]" />
                      {checkOutDate ? format(checkOutDate, 'PPP') : <span>Select check-out date</span>}
                      {checkOutDate && (
                        <Check className="absolute right-5 h-6 w-6 text-green-600" />
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkOutDate}
                      onSelect={(date) => {
                        setCheckOutDate(date);
                        setValidationErrors({ ...validationErrors, checkOut: null });
                      }}
                      disabled={(date) => 
                        checkInDate 
                          ? date <= checkInDate 
                          : date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {validationErrors.checkOut && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.checkOut}</p>
                )}
              </div>
            </div>
          )}

          {/* Dates - Flights */}
          {searchType === 'flights' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Departure Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-16 justify-start text-left font-normal text-lg rounded-xl border-2 pl-16 hover:border-[#1a2f4a]",
                        !departureDate && "text-gray-500",
                        validationErrors.departure ? "border-red-500" : departureDate ? "border-green-500" : "border-gray-300"
                      )}
                    >
                      <CalendarIcon className="absolute left-5 h-6 w-6 text-[#ffce05]" />
                      {departureDate ? format(departureDate, 'PPP') : <span>Select departure date</span>}
                      {departureDate && (
                        <Check className="absolute right-5 h-6 w-6 text-green-600" />
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={departureDate}
                      onSelect={(date) => {
                        setDepartureDate(date);
                        setValidationErrors({ ...validationErrors, departure: null });
                      }}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {validationErrors.departure && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.departure}</p>
                )}
              </div>

              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Return Date (Optional)
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-16 justify-start text-left font-normal text-lg rounded-xl border-2 pl-16 hover:border-[#1a2f4a]",
                        !returnDate && "text-gray-500",
                        returnDate ? "border-green-500" : "border-gray-300"
                      )}
                    >
                      <CalendarIcon className="absolute left-5 h-6 w-6 text-[#ffce05]" />
                      {returnDate ? format(returnDate, 'PPP') : <span>Select return date</span>}
                      {returnDate && (
                        <Check className="absolute right-5 h-6 w-6 text-green-600" />
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={returnDate}
                      onSelect={setReturnDate}
                      disabled={(date) => 
                        departureDate 
                          ? date <= departureDate 
                          : date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          )}

          {/* Guests/Passengers */}
          <div className="relative">
            <Label className="text-sm font-semibold text-gray-700 mb-2 block">
              {searchType === 'hotels' ? 'Rooms & Guests' : 'Passengers'}
            </Label>
            <button
              type="button"
              onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
              className="w-full h-16 px-6 pl-16 text-left text-lg border-2 border-gray-300 rounded-xl hover:border-[#1a2f4a] transition-all bg-white flex items-center justify-between"
            >
              <div className="flex items-center">
                <Users className="absolute left-5 h-6 w-6 text-[#ffce05]" />
                <span className="font-medium text-gray-700">
                  {searchType === 'hotels'
                    ? `${getTotalGuests()} Guest${getTotalGuests() !== 1 ? 's' : ''}, ${rooms.length} Room${rooms.length !== 1 ? 's' : ''}`
                    : `${getTotalFlightPassengers()} Passenger${getTotalFlightPassengers() !== 1 ? 's' : ''}`
                  }
                </span>
              </div>
              <div className={cn(
                "transition-transform",
                showGuestsDropdown && "rotate-180"
              )}>
                ▼
              </div>
            </button>

            {/* Guests Dropdown */}
            {showGuestsDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-2xl z-50 p-6">
                {/* Quick Presets */}
                <div className="mb-6">
                  <p className="font-semibold text-sm text-gray-700 mb-3">Quick Select:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {guestPresets.map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => applyGuestPreset(preset)}
                        className="px-4 py-2 bg-gray-100 hover:bg-[#ffce05] hover:text-[#1a2f4a] rounded-lg text-sm font-medium transition-all"
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  {searchType === 'hotels' ? (
                    // Hotel Rooms Configuration
                    <div className="space-y-4">
                      {rooms.map((room, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-4">
                            <span className="font-semibold">Room {index + 1}</span>
                            {rooms.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeRoom(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            )}
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm flex items-center gap-2">
                                <UserCircle className="h-4 w-4" />
                                Adults
                              </span>
                              <div className="flex items-center gap-3">
                                <button
                                  type="button"
                                  onClick={() => updateRoom(index, 'adults', room.adults - 1)}
                                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#ffce05] font-bold transition-all flex items-center justify-center"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="w-8 text-center font-bold text-lg">{room.adults}</span>
                                <button
                                  type="button"
                                  onClick={() => updateRoom(index, 'adults', room.adults + 1)}
                                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#ffce05] font-bold transition-all flex items-center justify-center"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-sm flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                Children
                              </span>
                              <div className="flex items-center gap-3">
                                <button
                                  type="button"
                                  onClick={() => updateRoom(index, 'children', room.children - 1)}
                                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#ffce05] font-bold transition-all flex items-center justify-center"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="w-8 text-center font-bold text-lg">{room.children}</span>
                                <button
                                  type="button"
                                  onClick={() => updateRoom(index, 'children', room.children + 1)}
                                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#ffce05] font-bold transition-all flex items-center justify-center"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      {rooms.length < 5 && (
                        <button
                          type="button"
                          onClick={addRoom}
                          className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#ffce05] hover:bg-[#ffce05]/10 transition-all flex items-center justify-center gap-2 font-medium"
                        >
                          <Plus className="h-5 w-5" />
                          Add Another Room
                        </button>
                      )}
                    </div>
                  ) : (
                    // Flight Passengers
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <UserCircle className="h-5 w-5" />
                          Adults (12+)
                        </span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => updateFlightPassengers('adults', flightPassengers.adults - 1)}
                            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#ffce05] font-bold transition-all flex items-center justify-center"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-bold text-lg">{flightPassengers.adults}</span>
                          <button
                            type="button"
                            onClick={() => updateFlightPassengers('adults', flightPassengers.adults + 1)}
                            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#ffce05] font-bold transition-all flex items-center justify-center"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <Users className="h-5 w-5" />
                          Children (2-11)
                        </span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => updateFlightPassengers('children', flightPassengers.children - 1)}
                            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#ffce05] font-bold transition-all flex items-center justify-center"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-bold text-lg">{flightPassengers.children}</span>
                          <button
                            type="button"
                            onClick={() => updateFlightPassengers('children', flightPassengers.children + 1)}
                            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#ffce05] font-bold transition-all flex items-center justify-center"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <Baby className="h-5 w-5" />
                          Infants (Under 2)
                        </span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => updateFlightPassengers('infants', flightPassengers.infants - 1)}
                            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#ffce05] font-bold transition-all flex items-center justify-center"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-bold text-lg">{flightPassengers.infants}</span>
                          <button
                            type="button"
                            onClick={() => updateFlightPassengers('infants', flightPassengers.infants + 1)}
                            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#ffce05] font-bold transition-all flex items-center justify-center"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setShowGuestsDropdown(false)}
                  className="w-full mt-4 py-3 bg-[#1a2f4a] text-white rounded-lg hover:bg-[#2a4f6a] font-semibold transition-all"
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* Search Button */}
          <Button
            type="submit"
            className="w-full h-16 bg-gradient-to-r from-[#ffce05] to-[#e6b800] hover:from-[#e6b800] hover:to-[#ccaa00] text-[#1a2f4a] font-bold text-xl rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-3"
          >
            <Search className="h-6 w-6" />
            {searchType === 'hotels' ? 'SEARCH HOTELS' : 'SEARCH FLIGHTS'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EnhancedSearchWidgetV2;
