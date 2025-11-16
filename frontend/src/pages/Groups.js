import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock, Filter, SlidersHorizontal, Star, TrendingUp, AlertCircle } from 'lucide-react';
import { upcomingGroups as mockGroups } from '../mock';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Slider } from '../components/ui/slider';
import { Checkbox } from '../components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet';

const Groups = () => {
  const { t } = useLanguage();
  const [upcomingGroups, setUpcomingGroups] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [sortBy, setSortBy] = useState('date-asc');
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedDepartureCities, setSelectedDepartureCities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch group tours
  useEffect(() => {
    const fetchGroupTours = async () => {
      try {
        setLoading(true);
        const data = await getGroupTours();
        setUpcomingGroups(data);
        setFilteredGroups(data);
      } catch (error) {
        console.error('Error fetching group tours:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroupTours();
  }, []);

  // Get unique values for filters
  const allDestinations = [...new Set(upcomingGroups.flatMap(g => g.cities))];
  const allDepartureCities = [...new Set(upcomingGroups.map(g => g.departureCity))];
  const allEvents = ['Arbaeen', 'Ashura', 'Ramadan'];
  const durationRanges = [
    { label: '5-7 days', min: 5, max: 7 },
    { label: '8-10 days', min: 8, max: 10 },
    { label: '11+ days', min: 11, max: 99 }
  ];

  useEffect(() => {
    if (upcomingGroups.length === 0) return;
    
    let filtered = upcomingGroups.filter((group) => {
      // Price filter
      if (group.price < priceRange[0] || group.price > priceRange[1]) return false;

      // Destination filter
      if (selectedDestinations.length > 0) {
        if (!group.cities.some(city => selectedDestinations.includes(city))) return false;
      }

      // Duration filter
      if (selectedDurations.length > 0) {
        const matchesDuration = selectedDurations.some(range => {
          const [label] = range.split('-');
          const durationRange = durationRanges.find(d => d.label === range);
          return group.duration >= durationRange.min && group.duration <= durationRange.max;
        });
        if (!matchesDuration) return false;
      }

      // Event filter
      if (selectedEvents.length > 0) {
        if (!group.specialEvent || !selectedEvents.includes(group.specialEvent)) return false;
      }

      // Departure city filter
      if (selectedDepartureCities.length > 0) {
        if (!selectedDepartureCities.includes(group.departureCity)) return false;
      }

      return true;
    });

    // Sorting
    if (sortBy === 'date-asc') {
      filtered.sort((a, b) => new Date(a.departure) - new Date(b.departure));
    } else if (sortBy === 'date-desc') {
      filtered.sort((a, b) => new Date(b.departure) - new Date(a.departure));
    } else if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popularity') {
      filtered.sort((a, b) => (a.totalSeats - a.seatsLeft) - (b.totalSeats - b.seatsLeft));
    } else if (sortBy === 'seats') {
      filtered.sort((a, b) => b.seatsLeft - a.seatsLeft);
    }

    setFilteredGroups(filtered);
  }, [priceRange, sortBy, selectedDestinations, selectedDurations, selectedEvents, selectedDepartureCities]);

  const toggleFilter = (value, setState, state) => {
    setState(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, 3000]);
    setSelectedDestinations([]);
    setSelectedDurations([]);
    setSelectedEvents([]);
    setSelectedDepartureCities([]);
    setSortBy('date-asc');
  };

  const getStatusBadge = (group) => {
    const percentBooked = ((group.totalSeats - group.seatsLeft) / group.totalSeats) * 100;
    
    if (group.status === 'almost-full' || group.seatsLeft <= 5) {
      return <Badge className="bg-red-500 text-white">Almost Full</Badge>;
    } else if (group.status === 'filling-fast' || percentBooked >= 60) {
      return <Badge className="bg-orange-500 text-white">Filling Fast</Badge>;
    } else if (group.status === 'early-bird') {
      return <Badge className="bg-green-500 text-white">Early Bird</Badge>;
    }
    return null;
  };

  const getEventBadge = (event) => {
    if (!event) return null;
    const colors = {
      'Arbaeen': 'bg-purple-500',
      'Ashura': 'bg-red-600',
      'Ramadan': 'bg-blue-500'
    };
    return <Badge className={`${colors[event]} text-white`}>{event}</Badge>;
  };

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-3 text-[#1a2f4a]">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={3000}
          step={50}
          className="mb-2"
        />
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Destinations */}
      <div>
        <h3 className="font-semibold mb-3 text-[#1a2f4a]">Destinations</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {allDestinations.map((dest) => (
            <div key={dest} className="flex items-center">
              <Checkbox
                id={`dest-${dest}`}
                checked={selectedDestinations.includes(dest)}
                onCheckedChange={() => toggleFilter(dest, setSelectedDestinations, selectedDestinations)}
              />
              <label
                htmlFor={`dest-${dest}`}
                className="ml-2 text-sm cursor-pointer text-gray-600"
              >
                {dest}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div>
        <h3 className="font-semibold mb-3 text-[#1a2f4a]">Duration</h3>
        <div className="space-y-2">
          {durationRanges.map((range) => (
            <div key={range.label} className="flex items-center">
              <Checkbox
                id={`dur-${range.label}`}
                checked={selectedDurations.includes(range.label)}
                onCheckedChange={() => toggleFilter(range.label, setSelectedDurations, selectedDurations)}
              />
              <label
                htmlFor={`dur-${range.label}`}
                className="ml-2 text-sm cursor-pointer text-gray-600"
              >
                {range.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Special Events */}
      <div>
        <h3 className="font-semibold mb-3 text-[#1a2f4a]">Special Events</h3>
        <div className="space-y-2">
          {allEvents.map((event) => (
            <div key={event} className="flex items-center">
              <Checkbox
                id={`event-${event}`}
                checked={selectedEvents.includes(event)}
                onCheckedChange={() => toggleFilter(event, setSelectedEvents, selectedEvents)}
              />
              <label
                htmlFor={`event-${event}`}
                className="ml-2 text-sm cursor-pointer text-gray-600"
              >
                {event}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Departure City */}
      <div>
        <h3 className="font-semibold mb-3 text-[#1a2f4a]">Departure City</h3>
        <div className="space-y-2">
          {allDepartureCities.map((city) => (
            <div key={city} className="flex items-center">
              <Checkbox
                id={`dep-${city}`}
                checked={selectedDepartureCities.includes(city)}
                onCheckedChange={() => toggleFilter(city, setSelectedDepartureCities, selectedDepartureCities)}
              />
              <label
                htmlFor={`dep-${city}`}
                className="ml-2 text-sm cursor-pointer text-gray-600"
              >
                {city}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div>
        <h3 className="font-semibold mb-3 text-[#1a2f4a]">Sort By</h3>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date-asc">Date: Earliest First</SelectItem>
            <SelectItem value="date-desc">Date: Latest First</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="popularity">Most Popular</SelectItem>
            <SelectItem value="seats">Most Seats Available</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters */}
      <Button variant="outline" className="w-full" onClick={clearFilters}>
        Clear All Filters
      </Button>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#ffce05] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading group tours...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a2f4a] to-[#2a4f6a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">{t('upcomingGroups')}</h1>
          <p className="text-gray-200 text-xl max-w-2xl">
            Join guided group tours with experienced organizers. Travel together, pray together, grow together.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>{upcomingGroups.length} Tours Available</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Iraq & Iran Destinations</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2 fill-current" />
              <span>Verified Organizers</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-lg">
              {filteredGroups.length} {filteredGroups.length === 1 ? 'tour' : 'tours'} found
              {upcomingGroups.length !== filteredGroups.length && (
                <span className="text-[#ffce05] ml-1">
                  (filtered from {upcomingGroups.length})
                </span>
              )}
            </p>
          </div>
          {/* Mobile Filters */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6 overflow-y-auto max-h-[80vh]">
                  <FilterPanel />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Filters */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Filter className="h-5 w-5 mr-2 text-[#1a2f4a]" />
                  <h2 className="font-bold text-[#1a2f4a]">Filters</h2>
                </div>
                <FilterPanel />
              </CardContent>
            </Card>
          </div>

          {/* Groups Grid */}
          <div className="flex-1">
            {filteredGroups.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <AlertCircle className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500 mb-4">No group tours found matching your filters.</p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredGroups.map((group) => {
                  const percentBooked = ((group.totalSeats - group.seatsLeft) / group.totalSeats) * 100;
                  
                  return (
                    <Card key={group.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#ffce05]/30">
                      <div className="relative h-56">
                        <img
                          src={group.image}
                          alt={group.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        
                        {/* Badges */}
                        <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2">
                          {getEventBadge(group.specialEvent)}
                          {getStatusBadge(group)}
                        </div>

                        {/* Seats Left Indicator */}
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-white/90 text-[#1a2f4a] font-bold">
                            {group.seatsLeft} {t('seatsLeft')}
                          </Badge>
                        </div>

                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="font-bold text-white text-lg mb-1 leading-tight">{group.title}</h3>
                          <div className="flex items-center text-white/90 text-sm">
                            <Star className="h-3 w-3 mr-1 fill-current" />
                            <span className="mr-2">{group.organizerRating}</span>
                            <span className="text-white/70">{group.organizer}</span>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-5">
                        {/* Details */}
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-2 text-[#ffce05] flex-shrink-0" />
                            <span className="truncate">
                              {new Date(group.departure).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} - {new Date(group.return).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-2 text-[#ffce05] flex-shrink-0" />
                            <span>{group.duration} days</span>
                          </div>
                          <div className="flex items-start text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 text-[#ffce05] flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{group.cities.join(' • ')}</span>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                            <span>{group.totalSeats - group.seatsLeft}/{group.totalSeats} booked</span>
                            <span>{Math.round(percentBooked)}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#ffce05] to-[#f4cf67] transition-all duration-300"
                              style={{ width: `${percentBooked}%` }}
                            />
                          </div>
                        </div>

                        {/* Inclusions */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {group.inclusions.slice(0, 3).map((item, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                          {group.inclusions.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{group.inclusions.length - 3}
                            </Badge>
                          )}
                        </div>

                        {/* Footer */}
                        <div className="border-t pt-4 flex items-center justify-between">
                          <div>
                            <span className="text-sm text-gray-500">From</span>
                            <div className="flex items-baseline gap-1">
                              <span className="text-2xl font-bold text-[#1a2f4a]">
                                ${group.price}
                              </span>
                              <span className="text-sm text-gray-500">{t('perPerson')}</span>
                            </div>
                          </div>
                          <Link to={`/groups/${group.id}`}>
                            <Button className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a] font-semibold">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
