import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { GripVertical, Eye, EyeOff, Edit, Save, Plus, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { getHomeContent, createHomeContent, updateHomeContent } from '../../services/api';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Switch } from '../../components/ui/switch';
import { useToast } from '../../hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../components/ui/dialog';
import { Card, CardContent } from '../../components/ui/card';

const HomePageBuilder = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  // Default sections structure
  const defaultSections = [
    { id: 'hero', name: 'Hero Section', icon: '🎯', visible: true, data: { title: 'Your Spiritual Journey Begins Here', subtitle: 'Book authentic pilgrimage experiences', backgroundImage: '', ctaText: 'Explore Destinations' }},
    { id: 'stats', name: 'Statistics', icon: '📊', visible: true, data: { pilgrims: 15000, tours: 500, satisfaction: 98, countries: 45 }},
    { id: 'destinations', name: 'Popular Destinations', icon: '🕌', visible: true, data: { title: 'Popular Destinations', showCount: 6 }},
    { id: 'packages', name: 'Featured Packages', icon: '📦', visible: true, data: { title: 'Featured Packages', showCount: 2 }},
    { id: 'groups', name: 'Upcoming Group Tours', icon: '👥', visible: true, data: { title: 'Upcoming Group Tours', showCount: 3 }},
    { id: 'testimonials', name: 'Customer Testimonials', icon: '⭐', visible: true, data: { title: 'What Pilgrims Say', autoRotate: true }},
    { id: 'trust', name: 'Trust Badges', icon: '🛡️', visible: true, data: { showBadges: true }},
    { id: 'process', name: 'Booking Process', icon: '🔄', visible: true, data: { title: 'How It Works', steps: 4 }},
    { id: 'offers', name: 'Special Offers', icon: '🎁', visible: true, data: { title: 'Limited Time Offers', showBanner: true }},
    { id: 'faq', name: 'FAQ Section', icon: '❓', visible: true, data: { title: 'Frequently Asked Questions', showCount: 5 }},
    { id: 'newsletter', name: 'Newsletter Signup', icon: '📧', visible: true, data: { title: 'Stay Updated', placeholder: 'Enter your email' }}
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
        // Initialize with default sections
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
        description: 'Home page layout saved successfully'
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
        return (
          <div className="space-y-4">
            <div>
              <Label>Main Title</Label>
              <Input
                value={editingSection.data.title}
                onChange={(e) => setEditingSection({
                  ...editingSection,
                  data: { ...editingSection.data, title: e.target.value }
                })}
              />
            </div>
            <div>
              <Label>Subtitle</Label>
              <Input
                value={editingSection.data.subtitle}
                onChange={(e) => setEditingSection({
                  ...editingSection,
                  data: { ...editingSection.data, subtitle: e.target.value }
                })}
              />
            </div>
            <div>
              <Label>Background Image URL</Label>
              <Input
                value={editingSection.data.backgroundImage}
                onChange={(e) => setEditingSection({
                  ...editingSection,
                  data: { ...editingSection.data, backgroundImage: e.target.value }
                })}
                placeholder="https://..."
              />
            </div>
            <div>
              <Label>CTA Button Text</Label>
              <Input
                value={editingSection.data.ctaText}
                onChange={(e) => setEditingSection({
                  ...editingSection,
                  data: { ...editingSection.data, ctaText: e.target.value }
                })}
              />
            </div>
          </div>
        );

      case 'stats':
        return (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Pilgrims Served</Label>
              <Input
                type="number"
                value={editingSection.data.pilgrims}
                onChange={(e) => setEditingSection({
                  ...editingSection,
                  data: { ...editingSection.data, pilgrims: parseInt(e.target.value) }
                })}
              />
            </div>
            <div>
              <Label>Tours Completed</Label>
              <Input
                type="number"
                value={editingSection.data.tours}
                onChange={(e) => setEditingSection({
                  ...editingSection,
                  data: { ...editingSection.data, tours: parseInt(e.target.value) }
                })}
              />
            </div>
            <div>
              <Label>Satisfaction Rate (%)</Label>
              <Input
                type="number"
                value={editingSection.data.satisfaction}
                onChange={(e) => setEditingSection({
                  ...editingSection,
                  data: { ...editingSection.data, satisfaction: parseInt(e.target.value) }
                })}
              />
            </div>
            <div>
              <Label>Countries Served</Label>
              <Input
                type="number"
                value={editingSection.data.countries}
                onChange={(e) => setEditingSection({
                  ...editingSection,
                  data: { ...editingSection.data, countries: parseInt(e.target.value) }
                })}
              />
            </div>
          </div>
        );

      case 'destinations':
      case 'packages':
      case 'groups':
      case 'testimonials':
      case 'faq':
        return (
          <div className="space-y-4">
            <div>
              <Label>Section Title</Label>
              <Input
                value={editingSection.data.title}
                onChange={(e) => setEditingSection({
                  ...editingSection,
                  data: { ...editingSection.data, title: e.target.value }
                })}
              />
            </div>
            {editingSection.data.showCount !== undefined && (
              <div>
                <Label>Number of Items to Show</Label>
                <Input
                  type="number"
                  min="1"
                  max="12"
                  value={editingSection.data.showCount}
                  onChange={(e) => setEditingSection({
                    ...editingSection,
                    data: { ...editingSection.data, showCount: parseInt(e.target.value) }
                  })}
                />
              </div>
            )}
          </div>
        );

      case 'offers':
        return (
          <div className="space-y-4">
            <div>
              <Label>Section Title</Label>
              <Input
                value={editingSection.data.title}
                onChange={(e) => setEditingSection({
                  ...editingSection,
                  data: { ...editingSection.data, title: e.target.value }
                })}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                checked={editingSection.data.showBanner}
                onCheckedChange={(checked) => setEditingSection({
                  ...editingSection,
                  data: { ...editingSection.data, showBanner: checked }
                })}
              />
              <Label>Show promotional banner</Label>
            </div>
          </div>
        );

      case 'newsletter':
        return (
          <div className="space-y-4">
            <div>
              <Label>Section Title</Label>
              <Input
                value={editingSection.data.title}
                onChange={(e) => setEditingSection({
                  ...editingSection,
                  data: { ...editingSection.data, title: e.target.value }
                })}
              />
            </div>
            <div>
              <Label>Email Placeholder</Label>
              <Input
                value={editingSection.data.placeholder}
                onChange={(e) => setEditingSection({
                  ...editingSection,
                  data: { ...editingSection.data, placeholder: e.target.value }
                })}
              />
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-4">
            <div>
              <Label>Section Title</Label>
              <Input
                value={editingSection.data.title || ''}
                onChange={(e) => setEditingSection({
                  ...editingSection,
                  data: { ...editingSection.data, title: e.target.value }
                })}
              />
            </div>
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
          <p className="text-gray-600 mt-1">Drag and drop to reorder sections, toggle visibility, and edit content</p>
        </div>
        <Button 
          onClick={handleSaveLayout} 
          className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Layout
        </Button>
      </div>

      {/* Info Alert */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <strong>How to use:</strong> Drag sections to reorder, toggle eye icon to show/hide, click Edit to modify content. 
              The search widget is fixed at the top and cannot be removed.
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
                <div className="text-sm text-gray-600">Fixed at top - Hotels, Flights, Group Tours search</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">FIXED</span>
              <Eye className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Draggable Sections */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="sections">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`space-y-3 ${snapshot.isDraggingOver ? 'bg-gray-50 rounded-lg p-2' : ''}`}
            >
              {sections.map((section, index) => (
                <Draggable key={section.id} draggableId={section.id} index={index}>
                  {(provided, snapshot) => (
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`${snapshot.isDragging ? 'shadow-lg ring-2 ring-[#ffce05]' : ''} ${
                        !section.visible ? 'opacity-50 bg-gray-50' : ''
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 flex-1">
                            <div {...provided.dragHandleProps} className="cursor-move">
                              <GripVertical className="h-5 w-5 text-gray-400" />
                            </div>
                            <span className="text-2xl">{section.icon}</span>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900">{section.name}</div>
                              <div className="text-sm text-gray-600">
                                {section.data.title || 'Content section'}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEdit(section)}
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => toggleVisibility(section.id)}
                            >
                              {section.visible ? (
                                <Eye className="h-4 w-4" />
                              ) : (
                                <EyeOff className="h-4 w-4" />
                              )}
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
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <span>{editingSection?.icon}</span>
              <span>Edit {editingSection?.name}</span>
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            {renderEditForm()}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleSaveSection}
              className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]"
            >
              <Save className="h-4 w-4 mr-1" />
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Preview Notice */}
      <Card className="bg-purple-50 border-purple-200">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <ImageIcon className="h-5 w-5 text-purple-600 mt-0.5" />
            <div className="text-sm text-purple-800">
              <strong>Live Preview:</strong> Changes will be reflected on the home page after saving. 
              Hidden sections will not appear to visitors. Visit the home page to see your customizations.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePageBuilder;
