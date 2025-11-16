import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, Check, Clock, ArrowLeft } from 'lucide-react';
import { upcomingGroups } from '../mock';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';

const GroupDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [numberOfTravelers, setNumberOfTravelers] = useState(1);

  const group = upcomingGroups.find((g) => g.id === parseInt(id));

  if (!group) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-500 mb-4">Group tour not found</p>
            <Button onClick={() => navigate('/groups')}>Back to Groups</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleBooking = () => {
    toast({
      title: 'Booking Initiated',
      description: `Booking ${numberOfTravelers} seat(s) for ${group.title}`,
    });
  };

  const totalPrice = group.price * numberOfTravelers;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/groups')}
          className="mb-6 text-[#1a2f4a] hover:text-[#d4af37]"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Groups
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src={group.image}
                alt={group.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 right-4 bg-red-500 text-white text-base px-4 py-2">
                {group.seatsLeft} seats left
              </Badge>
            </div>

            {/* Title & Info */}
            <div>
              <h1 className="text-4xl font-bold text-[#1a2f4a] mb-3">{group.title}</h1>
              <div className="flex items-center text-gray-600 mb-2">
                <Users className="h-5 w-5 mr-2 text-[#d4af37]" />
                <span>Organized by {group.organizer}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2 text-[#d4af37]" />
                <span>
                  {new Date(group.departure).toLocaleDateString()} -{' '}
                  {new Date(group.return).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* Cities Covered */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Cities Covered</h2>
                <div className="flex flex-wrap gap-3">
                  {group.cities.map((city, idx) => (
                    <div key={idx} className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
                      <MapPin className="h-4 w-4 mr-2 text-[#d4af37]" />
                      <span className="font-medium">{city}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Inclusions */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {group.inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="h-5 w-5 mr-3 text-green-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sample Itinerary */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Sample Itinerary</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#d4af37] pl-4">
                    <div className="font-semibold text-[#1a2f4a]">Day 1: Departure & Arrival</div>
                    <p className="text-gray-600 text-sm mt-1">
                      Departure from origin city, arrival at destination, hotel check-in
                    </p>
                  </div>
                  <div className="border-l-4 border-[#d4af37] pl-4">
                    <div className="font-semibold text-[#1a2f4a]">Day 2-6: Ziyarat Tours</div>
                    <p className="text-gray-600 text-sm mt-1">
                      Guided visits to holy shrines, prayer times, spiritual activities
                    </p>
                  </div>
                  <div className="border-l-4 border-[#d4af37] pl-4">
                    <div className="font-semibold text-[#1a2f4a]">Day 7: Departure</div>
                    <p className="text-gray-600 text-sm mt-1">
                      Final prayers, hotel checkout, return journey
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Price per person</div>
                  <div className="text-4xl font-bold text-[#1a2f4a]">${group.price}</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Travelers
                    </label>
                    <select
                      value={numberOfTravelers}
                      onChange={(e) => setNumberOfTravelers(parseInt(e.target.value))}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#1a2f4a] focus:outline-none"
                    >
                      {[...Array(Math.min(group.seatsLeft, 10))].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'Person' : 'People'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">${totalPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-lg font-bold text-[#1a2f4a]">
                      <span>Total</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleBooking}
                  className="w-full bg-[#d4af37] hover:bg-[#c49f27] text-[#1a2f4a] font-semibold py-3"
                  size="lg"
                >
                  {t('bookNow')}
                </Button>

                <div className="mt-4 text-center text-sm text-gray-500">
                  Free cancellation up to 7 days before departure
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetail;