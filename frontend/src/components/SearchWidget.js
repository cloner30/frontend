import React, { useState } from 'react';
import { Search, Calendar, Users, Plane, Hotel } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { cities } from '../mock';

const SearchWidget = () => {
  const [searchType, setSearchType] = useState('hotels');
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(destination.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      type: searchType,
      destination,
      checkIn,
      checkOut,
      guests: guests.toString(),
    });
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto">
      {/* Search Type Tabs */}
      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setSearchType('hotels')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
            searchType === 'hotels'
              ? 'bg-[#1a2f4a] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Hotel className="h-4 w-4" />
          <span>{t('hotels')}</span>
        </button>
        <button
          onClick={() => setSearchType('flights')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
            searchType === 'flights'
              ? 'bg-[#1a2f4a] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Plane className="h-4 w-4" />
          <span>{t('flights')}</span>
        </button>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Destination */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {searchType === 'hotels' ? 'Destination' : t('from')}
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="pl-10"
              />
            </div>
            {showSuggestions && destination && filteredCities.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-48 overflow-auto">
                {filteredCities.map((city) => (
                  <button
                    key={city.id}
                    type="button"
                    onClick={() => {
                      setDestination(city.name);
                      setShowSuggestions(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium">{city.name}</div>
                    <div className="text-sm text-gray-500">{city.country}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Check In */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {searchType === 'hotels' ? t('checkIn') : t('departure')}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="pl-10"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          {/* Check Out */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {searchType === 'hotels' ? t('checkOut') : t('return')}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="pl-10"
                min={checkIn || new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('guests')}
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="number"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                min="1"
                max="10"
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <Button
          type="submit"
          className="w-full bg-[#1a2f4a] hover:bg-[#2a3f5a] text-white font-medium py-3 rounded-lg transition-colors"
          size="lg"
        >
          <Search className="h-5 w-5 mr-2" />
          {t('search')}
        </Button>
      </form>
    </div>
  );
};

export default SearchWidget;