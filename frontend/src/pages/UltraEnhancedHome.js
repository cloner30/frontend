import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Calendar, Shield, Users, Award, Heart, CheckCircle, Clock, Phone, MessageCircle, ChevronLeft, ChevronRight, TrendingUp, Globe, Sparkles, Gift, Zap, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import EnhancedSearchWidget from '../components/EnhancedSearchWidget';
import TrustBadges from '../components/TrustBadges';
import QuickLinks from '../components/QuickLinks';
import ComparisonTable from '../components/ComparisonTable';
import ProcessSteps from '../components/ProcessSteps';
import PopularDestinations from '../components/PopularDestinations';
import { upcomingGroups, packages, cities, testimonials } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { useToast } from '../hooks/use-toast';

const UltraEnhancedHome = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({
    pilgrims: 0,
    tours: 0,
    satisfaction: 0,
    countries: 0
  });
  const [email, setEmail] = useState('');
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Animated counter effect
  useEffect(() => {
    const targets = { pilgrims: 15000, tours: 500, satisfaction: 98, countries: 45 };
    const duration = 2000;
    const steps = 50;
    const increment = duration / steps;

    let current = { pilgrims: 0, tours: 0, satisfaction: 0, countries: 0 };
    const interval = setInterval(() => {
      let updated = false;
      Object.keys(targets).forEach(key => {
        if (current[key] < targets[key]) {
          current[key] = Math.min(current[key] + Math.ceil(targets[key] / steps), targets[key]);
          updated = true;
        }
      });
      setStats({ ...current });
      if (!updated) clearInterval(interval);
    }, increment);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    toast({
      title: 'Successfully Subscribed!',
      description: 'You will receive updates about our pilgrimage tours.',
    });
    setEmail('');
  };

  const recentBookings = [
    { name: 'Ahmed K.', destination: 'Karbala', time: '2 min ago', avatar: 'AK' },
    { name: 'Fatima R.', destination: 'Mashhad', time: '5 min ago', avatar: 'FR' },
    { name: 'Ali M.', destination: 'Najaf', time: '8 min ago', avatar: 'AM' },
  ];

  const specialOffers = [
    {
      id: 1,
      title: 'Early Bird Special',
      description: 'Book 3 months in advance and save 15%',
      discount: '15% OFF',
      color: 'from-green-500 to-emerald-600',
      icon: Target
    },
    {
      id: 2,
      title: 'Group Discount',
      description: 'Book for 10+ people and get special rates',
      discount: '20% OFF',
      color: 'from-blue-500 to-cyan-600',
      icon: Users
    },
    {
      id: 3,
      title: 'Ramadan Package',
      description: 'Special spiritual journey during holy month',
      discount: 'SPECIAL',
      color: 'from-purple-500 to-pink-600',
      icon: Sparkles
    },
    {
      id: 4,
      title: 'Last Minute Deals',
      description: 'Book within 2 weeks and save up to 25%',
      discount: '25% OFF',
      color: 'from-orange-500 to-red-600',
      icon: Zap
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Trusted & Verified',
      description: 'Licensed tour operator with full insurance coverage',
      stat: '10+ Years'
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: 'Knowledgeable spiritual guides fluent in multiple languages',
      stat: '50+ Guides'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in pilgrimage services',
      stat: '15 Awards'
    },
    {
      icon: Heart,
      title: 'Care & Comfort',
      description: '24/7 support ensuring your journey is smooth and spiritual',
      stat: '24/7 Support'
    }
  ];

  const faqs = [
    {
      question: 'What documents do I need for Iraq/Iran travel?',
      answer: 'Valid passport with 6 months validity, visa (we assist), and vaccination certificates if required.'
    },
    {
      question: 'Are the hotels near the shrines?',
      answer: 'Yes, all our accommodations are within walking distance to major holy sites.'
    },
    {
      question: 'Is travel insurance included?',
      answer: 'Comprehensive travel insurance is included in all our packages.'
    },
    {
      question: 'Can I customize my itinerary?',
      answer: 'Absolutely! Use our Plan Your Trip feature to create a custom journey.'
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className=\"min-h-screen\">
      {/* Enhanced Hero Section with Video Background Option */}
      <div
        className=\"relative h-[750px] flex items-center justify-center overflow-hidden\"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 47, 74, 0.75), rgba(26, 47, 74, 0.75)), url('https://images.unsplash.com/photo-1761475878231-32efb0aeff5d')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Animated Gradient Overlay */}
        <div className=\"absolute inset-0 bg-gradient-to-b from-transparent via-[#1a2f4a]/30 to-[#1a2f4a]/80\" />
        
        {/* Floating particles effect */}
        <div className=\"absolute inset-0 overflow-hidden pointer-events-none\">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className=\"absolute bg-[#d4af37] rounded-full opacity-20 animate-float\"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>

        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10\">
          <div className=\"text-center mb-8 animate-fadeIn\">
            <Badge className=\"bg-gradient-to-r from-[#d4af37] to-[#c49f27] text-[#1a2f4a] mb-4 text-sm px-6 py-2 shadow-lg hover:scale-105 transition-transform\">
              <Sparkles className=\"h-4 w-4 mr-2 inline\" />
              Trusted by 15,000+ Pilgrims Worldwide
            </Badge>
            <h1 className=\"text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight\">
              Begin Your Sacred<br />
              <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f0d785]\">
                Spiritual Journey
              </span>
            </h1>
            <p className=\"text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed\">
              Experience the profound connection of Ziyarat to Iran & Iraq's holiest shrines<br />
              <span className=\"text-[#d4af37] font-semibold\">with complete peace of mind</span>
            </p>
          </div>
          
          <EnhancedSearchWidget />

          {/* Live Booking Ticker - Enhanced */}
          <div className=\"mt-6 bg-white/10 backdrop-blur-xl rounded-2xl p-4 max-w-4xl mx-auto border border-white/20 shadow-2xl\">
            <div className=\"flex items-center justify-center flex-wrap gap-3 text-white text-sm\">
              <TrendingUp className=\"h-5 w-5 text-green-400 animate-pulse\" />
              <span className=\"font-bold text-[#d4af37]\">LIVE BOOKINGS:</span>
              {recentBookings.map((booking, idx) => (
                <div key={idx} className=\"flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1 animate-fadeIn\">
                  <div className=\"w-6 h-6 rounded-full bg-gradient-to-br from-[#d4af37] to-[#c49f27] flex items-center justify-center text-[#1a2f4a] text-xs font-bold\">
                    {booking.avatar}
                  </div>
                  <span className=\"text-xs\">
                    <span className=\"font-semibold\">{booking.name}</span> booked <span className=\"text-[#d4af37]\">{booking.destination}</span>
                  </span>
                  <span className=\"text-gray-400 text-xs\">{booking.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Component */}
      <TrustBadges />

      {/* Animated Stats Section - Enhanced */}
      <div className=\"bg-gradient-to-br from-white via-gray-50 to-white py-16 relative overflow-hidden\">
        {/* Background Pattern */}
        <div className=\"absolute inset-0 opacity-5\" style={{ backgroundImage: 'radial-gradient(circle, #1a2f4a 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10\">
          <div className=\"grid grid-cols-2 md:grid-cols-4 gap-8\">
            {[
              { label: 'Happy Pilgrims', value: stats.pilgrims, icon: Users, color: 'text-blue-600' },
              { label: 'Tours Completed', value: stats.tours, icon: CheckCircle, color: 'text-green-600' },
              { label: 'Satisfaction Rate', value: stats.satisfaction, suffix: '%', icon: Star, color: 'text-yellow-600' },
              { label: 'Countries Served', value: stats.countries, icon: Globe, color: 'text-purple-600' }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className=\"text-center group hover:scale-110 transition-transform duration-300\">
                  <div className=\"bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow\">
                    <Icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                    <div className=\"text-5xl font-bold text-[#1a2f4a] mb-2\">
                      {stat.value.toLocaleString()}{stat.suffix || '+'}
                    </div>
                    <div className=\"text-gray-600 font-medium\">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Special Offers Banner - Enhanced Grid */}
      <div className=\"bg-gradient-to-br from-[#1a2f4a] via-[#2a3f5a] to-[#1a2f4a] py-16 relative overflow-hidden\">
        {/* Animated Background Elements */}
        <div className=\"absolute inset-0 opacity-10\">
          <div className=\"absolute top-0 left-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl animate-pulse\" />
          <div className=\"absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl animate-pulse\" style={{ animationDelay: '1s' }} />
        </div>

        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10\">
          <div className=\"text-center mb-12\">
            <Badge className=\"bg-[#d4af37] text-[#1a2f4a] mb-4 text-sm px-4 py-1\">
              <Gift className=\"h-4 w-4 mr-2 inline\" />
              LIMITED TIME OFFERS
            </Badge>
            <h2 className=\"text-4xl font-bold text-white mb-3\">Exclusive Savings</h2>
            <p className=\"text-gray-300 text-lg\">Book now and enjoy incredible discounts on your pilgrimage journey</p>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6\">
            {specialOffers.map((offer) => {
              const Icon = offer.icon;
              return (
                <div key={offer.id} className=\"group cursor-pointer\">
                  <div className=\"bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden\">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className=\"relative z-10\">
                      <div className=\"flex items-center justify-between mb-4\">
                        <Badge className={`bg-gradient-to-r ${offer.color} text-white px-4 py-1 text-sm font-bold`}>
                          {offer.discount}
                        </Badge>
                        <Icon className=\"h-8 w-8 text-[#d4af37]\" />
                      </div>
                      <h3 className=\"font-bold text-xl text-[#1a2f4a] mb-2\">{offer.title}</h3>
                      <p className=\"text-gray-600 text-sm mb-4\">{offer.description}</p>
                      <Button variant=\"ghost\" className=\"text-[#1a2f4a] hover:text-[#d4af37] p-0 group-hover:translate-x-2 transition-transform\">
                        Learn More <ArrowRight className=\"ml-1 h-4 w-4\" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16\">
        <div className=\"text-center mb-10\">
          <h2 className=\"text-3xl md:text-4xl font-bold text-[#1a2f4a] mb-3\">Quick Access</h2>
          <p className=\"text-gray-600 max-w-2xl mx-auto\">
            Everything you need for your pilgrimage journey in one place
          </p>
        </div>
        <QuickLinks />
      </div>

      {/* How It Works - Process Steps */}
      <div className=\"bg-gradient-to-b from-gray-50 to-white py-16\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center mb-12\">
            <Badge className=\"bg-[#1a2f4a] text-white mb-4\">SIMPLE PROCESS</Badge>
            <h2 className=\"text-3xl md:text-4xl font-bold text-[#1a2f4a] mb-3\">How It Works</h2>
            <p className=\"text-gray-600 max-w-2xl mx-auto\">
              Four simple steps to begin your spiritual journey
            </p>
          </div>
          <ProcessSteps />
        </div>
      </div>

      {/* Popular Destinations - Enhanced */}
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16\">
        <div className=\"text-center mb-10\">
          <Badge className=\"bg-gradient-to-r from-[#d4af37] to-[#c49f27] text-[#1a2f4a] mb-4\">
            <TrendingUp className=\"h-4 w-4 mr-2 inline\" />
            MOST VISITED
          </Badge>
          <h2 className=\"text-3xl md:text-4xl font-bold text-[#1a2f4a] mb-3\">Popular Destinations</h2>
          <p className=\"text-gray-600 max-w-2xl mx-auto\">
            Explore the most sought-after pilgrimage destinations
          </p>
        </div>
        <PopularDestinations />
      </div>

      {/* Plan Your Trip Section - Ultra Enhanced */}
      <div className="bg-gradient-to-br from-[#1a2f4a] via-[#2a3f5a] to-[#1a2f4a] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:w-2/3">
                <Badge className="bg-[#d4af37] text-[#1a2f4a] mb-4">✨ NEW FEATURE</Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
                  {t('planYourTrip')}
                </h2>
                <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                  Create your perfect pilgrimage itinerary with our intelligent planning tool
                </p>
                <div className="space-y-3">
                  {['Custom dates and flexible scheduling', 'Hand-picked accommodations', 'Expert local guides', 'Complete visa assistance'].map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/plan-trip">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#d4af37] to-[#f0d785] hover:from-[#c49f27] hover:to-[#d4af37] text-[#1a2f4a] font-bold px-10 py-8 text-xl shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 hover:scale-110"
                >
                  {t('startPlanning')}
                  <ArrowRight className="ml-3 h-7 w-7" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Package Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <Badge className="bg-[#1a2f4a] text-white mb-4">COMPARE PACKAGES</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f4a] mb-3">Choose Your Perfect Package</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compare features and find the package that best suits your needs
          </p>
        </div>
        <ComparisonTable />
      </div>

      {/* Upcoming Groups - Enhanced with Wishlist */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="bg-[#d4af37] text-[#1a2f4a] mb-4">POPULAR CHOICE</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f4a] mb-3">{t('upcomingGroups')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join fellow pilgrims on organized group tours with experienced guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingGroups.map((group) => (
              <Card key={group.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-red-500 text-white animate-pulse">
                    {group.seatsLeft} {t('seatsLeft')}
                  </Badge>
                  <button className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-bold text-white text-lg mb-1">{group.title}</h3>
                    <p className="text-gray-200 text-sm">{group.organizer}</p>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-[#d4af37]" />
                      <span>
                        {new Date(group.departure).toLocaleDateString()} -{' '}
                        {new Date(group.return).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-[#d4af37]" />
                      <span>{group.cities.join(', ')}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-[#1a2f4a]">
                        ${group.price}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">{t('perPerson')}</span>
                    </div>
                    <Link to={`/groups/${group.id}`}>
                      <Button className="bg-[#1a2f4a] hover:bg-[#2a3f5a] group-hover:bg-[#d4af37] group-hover:text-[#1a2f4a] transition-colors">
                        {t('bookNow')}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section - Enhanced */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f4a] mb-4">Why Pilgrims Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Excellence in service, spirituality, and care for over a decade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} className="text-center hover:shadow-2xl transition-all duration-300 border-t-4 border-[#d4af37] group hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-[#1a2f4a] to-[#2a3f5a] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-[#d4af37] group-hover:to-[#c49f27] transition-all duration-300 shadow-lg">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#d4af37] mb-2">{item.stat}</div>
                  <h3 className="font-bold text-lg text-[#1a2f4a] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Enhanced Testimonials with Carousel */}
      <div className="bg-gradient-to-br from-[#1a2f4a] via-[#2a3f5a] to-[#1a2f4a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="bg-[#d4af37] text-[#1a2f4a] mb-4">TESTIMONIALS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('testimonials')}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from thousands of pilgrims who experienced spiritual transformation
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-7 w-7 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg md:text-2xl mb-8 italic text-center leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="text-center">
                  <div className="font-bold text-xl text-[#1a2f4a]">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {testimonials[currentTestimonial].location}
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    {testimonials[currentTestimonial].trip}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Carousel Controls */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 bg-white rounded-full p-4 shadow-2xl hover:bg-[#d4af37] hover:scale-110 transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-[#1a2f4a]" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 bg-white rounded-full p-4 shadow-2xl hover:bg-[#d4af37] hover:scale-110 transition-all"
            >
              <ChevronRight className="h-6 w-6 text-[#1a2f4a]" />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`rounded-full transition-all ${
                    idx === currentTestimonial ? 'bg-[#d4af37] w-10 h-3' : 'bg-white/50 w-3 h-3'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Enhanced Accordion */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <Badge className="bg-[#1a2f4a] text-white mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f4a] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about your pilgrimage journey</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#1a2f4a] pr-4">{faq.question}</span>
                <ChevronRight
                  className={`h-5 w-5 text-[#d4af37] flex-shrink-0 transition-transform ${
                    openFaq === idx ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-gray-600 animate-fadeIn border-t pt-4">
                  {faq.answer}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Section - Enhanced */}
      <div className="bg-gradient-to-r from-[#1a2f4a] via-[#2a3f5a] to-[#1a2f4a] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="bg-[#d4af37] text-[#1a2f4a] mb-4">NEWSLETTER</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Subscribe to receive updates on new packages, special offers, and spiritual travel tips
          </p>
          <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/90 backdrop-blur-sm h-14 text-lg"
            />
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-[#d4af37] to-[#c49f27] hover:from-[#c49f27] hover:to-[#b38e16] text-[#1a2f4a] font-bold px-10 h-14 text-lg shadow-xl hover:scale-105 transition-all"
            >
              Subscribe
            </Button>
          </form>
          <p className="text-gray-400 text-sm mt-4">Join 10,000+ subscribers • Unsubscribe anytime</p>
        </div>
      </div>

      {/* Floating Action Buttons - Enhanced */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
        <button className="bg-green-500 text-white rounded-full p-5 shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group relative animate-bounce">
          <MessageCircle className="h-7 w-7" />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            Chat with us
          </span>
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        </button>
        <button className="bg-gradient-to-br from-[#d4af37] to-[#c49f27] text-[#1a2f4a] rounded-full p-5 shadow-2xl hover:scale-110 transition-all group relative">
          <Phone className="h-7 w-7" />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            Call +964 123 456
          </span>
        </button>
      </div>
    </div>
  );
};

export default UltraEnhancedHome;