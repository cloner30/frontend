import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { GripVertical, Eye, EyeOff, Edit, Save, AlertCircle, Image as ImageIcon, Link as LinkIcon, Type, Palette } from 'lucide-react';
import { getHomeContent, createHomeContent, updateHomeContent } from '../../services/api';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Switch } from '../../components/ui/switch';
import { useToast } from '../../hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../components/ui/dialog';
import { Card, CardContent } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

const HomePageBuilderEnhanced = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  // Enhanced default sections with comprehensive data
  const defaultSections = [
    { 
      id: 'hero', 
      name: 'Hero Section', 
      icon: '🎯', 
      visible: true, 
      data: { 
        title: 'Your Spiritual Journey Begins Here', 
        subtitle: 'Book authentic pilgrimage experiences to sacred destinations',
        description: 'Discover meaningful travel to holy sites with expert guidance',
        backgroundImage: 'https://images.unsplash.com/photo-1564769610851-79d33c0c1638',
        overlayOpacity: 0.5,
        textColor: '#ffffff',
        ctaText: 'Explore Destinations',
        ctaLink: '/search',
        secondaryCtaText: 'View Packages',
        secondaryCtaLink: '/packages',
        showSecondaryButton: true,
        height: 'large' // small, medium, large, full
      }
    },
    { 
      id: 'stats', 
      name: 'Statistics Counter', 
      icon: '📊', 
      visible: true, 
      data: { 
        title: 'Trusted by Thousands',
        subtitle: 'Join our community of satisfied pilgrims',
        pilgrims: { value: 15000, label: 'Pilgrims Served', icon: '👥' },
        tours: { value: 500, label: 'Tours Completed', icon: '✈️' },
        satisfaction: { value: 98, label: 'Satisfaction Rate', suffix: '%', icon: '⭐' },
        countries: { value: 45, label: 'Countries', icon: '🌍' },
        backgroundColor: '#f8f9fa',
        animateOnScroll: true
      }
    },
    { 
      id: 'destinations', 
      name: 'Popular Destinations', 
      icon: '🕌', 
      visible: true, 
      data: { 
        title: 'Popular Destinations',
        subtitle: 'Explore sacred cities and holy sites',
        description: 'Visit the most revered pilgrimage destinations',
        showCount: 6,
        layout: 'grid', // grid, slider, list
        showFilters: true,
        viewAllLink: '/search?type=cities',
        viewAllText: 'View All Destinations'
      }
    },
    { 
      id: 'packages', 
      name: 'Featured Packages', 
      icon: '📦', 
      visible: true, 
      data: { 
        title: 'Featured Packages',
        subtitle: 'Complete pilgrimage packages with everything included',
        description: 'Handpicked tour packages for the best experience',
        showCount: 4,
        layout: 'grid',
        showPricing: true,
        showDuration: true,
        showRating: true,
        viewAllLink: '/packages',
        viewAllText: 'View All Packages',
        highlightBestValue: true
      }
    },
    { 
      id: 'groups', 
      name: 'Upcoming Group Tours', 
      icon: '👥', 
      visible: true, 
      data: { 
        title: 'Upcoming Group Tours',
        subtitle: 'Join fellow pilgrims on organized journeys',
        description: 'Small groups with expert guides',
        showCount: 3,
        layout: 'cards',
        showSeats: true,
        showDeparture: true,
        showOrganizer: true,
        urgencyBadge: true, // Show \"Filling Fast\" badge
        viewAllLink: '/groups',
        viewAllText: 'View All Tours'
      }
    },
    { 
      id: 'testimonials', 
      name: 'Customer Testimonials', 
      icon: '⭐', 
      visible: true, 
      data: { 
        title: 'What Pilgrims Say',
        subtitle: 'Real experiences from our satisfied customers',
        showCount: 3,
        autoRotate: true,
        rotationInterval: 5000, // milliseconds
        showRating: true,
        showPhoto: false,
        showLocation: true,
        layout: 'slider', // slider, grid, testimonial-wall
        backgroundColor: '#ffffff'
      }
    },
    { 
      id: 'trust', 
      name: 'Trust Badges & Features', 
      icon: '🛡️', 
      visible: true, 
      data: { 
        title: 'Why Choose Us',
        showTitle: true,
        badges: [
          { icon: '🔒', title: 'Secure Booking', description: '256-bit SSL encryption', enabled: true },
          { icon: '✓', title: 'Verified Hotels', description: 'Personally inspected properties', enabled: true },
          { icon: '24/7', title: 'Support', description: 'Round-the-clock assistance', enabled: true },
          { icon: '💰', title: 'Best Price', description: 'Price match guarantee', enabled: true },
          { icon: '📱', title: 'Easy Booking', description: 'Book in 3 simple steps', enabled: true },
          { icon: '🌟', title: 'Expert Guides', description: 'Knowledgeable local guides', enabled: true }
        ],
        layout: 'icons', // icons, cards, minimal
        backgroundColor: '#f8f9fa'
      }
    },
    { 
      id: 'process', 
      name: 'How It Works', 
      icon: '🔄', 
      visible: true, 
      data: { 
        title: 'How It Works',
        subtitle: 'Book your spiritual journey in 4 easy steps',
        showNumbers: true,
        steps: [
          { number: 1, title: 'Choose Destination', description: 'Browse sacred cities and holy sites', icon: '🕌', enabled: true },
          { number: 2, title: 'Select Package', description: 'Pick the perfect tour package', icon: '📦', enabled: true },
          { number: 3, title: 'Book & Pay', description: 'Secure online payment', icon: '💳', enabled: true },
          { number: 4, title: 'Travel', description: 'Embark on your journey', icon: '✈️', enabled: true }
        ],
        layout: 'horizontal', // horizontal, vertical, timeline
        backgroundColor: '#ffffff'
      }
    },
    { 
      id: 'offers', 
      name: 'Special Offers', 
      icon: '🎁', 
      visible: true, 
      data: { 
        title: 'Limited Time Offers',
        subtitle: 'Don\'t miss these exclusive deals',
        showBanner: true,
        bannerText: '🔥 Early Bird Discount: Book 60 days in advance and save 15%',
        bannerColor: '#dc2626',
        bannerTextColor: '#ffffff',
        offers: [
          { title: 'Ramadan Special', discount: '20% OFF', description: 'Book any package for Ramadan period', code: 'RAMADAN20', validUntil: '2025-03-15', enabled: true },
          { title: 'Group Discount', discount: '25% OFF', description: 'Groups of 10+ people', code: 'GROUP25', validUntil: '2025-12-31', enabled: true },
          { title: 'Early Bird', discount: '15% OFF', description: 'Book 60 days in advance', code: 'EARLY15', validUntil: '2025-12-31', enabled: true }
        ],
        layout: 'cards',
        showCountdown: true
      }
    },
    { 
      id: 'why-us', 
      name: 'Why Choose Us', 
      icon: '🌟', 
      visible: true, 
      data: { 
        title: 'Why Thousands Choose Us',
        subtitle: 'Experience the difference with Pilgrim Portal',
        features: [
          { icon: '🏅', title: '15+ Years Experience', description: 'Leading pilgrimage travel specialist', enabled: true },
          { icon: '🤝', title: 'Trusted Partners', description: 'Verified hotels and local operators', enabled: true },
          { icon: '💼', title: 'Comprehensive Packages', description: 'Flights, hotels, guides, and more', enabled: true },
          { icon: '🎯', title: 'Tailored Experiences', description: 'Customize your journey', enabled: true },
          { icon: '🛡️', title: 'Travel Insurance', description: 'Complete protection included', enabled: true },
          { icon: '📞', title: 'Multilingual Support', description: 'Assistance in your language', enabled: true }
        ],
        layout: 'grid',
        backgroundColor: '#f8f9fa',
        image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa',
        imagePosition: 'right' // left, right, top, bottom
      }
    },
    { 
      id: 'faq', 
      name: 'FAQ Section', 
      icon: '❓', 
      visible: true, 
      data: { 
        title: 'Frequently Asked Questions',
        subtitle: 'Find answers to common questions',
        showCount: 6,
        faqs: [
          { question: 'What is included in the packages?', answer: 'Our packages include flights, hotels, guided tours, and all major site visits.', category: 'General', enabled: true },
          { question: 'Do you provide visa assistance?', answer: 'Yes, we provide complete visa assistance for all destinations.', category: 'Visa', enabled: true },
          { question: 'Can I customize my itinerary?', answer: 'Absolutely! We offer customizable packages to suit your needs.', category: 'Customization', enabled: true },
          { question: 'What is your cancellation policy?', answer: 'Free cancellation up to 30 days before departure.', category: 'Cancellation', enabled: true },
          { question: 'Are meals included?', answer: 'Most packages include breakfast and dinner. Check package details.', category: 'Meals', enabled: true },
          { question: 'Is travel insurance included?', answer: 'Basic travel insurance is included. Upgrade options available.', category: 'Insurance', enabled: true }
        ],
        layout: 'accordion',
        showCategories: false,
        backgroundColor: '#ffffff'
      }
    },
    { 
      id: 'newsletter', 
      name: 'Newsletter Signup', 
      icon: '📧', 
      visible: true, 
      data: { 
        title: 'Stay Updated',
        subtitle: 'Get the latest offers and travel tips',
        description: 'Subscribe to our newsletter for exclusive deals and pilgrimage guides',
        placeholder: 'Enter your email address',
        buttonText: 'Subscribe',
        privacyText: 'We respect your privacy. Unsubscribe anytime.',
        showSocialLinks: true,
        socialLinks: [
          { platform: 'Facebook', url: 'https://facebook.com', enabled: true },
          { platform: 'Twitter', url: 'https://twitter.com', enabled: true },
          { platform: 'Instagram', url: 'https://instagram.com', enabled: true },
          { platform: 'YouTube', url: 'https://youtube.com', enabled: true }
        ],
        backgroundColor: '#1a2f4a',
        textColor: '#ffffff',
        image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217'
      }
    },
    { 
      id: 'cta', 
      name: 'Final Call-to-Action', 
      icon: '🎯', 
      visible: true, 
      data: { 
        title: 'Ready to Begin Your Journey?',
        subtitle: 'Book your pilgrimage today and create memories that last a lifetime',
        ctaText: 'Start Planning',
        ctaLink: '/search',
        secondaryCtaText: 'Talk to an Expert',
        secondaryCtaLink: '/contact',
        showSecondaryButton: true,
        backgroundImage: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa',
        overlayOpacity: 0.7,
        textColor: '#ffffff'
      }
    }
  ];

  useEffect(() => {
    fetchHomeLayout();
  }, []);

  const fetchHomeLayout = async () => {
    try {
      setLoading(true);
      const data = await getHomeContent();
      const layoutData = data.find(c => c.section === 'layout');
      
      if (layoutData && layoutData.content.sections) {
        setSections(layoutData.content.sections);
      } else {
        setSections(defaultSections);
      }
    } catch (error) {
      console.error('Error fetching layout:', error);
      setSections(defaultSections);
    } finally {
      setLoading(false);
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(sections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setSections(items);
  };

  const toggleVisibility = (id) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, visible: !section.visible } : section
    ));
  };

  const handleEdit = (section) => {
    setEditingSection({ ...section });
    setIsModalOpen(true);
  };

  const handleSaveSection = () => {
    setSections(sections.map(section => 
      section.id === editingSection.id ? editingSection : section
    ));
    setIsModalOpen(false);
    setEditingSection(null);
  };

  const handleSaveLayout = async () => {
    try {
      const layoutPayload = {
        section: 'layout',
        content: { sections },
        isActive: true
      };

      const existing = await getHomeContent();
      const layoutData = existing.find(c => c.section === 'layout');

      if (layoutData) {
        await updateHomeContent(layoutData.id, layoutPayload);
      } else {
        await createHomeContent(layoutPayload);
      }

      toast({
        title: 'Success',
        description: 'Home page layout saved successfully. Changes are now live!'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save layout',
        variant: 'destructive'
      });
    }
  };

  const renderEditForm = () => {
    if (!editingSection) return null;

    switch (editingSection.id) {
      case 'hero':
      case 'cta':
        return (
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
            </TabsList>
            <TabsContent value="content" className="space-y-4">
              <div>
                <Label>Main Title *</Label>
                <Input value={editingSection.data.title} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, title: e.target.value}})} />
              </div>
              <div>
                <Label>Subtitle *</Label>
                <Input value={editingSection.data.subtitle} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, subtitle: e.target.value}})} />
              </div>
              {editingSection.data.description !== undefined && (
                <div>
                  <Label>Description</Label>
                  <Textarea value={editingSection.data.description} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, description: e.target.value}})} rows={2} />
                </div>
              )}
            </TabsContent>
            <TabsContent value="design" className="space-y-4">
              <div>
                <Label>Background Image URL</Label>
                <Input value={editingSection.data.backgroundImage} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, backgroundImage: e.target.value}})} placeholder="https://..." />
                {editingSection.data.backgroundImage && (
                  <img src={editingSection.data.backgroundImage} alt="Preview" className="mt-2 h-20 w-full object-cover rounded" />
                )}
              </div>
              <div>
                <Label>Overlay Opacity (0-1)</Label>
                <Input type="number" step="0.1" min="0" max="1" value={editingSection.data.overlayOpacity} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, overlayOpacity: parseFloat(e.target.value)}})} />
              </div>
              <div>
                <Label>Text Color</Label>
                <Input type="color" value={editingSection.data.textColor} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, textColor: e.target.value}})} />
              </div>
            </TabsContent>
            <TabsContent value="buttons" className="space-y-4">
              <div>
                <Label>Primary Button Text *</Label>
                <Input value={editingSection.data.ctaText} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, ctaText: e.target.value}})} />
              </div>
              <div>
                <Label>Primary Button Link</Label>
                <Input value={editingSection.data.ctaLink} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, ctaLink: e.target.value}})} />
              </div>
              <div className="flex items-center space-x-2">
                <Switch checked={editingSection.data.showSecondaryButton} onCheckedChange={(checked) => setEditingSection({...editingSection, data: {...editingSection.data, showSecondaryButton: checked}})} />
                <Label>Show Secondary Button</Label>
              </div>
              {editingSection.data.showSecondaryButton && (
                <>
                  <div>
                    <Label>Secondary Button Text</Label>
                    <Input value={editingSection.data.secondaryCtaText} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, secondaryCtaText: e.target.value}})} />
                  </div>
                  <div>
                    <Label>Secondary Button Link</Label>
                    <Input value={editingSection.data.secondaryCtaLink} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, secondaryCtaLink: e.target.value}})} />
                  </div>
                </>
              )}
            </TabsContent>
          </Tabs>
        );

      case 'stats':
        return (
          <div className="space-y-4">
            <div>
              <Label>Section Title</Label>
              <Input value={editingSection.data.title} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, title: e.target.value}})} />
            </div>
            <div>
              <Label>Section Subtitle</Label>
              <Input value={editingSection.data.subtitle} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, subtitle: e.target.value}})} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Pilgrims Count</Label>
                <Input type="number" value={editingSection.data.pilgrims.value} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, pilgrims: {...editingSection.data.pilgrims, value: parseInt(e.target.value)}}})} />
              </div>
              <div>
                <Label>Pilgrims Label</Label>
                <Input value={editingSection.data.pilgrims.label} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, pilgrims: {...editingSection.data.pilgrims, label: e.target.value}}})} />
              </div>
              <div>
                <Label>Tours Count</Label>
                <Input type="number" value={editingSection.data.tours.value} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, tours: {...editingSection.data.tours, value: parseInt(e.target.value)}}})} />
              </div>
              <div>
                <Label>Tours Label</Label>
                <Input value={editingSection.data.tours.label} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, tours: {...editingSection.data.tours, label: e.target.value}}})} />
              </div>
              <div>
                <Label>Satisfaction Rate</Label>
                <Input type="number" value={editingSection.data.satisfaction.value} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, satisfaction: {...editingSection.data.satisfaction, value: parseInt(e.target.value)}}})} />
              </div>
              <div>
                <Label>Satisfaction Label</Label>
                <Input value={editingSection.data.satisfaction.label} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, satisfaction: {...editingSection.data.satisfaction, label: e.target.value}}})} />
              </div>
              <div>
                <Label>Countries Count</Label>
                <Input type="number" value={editingSection.data.countries.value} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, countries: {...editingSection.data.countries, value: parseInt(e.target.value)}}})} />
              </div>
              <div>
                <Label>Countries Label</Label>
                <Input value={editingSection.data.countries.label} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, countries: {...editingSection.data.countries, label: e.target.value}}})} />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Switch checked={editingSection.data.animateOnScroll} onCheckedChange={(checked) => setEditingSection({...editingSection, data: {...editingSection.data, animateOnScroll: checked}})} />
              <Label>Animate numbers on scroll</Label>
            </div>
          </div>
        );

      case 'destinations':
      case 'packages':
      case 'groups':
        return (
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="display">Display Options</TabsTrigger>
            </TabsList>
            <TabsContent value="content" className="space-y-4">
              <div>
                <Label>Section Title *</Label>
                <Input value={editingSection.data.title} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, title: e.target.value}})} />
              </div>
              <div>
                <Label>Subtitle</Label>
                <Input value={editingSection.data.subtitle} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, subtitle: e.target.value}})} />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea value={editingSection.data.description} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, description: e.target.value}})} rows={2} />
              </div>
            </TabsContent>
            <TabsContent value="display" className="space-y-4">
              <div>
                <Label>Number of Items to Show</Label>
                <Input type="number" min="1" max="12" value={editingSection.data.showCount} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, showCount: parseInt(e.target.value)}})} />
              </div>
              <div>
                <Label>Layout Style</Label>
                <select className="w-full border rounded px-3 py-2" value={editingSection.data.layout} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, layout: e.target.value}})}>
                  <option value="grid">Grid</option>
                  <option value="slider">Slider</option>
                  <option value="cards">Cards</option>
                  <option value="list">List</option>
                </select>
              </div>
              <div>
                <Label>View All Link</Label>
                <Input value={editingSection.data.viewAllLink} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, viewAllLink: e.target.value}})} />
              </div>
              <div>
                <Label>View All Button Text</Label>
                <Input value={editingSection.data.viewAllText} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, viewAllText: e.target.value}})} />
              </div>
            </TabsContent>
          </Tabs>
        );

      case 'testimonials':
        return (
          <div className="space-y-4">
            <div>
              <Label>Section Title</Label>
              <Input value={editingSection.data.title} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, title: e.target.value}})} />
            </div>
            <div>
              <Label>Subtitle</Label>
              <Input value={editingSection.data.subtitle} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, subtitle: e.target.value}})} />
            </div>
            <div>
              <Label>Number to Show</Label>
              <Input type="number" min="1" max="10" value={editingSection.data.showCount} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, showCount: parseInt(e.target.value)}})} />
            </div>
            <div className="flex items-center space-x-2">
              <Switch checked={editingSection.data.autoRotate} onCheckedChange={(checked) => setEditingSection({...editingSection, data: {...editingSection.data, autoRotate: checked}})} />
              <Label>Auto-rotate testimonials</Label>
            </div>
            {editingSection.data.autoRotate && (
              <div>
                <Label>Rotation Interval (seconds)</Label>
                <Input type="number" min="3" max="10" value={editingSection.data.rotationInterval / 1000} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, rotationInterval: parseInt(e.target.value) * 1000}})} />
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="space-y-4">
            <div>
              <Label>Section Title</Label>
              <Input value={editingSection.data.title || ''} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, title: e.target.value}})} />
            </div>
            <div>
              <Label>Subtitle</Label>
              <Input value={editingSection.data.subtitle || ''} onChange={(e) => setEditingSection({...editingSection, data: {...editingSection.data, subtitle: e.target.value}})} />
            </div>
            <p className="text-sm text-gray-500">More options coming soon for this section...</p>
          </div>
        );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ffce05]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Home Page Builder</h1>
          <p className="text-gray-600 mt-1">Complete control over your home page - drag, reorder, edit, and customize</p>
        </div>
        <Button onClick={handleSaveLayout} className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]">
          <Save className="h-4 w-4 mr-2" />Save Layout
        </Button>
      </div>

      {/* Enhanced Info */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="space-y-2">
              <div className="text-sm font-semibold text-blue-900">Advanced Page Builder Features:</div>
              <ul className="text-sm text-blue-800 space-y-1 ml-4">
                <li>• <strong>Drag & Drop:</strong> Reorder sections by dragging the grip icon</li>
                <li>• <strong>Show/Hide:</strong> Toggle visibility with the eye icon</li>
                <li>• <strong>Edit:</strong> Click Edit for comprehensive customization options</li>
                <li>• <strong>Live Changes:</strong> All changes appear immediately after saving</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fixed Search Section */}
      <Card className="border-2 border-green-500 bg-green-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🔍</span>
              <div>
                <div className="font-semibold text-gray-900">Search Widget</div>
                <div className="text-sm text-gray-600">Multi-tab search for Hotels, Flights, and Group Tours</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs bg-green-600 text-white px-2 py-1 rounded font-semibold">FIXED POSITION</span>
              <Eye className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section Counter */}
      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
        <div className="text-sm text-gray-600">
          <strong>{sections.length}</strong> sections • <strong>{sections.filter(s => s.visible).length}</strong> visible • <strong>{sections.filter(s => !s.visible).length}</strong> hidden
        </div>
      </div>

      {/* Draggable Sections */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="sections">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className={`space-y-3 ${snapshot.isDraggingOver ? 'bg-blue-50 rounded-lg p-3' : ''}`}>
              {sections.map((section, index) => (
                <Draggable key={section.id} draggableId={section.id} index={index}>
                  {(provided, snapshot) => (
                    <Card ref={provided.innerRef} {...provided.draggableProps} className={`${snapshot.isDragging ? 'shadow-2xl ring-4 ring-[#ffce05] rotate-1' : ''} ${!section.visible ? 'opacity-50 bg-gray-100' : 'hover:shadow-md'} transition-all`}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 flex-1">
                            <div {...provided.dragHandleProps} className="cursor-move hover:bg-gray-100 p-1 rounded">
                              <GripVertical className="h-5 w-5 text-gray-400" />
                            </div>
                            <span className="text-3xl">{section.icon}</span>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 flex items-center space-x-2">
                                <span>{section.name}</span>
                                {!section.visible && <span className="text-xs bg-gray-500 text-white px-2 py-0.5 rounded">HIDDEN</span>}
                              </div>
                              <div className="text-sm text-gray-600 mt-0.5">
                                {section.data.title || section.data.subtitle || 'Customizable section'}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" onClick={() => handleEdit(section)} className="hover:bg-blue-50">
                              <Edit className="h-4 w-4 mr-1" />Edit
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => toggleVisibility(section.id)} className={section.visible ? 'hover:bg-green-50' : 'hover:bg-red-50'}>
                              {section.visible ? <Eye className="h-4 w-4 text-green-600" /> : <EyeOff className="h-4 w-4 text-red-600" />}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-3">
              <span className="text-3xl">{editingSection?.icon}</span>
              <div>
                <div className="text-xl">Edit {editingSection?.name}</div>
                <div className="text-sm font-normal text-gray-500 mt-1">Customize content and appearance</div>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">{renderEditForm()}</div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveSection} className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]">
              <Save className="h-4 w-4 mr-1" />Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Bottom Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <ImageIcon className="h-5 w-5 text-purple-600 mt-0.5" />
              <div className="text-sm text-purple-800">
                <strong>Live Preview:</strong> Visit your home page to see changes. All modifications take effect immediately after saving.
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Type className="h-5 w-5 text-amber-600 mt-0.5" />
              <div className="text-sm text-amber-800">
                <strong>Pro Tip:</strong> Hidden sections won't appear to visitors. Use this to temporarily disable sections without losing your content.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePageBuilderEnhanced;
