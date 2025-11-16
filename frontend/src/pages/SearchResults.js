import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, MapPin, Filter, SlidersHorizontal } from 'lucide-react';
import { hotels, flights } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Slider } from '../components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'hotels';
  const destination = searchParams.get('destination') || '';
  
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('recommended');

  useEffect(() => {
    const data = type === 'hotels' ? hotels : flights;
    let filtered = data;

    if (destination) {
      filtered = data.filter((item) =>
        type === 'hotels'
          ? item.city.toLowerCase().includes(destination.toLowerCase())
          : item.to.toLowerCase().includes(destination.toLowerCase())
      );
    }

    setResults(filtered);
    setFilteredResults(filtered);
  }, [type, destination]);

  useEffect(() => {
    let filtered = results.filter((item) => {
      const price = item.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating' && type === 'hotels') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredResults(filtered);
  }, [priceRange, sortBy, results, type]);

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3 text-[#1a2f4a]">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={1000}
          step={10}
          className="mb-2"
        />
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-[#1a2f4a]">Sort By</h3>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            {type === 'hotels' && <SelectItem value="rating">Rating</SelectItem>}
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#1a2f4a] mb-2">
            {type === 'hotels' ? 'Hotels' : 'Flights'}
            {destination && ` in ${destination}`}
          </h1>
          <p className="text-gray-600">{filteredResults.length} results found</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Filters */}
          <div className="hidden lg:block w-64 flex-shrink-0">
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

          {/* Mobile Filters */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters & Sort
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterPanel />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="space-y-4">
              {filteredResults.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-gray-500">No results found. Try adjusting your filters.</p>
                  </CardContent>
                </Card>
              ) : type === 'hotels' ? (
                filteredResults.map((hotel) => (
                  <Card key={hotel.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-64 h-48 md:h-auto flex-shrink-0">
                          <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                          />
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-bold text-xl text-[#1a2f4a] mb-1">
                                {hotel.name}
                              </h3>
                              <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="h-4 w-4 mr-1 text-[#d4af37]" />
                                {hotel.distanceToShrine} km to shrine
                              </div>
                            </div>
                            <div className="flex items-center bg-[#1a2f4a] text-white px-3 py-1 rounded-lg">
                              <Star className="h-4 w-4 mr-1 fill-current" />
                              <span className="font-semibold">{hotel.rating}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3 text-sm">{hotel.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {hotel.amenities.map((amenity, idx) => (
                              <Badge key={idx} variant="secondary">
                                {amenity}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-sm text-gray-500">From</span>
                              <div className="text-2xl font-bold text-[#1a2f4a]">
                                ${hotel.price}
                              </div>
                              <span className="text-sm text-gray-500">per night</span>
                            </div>
                            <Link to={`/hotels/${hotel.id}`}>
                              <Button className="bg-[#1a2f4a] hover:bg-[#2a3f5a]">
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                filteredResults.map((flight) => (
                  <Card key={flight.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <div className="flex-1 mb-4 md:mb-0">
                          <div className="font-bold text-lg text-[#1a2f4a] mb-2">
                            {flight.airline}
                          </div>
                          <div className="flex items-center space-x-4 text-sm">
                            <div>
                              <div className="font-semibold">{flight.from}</div>
                              <div className="text-gray-500">
                                {new Date(flight.departure).toLocaleTimeString([], {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })}
                              </div>
                            </div>
                            <div className="flex-1 text-center">
                              <div className="text-gray-500">{flight.duration}</div>
                              <div className="h-px bg-gray-300 my-1" />
                              <div className="text-xs text-gray-500">
                                {flight.stops === 0 ? 'Direct' : `${flight.stops} stop(s)`}
                              </div>
                            </div>
                            <div>
                              <div className="font-semibold">{flight.to}</div>
                              <div className="text-gray-500">
                                {new Date(flight.arrival).toLocaleTimeString([], {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })}
                              </div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <Badge variant="secondary">{flight.class}</Badge>
                            <Badge variant="secondary" className="ml-2">
                              {flight.seats} seats left
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#1a2f4a] mb-2">
                            ${flight.price}
                          </div>
                          <Link to={`/flights/${flight.id}`}>
                            <Button className="bg-[#1a2f4a] hover:bg-[#2a3f5a]">
                              Select Flight
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;