// Comprehensive Iran Ziyarat Guide Data
// Based on pilgrimage resources and historical Islamic records

// ========================================
// IRAN-SPECIFIC PREPARATION
// ========================================

export const iranPreparationTips = {
  visa: {
    title: "Visa Requirements for Iran",
    description: "Important visa information for Iran travel",
    requirements: [
      "You must obtain your Visa from the country of your residence before you proceed to Iran",
      "If you are going to Iraq from Iran, ensure you have a multiple-entry visa for Iran",
      "If you have joined a group, your group organizer will be responsible for obtaining your Visa",
      "Visa on arrival available at some airports for certain nationalities"
    ]
  },
  currency: {
    title: "Currency & Money Exchange",
    description: "Financial guidance for Iran",
    tips: [
      "Currency: Iranian Rial (IRR) and Toman (1 Toman = 10 Rials)",
      "It is difficult to cash travelers cheques - carry US Dollar bills in large denominations",
      "Exchange currency only at official banks, not in stores",
      "Exchange only what you need - you cannot reconvert Rials/Tomans back to US Dollars",
      "International credit cards may not work due to sanctions - carry cash",
      "Exchange rates fluctuate - check current rates before travel"
    ]
  },
  declarations: {
    title: "Airport Declarations",
    description: "Required declarations upon arrival in Iran",
    requirements: [
      "Declare all foreign currency - no restriction on amount but must be declared",
      "Declare all video and camera equipment",
      "Failure to declare may cause problems when departing Iran"
    ]
  },
  exportAllowances: {
    title: "Export Allowances from Iran",
    items: [
      "One hand-woven carpet or two rugs (maximum 12 sq. m) - non-antique",
      "150 grams of wrought gold without gems per passenger",
      "Up to 3 kg of wrought silverware without gems",
      "Recommended souvenirs: Saffron, pistachios, dates, pastries, nuts",
      "Religious items: Aqeeq, Feeroza, Dur al-Najaf gems, Tasbih, prayer items"
    ]
  }
};

export const iranWeatherGuide = {
  title: "Weather & Climate in Iran",
  description: "Temperatures vary considerably by season and location",
  seasons: {
    winter: {
      months: "December - March",
      description: "Very cold - requires thermal undergarments, winter coat, and gloves"
    },
    pleasant: {
      months: "March, April, August, September, October",
      description: "Pleasant weather - ideal for pilgrimage"
    },
    summer: {
      months: "June - July",
      description: "Very hot - carry light clothing and sun protection"
    }
  }
};

export const iranTravelInfo = {
  transportation: {
    title: "Transportation in Iran",
    tips: [
      "Taxis are very cheap and widely available in all cities",
      "Domestic flights connect major cities - Air Iran operates flights to Tehran Mehrabad International Airport",
      "Bus services available between cities - may need to change buses at borders",
      "Metro systems in major cities like Tehran and Mashhad",
      "Confirm all connecting flights in advance (Tehran/Mashhad/Tehran)"
    ]
  },
  accommodation: {
    title: "Hotels & Accommodation",
    tips: [
      "Five-star hotels available in major cities",
      "Affordable 2-3 star hotels at city centers",
      "Pilgrims' houses (Musaferkhanehs) available near shrines",
      "Pilgrims House managed by Kanji family is recommended",
      "Book in advance during peak pilgrimage seasons (Nowruz, religious anniversaries)"
    ]
  },
  communication: {
    title: "Communication",
    tips: [
      "Local SIM cards available at airports",
      "WiFi available in most hotels and restaurants",
      "WhatsApp and some international apps may have restrictions",
      "Learn basic Farsi phrases for easier communication"
    ]
  },
  flights: {
    title: "Flight Information",
    tips: [
      "Air Iran operates flights to Tehran Mehrabad International Airport on Mondays and Thursdays",
      "Flights from Damascus depart late evening, arrive Tehran around 11:00 PM",
      "Confirm connecting flights between Tehran/Mashhad in advance",
      "If traveling from Iran to Iraq, may need to change buses at border"
    ]
  }
};

export const iranShoppingGuide = {
  title: "Shopping Guide for Iran",
  bazaars: {
    tehran: [
      "Various bazaars in Tehran for different items",
      "Traditional items and handicrafts available"
    ],
    mashhad: [
      "Bazaar al-Ridha - for exclusive items near the shrine",
      "Janatee Bazaar - popular shopping area",
      "Shopping stores behind the Raudhah of Imam Ridha (a)"
    ]
  },
  recommendedSouvenirs: {
    title: "Recommended Souvenirs from Iran",
    items: [
      {
        category: "Food Items",
        items: [
          "Saffron (Iran produces world's best saffron)",
          "Pistachios (famous Persian pistachios)",
          "Dates (various varieties)",
          "Pastries and traditional sweets",
          "Nuts (almonds, walnuts)"
        ]
      },
      {
        category: "Religious Items",
        items: [
          "Aqeeq (Agate) - gemstone rings",
          "Feeroza (Turquoise) jewelry",
          "Dur al-Najaf gemstones",
          "Tasbih (prayer beads)",
          "Prayer mats and religious decorations"
        ]
      },
      {
        category: "Handicrafts",
        items: [
          "Hand-woven Persian carpets (max 12 sq. m for export)",
          "Persian rugs",
          "Miniature paintings",
          "Inlaid boxes (Khatam)",
          "Decorative placements"
        ]
      }
    ]
  },
  exportLimits: {
    carpets: "One hand-woven carpet or two rugs (maximum 12 sq. m) - must not be antique",
    gold: "150 grams of wrought gold without gems per passenger",
    silver: "Up to 3 kg of wrought silverware without gems"
  }
};

export const specialExperiences = {
  mashhad: {
    title: "Special Experiences in Mashhad",
    experiences: [
      {
        name: "Lunch as Guest of Imam Ridha (a)",
        description: "An opportunity to have a meal as a guest at the shrine. There is often a long waiting list for this blessed experience.",
        tip: "Register early if you wish to participate"
      },
      {
        name: "Visit During Thursday Nights",
        description: "Thursday nights have a special spiritual atmosphere at the shrine with increased crowds and devotion"
      },
      {
        name: "Attend Religious Gatherings",
        description: "Participate in majalis and religious programs held regularly at the shrine"
      }
    ]
  },
  qom: {
    title: "Special Experiences in Qom",
    experiences: [
      {
        name: "Masjid Jamkaran on Tuesday Nights",
        description: "Visit Masjid Jamkaran on Tuesday nights when Imam Mahdi (aj) is said to visit. Extremely crowded but spiritually powerful.",
        tip: "Arrive early and write your hajat (requests) to drop in the well"
      },
      {
        name: "Prayer at Masjid Jamkaran",
        description: "Praying four Rakats at Masjid Jamkaran is said to be equal to praying inside the Ka'bah"
      }
    ]
  }
};

// ========================================
// IRAN CITIES
// ========================================

export const iranCities = [
  {
    id: 'mashhad',
    name: 'Mashhad',
    nameArabic: 'مشهد',
    nameFarsi: 'مشهد',
    title: 'Land of Imam Ridha (a)',
    country: 'Iran',
    province: 'Razavi Khorasan Province',
    coordinates: { lat: 36.2974, lng: 59.6059 },
    image: 'https://images.unsplash.com/photo-1701154041826-08e674ef288a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxNYXNoaGFkJTIwSXJhbiUyMGNpdHl8ZW58MHx8fHwxNzYzMzIzMTk4fDA&ixlib=rb-4.1.0&q=85',
    description: 'Iran\'s holiest city, home to the magnificent shrine of Imam Ali al-Ridha (a), attracting millions of pilgrims annually.',
    significance: 'Mashhad, meaning "place of martyrdom," is home to the shrine of Imam Ali ibn Musa al-Ridha (a), the 8th Imam of Shia Islam. It is the second-largest city in Iran and one of the most important pilgrimage destinations in the Islamic world.',
    welcomeMessage: 'Welcome to Mashhad, the city of Imam Ridha (a). You are now in the blessed land where the 8th Imam was martyred and buried. May your ziyarat be accepted.',
    population: '3.4 million+',
    bestTimeToVisit: 'Spring (March-May) and Fall (September-November), Birth anniversary of Imam Ridha (11th Dhul Qa\'dah), Martyrdom (last day of Safar)',
    airportDistance: 'Mashhad International Airport (15 km from city center)',
    visaInfo: 'Iranian visa required (visa on arrival available for many nationalities)',
    currency: 'Iranian Rial (IRR)',
    languages: ['Farsi (Persian)', 'Arabic', 'English (limited in tourist areas)'],
    emergencyNumbers: {
      police: '110',
      ambulance: '115',
      fire: '125'
    },
    primaryLandmarks: [
      'The holy shrine of Imām Riḍā (a)',
      'Gawharshād Mosque',
      'Qur\'an Museum',
      'Tomb of Khwaja Rabi (friend of Imam Ridha)',
      'Tomb of Khwaja Abu Salt (friend of Imam Ridha)'
    ]
  },
  {
    id: 'qom',
    name: 'Qom',
    nameArabic: 'قم',
    nameFarsi: 'قم',
    title: 'City of Ma\'suma (a)',
    country: 'Iran',
    province: 'Qom Province',
    coordinates: { lat: 34.6416, lng: 50.8746 },
    image: 'https://images.unsplash.com/photo-1599968196544-69fac0b819d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxRb20lMjBJcmFuJTIwY2l0eXxlbnwwfHx8fDE3NjMzMjMyNzR8MA&ixlib=rb-4.1.0&q=85',
    description: 'Sacred city housing the shrine of Fatima al-Ma\'suma (a), sister of Imam Ridha, and major center of Shia Islamic learning.',
    significance: 'Qom is home to the shrine of Fatima al-Ma\'suma (a), daughter of Imam Musa al-Kadhim (a) and sister of Imam Ali al-Ridha (a). It is also one of the most important centers of Shia scholarship in the world, hosting the famous Hawza \'Ilmiyya.',
    welcomeMessage: 'Welcome to Qom, the blessed city of Ma\'suma (a). This sacred land will be the starting point of Imam Mahdi\'s (aj) movement according to hadith.',
    specialSignificance: 'According to narrations, Imam Mahdi (aj) will begin his movement from Qom. The city is also known for the Masjid Jamkaran, built by the 12th Imam.',
    population: '1.2 million+',
    bestTimeToVisit: 'Year-round, especially on birth anniversary of Fatima Ma\'suma (1st Dhul Qa\'dah)',
    airportDistance: '150 km to Tehran Imam Khomeini International Airport',
    visaInfo: 'Iranian visa required',
    currency: 'Iranian Rial (IRR)',
    languages: ['Farsi (Persian)', 'Arabic', 'English (in religious institutions)'],
    emergencyNumbers: {
      police: '110',
      ambulance: '115',
      fire: '125'
    },
    primaryLandmarks: [
      'Shrine of Fatima Ma\'suma (a)',
      'Masjid Jamkaran',
      'Hawza \'Ilmiyya (Islamic Seminary)',
      'Astane Museum',
      'Borujerdi House'
    ]
  },
  {
    id: 'tehran',
    name: 'Tehran',
    nameArabic: 'طهران',
    nameFarsi: 'تهران',
    title: 'Capital City with Sacred Shrines',
    country: 'Iran',
    province: 'Tehran Province',
    coordinates: { lat: 35.6892, lng: 51.3890 },
    image: 'https://images.unsplash.com/photo-1684555150756-8c2117e75707?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxUZWhyYW4lMjBJcmFuJTIwQXphZGklMjB0b3dlcnxlbnwwfHx8fDE3NjMzMjMxODd8MA&ixlib=rb-4.1.0&q=85',
    description: 'Iran\'s capital city, home to several important shrines including Shah Abdol Azim and Imamzadeh Saleh.',
    significance: 'Tehran houses several significant ziyarat sites including the shrine of Shah Abdol Azim (great-grandson of Imam Hassan), Imamzadeh Saleh (brother of Imam Ridha), and other descendants of the Imams.',
    welcomeMessage: 'Welcome to Tehran, Iran\'s capital city. While modern and bustling, it holds sacred sites connected to the Ahl al-Bayt.',
    population: '9+ million (metropolitan area: 15+ million)',
    bestTimeToVisit: 'Spring (March-May) and Fall (September-November)',
    airportDistance: 'Imam Khomeini International Airport (50 km south), Mehrabad Airport (10 km from city center)',
    visaInfo: 'Iranian visa required (visa on arrival available at airports)',
    currency: 'Iranian Rial (IRR)',
    languages: ['Farsi (Persian)', 'English (widely spoken in urban areas)'],
    emergencyNumbers: {
      police: '110',
      ambulance: '115',
      fire: '125'
    },
    primaryLandmarks: [
      'Shrine of Shah Abdol Azim',
      'Imamzadeh Saleh',
      'Imamzadeh Hamza',
      'Kouh-e Bibi Shahrbanu (Mountain refuge)',
      'Golestan Palace',
      'Azadi Tower'
    ]
  },
  {
    id: 'shiraz',
    name: 'Shiraz',
    nameArabic: 'شيراز',
    nameFarsi: 'شیراز',
    title: 'City of Saints and Poets',
    country: 'Iran',
    province: 'Fars Province',
    coordinates: { lat: 29.5918, lng: 52.5836 },
    image: 'https://images.unsplash.com/photo-1756808911527-14a6763bf5df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxTaGlyYXolMjBJcmFuJTIwY2l0eXxlbnwwfHx8fDE3NjMzMjMxOTF8MA&ixlib=rb-4.1.0&q=85',
    description: 'Historic city known for Shah Cheragh shrine, poetry, gardens, and rich cultural heritage.',
    significance: 'Shiraz is home to the magnificent Shah Cheragh shrine (brother of Imam Ridha) and is also famous for being the city of great Persian poets like Hafez and Saadi.',
    welcomeMessage: 'Welcome to Shiraz, the city of light, poetry, and sacred shrines. Experience the beauty of Persian culture alongside spiritual devotion.',
    specialNote: 'Shah Cheragh means "King of the Lamp" - the shrine earned this name when light was seen emanating from the tomb, leading to its discovery.',
    population: '1.9 million+',
    bestTimeToVisit: 'Spring (March-May) for beautiful gardens, Fall (September-November)',
    airportDistance: 'Shiraz International Airport (10 km from city center)',
    visaInfo: 'Iranian visa required (visa on arrival available)',
    currency: 'Iranian Rial (IRR)',
    languages: ['Farsi (Persian)', 'English (in tourist areas)'],
    emergencyNumbers: {
      police: '110',
      ambulance: '115',
      fire: '125'
    },
    primaryLandmarks: [
      'Shah Cheragh Shrine (Shah Shiragh)',
      'Tomb of Hafez',
      'Tomb of Saadi',
      'Nasir al-Mulk Mosque (Pink Mosque)',
      'Eram Garden',
      'Persepolis (nearby ancient city)'
    ]
  },
  {
    id: 'rey',
    name: 'Rey (Shahr-e Rey)',
    nameArabic: 'الري',
    nameFarsi: 'ری',
    title: 'Ancient City of Shrines',
    country: 'Iran',
    province: 'Tehran Province (south of Tehran)',
    coordinates: { lat: 35.6058, lng: 51.4264 },
    image: 'https://images.unsplash.com/photo-1702247413104-05821cf6e8c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxTaGFoJTIwQWJkb2wlMjBBemltJTIwc2hyaW5lfGVufDB8fHx8MTc2MzMyMzI1N3ww&ixlib=rb-4.1.0&q=85',
    description: 'Ancient city with the shrine of Shah Abdol Azim, one of the most important ziyarat destinations near Tehran.',
    significance: 'Rey is one of the oldest cities in Iran and houses the shrine of Shah Abdol Azim (great-grandson of Imam Hassan), along with several other Imamzadehs and the tomb of the great scholar Sheikh Sudduq.',
    welcomeMessage: 'Welcome to Rey, an ancient city with deep Islamic heritage. The descendants of the Imams rest here.',
    population: 'Part of Greater Tehran',
    bestTimeToVisit: 'Year-round, especially on commemorative days of those buried here',
    airportDistance: '40 km to Imam Khomeini International Airport',
    visaInfo: 'Iranian visa required',
    currency: 'Iranian Rial (IRR)',
    languages: ['Farsi (Persian)', 'Arabic'],
    emergencyNumbers: {
      police: '110',
      ambulance: '115',
      fire: '125'
    },
    primaryLandmarks: [
      'Shrine of Shah Abdol Azim',
      'Tomb of Sayyed Tahir (son of Imam Zainul Abideen)',
      'Tomb of Sheikh Sudduq',
      'Imamzadeh Hamza',
      'Ancient Rey archaeological site'
    ]
  }
];

// ========================================
// ZIYARAT SITES IN IRAN
// ========================================

export const iranZiyaratSites = [
  // MASHHAD SITES
  {
    id: 'imam-ridha-shrine',
    cityId: 'mashhad',
    name: 'Shrine of Imam Ali al-Ridha (a)',
    nameArabic: 'حرم الإمام الرضا',
    nameFarsi: 'حرم امام رضا',
    type: 'Primary Shrine',
    importance: 'Highest',
    image: 'https://images.unsplash.com/photo-1675274854445-6677aabef5f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxJbWFtJTIwUmV6YSUyMHNocmluZSUyME1hc2hoYWR8ZW58MHx8fHwxNzYzMzIzMTYyfDA&ixlib=rb-4.1.0&q=85',
    description: 'The magnificent golden-domed shrine of Imam Ali ibn Musa al-Ridha (a), the 8th Imam of Shia Islam.',
    
    buriedHere: [
      {
        name: 'Imam Ali ibn Musa al-Ridha (a)',
        title: 'Eighth Imam, Dhamin (Guarantor)',
        titleExplanation: 'Earned the title "Dhamin" (Guarantor) after saving a deer being chased by hunters. The deer sought refuge with the Imam, who gave his guarantee of safety. When the hunters arrived, the Imam asked them to leave the deer. They agreed, but one hunter doubted the deer would survive without their protection. The Imam guaranteed the deer\'s safety, and miraculously, it lived under divine protection. This demonstrated his power of guarantee, earning him the title "Imam Dhamin".',
        birthDate: '11th Dhul Qa\'dah, 148 AH (Medina)',
        martyrdomDate: 'Last day of Safar, 203 AH',
        ageAtMartyrdom: '55 years',
        martyrdomCause: 'Poisoned by Ma\'mun al-Abbasi with poisoned grapes',
        imamate: 'Became Imam at age 35 after martyrdom of Imam Musa al-Kadhim (a)'
      }
    ],
    
    historicalBackground: 'Imam Ridha (a) was born in Medina and lived there for 35 years before being invited by the Abbasid Caliph Ma\'mun to Khurasan (Mashhad). Ma\'mun appointed him as heir apparent to gain political legitimacy, but later poisoned him when the Imam\'s popularity grew. The famous story of the Imam saving a deer earned him the title "Dhamin" (Guarantor). The Imam was buried in the garden of Hamid ibn Qahtaba, where the magnificent shrine now stands.',
    
    architecture: {
      goldenDome: 'Majestic golden dome visible from across the city',
      courtyards: 'Seven courtyards (sahns) surrounding the shrine',
      area: 'Over 600,000 square meters',
      capacity: 'Can accommodate over 1 million pilgrims during peak times',
      specialFeatures: [
        'Gawharshād Mosque (built 1418 CE)',
        'Museum of Quran and precious manuscripts',
        'Library with rare Islamic texts',
        'Dar al-Huffaz (House of Quran Memorizers)',
        'Museum containing gifts from world leaders',
        'Old courtyard (Sahn-e Atiq)',
        'New courtyards with modern facilities'
      ]
    },
    
    notablePeopleNearby: [
      'Khwaja Rabi (companion and servant of Imam Ridha)',
      'Khwaja Abu Salt al-Harawi (close companion of Imam Ridha)',
      'Sheikh Hur al-Amili (author of Wasa\'il al-Shi\'a)',
      'Mirza Jawad Maliki Tabrizi (renowned scholar)',
      'Many other scholars and righteous individuals'
    ],
    
    ziyaratTimings: {
      general: 'Open 24 hours',
      womenOnly: 'Special women-only hours allocated daily',
      peakTimes: 'Very crowded during Nowruz (Persian New Year), birth and martyrdom anniversaries'
    },
    
    specialDaysForZiyarah: [
      '11th Dhul Qa\'dah: Birthday of Imam Ridha (a)',
      'Last day of Safar: Martyrdom of Imam Ridha (a)',
      'Thursday nights: Special spiritual atmosphere',
      '15th Sha\'ban: Birthday of Imam Mahdi (aj)',
      'Nowruz (Persian New Year): Millions of pilgrims visit'
    ],
    
    facilities: [
      'Free meals for pilgrims (Nazar) daily',
      'Accommodation facilities',
      'Medical centers',
      'Lost and found',
      'Wheelchair accessibility',
      'Multi-level parking',
      'Prayer halls and libraries',
      'Shopping bazaars nearby'
    ],
    
    ziyaratEtiquette: [
      'Perform ghusl before visiting',
      'Wear modest and clean clothing',
      'Women must wear chador (provided at entrances if needed)',
      'Remove shoes before entering carpeted areas',
      'Maintain silence and respect inside the haram',
      'Avoid taking photos inside the main shrine area',
      'Be mindful of prayer times'
    ],
    
    nearbyAttractions: [
      'Gawharshād Mosque',
      'Quran Museum',
      'Tomb of Ferdowsi (great Persian poet) - 24 km away',
      'Tus ancient city ruins',
      'Nader Shah Museum'
    ]
  },
  
  // QOM SITES
  {
    id: 'fatima-masuma-shrine',
    cityId: 'qom',
    name: 'Shrine of Fatima al-Ma\'suma (a)',
    nameArabic: 'حرم فاطمة المعصومة',
    nameFarsi: 'حرم حضرت معصومه',
    type: 'Primary Shrine',
    importance: 'Highest',
    image: 'https://images.unsplash.com/photo-1680013541263-f254bd540f04?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxGYXRpbWElMjBNYXN1bWElMjBzaHJpbmUlMjBRb218ZW58MHx8fHwxNzYzMzIzMTY4fDA&ixlib=rb-4.1.0&q=85',
    description: 'The golden-domed shrine of Fatima al-Ma\'suma (a), daughter of Imam Musa al-Kadhim (a) and sister of Imam Ridha (a).',
    
    buriedHere: [
      {
        name: 'Fatima al-Ma\'suma (a)',
        title: 'The Infallible Lady, Sister of Imam Ridha (a)',
        birthDate: '1st Dhul Qa\'dah, 173 AH (Medina)',
        deathDate: '10th or 12th Rabi\' al-Thani, 201 AH',
        age: '28 years',
        significance: 'Daughter of Imam Musa al-Kadhim (a), sister of Imam Ali al-Ridha (a)',
        story: 'She traveled from Medina to visit her brother in Khurasan. Upon hearing of his martyrdom in Tus, she became ill with grief in Saveh and requested to be taken to Qom, where she passed away 17 days later.'
      }
    ],
    
    historicalBackground: 'When Fatima Ma\'suma (a) fell ill after hearing of her brother\'s martyrdom, the people of Qom invited her to their city. She accepted and was hosted by Musa ibn Khazraj. After 17 days, she passed away and was buried in Bablan garden in Qom. Imam Ridha (a) had said about her ziyarat: "Whoever performs her ziyarat will enter Paradise."',
    
    architecture: {
      dome: 'Golden dome covered with gold plates',
      courtyard: 'Atiq courtyard with beautiful mirror work and tiles',
      area: 'Extensive complex with multiple courtyards',
      specialFeatures: [
        'Mirror work (Ayineh-kari) on walls and ceiling',
        'Dar al-Huffaz (Quran memorization school)',
        'Library with valuable manuscripts',
        'Museum with historical artifacts',
        'A\'zam Mosque',
        'Balasar courtyard',
        'Tabatabai courtyard'
      ]
    },
    
    buriedNearby: [
      'Several sons and daughters of Imams',
      'Numerous Imamzadehs',
      'Great scholars of Qom',
      'Saints and righteous individuals'
    ],
    
    hadithAboutVisiting: [
      'Imam Ridha (a): "Whoever performs ziyarat of Ma\'suma in Qom is like one who performed my ziyarat"',
      'It is narrated that visiting her shrine leads to Paradise',
      'Her intercession is sought for fulfillment of needs'
    ],
    
    specialDaysForZiyarah: [
      '1st Dhul Qa\'dah: Birthday of Fatima Ma\'suma (a)',
      '10th Rabi\' al-Thani: Anniversary of her passing',
      'Tuesday nights: Special ziyarat atmosphere',
      'Fatimiyya days',
      'Thursday nights'
    ]
  },
  
  {
    id: 'masjid-jamkaran',
    cityId: 'qom',
    name: 'Masjid Jamkaran',
    nameArabic: 'مسجد جمكران',
    nameFarsi: 'مسجد جمکران',
    type: 'Holy Mosque',
    importance: 'Very High',
    image: 'https://images.unsplash.com/photo-1601273325230-3f73635f03af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxKYW1rYXJhbiUyMG1vc3F1ZSUyMFFvbXxlbnwwfHx8fDE3NjMzMjMxODB8MA&ixlib=rb-4.1.0&q=85',
    description: 'Sacred mosque built by command of Imam Mahdi (aj), located on the outskirts of Qom.',
    
    significance: 'According to narrations, Imam Mahdi (aj) appeared to Sheikh Hassan ibn Muthla Jamkarani in 373 AH and commanded him to build this mosque on this blessed land. The Imam visits this mosque every Tuesday night.',
    
    specialFeatures: [
      'Well (Chah) where people drop their prayers and requests written on paper',
      'Large prayer halls with beautiful architecture',
      'Tuesday night gatherings (very crowded)',
      'Free iftar during Ramadan',
      'Beautiful gardens and fountains',
      'New expansion with modern facilities'
    ],
    
    howToPerformZiyarat: [
      'Perform two rak\'ats of Tahiyyat al-Masjid',
      'Recite special ziyarat and duas for Imam Mahdi (aj)',
      'Write your requests and drop them in the well',
      'Pray for the hastening of Imam Mahdi\'s reappearance',
      'Give charity'
    ],
    
    bestTimeToVisit: 'Tuesday nights (very special but extremely crowded), Thursday nights, Friday mornings',
    
    reward: 'Praying here is said to be equivalent to praying inside the Ka\'bah according to some narrations'
  },
  
  // TEHRAN / REY SITES
  {
    id: 'shah-abdol-azim-shrine',
    cityId: 'rey',
    name: 'Shrine of Shah Abdol Azim al-Hasani',
    nameArabic: 'حرم شاه عبد العظيم الحسني',
    nameFarsi: 'حرم شاه عبدالعظیم حسنی',
    type: 'Major Shrine',
    importance: 'Very High',
    image: 'https://images.unsplash.com/photo-1673004688182-989c1f5187da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxTaGFoJTIwQWJkb2wlMjBBemltJTIwc2hyaW5lfGVufDB8fHx8MTc2MzMyMzI1N3ww&ixlib=rb-4.1.0&q=85',
    description: 'Beautiful shrine of Shah Abdol Azim, great-grandson of Imam Hassan al-Mujtaba (a), in the ancient city of Rey.',
    
    buriedHere: [
      {
        name: 'Shah Abdol Azim al-Hasani',
        lineage: 'Son of Abdullah, son of Ali, son of Imam Hassan al-Mujtaba (a)',
        era: 'Contemporary of Imam Hadi (a) and Imam Askari (a)',
        significance: 'Great scholar and narrator of hadith',
        story: 'Fled from Abbasid persecution to Rey, lived in hiding, and died there. His shrine became a major pilgrimage site.'
      },
      {
        name: 'Imamzadeh Hamza',
        lineage: 'Son of Imam Musa al-Kadhim (a), brother of Imam Ridha (a)'
      },
      {
        name: 'Imamzadeh Tahir',
        lineage: 'Son of Imam Zainul Abideen (a)'
      }
    ],
    
    architecture: {
      domes: 'Multiple golden domes',
      courtyards: 'Beautiful courtyards with tile work',
      specialFeatures: [
        'Mirror work and tile decoration',
        'Prayer halls',
        'Museum',
        'Library',
        'Multiple zarih (shrine enclosures)'
      ]
    },
    
    specialNote: 'This shrine complex houses three significant descendants of the Imams in one location, making it a very important ziyarat destination near Tehran.'
  },
  
  {
    id: 'imamzadeh-saleh',
    cityId: 'tehran',
    name: 'Imamzadeh Saleh',
    nameArabic: 'إمامزاده صالح',
    nameFarsi: 'امامزاده صالح',
    type: 'Imamzadeh Shrine',
    importance: 'High',
    image: 'https://images.unsplash.com/photo-1643919782693-0bb8d9f5897e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxQZXJzaWFuJTIwSXNsYW1pYyUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NjMzMjMyNjl8MA&ixlib=rb-4.1.0&q=85',
    description: 'Shrine of Imamzadeh Saleh, son of Imam Musa al-Kadhim (a) and brother of Imam Ridha (a), in northern Tehran.',
    
    buriedHere: [
      {
        name: 'Imamzadeh Saleh',
        lineage: 'Son of Imam Musa al-Kadhim (a), brother of Imam Ali al-Ridha (a)',
        location: 'Tajrish Square, northern Tehran'
      }
    ],
    
    specialFeatures: [
      'Located in bustling Tajrish neighborhood',
      'Beautiful traditional architecture',
      'Active marketplace around the shrine',
      'Accessible by Tehran Metro'
    ],
    
    nearbyAttractions: [
      'Tajrish Bazaar',
      'Niavaran Palace Complex',
      'Darband hiking trail'
    ]
  },
  
  {
    id: 'bibi-shahrbanu-mountain',
    cityId: 'tehran',
    name: 'Kouh-e Bibi Shahrbanu',
    nameArabic: 'كوه بيبي شهربانو',
    nameFarsi: 'کوه بی بی شهربانو',
    type: 'Sacred Mountain Site',
    importance: 'Medium',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    description: 'Mountain in Rey believed to be where Bibi Shahrbanu (a), wife of Imam Hussain (a), took refuge.',
    
    significance: 'According to tradition, Bibi Shahrbanu (a), daughter of Yazdegerd III (last Sassanian king) and wife of Imam Hussain (a), took refuge in caves in this mountain after the events of Karbala and was never seen again. Some narrations say the mountain miraculously opened to protect her.',
    
    pilgrimage: [
      'Hiking trail up the mountain',
      'Shrines and prayer areas along the way',
      'Beautiful views of Tehran and Rey',
      'Especially visited by women seeking blessings'
    ],
    
    bestTime: 'Spring and fall for hiking, avoid hot summer months'
  },
  
  {
    id: 'sheikh-sudduq-tomb',
    cityId: 'rey',
    name: 'Tomb of Sheikh Sudduq',
    nameArabic: 'قبر الشيخ الصدوق',
    nameFarsi: 'قبر شیخ صدوق',
    type: 'Scholar\'s Shrine',
    importance: 'High',
    image: 'https://images.unsplash.com/photo-1584267877837-1a8ff8e4e14e',
    description: 'Resting place of the great Islamic scholar Sheikh Sudduq, one of the most important Shia scholars.',
    
    about: {
      name: 'Sheikh Abu Ja\'far Muhammad ibn Ali ibn al-Husayn ibn Babawayh al-Qummi',
      title: 'Sheikh Sudduq (The Truthful Sheikh)',
      birthDate: 'Born through the du\'a of Imam Mahdi (aj)',
      works: [
        'Man La Yahduruhu al-Faqih (one of the Four Books of Hadith)',
        'Kitab al-Tawhid',
        'Uyun Akhbar al-Ridha',
        'Amali',
        'Over 300 books and treatises'
      ],
      significance: 'One of the most prolific Shia scholars, his works remain fundamental to Shia jurisprudence and theology'
    },
    
    location: 'Within the Shah Abdol Azim complex in Rey'
  },
  
  // SHIRAZ SITES
  {
    id: 'shah-cheragh-shrine',
    cityId: 'shiraz',
    name: 'Shah Cheragh (King of the Lamp)',
    nameArabic: 'شاه چراغ',
    nameFarsi: 'شاه چراغ',
    type: 'Major Shrine',
    importance: 'Very High',
    image: 'https://images.unsplash.com/photo-1750846361508-22ea14a91801?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxTaGFoJTIwQ2hlcmFnaCUyMHNocmluZSUyMFNoaXJheiUyMG1pcnJvcnxlbnwwfHx8fDE3NjMzMjMxNzR8MA&ixlib=rb-4.1.0&q=85',
    description: 'Magnificent mirrored shrine of Ahmad ibn Musa (a), brother of Imam Ridha (a), in Shiraz. Also known as Shah Shiragh.',
    
    buriedHere: [
      {
        name: 'Ahmad ibn Musa al-Kadhim (Shah Cheragh / Shah Shiragh)',
        lineage: 'Son of Imam Musa al-Kadhim (a), brother of Imam Ali al-Ridha (a)',
        story: 'Traveled through Shiraz and passed away there. His tomb was discovered when a light was seen emanating from his grave, earning him the title "Shah Cheragh" (King of the Lamp)',
        significance: 'Brother of the 8th Imam'
      }
    ],
    
    architecture: {
      mirrors: 'Spectacular mirror work (Ayineh-kari) covering walls and ceiling',
      dome: 'Beautiful turquoise dome',
      lighting: 'Dazzling crystal chandeliers',
      description: 'One of the most photographed and architecturally stunning shrines in Iran',
      specialFeatures: [
        'Mirror mosaic work throughout interior',
        'Ornate metalwork on doors',
        'Beautiful courtyards with gardens',
        'Museum with historical artifacts',
        'Quran museum'
      ]
    },
    
    photography: 'Photography allowed in courtyards; restricted inside main shrine area',
    
    specialDays: [
      'Birth and death anniversaries',
      'Thursday nights',
      'Ramadan and Muharram special programs'
    ],
    
    nearbyShrine: 'Shrine of Seyed Alaeddin Hossein (another brother of Imam Ridha) nearby'
  },
  
  // Additional Mashhad Sites
  {
    id: 'goharshad-mosque',
    cityId: 'mashhad',
    name: 'Goharshad Mosque',
    nameArabic: 'مسجد گوهرشاد',
    nameFarsi: 'مسجد گوهرشاد',
    type: 'Historic Mosque',
    importance: 'High',
    image: 'https://images.unsplash.com/photo-1626005989833-34f64e3c3e7f',
    description: 'Beautiful historic mosque within the Imam Ridha shrine complex, built by Goharshad Khatoon.',
    
    historicalBackground: 'Built by Goharshad Khatoon, wife of Indian King Shah Rukh Mirza. This mosque is an architectural masterpiece and an integral part of the Imam Ridha shrine complex.',
    
    specialFeatures: [
      'Beautiful Islamic architecture and tile work',
      'Located within the Imam Ridha shrine complex',
      'Named after its patron Goharshad Khatoon',
      'Important historical mosque'
    ]
  },
  
  {
    id: 'quran-museum-mashhad',
    cityId: 'mashhad',
    name: 'Museum of Quran',
    nameArabic: 'متحف القرآن',
    nameFarsi: 'موزه قرآن',
    type: 'Museum',
    importance: 'High',
    image: 'https://images.unsplash.com/photo-1584267877837-1a8ff8e4e14e',
    description: 'Museum within the Imam Ridha shrine complex containing pages of Quran written by the Imams.',
    
    specialFeatures: [
      'Pages of Quran written by Imams (a)',
      'Rare Quranic manuscripts',
      'Historical Islamic artifacts',
      'Within the Haram of Imam Ridha (a)'
    ],
    
    significance: 'Contains priceless manuscripts including pages written in the handwriting of the Infallible Imams'
  },
  
  {
    id: 'imamzada-sultan-ahmed',
    cityId: 'mashhad',
    name: 'Tomb of Imamzada Sultan Ahmed',
    nameArabic: 'إمامزاده سلطان احمد',
    nameFarsi: 'امامزاده سلطان احمد',
    type: 'Imamzadeh Shrine',
    importance: 'Medium',
    description: 'Shrine of Imamzada Sultan Ahmed in Mashhad.',
    
    buriedHere: [
      {
        name: 'Imamzada Sultan Ahmed R.A.',
        significance: 'Descendant of the Holy Prophet (saw)'
      }
    ]
  },
  
  {
    id: 'khwaja-abu-salt',
    cityId: 'mashhad',
    name: 'Tomb of Khwaja Abu Salt Harvi',
    nameArabic: 'قبر خواجه ابو الصلت الهروي',
    nameFarsi: 'قبر خواجه ابوالصلت هروی',
    type: 'Companion Shrine',
    importance: 'High',
    image: 'https://images.unsplash.com/photo-1584267877837-1a8ff8e4e14e',
    description: 'Resting place of Khwaja Abu Salt Harvi, close friend and companion of Imam Ridha (a).',
    
    buriedHere: [
      {
        name: 'Khwaja Abu Salt Harvi R.A.',
        significance: 'Close friend and companion of Imam Ali al-Ridha (a)',
        story: 'He was a trusted friend of Imam Ridha (a) and received the Imam\'s will. He was present during the Imam\'s final moments and witnessed his martyrdom.',
        role: 'Companion and confidant of Imam Ridha (a)'
      }
    ],
    
    visitation: 'Highly recommended to visit when in Mashhad, as he was very close to Imam Ridha (a)'
  },
  
  {
    id: 'khwaja-rabi',
    cityId: 'mashhad',
    name: 'Tomb of Khwaja Rabi',
    nameArabic: 'قبر خواجه ربيع',
    nameFarsi: 'قبر خواجه ربیع',
    type: 'Companion Shrine',
    importance: 'High',
    description: 'Tomb of Khwaja Rabi, devoted friend and servant of Imam Ridha (a).',
    
    buriedHere: [
      {
        name: 'Khwaja Rabi R.A.',
        significance: 'Friend and servant of Imam Ali al-Ridha (a)',
        story: 'He was a devoted companion of Imam Ridha (a) and narrated many incidents about the Imam\'s life. His tomb is visited by pilgrims seeking blessings.',
        role: 'Narrator of hadith from Imam Ridha (a)'
      }
    ]
  },
  
  {
    id: 'khwaja-murad',
    cityId: 'mashhad',
    name: 'Tomb of Khwaja Murad',
    nameArabic: 'قبر خواجه مراد',
    nameFarsi: 'قبر خواجه مراد',
    type: 'Companion Shrine',
    importance: 'Medium',
    description: 'Tomb of Khwaja Murad, companion of Imam Ridha (a).',
    
    buriedHere: [
      {
        name: 'Khwaja Murad R.A.',
        significance: 'Companion of Imam Ridha (a)'
      }
    ]
  },
  
  {
    id: 'qadamgah-mashhad',
    cityId: 'mashhad',
    name: 'Qadamgah (Place of Footprints)',
    nameArabic: 'قدمگاه',
    nameFarsi: 'قدمگاه',
    type: 'Historic Site',
    importance: 'High',
    description: 'Sacred place where Imam Ridha (a) delivered a speech and prayed, leaving his blessed footprints.',
    
    significance: 'At this location, Imam Ali al-Ridha (a) delivered a speech and performed prayers. His blessed footprints remained imprinted on the stone, making this a sacred site for pilgrims.',
    
    specialFeatures: [
      'Footprints of Imam Ridha (a) preserved on stone',
      'Place where Imam gave a speech',
      'Pilgrims visit to pray and seek blessings',
      'Historical significance'
    ]
  },
  
  {
    id: 'sayyed-ibrahim-shrine',
    cityId: 'mashhad',
    name: 'Raudhah of Sayyed Ibrahim',
    nameArabic: 'روضة السيد إبراهيم',
    nameFarsi: 'روضه سید ابراهیم',
    type: 'Imamzadeh Shrine',
    importance: 'High',
    description: 'Shrine of Sayyed Ibrahim, brother of Imam Ali al-Ridha (a).',
    
    buriedHere: [
      {
        name: 'Sayyed Ibrahim A.S.',
        lineage: 'Son of Imam Musa al-Kadhim (a), brother of Imam Ali al-Ridha (a)',
        significance: 'Brother of the 8th Imam'
      }
    ]
  },
  
  // Historic Tombs near Mashhad
  {
    id: 'ferdowsi-tomb',
    cityId: 'mashhad',
    name: 'Museum and Tomb of Ferdowsi',
    nameArabic: 'قبر فردوسي',
    nameFarsi: 'آرامگاه فردوسی',
    type: 'Cultural Site',
    importance: 'Medium',
    image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6',
    description: 'Museum and tomb of Ferdowsi, the great Persian poet, author of Shahnameh.',
    
    about: 'Ferdowsi was one of the greatest Persian poets, author of the epic Shahnameh (Book of Kings). His tomb and museum are popular attractions near Mashhad.',
    
    location: 'Located outside Mashhad in the town of Tus'
  },
  
  {
    id: 'attar-tomb',
    cityId: 'mashhad',
    name: 'Tomb of Attar',
    nameArabic: 'قبر عطار',
    nameFarsi: 'آرامگاه عطار',
    type: 'Cultural Site',
    importance: 'Medium',
    description: 'Tomb of Attar Nishapuri, renowned Persian poet and Sufi mystic.',
    
    about: 'Farid ud-Din Attar was a famous Persian poet and Sufi mystic, known for works like "The Conference of the Birds"'
  },
  
  {
    id: 'omar-khayyam-tomb',
    cityId: 'mashhad',
    name: 'Tomb of Omar Khayyam',
    nameArabic: 'قبر عمر الخيام',
    nameFarsi: 'آرامگاه عمر خیام',
    type: 'Cultural Site',
    importance: 'Medium',
    description: 'Tomb of Omar Khayyam, astronomical mathematician, poet, and philosopher.',
    
    about: 'Omar Khayyam was a Persian polymath - mathematician, astronomer, philosopher, and poet, famous for his Rubaiyat'
  },
  
  {
    id: 'kamal-al-mulk-tomb',
    cityId: 'mashhad',
    name: 'Tomb of Kamal-Al-Mulk',
    nameArabic: 'قبر كمال الملك',
    nameFarsi: 'آرامگاه کمال‌الملک',
    type: 'Cultural Site',
    importance: 'Low',
    description: 'Tomb of Kamal-Al-Mulk, celebrated Persian painter and artist.',
    
    about: 'Kamal-Al-Mulk was one of Iran\'s most celebrated painters, known for his realistic style and mastery of light'
  },
  
  // Tehran Additional Sites
  {
    id: 'imam-khomeini-shrine',
    cityId: 'tehran',
    name: 'Mazaar of Imam Khomeini',
    nameArabic: 'مزار الإمام الخميني',
    nameFarsi: 'مزار امام خمینی',
    type: 'Modern Shrine',
    importance: 'Medium',
    image: 'https://images.unsplash.com/photo-1564501197849-f7c9c4266d0b',
    description: 'Grand mausoleum of Ayatollah Ruhollah Khomeini, founder of the Islamic Republic of Iran.',
    
    about: 'Imam Khomeini led the Islamic Revolution in Iran. His shrine is a symbol of modern Islamic Iran and attracts many visitors.',
    
    architecture: {
      description: 'Large modern complex with golden dome',
      location: 'On the way from Qom to Tehran'
    }
  },
  
  {
    id: 'behesht-zahra',
    cityId: 'tehran',
    name: 'Behesht-e Zahra Cemetery',
    nameArabic: 'بهشت الزهراء',
    nameFarsi: 'بهشت زهرا',
    type: 'Cemetery',
    importance: 'Medium',
    description: 'Largest cemetery in Iran, final resting place of many martyrs, scholars, and notable figures.',
    
    significance: 'Many martyrs of the Iran-Iraq war are buried here, along with notable personalities. It is a place of remembrance and prayer.',
    
    location: 'South of Tehran, often visited on the way from Qom'
  }
];

// Export all data as default
export default {
  iranCities,
  iranZiyaratSites,
  iranPreparationTips,
  iranWeatherGuide,
  iranTravelInfo,
  iranShoppingGuide,
  specialExperiences
};
