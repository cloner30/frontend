import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { getGroupTours, createGroupTour, updateGroupTour, deleteGroupTour } from '../../services/api';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { useToast } from '../../hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../components/ui/dialog';

const GroupToursManager = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTour, setEditingTour] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    departure: '',
    return: '',
    duration: 7,
    price: 0,
    currency: 'USD',
    seatsLeft: 40,
    totalSeats: 40,
    image: '',
    organizer: '',
    organizerRating: 4.5,
    organizerReviews: 0,
    cities: [],
    country: '',
    departureCity: '',
    inclusions: [],
    exclusions: [],
    highlights: [],
    status: 'available',
    specialEvent: null,
    itinerary: [],
    reviews: []
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      setLoading(true);
      const data = await getGroupTours();
      setTours(data);
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to fetch tours', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingTour(null);
    setFormData({
      title: '', departure: '', return: '', duration: 7, price: 0, currency: 'USD',
      seatsLeft: 40, totalSeats: 40, image: '', organizer: '', organizerRating: 4.5,
      organizerReviews: 0, cities: [], country: '', departureCity: '', inclusions: [],
      exclusions: [], highlights: [], status: 'available', specialEvent: null, itinerary: [], reviews: []
    });
    setIsModalOpen(true);
  };

  const handleEdit = (tour) => {
    setEditingTour(tour);
    setFormData(tour);
    setIsModalOpen(true);
  };

  const handleDelete = async (tourId) => {
    if (!window.confirm('Are you sure?')) return;
    try {
      await deleteGroupTour(tourId);
      toast({ title: 'Success', description: 'Tour deleted' });
      fetchTours();
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to delete', variant: 'destructive' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTour) {
        await updateGroupTour(editingTour.id, formData);
        toast({ title: 'Success', description: 'Tour updated' });
      } else {
        await createGroupTour(formData);
        toast({ title: 'Success', description: 'Tour created' });
      }
      setIsModalOpen(false);
      fetchTours();
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to save tour', variant: 'destructive' });
    }
  };

  const filteredTours = tours.filter(tour =>
    tour.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ffce05]"></div></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Group Tours Management</h1>
          <p className="text-gray-600 mt-1">Manage group tour departures</p>
        </div>
        <Button onClick={handleAdd} className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]">
          <Plus className="h-4 w-4 mr-2" />Add Tour
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input placeholder="Search tours..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tour</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Country</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Seats</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTours.map((tour) => (
              <tr key={tour.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img src={tour.image} alt={tour.title} className="h-10 w-10 rounded object-cover" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{tour.title}</div>
                      <div className="text-sm text-gray-500">{tour.organizer}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{tour.country}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{tour.duration} days</td>
                <td className="px-6 py-4 text-sm text-gray-900">${tour.price}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{tour.seatsLeft}/{tour.totalSeats}</td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  <button onClick={() => handleEdit(tour)} className="text-blue-600 hover:text-blue-900 mr-4"><Edit className="h-4 w-4" /></button>
                  <button onClick={() => handleDelete(tour.id)} className="text-red-600 hover:text-red-900"><Trash2 className="h-4 w-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredTours.length === 0 && <div className="text-center py-12 text-gray-500">No tours found</div>}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editingTour ? 'Edit Tour' : 'Add New Tour'}</DialogTitle></DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2"><Label>Title *</Label><Input value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required /></div>
              <div><Label>Departure Date *</Label><Input type="date" value={formData.departure} onChange={(e) => setFormData({...formData, departure: e.target.value})} required /></div>
              <div><Label>Return Date *</Label><Input type="date" value={formData.return} onChange={(e) => setFormData({...formData, return: e.target.value})} required /></div>
              <div><Label>Duration (days) *</Label><Input type="number" value={formData.duration} onChange={(e) => setFormData({...formData, duration: parseInt(e.target.value)})} required /></div>
              <div><Label>Price (USD) *</Label><Input type="number" value={formData.price} onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})} required /></div>
              <div><Label>Total Seats *</Label><Input type="number" value={formData.totalSeats} onChange={(e) => setFormData({...formData, totalSeats: parseInt(e.target.value)})} required /></div>
              <div><Label>Seats Left *</Label><Input type="number" value={formData.seatsLeft} onChange={(e) => setFormData({...formData, seatsLeft: parseInt(e.target.value)})} required /></div>
              <div><Label>Country *</Label><Input value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} required /></div>
              <div><Label>Departure City *</Label><Input value={formData.departureCity} onChange={(e) => setFormData({...formData, departureCity: e.target.value})} required /></div>
              <div><Label>Organizer *</Label><Input value={formData.organizer} onChange={(e) => setFormData({...formData, organizer: e.target.value})} required /></div>
              <div><Label>Organizer Rating</Label><Input type="number" step="0.1" value={formData.organizerRating} onChange={(e) => setFormData({...formData, organizerRating: parseFloat(e.target.value)})} /></div>
            </div>
            <div><Label>Image URL *</Label><Input value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} required /></div>
            <div><Label>Cities (comma-separated)</Label><Input value={formData.cities.join(', ')} onChange={(e) => setFormData({...formData, cities: e.target.value.split(',').map(s => s.trim())})} /></div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]">{editingTour ? 'Update' : 'Create'}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GroupToursManager;