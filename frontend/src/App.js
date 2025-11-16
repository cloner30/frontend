import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import { Toaster } from './components/ui/sonner';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages
import EnhancedHome from './pages/EnhancedHome';
import SearchResults from './pages/SearchResults';
import HotelDetail from './pages/HotelDetail';
import Groups from './pages/Groups';
import GroupDetailEnhanced from './pages/GroupDetailEnhanced';
import Packages from './pages/Packages';
import ZiyaratGuide from './pages/ZiyaratGuide';
import CityGuide from './pages/CityGuide';
import PlanTripEnhanced from './pages/PlanTripEnhanced';
import Account from './pages/Account';
import IraqZiyaratGuide from './pages/IraqZiyaratGuideEnhanced';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import HotelsManager from './pages/admin/HotelsManager';
import GroupToursManager from './pages/admin/GroupToursManager';
import PackagesManager from './pages/admin/PackagesManager';
import TestimonialsManager from './pages/admin/TestimonialsManager';
import CitiesManager from './pages/admin/CitiesManager';
import SeoManager from './pages/admin/SeoManager';
import HomePageBuilder from './pages/admin/HomePageBuilder';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminAuth');
  return token ? children : <Navigate to="/admin/login" replace />;
};

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AdminAuthProvider>
        <Routes>
          {/* Public Routes with Navbar/Footer */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<EnhancedHome />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/hotels/:id" element={<HotelDetail />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/groups/:id" element={<GroupDetailEnhanced />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/ziyarat-guide" element={<ZiyaratGuide />} />
            <Route path="/ziyarat-guide/:id" element={<CityGuide />} />
            <Route path="/plan-trip" element={<PlanTripEnhanced />} />
            <Route path="/account" element={<Account />} />
            <Route path="/iraq-ziyarat" element={<IraqZiyaratGuide />} />
          </Route>

          {/* Admin Login (No Layout) */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Routes with Admin Layout */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="hotels" element={<HotelsManager />} />
            <Route path="group-tours" element={<GroupToursManager />} />
            <Route path="packages" element={<PackagesManager />} />
            <Route path="testimonials" element={<TestimonialsManager />} />
            <Route path="cities" element={<CitiesManager />} />
            <Route path="home-content" element={<HomeContentManager />} />
            <Route path="seo" element={<SeoManager />} />
            <Route
              path="home-content"
              element={
                <div className="text-center p-12">
                  <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">
                    Home Content Manager
                  </h2>
                  <p className="text-gray-600">Coming in Phase 2</p>
                </div>
              }
            />
            <Route
              path="seo"
              element={
                <div className="text-center p-12">
                  <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">SEO Manager</h2>
                  <p className="text-gray-600">Coming in Phase 2</p>
                </div>
              }
            />
            <Route
              path="settings"
              element={
                <div className="text-center p-12">
                  <h2 className="text-2xl font-bold text-[#1a2f4a] mb-4">Settings</h2>
                  <p className="text-gray-600">Coming in Phase 2</p>
                </div>
              }
            />
          </Route>
        </Routes>
        <Toaster />
        </AdminAuthProvider>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
