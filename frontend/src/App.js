import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from './components/ui/sonner';

// Layouts
import PublicLayout from './layouts/PublicLayout';

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
import IranZiyaratGuide from './pages/IranGuideSimple';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
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
            <Route path="/iran-ziyarat" element={<IranZiyaratGuide />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
