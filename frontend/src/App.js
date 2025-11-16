import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnhancedHome from './pages/EnhancedHome';
import SearchResults from './pages/SearchResults';
import Groups from './pages/Groups';
import GroupDetail from './pages/GroupDetail';
import Packages from './pages/Packages';
import ZiyaratGuide from './pages/ZiyaratGuide';
import CityGuide from './pages/CityGuide';
import PlanTrip from './pages/PlanTrip';
import Account from './pages/Account';
import IraqZiyaratGuide from './pages/IraqZiyaratGuide';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="App min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<EnhancedHome />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/groups/:id" element={<GroupDetail />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/ziyarat-guide" element={<ZiyaratGuide />} />
              <Route path="/ziyarat-guide/:id" element={<CityGuide />} />
              <Route path="/plan-trip" element={<PlanTrip />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;