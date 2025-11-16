import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, MapPin, Filter, SlidersHorizontal, Award, Heart } from 'lucide-react';
import { getHotels } from '../services/api';
import { flights } from '../mock';
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

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'hotels';
  const destination = searchParams.get('destination') || '';
  
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('recommended');
  const [starRatings, setStarRatings] = useState([]);
  const [maxDistance, setMaxDistance] = useState([2.0]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get all unique amenities from hotels
  const allAmenities = ['Free WiFi', 'Breakfast', 'Prayer Room', 'Family Rooms', 'Restaurant', 'Parking', 'AC'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let data;
        
        if (type === 'hotels') {
          data = await getHotels(destination || null);
        } else {
          data = flights; // Keep flights as mock for now
        }
        
        let filtered = data;

        if (destination && type !== 'hotels') {
          filtered = data.filter((item) =>
            item.to.toLowerCase().includes(destination.toLowerCase())
          );
        }

        // Set initial price range based on data
        if (filtered.length > 0) {
          const maxPrice = Math.max(...filtered.map(item => item.price));
          setPriceRange([0, Math.min(200, maxPrice)]);
        }

        setResults(filtered);
        setFilteredResults(filtered);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, destination]);

  useEffect(() => {
    let filtered = results.filter((item) => {
      // Price filter
      const price = item.price;
      if (price < priceRange[0] || price > priceRange[1]) return false;

      // Hotels-specific filters
      if (type === 'hotels') {
        // Star rating filter
        if (starRatings.length > 0 && !starRatings.includes(item.stars)) {
          return false;
        }

        // Distance filter
        if (item.distanceToShrine > maxDistance[0]) {
          return false;
        }

        // Amenities filter
        if (selectedAmenities.length > 0) {
          const hasAllAmenities = selectedAmenities.every(amenity =>
            item.amenities.includes(amenity)
          );
          if (!hasAllAmenities) return false;
        }
      }

      return true;
    });

    // Sorting
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating' && type === 'hotels') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'distance' && type === 'hotels') {
      filtered.sort((a, b) => a.distanceToShrine - b.distanceToShrine);
    }

    setFilteredResults(filtered);
  }, [priceRange, sortBy, results, type, starRatings, maxDistance, selectedAmenities]);

  const toggleStarRating = (stars) => {
    setStarRatings(prev =>
      prev.includes(stars)
        ? prev.filter(s => s !== stars)
        : [...prev, stars]
    );
  };

  const toggleAmenity = (amenity) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, 200]);
    setStarRatings([]);
    setMaxDistance([2.0]);
    setSelectedAmenities([]);
    setSortBy('recommended');
  };

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-3 text-[#1a2f4a]">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={250}
          step={5}
          className="mb-2"
        />
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Hotels-specific filters */}
      {type === 'hotels' && (
        <>
          {/* Star Rating */}
          <div>
            <h3 className="font-semibold mb-3 text-[#1a2f4a]">Star Rating</h3>
            <div className="space-y-2">
              {[5, 4, 3].map((stars) => (
                <div key={stars} className="flex items-center">
                  <Checkbox
                    id={`stars-${stars}`}
                    checked={starRatings.includes(stars)}
                    onCheckedChange={() => toggleStarRating(stars)}
                  />
                  <label
                    htmlFor={`stars-${stars}`}
                    className="ml-2 flex items-center text-sm cursor-pointer"
                  >
                    {[...Array(stars)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-[#ffce05] text-[#ffce05]" />
                    ))}
                    <span className="ml-1 text-gray-600">({stars} stars)</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Distance to Shrine */}
          <div>
            <h3 className="font-semibold mb-3 text-[#1a2f4a]">Distance to Shrine</h3>
            <Slider
              value={maxDistance}
              onValueChange={setMaxDistance}
              max={2.0}
              min={0.1}
              step={0.1}
              className="mb-2"
            />
            <div className="text-sm text-gray-600 text-center">
              Within {maxDistance[0].toFixed(1)} km
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="font-semibold mb-3 text-[#1a2f4a]">Amenities</h3>
            <div className="space-y-2">
              {allAmenities.map((amenity) => (
                <div key={amenity} className="flex items-center">
                  <Checkbox
                    id={`amenity-${amenity}`}
                    checked={selectedAmenities.includes(amenity)}
                    onCheckedChange={() => toggleAmenity(amenity)}
                  />
                  <label
                    htmlFor={`amenity-${amenity}`}
                    className="ml-2 text-sm cursor-pointer text-gray-600"
                  >
                    {amenity}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Sort By */}
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
            {type === 'hotels' && (
              <>
                <SelectItem value="rating">Guest Rating</SelectItem>
                <SelectItem value="distance">Distance to Shrine</SelectItem>
              </>
            )}
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        className="w-full"
        onClick={clearFilters}
      >
        Clear All Filters
      </Button>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#ffce05] mx-auto mb-4"></div>
          <p className="text-gray-600">Searching for {type}...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#1a2f4a] mb-2">
            {type === 'hotels' ? 'Hotels' : 'Flights'}
            {destination && ` in ${destination}`}
          </h1>
          <p className="text-gray-600">
            {filteredResults.length} {filteredResults.length === 1 ? 'result' : 'results'} found
            {results.length !== filteredResults.length && (
              <span className="text-[#ffce05] ml-1">
                (filtered from {results.length})
              </span>
            )}
          </p>
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
                  {(starRatings.length > 0 || selectedAmenities.length > 0) && (
                    <Badge className="ml-2 bg-[#ffce05] text-[#1a2f4a]">
                      {starRatings.length + selectedAmenities.length}
                    </Badge>
                  )}
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

          {/* Results */}
          <div className="flex-1">
            <div className="space-y-4">
              {filteredResults.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Filter className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500 mb-4">No results found. Try adjusting your filters.</p>
                    <Button onClick={clearFilters} variant="outline">
                      Clear All Filters
                    </Button>
                  </CardContent>
                </Card>
              ) : type === 'hotels' ? (
                filteredResults.map((hotel) => (
                  <Card key={hotel.id} className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#ffce05]/30">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative w-full md:w-72 h-56 md:h-auto flex-shrink-0">
                          <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                          />
                          {hotel.tags && Array.isArray(hotel.tags) && hotel.tags.length > 0 && (
                            <div className="absolute top-3 left-3 flex gap-2">
                              {hotel.tags.slice(0, 2).map((tag, idx) => (
                                <Badge
                                  key={idx}
                                  className="bg-[#ffce05] text-[#1a2f4a] font-semibold"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-bold text-xl text-[#1a2f4a]">
                                  {hotel.name}
                                </h3>
                                <div className="flex items-center">
                                  {[...Array(hotel.stars)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-[#ffce05] text-[#ffce05]" />
                                  ))}
                                </div>
                              </div>
                              <div className="flex items-center text-sm text-gray-600 mb-2">
                                <MapPin className="h-4 w-4 mr-1 text-[#ffce05]" />
                                <span className="font-medium text-[#1a2f4a]">{hotel.distanceToShrine} km</span>
                                <span className="mx-1">•</span>
                                <span>{hotel.city}, {hotel.country}</span>
                              </div>
                            </div>
                            <div className="text-right flex flex-col items-end gap-1">
                              <div className="flex items-center bg-[#1a2f4a] text-white px-3 py-1.5 rounded-lg">
                                <Star className="h-4 w-4 mr-1 fill-current" />
                                <span className="font-bold">{hotel.rating}</span>
                              </div>
                              <div className="text-xs text-gray-500">{hotel.reviews} reviews</div>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4 text-sm line-clamp-2">{hotel.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {hotel.amenities.slice(0, 5).map((amenity, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {amenity}
                              </Badge>
                            ))}
                            {hotel.amenities.length > 5 && (
                              <Badge variant="secondary" className="text-xs">
                                +{hotel.amenities.length - 5} more
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t">
                            <div>
                              <span className="text-sm text-gray-500">Starting from</span>
                              <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-[#1a2f4a]">
                                  ${hotel.price}
                                </span>
                                <span className="text-sm text-gray-500">/ night</span>
                              </div>
                            </div>
                            <Link to={`/hotels/${hotel.id}`}>
                              <Button className="bg-[#1a2f4a] hover:bg-[#2a3f5a] px-8">
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
