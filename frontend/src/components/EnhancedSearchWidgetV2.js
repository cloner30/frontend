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
  const [fromCity, setFromCity] = useState('');
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
    { name: 'Qom', country: 'Iran', icon: '🕋' }
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

  const validateSearch = () => {
    const errors = {};
    
    if (!destination.trim()) {
      errors.destination = 'Please enter a destination';
    }
    
    if (!dateRange.from) {
      errors.dates = 'Please select dates';
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
        checkIn: dateRange.from ? format(dateRange.from, 'yyyy-MM-dd') : '',
        checkOut: dateRange.to ? format(dateRange.to, 'yyyy-MM-dd') : '',
        rooms: rooms.length.toString(),
        guests: getTotalGuests().toString(),
      });
      navigate(`/search?${params.toString()}`);
    } else {
      const params = new URLSearchParams({
        type: searchType,
        from: fromCity || 'London',
        destination,
        departure: dateRange.from ? format(dateRange.from, 'yyyy-MM-dd') : '',
        return: dateRange.to ? format(dateRange.to, 'yyyy-MM-dd') : '',
        passengers: getTotalFlightPassengers().toString(),
      });
      navigate(`/search?${params.toString()}`);
    }
  };

  // Quick date presets
  const applyDatePreset = (preset) => {
    const today = new Date();
    switch(preset) {
      case 'today':
        setDateRange({ from: today, to: addDays(today, 1) });
        break;
      case 'tomorrow':
        setDateRange({ from: addDays(today, 1), to: addDays(today, 2) });
        break;
      case 'weekend':
        setDateRange({ from: today, to: addDays(today, 3) });
        break;
      case 'week':
        setDateRange({ from: today, to: addDays(today, 7) });
        break;
      default:
        break;
    }
    setValidationErrors({ ...validationErrors, dates: null });
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
      {/* Search Type Tabs - More Compact */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setSearchType('hotels')}
          className={cn(
            "flex-1 py-3 px-4 rounded-lg font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2",
            searchType === 'hotels'
              ? "bg-[#1a2f4a] text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
        >
          <Hotel className="h-5 w-5" />
          Hotels
        </button>
        <button
          onClick={() => setSearchType('flights')}
          className={cn(
            "flex-1 py-3 px-4 rounded-lg font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2",
            searchType === 'flights'
              ? "bg-[#1a2f4a] text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
        >
          <Plane className="h-5 w-5" />
          Flights
        </button>
        <button
          onClick={() => navigate('/groups')}
          className="flex-1 py-3 px-4 rounded-lg font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          <Users className="h-5 w-5" />
          Groups
        </button>
      </div>

      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* FROM CITY - Only for Flights */}
          {searchType === 'flights' && (
            <div className="md:col-span-3">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#ffce05] z-10" />
                <Input
                  type="text"
                  placeholder="From: London"
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="h-12 pl-10 rounded-lg border-2 border-gray-300 focus:border-[#1a2f4a]"
                />
              </div>
            </div>
          )}

          {/* DESTINATION */}
          <div className={searchType === 'flights' ? 'md:col-span-3' : 'md:col-span-4'}>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#ffce05] z-10" />
              <Input
                type="text"
                placeholder={searchType === 'hotels' ? 'Where to stay?' : 'To: Destination'}
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
                  "h-12 pl-10 pr-10 rounded-lg border-2 transition-all",
                  validationErrors.destination 
                    ? "border-red-500" 
                    : destination 
                    ? "border-green-500" 
                    : "border-gray-300 focus:border-[#1a2f4a]"
                )}
              />
              {destination && !validationErrors.destination && (
                <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-600" />
              )}
            </div>
          </div>

          {/* DATE RANGE PICKER */}
          <div className={searchType === 'flights' ? 'md:col-span-3' : 'md:col-span-4'}>
            <Popover open={showDatePicker} onOpenChange={setShowDatePicker}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-12 justify-start text-left font-normal rounded-lg border-2 pl-10 hover:border-[#1a2f4a]",
                    !dateRange.from && "text-gray-500",
                    validationErrors.dates ? "border-red-500" : dateRange.from ? "border-green-500" : "border-gray-300"
                  )}
                >
                  <CalendarIcon className="absolute left-3 h-4 w-4 text-[#ffce05]" />
                  {dateRange.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, 'MMM dd')} <ArrowRight className="h-3 w-3 mx-1" /> {format(dateRange.to, 'MMM dd')}
                      </>
                    ) : (
                      format(dateRange.from, 'MMM dd, yyyy')
                    )
                  ) : (
                    <span>Select dates</span>
                  )}
                  {dateRange.from && (
                    <Check className="absolute right-3 h-4 w-4 text-green-600" />
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <div className="p-3 border-b bg-gray-50">
                  <p className="font-semibold mb-2 text-sm">Quick Select:</p>
                  <div className="grid grid-cols-4 gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => applyDatePreset('today')}
                      className="text-xs"
                    >
                      Today
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => applyDatePreset('tomorrow')}
                      className="text-xs"
                    >
                      Tomorrow
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => applyDatePreset('weekend')}
                      className="text-xs"
                    >
                      Weekend
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => applyDatePreset('week')}
                      className="text-xs"
                    >
                      1 Week
                    </Button>
                  </div>
                </div>
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={(range) => {
                    setDateRange(range || { from: null, to: null });
                    setValidationErrors({ ...validationErrors, dates: null });
                    if (range?.from && range?.to) {
                      setShowDatePicker(false);
                    }
                  }}
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                  numberOfMonths={2}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* GUESTS/PASSENGERS */}
          <div className="md:col-span-2 relative">
            <button
              type="button"
              onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
              className="w-full h-12 px-3 pl-10 text-left border-2 border-gray-300 rounded-lg hover:border-[#1a2f4a] transition-all bg-white flex items-center justify-between text-sm"
            >
              <Users className="absolute left-3 h-4 w-4 text-[#ffce05]" />
              <span className="font-medium text-gray-700">
                {searchType === 'hotels'
                  ? `${getTotalGuests()} Guest${getTotalGuests() !== 1 ? 's' : ''}`
                  : `${getTotalFlightPassengers()} Pax`
                }
              </span>
              <div className={cn("transition-transform text-gray-400", showGuestsDropdown && "rotate-180")}>▼</div>
            </button>

            {showGuestsDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-2xl z-50 p-4 min-w-[300px]">
                {searchType === 'hotels' ? (
                  <div className="space-y-3">
                    {rooms.map((room, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold text-sm">Room {index + 1}</span>
                          {rooms.length > 1 && (
                            <button type="button" onClick={() => removeRoom(index)} className="text-red-500">
                              <X className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Adults</span>
                            <div className="flex items-center gap-2">
                              <button type="button" onClick={() => updateRoom(index, 'adults', room.adults - 1)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#ffce05]">
                                <Minus className="h-3 w-3 mx-auto" />
                              </button>
                              <span className="w-6 text-center font-bold">{room.adults}</span>
                              <button type="button" onClick={() => updateRoom(index, 'adults', room.adults + 1)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#ffce05]">
                                <Plus className="h-3 w-3 mx-auto" />
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Children</span>
                            <div className="flex items-center gap-2">
                              <button type="button" onClick={() => updateRoom(index, 'children', room.children - 1)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#ffce05]">
                                <Minus className="h-3 w-3 mx-auto" />
                              </button>
                              <span className="w-6 text-center font-bold">{room.children}</span>
                              <button type="button" onClick={() => updateRoom(index, 'children', room.children + 1)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#ffce05]">
                                <Plus className="h-3 w-3 mx-auto" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {rooms.length < 5 && (
                      <button type="button" onClick={addRoom} className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#ffce05] text-sm">
                        + Add Room
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Adults</span>
                      <div className="flex items-center gap-2">
                        <button type="button" onClick={() => updateFlightPassengers('adults', flightPassengers.adults - 1)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#ffce05]">
                          <Minus className="h-3 w-3 mx-auto" />
                        </button>
                        <span className="w-6 text-center font-bold">{flightPassengers.adults}</span>
                        <button type="button" onClick={() => updateFlightPassengers('adults', flightPassengers.adults + 1)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#ffce05]">
                          <Plus className="h-3 w-3 mx-auto" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Children</span>
                      <div className="flex items-center gap-2">
                        <button type="button" onClick={() => updateFlightPassengers('children', flightPassengers.children - 1)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#ffce05]">
                          <Minus className="h-3 w-3 mx-auto" />
                        </button>
                        <span className="w-6 text-center font-bold">{flightPassengers.children}</span>
                        <button type="button" onClick={() => updateFlightPassengers('children', flightPassengers.children + 1)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#ffce05]">
                          <Plus className="h-3 w-3 mx-auto" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Infants</span>
                      <div className="flex items-center gap-2">
                        <button type="button" onClick={() => updateFlightPassengers('infants', flightPassengers.infants - 1)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#ffce05]">
                          <Minus className="h-3 w-3 mx-auto" />
                        </button>
                        <span className="w-6 text-center font-bold">{flightPassengers.infants}</span>
                        <button type="button" onClick={() => updateFlightPassengers('infants', flightPassengers.infants + 1)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#ffce05]">
                          <Plus className="h-3 w-3 mx-auto" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <button type="button" onClick={() => setShowGuestsDropdown(false)} className="w-full mt-3 py-2 bg-[#1a2f4a] text-white rounded-lg text-sm font-semibold">
                  Done
                </button>
              </div>
            )}
          </div>

          {/* SEARCH BUTTON */}
          <div className="md:col-span-1">
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#ffce05] to-[#e6b800] hover:from-[#e6b800] hover:to-[#ccaa00] text-[#1a2f4a] font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Popular Destinations - Below (HOTELS ONLY) */}
        {searchType === 'hotels' && (!destination || showDestinationSuggestions) && (
          <div className="mt-4">
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
                  className="px-3 py-1.5 bg-gray-100 hover:bg-[#ffce05] hover:text-[#1a2f4a] rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 border border-transparent hover:border-[#ffce05]"
                >
                  <span className="text-sm">{dest.icon}</span>
                  <span>{dest.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Validation Errors */}
        {(validationErrors.destination || validationErrors.dates) && (
          <div className="mt-3 text-red-500 text-sm">
            {validationErrors.destination || validationErrors.dates}
          </div>
        )}
      </form>
    </div>
  );
};

export default EnhancedSearchWidgetV2;
