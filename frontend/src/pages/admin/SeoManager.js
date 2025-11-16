import React, { useState, useEffect } from 'react';
import { Plus, Edit, Save } from 'lucide-react';
import { getSeoSettings, createSeoSettings, updateSeoSettings } from '../../services/api';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { useToast } from '../../hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

const SeoManager = () => {
  const [settings, setSettings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPage, setEditingPage] = useState(null);
  const [formData, setFormData] = useState({
    page: '',
    metaTitle: '',
    metaDescription: '',
    keywords: [],
    ogImage: ''
  });
  const { toast } = useToast();

  const pages = ['home', 'hotels', 'groups', 'packages', 'ziyarat-guide'];

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const data = await getSeoSettings();
      setSettings(data);
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to fetch SEO settings', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (setting) => {
    setEditingPage(setting.page);
    setFormData(setting);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const existing = settings.find(s => s.page === formData.page);
      if (existing) {
        await updateSeoSettings(existing.id, formData);
        toast({ title: 'Success', description: 'SEO settings updated' });
      } else {
        await createSeoSettings(formData);
        toast({ title: 'Success', description: 'SEO settings created' });
      }
      setEditingPage(null);
      fetchSettings();
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
        <h1 className="text-3xl font-bold text-gray-900">SEO Settings</h1>
        <p className="text-gray-600 mt-1">Manage meta tags and SEO for each page</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {pages.map(page => {
          const pageSetting = settings.find(s => s.page === page);
          const isEditing = editingPage === page;
          
          return (
            <Card key={page}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span className="capitalize">{page.replace('-', ' ')}</span>
                  {!isEditing && (
                    <Button size="sm" variant="outline" onClick={() => handleEdit(pageSetting || { page, metaTitle: '', metaDescription: '', keywords: [], ogImage: '' })}>
                      <Edit className="h-4 w-4 mr-1" /> Edit
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <form onSubmit={handleSave} className="space-y-4">
                    <div><Label>Meta Title *</Label><Input value={formData.metaTitle} onChange={(e) => setFormData({...formData, metaTitle: e.target.value})} required /></div>
                    <div><Label>Meta Description *</Label><Textarea value={formData.metaDescription} onChange={(e) => setFormData({...formData, metaDescription: e.target.value})} rows={3} required /></div>
                    <div><Label>Keywords (comma-separated)</Label><Input value={formData.keywords.join(', ')} onChange={(e) => setFormData({...formData, keywords: e.target.value.split(',').map(k => k.trim())})} /></div>
                    <div><Label>OG Image URL</Label><Input value={formData.ogImage} onChange={(e) => setFormData({...formData, ogImage: e.target.value})} /></div>
                    <div className="flex space-x-2">
                      <Button type="submit" className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]"><Save className="h-4 w-4 mr-1" /> Save</Button>
                      <Button type="button" variant="outline" onClick={() => setEditingPage(null)}>Cancel</Button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-3 text-sm">
                    <div><strong>Title:</strong> {pageSetting?.metaTitle || 'Not set'}</div>
                    <div><strong>Description:</strong> {pageSetting?.metaDescription || 'Not set'}</div>
                    <div><strong>Keywords:</strong> {pageSetting?.keywords?.join(', ') || 'Not set'}</div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SeoManager;