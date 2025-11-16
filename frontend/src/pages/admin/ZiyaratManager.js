import React, { useState } from 'react';
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  MapPin,
  Building,
  BookOpen,
  Users,
  Scale
} from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { useToast } from '../../hooks/use-toast';
import iraqZiyaratData from '../../data/iraqZiyaratData';

const ZiyaratManager = () => {
  const [activeTab, setActiveTab] = useState('cities');
  const [cities, setCities] = useState(iraqZiyaratData.iraqCities || []);
  const [editingCity, setEditingCity] = useState(null);
  const [showCityForm, setShowCityForm] = useState(false);
  const [cityForm, setCityForm] = useState({
    name: '',
    arabicName: '',
    description: '',
    location: '',
    bestTimeToVisit: '',
    holySites: []
  });
  const { toast } = useToast();

  const tabs = [
    { id: 'cities', label: 'Cities', icon: MapPin, count: cities.length },
    { id: 'sites', label: 'Holy Sites', icon: Building, count: 24 },
    { id: 'prayers', label: 'Prayers', icon: BookOpen, count: 7 },
    { id: 'scholars', label: 'Scholars', icon: Users, count: 7 },
    { id: 'laws', label: 'Practical Laws', icon: Scale, count: 15 }
  ];

  const handleSaveCity = () => {
    if (editingCity) {
      setCities(cities.map(c => c.name === editingCity.name ? { ...cityForm } : c));
      toast({ title: 'City Updated', description: `${cityForm.name} has been updated successfully` });
    } else {
      setCities([...cities, { ...cityForm, id: Date.now() }]);
      toast({ title: 'City Added', description: `${cityForm.name} has been added successfully` });
    }
    setShowCityForm(false);
    setEditingCity(null);
    setCityForm({ name: '', arabicName: '', description: '', location: '', bestTimeToVisit: '', holySites: [] });
  };

  const handleEditCity = (city) => {
    setEditingCity(city);
    setCityForm(city);
    setShowCityForm(true);
  };

  const handleDeleteCity = (cityName) => {
    setCities(cities.filter(c => c.name !== cityName));
    toast({ title: 'City Deleted', description: `${cityName} has been removed`, variant: 'destructive' });
  };

  const renderCitiesTab = () => (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#1a2f4a]">Manage Cities</h2>
        <Button
          onClick={() => {
            setShowCityForm(true);
            setEditingCity(null);
            setCityForm({ name: '', arabicName: '', description: '', location: '', bestTimeToVisit: '', holySites: [] });
          }}
          className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New City
        </Button>
      </div>

      {showCityForm && (
        <Card className="mb-6 border-2 border-[#ffce05]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#1a2f4a]">
                {editingCity ? 'Edit City' : 'Add New City'}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setShowCityForm(false);
                  setEditingCity(null);
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cityName">City Name *</Label>
                <Input
                  id="cityName"
                  value={cityForm.name}
                  onChange={(e) => setCityForm({ ...cityForm, name: e.target.value })}
                  placeholder="Karbala"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="arabicName">Arabic Name</Label>
                <Input
                  id="arabicName"
                  value={cityForm.arabicName}
                  onChange={(e) => setCityForm({ ...cityForm, arabicName: e.target.value })}
                  placeholder="كربلاء"
                  className="mt-1"
                  dir="rtl"
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={cityForm.description}
                  onChange={(e) => setCityForm({ ...cityForm, description: e.target.value })}
                  placeholder="Brief description of the city..."
                  className="mt-1"
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={cityForm.location}
                  onChange={(e) => setCityForm({ ...cityForm, location: e.target.value })}
                  placeholder="Iraq"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="bestTime">Best Time to Visit</Label>
                <Input
                  id="bestTime"
                  value={cityForm.bestTimeToVisit}
                  onChange={(e) => setCityForm({ ...cityForm, bestTimeToVisit: e.target.value })}
                  placeholder="October to March"
                  className="mt-1"
                />
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <Button
                onClick={handleSaveCity}
                disabled={!cityForm.name || !cityForm.description}
                className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]"
              >
                <Save className="h-4 w-4 mr-2" />
                {editingCity ? 'Update City' : 'Save City'}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setShowCityForm(false);
                  setEditingCity(null);
                }}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cities.map((city, idx) => (
          <Card key={idx} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-[#1a2f4a]">{city.name}</h3>
                  {city.arabicName && (
                    <p className="text-sm text-gray-600 mt-1" dir="rtl">{city.arabicName}</p>
                  )}
                </div>
                <MapPin className="h-5 w-5 text-[#ffce05]" />
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {city.description}
              </p>

              <div className="text-xs text-gray-500 mb-4">
                <p><strong>Location:</strong> {city.location || 'N/A'}</p>
                <p><strong>Holy Sites:</strong> {city.holySites?.length || 0}</p>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEditCity(city)}
                  className="flex-1"
                >
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDeleteCity(city.name)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {cities.length === 0 && (
        <div className="text-center py-12">
          <MapPin className="h-16 w-16 mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">No cities added yet. Click "Add New City" to get started.</p>
        </div>
      )}
    </div>
  );

  const renderPlaceholder = (title, description) => (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]">
        <Plus className="h-4 w-4 mr-2" />
        Add New
      </Button>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a2f4a] to-[#2a4f6a] rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Ziyarat Guide Manager</h1>
        <p className="text-gray-200">Manage cities, holy sites, prayers, scholars, and practical laws</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow p-2">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[150px] px-4 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-[#ffce05] text-[#1a2f4a] shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
                <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full">{tab.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <Card>
        <CardContent className="p-6">
          {activeTab === 'cities' && renderCitiesTab()}
          {activeTab === 'sites' && renderPlaceholder('Holy Sites Manager', 'Add and manage holy sites, shrines, and monuments')}
          {activeTab === 'prayers' && renderPlaceholder('Prayers & Ziyarat Texts', 'Manage Arabic prayers, transliterations, and translations')}
          {activeTab === 'scholars' && renderPlaceholder('Scholars & Martyrs', 'Add biographies and information about scholars')}
          {activeTab === 'laws' && renderPlaceholder('Practical Laws (Ahkam)', 'Manage religious guidelines for pilgrims')}
        </CardContent>
      </Card>
    </div>
  );
};

export default ZiyaratManager;
