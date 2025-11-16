// Mock data for pilgrimage booking platform

export const cities = [
  {
    id: 1,
    name: 'Karbala',
    country: 'Iraq',
    description: 'Holy city and shrine of Imam Husain',
    image: 'https://images.unsplash.com/photo-1711594937687-eed59068e043',
    popularPlaces: 5,
    hotels: 28
  },
  {
    id: 2,
    name: 'Najaf',
    country: 'Iraq',
    description: 'Holy shrine of Imam Ali',
    image: 'https://images.unsplash.com/photo-1761474758252-6af7f4d61868',
    popularPlaces: 4,
    hotels: 22
  },
  {
    id: 3,
    name: 'Mashhad',
    country: 'Iran',
    description: 'Shrine of Imam Reza',
    image: 'https://images.unsplash.com/photo-1600356199555-0c66edfcef53',
    popularPlaces: 6,
    hotels: 45
  },
  {
    id: 4,
    name: 'Qom',
    country: 'Iran',
    description: 'Shrine of Fatima Masumeh',
    image: 'https://images.unsplash.com/photo-1700130375571-8f2eca1b825e',
    popularPlaces: 3,
    hotels: 18
  },
  {
    id: 5,
    name: 'Kadhimiya',
    country: 'Iraq',
    description: 'Shrine of Imam Musa al-Kadhim',
    image: 'https://images.unsplash.com/photo-1629206755907-d0e179c07dd6',
    popularPlaces: 3,
    hotels: 15
  },
  {
    id: 6,
    name: 'Samarra',
    country: 'Iraq',
    description: 'Al-Askari Shrine',
    image: 'https://images.unsplash.com/photo-1761475461178-ec5fea65a1a2',
    popularPlaces: 2,
    hotels: 12
  }
];

export const ziyaratPlaces = [
  {
    id: 1,
    cityId: 1,
    name: 'Imam Husain Shrine',
    description: 'The holiest shrine for Shia Muslims, dedicated to Imam Husain, the grandson of Prophet Muhammad.',
    visitingTips: 'Dress modestly. Women must wear abaya and hijab. Photography restrictions apply inside.',
    accessibility: 'Wheelchair accessible entrances and prayer areas available.',
    prayerTimes: ['Fajr: 4:45 AM', 'Dhuhr: 12:15 PM', 'Asr: 3:30 PM', 'Maghrib: 6:10 PM', 'Isha: 7:30 PM'],
    distance: 0,
    image: 'https://images.unsplash.com/photo-1711594937687-eed59068e043'
  },
  {
    id: 2,
    cityId: 1,
    name: 'Al-Abbas Shrine',
    description: 'Beautiful golden-domed shrine of Abbas ibn Ali, brother of Imam Husain.',
    visitingTips: 'Connected to Imam Husain shrine by walkway. Visit both shrines in sequence.',
    accessibility: 'Fully accessible with ramps and elevators.',
    prayerTimes: ['Fajr: 4:45 AM', 'Dhuhr: 12:15 PM', 'Asr: 3:30 PM', 'Maghrib: 6:10 PM', 'Isha: 7:30 PM'],
    distance: 0.3,
    image: 'https://images.unsplash.com/photo-1629206755907-d0e179c07dd6'
  },
  {
    id: 3,
    cityId: 2,
    name: 'Imam Ali Shrine',
    description: 'The magnificent shrine of Imam Ali, first Shia Imam and cousin of Prophet Muhammad.',
    visitingTips: 'Best visited early morning or late evening. Very crowded on Fridays.',
    accessibility: 'Wheelchair accessible. Special prayer areas for elderly.',
    prayerTimes: ['Fajr: 4:50 AM', 'Dhuhr: 12:20 PM', 'Asr: 3:35 PM', 'Maghrib: 6:15 PM', 'Isha: 7:35 PM'],
    distance: 0,
    image: 'https://images.unsplash.com/photo-1761474758252-6af7f4d61868'
  },
  {
    id: 4,
    cityId: 2,
    name: 'Wadi Al-Salam Cemetery',
    description: 'The largest cemetery in the world, where millions of Shia Muslims are buried.',
    visitingTips: 'Hire a local guide. Bring water and wear comfortable shoes.',
    accessibility: 'Limited accessibility due to terrain.',
    prayerTimes: ['Open for visitation during all prayer times'],
    distance: 2.5,
    image: 'https://images.unsplash.com/photo-1724051526928-ae6f5d53bead'
  }
];

export const hotels = [
  {
    id: 1,
    name: 'Al-Warith Hotel',
    city: 'Karbala',
    rating: 4.5,
    price: 85,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1707172308283-e2d1e44d0be3',
    distanceToShrine: 0.2,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', 'Family Rooms'],
    reviews: 245,
    description: 'Comfortable hotel within walking distance of holy shrines.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 24 hours'
  },
  {
    id: 2,
    name: 'Grand Husain Hotel',
    city: 'Karbala',
    rating: 4.8,
    price: 120,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1607320895054-c5c543e9a069',
    distanceToShrine: 0.1,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', 'Restaurant', 'Elevator'],
    reviews: 387,
    description: 'Premium accommodation with shrine views.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 48 hours'
  },
  {
    id: 3,
    name: 'Imam Ali Plaza',
    city: 'Najaf',
    rating: 4.6,
    price: 95,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1707172308283-e2d1e44d0be3',
    distanceToShrine: 0.3,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', 'Parking'],
    reviews: 198,
    description: 'Modern hotel near Imam Ali shrine.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 24 hours'
  }
];

export const flights = [
  {
    id: 1,
    airline: 'Iraqi Airways',
    from: 'London',
    to: 'Baghdad',
    departure: '2025-08-15T10:30:00',
    arrival: '2025-08-15T18:45:00',
    duration: '6h 15m',
    stops: 0,
    price: 450,
    currency: 'USD',
    class: 'Economy',
    seats: 12
  },
  {
    id: 2,
    airline: 'Emirates',
    from: 'London',
    to: 'Baghdad',
    departure: '2025-08-15T14:20:00',
    arrival: '2025-08-16T01:30:00',
    duration: '9h 10m',
    stops: 1,
    price: 520,
    currency: 'USD',
    class: 'Economy',
    seats: 8
  },
  {
    id: 3,
    airline: 'Iran Air',
    from: 'London',
    to: 'Mashhad',
    departure: '2025-08-20T08:00:00',
    arrival: '2025-08-20T18:30:00',
    duration: '8h 30m',
    stops: 1,
    price: 480,
    currency: 'USD',
    class: 'Economy',
    seats: 15
  }
];

export const upcomingGroups = [
  {
    id: 1,
    title: 'Karbala & Najaf Ziyarat - 7 Days',
    departure: '2025-08-15',
    return: '2025-08-22',
    price: 1250,
    currency: 'USD',
    seatsLeft: 8,
    totalSeats: 40,
    image: 'https://images.unsplash.com/photo-1631627412230-cf651d683bca',
    organizer: 'Al-Mahdi Travel',
    cities: ['Karbala', 'Najaf', 'Kufa'],
    inclusions: ['Flights', 'Hotels', 'Meals', 'Guide', 'Transport']
  },
  {
    id: 2,
    title: 'Arbaeen Pilgrimage Walk',
    departure: '2025-09-10',
    return: '2025-09-18',
    price: 890,
    currency: 'USD',
    seatsLeft: 3,
    totalSeats: 50,
    image: 'https://images.unsplash.com/photo-1761475878231-32efb0aeff5d',
    organizer: 'Husaini Tours',
    cities: ['Najaf', 'Karbala'],
    inclusions: ['Flights', 'Accommodation', 'Walking Support', 'Guide']
  },
  {
    id: 3,
    title: 'Mashhad & Qom Religious Tour',
    departure: '2025-09-01',
    return: '2025-09-10',
    price: 1580,
    currency: 'USD',
    seatsLeft: 15,
    totalSeats: 35,
    image: 'https://images.unsplash.com/photo-1536607961765-592e80bcc19e',
    organizer: 'Iran Pilgrimage Co.',
    cities: ['Mashhad', 'Qom', 'Tehran'],
    inclusions: ['Flights', 'Hotels', 'All Meals', 'Guide', 'Transport', 'Visa']
  }
];

export const packages = [
  {
    id: 1,
    title: 'Complete Iraq Ziyarat',
    duration: '10 Days',
    cities: ['Baghdad', 'Karbala', 'Najaf', 'Kufa', 'Samarra', 'Kadhimiya'],
    price: 1850,
    currency: 'USD',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1621165755176-17b7bc1bcd23',
    description: 'Comprehensive tour covering all major Shia shrines in Iraq',
    inclusions: ['Return Flights', '9 Nights Hotel', 'All Meals', 'English Guide', 'Transport', 'Visa Assistance'],
    itinerary: [
      { day: 1, title: 'Arrival in Baghdad', activities: ['Airport pickup', 'Hotel check-in', 'Rest'] },
      { day: 2, title: 'Kadhimiya Shrine', activities: ['Visit Imam Kadhim shrine', 'Local market tour'] },
      { day: 3, title: 'Travel to Karbala', activities: ['Imam Husain shrine', 'Al-Abbas shrine'] }
    ]
  },
  {
    id: 2,
    title: 'Iran Sacred Cities',
    duration: '8 Days',
    cities: ['Tehran', 'Mashhad', 'Qom'],
    price: 1650,
    currency: 'USD',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1495833066942-79abe24b0c1f',
    description: 'Spiritual journey through Iran\'s holiest cities',
    inclusions: ['Return Flights', '7 Nights Hotel', 'Breakfast & Dinner', 'Guide', 'Transport', 'Visa'],
    itinerary: [
      { day: 1, title: 'Arrive Tehran', activities: ['Airport transfer', 'City tour'] },
      { day: 2, title: 'Tehran Sightseeing', activities: ['Museums', 'Historical sites'] }
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Fatima Hassan',
    location: 'London, UK',
    rating: 5,
    text: 'Beautiful organization and spiritual experience. The guides were knowledgeable and respectful.',
    date: '2025-06-15',
    trip: 'Karbala & Najaf Ziyarat'
  },
  {
    id: 2,
    name: 'Ali Reza',
    location: 'Toronto, Canada',
    rating: 5,
    text: 'Seamless booking process and excellent accommodation near the shrines. Highly recommended!',
    date: '2025-05-20',
    trip: 'Mashhad Religious Tour'
  },
  {
    id: 3,
    name: 'Zahra Ahmed',
    location: 'Sydney, Australia',
    rating: 5,
    text: 'The Arbaeen walk was life-changing. Perfect support and guidance throughout.',
    date: '2025-04-10',
    trip: 'Arbaeen Pilgrimage'
  }
];

export const mockBookings = [
  {
    id: 'BK001',
    type: 'Group Tour',
    title: 'Karbala & Najaf Ziyarat - 7 Days',
    date: '2025-08-15',
    status: 'confirmed',
    price: 1250,
    currency: 'USD'
  },
  {
    id: 'BK002',
    type: 'Hotel',
    title: 'Al-Warith Hotel, Karbala',
    date: '2025-09-01',
    status: 'pending',
    price: 340,
    currency: 'USD'
  }
];