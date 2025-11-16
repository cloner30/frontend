import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Users,
  Check,
  Clock,
  ArrowLeft,
  Star,
  Phone,
  Mail,
  Share2,
  Heart,
  X,
  ChevronDown,
  ChevronUp,
  Award,
  TrendingUp,
  AlertCircle,
  Plane,
  Hotel,
  Utensils
} from 'lucide-react';
import { upcomingGroups } from '../mock';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';

const GroupDetailEnhanced = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [numberOfTravelers, setNumberOfTravelers] = useState(1);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [expandedDay, setExpandedDay] = useState(null);
  const [bookingFormData, setBookingFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const loadGroup = () => {
      try {
        setLoading(true);
        const data = upcomingGroups.find(g => g.id === parseInt(id));
        setGroup(data);
      } catch (error) {
        console.error('Error loading group tour:', error);
      } finally {
        setLoading(false);
      }
    };

    loadGroup();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#ffce05] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading tour details...</p>
        </div>
      </div>
    );
  }

  if (!group) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card>
          <CardContent className="p-12 text-center">
            <AlertCircle className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 mb-4 text-xl">Group tour not found</p>
            <Button onClick={() => navigate('/groups')} className="bg-[#1a2f4a]">
              Back to Groups
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Booking Request Submitted!',
      description: `We'll contact you shortly for ${numberOfTravelers} seat(s) on ${group.title}`,
    });
    setShowBookingForm(false);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: group.title,
        text: `Check out this group tour: ${group.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: 'Link Copied!',
        description: 'Tour link copied to clipboard',
      });
    }
  };

  const totalPrice = group.price * numberOfTravelers;
  const percentBooked = ((group.totalSeats - group.seatsLeft) / group.totalSeats) * 100;

  // Similar tours (mock - same organizer or destination)
  const similarTours = upcomingGroups
    .filter(g => g.id !== group.id && (g.organizer === group.organizer || g.cities.some(c => group.cities.includes(c))))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img
          src={group.image}
          alt={group.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
            <Button
              variant="ghost"
              onClick={() => navigate('/groups')}
              className="mb-6 text-white hover:text-[#ffce05] hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Groups
            </Button>
            
            <div className="flex flex-wrap gap-3 mb-4">
              {group.specialEvent && (
                <Badge className="bg-purple-500 text-white text-base px-4 py-2">
                  {group.specialEvent} Special
                </Badge>
              )}
              <Badge className="bg-red-500 text-white text-base px-4 py-2">
                {group.seatsLeft} seats left
              </Badge>
              {percentBooked >= 80 && (
                <Badge className="bg-orange-500 text-white text-base px-4 py-2">
                  Filling Fast
                </Badge>
              )}
            </div>

            <h1 className="text-5xl font-bold text-white mb-4">{group.title}</h1>
            
            <div className="flex flex-wrap gap-6 text-white text-lg">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>
                  {new Date(group.departure).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{group.duration} days</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>{group.totalSeats - group.seatsLeft}/{group.totalSeats} booked</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Organizer Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-[#1a2f4a] rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                      {group.organizer.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-[#1a2f4a]">{group.organizer}</h3>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 fill-[#ffce05] text-[#ffce05] mr-1" />
                        <span className="font-semibold mr-2">{group.organizerRating}</span>
                        <span className="text-sm text-gray-500">({group.organizerReviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-green-500 text-white">
                    <Check className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Tour Highlights */}
            {group.highlights && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4 flex items-center">
                    <Award className="h-6 w-6 mr-2 text-[#ffce05]" />
                    Tour Highlights
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {group.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Cities Covered */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4 flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-[#ffce05]" />
                  Destinations
                </h2>
                <div className="flex flex-wrap gap-3">
                  {group.cities.map((city, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-[#1a2f4a] to-[#2a4f6a] text-white rounded-lg px-6 py-3">
                      <span className="font-semibold text-lg">{city}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-600">
                  <Plane className="h-4 w-4 mr-2" />
                  <span>Departing from: <span className="font-semibold text-[#1a2f4a]">{group.departureCity}</span></span>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Itinerary */}
            {group.itinerary && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Day-by-Day Itinerary</h2>
                  <div className="space-y-3">
                    {group.itinerary.map((day, idx) => (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#ffce05] transition-colors"
                      >
                        <button
                          onClick={() => setExpandedDay(expandedDay === idx ? null : idx)}
                          className="w-full p-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center text-left">
                            <div className="w-10 h-10 bg-[#ffce05] text-[#1a2f4a] rounded-full flex items-center justify-center font-bold mr-4">
                              {day.day}
                            </div>
                            <div>
                              <h3 className="font-bold text-lg text-[#1a2f4a]">{day.title}</h3>
                              {day.meals && (
                                <p className="text-sm text-gray-600 mt-1">
                                  <Utensils className="h-3 w-3 inline mr-1" />
                                  {day.meals.join(', ')}
                                </p>
                              )}
                            </div>
                          </div>
                          {expandedDay === idx ? (
                            <ChevronUp className="h-5 w-5 text-gray-600" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-600" />
                          )}
                        </button>
                        {expandedDay === idx && (
                          <div className="p-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">{day.description}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-[#1a2f4a] mb-4 flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-600" />
                    What's Included
                  </h2>
                  <div className="space-y-2">
                    {group.inclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-[#1a2f4a] mb-4 flex items-center">
                    <X className="h-5 w-5 mr-2 text-red-600" />
                    What's Not Included
                  </h2>
                  <div className="space-y-2">
                    {group.exclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <X className="h-4 w-4 mr-2 text-red-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Reviews */}
            {group.reviews && group.reviews.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Reviews from Past Travelers</h2>
                  <div className="space-y-4">
                    {group.reviews.map((review, idx) => (
                      <div key={idx} className="border-b border-gray-200 pb-4 last:border-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold text-[#1a2f4a]">{review.name}</div>
                          <div className="flex items-center">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-[#ffce05] text-[#ffce05]" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 mb-1">{review.comment}</p>
                        <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Similar Tours */}
            {similarTours.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Similar Tours You Might Like</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {similarTours.map((tour) => (
                      <Link key={tour.id} to={`/groups/${tour.id}`} className="group">
                        <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#ffce05] transition-all hover:shadow-lg">
                          <div className="relative h-32">
                            <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                            <Badge className="absolute top-2 right-2 bg-red-500 text-white text-xs">
                              {tour.seatsLeft} left
                            </Badge>
                          </div>
                          <div className="p-3">
                            <h3 className="font-semibold text-sm text-[#1a2f4a] mb-2 line-clamp-2 group-hover:text-[#ffce05]">
                              {tour.title}
                            </h3>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-600">{tour.duration} days</span>
                              <span className="font-bold text-[#1a2f4a]">${tour.price}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-500 mb-1">Price per person</div>
                  <div className="text-4xl font-bold text-[#1a2f4a] mb-1">
                    ${group.price}
                  </div>
                  <div className="text-sm text-gray-500">Total: ${totalPrice}</div>
                </div>

                {/* Seats Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>{group.totalSeats - group.seatsLeft} booked</span>
                    <span>{group.seatsLeft} left</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#ffce05] to-[#f4cf67]"
                      style={{ width: `${percentBooked}%` }}
                    />
                  </div>
                </div>

                {/* Number of Travelers */}
                <div className="mb-6">
                  <Label className="mb-2 block text-sm font-semibold">Number of Travelers</Label>
                  <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setNumberOfTravelers(Math.max(1, numberOfTravelers - 1))}
                      disabled={numberOfTravelers <= 1}
                    >
                      -
                    </Button>
                    <span className="font-bold text-xl">{numberOfTravelers}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setNumberOfTravelers(Math.min(group.seatsLeft, numberOfTravelers + 1))}
                      disabled={numberOfTravelers >= group.seatsLeft}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <Button
                  className="w-full bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a] font-bold text-lg py-6 mb-3"
                  onClick={() => setShowBookingForm(true)}
                  disabled={group.seatsLeft === 0}
                >
                  {group.seatsLeft === 0 ? 'Sold Out' : 'Book Now'}
                </Button>

                <div className="flex gap-2 mb-6">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={handleShare}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>

                {/* Quick Info */}
                <div className="border-t pt-4 space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium text-[#1a2f4a]">{group.duration} days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Group Size</span>
                    <span className="font-medium text-[#1a2f4a]">{group.totalSeats} max</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Departure</span>
                    <span className="font-medium text-[#1a2f4a]">{group.departureCity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Organizer Rating</span>
                    <span className="font-medium text-[#1a2f4a] flex items-center">
                      <Star className="h-3 w-3 fill-[#ffce05] text-[#ffce05] mr-1" />
                      {group.organizerRating}
                    </span>
                  </div>
                </div>

                {/* Contact */}
                <div className="border-t mt-4 pt-4">
                  <p className="text-sm text-gray-600 mb-3">Need help or have questions?</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start text-sm">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Us
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-sm">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Us
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#1a2f4a]">Book Your Tour</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowBookingForm(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    value={bookingFormData.name}
                    onChange={(e) => setBookingFormData({ ...bookingFormData, name: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={bookingFormData.email}
                    onChange={(e) => setBookingFormData({ ...bookingFormData, email: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={bookingFormData.phone}
                    onChange={(e) => setBookingFormData({ ...bookingFormData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Special Requests (Optional)</Label>
                  <Textarea
                    id="message"
                    rows={3}
                    value={bookingFormData.message}
                    onChange={(e) => setBookingFormData({ ...bookingFormData, message: e.target.value })}
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Number of travelers</span>
                    <span className="font-bold">{numberOfTravelers}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Price per person</span>
                    <span className="font-bold">${group.price}</span>
                  </div>
                  <div className="border-t pt-2 flex items-center justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="text-2xl font-bold text-[#1a2f4a]">${totalPrice}</span>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a] font-bold">
                  Submit Booking Request
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Our team will contact you within 24 hours to confirm your booking
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default GroupDetailEnhanced;
