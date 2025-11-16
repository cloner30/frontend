import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, changeLanguage } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/search?type=hotels', label: t('hotels') },
    { to: '/search?type=flights', label: t('flights') },
    { to: '/groups', label: t('groups') },
    { to: '/packages', label: t('packages') },
    { to: '/ziyarat-guide', label: t('ziyaratGuide') },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#1a2f4a] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[#ffce05]">Ziyarat</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-[#ffce05] ${
                  isActive(link.to) ? 'text-[#ffce05]' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:text-[#ffce05] hover:bg-[#2a3f5a]">
                  <Globe className="h-4 w-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem onClick={() => changeLanguage('en')} className="cursor-pointer">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('fa')} className="cursor-pointer">
                  فارسی
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ar')} className="cursor-pointer">
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Account */}
            <Link to="/account">
              <Button variant="ghost" size="sm" className="text-white hover:text-[#ffce05] hover:bg-[#2a3f5a]">
                <User className="h-4 w-4 mr-2" />
                {t('myAccount')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#2a3f5a] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a2f4a] border-t border-[#2a3f5a]">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-2 px-3 rounded-lg transition-colors ${
                  isActive(link.to)
                    ? 'bg-[#2a3f5a] text-[#ffce05]'
                    : 'text-white hover:bg-[#2a3f5a]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-[#2a3f5a] space-y-2">
              <button
                onClick={() => {
                  changeLanguage('en');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 px-3 rounded-lg text-white hover:bg-[#2a3f5a]"
              >
                English
              </button>
              <button
                onClick={() => {
                  changeLanguage('fa');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 px-3 rounded-lg text-white hover:bg-[#2a3f5a]"
              >
                فارسی
              </button>
              <button
                onClick={() => {
                  changeLanguage('ar');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 px-3 rounded-lg text-white hover:bg-[#2a3f5a]"
              >
                العربية
              </button>
              <Link
                to="/account"
                className="block py-2 px-3 rounded-lg text-white hover:bg-[#2a3f5a]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('myAccount')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;