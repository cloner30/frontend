// Comprehensive Iraq Ziyarat Guide Data
// Based on authentic pilgrimage information

export const iraqCities = [
  {
    id: 'karbala',
    name: 'Karbala',
    nameArabic: 'كربلاء',
    country: 'Iraq',
    province: 'Karbala Governorate',
    coordinates: { lat: 32.6160, lng: 44.0245 },
    image: 'https://images.unsplash.com/photo-1711594937687-eed59068e043',
    description: 'The holiest city for Shia Muslims, site of the Battle of Karbala and martyrdom of Imam Husain',
    significance: 'Karbala holds immense spiritual significance as the location where Imam Husain, grandson of Prophet Muhammad, was martyred in 680 CE (61 AH) along with 72 companions. The city attracts millions of pilgrims annually, especially during Arbaeen.',
    population: '700,000+',
    bestTimeToVisit: 'October to April (cooler months), Muharram, Arbaeen',
    airportDistance: '100 km to Baghdad International Airport',
    visaInfo: 'Iraqi visa required (available on arrival for many nationalities)',
    currency: 'Iraqi Dinar (IQD)',
    languages: ['Arabic', 'English (limited)'],
    emergencyNumbers: {
      police: '104',
      ambulance: '122',
      fire: '115'
    }
  },
  {
    id: 'najaf',
    name: 'Najaf',
    nameArabic: 'النجف',
    country: 'Iraq',
    province: 'Najaf Governorate',
    coordinates: { lat: 31.9956, lng: 44.3145 },
    image: 'https://images.unsplash.com/photo-1761474758252-6af7f4d61868',
    description: 'Sacred city housing the shrine of Imam Ali, center of Shia Islamic learning',
    significance: 'Najaf is home to the shrine of Imam Ali ibn Abi Talib, the first Shia Imam and fourth Caliph of Islam. It is also a major center of Shia scholarship and houses the famous Wadi al-Salam cemetery.',
    population: '1.2 million+',
    bestTimeToVisit: 'October to April, Ramadan, Eid al-Ghadir',
    airportDistance: 'Najaf International Airport (5 km)',
    visaInfo: 'Iraqi visa required',
    currency: 'Iraqi Dinar (IQD)',
    languages: ['Arabic', 'English (limited)']
  },
  {
    id: 'kadhimiya',
    name: 'Kadhimiya',
    nameArabic: 'الكاظمية',
    country: 'Iraq',
    province: 'Baghdad',
    coordinates: { lat: 33.3792, lng: 44.3403 },
    image: 'https://images.unsplash.com/photo-1629206755907-d0e179c07dd6',
    description: 'District of Baghdad containing the shrine of the 7th and 9th Shia Imams',
    significance: 'Kadhimiya houses the shrine of Imam Musa al-Kadhim (7th Imam) and Imam Muhammad al-Jawad (9th Imam). It is one of the most important pilgrimage sites in Baghdad.',
    population: 'Part of Baghdad (8 million+)',
    bestTimeToVisit: 'Year-round, especially on Imam birthdays',
    airportDistance: '20 km to Baghdad International Airport',
    visaInfo: 'Iraqi visa required',
    currency: 'Iraqi Dinar (IQD)',
    languages: ['Arabic', 'English (moderate)']
  },
  {
    id: 'samarra',
    name: 'Samarra',
    nameArabic: 'سامراء',
    country: 'Iraq',
    province: 'Saladin Governorate',
    coordinates: { lat: 34.1950, lng: 43.8742 },
    image: 'https://images.unsplash.com/photo-1761475461178-ec5fea65a1a2',
    description: 'Historic city containing the Al-Askari Shrine with its iconic golden dome',
    significance: 'Samarra is home to the Al-Askari Shrine, burial place of the 10th and 11th Shia Imams, and believed location of the occultation of the 12th Imam al-Mahdi.',
    population: '200,000+',
    bestTimeToVisit: 'October to April, birth anniversary of Imam al-Hadi',
    airportDistance: '120 km to Baghdad International Airport',
    visaInfo: 'Iraqi visa required, security clearance needed',
    currency: 'Iraqi Dinar (IQD)',
    languages: ['Arabic']
  }
];

export const ziyaratSites = [
  // KARBALA SITES
  {
    id: 'imam-husain-shrine',
    cityId: 'karbala',
    name: 'Imam Husain Shrine',
    nameArabic: 'حرم الإمام الحسين',
    type: 'Primary Shrine',
    importance: 'Highest',
    image: 'https://images.unsplash.com/photo-1711594937687-eed59068e043',
    description: 'The golden-domed shrine of Imam Husain ibn Ali, grandson of Prophet Muhammad (PBUH), who was martyred in the Battle of Karbala on the 10th of Muharram, 61 AH (680 CE).',
    historicalBackground: `Imam Husain, the third Shia Imam, refused to pledge allegiance to Yazid I and traveled to Kufa upon invitation. He was intercepted at Karbala where he, along with 72 companions and family members, was martyred in what is commemorated as the Day of Ashura. The shrine has been rebuilt numerous times throughout history, with the current structure featuring magnificent golden domes and intricate tilework.`,
    
    architecture: {
      domes: '1 main golden dome (27m high)',
      minarets: '4 golden minarets (35m high)',
      area: '60,000 sq meters',
      capacity: '200,000 worshippers',
      features: [
        'Pure gold covering on dome and minarets',
        'Persian and Indian tilework',
        'Intricate calligraphy',
        'Crystal chandeliers',
        'Zarih (shrine enclosure) made of silver and gold'
      ]
    },
    
    visitingHours: {
      dailyOpen: '24 hours (always open)',
      closedDays: 'Never closed',
      bestTimes: ['After Fajr (dawn)', 'Between Maghrib and Isha', 'Thursday nights', 'Friday mornings'],
      peakTimes: ['Muharram (especially 10th)', 'Arbaeen (20th Safar)', 'Fridays', 'Religious holidays']
    },
    
    prayerTimes: {
      note: 'Prayer times vary by season, following Baghdad time zone',
      fajr: 'Approximately 4:30-5:30 AM',
      sunrise: 'Approximately 6:00-7:00 AM',
      dhuhr: 'Approximately 12:00-12:30 PM',
      asr: 'Approximately 3:00-3:30 PM',
      maghrib: 'At sunset (approximately 5:00-6:30 PM)',
      isha: 'Approximately 6:30-8:00 PM'
    },
    
    etiquette: {
      dressCode: [
        'Men: Long pants, shirts covering shoulders',
        'Women: Full abaya (black cloak), hijab covering all hair',
        'Modest, clean clothing for all',
        'Remove shoes before entering carpeted areas',
        'Socks provided for women in some areas'
      ],
      behavior: [
        'Maintain respectful silence inside the shrine',
        'No photography inside the zarih (some areas allowed)',
        'Do not turn your back to the shrine',
        'Use separate entrances for men and women',
        'Follow the flow of pilgrims during busy times',
        'Recite Ziyarat prayers softly',
        'Do not push or rush'
      ],
      prohibited: [
        'Smoking anywhere in the complex',
        'Eating or drinking inside shrine buildings',
        'Using mobile phones inside zarih',
        'Loud conversations',
        'Inappropriate clothing',
        'Political demonstrations'
      ]
    },
    
    facilities: {
      parking: 'Multiple parking areas available',
      restrooms: 'Clean facilities throughout the complex',
      wudu: 'Ablution areas on all sides',
      accessibility: 'Wheelchair accessible entrances and elevators',
      medical: 'First aid stations inside the complex',
      security: '24/7 security checkpoints',
      storage: 'Bag storage available (no large bags inside)',
      water: 'Free drinking water stations',
      airConditioning: 'Climate controlled interior'
    },
    
    nearbyAttractions: [
      {
        name: 'Al-Abbas Shrine',
        distance: '300 meters',
        walking: '5 minutes'
      },
      {
        name: 'Bab al-Qibla Street',
        distance: 'Adjacent',
        walking: '2 minutes'
      },
      {
        name: 'Karbala Museum',
        distance: '500 meters',
        walking: '7 minutes'
      }
    ],
    
    accommodation: {
      nearbyHotels: [
        {
          name: 'Al-Warith Hotel',
          distance: '200m',
          rating: 4.5,
          priceRange: '$80-120'
        },
        {
          name: 'Grand Husain Hotel',
          distance: '150m',
          rating: 4.8,
          priceRange: '$100-150'
        },
        {
          name: 'Qasr Al-Diyafa',
          distance: '400m',
          rating: 4.3,
          priceRange: '$60-90'
        }
      ],
      guestHouses: [
        'Many free or low-cost guest houses available during Muharram and Arbaeen',
        'Mosques offer accommodation during peak seasons',
        'Advance booking recommended for paid hotels'
      ]
    },
    
    transportation: {
      taxi: 'Readily available, negotiate fare beforehand',
      shuttle: 'Free shuttles during Arbaeen from nearby cities',
      walking: 'Walking distance from most hotels in old city',
      parking: 'Several parking areas around the shrine complex'
    },
    
    ziyaratPrayers: [
      'Ziyarat Imam Husain (multiple versions)',
      'Ziyarat Warith',
      'Ziyarat Ashura',
      'Dua Alqama',
      'Ziyarat Arbaeen'
    ],
    
    specialEvents: [
      {
        event: 'Ashura (10th Muharram)',
        date: 'Varies by Islamic calendar',
        description: 'Largest gathering commemorating the martyrdom of Imam Husain',
        attendance: '20+ million pilgrims'
      },
      {
        event: 'Arbaeen (20th Safar)',
        date: '40 days after Ashura',
        description: 'World\'s largest annual pilgrimage',
        attendance: '25+ million pilgrims'
      },
      {
        event: 'Birth Anniversary',
        date: '3rd Shaban',
        description: 'Celebration of Imam Husain\'s birthday',
        attendance: '2-3 million pilgrims'
      },
      {
        event: 'Mid-Shaban',
        date: '15th Shaban',
        description: 'Birth of Imam Mahdi',
        attendance: '5+ million pilgrims'
      }
    ],
    
    safetyTips: [
      'Keep valuables secure and minimal',
      'Stay with your group during crowded times',
      'Carry ID and hotel contact information',
      'Stay hydrated, especially in summer',
      'Be aware of pickpockets in crowds',
      'Follow security personnel instructions',
      'Have emergency contacts saved'
    ],
    
    localCustoms: [
      'Iraqi hospitality is renowned - locals offer tea and food',
      'Arabic greetings appreciated (As-salamu alaykum)',
      'Tipping not mandatory but appreciated (500-1000 IQD)',
      'Bargaining expected in markets',
      'Friday is the weekly holiday'
    ],
    
    accessibility: {
      wheelchair: 'Full wheelchair access available',
      elevators: 'Multiple elevators to all levels',
      ramps: 'Ramps at all major entrances',
      specialNeeds: 'Dedicated prayer areas for elderly and disabled',
      assistance: 'Staff available to assist pilgrims'
    },
    
    photography: {
      exterior: 'Allowed and encouraged',
      courtyard: 'Allowed',
      interior: 'Limited - check with authorities',
      zarih: 'Generally not allowed',
      tips: 'Respectful photography only, avoid photographing women'
    },
    
    shopping: {
      souvenirs: 'Religious items, prayer beads, artwork available',
      markets: 'Bab al-Qibla market adjacent to shrine',
      prices: 'Negotiable, bargaining expected',
      recommendations: 'Turbah (prayer stone), prayer books, dates'
    },
    
    food: {
      nearby: 'Numerous restaurants serving Iraqi and international cuisine',
      specialties: ['Masgouf (grilled fish)', 'Biryani', 'Kabab', 'Dolma'],
      free: 'Free food (niyaz) distributed during religious occasions',
      note: 'Many halal options, vegetarian food available'
    }
  },
  
  {
    id: 'al-abbas-shrine',
    cityId: 'karbala',
    name: 'Al-Abbas Shrine',
    nameArabic: 'حرم العباس',
    type: 'Major Shrine',
    importance: 'Very High',
    image: 'https://images.unsplash.com/photo-1629206755907-d0e179c07dd6',
    description: 'The magnificent shrine of Abbas ibn Ali, brother and standard-bearer of Imam Husain, known for his bravery and loyalty during the Battle of Karbala.',
    historicalBackground: `Abbas ibn Ali, son of Imam Ali and known as Qamar Bani Hashim (Moon of the Hashimites), was martyred while attempting to bring water to the thirsty children at Karbala. His heroism and devotion are commemorated in the shrine which features stunning golden domes and is connected to Imam Husain's shrine via the historic street.`,
    
    architecture: {
      domes: '2 golden domes',
      minarets: '4 golden minarets',
      area: '43,000 sq meters',
      capacity: '150,000 worshippers',
      features: [
        'Twin golden domes',
        'Elaborate Persian tilework',
        'Crystal chandeliers from Czech Republic',
        'Silver-plated doors',
        'Underground museum'
      ]
    },
    
    visitingHours: {
      dailyOpen: '24 hours',
      closedDays: 'Never closed',
      bestTimes: ['Early morning', 'Late evening', 'Thursday nights']
    },
    
    prayerTimes: {
      note: 'Same as Imam Husain Shrine',
      fajr: 'Approximately 4:30-5:30 AM',
      dhuhr: 'Approximately 12:00-12:30 PM',
      maghrib: 'At sunset'
    },
    
    etiquette: {
      dressCode: [
        'Same requirements as Imam Husain Shrine',
        'Modest Islamic dress mandatory',
        'Remove shoes before entering'
      ],
      behavior: [
        'Maintain silence and respect',
        'Separate areas for men and women',
        'Follow the designated paths',
        'No photography inside zarih'
      ]
    },
    
    specialFeatures: [
      'Connected to Imam Husain Shrine via Bab al-Qibla street',
      'Underground museum displaying artifacts',
      'Library with rare manuscripts',
      'Water dispensers (commemorating Abbas\'s sacrifice for water)'
    ],
    
    nearbyAttractions: [
      {
        name: 'Imam Husain Shrine',
        distance: '300 meters',
        walking: '5 minutes'
      },
      {
        name: 'Al-Mukhayyam Mosque',
        distance: '400 meters',
        walking: '6 minutes'
      }
    ],
    
    ziyaratPrayers: [
      'Ziyarat Abbas ibn Ali',
      'Ziyarat Qamar Bani Hashim',
      'Special supplications for water and needs'
    ]
  },

  // NAJAF SITES
  {
    id: 'imam-ali-shrine',
    cityId: 'najaf',
    name: 'Imam Ali Shrine',
    nameArabic: 'حرم الإمام علي',
    type: 'Primary Shrine',
    importance: 'Highest',
    image: 'https://images.unsplash.com/photo-1761474758252-6af7f4d61868',
    description: 'The golden-domed shrine of Imam Ali ibn Abi Talib, cousin and son-in-law of Prophet Muhammad, first Shia Imam, and fourth Caliph of Islam.',
    historicalBackground: `Imam Ali was assassinated in 661 CE while praying in the Great Mosque of Kufa. His burial place was kept secret until Harun al-Rashid discovered it. The shrine has been expanded numerous times, with the current structure being one of the most beautiful Islamic architectural masterpieces in the world.`,
    
    architecture: {
      domes: '1 main golden dome (with smaller green dome)',
      minarets: '2 golden minarets (37m high)',
      area: '54,000 sq meters',
      capacity: '180,000 worshippers',
      features: [
        'Solid gold-covered dome',
        '7,777 tiles on the dome',
        'Intricate mirror work (Ayeneh Kari)',
        'Persian calligraphy',
        'Faience and tile work',
        'Multiple courtyards',
        'Underground prayer halls'
      ]
    },
    
    visitingHours: {
      dailyOpen: '24 hours',
      closedDays: 'Never closed',
      bestTimes: ['After Fajr', 'Between Maghrib and Isha', 'Thursday evenings', 'Laylat al-Qadr']
    },
    
    prayerTimes: {
      fajr: 'Approximately 4:30-5:30 AM',
      dhuhr: 'Approximately 12:00-12:30 PM',
      asr: 'Approximately 3:00-3:30 PM',
      maghrib: 'At sunset',
      isha: 'Approximately 6:30-8:00 PM'
    },
    
    etiquette: {
      dressCode: [
        'Men: Long pants, long-sleeved shirts',
        'Women: Complete abaya and hijab',
        'Clean and modest attire',
        'Shoes removed at designated areas'
      ],
      behavior: [
        'Utmost respect and silence',
        'Do not turn back to the shrine',
        'Walk backwards when leaving the zarih',
        'Separate entrances for men and women',
        'No photography inside zarih'
      ]
    },
    
    facilities: {
      parking: 'Large parking facilities',
      restrooms: 'Modern, clean facilities',
      wudu: 'Multiple ablution areas',
      accessibility: 'Wheelchair accessible throughout',
      medical: 'Medical centers on site',
      security: 'Advanced security measures',
      library: 'One of the largest Islamic libraries',
      accommodation: 'Guest houses available'
    },
    
    nearbyAttractions: [
      {
        name: 'Wadi al-Salam Cemetery',
        distance: '1 km',
        walking: '15 minutes',
        significance: 'Largest cemetery in the world, millions of Shia buried here'
      },
      {
        name: 'Great Mosque of Kufa',
        distance: '10 km',
        significance: 'Where Imam Ali was martyred'
      },
      {
        name: 'House of Imam Ali',
        distance: '500m',
        significance: 'Historic residence of Imam Ali'
      },
      {
        name: 'Najaf Sea (dried lake)',
        distance: '15 km',
        significance: 'Historic site'
      }
    ],
    
    accommodation: {
      nearbyHotels: [
        {
          name: 'Imam Ali Hotel',
          distance: '200m',
          rating: 4.6,
          priceRange: '$90-140'
        },
        {
          name: 'Najaf Grand Hotel',
          distance: '400m',
          rating: 4.4,
          priceRange: '$70-110'
        },
        {
          name: 'Al-Hashemite Hotel',
          distance: '300m',
          rating: 4.5,
          priceRange: '$80-120'
        }
      ]
    },
    
    specialEvents: [
      {
        event: 'Birth of Imam Ali',
        date: '13th Rajab',
        attendance: '5+ million'
      },
      {
        event: 'Martyrdom Anniversary',
        date: '21st Ramadan',
        attendance: '10+ million'
      },
      {
        event: 'Eid al-Ghadir',
        date: '18th Dhul Hijjah',
        attendance: '8+ million'
      }
    ],
    
    ziyaratPrayers: [
      'Ziyarat Imam Ali',
      'Ziyarat Amin Allah',
      'Ziyarat Jami\'a Kabirah',
      'Dua Nudba',
      'Special supplications for solving problems'
    ],
    
    education: {
      hawza: 'Major center of Shia Islamic education',
      seminary: 'Thousands of students from around the world',
      scholars: 'Home to many Grand Ayatollahs',
      note: 'Visitors can attend some lectures with permission'
    }
  }
];

export const practicalInfo = {
  visa: {
    onArrival: ['Many nationalities eligible', 'Check with Iraqi embassy'],
    requirements: ['Valid passport (6 months)', 'Visa fee ($75-100 USD)', 'Return ticket', 'Hotel booking'],
    processing: '30 minutes to 2 hours at airport',
    extensions: 'Available at immigration offices'
  },
  
  currency: {
    official: 'Iraqi Dinar (IQD)',
    exchange: '1 USD = approximately 1,450 IQD (varies)',
    cards: 'Limited acceptance, carry cash',
    atm: 'Available in major cities',
    change: 'Hotels and exchange offices'
  },
  
  health: {
    vaccinations: ['None required, Hepatitis A/B recommended'],
    water: 'Drink bottled water only',
    medical: 'Hospitals available in all major cities',
    insurance: 'Highly recommended',
    pharmacy: 'Widely available'
  },
  
  safety: {
    general: 'Holy cities are very safe',
    women: 'Can travel safely with proper dress',
    belongings: 'Keep valuables secure',
    scams: 'Be aware of overcharging',
    emergency: 'Police 104, Ambulance 122'
  },
  
  transportation: {
    betweenCities: [
      'Buses available (air-conditioned)',
      'Private taxis can be hired',
      'Organized tours recommended'
    ],
    inCity: ['Walking to shrines', 'Taxis (negotiate fare)', 'Auto-rickshaws', 'Some ride-sharing apps']
  },
  
  communication: {
    simCard: 'Available at airport and shops ($5-10)',
    providers: ['Zain Iraq', 'Asiacell', 'Korek'],
    internet: 'WiFi in hotels and cafes',
    language: 'Arabic primary, some English in hotels'
  },
  
  shopping: {
    items: ['Prayer beads', 'Turbah', 'Books', 'Dates', 'Handicrafts', 'Religious items'],
    markets: 'Traditional souks near shrines',
    bargaining: 'Expected and encouraged',
    hours: 'Most shops close Friday afternoon'
  }
};

export const culturalTips = [
  'Remove shoes before entering carpeted mosque areas',
  'Dress modestly at all times',
  'Accept tea when offered (sign of hospitality)',
  'Use right hand for eating and greeting',
  'Ask permission before taking photos of people',
  'Learn basic Arabic greetings',
  'Respect prayer times',
  'Be patient with crowds during peak seasons'
];

export const emergencyContacts = {
  police: '104',
  ambulance: '122',
  fire: '115',
  touristPolice: '+964 780 000 0000',
  embassy: 'Contact your country\'s embassy in Baghdad'
};
