// Comprehensive Iraq Ziyarat Guide Data
// Based on "An Illustrated Ziyārah Guide to Iraq" (3rd Edition)
// Published by Imam Hussain Holy Shrine and Al-Kisa Foundation

// ========================================
// GENERAL PREPARATION & ETIQUETTE
// ========================================

export const preparationTips = {
  mental: {
    title: "Mental Preparation",
    description: "This is a spiritual journey requiring proper mindset. Expect challenges as stepping stones to spiritual perfection. Be open-minded, flexible, forgiving, and positive. Appreciate cultural differences and focus on similarities - love for the Ahl al-Bayt.",
    tips: [
      "Shift your perspective and have a positive outlook",
      "View challenges as beautiful opportunities for growth",
      "Be open-minded about different customs and cultures",
      "Stay flexible, forgiving, and positive",
      "Focus on similarities with others, especially love for Ahl al-Bayt"
    ]
  },
  spiritual: {
    title: "Spiritual Preparation",
    description: "Strengthen your spiritual health before the journey",
    practices: [
      "Listen to lectures and majālis about the Ahl al-Bayt",
      "Read about the history and culture of the places you will visit",
      "Learn about the history of the Imāms you will be visiting",
      "Perform acts of worship (aʿmāl) and gift them to the Imāms",
      "Listen to or recite duʿās and Qurʾān regularly",
      "Equip yourself with tawakkul (reliance on Allah) and ikhlāṣ (sincerity)"
    ]
  },
  physical: {
    title: "Physical Preparation",
    description: "Prepare your body for the journey",
    tips: [
      "Expect a lot of walking and physical exertion",
      "Take care of your health before departure",
      "Prepare for different weather conditions",
      "Build stamina through regular exercise if possible"
    ]
  },
  family: {
    title: "Bonding with Your Family",
    description: "Make this a joyful and memorable experience",
    suggestions: [
      "Hold your children's hands as you walk to the ḥaram",
      "Sit with your children and recite duʿās together",
      "Have good conversations in the ḥaram - this is worship too!",
      "Keep a light atmosphere and joke with your family",
      "Teach your children about the great personalities you are visiting"
    ]
  }
};

export const ziyarahEtiquette = {
  title: "Etiquette (Ādāb) of Ziyārah",
  rules: [
    {
      category: "Preparation",
      items: [
        "Perform ghusl (ritual bath) before visiting",
        "Enter the ḥaram in a state of ṭahārah (ritual purity)",
        "Wear clean clothes, preferably white",
        "Apply perfume (within the parameters of fiqh)"
      ]
    },
    {
      category: "Approaching the Shrine",
      items: [
        "Avoid engaging in vain discussion about worldly matters",
        "Walk towards the ḥaram with slow, small steps, with humility",
        "Recite dhikr while walking, especially 'Allahu Akbar' and 'Alḥamdulillāh'",
        "Ask for permission to enter (idhn ad-dukhūl) with external and internal humbleness"
      ]
    },
    {
      category: "Inside the Shrine",
      items: [
        "Enter the ḥaram with your right foot",
        "Recite takbīr (Allahu Akbar) 100 times before reciting the ziyārah",
        "Face the ḍarīh (shrine enclosure) with your back towards the Qiblah while reciting ziyārah",
        "Offer a two-rakaʿāt ṣalāh with the intention of ziyārah of the Maʿṣūm",
        "Make duʿā and ask for your ḥājāt (lawful wishes) after completing the Ṣalāh",
        "Recite Qurʾān and gift that thawāb (reward) to the Maʿṣūm",
        "Maintain hudhūr al-qalb (presence of heart)",
        "Seek istighfār (forgiveness) for your sins"
      ]
    },
    {
      category: "During Your Stay",
      items: [
        "Return to the shrine frequently after resting and eating",
        "Make each ziyārah more spiritually uplifting than the previous one",
        "Give ṣadaqah (charity)"
      ]
    },
    {
      category: "Farewell",
      items: [
        "Recite Duʿā al-Widā (farewell duʿā) as your last ziyārah",
        "When exiting, try not to have your back towards the ḍarīh",
        "Leave the ḥaram quickly while maintaining the excitement of ziyārah",
        "Avoid staying for long periods and excessive socializing"
      ]
    }
  ],
  specialNote: "Since the ḥaram is also a masjid, it is recommended to offer a two-rakaʿat prayer of Taḥiyyat al-Masjid (Greeting the Mosque) upon entering."
};

export const packingList = {
  essentials: {
    title: "Essential Documents & Items",
    items: [
      "Passport & color copies",
      "Flight itinerary & hotel details",
      "Ziyārah group contact details",
      "Mobile phone charger and power bank",
      "Cash (Iraqi Dinar) & international credit card",
      "Small bag to take to the ḥaram",
      "Earphones for lectures/recitations",
      "Emergency contact information",
      "Notebook and pen for reflections",
      "Travel power adaptor",
      "Prescribed medications",
      "Basic medicines (pain relievers, anti-diarrheal, cough drops, bandages)"
    ]
  },
  clothing: {
    title: "Clothing",
    items: [
      "Comfortable shirts (modest)",
      "Comfortable loose pants",
      "2-4 Abayas (for women) - REQUIRED",
      "Chador (for women) - REQUIRED for ḥaram entry",
      "Hijābs & under caps (for women)",
      "Comfortable walking shoes",
      "Flip flops or sandals (for restroom use)",
      "Socks - 1 pair per day (REQUIRED for women in ḥaram)",
      "Sweater or jacket (for cooler weather)",
      "Gloves, hat, scarf (if traveling in winter)"
    ],
    womenNote: "For women: A chador and socks are REQUIRED for entry into the ḥaram. Refrain from excessive makeup as you may be prohibited from passing through security checkpoints."
  },
  prayerItems: {
    title: "Prayer & Spiritual Items",
    items: [
      "Personal Qurʾān (small travel size recommended)",
      "Ziyārah guide book or app",
      "Duʿā books (Mafatih al-Jinan recommended)",
      "Travel prayer rug (portable/foldable)",
      "Turbah (prayer stone) - can also obtain Karbala turbah on-site"
    ]
  }
};

// ========================================
// CITIES DATA
// ========================================

export const iraqCities = [
  {
    id: 'najaf',
    name: 'Najaf al-Ashraf',
    nameArabic: 'النجف الأشرف',
    title: 'The Dignified City',
    country: 'Iraq',
    province: 'Najaf Governorate',
    coordinates: { lat: 31.9956, lng: 44.3145 },
    image: 'https://images.unsplash.com/photo-1756626524138-b3dbbe1a95ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxOYWphZiUyMElyYXElMjBjaXR5fGVufDB8fHx8MTc2MzMyMzU3NXww&ixlib=rb-4.1.0&q=85',
    description: 'Sacred city housing the shrine of Imam Ali (a), center of Shia Islamic learning, and home to Wadi as-Salam cemetery.',
    significance: 'Najaf is home to the shrine of Imam Ali ibn Abi Talib (a), the first Shia Imam and fourth Caliph of Islam. It is also a major center of Shia scholarship (Hawza al-Ilmiyyah) and houses the famous Wadi as-Salam cemetery, the largest cemetery in the world.',
    welcomeMessage: 'Welcome to Najaf al-Ashraf, the city of Amir al-Muʾminīn (a). As you walk these streets, remember that many of our Imāms walked here. According to aḥadīth, Imam ʿAlī (a), Prophet Ādam (a), and Prophet Nūḥ (a) are like your spiritual fathers - you have come to your fathers\' house.',
    population: '1.2 million+',
    bestTimeToVisit: 'October to April (cooler months), Ramadan, Eid al-Ghadīr (18th Dhul Hijjah)',
    airportDistance: 'Najaf International Airport (5 km from city center)',
    visaInfo: 'Iraqi visa required (available on arrival for many nationalities)',
    currency: 'Iraqi Dinar (IQD)',
    languages: ['Arabic', 'English (limited in tourist areas)'],
    emergencyNumbers: {
      police: '104',
      ambulance: '122',
      fire: '115'
    },
    primaryLandmarks: [
      'The holy shrine of Imām ʿAlī (a)',
      'The graveyard of Wādī as-Salām',
      'The Hawzah ʿIlmiyyah (Islamic seminary) and ʿulamāʾ (scholars)'
    ]
  },
  {
    id: 'karbala',
    name: 'Karbala',
    nameArabic: 'كربلاء',
    country: 'Iraq',
    province: 'Karbala Governorate',
    coordinates: { lat: 32.6160, lng: 44.0245 },
    image: 'https://images.pexels.com/photos/18766028/pexels-photo-18766028.jpeg',
    description: 'The holiest city for Shia Muslims, site of the Battle of Karbala and martyrdom of Imam Husayn (a) and his companions.',
    significance: 'Karbala holds immense spiritual significance as the location where Imam Husayn (a), grandson of Prophet Muhammad (s), was martyred on the 10th of Muharram, 61 AH (680 CE) along with 72 companions. The city attracts millions of pilgrims annually, especially during Ashura and Arbaeen.',
    specialSignificance: 'The area between the two shrines (Bayn ul-Ḥaramayn) is compared to the distance between Ṣafā and Marwah in Makkah. The Kaʿbah and Zamzam are paralleled by Karbala and the Euphrates River.',
    population: '700,000+',
    bestTimeToVisit: 'October to April (cooler months), Muharram (especially Day of Ashura), Arbaeen (40 days after Ashura), 15th Shaʿbān',
    airportDistance: '100 km to Baghdad International Airport',
    visaInfo: 'Iraqi visa required (available on arrival for many nationalities)',
    currency: 'Iraqi Dinar (IQD)',
    languages: ['Arabic', 'English (limited in tourist areas)'],
    emergencyNumbers: {
      police: '104',
      ambulance: '122',
      fire: '115'
    }
  },
  {
    id: 'kadhimiya',
    name: 'Kadhimiya (Kāẓimayn)',
    nameArabic: 'الكاظمية',
    country: 'Iraq',
    province: 'Baghdad',
    coordinates: { lat: 33.3792, lng: 44.3403 },
    image: 'https://images.unsplash.com/photo-1608925086961-dbcd276a0e71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxCYWdoZGFkJTIwSXJhcXxlbnwwfHx8fDE3NjMzMjM1ODV8MA&ixlib=rb-4.1.0&q=85',
    description: 'Historic district of Baghdad containing the shrine of the 7th and 9th Shia Imams.',
    significance: 'Kadhimiya houses the shrine of Imam Musa al-Kadhim (a), the 7th Imam, and Imam Muhammad al-Jawad (a), the 9th Imam. It is one of the most important pilgrimage sites in Baghdad and has enriched the city with spiritual significance.',
    population: 'Part of Baghdad metropolitan area (8+ million)',
    bestTimeToVisit: 'Year-round, especially on birth and martyrdom anniversaries of the Imams',
    airportDistance: '20 km to Baghdad International Airport',
    visaInfo: 'Iraqi visa required',
    currency: 'Iraqi Dinar (IQD)',
    languages: ['Arabic', 'English (moderate in Baghdad)']
  },
  {
    id: 'samarra',
    name: 'Samarra (Sāmarrā)',
    nameArabic: 'سامراء',
    country: 'Iraq',
    province: 'Saladin Governorate',
    coordinates: { lat: 34.1950, lng: 43.8742 },
    image: 'https://images.pexels.com/photos/34745054/pexels-photo-34745054.jpeg',
    description: 'Historic city containing the Al-Askari Shrine (ʿAskarīyayn) with its iconic golden dome.',
    significance: 'Samarra is home to the Al-Askari Shrine, burial place of Imam Ali al-Hadi (a), the 10th Imam, and Imam Hasan al-Askari (a), the 11th Imam. It is also the believed location of the occultation of Imam al-Mahdi (aj), the 12th Imam, from the Holy Sardāb (cellar).',
    specialNote: 'The shrine was bombed in 2006 and 2007 but has been beautifully reconstructed.',
    population: '200,000+',
    bestTimeToVisit: 'October to April, birth anniversaries of Imam al-Hadi and Imam al-Askari',
    airportDistance: '120 km to Baghdad International Airport',
    visaInfo: 'Iraqi visa required, additional security clearance may be needed',
    currency: 'Iraqi Dinar (IQD)',
    languages: ['Arabic']
  }
];

// ========================================
// ZIYARAT SITES
// ========================================

export const ziyaratSites = [
  // NAJAF SITES
  {
    id: 'imam-ali-shrine',
    cityId: 'najaf',
    name: 'Shrine of Imam Ali (a)',
    nameArabic: 'حرم الإمام علي',
    type: 'Primary Shrine',
    importance: 'Highest',
    image: 'https://images.pexels.com/photos/19113235/pexels-photo-19113235.jpeg',
    description: 'The magnificent golden-domed shrine of Imam Ali ibn Abi Talib (a), the first Imam and Commander of the Faithful.',
    
    buriedHere: [
      {
        name: 'Imam Ali ibn Abi Talib (a)',
        title: 'First Imam, Fourth Caliph',
        birthDate: '13th Rajab, 23 years before Hijrah',
        martyrdomDate: '21st Ramaḍān, 40 AH',
        ageAtMartyrdom: '63 years',
        martyrdomPlace: 'Struck by Ibn Muljim in Masjid al-Kufah while praying Fajr on 19th Ramadan, passed away on 21st Ramadan'
      },
      {
        name: 'Prophet Adam (a)',
        description: 'The first Prophet and father of humanity. His bones rest here after the Great Flood.'
      },
      {
        name: 'Prophet Nuh (a)',
        description: 'The Prophet of the Great Flood (Ulul ʿAẓm Prophet). His body rests in this blessed place.'
      },
      {
        name: 'Location of Imam Husayn\'s Head',
        description: 'The blessed head of Imam Husayn (a) was buried here temporarily before being returned to Karbala.'
      }
    ],
    
    scholarsBuried: [
      'ʿAllāmah Ḥillī',
      'Shaykh Aʿẓam Murtaḍā Ansārī',
      'Ākhūnd Khūrāsānī',
      'Sayyid Abū al-Qāsim Khoei',
      'Mīrzā Ḥusayn Nūrī (author of Mustadrak al-Wasāʾil)',
      'Shaykh ʿAbbās Qummī (author of Mafatih al-Jinan)',
      'Shaykh Ṭūsī (established Hawza in Najaf in 436 AH)',
      'Muḥammad Ḥusayn Gharawī Isfahanī',
      'Sayyid Muṣṭafā Khomeini',
      'Many other renowned scholars of Islam'
    ],
    
    architecture: {
      goldenDome: 'Built with gold bricks by Nādir Shāh Afshār in 1156 AH',
      minarets: 'Multiple golden minarets',
      courtyards: 'Expanded courtyards built by various rulers',
      specialFeatures: [
        'Mīzāb ar-Raḥmah (Golden Water Chute)',
        'Hall of Abū Ṭālib',
        'Courtyard of Sayyidah Fāṭimah (a)',
        'Muḍīf (Guesthouse of the Imām)',
        'Masjid ar-Rās',
        'Masjid al-Khaḍrā'
      ]
    },
    
    gates: [
      { name: 'At-Ṭūsī Gate', location: 'North Gate' },
      { name: 'Al-Faraj Gate', location: 'West Gate' },
      { name: 'Muslim ibn ʿAqīl Gate / Imām ar-Riḍā Gate', location: 'East Gate (as-Sāʿah Gate)' },
      { name: 'Al-Qiblah Gate', location: 'South Gate' }
    ],
    
    historicalTimeline: [
      { year: '40 AH', event: 'Imam Ali (a) martyred and secretly buried by Imam Hasan and Imam Husayn' },
      { year: '135 AH', event: 'Imam as-Sadiq (a) revealed the location of Imam Ali\'s grave' },
      { year: '165 AH', event: 'First ḍarīh (shrine enclosure) constructed of white stone' },
      { year: '236 AH', event: 'Mutawakkil al-ʿAbbāsi destroyed the gravesite' },
      { year: '283 AH', event: 'Abūl-Hayjā built a grand dome and carpeted the ḥaram' },
      { year: '363 AH', event: 'ʿAḍud ad-Dawlah expanded the ḥaram' },
      { year: '436 AH', event: 'Shaykh Ṭūsī established the Ḥawza al-ʿIlmiyyah of Najaf' },
      { year: '755 AH', event: 'Fire destroyed the ḥaram and two Qurʾāns handwritten by Imam Ali' },
      { year: '1033 AH', event: 'Shāh ʿAbbas aṣ-Ṣafawī ordered reconstruction' },
      { year: '1156 AH', event: 'Nādir Shāh Afshār replaced dome bricks with gold' },
      { year: '1424 AH', event: 'Major expansion plan after fall of Saddam' }
    ],
    
    specialDaysForZiyarah: [
      '1st night of Rabīʿ al-Awwal: Laylat ul-Mabīt (night Imam Ali slept in Prophet\'s bed)',
      '13th Rajab: Birthday of Imam Ali (a)',
      '27th Rajab: Victory of Khaybar; Day of Mabʿath (announcement of Prophethood)',
      '17th Ramaḍān: Victory during the Battle of Badr',
      '21st Ramaḍān: Martyrdom of Imam Ali (a)',
      '18th Dhul Hijjah: Eid al-Ghadīr',
      '24th Dhul Hijjah: Eid al-Mubāhalah; day Imam Ali gave his ring as zakāh in rukūʿ',
      '25th Dhul Hijjah: Wedding anniversary; day people pledged allegiance for khilāfah'
    ],
    
    ziyaratPrayers: {
      mainZiyarah: 'Ziyārah of Amīr al-Muʾminīn',
      prophetPrayers: 'Ziyārah of Prophets Ādam and Nūḥ (a)',
      ziyaratAminAllah: 'Ziyārat Amīn Allah',
      farewellZiyarah: 'Farewell Ziyārah of Amīr al-Muʾminīn',
      specialSalah: 'Offer 4 rakaʿāt in 2 sets of 2. In each rakʿah, recite Sūrah al-Fātiḥa once and Sūrah al-Ikhlāṣ 50 times.'
    },
    
    meritsOfVisiting: 'Imām aṣ-Ṣādiq (a) said: "When one performs the ziyārah of my grandfather [Imām ʿAlī] with maʿrifah (deep understanding), Allah will record for him/her the reward of an accepted Ḥajj and ʿUmrah for each step he/she takes."',
    
    visitingHours: 'Open 24 hours',
    dressCode: 'Modest Islamic dress required. Women must wear chador and socks.'
  },

  {
    id: 'wadi-as-salam',
    cityId: 'najaf',
    name: 'Wādī as-Salām Cemetery',
    nameArabic: 'وادي السلام',
    type: 'Cemetery',
    importance: 'High',
    image: 'https://images.unsplash.com/photo-1756626524138-9a1506623813?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxjZW1ldGVyeSUyME5hamFmfGVufDB8fHx8MTc2MzMyNTYwMXww&ixlib=rb-4.1.0&q=85',
    description: 'The largest cemetery in the world and one of the most blessed burial grounds in Islam.',
    significance: 'Believers from around the world are brought here for burial. It is narrated that the souls of believers from all lands visit this cemetery.',
    
    size: 'World\'s largest cemetery covering over 1,485.5 acres (6 km²)',
    dailyBurials: 'Hundreds of bodies are brought here daily from across the world',
    spiritualSignificance: 'Shia tradition holds that the souls of all believers, regardless of where they die, visit this cemetery',
    
    notableSites: [
      {
        name: 'Shrine of Prophet Hūd (a)',
        description: 'Prophet sent to the people of ʿĀd, mentioned in the Qurʾān'
      },
      {
        name: 'Shrine of Prophet Ṣāliḥ (a)',
        description: 'Prophet sent to the people of Thamūd, mentioned in the Qurʾān'
      },
      {
        name: 'Maqām of Imam Zayn al-ʿĀbidīn (a)',
        description: 'Station commemorating the 4th Imam'
      },
      {
        name: 'Maqām Ṣāḥib az-Zamān (aj)',
        description: 'Station of Imam al-Mahdi (aj)'
      },
      {
        name: 'Maqām of Amīr al-Muʾminīn (a)',
        description: 'Special station of Imam Ali (a)'
      }
    ],
    
    practicalInfo: 'The cemetery is vast and it\'s recommended to visit with a guide. Many companions and scholars are buried here. It is considered blessed to be buried in this sacred ground.'
  },

  {
    id: 'kumayl-shrine',
    cityId: 'najaf',
    name: 'Shrine of Kumayl ibn Ziyād Nakhaʿī',
    nameArabic: 'مرقد كميل بن زياد',
    type: 'Companion Shrine',
    importance: 'Medium',
    description: 'Shrine of the faithful companion of Imam Ali (a), famous for the Duʿā Kumayl.',
    significance: 'Kumayl ibn Ziyād was a devoted companion who learned the famous Duʿā Kumayl from Imam Ali (a). This supplication is recited every Thursday night by Shia Muslims worldwide.',
    specialZiyarah: 'Ziyārah of Kumayl ibn Ziyād',
    bestTimeToVisit: 'Thursday nights when Duʿā Kumayl is recited'
  },

  {
    id: 'mirza-shirazi-tomb',
    cityId: 'najaf',
    name: 'Tomb of Mīrzā Shīrāzī',
    nameArabic: 'مرقد الميرزا الشيرازي',
    type: 'Scholar Tomb',
    importance: 'Medium',
    description: 'Tomb of the great scholar who issued the famous fatwa against tobacco.',
    significance: 'Mīrzā Muḥammad Ḥasan Shīrāzī was a renowned Shia Marja who issued a historic fatwa in 1891 declaring the use of tobacco forbidden (haram) during the Tobacco Protest against the British monopoly in Iran. This fatwa played a crucial role in Iranian history and demonstrated the power of religious leadership.',
    historicalImpact: 'His tobacco fatwa led to the cancellation of the British tobacco concession and showed the influence of religious scholars in protecting Muslim interests.',
    contribution: 'One of the greatest scholars of the 19th century, teacher to many prominent maraji'
  },

  {
    id: 'masjid-hannana',
    cityId: 'najaf',
    name: 'Masjid Ḥannānah',
    nameArabic: 'مسجد حنانة',
    type: 'Historic Mosque',
    importance: 'Medium',
    location: 'On the route from Najaf to Kufa',
    description: 'Mosque containing the temporary burial place of Imam Husayn\'s (a) blessed head.',
    significance: 'After the Battle of Karbala, the blessed head of Imam Husayn (a) was brought through this location and temporarily placed here.',
    miracle: 'It is narrated that the blessed head recited Qurʾān at this location - a profound miracle demonstrating the spiritual power and connection to Allah even after martyrdom.',
    specialZiyarah: 'Ziyārah of the Holy Head of Imam Ḥusayn (a)',
    historicalContext: 'The caravan carrying the captives and the heads of the martyrs from Karbala to Damascus stopped at this location. The name "Ḥannānah" is derived from the tenderness and emotion associated with this sacred event.'
  },

  // KUFA SITES (near Najaf)
  {
    id: 'masjid-al-kufa',
    cityId: 'najaf',
    name: 'Masjid al-Kūfah',
    nameArabic: 'مسجد الكوفة',
    type: 'Historic Mosque',
    importance: 'Highest',
    image: 'https://images.unsplash.com/photo-1710807960776-e6d39e19b702?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxLdWZhJTIwbW9zcXVlfGVufDB8fHx8MTc2MzMyNTU5MXww&ixlib=rb-4.1.0&q=85',
    description: 'One of the oldest and most sacred mosques in Islam, located in the nearby city of Kufa.',
    significance: 'This mosque witnessed countless historical events. It was here that Imam Ali (a) led prayers and was struck by the poisoned sword of Ibn Muljim. The mosque contains numerous blessed locations (maqāms).',
    
    historicalSignificance: [
      'One of the earliest mosques in Islam',
      'Built during the time of Khalifa Umar',
      'Imam Ali (a) made it his base during his caliphate',
      'Site where Imam Ali was struck by Ibn Muljim\'s poisoned sword on 19th Ramadan',
      'Prophet Nuh\'s ark rested here after the Great Flood',
      'Site associated with many prophets'
    ],
    
    virtuesFromAhadith: [
      'Praying in Masjid al-Kūfah is equal to the reward of a thousand prayers in other mosques',
      'The land of Masjid al-Kūfah is blessed and sacred',
      'It is one of the four mosques where prayers are especially answered'
    ],
    
    prayerOfHajat: {
      method: 'Special prayer for fulfillment of needs',
      time: 'Best performed on specific nights',
      reward: 'Highly recommended for those seeking Allah\'s help'
    },
    
    maqamsInside: [
      { 
        name: 'Maqām of Prophet Ibrāhīm (a)', 
        location: 'Inside the mosque',
        significance: 'Place associated with Prophet Abraham\'s prayers' 
      },
      { 
        name: 'Maqām al-Khiḍr', 
        significance: 'Station of the immortal guide al-Khiḍr (a)' 
      },
      { 
        name: 'Dakkat al-Qaḍā (Seat of Judgment)', 
        significance: 'Where Imam Ali (a) sat to judge between people with divine wisdom' 
      },
      { 
        name: 'Bayt at-Ṭasht (House of the Washtub)', 
        significance: 'Historical location within the mosque' 
      },
      { 
        name: 'Safīnat an-Nūḥ (The Ark of Nūḥ)', 
        significance: 'Place where Prophet Nūḥ\'s Ark settled after the Great Flood' 
      },
      { 
        name: 'Dakkat al-Miʿrāj (Seat of Miʿrāj)', 
        significance: 'Connected to the Prophet Muhammad\'s (s) night journey' 
      },
      { 
        name: 'Maqām of Prophet Ādam (a)', 
        significance: 'Station of the first Prophet and father of humanity' 
      },
      { 
        name: 'Maqām Jibrāʾīl', 
        significance: 'Station of Angel Gabriel (Jibrāʾīl)' 
      },
      { 
        name: 'Maqām Imām Zayn al-ʿĀbidīn (a)', 
        significance: 'Station of the 4th Imam' 
      },
      { 
        name: 'Bāb Al-Faraj (Gate of Relief)', 
        significance: 'Also Maqām of Prophet Nūḥ (a)' 
      },
      { 
        name: 'Miḥrāb of Amīr al-Mʾuminīn', 
        significance: 'Prayer niche where Imam Ali (a) was struck by Ibn Muljim on 19th Ramadan while praying Fajr. He passed away on 21st Ramadan.',
        note: 'Most sacred spot in the mosque' 
      },
      { 
        name: 'Maqām Imām aṣ-Ṣādiq (a)', 
        significance: 'Station of the 6th Imam' 
      }
    ],
    
    gates: ['Multiple entrance gates around the mosque'],
    capacity: 'Large mosque with expansive courtyards',
    currentStatus: 'Active mosque with regular prayers and ziyarah',
    
    etiquette: 'Enter through the main gate. Recite the specific duʿā for entering. Pray 2 rakʿāt in different maqāms.',
    visitingHours: 'Open for all prayer times and throughout the day'
  },

  {
    id: 'masjid-al-sahlah',
    cityId: 'najaf',
    name: 'Masjid al-Sahlah',
    nameArabic: 'مسجد السهلة',
    alternativeTitle: 'Bayt Imām al-Mahdī (aj) - The House of Imam Mahdi',
    type: 'Historic Mosque',
    importance: 'High',
    image: 'https://images.unsplash.com/photo-1564769662533-4f00a87b4056',
    description: 'One of the four mosques where prayers are especially recommended and duas are answered.',
    significance: 'This blessed mosque is the "house" of Imam al-Mahdi (aj). One of the four mosques where prayers and supplications have special acceptance.',
    
    virtues: [
      'Duas are especially answered here',
      'Special connection to Imam al-Mahdi (aj)',
      'Many prophets and righteous people are associated with this place',
      'Recommended to visit on Tuesday and Thursday nights'
    ],
    
    recommendedActs: [
      'Pray 2 rakʿāt in each maqām',
      'Recite Duʿā for the reappearance of Imam al-Mahdi (aj)',
      'Spend time in remembrance and supplication',
      'Make specific prayers for needs'
    ],
    
    maqamsInside: [
      { 
        name: 'Maqām Imām aṣ-Ṣādiq (a)', 
        acts: 'Pray 2 rakʿāt and make duʿā',
        significance: 'Station of the 6th Imam' 
      },
      { 
        name: 'Maqām Prophet Ibrāhīm (a)', 
        significance: 'Station of Prophet Abraham' 
      },
      { 
        name: 'Maqām & House of Prophet Idrīs (a)', 
        significance: 'Prophet Enoch\'s place of worship' 
      },
      { 
        name: 'Maqām Prophet Khiḍr (a)', 
        significance: 'The eternal guide and righteous servant' 
      },
      { 
        name: 'Maqām aṣ-Ṣāliḥīn & Anbīyyāʾ', 
        significance: 'Station of the Righteous Ones and Prophets' 
      },
      { 
        name: 'Maqām Imam Zayn al-ʿĀbidīn (a)', 
        significance: 'Station of the 4th Imam' 
      },
      { 
        name: 'Maqām Imam al-Mahdī (aj)', 
        significance: 'MOST IMPORTANT - The house and station of the 12th Imam',
        specialPrayers: [
          'Duʿā for his reappearance',
          'Duʿā ʿAhd',
          'Ziyārah of Imam al-Mahdi'
        ],
        note: 'This is considered the \'house\' of Imam Mahdi and has special spiritual importance',
        special: true 
      }
    ],
    
    bestTimesToVisit: [
      'Tuesday nights (highly recommended)',
      'Thursday nights',
      'Friday mornings',
      '15th Shaʿbān (birthday of Imam Mahdi)'
    ],
    
    visitingHours: 'Open throughout the day and night'
  },

  {
    id: 'muslim-ibn-aqil-shrine',
    cityId: 'najaf',
    name: 'Shrine of Muslim ibn ʿAqīl',
    nameArabic: 'مرقد مسلم بن عقيل',
    type: 'Companion Shrine',
    importance: 'High',
    description: 'Shrine of the brave messenger of Imam Husayn (a) and his cousin.',
    significance: 'Muslim ibn ʿAqīl was sent by Imam Husayn as an emissary to Kufa. He was betrayed and martyred here, becoming one of the first martyrs of Karbala.',
    alsoInclude: [
      'Shrine of Hānī ibn ʿUrwah (who sheltered Muslim)',
      'Shrine of Mukhtār ibn Abī ʿUbaydah al-Thaqafī (who avenged Karbala martyrs)'
    ]
  },

  {
    id: 'maytham-at-tammar-shrine',
    cityId: 'najaf',
    name: 'Shrine of Maytham al-Tammār',
    nameArabic: 'مرقد ميثم التمار',
    type: 'Companion Shrine',
    importance: 'Medium',
    description: 'Shrine of the devoted companion of Imam Ali (a), the date-seller.',
    significance: 'Maytham was a faithful companion who was martyred for his love of Imam Ali (a). Imam Ali had prophesied the manner of his martyrdom.',
    specialZiyarah: 'Ziyārah of Maytham at-Tammār'
  },

  {
    id: 'house-of-imam-ali',
    cityId: 'najaf',
    name: 'The Home of Imām ʿAlī (a)',
    nameArabic: 'بيت الإمام علي',
    type: 'Historic House',
    importance: 'Medium',
    description: 'The historical residence of Imam Ali (a) in Kufa.',
    significance: 'This is where Imam Ali (a) lived during his time in Kufa as the Caliph.'
  },

  {
    id: 'dar-al-imarah',
    cityId: 'najaf',
    name: 'Dār al-Imārah',
    nameArabic: 'دار الإمارة',
    type: 'Historic Site',
    importance: 'Low',
    description: 'The governorate building from the time of Imam Ali (a).',
    significance: 'Administrative center during Imam Ali\'s khilāfah.'
  },

  // KARBALA SITES
  {
    id: 'imam-husayn-shrine',
    cityId: 'karbala',
    name: 'Shrine of Imam Husayn (a)',
    nameArabic: 'حرم الإمام الحسين',
    type: 'Primary Shrine',
    importance: 'Highest',
    image: 'https://images.unsplash.com/photo-1587467729161-5a72070e603e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHw0fHxJbWFtJTIwSHVzc2FpbiUyMHNocmluZSUyMEthcmJhbGF8ZW58MHx8fHwxNzYzMzIzNTY4fDA&ixlib=rb-4.1.0&q=85',
    description: 'The golden-domed shrine of Imam Husayn ibn Ali (a), grandson of Prophet Muhammad (s), who was martyred in the Battle of Karbala on 10th Muharram 61 AH.',
    
    historicalBackground: 'Imam Husayn (a), the third Shia Imam, refused to pledge allegiance to the tyrant Yazid I and traveled toward Kufa upon invitation. He was intercepted at Karbala where he, along with 72 companions and family members including children, was brutally martyred in what is commemorated as the Day of Ashura. The shrine has been rebuilt numerous times, with the current structure featuring magnificent golden domes and intricate tilework.',
    
    imamDetails: {
      name: 'Imam Husayn ibn Ali (a)',
      title: 'Sayyid ash-Shuhadāʾ (Master of Martyrs), Third Imam',
      father: 'Imam Ali ibn Abi Talib (a)',
      mother: 'Sayyidah Fatimah az-Zahra (a)',
      birthDate: '3rd Shaʿbān, 4 AH',
      birthPlace: 'Madinah',
      martyrdomDate: '10th Muharram, 61 AH (Day of Ashura)',
      ageAtMartyrdom: '57 years',
      burialPlace: 'Karbala, Iraq'
    },
    
    architecture: {
      goldenDome: 'Main golden dome (27m high)',
      minarets: '4 golden minarets (35m high)',
      area: '60,000+ square meters',
      capacity: '200,000+ worshippers',
      features: [
        'Pure gold covering on dome and minarets',
        'Persian and Indian tilework',
        'Crystal chandelier inside',
        'Ornate ḍarīh (shrine enclosure)',
        'Multiple courtyards',
        'Underground prayer halls'
      ]
    },
    
    gates: [
      { name: 'Bāb as-Sidrah', description: 'Gate of the Lotus Tree - Main entrance' },
      { name: 'Bāb al-Qiblah', description: 'Gate facing Qiblah (direction of Makkah)' },
      { name: 'Bāb Ṣāḥib az-Zamān', description: 'Gate of Imam Mahdi (aj)' },
      { name: 'Various entry gates', description: 'Separate gates for men and women' }
    ],
    
    specialFeatures: [
      {
        name: 'Hāʾir al-Ḥusaynī',
        description: 'Sacred precinct around the shrine where duas are especially accepted',
        radius: 'Approximately 25 dhirāʿ (arm-lengths) around the shrine',
        significance: 'Supplications made in this area have special acceptance'
      },
      {
        name: 'Madhbaḥ (Place of Martyrdom)',
        description: 'The exact spot where Imam Ḥusayn (a) was martyred',
        significance: 'Marked and highly venerated within the shrine complex'
      },
      {
        name: 'Location of Tents',
        description: 'Area where Imam Husayn\'s family camped during the events of Karbala',
        significance: 'Historical location within the complex'
      },
      {
        name: 'Full Prayer Permission',
        description: 'Unlike most places during travel, visitors can offer full (not shortened) prayers in the shrine of Imam Husayn',
        ruling: 'Four rakʿāt prayers are offered in full, not shortened to two'
      },
      {
        name: 'The Pigeons',
        description: 'The pigeons around the shrine are honored and protected',
        story: 'It is narrated that Imam Husayn (a) has a special relationship with the pigeons'
      }
    ],
    
    martyrsBuried: [
      {
        name: 'Ḥabīb ibn Maḍāhir',
        description: 'Elderly companion who fought valiantly'
      },
      {
        name: 'Sayyid Ibrāhīm al-Mujāb',
        description: 'Descendant of Imam Hasan (a)'
      },
      {
        name: '72 Companions',
        description: 'The loyal companions who were martyred with Imam Husayn, buried in the shrine complex'
      }
    ],
    
    turbah: {
      name: 'Turbah of Imam Husayn (a)',
      description: 'Soil from Karbala used for prostration during prayer',
      significance: 'Sajdah (prostration) on Karbala soil is highly recommended. It is one of the most blessed soils on earth.',
      spiritualMerit: 'Prostrating on the turbah connects the worshipper to the sacrifice of Imam Husayn',
      availability: 'Available for purchase near the shrine or can be brought as gift'
    },
    
    ziyaratPrayers: {
      ziyaratAshura: {
        name: 'Ziyārat ʿĀshūrāʾ',
        description: 'The most recommended ziyārah for Imam Husayn',
        merit: 'Reciting this daily has immense spiritual rewards',
        includes: 'Salutations, curses on oppressors, and commitment to the path of Imam Husayn'
      },
      regularZiyarah: 'Ziyārah of Imam Ḥusayn (a)',
      tasbih: 'Tasbīḥ of Sayyidah Fāṭimah (a) - 34 Allahu Akbar, 33 Alhamdulillah, 33 SubhanAllah',
      farewellZiyarah: 'Farewell Ziyārah of Imam Ḥusayn (a)',
      specialSalah: 'Offer 2 rakʿāt prayer as gift to Imam Husayn'
    },
    
    spiritualSignificance: [
      'Visiting Imam Husayn is equal to 1000 Hajj according to narrations',
      'The Kaʿbah visits Imam Husayn every Friday',
      'Paradise longs for the visitors of Imam Husayn',
      'Angels continuously visit and send salutations'
    ],
    
    comparison: 'Just as the Kaʿbah has Zamzam water, Karbala has the Euphrates River. Just as Ṣafā and Marwah are in Makkah, Bayn ul-Ḥaramayn (between the two shrines) serves a similar spiritual purpose in Karbala.',
    
    visitingHours: 'Open 24 hours',
    dressCode: 'Modest Islamic dress required. Women must wear chador and socks.',
    security: 'Multiple security checkpoints. Be patient and respectful.'
  },

  {
    id: 'hazrat-abbas-shrine',
    cityId: 'karbala',
    name: 'Shrine of Ḥaḍrat Abū al-Faḍl al-ʿAbbās (a)',
    nameArabic: 'حرم العباس',
    type: 'Primary Shrine',
    importance: 'Highest',
    image: 'https://images.unsplash.com/photo-1583948122608-29f7e528ec19',
    description: 'The magnificent shrine of Abbas ibn Ali (a), brother and standard-bearer of Imam Husayn, known for his unwavering loyalty and bravery.',
    
    significance: 'Ḥaḍrat Abbas (a) was the brave son of Imam Ali and Umm al-Banīn. He was the standard-bearer (Alamdār) of Imam Husayn and sacrificed his life trying to bring water to the thirsty children of the camp on the Day of Ashura.',
    
    abbasDetails: {
      title: 'Qamar Banī Hāshim (Moon of the Hashemites), Ḥāmil al-Liwāʾ (Standard-Bearer)',
      father: 'Imam Ali ibn Abi Talib (a)',
      mother: 'Umm al-Banīn (Fāṭimah bint Ḥizām)',
      knownFor: 'Unwavering loyalty, bravery, and sacrifice for Imam Husayn',
      martyrdom: 'Martyred while fetching water from the Euphrates on the Day of Ashura'
    },
    
    architecture: {
      goldenDome: 'Distinctive golden dome',
      minarets: 'Golden minarets',
      features: [
        'Beautifully decorated interior',
        'Ornate ḍarīh',
        'Expansive courtyards',
        'Underground prayer areas'
      ]
    },
    
    associatedShrines: [
      {
        name: 'Shrine of Umm al-Banīn',
        description: 'Mother of Abbas and his three brothers',
        location: 'Within the complex',
        ziyarah: 'Ziyārah of Umm al-Banīn'
      }
    ],
    
    maqams: [
      {
        name: 'Maqām of al-ʿAbbās\'s Right Hand',
        description: 'Location where his right hand was martyred'
      },
      {
        name: 'Maqām of al-ʿAbbās\'s Left Hand',
        description: 'Location where his left hand was martyred'
      },
      {
        name: 'Maqām of Ṣāḥib az-Zamān (aj)',
        description: 'Station of Imam al-Mahdi within the complex'
      }
    ],
    
    specialEtiquette: [
      'Approach with utmost respect and humility',
      'Remember his sacrifice for water',
      'Many people make specific requests for fulfillment of needs (ḥājāt)'
    ],
    
    beneficialActs: 'It is narrated that making specific wishes and commitments (nazr) at the shrine of Hazrat Abbas is particularly effective for fulfillment of needs.',
    
    ziyaratPrayers: {
      mainZiyarah: 'Ziyārah of Ḥaḍrat ʿAbbās (a)',
      farewellZiyarah: 'Farewell Ziyārah of Ḥaḍrat ʿAbbās (a)',
      specialSalah: 'Offer 2 rakʿāt prayer as gift'
    },
    
    visitingHours: 'Open 24 hours',
    dressCode: 'Modest Islamic dress required. Women must wear chador and socks.'
  },

  {
    id: 'bayn-ul-haramayn',
    cityId: 'karbala',
    name: 'Bayn ul-Ḥaramayn',
    nameArabic: 'بين الحرمين',
    type: 'Sacred Path',
    importance: 'High',
    description: 'The blessed path between the shrines of Imam Husayn and Hazrat Abbas.',
    significance: 'This area between the two shrines is compared to Ṣafā and Marwah in Makkah. Walking between the two shrines while in a state of spirituality is highly recommended.',
    recommendedAct: 'Walk between the two shrines, reflecting on the events of Karbala and offering salutations to both'
  },

  {
    id: 'euphrates-river',
    cityId: 'karbala',
    name: 'The Euphrates River',
    nameArabic: 'نهر الفرات',
    type: 'Historic Site',
    importance: 'Medium',
    description: 'The river from which Imam Husayn\'s camp was denied water.',
    historicalSignificance: 'Hazrat Abbas was martyred while trying to bring water from this river to the thirsty children. The denial of water remains one of the most painful aspects of the tragedy of Karbala.',
    spiritualParallel: 'Just as Zamzam is blessed water in Makkah, the Euphrates River in Karbala holds spiritual significance.'
  },

  {
    id: 'al-mukhayyam',
    cityId: 'karbala',
    name: 'Al-Mukhayyam (The Campsite)',
    nameArabic: 'المخيم',
    type: 'Historic Site',
    importance: 'Medium',
    description: 'The location where Imam Husayn\'s tents and caravan were stationed.',
    significance: 'This is where the families stayed during the events of Ashura. After the battle, the tents were set on fire.',
    visitingNote: 'Visiting this site helps connect emotionally with the events of Karbala'
  },

  {
    id: 'tall-zaynabiyyah',
    cityId: 'karbala',
    name: 'Tall az-Zaynabiyyah',
    nameArabic: 'تل زينبية',
    type: 'Historic Site',
    importance: 'Low',
    description: 'Hill with historical significance related to Lady Zaynab.',
    significance: 'Associated with Sayyidah Zaynab\'s witnessing of the aftermath of Ashura'
  },

  {
    id: 'hurr-shrine',
    cityId: 'karbala',
    name: 'Shrine of Ḥurr al-Riyāḥī',
    nameArabic: 'مرقد الحر الرياحي',
    type: 'Companion Shrine',
    importance: 'Medium',
    description: 'Shrine of the commander who switched sides to join Imam Husayn.',
    significance: 'Ḥurr initially blocked Imam Husayn\'s path but repented and joined him, becoming one of the first martyrs. His name "Ḥurr" means "The Free One".',
    story: 'He represents repentance and redemption - he was sent to block Imam Husayn but on the Day of Ashura, realized his mistake and joined the Imam, fighting valiantly.',
    ziyarah: 'Ziyārah of Ḥurr',
    location: 'On the way from Najaf to Karbala'
  },

  {
    id: 'tiflay-muslim-shrine',
    cityId: 'karbala',
    name: 'Ṭiflay Muslim Shrine',
    nameArabic: 'مرقد طفلي مسلم',
    type: 'Companion Shrine',
    importance: 'Low',
    description: 'Shrine of the two young sons of Muslim ibn ʿAqīl.',
    significance: 'The children of Muslim ibn ʿAqīl who were orphaned and martyred in Kufa'
  },

  {
    id: 'arbain-walk',
    cityId: 'karbala',
    name: 'Ziyārat Arbaʿīn Walk',
    type: 'Pilgrimage Event',
    importance: 'Highest',
    description: 'The walking pilgrimage from Najaf to Karbala on foot, 40 days after Ashura.',
    significance: 'Millions of pilgrims walk from Najaf to Karbala (80+ km) to commemorate Arbaʿīn. This is the largest annual gathering in the world.',
    rewards: 'Immense spiritual rewards for performing ziyārah on foot. Special narrations mention the virtues of walking to visit Imam Husayn.',
    timing: '20th Ṣafar each year',
    duration: '2-3 days of walking',
    facilities: 'Millions of volunteers provide free food, water, accommodation, and medical services along the route - a unique display of human compassion and organization.'
  },

  // KADHIMIYA SITES
  {
    id: 'kadhimiya-shrine',
    cityId: 'kadhimiya',
    name: 'Shrine of Imam Mūsā al-Kāẓim (a) and Imam Muḥammad al-Jawād (a)',
    nameArabic: 'حرم الكاظمين',
    type: 'Primary Shrine',
    importance: 'Highest',
    image: 'https://images.unsplash.com/photo-1629206755907-d0e179c07dd6',
    description: 'The golden-domed shrine housing two Imams - the 7th and 9th Imams of the Shia.',
    
    significance: 'This blessed shrine contains the graves of Imam Mūsā al-Kāẓim (a), known for his patience, and his grandson Imam Muḥammad al-Jawād (a), known for his knowledge at a young age. The shrine has enriched Baghdad with spiritual light.',
    
    imams: [
      {
        name: 'Imam Mūsā ibn Jaʿfar al-Kāẓim (a)',
        title: 'Al-Kāẓim (The Forbearing), Seventh Imam',
        father: 'Imam Jaʿfar as-Ṣādiq (a)',
        birthDate: '7th Ṣafar, 128 AH',
        martyrdomDate: '25th Rajab, 183 AH',
        ageAtMartyrdom: '55 years',
        causeOfMartyrdom: 'Poisoned in prison by Hārūn ar-Rashīd',
        knownFor: 'Extraordinary patience and forbearance during years of imprisonment',
        specialSalawat: 'Ṣalawāt of Imām Mūsā al-Kāẓim (a)'
      },
      {
        name: 'Imam Muḥammad ibn ʿAlī al-Jawād (a)',
        title: 'Al-Jawād (The Generous), At-Taqī (The Pious), Ninth Imam',
        father: 'Imam ʿAlī ar-Riḍā (a)',
        birthDate: '10th Rajab, 195 AH',
        martyrdomDate: '29th or 30th Dhul Qaʿdah, 220 AH',
        ageAtMartyrdom: '25 years',
        causeOfMartyrdom: 'Poisoned by his wife at the instigation of al-Muʿtaṣim',
        knownFor: 'Becoming Imam at age 8, demonstrating profound knowledge from childhood',
        specialSalawat: 'Ṣalawāt of Imām al-Jawād (a)'
      }
    ],
    
    architecture: {
      goldenDomes: 'Two golden domes',
      minarets: 'Four golden minarets',
      courtyards: 'Expansive courtyards with beautiful tilework',
      features: [
        'Ornate interior decoration',
        'Separate ḍarīhs for each Imam',
        'Beautiful chandelier work',
        'Intricate calligraphy'
      ]
    },
    
    scholarsBuried: [
      {
        name: 'Khawājah Naṣīr al-Dīn Ṭūsī',
        significance: 'Renowned scholar, mathematician, astronomer, and philosopher',
        contribution: 'Major contributions to Islamic philosophy and science'
      },
      {
        name: 'Shaykh al-Mufīd',
        significance: 'Great theologian and teacher',
        students: 'Teacher of Sayyid Murtaḍā and Sayyid Raḍī',
        story: 'Famous for the vivid dream story showing his high status'
      },
      {
        name: 'Ibn Qūliwayh Qumī',
        significance: 'Author of Kāmil az-Ziyārāt',
        contribution: 'Compiled narrations about ziyārah'
      },
      {
        name: 'Sayyid Murtaḍā',
        relation: 'Brother of Sayyid Raḍī',
        significance: 'Renowned scholar and theologian'
      },
      {
        name: 'Sayyid Raḍī',
        relation: 'Brother of Sayyid Murtaḍā',
        significance: 'Compiler of Nahj al-Balāghah',
        contribution: 'Collected sermons, letters, and sayings of Imam Ali'
      }
    ],
    
    ziyaratPrayers: {
      individualZiyarahs: [
        'Ziyārah of Imām Mūsā al-Kāẓim (a)',
        'Ziyārah of Imām Muḥammad al-Jawād (a)'
      ],
      commonZiyarah: 'Common Ziyārah of Imām al-Kāzim (a) and Imām al-Jawād (a)',
      farewellZiyarahs: [
        'Farewell Ziyārah of Imām Mūsā al-Kaẓim (a)',
        'Farewell Ziyārah of Imām al-Jawād (a)'
      ],
      specialSalawat: 'Specific ṣalawāt for each Imam'
    },
    
    visitingHours: 'Open 24 hours',
    dressCode: 'Modest Islamic dress required. Women must wear chador and socks.',
    location: 'Kadhimiya district, northern Baghdad'
  },

  // SAMARRA SITES
  {
    id: 'askariyayn-shrine',
    cityId: 'samarra',
    name: 'Shrine of Imam al-Hādī and Imam al-ʿAskarī (a) - ʿAskarīyayn',
    nameArabic: 'حرم العسكريين',
    type: 'Primary Shrine',
    importance: 'Highest',
    image: 'https://images.unsplash.com/photo-1761475461178-ec5fea65a1a2',
    description: 'The magnificent shrine of the 10th and 11th Imams, beautifully reconstructed after the 2006/2007 bombings.',
    
    significance: 'This shrine houses two Imams who lived under house arrest in Samarra during the Abbasid period, hence called "Askariyayn" (the two who were in the military garrison). The shrine complex also contains the Holy Sardāb where Imam al-Mahdi (aj) went into occultation.',
    
    history: 'The shrine was bombed in February 2006 and June 2007, destroying the golden dome. It has since been magnificently reconstructed with support from believers worldwide.',
    
    imams: [
      {
        name: 'Imam ʿAlī ibn Muḥammad al-Hādī (a)',
        title: 'Al-Hādī (The Guide), An-Naqī (The Pure), Tenth Imam',
        father: 'Imam Muhammad al-Jawād (a)',
        birthDate: '2nd or 15th Dhul Hijjah, 212 AH',
        martyrdomDate: '3rd Rajab, 254 AH',
        ageAtMartyrdom: '42 years',
        causeOfMartyrdom: 'Poisoned by al-Muʿtazz',
        yearsInSamarra: 'Forced to live in Samarra under surveillance'
      },
      {
        name: 'Imam Ḥasan ibn ʿAlī al-ʿAskarī (a)',
        title: 'Al-ʿAskarī (Named after living in military garrison), Al-Zakī (The Pure), Eleventh Imam',
        father: 'Imam ʿAlī al-Hādī (a)',
        birthDate: '8th Rabīʿ al-Ākhir, 232 AH',
        martyrdomDate: '8th Rabīʿ al-Awwal, 260 AH',
        ageAtMartyrdom: '28 years',
        causeOfMartyrdom: 'Poisoned by al-Muʿtamid',
        significance: 'Father of Imam al-Mahdi (aj), the 12th Imam'
      }
    ],
    
    ladiesBuried: [
      {
        name: 'Ḥaḍrat Narjis Khātūn (a)',
        relation: 'Mother of Imam al-Mahdi (aj)',
        significance: 'Byzantine princess who embraced Islam',
        ziyarah: 'Ziyārah of Ḥaḍrat Narjis Khātūn (a)'
      },
      {
        name: 'Ḥaḍrat Hakimā Khātūn (a)',
        relation: 'Sister of Imam al-Hadi, Aunt of Imam al-Askari',
        significance: 'Present at the birth of Imam al-Mahdi',
        role: 'Witness to the miraculous birth and early life of the 12th Imam',
        ziyarah: 'Ziyārah of Ḥaḍrat Hakimā Khātūn (a)'
      },
      {
        name: 'Sawsan',
        relation: 'Mother of Imam Ḥasan al-ʿAskari (a)'
      },
      {
        name: 'Ḥaḍrat Samānah',
        relation: 'Mother of Imam al-Hādī (a)'
      }
    ],
    
    otherGraves: [
      {
        name: 'Sayyid Muḥammad ibn ʿAlī',
        relation: 'Brother of Imam al-Hadi (a)',
        title: 'Known for answered prayers',
        ziyarah: 'Ziyārah Sayyid Muḥammad ibn ʿAlī'
      },
      { name: 'Sayyid Ḥusayn ibn ʿAlī', relation: 'Brother of Imam Ḥasan al-ʿAskarī (a)' },
      { name: 'Jaʿfar al-Kadhāb', relation: 'Brother of Imam Ḥasan al-ʿAskarī (a)', note: 'Falsely claimed Imamate' },
      { name: 'Abū Hāshim Jaʿfarī', significance: 'Companion' },
      { name: 'Jamīl ibn Darrāj Kūfī', significance: 'Narrator' },
      { name: 'Ibrāhīm ibn Mālik al-Ashtar', significance: 'Historical figure' }
    ],
    
    ziyaratPrayers: {
      entryPermission: 'Idhn Dukhūl (Permission to Enter) - special duʿā before entering',
      individualZiyarahs: [
        'Ziyārah of Imām al-Hādī (a)',
        'Ziyārah of Imām Ḥasan al-ʿAskarī (a)'
      ],
      commonZiyarah: 'Common Ziyārah of Imām al-Hādī (a) and Imām al-ʿAskarī (a)',
      ladiesZiyarah: [
        'Ziyārah of Ḥaḍrat Narjis Khātūn (a)',
        'Ziyārah of Ḥaḍrat Hakimā Khātūn (a)'
      ],
      farewellZiyarah: 'Farewell Ziyārah of ʿAskarīyayn (a)'
    },
    
    visitingHours: 'Open during designated hours (check locally)',
    dressCode: 'Modest Islamic dress required. Women must wear chador and socks.',
    security: 'Enhanced security measures. Be prepared for thorough checks.',
    location: 'Samarra, approximately 125 km north of Baghdad'
  },

  {
    id: 'holy-sardab',
    cityId: 'samarra',
    name: 'Holy Sardāb (Cellar of Occultation)',
    nameArabic: 'السرداب المقدس',
    type: 'Sacred Site',
    importance: 'Highest',
    image: 'https://images.unsplash.com/photo-1584195820932-fde4e49d4820',
    description: 'The blessed cellar from where Imam Muhammad al-Mahdi (aj), the 12th Imam, went into occultation.',
    
    significance: 'This is one of the most sacred sites in Shia Islam. It is the place where Imam al-Mahdi (aj) entered the Major Occultation (Ghaybah al-Kubrā) in 329 AH. Believers come here to pray for his reappearance and to renew their pledge of allegiance.',
    
    imamMahdi: {
      name: 'Imam Muhammad ibn Hasan al-Mahdi (aj)',
      title: 'Al-Mahdi (The Guided One), Ṣāḥib az-Zamān (Master of the Time), Al-Qāʾim (The Riser), Baqiyyatullāh (Remnant of Allah)',
      father: 'Imam Hasan al-ʿAskarī (a)',
      mother: 'Narjis Khātūn (a)',
      birthDate: '15th Shaʿbān, 255 AH',
      birthPlace: 'Samarra',
      occultation: {
        minor: '260 AH - 329 AH (Minor Occultation - Ghaybah aṣ-Ṣughrā)',
        major: '329 AH - Present (Major Occultation - Ghaybah al-Kubrā)'
      },
      currentAge: 'Over 1100 lunar years',
      promise: 'Will reappear to fill the earth with justice after it has been filled with oppression'
    },
    
    bestTimeToVisit: [
      '15th Shaʿbān (Birthday of Imam Mahdi)',
      'Friday nights',
      'Any time with sincere intention'
    ],
    
    recommendedPrayers: [
      {
        name: 'Ziyārah of Imām az-Zamān (aj)',
        description: 'Special ziyārah for the 12th Imam'
      },
      {
        name: 'Duʿā al-Faraj',
        description: 'Supplication for the hastening of the reappearance',
        text: 'Allahumma kun li-waliyyika al-Hujjat ibnil-Hasan...'
      },
      {
        name: 'Duʿā al-Ḥujjah',
        description: 'Supplication of the Proof (Imam Mahdi)'
      },
      {
        name: 'Duʿā ʿAhd',
        description: 'Supplication of the Covenant - renewing allegiance',
        merit: 'Highly recommended to recite daily, especially in the morning',
        promise: 'Reciting for 40 mornings makes one among the helpers of Imam Mahdi'
      },
      {
        name: 'Duʿā Tawassul',
        description: 'Supplication seeking intercession through the Ahl al-Bayt'
      },
      {
        name: 'Ziyārat Āli Yāsīn',
        description: 'Comprehensive ziyārah for all the Imams including Imam Mahdi'
      }
    ],
    
    etiquette: [
      'Approach with utmost respect and spiritual presence',
      'Renew your covenant and pledge of allegiance (bayʿah)',
      'Pray for the hastening of the reappearance',
      'Ask for the honor of being among his helpers',
      'Reflect on your responsibilities as a follower'
    ],
    
    spiritualPreparation: 'Prepare yourself spiritually before visiting. Read about Imam Mahdi, understand the concept of occultation and waiting, and come with a heart full of longing.',
    
    visitingHours: 'Check locally - may have specific visiting times',
    location: 'Part of the ʿAskarīyayn shrine complex in Samarra'
  }
];

// ========================================
// SPECIAL EVENTS AND COMMEMORATIONS
// ========================================

export const specialEvents = [
  {
    id: 'ashura',
    name: 'Day of Ashura',
    date: '10th Muharram',
    location: 'Karbala',
    description: 'Commemoration of the martyrdom of Imam Husayn (a) and his companions',
    activities: ['Special ziyārah', 'Mourning gatherings (majālis)', 'Processions', 'Recitation of Ziyārat ʿĀshūrāʾ'],
    significance: 'One of the most important days in the Islamic calendar for Shia Muslims'
  },
  {
    id: 'arbaeen',
    name: 'Arbaeen',
    date: '20th Ṣafar (40 days after Ashura)',
    location: 'Walk from Najaf to Karbala',
    description: 'The largest annual peaceful gathering in the world - millions walk to Karbala',
    activities: ['Walking pilgrimage', 'Special ziyārah', 'Ziyārat Arbaʿīn'],
    significance: 'Commemorates the end of the 40-day mourning period. Demonstrates global unity of believers.',
    volunteers: 'Millions of Iraqi volunteers provide free food, water, accommodation, and medical services'
  },
  {
    id: 'shaaban-15',
    name: '15th Shaʿbān',
    date: '15th Shaʿbān',
    location: 'Karbala and Samarra',
    description: 'Birthday of Imam al-Mahdi (aj)',
    activities: ['Celebrations', 'Special prayers for reappearance', 'Ziyārah', 'Distribution of sweets'],
    significance: 'Birth of the awaited savior, the 12th Imam'
  },
  {
    id: 'eid-ghadir',
    name: 'Eid al-Ghadīr',
    date: '18th Dhul Hijjah',
    location: 'Najaf',
    description: 'Commemoration of the appointment of Imam Ali as successor',
    activities: ['Celebrations', 'Special ziyārah of Imam Ali', 'Recitation of Ghadir sermon', 'Giving gifts'],
    significance: 'The day Prophet Muhammad (s) announced Imam Ali as his successor at Ghadir Khumm'
  },
  {
    id: 'rajab-13',
    name: 'Birthday of Imam Ali',
    date: '13th Rajab',
    location: 'Najaf',
    description: 'Birthday of Imam Ali ibn Abi Talib (a)',
    activities: ['Celebrations', 'Special ziyārah', 'Lectures about Imam Ali', 'Distribution of food'],
    significance: 'Birth inside the Holy Kaʿbah - unique honor'
  },
  {
    id: 'ramadan-21',
    name: '21st Ramaḍān',
    date: '21st Ramaḍān',
    location: 'Najaf',
    description: 'Martyrdom of Imam Ali (a)',
    activities: ['Mourning gatherings', 'Special ziyārah', 'Recitation of elegies', 'Night prayers'],
    significance: 'The night Imam Ali was struck by a poisoned sword, passing away two days later'
  }
];

// ========================================
// IMPORTANT DUAS AND PRAYERS
// ========================================

export const importantDuas = [
  {
    id: 'dua-kumayl',
    name: 'Duʿā Kumayl',
    recitedOn: 'Thursday nights',
    taughtBy: 'Imam Ali (a) to Kumayl ibn Ziyād',
    significance: 'One of the most important supplications for forgiveness and seeking Allah\'s mercy',
    merit: 'Removes difficulties and brings divine mercy',
    location: 'Can be recited anywhere, especially recommended in holy shrines'
  },
  {
    id: 'ziyarat-ashura',
    name: 'Ziyārat ʿĀshūrāʾ',
    recitedOn: 'Daily (highly recommended), especially on the Day of Ashura',
    forWhom: 'Imam Husayn (a)',
    significance: 'Most important ziyārah for Imam Husayn, with immense spiritual rewards',
    merit: 'Narrations mention that 40 days of consecutive recitation brings the zāʾir under special protection',
    location: 'Can be recited from anywhere, best at Imam Husayn\'s shrine'
  },
  {
    id: 'dua-ahd',
    name: 'Duʿā ʿAhd',
    recitedOn: 'Daily in the morning',
    forWhom: 'Imam al-Mahdi (aj)',
    significance: 'Covenant and renewal of allegiance to the 12th Imam',
    merit: 'Reciting for 40 consecutive mornings makes one among the helpers of Imam Mahdi',
    location: 'Anywhere, especially facing the direction of Samarra'
  },
  {
    id: 'dua-faraj',
    name: 'Duʿā al-Faraj',
    recitedOn: 'Any time, especially after obligatory prayers',
    forWhom: 'For the reappearance of Imam al-Mahdi (aj)',
    significance: 'Supplication for the hastening of the return',
    merit: 'Demonstrates active waiting and participation in the mission',
    location: 'Anywhere, especially at the Holy Sardāb'
  },
  {
    id: 'dua-tawassul',
    name: 'Duʿā Tawassul',
    forWhom: 'Seeking intercession through the Ahl al-Bayt',
    significance: 'Powerful supplication invoking all 14 Infallibles',
    merit: 'Brings one closer to Allah through His chosen ones',
    location: 'Any holy shrine'
  },
  {
    id: 'tasbih-fatima',
    name: 'Tasbīḥ of Sayyidah Fāṭimah (a)',
    content: '34 Allahu Akbar, 33 Alhamdulillah, 33 SubhanAllah',
    recitedOn: 'After every obligatory prayer',
    significance: 'Given by Prophet Muhammad to his daughter Fatimah',
    merit: 'Better than a thousand rakʿāt of nafl prayers',
    location: 'After any prayer, anywhere'
  }
];

// ========================================
// PRACTICAL TRAVEL INFORMATION
// ========================================

export const travelInformation = {
  visaAndEntry: {
    visa: 'Iraqi visa required for most nationalities',
    onArrival: 'Available on arrival for many countries at Baghdad and Najaf airports',
    requirements: ['Valid passport (6 months validity)', 'Passport-sized photos', 'Visa fee in cash', 'Hotel booking confirmation (sometimes required)'],
    pilgrimage: 'Special ziyārah visas may be available through organized groups',
    consultation: 'Check with Iraqi embassy or consulate in your country before travel'
  },
  
  airports: [
    {
      name: 'Baghdad International Airport',
      code: 'BGW',
      location: 'Baghdad',
      distance: ' 20 km to Kadhimiya, 100 km to Karbala, 160 km to Najaf'
    },
    {
      name: 'Najaf International Airport',
      code: 'NJF',
      location: 'Najaf',
      distance: '5 km to Najaf city center, 80 km to Karbala'
    }
  ],
  
  currency: {
    official: 'Iraqi Dinar (IQD)',
    exchange: 'Available at airports, banks, and exchange offices',
    usd: 'US Dollars widely accepted, especially in hotels and larger establishments',
    atm: 'ATMs available in major cities',
    recommendation: 'Carry cash (Iraqi Dinar and US Dollars) as card acceptance is limited'
  },
  
  transportation: {
    betweenCities: [
      'Private car/taxi',
      'Organized ziyārah group buses',
      'Shared taxis',
      'During Arbaeen: Walking (Najaf to Karbala)'
    ],
    withinCities: [
      'Taxi',
      'Walking (especially in shrine areas)',
      'Some areas have rickshaws'
    ],
    recommendation: 'Travel with organized groups for safety and convenience'
  },
  
  accommodation: {
    options: [
      'Hotels near shrines (various price ranges)',
      'Guest houses',
      'Muḍīf (guest houses provided by the shrines)',
      'During Arbaeen: Free accommodation provided by volunteers (mawākib)'
    ],
    booking: 'Book in advance, especially during peak seasons (Muharram, Arbaeen, Shaʿbān)',
    recommendation: 'Stay close to the shrines to maximize ziyārah time'
  },
  
  food: {
    availability: 'Restaurants and food stalls widely available near shrines',
    type: 'Primarily Iraqi cuisine - rice, kebabs, stews, bread',
    freeMeals: 'Free meals (nazr) often distributed at shrines and by volunteers',
    water: 'Bottled water widely available and recommended',
    note: 'During Arbaeen, millions of free meals are served by volunteers'
  },
  
  health: {
    vaccinations: 'Check recommended vaccinations before travel',
    medications: 'Bring prescribed medications and basic medical supplies',
    facilities: 'Medical clinics available near major shrines',
    insurance: 'Travel insurance recommended',
    precautions: 'Stay hydrated, especially in summer; be mindful of food hygiene'
  },
  
  safety: {
    general: 'Exercise normal safety precautions',
    shrineAreas: 'Heavy security at all shrines with multiple checkpoints',
    valuables: 'Keep valuables secure; use hotel safes',
    women: 'Women should dress modestly (abaya and hijab); solo female travelers should exercise caution',
    groups: 'Traveling with organized groups is recommended',
    emergency: 'Know emergency numbers: Police 104, Ambulance 122, Fire 115'
  },
  
  communication: {
    language: 'Arabic is the main language; English limited outside major hotels',
    simCards: 'Local SIM cards available at airports and shops',
    internet: 'WiFi available in hotels; mobile data through local SIM',
    translation: 'Translation apps helpful; learn basic Arabic phrases'
  },
  
  climate: {
    summer: 'Very hot (40-50°C / 104-122°F) from June to September',
    winter: 'Mild (10-20°C / 50-68°F) from December to February',
    spring: 'Pleasant (20-30°C / 68-86°F) in March-May',
    fall: 'Comfortable (20-35°C / 68-95°F) in October-November',
    bestTime: 'October to April for comfortable weather',
    ramadan: 'Special atmosphere during Ramadan but with fasting considerations'
  },
  
  culturalEtiquette: [
    'Dress modestly at all times',
    'Women must wear abaya, hijab, chador (at shrines), and socks (at shrines)',
    'Men should wear long pants and shirts',
    'Remove shoes before entering carpeted areas of shrines',
    'Ask permission before taking photos of people',
    'Respect prayer times and worshippers',
    'Avoid public displays of affection',
    'Use right hand for giving and receiving',
    'Learn basic Arabic greetings: As-salamu alaykum (Peace be upon you)'
  ]
};

// ========================================
// PRACTICAL LAWS (Aḥkām) FOR ZIYĀRAH
// ========================================

export const practicalLaws = {
  prayerInHaram: "It is mustaḥab (recommended) to offer ṣalāh in the ḥarams of the Imāms (a); in fact, it is better than praying in a masjid because all of the ḥarams are, in fact, masājid (mosques).",
  respectForGraves: "It is good to have ādāb (respect) and be careful not to pray ahead of the grave of the Prophet (ṣ) and Imāms (a) in a manner that would be considered disrespectful to the owner of that grave.",
  fullPrayerLocations: [
    "Ḥaram of Imām Ḥusayn (a) - travelers can choose full or shortened prayer",
    "Masjid al-Kūfah - travelers can choose full or shortened prayer",
    "Masjid al-Ḥarām (Makkah) - travelers can choose full or shortened prayer",
    "Masjid an-Nabī (Madinah) - travelers can choose full or shortened prayer"
  ],
  enteringWithWudu: "It is mustaḥab to enter the ḥarams of the Imāms or their descendants with wuḍūʾ (ablution).",
  stateRestrictions: "It is iḥtiyāt al-wājib (obligatory precaution) that a person who is in the state of janābah, ḥayḍ, or nifās should not enter the ḥaram of a Maʿṣūm and remain there (passing through is okay). The ḥaram, in this context, is that room that falls underneath the dome, where the ḍarīh is built."
};

// ========================================
// SPECIAL DAYS BY WEEKDAY
// ========================================

export const specialDaysByWeekday = {
  title: "Best Days to Visit Each Maʿṣūm",
  description: "According to aḥādīth, each day of the week has been dedicated to some of the Maʿṣūmīn. It is recommended to visit the Maʿṣūm on that specific day for more thawāb (reward).",
  days: {
    Saturday: ["Prophet Muḥammad (ṣ)"],
    Sunday: ["Imām ʿAlī (a)", "Sayyidah Fāṭimah (a)"],
    Monday: ["Imām Ḥasan (a)", "Imām Ḥusayn (a)"],
    Tuesday: ["Imām as-Ṣajjād (a)", "Imām al-Bāqir (a)", "Imām aṣ-Ṣādiq (a)"],
    Wednesday: ["Imām Mūsā al-Kāẓim (a)", "Imām ar-Riḍā (a)", "Imām al-Jawād (a)", "Imām al-Hādī (a)"],
    Thursday: ["Imām Ḥasan al-Askari (a)"],
    Friday: ["Imām al-Mahdī (aj)"]
  }
};

// ========================================
// ṢALĀH OF ZIYĀRAH
// ========================================

export const salahOfZiyarah = {
  title: "Ṣalāh of Ziyārah and Gifted Ṣalāh",
  recommendedFor: [
    "Maʿsūmīn (14 Infallibles)",
    "Prophet Ādam (a)",
    "Prophet Nūḥ (a)",
    "Martyrs of Karbalā"
  ],
  forOthers: "For everyone else (other descendants, scholars, parents, friends, relatives), it is good to read a Ṣalāh after ziyārah with the intention of gifting the thawāb to their souls.",
  method: "Offer a two-rakaʿāt prayer after completing the ziyārah"
};

// ========================================
// ZIYĀRAT AN-NIYĀBAH (On Behalf of Someone)
// ========================================

export const ziyaratNiyabah = {
  title: "Ziyārat an-Niyābah - Performing Ziyārah on Behalf of Others",
  concept: "It is good to perform ziyārah on behalf of someone else (whether they are alive or passed away)",
  reward: "Both the nāʾib (the one performing the ziyārah) and manūb ʿanhu (the one on whose behalf the ziyārah is being performed) will gain the reward of the ziyārah",
  hadith: "Dāwūd Surmī said to Imām Ḥasan al-ʿAskarī (a), 'I have performed the ziyārah of your father and have made a nīyyah (intention) for the thawāb to be given to you.' The Imām (a) replied, 'There is a supreme reward for you from Allah, and from us, there is praise towards you.'",
  specialSalaam: "Peace be upon you, O my master, on behalf of so-and-so. I have come to visit you on behalf of him/her, so intercede for him/her to your Lord.",
  groupZiyarah: "Someone who would like to recite ziyārah on behalf of all of the believers or a specific group of believers can make the nīyyah verbally or in his/her heart before reciting the ziyārah."
};

// ========================================
// RENOWNED SCHOLARS BURIED IN NAJAF
// ========================================

export const scholarsBuriedInNajaf = [
  {
    name: "ʿAllāmah Ḥillī",
    period: "648-726 AH",
    significance: "Great Shia jurist and scholar",
    contribution: "Wrote numerous books on fiqh and kalām"
  },
  {
    name: "Shaykh Murtaḍā Ansārī (Shaykh Aʿẓam)",
    period: "1214-1281 AH",
    significance: "Highest ranking scholar of his time",
    contribution: "Revolutionized the study of Usul al-Fiqh"
  },
  {
    name: "Ākhūnd Khūrāsānī",
    period: "1255-1329 AH",
    significance: "One of the 'Three Great Maraji' of his era",
    contribution: "Famous for his work 'Kifāyat al-Uṣūl'"
  },
  {
    name: "Sayyid Abū al-Qāsim Khoei",
    period: "1317-1413 AH / 1899-1992 CE",
    significance: "Grand Ayatollah and one of the highest ranking Shia scholars of 20th century",
    contribution: "Established educational institutions worldwide"
  },
  {
    name: "Mīrzā Ḥusayn Nūrī",
    significance: "Author of Mustadrak al-Wasāʾil",
    contribution: "Compiled additional hadith not in the original Wasāʾil"
  },
  {
    name: "Shaykh ʿAbbās Qummī",
    period: "1294-1359 AH / 1877-1941 CE",
    significance: "Author of Mafatih al-Jinan",
    contribution: "Most famous book of Shia prayers and supplications"
  },
  {
    name: "Shaykh Ṭūsī",
    period: "385-460 AH",
    significance: "Established the Hawza of Najaf in 436 AH",
    contribution: "Migrated from Baghdad and made Najaf a center of Shia learning"
  }
];

// ========================================
// ARABIC PRAYER TEXTS (Full Texts)
// ========================================

export const arabicPrayers = {
  ziyaratAshura: {
    name: "Ziyārat ʿĀshūrāʾ",
    forWhom: "Imam Husayn (a)",
    when: "Daily (recommended), especially on Day of Ashura",
    merit: "Recite for 40 consecutive days for special blessings",
    shortText: {
      arabic: "السَّلامُ عَلَيْكَ يَا أَبَا عَبْدِ اللَّهِ",
      transliteration: "As-salāmu ʿalayka yā Abā ʿAbdillāh",
      english: "Peace be upon you, O Abā ʿAbdillāh (Imam Husayn)"
    },
    structure: [
      "Begin with greeting Imam Husayn",
      "Send salutations upon the martyrs",
      "100 times: Curse on the oppressors",
      "100 times: Salutations on Imam Husayn",
      "Conclude with duas"
    ],
    keyPhrases: [
      {
        arabic: "السَّلامُ عَلَيْكَ يَا أَبَا عَبْدِ اللَّهِ الْحُسَيْنِ",
        transliteration: "As-salāmu ʿalayka yā Abā ʿAbdillāh al-Ḥusayn",
        english: "Peace be upon you, O Abā ʿAbdillāh, Husayn"
      },
      {
        arabic: "لَعَنَ اللَّهُ أُمَّةً قَتَلَتْكَ",
        transliteration: "Laʿana Allāhu ummatan qatalatka",
        english: "May Allah curse the nation that killed you"
      },
      {
        arabic: "السَّلامُ عَلَيْكَ وَ رَحْمَةُ اللَّهِ وَ بَرَكَاتُهُ",
        transliteration: "As-salāmu ʿalayka wa raḥmatu Allāhi wa barakātuh",
        english: "Peace be upon you, and the mercy of Allah and His blessings"
      }
    ],
    fullTextSource: "Mafatih al-Jinan, Chapter on Ziyarat of Imam Husayn"
  },
  
  idhnDukhul: {
    name: "Idhn ad-Dukhūl (Permission to Enter)",
    forWhom: "All shrines",
    when: "Before entering any shrine",
    text: {
      arabic: "اَللَّهُ أَكْبَرُ اَللَّهُ أَكْبَرُ، لاَ إِلٰهَ إِلاَّ اللَّهُ وَاللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ",
      transliteration: "Allāhu Akbar Allāhu Akbar, Lā ilāha illā Allāh wa Allāhu Akbar, Allāhu Akbar wa lillāhil ḥamd",
      english: "Allah is the Greatest, Allah is the Greatest. There is no god but Allah, and Allah is the Greatest. Allah is the Greatest, and to Allah belongs all praise."
    },
    additional: {
      arabic: "أَأَدْخُلُ يَا رَسُولَ اللَّهِ؟ أَأَدْخُلُ يَا حُجَّةَ اللَّهِ؟ أَأَدْخُلُ يَا مَلاَئِكَةَ اللَّهِ الْمُقَرَّبِينَ؟",
      transliteration: "A-adkhulu yā Rasūla Allāh? A-adkhulu yā Ḥujjata Allāh? A-adkhulu yā malāʾikata Allāhil muqarrabīn?",
      english: "May I enter, O Messenger of Allah? May I enter, O Proof of Allah? May I enter, O close angels of Allah?"
    }
  },
  
  duaKumayl: {
    name: "Duʿā Kumayl",
    taughtBy: "Imam Ali (a) to Kumayl ibn Ziyād",
    when: "Thursday nights",
    merit: "For forgiveness and seeking Allah's mercy",
    opening: {
      arabic: "اَللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ",
      transliteration: "Allāhumma innī asʾaluka bi raḥmatika allatī wasiʿat kulla shayʾ",
      english: "O Allah, I beseech You by Your mercy which encompasses all things"
    },
    famousSection: {
      arabic: "إِلٰهِي وَرَبِّي مَنْ لِي غَيْرُكَ أَسْأَلُهُ كَشْفَ ضُرِّي وَالنَّظَرَ فِي أَمْرِي",
      transliteration: "Ilāhī wa Rabbī man lī ghayruka asʾaluhu kashfa ḍurrī wan-naẓara fī amrī",
      english: "My God and my Lord, to whom do I have other than You that I may ask to relieve my adversity and look into my affairs?"
    },
    fullSource: "Mafatih al-Jinan - available in full"
  },
  
  tasbihFatima: {
    name: "Tasbīḥ of Sayyidah Fāṭimah (a)",
    when: "After every obligatory prayer",
    method: {
      step1: {
        count: 34,
        arabic: "اَللَّهُ أَكْبَرُ",
        transliteration: "Allāhu Akbar",
        english: "Allah is the Greatest"
      },
      step2: {
        count: 33,
        arabic: "اَلْحَمْدُ لِلَّهِ",
        transliteration: "Alḥamdu lillāh",
        english: "All praise belongs to Allah"
      },
      step3: {
        count: 33,
        arabic: "سُبْحَانَ اللَّهِ",
        transliteration: "Subḥāna Allāh",
        english: "Glory be to Allah"
      }
    },
    total: "100",
    merit: "The Prophet (s) taught this to his daughter Fatimah. It is better than a thousand rakʿāt of nafl prayers."
  },
  
  duaAhd: {
    name: "Duʿā ʿAhd (Covenant with Imam Mahdi)",
    when: "Daily in the morning",
    instruction: "Recite for 40 consecutive mornings",
    merit: "Become among the helpers of Imam al-Mahdi (aj)",
    opening: {
      arabic: "اَللَّهُمَّ رَبَّ النُّورِ الْعَظِيمِ",
      transliteration: "Allāhumma Rabban-nūril ʿaẓīm",
      english: "O Allah, Lord of the Great Light"
    },
    keySection: {
      arabic: "اَللَّهُمَّ عَرِّفْنِي نَفْسَكَ فَإِنَّكَ إِنْ لَمْ تُعَرِّفْنِي نَفْسَكَ لَمْ أَعْرِفْ نَبِيَّكَ، اَللَّهُمَّ عَرِّفْنِي رَسُولَكَ فَإِنَّكَ إِنْ لَمْ تُعَرِّفْنِي رَسُولَكَ لَمْ أَعْرِفْ حُجَّتَكَ، اَللَّهُمَّ عَرِّفْنِي حُجَّتَكَ فَإِنَّكَ إِنْ لَمْ تُعَرِّفْنِي حُجَّتَكَ ضَلَلْتُ عَنْ دِينِي",
      transliteration: "Allāhumma ʿarrifnī nafsaka fa innaka in lam tuʿarrifnī nafsaka lam aʿrif nabīyak...",
      english: "O Allah, let me recognize You, for if You do not let me recognize You, I will not recognize Your Prophet. O Allah, let me recognize Your Messenger, for if You do not let me recognize Your Messenger, I will not recognize Your Proof. O Allah, let me recognize Your Proof, for if You do not let me recognize Your Proof, I will go astray from my religion."
    }
  },
  
  duaFaraj: {
    name: "Duʿā al-Faraj (Supplication for Relief)",
    forWhom: "Hastening the reappearance of Imam Mahdi",
    when: "After prayers, at Holy Sardab",
    text: {
      arabic: "اَللَّهُمَّ كُنْ لِوَلِيِّكَ الْحُجَّةِ بْنِ الْحَسَنِ صَلَوَاتُكَ عَلَيْهِ وَعَلَىٰ آبَائِهِ فِي هٰذِهِ السَّاعَةِ وَفِي كُلِّ سَاعَةٍ وَلِيّاً وَحَافِظاً وَقَائِداً وَنَاصِراً وَدَلِيلاً وَعَيْناً حَتَّىٰ تُسْكِنَهُ أَرْضَكَ طَوْعاً وَتُمَتِّعَهُ فِيهَا طَوِيلاً",
      transliteration: "Allāhumma kun li waliyyikal ḥujjatibnil Ḥasan ṣalawātuka ʿalayhi wa ʿalā ābāʾih, fī hādhihis-sāʿati wa fī kulli sāʿatin waliyyan wa ḥāfiẓan wa qāʾidan wa nāṣiran wa dalīlan wa ʿaynan ḥattā tuskinahu arḍaka ṭawʿan wa tumatti ʿahu fīhā ṭawīlan",
      english: "O Allah, be for Your representative, the Hujjah son of al-Hasan (Imam Mahdi), Your blessings be upon him and his forefathers, in this hour and in every hour, a guardian, a protector, a leader, a helper, a guide, and an eye, until You make him live on Your earth obediently, and let him enjoy it for a long time."
    }
  },
  
  salawat: {
    name: "Ṣalawāt (Sending blessings on Prophet and his family)",
    when: "Recite frequently throughout the day",
    shortForm: {
      arabic: "اَللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَآلِ مُحَمَّدٍ",
      transliteration: "Allāhumma ṣalli ʿalā Muḥammad wa āli Muḥammad",
      english: "O Allah, send blessings upon Muhammad and the family of Muhammad"
    },
    longForm: {
      arabic: "اَللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَآلِ مُحَمَّدٍ وَعَجِّلْ فَرَجَهُمْ وَالْعَنْ أَعْدَاءَهُمْ",
      transliteration: "Allāhumma ṣalli ʿalā Muḥammad wa āli Muḥammad wa ʿajjil farajahum walʿan aʿdāʾahum",
      english: "O Allah, send blessings upon Muhammad and the family of Muhammad, hasten their relief, and curse their enemies"
    }
  }
};

// ========================================
// ZIYĀRAT PRAYER REFERENCES
// ========================================

export const ziyaratPrayerReferences = {
  najafImamAli: {
    title: "Prayers for Imam Ali's Shrine",
    prayers: [
      { name: "Ziyārah of Amīr al-Muʾminīn", type: "Standard Ziyārah", source: "Mafatih al-Jinan" },
      { name: "Ziyārat Amīn Allah", type: "Special comprehensive ziyārah", merit: "Highly recommended" },
      { name: "Farewell Ziyārah", type: "Final ziyārah before leaving", timing: "When departing" },
      { name: "Ziyārah for Prophets Ādam and Nūḥ", location: "Also in Najaf shrine" }
    ]
  },
  karbalaImamHusayn: {
    title: "Prayers for Imam Husayn's Shrine",
    prayers: [
      { name: "Ziyārat ʿĀshūrāʾ", type: "Most famous", special: "With 100 curses and salutations", merit: "Recite daily for 40 days for special blessings" },
      { name: "Ziyārah Warith", type: "Important ziyārah", merit: "Highly recommended" },
      { name: "Standard Ziyārah of Imam Ḥusayn", type: "General ziyārah" },
      { name: "Special Ziyārah for Day of ʿĀshūrā", timing: "10th Muharram" },
      { name: "Special Ziyārah for Arbaʿīn", timing: "20th Ṣafar" },
      { name: "Farewell Ziyārah", timing: "When departing" }
    ]
  },
  karbalaHazratAbbas: {
    title: "Prayers for Hazrat Abbas's Shrine",
    prayers: [
      { name: "Ziyārah of Ḥaḍrat ʿAbbās", type: "Standard ziyārah" },
      { name: "Farewell Ziyārah", timing: "When departing" },
      { name: "Special supplications", purpose: "For fulfillment of needs" }
    ]
  },
  kadhimiya: {
    title: "Prayers for Kadhimiya Shrine",
    prayers: [
      { name: "Individual Ziyārah of Imam Mūsā al-Kāẓim" },
      { name: "Individual Ziyārah of Imam Muḥammad al-Jawād" },
      { name: "Common Ziyārah for both Imams" },
      { name: "Farewell Ziyārah for Imam al-Kāẓim" },
      { name: "Farewell Ziyārah for Imam al-Jawād" }
    ]
  },
  samarra: {
    title: "Prayers for Samarra Shrines",
    prayers: [
      { name: "Ziyārah of Imam al-Hādī" },
      { name: "Ziyārah of Imam Ḥasan al-ʿAskarī" },
      { name: "Common Ziyārah for both Imams (ʿAskarīyayn)" },
      { name: "Ziyārah of Ḥaḍrat Narjis Khātūn", relation: "Mother of Imam Mahdi" },
      { name: "Ziyārah of Ḥaḍrat Hakimā Khātūn", relation: "Aunt of Imam al-Askari" },
      { name: "Farewell Ziyārah of ʿAskarīyayn" }
    ]
  },
  sardabImamMahdi: {
    title: "Prayers at the Holy Sardāb",
    prayers: [
      { name: "Ziyārah of Imam al-Mahdi (aj)", location: "At Sardāb" },
      { name: "Duʿā al-Faraj", purpose: "For hastening reappearance" },
      { name: "Duʿā al-Ḥujjah", meaning: "Supplication of the Proof" },
      { name: "Duʿā ʿAhd", instruction: "Recite for 40 consecutive mornings", merit: "Become among helpers of Imam Mahdi" },
      { name: "Duʿā Tawassul", purpose: "Seeking intercession through Ahl al-Bayt" },
      { name: "Ziyārat Āli Yāsīn", type: "Comprehensive ziyārah for all Imams" }
    ]
  },
  generalDuas: {
    title: "General Supplications",
    prayers: [
      { name: "Duʿā Kumayl", timing: "Thursday nights", taught_by: "Imam Ali to Kumayl ibn Ziyād" },
      { name: "Tasbīḥ of Sayyidah Fāṭimah", format: "34 Allahu Akbar, 33 Alhamdulillah, 33 SubhanAllah", timing: "After every prayer" },
      { name: "Duʿā al-Widāʿ", type: "Farewell supplication", timing: "Final prayer before leaving" },
      { name: "Idhn ad-Dukhūl", type: "Permission to enter", timing: "Before entering any shrine" }
    ]
  },
  note: "📖 For complete Arabic texts with transliteration, please refer to Mafatih al-Jinan or the original Iraq Guide book"
};

// ========================================
// MARTYRS OF KARBALA
// ========================================

export const martyrsOfKarbala = {
  title: "The 72 Martyrs of Karbala",
  date: "10th Muharram 61 AH (680 CE)",
  familyOfProphet: [
    { name: "Imam Ḥusayn ibn ʿAlī (a)", relation: "Grandson of Prophet Muhammad (s)", age: "57 years" },
    { name: "ʿAbbās ibn ʿAlī (a)", relation: "Son of Imam Ali, brother of Imam Husayn", title: "Qamar Banī Hāshim (Moon of Hashemites)" },
    { name: "ʿAlī al-Akbar", relation: "Son of Imam Husayn", age: "18 years" },
    { name: "ʿAlī al-Aṣghar", relation: "Infant son of Imam Husayn", age: "6 months", martyrdom: "Shot with arrow while in father's arms" },
    { name: "Qāsim ibn Ḥasan", relation: "Son of Imam Hasan, nephew of Imam Husayn", age: "Young boy" },
    { name: "ʿAwn", relation: "Son of Lady Zaynab's husband" },
    { name: "Muhammad", relation: "Son of Lady Zaynab's husband" }
  ],
  prominentCompanions: [
    { name: "Ḥabīb ibn Maḍāhir", description: "Elderly companion, veteran of early Islamic battles" },
    { name: "Muslim ibn ʿAwsajah", description: "First companion to be martyred" },
    { name: "Zuhayr ibn Qayn", description: "Initially neutral, then joined Imam Husayn" },
    { name: "John", description: "Christian slave who accepted Islam and died defending Imam Husayn" },
    { name: "Ḥurr al-Riyāḥī", description: "Commander who switched sides to support Imam Husayn" }
  ],
  total: "72 companions and family members martyred",
  survived: [
    "Imam Zayn al-ʿĀbidīn (a) - 4th Imam, son of Imam Husayn (ill during battle)",
    "Lady Zaynab (a) - Sister of Imam Husayn",
    "Lady Fāṭimah (Umm Kulthūm) - Sister of Imam Husayn",
    "Women and children of the camp"
  ]
};

// ========================================
// FOOD & CULTURE
// ========================================

export const iraqiFoodCulture = {
  traditionalDishes: [
    { name: "Kabāb", description: "Grilled meat skewers", where: "Available everywhere" },
    { name: "Masgouf", description: "Grilled fish (national dish)", specialty: "Baghdad" },
    { name: "Biryani", description: "Spiced rice with meat", popular: true },
    { name: "Kubba", description: "Bulgur wheat dumplings with meat filling" },
    { name: "Tabbouleh", description: "Fresh parsley salad" },
    { name: "Hummus", description: "Chickpea dip served with bread" },
    { name: "Iraqi Tea", description: "Very sweet black tea", cultural: "Served everywhere" },
    { name: "Dates", description: "Fresh or dried, served with Arabic coffee" }
  ],
  
  nazrFood: {
    title: "Nazr (Charitable Food Distribution)",
    concept: "Free food distributed by volunteers as religious offering (vowed charity)",
    locations: "Near all major shrines",
    types: ["Full meals (lunch/dinner)", "Snacks and sweets", "Drinks and water", "Fresh dates", "Bread and cheese"],
    etiquette: [
      "Accept graciously - it's blessed food",
      "Say 'Jazākum Allāh khayr' (May Allah reward you)",
      "Don't waste any food",
      "You can decline politely if full",
      "Many distribute to fulfill vows (nazr)"
    ]
  },
  
  arbaeen: {
    title: "Arbaeen Walk - The Greatest Display of Hospitality",
    concept: "Thousands of free service stations (mawākib) during the Arbaeen pilgrimage",
    services: [
      "Free meals (breakfast, lunch, dinner)",
      "Free drinks and water",
      "Free accommodation and rest areas",
      "Free medical services",
      "Free phone charging stations",
      "Free shoe repair",
      "Free massage and foot care"
    ],
    scale: "Millions of Iraqi volunteers serve 20+ million pilgrims walking from Najaf to Karbala",
    duration: "2-3 days of walking (80+ km)",
    spirit: "Iraqi hospitality and love for Imam Husayn displayed at its finest"
  }
};

// ========================================
// ADDITIONAL KUFA SITES
// ========================================

export const additionalKufaSites = [
  {
    name: "House of Imam Ali (a)",
    significance: "Where Imam Ali lived during his caliphate",
    location: "In Kufa city",
    status: "Historical site"
  },
  {
    name: "Masjid Ṣaʿṣaʿah ibn Ṣawḥān",
    significance: "Named after a companion of Imam Ali",
    type: "Mosque"
  },
  {
    name: "Dār al-Imārah",
    significance: "Government house during Imam Ali's caliphate",
    type: "Historical building"
  }
];

// Default export
export default {
  preparationTips,
  ziyarahEtiquette,
  packingList,
  iraqCities,
  ziyaratSites,
  specialEvents,
  importantDuas,
  travelInformation,
  practicalLaws,
  specialDaysByWeekday,
  salahOfZiyarah,
  ziyaratNiyabah,
  scholarsBuriedInNajaf,
  arabicPrayers,
  ziyaratPrayerReferences,
  martyrsOfKarbala,
  iraqiFoodCulture,
  additionalKufaSites
};
