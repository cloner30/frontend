import React, { useState } from 'react';
import { Search, Calendar as CalendarIcon, Users, Plane, Hotel, MapPin, Plus, Minus, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { cities } from '../mock';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { format } from 'date-fns';
import { cn } from '../lib/utils';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const EnhancedSearchWidget = () => {
  const [searchType, setSearchType] = useState('hotels');
  const [destination, setDestination] = useState('');
  const [fromCity, setFromCity] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [tripType, setTripType] = useState('return');
  const [flightClass, setFlightClass] = useState('economy');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showRoomConfig, setShowRoomConfig] = useState(false);
  const [showFlightPassengers, setShowFlightPassengers] = useState(false);
  
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

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(destination.toLowerCase())
  );

  const filteredFromCities = cities.filter((city) =>
    city.name.toLowerCase().includes(fromCity.toLowerCase())
  );

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
      [field]: Math.max(0, value)
    });
  };

  const getTotalGuests = () => {
    return rooms.reduce((total, room) => total + room.adults + room.children, 0);
  };

  const getTotalFlightPassengers = () => {
    return flightPassengers.adults + flightPassengers.children + flightPassengers.infants;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
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
        from: fromCity,
        to: destination,
        departure: departureDate ? format(departureDate, 'yyyy-MM-dd') : '',
        return: returnDate && tripType === 'return' ? format(returnDate, 'yyyy-MM-dd') : '',
        tripType,
        class: flightClass,
        passengers: getTotalFlightPassengers().toString(),
      });
      navigate(`/search?${params.toString()}`);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto animate-fadeIn">
      {/* Search Type Tabs */}
      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setSearchType('hotels')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            searchType === 'hotels'
              ? 'bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
          }`}
        >
          <Hotel className="h-5 w-5" />
          <span>{t('hotels')}</span>
        </button>
        <button
          onClick={() => setSearchType('flights')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            searchType === 'flights'
              ? 'bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
          }`}
        >
          <Plane className="h-5 w-5" />
          <span>{t('flights')}</span>
        </button>
      </div>

      {/* Flight Type Selection (One Way / Return) */}
      {searchType === 'flights' && (
        <div className="mb-6 p-4 bg-gray-50 rounded-xl">
          <RadioGroup value={tripType} onValueChange={setTripType} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="return" id="return" />
              <Label htmlFor="return" className="cursor-pointer font-medium">Return Trip</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="oneway" id="oneway" />
              <Label htmlFor="oneway" className="cursor-pointer font-medium">One Way</Label>
            </div>
          </RadioGroup>
        </div>
      )}

      {/* Search Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        <div className={`grid grid-cols-1 gap-4 ${
          searchType === 'hotels' ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-5'
        }`}>
          {/* From City (Flights Only) */}
          {searchType === 'flights' && (
            <div className="relative">
              <Label className="block text-sm font-semibold text-gray-700 mb-2">
                From
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Origin city"
                  value={fromCity}
                  onChange={(e) => {
                    setFromCity(e.target.value);
                    setShowFromSuggestions(true);
                  }}
                  onFocus={() => setShowFromSuggestions(true)}
                  className="pl-10 h-12 border-2 focus:border-[#ffce05] transition-colors"
                />
              </div>
              {showFromSuggestions && fromCity && filteredFromCities.length > 0 && (
                <div className="absolute z-20 w-full mt-1 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-64 overflow-auto">
                  {filteredFromCities.map((city) => (
                    <button
                      key={city.id}
                      type="button"
                      onClick={() => {
                        setFromCity(city.name);
                        setShowFromSuggestions(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-[#ffce05]/10 transition-colors border-b last:border-b-0"
                    >
                      <div className="font-semibold text-[#1a2f4a]">{city.name}</div>
                      <div className="text-sm text-gray-500">{city.country}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Destination */}
          <div className="relative">
            <Label className="block text-sm font-semibold text-gray-700 mb-2">
              {searchType === 'hotels' ? 'Destination' : 'To'}
            </Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="pl-10 h-12 border-2 focus:border-[#ffce05] transition-colors"
                required
              />
            </div>
            {showSuggestions && destination && filteredCities.length > 0 && (
              <div className="absolute z-20 w-full mt-1 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-64 overflow-auto">
                {filteredCities.map((city) => (
                  <button
                    key={city.id}
                    type="button"
                    onClick={() => {
                      setDestination(city.name);
                      setShowSuggestions(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-[#ffce05]/10 transition-colors border-b last:border-b-0"
                  >
                    <div className="font-semibold text-[#1a2f4a]">{city.name}</div>
                    <div className="text-sm text-gray-500">{city.country}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Check In / Departure Date */}
          <div>
            <Label className="block text-sm font-semibold text-gray-700 mb-2">
              {searchType === 'hotels' ? t('checkIn') : t('departure')}
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-12 justify-start text-left font-normal border-2 hover:border-[#ffce05] transition-colors",
                    !(searchType === 'hotels' ? checkInDate : departureDate) && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-5 w-5 text-gray-400" />
                  {searchType === 'hotels' 
                    ? (checkInDate ? format(checkInDate, "PPP") : "Pick a date")
                    : (departureDate ? format(departureDate, "PPP") : "Pick a date")
                  }
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={searchType === 'hotels' ? checkInDate : departureDate}
                  onSelect={(date) => searchType === 'hotels' ? setCheckInDate(date) : setDepartureDate(date)}
                  initialFocus
                  disabled={(date) => date < new Date()}
                  className="rounded-xl border-2"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check Out / Return Date */}
          {(searchType === 'hotels' || (searchType === 'flights' && tripType === 'return')) && (
            <div>
              <Label className="block text-sm font-semibold text-gray-700 mb-2">
                {searchType === 'hotels' ? t('checkOut') : t('return')}
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-12 justify-start text-left font-normal border-2 hover:border-[#ffce05] transition-colors",
                      !(searchType === 'hotels' ? checkOutDate : returnDate) && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-5 w-5 text-gray-400" />
                    {searchType === 'hotels'
                      ? (checkOutDate ? format(checkOutDate, "PPP") : "Pick a date")
                      : (returnDate ? format(returnDate, "PPP") : "Pick a date")
                    }
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={searchType === 'hotels' ? checkOutDate : returnDate}
                    onSelect={(date) => searchType === 'hotels' ? setCheckOutDate(date) : setReturnDate(date)}
                    initialFocus
                    disabled={(date) => {
                      const minDate = searchType === 'hotels' ? checkInDate : departureDate;
                      return date < (minDate || new Date());
                    }}
                    className="rounded-xl border-2"
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}

          {/* Guests / Passengers */}
          <div>
            <Label className="block text-sm font-semibold text-gray-700 mb-2">
              {searchType === 'hotels' ? 'Rooms & Guests' : 'Passengers'}
            </Label>
            <Popover open={searchType === 'hotels' ? showRoomConfig : showFlightPassengers} onOpenChange={searchType === 'hotels' ? setShowRoomConfig : setShowFlightPassengers}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-12 justify-start text-left font-normal border-2 hover:border-[#ffce05] transition-colors"
                >
                  <Users className="mr-2 h-5 w-5 text-gray-400" />
                  {searchType === 'hotels'
                    ? `${rooms.length} Room${rooms.length > 1 ? 's' : ''}, ${getTotalGuests()} Guest${getTotalGuests() > 1 ? 's' : ''}`
                    : `${getTotalFlightPassengers()} Passenger${getTotalFlightPassengers() > 1 ? 's' : ''}`
                  }
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0" align="start">
                {searchType === 'hotels' ? (
                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between border-b pb-3">
                      <h4 className="font-semibold text-[#1a2f4a]">Configure Rooms</h4>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowRoomConfig(false)}
                        className="h-6 w-6 p-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto space-y-4">
                      {rooms.map((room, index) => (
                        <div key={index} className="border rounded-lg p-4 bg-gray-50">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-semibold text-[#1a2f4a]">Room {index + 1}</span>
                            {rooms.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeRoom(index)}
                                className="h-6 text-red-600 hover:text-red-700 hover:bg-red-50"
                              >
                                Remove
                              </Button>
                            )}
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <Label className="text-sm">Adults</Label>
                              <div className="flex items-center space-x-2">
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateRoom(index, 'adults', room.adults - 1)}
                                  disabled={room.adults <= 1}
                                  className="h-8 w-8 p-0 rounded-full"
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center font-semibold">{room.adults}</span>
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateRoom(index, 'adults', room.adults + 1)}
                                  disabled={room.adults >= 10}
                                  className="h-8 w-8 p-0 rounded-full"
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <Label className="text-sm">Children <span className="text-xs text-gray-500">(0-17)</span></Label>
                              <div className="flex items-center space-x-2">
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateRoom(index, 'children', room.children - 1)}
                                  disabled={room.children <= 0}
                                  className="h-8 w-8 p-0 rounded-full"
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center font-semibold">{room.children}</span>
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateRoom(index, 'children', room.children + 1)}
                                  disabled={room.children >= 10}
                                  className="h-8 w-8 p-0 rounded-full"
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {rooms.length < 5 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={addRoom}
                        className="w-full border-dashed border-2 border-[#ffce05] text-[#1a2f4a] hover:bg-[#ffce05]/10"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Another Room
                      </Button>
                    )}
                    
                    <Button
                      type="button"
                      onClick={() => setShowRoomConfig(false)}
                      className="w-full bg-[#1a2f4a] hover:bg-[#2a3f5a]"
                    >
                      Done
                    </Button>
                  </div>
                ) : (
                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between border-b pb-3">
                      <h4 className="font-semibold text-[#1a2f4a]">Passengers</h4>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowFlightPassengers(false)}
                        className="h-6 w-6 p-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="font-medium">Adults</Label>
                          <p className="text-xs text-gray-500">18+ years</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => updateFlightPassengers('adults', flightPassengers.adults - 1)}
                            disabled={flightPassengers.adults <= 1}
                            className="h-9 w-9 p-0 rounded-full"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-semibold text-lg">{flightPassengers.adults}</span>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => updateFlightPassengers('adults', flightPassengers.adults + 1)}
                            disabled={flightPassengers.adults >= 9}
                            className="h-9 w-9 p-0 rounded-full"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="font-medium">Children</Label>
                          <p className="text-xs text-gray-500">2-17 years</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => updateFlightPassengers('children', flightPassengers.children - 1)}
                            disabled={flightPassengers.children <= 0}
                            className="h-9 w-9 p-0 rounded-full"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-semibold text-lg">{flightPassengers.children}</span>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => updateFlightPassengers('children', flightPassengers.children + 1)}
                            disabled={flightPassengers.children >= 8}
                            className="h-9 w-9 p-0 rounded-full"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="font-medium">Infants</Label>
                          <p className="text-xs text-gray-500">Under 2 years</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => updateFlightPassengers('infants', flightPassengers.infants - 1)}
                            disabled={flightPassengers.infants <= 0}
                            className="h-9 w-9 p-0 rounded-full"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-semibold text-lg">{flightPassengers.infants}</span>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => updateFlightPassengers('infants', flightPassengers.infants + 1)}
                            disabled={flightPassengers.infants >= flightPassengers.adults}
                            className="h-9 w-9 p-0 rounded-full"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      {flightPassengers.infants > flightPassengers.adults && (
                        <p className="text-xs text-red-600">Number of infants cannot exceed adults</p>
                      )}
                    </div>
                    
                    <Button
                      type="button"
                      onClick={() => setShowFlightPassengers(false)}
                      className="w-full bg-[#1a2f4a] hover:bg-[#2a3f5a]"
                    >
                      Done
                    </Button>
                  </div>
                )}
              </PopoverContent>
            </Popover>
          </div>

          {/* Flight Class Selection */}
          {searchType === 'flights' && (
            <div>
              <Label className="block text-sm font-semibold text-gray-700 mb-2">
                Class
              </Label>
              <Select value={flightClass} onValueChange={setFlightClass}>
                <SelectTrigger className="h-12 border-2 focus:border-[#ffce05]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="economy">Economy</SelectItem>
                  <SelectItem value="premium">Premium Economy</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="first">First Class</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {/* Search Button */}
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-[#ffce05] to-[#e6b800] hover:from-[#e6b800] hover:to-[#b38e16] text-[#1a2f4a] font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] text-lg"
          size="lg"
        >
          <Search className="h-6 w-6 mr-2" />
          {t('search')} {searchType === 'hotels' ? 'Hotels' : 'Flights'}
        </Button>
      </form>
    </div>
  );
};

export default EnhancedSearchWidget;