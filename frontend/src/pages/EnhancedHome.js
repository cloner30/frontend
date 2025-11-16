import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Calendar, Shield, Users, Award, Heart, CheckCircle, Clock, Phone, MessageCircle, ChevronLeft, ChevronRight, TrendingUp, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import EnhancedSearchWidget from '../components/EnhancedSearchWidgetV2';
import TrustBadges from '../components/TrustBadges';
import QuickLinks from '../components/QuickLinks';
// Removed ComparisonTable - old component
import ProcessSteps from '../components/ProcessSteps';
import PopularDestinations from '../components/PopularDestinations';
import { getGroupTours, getPackages, getCities, getTestimonials } from '../services/api';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { useToast } from '../hooks/use-toast';

const EnhancedHome = () => {
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
  
  // API data states
  const [upcomingGroups, setUpcomingGroups] = useState([]);
  const [packages, setPackages] = useState([]);
  const [cities, setCities] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from APIs
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [groupsData, packagesData, citiesData, testimonialsData] = await Promise.all([
          getGroupTours(),
          getPackages(),
          getCities(),
          getTestimonials()
        ]);
        
        setUpcomingGroups(groupsData);
        setPackages(packagesData);
        setCities(citiesData);
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error('Error fetching home data:', error);
        toast({
          title: "Error",
          description: "Failed to load content. Please refresh the page.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [toast]);

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
    { name: 'Ahmed K.', destination: 'Karbala', time: '2 min ago' },
    { name: 'Fatima R.', destination: 'Mashhad', time: '5 min ago' },
    { name: 'Ali M.', destination: 'Najaf', time: '8 min ago' },
  ];

  const specialOffers = [
    {
      id: 1,
      title: 'Early Bird Special',
      description: 'Book 3 months in advance and save 15%',
      discount: '15% OFF',
      color: 'bg-green-500'
    },
    {
      id: 2,
      title: 'Group Discount',
      description: 'Book for 10+ people and get special rates',
      discount: '20% OFF',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Ramadan Package',
      description: 'Special spiritual journey during holy month',
      discount: 'SPECIAL',
      color: 'bg-purple-500'
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Trusted & Verified',
      description: 'Licensed tour operator with full insurance coverage'
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: 'Knowledgeable spiritual guides fluent in multiple languages'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in pilgrimage services'
    },
    {
      icon: Heart,
      title: 'Care & Comfort',
      description: '24/7 support ensuring your journey is smooth and spiritual'
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
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Overlay Animation */}
      <div
        className="relative h-[700px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 47, 74, 0.75), rgba(26, 47, 74, 0.75)), url('https://images.unsplash.com/photo-1761475878231-32efb0aeff5d')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-2 h-2 bg-[#ffce05] rounded-full opacity-30 animate-float" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
          <div className="absolute w-3 h-3 bg-[#ffce05] rounded-full opacity-20 animate-float" style={{ top: '60%', left: '80%', animationDelay: '2s' }} />
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-40 animate-float" style={{ top: '40%', right: '15%', animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center mb-8 animate-fadeIn">
            <Badge className="bg-[#ffce05] text-[#1a2f4a] mb-4 text-sm px-4 py-1">
              Trusted by 15,000+ Pilgrims
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Begin Your Sacred<br />
              <span className="text-[#ffce05]">Spiritual Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Experience the profound connection of Ziyarat to Iran & Iraq's holiest shrines
            </p>
          </div>
          <EnhancedSearchWidget />

          {/* Live Booking Ticker */}
          <div className="mt-6 bg-white/10 backdrop-blur-md rounded-lg p-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-white text-sm">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span className="font-semibold">Live:</span>
              {recentBookings.map((booking, idx) => (
                <span key={idx} className="animate-pulse">
                  {booking.name} booked {booking.destination} • {booking.time}
                  {idx < recentBookings.length - 1 && ' | '}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Trust Indicators & Stats */}
      <div className="bg-white py-12 shadow-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1a2f4a] mb-2">{stats.pilgrims.toLocaleString()}+</div>
              <div className="text-gray-600">Happy Pilgrims</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1a2f4a] mb-2">{stats.tours}+</div>
              <div className="text-gray-600">Tours Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1a2f4a] mb-2">{stats.satisfaction}%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1a2f4a] mb-2">{stats.countries}+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offers Banner */}
      <div className="bg-gradient-to-r from-[#ffce05] to-[#e6b800] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                <Badge className={`${offer.color} text-white mb-3`}>{offer.discount}</Badge>
                <h3 className="font-bold text-lg text-[#1a2f4a] mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                <Button variant="ghost" className="text-[#1a2f4a] hover:text-[#ffce05] p-0">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f4a] mb-3">Quick Access</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for your pilgrimage journey in one place
          </p>
        </div>
        <QuickLinks />
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[#1a2f4a] text-white mb-4">SIMPLE PROCESS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f4a] mb-3">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four simple steps to begin your spiritual journey
            </p>
          </div>
          <ProcessSteps />
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <Badge className="bg-gradient-to-r from-[#ffce05] to-[#e6b800] text-[#1a2f4a] mb-4">
            <TrendingUp className="h-4 w-4 mr-2 inline" />
            MOST VISITED
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f4a] mb-3">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the most sought-after pilgrimage destinations
          </p>
        </div>
        <PopularDestinations />
      </div>

      {/* Plan Your Trip Section - Enhanced */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#1a2f4a] via-[#2a3f5a] to-[#1a2f4a] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #ffce05 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-2/3">
              <Badge className="bg-[#ffce05] text-[#1a2f4a] mb-4">NEW FEATURE</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#ffce05]">{t('planYourTrip')}</h2>
              <p className="text-gray-200 text-lg mb-4">{t('planYourTripDesc')}</p>
              <div className="flex items-start space-x-3 text-sm">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Custom dates, cities, and accommodations</span>
              </div>
              <div className="flex items-start space-x-3 text-sm mt-2">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Expert recommendations based on your preferences</span>
              </div>
            </div>
            <Link to="/plan-trip">
              <Button
                size="lg"
                className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a] font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {t('startPlanning')}
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Upcoming Groups - Enhanced */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <Badge className="bg-[#ffce05] text-[#1a2f4a] mb-4">POPULAR CHOICE</Badge>
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
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-bold text-white text-lg mb-1">{group.title}</h3>
                  <p className="text-gray-200 text-sm">{group.organizer}</p>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-[#ffce05]" />
                    <span>
                      {new Date(group.departure).toLocaleDateString()} -{' '}
                      {new Date(group.return).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-[#ffce05]" />
                    <span>{group.cities.join(', ')}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-[#ffce05]" />
                    <span>7 Days / 6 Nights</span>
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
                    <Button className="bg-[#1a2f4a] hover:bg-[#2a3f5a] group-hover:bg-[#ffce05] group-hover:text-[#1a2f4a] transition-colors">
                      {t('bookNow')}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/groups">
            <Button variant="outline" size="lg" className="border-[#1a2f4a] text-[#1a2f4a] hover:bg-[#1a2f4a] hover:text-white">
              {t('viewAll')} Group Tours
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Featured Packages - Enhanced */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="bg-[#1a2f4a] text-white mb-4">BEST VALUE</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f4a] mb-3">{t('featuredPackages')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete pilgrimage experiences with flights, hotels, and guided tours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.slice(0, 2).map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-80">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center space-x-1 bg-white px-3 py-1.5 rounded-full shadow-lg">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-semibold text-sm">{pkg.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({pkg.rating * 200} reviews)</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-2xl text-white mb-2">{pkg.title}</h3>
                    <p className="text-gray-200 text-sm">{pkg.description}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.cities.map((city, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-[#1a2f4a] text-white">
                        {city}
                      </Badge>
                    ))}
                  </div>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-600 mb-2">Package Includes:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.inclusions.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 mr-1 text-green-600" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-sm text-gray-500">{t('from')}</span>
                      <div className="text-3xl font-bold text-[#1a2f4a]">${pkg.price}</div>
                      <span className="text-sm text-gray-500">{pkg.duration}</span>
                    </div>
                    <Link to={`/packages/${pkg.id}`}>
                      <Button className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]" size="lg">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
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
              <Card key={idx} className="text-center hover:shadow-xl transition-all duration-300 border-t-4 border-[#ffce05] group">
                <CardContent className="p-6">
                  <div className="bg-[#1a2f4a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ffce05] transition-colors">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-[#1a2f4a] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Iraq Ziyarat Guide - Enhanced CTA */}
      <div className="relative bg-gradient-to-br from-[#1a2f4a] via-[#2a4f6a] to-[#1a2f4a] py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-[#ffce05] text-[#1a2f4a] mb-4 text-lg px-6 py-2">
              ✨ NEW - COMPREHENSIVE GUIDE
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Iraq Ziyarat Guide
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-4">
              Your complete companion for sacred pilgrimages to Iraq's holiest shrines
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto">
              📖 2,000+ lines of comprehensive data • 🕌 7 prayers with full Arabic text • 🎓 72 martyrs documented • 📚 7 renowned scholars
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-[#ffce05]/30 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#ffce05] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-[#1a2f4a]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">4 Sacred Cities</h3>
                <p className="text-gray-300 text-sm">
                  Najaf, Karbala, Kadhimiya, Samarra with 20+ holy sites
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-[#ffce05]/30 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#ffce05] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-[#1a2f4a]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Arabic Prayers</h3>
                <p className="text-gray-300 text-sm">
                  7 major prayers with full Arabic text, transliteration & English
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-[#ffce05]/30 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#ffce05] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#1a2f4a]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Complete Information</h3>
                <p className="text-gray-300 text-sm">
                  Martyrs, scholars, history, practical tips, and travel info
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link to="/iraq-ziyarat">
              <Button size="lg" className="bg-[#ffce05] text-[#1a2f4a] hover:bg-[#e6b800] text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-[#ffce05]/50 transition-all duration-300 transform hover:scale-105">
                Explore Complete Guide
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              📱 Perfect modal UX • No scrolling needed • 9 comprehensive sections
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Testimonials with Carousel */}
      <div className="bg-[#1a2f4a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ffce05] mb-4">
              {t('testimonials')}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from thousands of pilgrims who experienced spiritual transformation
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-white">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg md:text-xl mb-6 italic text-center">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="text-center">
                  <div className="font-semibold text-lg text-[#1a2f4a]">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[currentTestimonial].location}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {testimonials[currentTestimonial].trip}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carousel Controls */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-[#ffce05] transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-[#1a2f4a]" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-[#ffce05] transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-[#1a2f4a]" />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentTestimonial ? 'bg-[#ffce05] w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f4a] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about your pilgrimage journey</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#1a2f4a]">{faq.question}</span>
                <ChevronRight
                  className={`h-5 w-5 text-[#ffce05] transition-transform ${
                    openFaq === idx ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to receive updates on new packages, special offers, and spiritual travel tips
          </p>
          <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white"
            />
            <Button type="submit" className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a] font-semibold px-8">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <button className="bg-green-500 text-white rounded-full p-4 shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group">
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat with us
          </span>
        </button>
        <button className="bg-[#ffce05] text-[#1a2f4a] rounded-full p-4 shadow-2xl hover:bg-[#e6b800] transition-all hover:scale-110 group">
          <Phone className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Call us now
          </span>
        </button>
      </div>
    </div>
  );
};

export default EnhancedHome;