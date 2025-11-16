import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1a2f4a] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-[#d4af37] mb-4">Ziyarat</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for sacred pilgrimages to Iran and Iraq. Experience spiritual journeys with comfort and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#d4af37]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  {t('packages')}
                </Link>
              </li>
              <li>
                <Link to="/groups" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  {t('groups')}
                </Link>
              </li>
              <li>
                <Link to="/ziyarat-guide" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  {t('ziyaratGuide')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-[#d4af37]">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  {t('terms')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  {t('privacy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[#d4af37]">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>+964 123 456 789</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>info@ziyarat.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Karbala, Iraq</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2a3f5a] mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Ziyarat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;