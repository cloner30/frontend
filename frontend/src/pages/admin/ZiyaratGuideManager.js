import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, MapPin, Book } from 'lucide-react';
import { getZiyaratGuideCities, getZiyaratGuidePlaces, getZiyaratGuideContent, createZiyaratGuideCity, updateZiyaratGuideCity, deleteZiyaratGuideCity, createZiyaratGuidePlace, updateZiyaratGuidePlace, deleteZiyaratGuidePlace } from '../../services/api';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { useToast } from '../../hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

const ZiyaratGuideManager = () => {
  const [guideCities, setGuideCities] = useState([]);
  const [guidePlaces, setGuidePlaces] = useState([]);
  const [guideContent, setGuideContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCity, setEditingCity] = useState(null);
  const [cityFormData, setCityFormData] = useState({
    cityId: '',
    name: '',
    nameArabic: '',
    title: '',
    country: 'Iraq',
    province: '',
    coordinates: { lat: 0, lng: 0 },
    image: '',
    description: '',
    significance: '',
    population: '',
    bestTimeToVisit: '',
    airportDistance: '',
    visaInfo: '',
    currency: 'Iraqi Dinar (IQD)',
    languages: ['Arabic']
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [cities, places, content] = await Promise.all([
        getZiyaratGuideCities(),
        getZiyaratGuidePlaces(),
        getZiyaratGuideContent()
      ]);
      setGuideCities(cities);
      setGuidePlaces(places);
      setGuideContent(content);
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to fetch guide data', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleAddCity = () => {
    setEditingCity(null);
    setCityFormData({
      cityId: '', name: '', nameArabic: '', title: '', country: 'Iraq', province: '',
      coordinates: { lat: 0, lng: 0 }, image: '', description: '', significance: '',
      population: '', bestTimeToVisit: '', airportDistance: '', visaInfo: '',
      currency: 'Iraqi Dinar (IQD)', languages: ['Arabic']
    });
    setIsModalOpen(true);
  };

  const handleEditCity = (city) => {
    setEditingCity(city);
    setCityFormData(city);
    setIsModalOpen(true);
  };

  const handleDeleteCity = async (cityId) => {
    if (!window.confirm('Are you sure? This will also delete related places.')) return;
    try {
      await deleteZiyaratGuideCity(cityId);
      toast({ title: 'Success', description: 'City deleted' });
      fetchData();
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to delete', variant: 'destructive' });
    }
  };

  const handleSubmitCity = async (e) => {
    e.preventDefault();
    try {
      if (editingCity) {
        await updateZiyaratGuideCity(editingCity.cityId, cityFormData);
        toast({ title: 'Success', description: 'City updated' });
      } else {
        await createZiyaratGuideCity(cityFormData);
        toast({ title: 'Success', description: 'City created' });
      }
      setIsModalOpen(false);
      fetchData();
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to save', variant: 'destructive' });
    }
  };

  const filteredCities = guideCities.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ffce05]"></div></div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Iraq Ziyarat Guide Management</h1>
        <p className="text-gray-600 mt-1">Manage comprehensive ziyarat guide content</p>
      </div>

      <Tabs defaultValue="cities" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="cities">Guide Cities ({guideCities.length})</TabsTrigger>
          <TabsTrigger value="places">Holy Places ({guidePlaces.length})</TabsTrigger>
          <TabsTrigger value="content">Guide Content ({guideContent.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="cities" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input placeholder="Search cities..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
            </div>
            <Button onClick={handleAddCity} className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]">
              <Plus className="h-4 w-4 mr-2" />Add City
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCities.map((city) => (
              <Card key={city.cityId}>
                <img src={city.image} alt={city.name} className="w-full h-48 object-cover rounded-t-lg" />
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div>
                      <div className="text-lg">{city.name}</div>
                      <div className="text-sm font-normal text-gray-500">{city.nameArabic}</div>
                    </div>
                    <div className="flex space-x-2">
                      <button onClick={() => handleEditCity(city)} className="text-blue-600 hover:text-blue-900"><Edit className="h-4 w-4" /></button>
                      <button onClick={() => handleDeleteCity(city.cityId)} className="text-red-600 hover:text-red-900"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-2">{city.description}</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div><strong>Province:</strong> {city.province}</div>
                    <div><strong>Population:</strong> {city.population}</div>
                    <div><strong>Best Time:</strong> {city.bestTimeToVisit}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCities.length === 0 && <div className="text-center py-12 text-gray-500">No cities found</div>}
        </TabsContent>

        <TabsContent value="places">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Holy Places & Shrines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {guidePlaces.map((place) => (
                  <div key={place.placeId} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <img src={place.image} alt={place.name} className="h-16 w-16 rounded object-cover" />
                      <div>
                        <div className="font-medium">{place.name}</div>
                        <div className="text-sm text-gray-600">{place.nameArabic}</div>
                        <div className="text-xs text-gray-500">{place.type} • {place.importance}</div>
                      </div>
                    </div>
                  </div>
                ))}
                {guidePlaces.length === 0 && <p className="text-center text-gray-500 py-8">No places added yet</p>}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Book className="h-5 w-5 mr-2" />
                Guide Content (Preparation, Etiquette, etc.)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {guideContent.map((content) => (
                  <div key={content.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="font-medium text-lg mb-1">{content.title}</div>
                    <div className="text-sm text-gray-600">Type: <span className="font-medium">{content.contentType}</span></div>
                  </div>
                ))}
                {guideContent.length === 0 && <p className="text-center text-gray-500 py-8">No content added yet</p>}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editingCity ? 'Edit Guide City' : 'Add Guide City'}</DialogTitle></DialogHeader>
          <form onSubmit={handleSubmitCity} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div><Label>City ID *</Label><Input value={cityFormData.cityId} onChange={(e) => setCityFormData({...cityFormData, cityId: e.target.value})} placeholder="najaf" required /></div>
              <div><Label>Name (English) *</Label><Input value={cityFormData.name} onChange={(e) => setCityFormData({...cityFormData, name: e.target.value})} required /></div>
              <div><Label>Name (Arabic) *</Label><Input value={cityFormData.nameArabic} onChange={(e) => setCityFormData({...cityFormData, nameArabic: e.target.value})} dir="rtl" required /></div>
              <div><Label>Title</Label><Input value={cityFormData.title} onChange={(e) => setCityFormData({...cityFormData, title: e.target.value})} placeholder="The Dignified City" /></div>
              <div><Label>Province *</Label><Input value={cityFormData.province} onChange={(e) => setCityFormData({...cityFormData, province: e.target.value})} required /></div>
              <div><Label>Population</Label><Input value={cityFormData.population} onChange={(e) => setCityFormData({...cityFormData, population: e.target.value})} /></div>
            </div>
            <div><Label>Image URL *</Label><Input value={cityFormData.image} onChange={(e) => setCityFormData({...cityFormData, image: e.target.value})} required /></div>
            <div><Label>Description *</Label><Textarea value={cityFormData.description} onChange={(e) => setCityFormData({...cityFormData, description: e.target.value})} rows={3} required /></div>
            <div><Label>Significance *</Label><Textarea value={cityFormData.significance} onChange={(e) => setCityFormData({...cityFormData, significance: e.target.value})} rows={2} required /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>Best Time to Visit</Label><Input value={cityFormData.bestTimeToVisit} onChange={(e) => setCityFormData({...cityFormData, bestTimeToVisit: e.target.value})} placeholder="October to April" /></div>
              <div><Label>Airport Distance</Label><Input value={cityFormData.airportDistance} onChange={(e) => setCityFormData({...cityFormData, airportDistance: e.target.value})} placeholder="5 km from city center" /></div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]">{editingCity ? 'Update' : 'Create'}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ZiyaratGuideManager;