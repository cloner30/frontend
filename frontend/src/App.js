import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
import { Toaster } from './components/ui/sonner';

// Admin Imports
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to=\"/admin/login\" replace />;\n};

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path=\"/\" element={
            <div className=\"App min-h-screen flex flex-col\">
              <Navbar />
              <main className=\"flex-1\">
                <EnhancedHome />
              </main>
              <Footer />
              <Toaster />
            </div>
          } />
          <Route path=\"/search\" element={
            <div className=\"App min-h-screen flex flex-col\">
              <Navbar />
              <main className=\"flex-1\">
                <SearchResults />
              </main>
              <Footer />
              <Toaster />
            </div>
          } />
          <Route path=\"/hotels/:id\" element={
            <div className=\"App min-h-screen flex flex-col\">
              <Navbar />
              <main className=\"flex-1\">
                <HotelDetail />
              </main>
              <Footer />
              <Toaster />
            </div>
          } />
          <Route path=\"/groups\" element={
            <div className=\"App min-h-screen flex flex-col\">
              <Navbar />
              <main className=\"flex-1\">
                <Groups />
              </main>
              <Footer />
              <Toaster />
            </div>
          } />
          <Route path=\"/groups/:id\" element={
            <div className=\"App min-h-screen flex flex-col\">
              <Navbar />
              <main className=\"flex-1\">
                <GroupDetailEnhanced />
              </main>
              <Footer />
              <Toaster />
            </div>
          } />
          <Route path=\"/packages\" element={
            <div className=\"App min-h-screen flex flex-col\">
              <Navbar />
              <main className=\"flex-1\">
                <Packages />
              </main>
              <Footer />
              <Toaster />
            </div>
          } />
          <Route path=\"/ziyarat-guide\" element={
            <div className=\"App min-h-screen flex flex-col\">
              <Navbar />
              <main className=\"flex-1\">
                <ZiyaratGuide />
              </main>
              <Footer />
              <Toaster />
            </div>
          } />
          <Route path=\"/ziyarat-guide/:id\" element={
            <div className=\"App min-h-screen flex flex-col\">
              <Navbar />
              <main className=\"flex-1\">
                <CityGuide />
              </main>
              <Footer />
              <Toaster />
            </div>
          } />
          <Route path=\"/plan-trip\" element={
            <div className=\"App min-h-screen flex flex-col\">
              <Navbar />
              <main className=\"flex-1\">
                <PlanTripEnhanced />
              </main>
              <Footer />
              <Toaster />
            </div>
          } />
          <Route path=\"/account\" element={
            <div className=\"App min-h-screen flex flex-col\">
              <Navbar />
              <main className=\"flex-1\">
                <Account />
              </main>
              <Footer />
              <Toaster />
            </div>
          } />
          <Route path=\"/iraq-ziyarat\" element={
            <div className=\"App min-h-screen flex flex-col\">
              <Navbar />
              <main className=\"flex-1\">
                <IraqZiyaratGuide />
              </main>
              <Footer />
              <Toaster />
            </div>
          } />

          {/* Admin Routes */}
          <Route path=\"/admin/login\" element={<AdminLogin />} />
          <Route path=\"/admin\" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route path=\"dashboard\" element={<AdminDashboard />} />
            <Route path=\"ziyarat\" element={<div className=\"text-center p-12\"><h2 className=\"text-2xl font-bold text-[#1a2f4a]\">Ziyarat Guide Manager - Coming in Phase 2</h2></div>} />
            <Route path=\"home-content\" element={<div className=\"text-center p-12\"><h2 className=\"text-2xl font-bold text-[#1a2f4a]\">Home Content Manager - Coming in Phase 2</h2></div>} />
            <Route path=\"seo\" element={<div className=\"text-center p-12\"><h2 className=\"text-2xl font-bold text-[#1a2f4a]\">SEO Manager - Coming in Phase 2</h2></div>} />
            <Route path=\"settings\" element={<div className=\"text-center p-12\"><h2 className=\"text-2xl font-bold text-[#1a2f4a]\">Settings - Coming in Phase 2</h2></div>} />
          </Route>

          <Toaster />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;