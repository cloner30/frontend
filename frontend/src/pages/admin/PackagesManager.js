import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { getPackages, createPackage, updatePackage, deletePackage } from '../../services/api';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { useToast } from '../../hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../components/ui/dialog';

const PackagesManager = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPackage, setEditingPackage] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    cities: [],
    price: 0,
    currency: 'USD',
    rating: 4.5,
    image: '',
    description: '',
    inclusions: [],
    itinerary: []
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      setLoading(true);
      const data = await getPackages();
      setPackages(data);
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to fetch packages', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingPackage(null);
    setFormData({ title: '', duration: '', cities: [], price: 0, currency: 'USD', rating: 4.5, image: '', description: '', inclusions: [], itinerary: [] });
    setIsModalOpen(true);
  };

  const handleEdit = (pkg) => {
    setEditingPackage(pkg);
    setFormData(pkg);
    setIsModalOpen(true);
  };

  const handleDelete = async (pkgId) => {
    if (!window.confirm('Are you sure?')) return;
    try {
      await deletePackage(pkgId);
      toast({ title: 'Success', description: 'Package deleted' });
      fetchPackages();
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to delete', variant: 'destructive' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingPackage) {
        await updatePackage(editingPackage.id, formData);
        toast({ title: 'Success', description: 'Package updated' });
      } else {
        await createPackage(formData);
        toast({ title: 'Success', description: 'Package created' });
      }
      setIsModalOpen(false);
      fetchPackages();
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to save', variant: 'destructive' });
    }
  };

  const filteredPackages = packages.filter(pkg => pkg.title.toLowerCase().includes(searchTerm.toLowerCase()));

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ffce05]"></div></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Packages Management</h1>
          <p className="text-gray-600 mt-1">Manage tour packages</p>
        </div>
        <Button onClick={handleAdd} className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]"><Plus className="h-4 w-4 mr-2" />Add Package</Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input placeholder="Search packages..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Package</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cities</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPackages.map((pkg) => (
              <tr key={pkg.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img src={pkg.image} alt={pkg.title} className="h-10 w-10 rounded object-cover" />
                    <div className="ml-4 text-sm font-medium text-gray-900">{pkg.title}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{pkg.duration}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{pkg.cities.join(', ')}</td>
                <td className="px-6 py-4 text-sm text-gray-900">${pkg.price}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{pkg.rating}</td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  <button onClick={() => handleEdit(pkg)} className="text-blue-600 hover:text-blue-900 mr-4"><Edit className="h-4 w-4" /></button>
                  <button onClick={() => handleDelete(pkg.id)} className="text-red-600 hover:text-red-900"><Trash2 className="h-4 w-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredPackages.length === 0 && <div className="text-center py-12 text-gray-500">No packages found</div>}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader><DialogTitle>{editingPackage ? 'Edit Package' : 'Add New Package'}</DialogTitle></DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><Label>Title *</Label><Input value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>Duration *</Label><Input value={formData.duration} onChange={(e) => setFormData({...formData, duration: e.target.value})} placeholder="e.g. 10 Days" required /></div>
              <div><Label>Price (USD) *</Label><Input type="number" value={formData.price} onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})} required /></div>
              <div><Label>Rating *</Label><Input type="number" step="0.1" value={formData.rating} onChange={(e) => setFormData({...formData, rating: parseFloat(e.target.value)})} required /></div>
            </div>
            <div><Label>Image URL *</Label><Input value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} required /></div>
            <div><Label>Description *</Label><Input value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required /></div>
            <div><Label>Cities (comma-separated) *</Label><Input value={formData.cities.join(', ')} onChange={(e) => setFormData({...formData, cities: e.target.value.split(',').map(s => s.trim())})} required /></div>
            <div><Label>Inclusions (comma-separated)</Label><Input value={formData.inclusions.join(', ')} onChange={(e) => setFormData({...formData, inclusions: e.target.value.split(',').map(s => s.trim())})} /></div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]">{editingPackage ? 'Update' : 'Create'}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PackagesManager;