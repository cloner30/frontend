import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { getCities, createCity, updateCity, deleteCity } from '../../services/api';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { useToast } from '../../hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../components/ui/dialog';

const CitiesManager = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCity, setEditingCity] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    description: '',
    image: '',
    popularPlaces: 0,
    hotels: 0
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      setLoading(true);
      const data = await getCities();
      setCities(data);
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to fetch cities', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingCity(null);
    setFormData({ name: '', country: '', description: '', image: '', popularPlaces: 0, hotels: 0 });
    setIsModalOpen(true);
  };

  const handleEdit = (city) => {
    setEditingCity(city);
    setFormData(city);
    setIsModalOpen(true);
  };

  const handleDelete = async (cityId) => {
    if (!window.confirm('Are you sure?')) return;
    try {
      await deleteCity(cityId);
      toast({ title: 'Success', description: 'City deleted' });
      fetchCities();
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to delete', variant: 'destructive' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCity) {
        await updateCity(editingCity.id, formData);
        toast({ title: 'Success', description: 'City updated' });
      } else {
        await createCity(formData);
        toast({ title: 'Success', description: 'City created' });
      }
      setIsModalOpen(false);
      fetchCities();
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to save', variant: 'destructive' });
    }
  };

  const filteredCities = cities.filter(city => city.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ffce05]"></div></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Cities Management</h1>
          <p className="text-gray-600 mt-1">Manage pilgrimage cities</p>
        </div>
        <Button onClick={handleAdd} className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]"><Plus className="h-4 w-4 mr-2" />Add City</Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input placeholder="Search cities..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCities.map((city) => (
          <div key={city.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <img src={city.image} alt={city.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{city.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{city.country}</p>
              <p className="text-gray-700 text-sm mb-4">{city.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <span>{city.popularPlaces} Places</span>
                <span>{city.hotels} Hotels</span>
              </div>
              <div className="flex justify-end space-x-2">
                <button onClick={() => handleEdit(city)} className="text-blue-600 hover:text-blue-900"><Edit className="h-4 w-4" /></button>
                <button onClick={() => handleDelete(city.id)} className="text-red-600 hover:text-red-900"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCities.length === 0 && <div className="text-center py-12 text-gray-500">No cities found</div>}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editingCity ? 'Edit City' : 'Add New City'}</DialogTitle></DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><Label>City Name *</Label><Input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required /></div>
            <div><Label>Country *</Label><Input value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} required /></div>
            <div><Label>Description *</Label><Input value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required /></div>
            <div><Label>Image URL *</Label><Input value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} required /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>Popular Places</Label><Input type="number" value={formData.popularPlaces} onChange={(e) => setFormData({...formData, popularPlaces: parseInt(e.target.value)})} /></div>
              <div><Label>Hotels</Label><Input type="number" value={formData.hotels} onChange={(e) => setFormData({...formData, hotels: parseInt(e.target.value)})} /></div>
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

export default CitiesManager;