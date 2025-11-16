import React, { useState, useEffect } from 'react';
import { Save, Image as ImageIcon, Eye } from 'lucide-react';
import { getHomeContent, createHomeContent, updateHomeContent } from '../../services/api';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { useToast } from '../../hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

const HomeContentManager = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [heroData, setHeroData] = useState({
    title: '',
    subtitle: '',
    backgroundImage: '',
    ctaText: 'Search Now',
    ctaLink: '/search'
  });
  const [offersData, setOffersData] = useState({
    title: 'Special Offers',
    offers: []
  });
  const [featuredData, setFeaturedData] = useState({
    title: 'Featured Destinations',
    description: '',
    showTestimonials: true
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      setLoading(true);
      const data = await getHomeContent();
      setContent(data);
      
      // Parse existing content
      const hero = data.find(c => c.section === 'hero');
      const offers = data.find(c => c.section === 'offers');
      const featured = data.find(c => c.section === 'featured');
      
      if (hero) setHeroData(hero.content);
      if (offers) setOffersData(offers.content);
      if (featured) setFeaturedData(featured.content);
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to fetch content', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSection = async (section, data) => {
    try {
      const existing = content.find(c => c.section === section);
      const payload = { section, content: data, isActive: true };
      
      if (existing) {
        await updateHomeContent(existing.id, payload);
        toast({ title: 'Success', description: `${section} updated successfully` });
      } else {
        await createHomeContent(payload);
        toast({ title: 'Success', description: `${section} created successfully` });
      }
      fetchContent();
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to save', variant: 'destructive' });
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ffce05]"></div></div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Home Content Management</h1>
        <p className="text-gray-600 mt-1">Manage hero section, offers, and featured content</p>
      </div>

      <Tabs defaultValue="hero" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="hero">Hero Section</TabsTrigger>
          <TabsTrigger value="offers">Special Offers</TabsTrigger>
          <TabsTrigger value="featured">Featured Content</TabsTrigger>
        </TabsList>

        <TabsContent value="hero">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Hero Section</span>
                <Button size="sm" onClick={() => handleSaveSection('hero', heroData)} className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]">
                  <Save className="h-4 w-4 mr-1" /> Save
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Main Title</Label>
                <Input value={heroData.title} onChange={(e) => setHeroData({...heroData, title: e.target.value})} placeholder="Your Spiritual Journey Begins Here" />
              </div>
              <div>
                <Label>Subtitle</Label>
                <Input value={heroData.subtitle} onChange={(e) => setHeroData({...heroData, subtitle: e.target.value})} placeholder="Discover sacred destinations" />
              </div>
              <div>
                <Label>Background Image URL</Label>
                <Input value={heroData.backgroundImage} onChange={(e) => setHeroData({...heroData, backgroundImage: e.target.value})} placeholder="https://..." />
                {heroData.backgroundImage && (
                  <div className="mt-2">
                    <img src={heroData.backgroundImage} alt="Hero" className="h-32 w-full object-cover rounded" />
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>CTA Button Text</Label>
                  <Input value={heroData.ctaText} onChange={(e) => setHeroData({...heroData, ctaText: e.target.value})} />
                </div>
                <div>
                  <Label>CTA Link</Label>
                  <Input value={heroData.ctaLink} onChange={(e) => setHeroData({...heroData, ctaLink: e.target.value})} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="offers">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Special Offers</span>
                <Button size="sm" onClick={() => handleSaveSection('offers', offersData)} className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]">
                  <Save className="h-4 w-4 mr-1" /> Save
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Section Title</Label>
                <Input value={offersData.title} onChange={(e) => setOffersData({...offersData, title: e.target.value})} />
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-600">Manage individual offers by adding them as separate entries. Each offer can have a title, description, discount percentage, and validity period.</p>
                <p className="text-sm text-gray-500 mt-2">Note: Full offer management coming in next update.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="featured">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Featured Content</span>
                <Button size="sm" onClick={() => handleSaveSection('featured', featuredData)} className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]">
                  <Save className="h-4 w-4 mr-1" /> Save
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Section Title</Label>
                <Input value={featuredData.title} onChange={(e) => setFeaturedData({...featuredData, title: e.target.value})} />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea value={featuredData.description} onChange={(e) => setFeaturedData({...featuredData, description: e.target.value})} rows={3} />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="showTestimonials" checked={featuredData.showTestimonials} onChange={(e) => setFeaturedData({...featuredData, showTestimonials: e.target.checked})} className="rounded" />
                <Label htmlFor="showTestimonials" className="cursor-pointer">Show testimonials section on home page</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Preview Changes</h3>
              <p className="text-sm text-blue-700">Changes will be reflected on the home page immediately after saving. Visit the home page to see your updates.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeContentManager;