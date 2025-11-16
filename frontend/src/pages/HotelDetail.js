import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Wifi,
  Coffee,
  Wind,
  Utensils,
  Users,
  Clock,
  ArrowLeft,
  Check,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { hotels } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const HotelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const foundHotel = hotels.find((h) => h.id === parseInt(id));
    if (foundHotel) {
      setHotel(foundHotel);
    }
  }, [id]);

  if (!hotel) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Hotel not found</h2>
          <Link to="/search?type=hotels">
            <Button className="bg-[#1a2f4a] hover:bg-[#2a3f5a]">
              Back to Search
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const images = hotel.images || [hotel.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Mock reviews data
  const reviewsData = {
    average: hotel.rating,
    total: hotel.reviews,
    breakdown: {
      5: Math.floor(hotel.reviews * 0.6),
      4: Math.floor(hotel.reviews * 0.25),
      3: Math.floor(hotel.reviews * 0.1),
      2: Math.floor(hotel.reviews * 0.03),
      1: Math.floor(hotel.reviews * 0.02)
    }
  };

  const sampleReviews = [
    {
      name: 'Ahmad Hassan',
      date: '2 weeks ago',
      rating: 5,
      comment: 'Excellent location near the shrine. Very clean rooms and friendly staff. The prayer room facilities are excellent.'
    },
    {
      name: 'Fatima Ali',
      date: '1 month ago',
      rating: 5,
      comment: 'Perfect for families. The rooms are spacious and the breakfast was delicious. Highly recommended for pilgrims.'
    },
    {
      name: 'Mohammed Karim',
      date: '2 months ago',
      rating: 4,
      comment: 'Good hotel with nice amenities. Only minor issue was occasional noise from the street, but overall a great stay.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>
          <img
            src={images[currentImageIndex]}
            alt={hotel.name}
            className="max-w-[90%] max-h-[90vh] object-contain"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight className="h-12 w-12" />
          </button>
          <div className="absolute bottom-4 text-white text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-[#1a2f4a] hover:text-[#2a3f5a] font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Search
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[400px]">
            {/* Main Image */}
            <div className="md:col-span-3 relative cursor-pointer" onClick={() => openLightbox(0)}>
              <img
                src={images[0]}
                alt={hotel.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Side Images */}
            <div className="hidden md:flex flex-col gap-2">
              {images.slice(1, 3).map((img, idx) => (
                <div
                  key={idx}
                  className="relative flex-1 cursor-pointer"
                  onClick={() => openLightbox(idx + 1)}
                >
                  <img
                    src={img}
                    alt={`${hotel.name} ${idx + 2}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
              {images.length > 3 && (
                <div
                  className="relative flex-1 cursor-pointer"
                  onClick={() => openLightbox(3)}
                >
                  <img
                    src={images[3]}
                    alt={hotel.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {images.length > 4 && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">+{images.length - 4}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hotel Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-3xl font-bold text-[#1a2f4a]">{hotel.name}</h1>
                      <div className="flex items-center">
                        {[...Array(hotel.stars)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-[#ffce05] text-[#ffce05]" />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {hotel.address}
                    </div>
                    <div className="text-sm text-gray-500">
                      {hotel.city}, {hotel.country}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center bg-[#1a2f4a] text-white px-3 py-1 rounded-lg mb-2">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                      <span className="font-bold">{hotel.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">{hotel.reviews} reviews</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.tags?.map((tag, idx) => (
                    <Badge key={idx} className="bg-[#ffce05] text-[#1a2f4a]">
                      {tag}
                    </Badge>
                  ))}
                  <Badge variant="secondary">
                    <MapPin className="h-3 w-3 mr-1" />
                    {hotel.distanceToShrine} km to shrine
                  </Badge>
                </div>

                <p className="text-gray-700 leading-relaxed">{hotel.fullDescription}</p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 mr-2 text-green-600" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Room Types */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Available Rooms</h2>
                <div className="space-y-4">
                  {hotel.roomTypes?.map((room, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-lg p-4 hover:border-[#ffce05] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-[#1a2f4a] mb-1">{room.type}</h3>
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <Users className="h-4 w-4 mr-1" />
                            {room.capacity} guests
                            <span className="mx-2">•</span>
                            {room.beds}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#1a2f4a]">${room.price}</div>
                          <div className="text-sm text-gray-500">per night</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nearby Shrines */}
            {hotel.nearbyShrines && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Nearby Holy Shrines</h2>
                  <div className="space-y-3">
                    {hotel.nearbyShrines.map((shrine, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 mr-3 text-[#ffce05]" />
                          <span className="font-medium text-[#1a2f4a]">{shrine.name}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {shrine.distance} km • {shrine.walkTime} min walk
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Reviews */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Guest Reviews</h2>

                {/* Rating Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#1a2f4a] mb-2">
                      {reviewsData.average}
                    </div>
                    <div className="flex items-center justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(reviewsData.average)
                              ? 'fill-[#ffce05] text-[#ffce05]'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-gray-600">{reviewsData.total} reviews</div>
                  </div>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center">
                        <span className="text-sm text-gray-600 w-8">{stars}★</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden mx-2">
                          <div
                            className="h-full bg-[#ffce05]"
                            style={{
                              width: `${(reviewsData.breakdown[stars] / reviewsData.total) * 100}%`
                            }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 w-12 text-right">
                          {reviewsData.breakdown[stars]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Reviews */}
                <div className="space-y-4">
                  {sampleReviews.map((review, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-4 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-[#1a2f4a]">{review.name}</div>
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-[#ffce05] text-[#ffce05]"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mb-2">{review.date}</div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Policies */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Hotel Policies</h2>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 mt-0.5 text-[#ffce05]" />
                    <div>
                      <div className="font-medium">Check-in / Check-out</div>
                      <div className="text-sm text-gray-600">{hotel.policies}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-0.5 text-[#ffce05]" />
                    <div>
                      <div className="font-medium">Cancellation Policy</div>
                      <div className="text-sm text-gray-600">
                        Free cancellation available. See specific room policies for details.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-500 mb-1">Starting from</div>
                  <div className="text-4xl font-bold text-[#1a2f4a] mb-1">
                    ${hotel.price}
                  </div>
                  <div className="text-sm text-gray-500">per night</div>
                </div>

                <Button className="w-full bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a] font-bold text-lg py-6 mb-4">
                  Book Now
                </Button>

                <div className="text-center text-sm text-gray-500 mb-6">
                  Booking integration coming soon
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-[#ffce05]" />
                    <a href={`tel:${hotel.phone}`} className="text-[#1a2f4a] hover:underline">
                      {hotel.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-[#ffce05]" />
                    <a href={`mailto:${hotel.email}`} className="text-[#1a2f4a] hover:underline">
                      {hotel.email}
                    </a>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="border-t mt-4 pt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Distance to shrine</span>
                    <span className="font-medium text-[#1a2f4a]">{hotel.distanceToShrine} km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Hotel rating</span>
                    <span className="font-medium text-[#1a2f4a]">{hotel.stars} stars</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Guest rating</span>
                    <span className="font-medium text-[#1a2f4a]">{hotel.rating}/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
