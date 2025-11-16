import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    home: 'Home',
    hotels: 'Hotels',
    flights: 'Flights',
    groups: 'Group Tours',
    packages: 'Packages',
    ziyaratGuide: 'Ziyarat Guide',
    myAccount: 'My Account',
    searchPlaceholder: 'Search destination...',
    search: 'Search',
    checkIn: 'Check In',
    checkOut: 'Check Out',
    guests: 'Guests',
    adults: 'Adults',
    children: 'Children',
    upcomingGroups: 'Upcoming Group Departures',
    viewAll: 'View All',
    seatsLeft: 'seats left',
    bookNow: 'Book Now',
    featuredPackages: 'Featured Packages',
    days: 'Days',
    ziyaratGuideTitle: 'Ziyarat Guide',
    exploreCity: 'Explore',
    popularPlaces: 'Popular Places',
    testimonials: 'What Pilgrims Say',
    planYourTrip: 'Plan Your Trip',
    planYourTripDesc: 'Create your custom pilgrimage itinerary',
    startPlanning: 'Start Planning',
    price: 'Price',
    perPerson: 'per person',
    night: 'night',
    from: 'From',
    to: 'To',
    departure: 'Departure',
    return: 'Return',
    about: 'About',
    contact: 'Contact',
    terms: 'Terms',
    privacy: 'Privacy'
  },
  fa: {
    home: 'خانه',
    hotels: 'هتل\u200cها',
    flights: 'پروازها',
    groups: 'تورهای گروهی',
    packages: 'پکیج\u200cها',
    ziyaratGuide: 'راهنمای زیارت',
    myAccount: 'حساب من',
    searchPlaceholder: 'جستجوی مقصد...',
    search: 'جستجو',
    checkIn: 'ورود',
    checkOut: 'خروج',
    guests: 'مهمان',
    adults: 'بزرگسال',
    children: 'کودک',
    upcomingGroups: 'تورهای گروهی پیش رو',
    viewAll: 'مشاهده همه',
    seatsLeft: 'صندلی باقی مانده',
    bookNow: 'رزرو کنید',
    featuredPackages: 'پکیج\u200cهای ویژه',
    days: 'روز',
    ziyaratGuideTitle: 'راهنمای زیارت',
    exploreCity: 'کاوش',
    popularPlaces: 'مکان\u200cهای محبوب',
    testimonials: 'نظر زائران',
    planYourTrip: 'برنامه\u200cریزی سفر',
    planYourTripDesc: 'برنامه زیارت خود را بسازید',
    startPlanning: 'شروع برنامه\u200cریزی',
    price: 'قیمت',
    perPerson: 'به ازای هر نفر',
    night: 'شب',
    from: 'از',
    to: 'به',
    departure: 'رفت',
    return: 'برگشت',
    about: 'درباره',
    contact: 'تماس',
    terms: 'شرایط',
    privacy: 'حریم خصوصی'
  },
  ar: {
    home: 'الرئيسية',
    hotels: 'الفنادق',
    flights: 'الرحلات',
    groups: 'الجولات الجماعية',
    packages: 'الباقات',
    ziyaratGuide: 'دليل الزيارة',
    myAccount: 'حسابي',
    searchPlaceholder: 'ابحث عن الوجهة...',
    search: 'بحث',
    checkIn: 'تسجيل الدخول',
    checkOut: 'تسجيل الخروج',
    guests: 'الضيوف',
    adults: 'الكبار',
    children: 'الأطفال',
    upcomingGroups: 'الجولات الجماعية القادمة',
    viewAll: 'عرض الكل',
    seatsLeft: 'مقاعد متبقية',
    bookNow: 'احجز الآن',
    featuredPackages: 'الباقات المميزة',
    days: 'أيام',
    ziyaratGuideTitle: 'دليل الزيارة',
    exploreCity: 'استكشف',
    popularPlaces: 'الأماكن الشهيرة',
    testimonials: 'آراء الزوار',
    planYourTrip: 'خطط رحلتك',
    planYourTripDesc: 'أنشئ برنامج الزيارة الخاص بك',
    startPlanning: 'ابدأ التخطيط',
    price: 'السعر',
    perPerson: 'للشخص',
    night: 'ليلة',
    from: 'من',
    to: 'إلى',
    departure: 'المغادرة',
    return: 'العودة',
    about: 'عن',
    contact: 'اتصل',
    terms: 'الشروط',
    privacy: 'الخصوصية'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [direction, language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setDirection(lang === 'ar' || lang === 'fa' ? 'rtl' : 'ltr');
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, direction }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};