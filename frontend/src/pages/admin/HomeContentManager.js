import React, { useState } from 'react';
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Star,
  Tag,
  Image as ImageIcon,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { useToast } from '../../hooks/use-toast';

const HomeContentManager = () => {
  const [activeTab, setActiveTab] = useState('reviews');
  const { toast } = useToast();

  // Mock data
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Ahmad Hassan', rating: 5, comment: 'Excellent service and spiritual experience!', featured: true },
    { id: 2, name: 'Fatima Ali', rating: 5, comment: 'Perfect organization, highly recommended.', featured: true },
    { id: 3, name: 'Mohammed Karim', rating: 4, comment: 'Great hotels and good guides.', featured: false }
  ]);

  const [offers, setOffers] = useState([
    { id: 1, title: 'Ramadan Special - 20% Off', discount: 20, validFrom: '2025-03-01', validTo: '2025-04-30', active: true },
    { id: 2, title: 'Early Bird Arbaeen', discount: 15, validFrom: '2025-01-01', validTo: '2025-02-28', active: true },
    { id: 3, title: 'Family Package Deal', discount: 25, validFrom: '2025-01-01', validTo: '2025-12-31', active: false }
  ]);

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showOfferForm, setShowOfferForm] = useState(false);
  const [editingReview, setEditingReview] = useState(null);
  const [editingOffer, setEditingOffer] = useState(null);

  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, comment: '', featured: false });
  const [offerForm, setOfferForm] = useState({ title: '', discount: 0, validFrom: '', validTo: '', active: true });

  const tabs = [
    { id: 'reviews', label: 'Reviews', icon: MessageSquare, count: reviews.length },
    { id: 'offers', label: 'Offers', icon: Tag, count: offers.length },
    { id: 'hero', label: 'Hero Section', icon: ImageIcon, count: 1 },
    { id: 'stats', label: 'Statistics', icon: TrendingUp, count: 4 }
  ];

  // Review Management
  const handleSaveReview = () => {
    if (editingReview) {
      setReviews(reviews.map(r => r.id === editingReview.id ? { ...reviewForm, id: editingReview.id } : r));
      toast({ title: 'Review Updated', description: 'Review has been updated successfully' });
    } else {
      setReviews([...reviews, { ...reviewForm, id: Date.now() }]);
      toast({ title: 'Review Added', description: 'New review has been added' });
    }
    setShowReviewForm(false);
    setEditingReview(null);
    setReviewForm({ name: '', rating: 5, comment: '', featured: false });
  };

  const handleDeleteReview = (id) => {
    setReviews(reviews.filter(r => r.id !== id));
    toast({ title: 'Review Deleted', description: 'Review has been removed' });
  };

  // Offer Management
  const handleSaveOffer = () => {
    if (editingOffer) {
      setOffers(offers.map(o => o.id === editingOffer.id ? { ...offerForm, id: editingOffer.id } : o));
      toast({ title: 'Offer Updated', description: 'Offer has been updated successfully' });
    } else {
      setOffers([...offers, { ...offerForm, id: Date.now() }]);
      toast({ title: 'Offer Added', description: 'New offer has been created' });
    }
    setShowOfferForm(false);
    setEditingOffer(null);
    setOfferForm({ title: '', discount: 0, validFrom: '', validTo: '', active: true });
  };

  const handleDeleteOffer = (id) => {
    setOffers(offers.filter(o => o.id !== id));
    toast({ title: 'Offer Deleted', description: 'Offer has been removed' });
  };

  const renderReviewsTab = () => (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#1a2f4a]">Manage Reviews</h2>
        <Button
          onClick={() => {
            setShowReviewForm(true);
            setEditingReview(null);
            setReviewForm({ name: '', rating: 5, comment: '', featured: false });
          }}
          className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Review
        </Button>
      </div>

      {showReviewForm && (
        <Card className="mb-6 border-2 border-[#ffce05]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#1a2f4a]">
                {editingReview ? 'Edit Review' : 'Add New Review'}
              </h3>
              <Button variant="ghost" size="sm" onClick={() => setShowReviewForm(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="reviewName">Customer Name *</Label>
                <Input
                  id="reviewName"
                  value={reviewForm.name}
                  onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                  placeholder="Ahmad Hassan"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="rating">Rating *</Label>
                <select
                  id="rating"
                  value={reviewForm.rating}
                  onChange={(e) => setReviewForm({ ...reviewForm, rating: parseInt(e.target.value) })}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
                >
                  {[5, 4, 3, 2, 1].map(r => (
                    <option key={r} value={r}>{r} Stars</option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="comment">Review Comment *</Label>
                <Textarea
                  id="comment"
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                  placeholder="Write the review..."
                  className="mt-1"
                  rows={4}
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  checked={reviewForm.featured}
                  onChange={(e) => setReviewForm({ ...reviewForm, featured: e.target.checked })}
                  className="mr-2"
                />
                <Label htmlFor="featured" className="cursor-pointer">Feature on Homepage</Label>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <Button
                onClick={handleSaveReview}
                disabled={!reviewForm.name || !reviewForm.comment}
                className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]"
              >
                <Save className="h-4 w-4 mr-2" />
                {editingReview ? 'Update Review' : 'Save Review'}
              </Button>
              <Button variant="outline" onClick={() => setShowReviewForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-[#1a2f4a]">{review.name}</h3>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#ffce05] text-[#ffce05]" />
                      ))}
                    </div>
                    {review.featured && (
                      <span className="px-2 py-1 bg-[#ffce05] text-[#1a2f4a] text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setEditingReview(review);
                      setReviewForm(review);
                      setShowReviewForm(true);
                    }}
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeleteReview(review.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderOffersTab = () => (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#1a2f4a]">Manage Offers</h2>
        <Button
          onClick={() => {
            setShowOfferForm(true);
            setEditingOffer(null);
            setOfferForm({ title: '', discount: 0, validFrom: '', validTo: '', active: true });
          }}
          className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Offer
        </Button>
      </div>

      {showOfferForm && (
        <Card className="mb-6 border-2 border-[#ffce05]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#1a2f4a]">
                {editingOffer ? 'Edit Offer' : 'Create New Offer'}
              </h3>
              <Button variant="ghost" size="sm" onClick={() => setShowOfferForm(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="offerTitle">Offer Title *</Label>
                <Input
                  id="offerTitle"
                  value={offerForm.title}
                  onChange={(e) => setOfferForm({ ...offerForm, title: e.target.value })}
                  placeholder="Ramadan Special - 20% Off"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="discount">Discount (%) *</Label>
                <Input
                  id="discount"
                  type="number"
                  value={offerForm.discount}
                  onChange={(e) => setOfferForm({ ...offerForm, discount: parseInt(e.target.value) })}
                  placeholder="20"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="validFrom">Valid From *</Label>
                <Input
                  id="validFrom"
                  type="date"
                  value={offerForm.validFrom}
                  onChange={(e) => setOfferForm({ ...offerForm, validFrom: e.target.value })}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="validTo">Valid To *</Label>
                <Input
                  id="validTo"
                  type="date"
                  value={offerForm.validTo}
                  onChange={(e) => setOfferForm({ ...offerForm, validTo: e.target.value })}
                  className="mt-1"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="active"
                  checked={offerForm.active}
                  onChange={(e) => setOfferForm({ ...offerForm, active: e.target.checked })}
                  className="mr-2"
                />
                <Label htmlFor="active" className="cursor-pointer">Active Offer</Label>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <Button
                onClick={handleSaveOffer}
                disabled={!offerForm.title || !offerForm.validFrom || !offerForm.validTo}
                className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a]"
              >
                <Save className="h-4 w-4 mr-2" />
                {editingOffer ? 'Update Offer' : 'Save Offer'}
              </Button>
              <Button variant="outline" onClick={() => setShowOfferForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {offers.map((offer) => (
          <Card key={offer.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <Tag className="h-5 w-5 text-[#ffce05]" />
                {offer.active ? (
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    Active
                  </span>
                ) : (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                    Inactive
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-[#1a2f4a] mb-2">{offer.title}</h3>
              <p className="text-3xl font-bold text-[#ffce05] mb-3">{offer.discount}% OFF</p>

              <div className="text-xs text-gray-600 mb-4">
                <p><strong>Valid:</strong> {offer.validFrom} to {offer.validTo}</p>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setEditingOffer(offer);
                    setOfferForm(offer);
                    setShowOfferForm(true);
                  }}
                  className="flex-1"
                >
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDeleteOffer(offer.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#1a2f4a] to-[#2a4f6a] rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Home Content Manager</h1>
        <p className="text-gray-200">Manage reviews, offers, hero section, and homepage statistics</p>
      </div>

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

      <Card>
        <CardContent className="p-6">
          {activeTab === 'reviews' && renderReviewsTab()}
          {activeTab === 'offers' && renderOffersTab()}
          {activeTab === 'hero' && (
            <div className="text-center py-12">
              <ImageIcon className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold text-[#1a2f4a] mb-2">Hero Section Editor</h2>
              <p className="text-gray-600">Update homepage hero image, heading, and call-to-action</p>
            </div>
          )}
          {activeTab === 'stats' && (
            <div className="text-center py-12">
              <TrendingUp className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold text-[#1a2f4a] mb-2">Homepage Statistics</h2>
              <p className="text-gray-600">Edit trust badges and featured statistics</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeContentManager;
