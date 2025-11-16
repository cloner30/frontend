import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, Star } from 'lucide-react';
import { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from '../../services/api';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { useToast } from '../../hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../components/ui/dialog';

const TestimonialsManager = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    rating: 5,
    text: '',
    date: new Date().toISOString().split('T')[0],
    trip: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const data = await getTestimonials();
      setTestimonials(data);
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to fetch testimonials', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingTestimonial(null);
    setFormData({ name: '', location: '', rating: 5, text: '', date: new Date().toISOString().split('T')[0], trip: '' });
    setIsModalOpen(true);
  };

  const handleEdit = (testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData(testimonial);
    setIsModalOpen(true);
  };

  const handleDelete = async (testimonialId) => {
    if (!window.confirm('Are you sure?')) return;
    try {
      await deleteTestimonial(testimonialId);
      toast({ title: 'Success', description: 'Testimonial deleted' });
      fetchTestimonials();
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to delete', variant: 'destructive' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTestimonial) {
        await updateTestimonial(editingTestimonial.id, formData);
        toast({ title: 'Success', description: 'Testimonial updated' });
      } else {
        await createTestimonial(formData);
        toast({ title: 'Success', description: 'Testimonial created' });
      }
      setIsModalOpen(false);
      fetchTestimonials();
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to save', variant: 'destructive' });
    }
  };

  const filteredTestimonials = testimonials.filter(t => t.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ffce05]"></div></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Testimonials Management</h1>
          <p className="text-gray-600 mt-1">Manage customer reviews and testimonials</p>
        </div>
        <Button onClick={handleAdd} className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]"><Plus className="h-4 w-4 mr-2" />Add Testimonial</Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input placeholder="Search by customer name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
              <div className="flex text-yellow-500">
                {Array(testimonial.rating).fill(0).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-3">{testimonial.text}</p>
            <p className="text-xs text-gray-500 mb-3">Trip: {testimonial.trip}</p>
            <div className="flex justify-end space-x-2">
              <button onClick={() => handleEdit(testimonial)} className="text-blue-600 hover:text-blue-900"><Edit className="h-4 w-4" /></button>
              <button onClick={() => handleDelete(testimonial.id)} className="text-red-600 hover:text-red-900"><Trash2 className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
      </div>

      {filteredTestimonials.length === 0 && <div className="text-center py-12 text-gray-500">No testimonials found</div>}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}</DialogTitle></DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><Label>Customer Name *</Label><Input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required /></div>
            <div><Label>Location *</Label><Input value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} placeholder="City, Country" required /></div>
            <div><Label>Rating *</Label><Input type="number" min="1" max="5" value={formData.rating} onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})} required /></div>
            <div><Label>Testimonial Text *</Label><Textarea value={formData.text} onChange={(e) => setFormData({...formData, text: e.target.value})} rows={4} required /></div>
            <div><Label>Trip Name *</Label><Input value={formData.trip} onChange={(e) => setFormData({...formData, trip: e.target.value})} required /></div>
            <div><Label>Date</Label><Input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} /></div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]">{editingTestimonial ? 'Update' : 'Create'}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TestimonialsManager;