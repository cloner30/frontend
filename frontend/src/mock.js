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
  // Karbala Hotels
  {
    id: 1,
    name: 'Al-Warith Hotel',
    city: 'Karbala',
    country: 'Iraq',
    stars: 4,
    rating: 4.5,
    price: 85,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1707172308283-e2d1e44d0be3',
    images: [
      'https://images.unsplash.com/photo-1707172308283-e2d1e44d0be3',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      'https://images.unsplash.com/photo-1596436889106-be35e843f974'
    ],
    distanceToShrine: 0.2,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', 'Family Rooms', '24/7 Reception', 'Laundry'],
    reviews: 245,
    description: 'Comfortable hotel within walking distance of Imam Husain and Al-Abbas shrines. Perfect for families and pilgrims seeking proximity to holy sites.',
    fullDescription: 'Al-Warith Hotel offers comfortable accommodation for pilgrims visiting the holy shrines of Karbala. Located just 200 meters from Imam Husain Shrine, our hotel provides easy access to all major religious sites. We offer family rooms, prayer facilities, and halal breakfast options. Our staff speaks Arabic, English, and Urdu to assist international pilgrims.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 24 hours',
    tags: ['Popular', 'Family Friendly'],
    roomTypes: [
      { type: 'Standard Double', beds: '1 Double Bed', capacity: 2, price: 85 },
      { type: 'Family Room', beds: '2 Double Beds', capacity: 4, price: 140 },
      { type: 'Triple Room', beds: '3 Single Beds', capacity: 3, price: 115 }
    ],
    nearbyShrines: [
      { name: 'Imam Husain Shrine', distance: 0.2, walkTime: 3 },
      { name: 'Al-Abbas Shrine', distance: 0.4, walkTime: 6 }
    ],
    address: 'Al-Mukhayam Street, Old City, Karbala',
    phone: '+964 32 123 4567',
    email: 'info@alwarith-hotel.com'
  },
  {
    id: 2,
    name: 'Grand Husain Hotel',
    city: 'Karbala',
    country: 'Iraq',
    stars: 5,
    rating: 4.8,
    price: 120,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1607320895054-c5c543e9a069',
    images: [
      'https://images.unsplash.com/photo-1607320895054-c5c543e9a069',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b'
    ],
    distanceToShrine: 0.1,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', 'Restaurant', 'Elevator', 'Room Service', 'Shrine Views'],
    reviews: 387,
    description: 'Premium accommodation with direct shrine views and luxury amenities.',
    fullDescription: 'Experience luxury pilgrimage at Grand Husain Hotel. Our 5-star hotel offers unparalleled views of the golden dome of Imam Husain Shrine. With spacious rooms, fine dining restaurant serving halal cuisine, and dedicated prayer facilities on each floor, we ensure your spiritual journey is comfortable and memorable.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 48 hours',
    tags: ['Luxury', 'Best Value', 'Shrine Views'],
    roomTypes: [
      { type: 'Deluxe Room', beds: '1 King Bed', capacity: 2, price: 120 },
      { type: 'Shrine View Suite', beds: '1 King Bed', capacity: 2, price: 180 },
      { type: 'Family Suite', beds: '1 King + 2 Single', capacity: 4, price: 220 }
    ],
    nearbyShrines: [
      { name: 'Imam Husain Shrine', distance: 0.1, walkTime: 2 },
      { name: 'Al-Abbas Shrine', distance: 0.3, walkTime: 4 }
    ],
    address: 'Bab Baghdad Street, Karbala',
    phone: '+964 32 234 5678',
    email: 'reservations@grandhusain.com'
  },
  {
    id: 3,
    name: 'Karbala Rayhaan Hotel',
    city: 'Karbala',
    country: 'Iraq',
    stars: 4,
    rating: 4.3,
    price: 95,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304'
    ],
    distanceToShrine: 0.5,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', 'Parking', 'Airport Shuttle'],
    reviews: 156,
    description: 'Modern hotel with excellent facilities and free parking.',
    fullDescription: 'Karbala Rayhaan Hotel combines modern comfort with traditional hospitality. Our hotel features spacious rooms, complimentary breakfast buffet, and free shuttle service to the shrines. Ideal for pilgrims arriving by car with ample secure parking available.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 24 hours',
    tags: ['Free Parking'],
    roomTypes: [
      { type: 'Standard Twin', beds: '2 Single Beds', capacity: 2, price: 95 },
      { type: 'Family Room', beds: '1 Double + 2 Single', capacity: 4, price: 160 }
    ],
    nearbyShrines: [
      { name: 'Imam Husain Shrine', distance: 0.5, walkTime: 8 },
      { name: 'Al-Abbas Shrine', distance: 0.6, walkTime: 10 }
    ],
    address: 'Al-Hussainiya District, Karbala',
    phone: '+964 32 345 6789',
    email: 'info@karbalarayhaan.com'
  },

  // Najaf Hotels
  {
    id: 4,
    name: 'Imam Ali Plaza',
    city: 'Najaf',
    country: 'Iraq',
    stars: 4,
    rating: 4.6,
    price: 95,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1707172308283-e2d1e44d0be3',
    images: [
      'https://images.unsplash.com/photo-1707172308283-e2d1e44d0be3',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd'
    ],
    distanceToShrine: 0.3,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', 'Parking', 'Restaurant'],
    reviews: 198,
    description: 'Modern hotel near Imam Ali shrine with excellent amenities.',
    fullDescription: 'Imam Ali Plaza is strategically located near the holy shrine of Imam Ali. Our modern hotel offers comfortable rooms, traditional Iraqi cuisine in our restaurant, and a dedicated prayer area. Experience warm hospitality in the heart of Najaf.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 24 hours',
    tags: ['Popular', 'Near Shrine'],
    roomTypes: [
      { type: 'Standard Room', beds: '2 Single Beds', capacity: 2, price: 95 },
      { type: 'Triple Room', beds: '3 Single Beds', capacity: 3, price: 125 },
      { type: 'Quad Room', beds: '4 Single Beds', capacity: 4, price: 155 }
    ],
    nearbyShrines: [
      { name: 'Imam Ali Shrine', distance: 0.3, walkTime: 5 },
      { name: 'Wadi Al-Salam Cemetery', distance: 1.2, walkTime: 18 }
    ],
    address: 'Al-Rasul Street, Old Najaf',
    phone: '+964 33 123 4567',
    email: 'reservations@imamali-plaza.com'
  },
  {
    id: 5,
    name: 'Najaf Grand Hotel',
    city: 'Najaf',
    country: 'Iraq',
    stars: 5,
    rating: 4.7,
    price: 135,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461'
    ],
    distanceToShrine: 0.2,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', 'Restaurant', 'Spa', 'Gym', 'Concierge'],
    reviews: 412,
    description: 'Luxury 5-star hotel with spa and fine dining restaurant.',
    fullDescription: 'Najaf Grand Hotel sets the standard for luxury pilgrimage accommodation. Our 5-star property features elegantly appointed rooms, rooftop restaurant with shrine views, wellness spa, and personalized concierge services. Perfect for discerning travelers seeking comfort and spirituality.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 72 hours',
    tags: ['Luxury', 'Best Rated'],
    roomTypes: [
      { type: 'Deluxe Room', beds: '1 King Bed', capacity: 2, price: 135 },
      { type: 'Executive Suite', beds: '1 King Bed', capacity: 2, price: 195 },
      { type: 'Presidential Suite', beds: '1 King + Living Area', capacity: 3, price: 320 }
    ],
    nearbyShrines: [
      { name: 'Imam Ali Shrine', distance: 0.2, walkTime: 3 }
    ],
    address: 'Al-Quds Street, Central Najaf',
    phone: '+964 33 234 5678',
    email: 'info@najafgrand.com'
  },
  {
    id: 6,
    name: 'Al-Salam Hotel',
    city: 'Najaf',
    country: 'Iraq',
    stars: 3,
    rating: 4.2,
    price: 65,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061'
    ],
    distanceToShrine: 0.8,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', '24/7 Reception'],
    reviews: 89,
    description: 'Budget-friendly accommodation for pilgrims.',
    fullDescription: 'Al-Salam Hotel offers clean, comfortable rooms at affordable prices. While simple, we ensure all essential amenities for a pleasant pilgrimage stay. Free breakfast and prayer facilities included.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 24 hours',
    tags: ['Budget Friendly'],
    roomTypes: [
      { type: 'Standard Room', beds: '2 Single Beds', capacity: 2, price: 65 },
      { type: 'Family Room', beds: '4 Single Beds', capacity: 4, price: 110 }
    ],
    nearbyShrines: [
      { name: 'Imam Ali Shrine', distance: 0.8, walkTime: 12 }
    ],
    address: 'Al-Kufa Road, Najaf',
    phone: '+964 33 345 6789',
    email: 'info@alsalam-najaf.com'
  },

  // Mashhad Hotels (Iran)
  {
    id: 7,
    name: 'Mashhad Grand Hotel',
    city: 'Mashhad',
    country: 'Iran',
    stars: 5,
    rating: 4.9,
    price: 150,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      'https://images.unsplash.com/photo-1596436889106-be35e843f974'
    ],
    distanceToShrine: 0.15,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', 'Restaurant', 'Shrine Views', 'Concierge', 'Tea House'],
    reviews: 521,
    description: 'Prestigious hotel adjacent to Imam Reza Shrine with luxury amenities.',
    fullDescription: 'Mashhad Grand Hotel is the premier choice for pilgrims visiting Imam Reza Shrine. Located directly adjacent to the holy shrine complex, our hotel offers breathtaking views, traditional Persian hospitality, and modern luxury. Features include a Persian tea house, fine dining, and VIP shrine access.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 72 hours',
    tags: ['Luxury', 'Best Location', 'Shrine Views'],
    roomTypes: [
      { type: 'Superior Room', beds: '2 Single Beds', capacity: 2, price: 150 },
      { type: 'Shrine View Suite', beds: '1 King Bed', capacity: 2, price: 220 },
      { type: 'Royal Suite', beds: '1 King + Living Room', capacity: 4, price: 380 }
    ],
    nearbyShrines: [
      { name: 'Imam Reza Shrine', distance: 0.15, walkTime: 2 }
    ],
    address: 'Imam Reza Square, Mashhad',
    phone: '+98 51 3232 4567',
    email: 'reservations@mashhadgrand.ir'
  },
  {
    id: 8,
    name: 'Parsian Azadi Hotel',
    city: 'Mashhad',
    country: 'Iran',
    stars: 4,
    rating: 4.5,
    price: 95,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304'
    ],
    distanceToShrine: 0.4,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', 'Restaurant', 'Pool', 'Gym'],
    reviews: 287,
    description: 'Modern hotel with swimming pool and fitness center.',
    fullDescription: 'Parsian Azadi Hotel offers contemporary comfort near Imam Reza Shrine. Enjoy our indoor pool, fitness center, and multiple dining options. Perfect for families seeking both comfort and spirituality.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 48 hours',
    tags: ['Popular', 'Family Friendly'],
    roomTypes: [
      { type: 'Standard Room', beds: '2 Single Beds', capacity: 2, price: 95 },
      { type: 'Family Room', beds: '1 Double + 2 Single', capacity: 4, price: 165 }
    ],
    nearbyShrines: [
      { name: 'Imam Reza Shrine', distance: 0.4, walkTime: 6 }
    ],
    address: 'Tabarsi Street, Mashhad',
    phone: '+98 51 3345 6789',
    email: 'info@parsianazadi.ir'
  },

  // Qom Hotels (Iran)
  {
    id: 9,
    name: 'Qom International Hotel',
    city: 'Qom',
    country: 'Iran',
    stars: 4,
    rating: 4.4,
    price: 80,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    ],
    distanceToShrine: 0.5,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', 'Restaurant', 'Parking'],
    reviews: 142,
    description: 'Comfortable hotel near Fatima Masumeh Shrine.',
    fullDescription: 'Qom International Hotel provides excellent accommodation for pilgrims visiting the shrine of Hazrat Masumeh. Our hotel features traditional Persian architecture with modern amenities, serving authentic Iranian cuisine.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 24 hours',
    tags: ['Popular'],
    roomTypes: [
      { type: 'Standard Room', beds: '2 Single Beds', capacity: 2, price: 80 },
      { type: 'Triple Room', beds: '3 Single Beds', capacity: 3, price: 110 }
    ],
    nearbyShrines: [
      { name: 'Fatima Masumeh Shrine', distance: 0.5, walkTime: 7 }
    ],
    address: 'Astane Square, Qom',
    phone: '+98 25 3712 3456',
    email: 'info@qominternational.ir'
  },
  {
    id: 10,
    name: 'Kowsar Hotel',
    city: 'Qom',
    country: 'Iran',
    stars: 3,
    rating: 4.1,
    price: 55,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061',
    images: [
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061'
    ],
    distanceToShrine: 0.8,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room'],
    reviews: 76,
    description: 'Affordable lodging for budget-conscious pilgrims.',
    fullDescription: 'Kowsar Hotel offers clean, simple accommodation at reasonable prices. While basic, we ensure all essential amenities for a comfortable pilgrimage stay.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 24 hours',
    tags: ['Budget Friendly'],
    roomTypes: [
      { type: 'Standard Room', beds: '2 Single Beds', capacity: 2, price: 55 },
      { type: 'Family Room', beds: '4 Single Beds', capacity: 4, price: 95 }
    ],
    nearbyShrines: [
      { name: 'Fatima Masumeh Shrine', distance: 0.8, walkTime: 12 }
    ],
    address: 'Shohada Street, Qom',
    phone: '+98 25 3623 4567',
    email: 'info@kowsarhotel.ir'
  },

  // Kadhimiya Hotels (Baghdad)
  {
    id: 11,
    name: 'Al-Kadhimiya Palace Hotel',
    city: 'Kadhimiya',
    country: 'Iraq',
    stars: 4,
    rating: 4.4,
    price: 90,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32'
    ],
    distanceToShrine: 0.3,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', 'Restaurant', 'Elevator'],
    reviews: 167,
    description: 'Well-appointed hotel near Al-Kadhimiya Shrine.',
    fullDescription: 'Al-Kadhimiya Palace Hotel offers comfortable accommodation in the historic Kadhimiya district. Close to the shrine of Imam Musa al-Kadhim and Imam Muhammad al-Jawad, our hotel provides easy access to religious sites and Baghdad attractions.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 24 hours',
    tags: ['Near Shrine'],
    roomTypes: [
      { type: 'Standard Room', beds: '2 Single Beds', capacity: 2, price: 90 },
      { type: 'Family Room', beds: '1 Double + 2 Single', capacity: 4, price: 145 }
    ],
    nearbyShrines: [
      { name: 'Al-Kadhimiya Shrine', distance: 0.3, walkTime: 5 }
    ],
    address: 'Al-Kadhimiya District, Baghdad',
    phone: '+964 1 523 4567',
    email: 'info@kadhimiyapalace.com'
  },

  // Samarra Hotels
  {
    id: 12,
    name: 'Al-Askari Hotel',
    city: 'Samarra',
    country: 'Iraq',
    stars: 3,
    rating: 4.0,
    price: 70,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    ],
    distanceToShrine: 0.4,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', 'Parking'],
    reviews: 94,
    description: 'Simple accommodation near Al-Askari Shrine.',
    fullDescription: 'Al-Askari Hotel provides basic but comfortable lodging for pilgrims visiting the holy Al-Askari Shrine in Samarra. We offer clean rooms, halal breakfast, and helpful staff to assist with your pilgrimage.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 24 hours',
    tags: ['Near Shrine'],
    roomTypes: [
      { type: 'Standard Room', beds: '2 Single Beds', capacity: 2, price: 70 },
      { type: 'Triple Room', beds: '3 Single Beds', capacity: 3, price: 95 }
    ],
    nearbyShrines: [
      { name: 'Al-Askari Shrine', distance: 0.4, walkTime: 6 }
    ],
    address: 'Al-Mu\'tasim Street, Samarra',
    phone: '+964 6 854 3210',
    email: 'info@alaskarihotel.com'
  },

  // Additional Karbala Hotels
  {
    id: 13,
    name: 'Safir Al-Zahra Hotel',
    city: 'Karbala',
    country: 'Iraq',
    stars: 4,
    rating: 4.4,
    price: 100,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd',
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    ],
    distanceToShrine: 0.3,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', 'Family Rooms', 'Restaurant', 'Laundry'],
    reviews: 203,
    description: 'Family-friendly hotel with spacious rooms near the shrines.',
    fullDescription: 'Safir Al-Zahra Hotel specializes in family accommodation with large rooms and child-friendly facilities. Located in the heart of Karbala, we offer easy access to both shrines and local markets.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 48 hours',
    tags: ['Family Friendly', 'Popular'],
    roomTypes: [
      { type: 'Standard Double', beds: '1 Double Bed', capacity: 2, price: 100 },
      { type: 'Family Suite', beds: '2 Double Beds', capacity: 5, price: 175 },
      { type: 'Connecting Rooms', beds: '2 Rooms Connected', capacity: 6, price: 195 }
    ],
    nearbyShrines: [
      { name: 'Imam Husain Shrine', distance: 0.3, walkTime: 5 },
      { name: 'Al-Abbas Shrine', distance: 0.5, walkTime: 7 }
    ],
    address: 'Al-Imam Street, Karbala',
    phone: '+964 32 456 7890',
    email: 'reservations@safiralzahra.com'
  },

  // Additional Najaf Hotels
  {
    id: 14,
    name: 'Najaf Harmony Hotel',
    city: 'Najaf',
    country: 'Iraq',
    stars: 4,
    rating: 4.3,
    price: 88,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    ],
    distanceToShrine: 0.6,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', 'Parking', 'Airport Shuttle', '24/7 Reception'],
    reviews: 134,
    description: 'Modern hotel with free airport shuttle service.',
    fullDescription: 'Najaf Harmony Hotel offers convenient accommodation with complimentary airport transfers. Perfect for international pilgrims arriving at Najaf Airport. We provide comfortable rooms and helpful multilingual staff.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 24 hours',
    tags: ['Free Shuttle', 'Airport Transfer'],
    roomTypes: [
      { type: 'Standard Room', beds: '2 Single Beds', capacity: 2, price: 88 },
      { type: 'Executive Room', beds: '1 King Bed', capacity: 2, price: 115 },
      { type: 'Family Room', beds: '1 Double + 2 Single', capacity: 4, price: 155 }
    ],
    nearbyShrines: [
      { name: 'Imam Ali Shrine', distance: 0.6, walkTime: 9 }
    ],
    address: 'Airport Road, Najaf',
    phone: '+964 33 456 7890',
    email: 'info@najafharmony.com'
  },

  // Additional Mashhad Hotels
  {
    id: 15,
    name: 'Sepehr Hotel Mashhad',
    city: 'Mashhad',
    country: 'Iran',
    stars: 3,
    rating: 4.2,
    price: 70,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061',
    images: [
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061'
    ],
    distanceToShrine: 1.0,
    amenities: ['Free WiFi', 'Breakfast', 'AC', 'Prayer Room', 'Restaurant'],
    reviews: 118,
    description: 'Affordable hotel with traditional Persian hospitality.',
    fullDescription: 'Sepehr Hotel offers budget-friendly accommodation without compromising on comfort. Experience traditional Iranian hospitality with modern amenities. Our restaurant serves delicious Persian cuisine.',
    policies: 'Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 24 hours',
    tags: ['Budget Friendly', 'Good Value'],
    roomTypes: [
      { type: 'Standard Room', beds: '2 Single Beds', capacity: 2, price: 70 },
      { type: 'Triple Room', beds: '3 Single Beds', capacity: 3, price: 95 }
    ],
    nearbyShrines: [
      { name: 'Imam Reza Shrine', distance: 1.0, walkTime: 15 }
    ],
    address: 'Shirazi Street, Mashhad',
    phone: '+98 51 3856 7890',
    email: 'info@sepehrmashhad.ir'
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
    departure: '2025-12-15',
    return: '2025-12-22',
    duration: 7,
    price: 1250,
    currency: 'USD',
    seatsLeft: 8,
    totalSeats: 40,
    image: 'https://images.unsplash.com/photo-1631627412230-cf651d683bca',
    organizer: 'Al-Mahdi Travel',
    organizerRating: 4.8,
    organizerReviews: 156,
    cities: ['Karbala', 'Najaf', 'Kufa'],
    country: 'Iraq',
    departureCity: 'London',
    inclusions: ['Return Flights', '4-Star Hotels', 'All Meals', 'English Guide', 'Private Transport', 'Visa Assistance'],
    exclusions: ['Travel Insurance', 'Personal Expenses', 'Tips'],
    highlights: ['Visit Imam Husain Shrine', 'Visit Imam Ali Shrine', 'Wadi Al-Salam Cemetery', 'Kufa Mosque'],
    status: 'filling-fast',
    specialEvent: null,
    itinerary: [
      { day: 1, title: 'Arrival in Najaf', description: 'Airport pickup, hotel check-in, evening orientation', meals: ['Dinner'] },
      { day: 2, title: 'Najaf Holy Sites', description: 'Visit Imam Ali Shrine, Wadi Al-Salam Cemetery, Kufa Mosque', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 3, title: 'Travel to Karbala', description: 'Journey to Karbala, visit Imam Husain and Al-Abbas Shrines', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 4, title: 'Karbala Exploration', description: 'Full day at the shrines, attend majlis, evening ziyarat', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 5, title: 'Karbala & Najaf', description: 'Morning in Karbala, return to Najaf in afternoon', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 6, title: 'Free Day in Najaf', description: 'Personal time for prayer and reflection, optional shopping', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 7, title: 'Departure', description: 'Morning prayer, airport transfer', meals: ['Breakfast'] }
    ],
    reviews: [
      { name: 'Sarah Ahmed', rating: 5, comment: 'Life-changing experience! The guide was knowledgeable and the hotels were excellent.', date: '2024-10-15' },
      { name: 'Ali Hassan', rating: 5, comment: 'Well organized tour. Everything went smoothly from start to finish.', date: '2024-09-20' }
    ]
  },
  {
    id: 2,
    title: 'Arbaeen Pilgrimage Walk - 9 Days',
    departure: '2025-01-10',
    return: '2025-01-18',
    duration: 9,
    price: 890,
    currency: 'USD',
    seatsLeft: 3,
    totalSeats: 50,
    image: 'https://images.unsplash.com/photo-1761475878231-32efb0aeff5d',
    organizer: 'Husaini Tours',
    organizerRating: 4.9,
    organizerReviews: 203,
    cities: ['Najaf', 'Karbala'],
    country: 'Iraq',
    departureCity: 'Manchester',
    inclusions: ['Return Flights', 'Basic Accommodation', 'Walking Support', 'Medical Team', 'Meals During Walk', 'Guide'],
    exclusions: ['Hotel Accommodation', 'Travel Insurance', 'Personal Expenses'],
    highlights: ['Complete Arbaeen Walk', 'Join Millions of Pilgrims', 'Experience Spiritual Journey', '24/7 Medical Support'],
    status: 'almost-full',
    specialEvent: 'Arbaeen',
    itinerary: [
      { day: 1, title: 'Arrival & Preparation', description: 'Arrive in Najaf, collect walking supplies, orientation meeting', meals: ['Dinner'] },
      { day: 2, title: 'Start of Walk', description: 'Begin Arbaeen walk from Najaf towards Karbala (15km)', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 3, title: 'Walking Day 2', description: 'Continue walk, visit mawakib (service stations), experience hospitality (18km)', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 4, title: 'Walking Day 3', description: 'Midpoint of journey, group reflection, evening rest (20km)', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 5, title: 'Walking Day 4', description: 'Continue towards Karbala, experience unity of pilgrims (18km)', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 6, title: 'Arrival in Karbala', description: 'Complete final stretch, arrive at Imam Husain Shrine (15km)', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 7, title: 'Arbaeen Day', description: 'Participate in Arbaeen ceremonies, full day at shrines', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 8, title: 'Rest & Reflection', description: 'Recovery day, personal prayer time, evening majlis', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 9, title: 'Departure', description: 'Morning ziyarat, airport transfer from Najaf', meals: ['Breakfast'] }
    ],
    reviews: [
      { name: 'Zahra Hussain', rating: 5, comment: 'Most spiritual experience of my life. The support team was amazing throughout the walk.', date: '2024-08-25' },
      { name: 'Ibrahim Ali', rating: 5, comment: 'Perfectly organized. Medical support was excellent and the mawakib were very welcoming.', date: '2024-08-20' }
    ]
  },
  {
    id: 3,
    title: 'Mashhad & Qom Sacred Journey - 10 Days',
    departure: '2025-12-01',
    return: '2025-12-10',
    duration: 10,
    price: 1580,
    currency: 'USD',
    seatsLeft: 15,
    totalSeats: 35,
    image: 'https://images.unsplash.com/photo-1536607961765-592e80bcc19e',
    organizer: 'Iran Pilgrimage Co.',
    organizerRating: 4.7,
    organizerReviews: 124,
    cities: ['Tehran', 'Mashhad', 'Qom'],
    country: 'Iran',
    departureCity: 'London',
    inclusions: ['Return Flights', '4-Star Hotels', 'All Meals', 'Farsi/English Guide', 'Transport', 'Iran Visa', 'Travel Insurance'],
    exclusions: ['UK Visa (if required)', 'Personal Expenses', 'Optional Tours'],
    highlights: ['Imam Reza Shrine', 'Hazrat Masumeh Shrine', 'Jamkaran Mosque', 'Persian Cultural Experience'],
    status: 'available',
    specialEvent: null,
    itinerary: [
      { day: 1, title: 'Arrive Tehran', description: 'Airport pickup, hotel check-in, Tehran city tour', meals: ['Dinner'] },
      { day: 2, title: 'Tehran Exploration', description: 'National Museum, Golestan Palace, Grand Bazaar', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 3, title: 'Fly to Mashhad', description: 'Morning flight, afternoon visit to Imam Reza Shrine', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 4, title: 'Mashhad Holy Sites', description: 'Full day at Imam Reza Shrine complex, museum visits', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 5, title: 'Mashhad Continued', description: 'Morning prayers, Khosrogird village, evening ziyarat', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 6, title: 'Travel to Qom', description: 'Journey to Qom, visit Hazrat Masumeh Shrine', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 7, title: 'Qom Sacred Sites', description: 'Jamkaran Mosque, religious seminaries, evening prayers', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 8, title: 'Return to Tehran', description: 'Drive back to Tehran, shopping and leisure', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 9, title: 'Tehran Free Day', description: 'Personal time for shopping or additional sightseeing', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 10, title: 'Departure', description: 'Morning transfer to airport', meals: ['Breakfast'] }
    ],
    reviews: [
      { name: 'Fatima Naqvi', rating: 5, comment: 'Wonderful tour of Iran. The shrines were breathtaking and the guide was excellent.', date: '2024-11-10' }
    ]
  },
  {
    id: 4,
    title: 'Complete Iraq Grand Tour - 12 Days',
    departure: '2025-12-20',
    return: '2025-12-31',
    duration: 12,
    price: 1850,
    currency: 'USD',
    seatsLeft: 12,
    totalSeats: 30,
    image: 'https://images.unsplash.com/photo-1711594937687-eed59068e043',
    organizer: 'Al-Mahdi Travel',
    organizerRating: 4.8,
    organizerReviews: 156,
    cities: ['Baghdad', 'Karbala', 'Najaf', 'Samarra', 'Kadhimiya'],
    country: 'Iraq',
    departureCity: 'London',
    inclusions: ['Return Flights', '5-Star Hotels', 'All Meals', 'English/Arabic Guide', 'Private Bus', 'All Entry Fees', 'Visa'],
    exclusions: ['Travel Insurance', 'Personal Shopping', 'Tips for Guide/Driver'],
    highlights: ['All Major Shrines', 'Baghdad Historical Sites', 'Al-Askari Shrine', 'Comprehensive Iraq Experience'],
    status: 'available',
    specialEvent: null,
    itinerary: [
      { day: 1, title: 'Arrive Baghdad', description: 'Airport transfer, 5-star hotel check-in, welcome dinner', meals: ['Dinner'] },
      { day: 2, title: 'Baghdad Heritage', description: 'Visit historical sites, museums, evening at Tigris River', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 3, title: 'Kadhimiya Shrine', description: 'Visit Imam Kadhim shrine, local markets', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 4, title: 'Travel to Samarra', description: 'Visit Al-Askari Shrine, Great Mosque of Samarra', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 5, title: 'Journey to Karbala', description: 'Travel to Karbala, afternoon ziyarat', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 6, title: 'Karbala Holy Sites', description: 'Full day at Imam Husain and Al-Abbas Shrines', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 7, title: 'Karbala Continued', description: 'Morning prayers, attend majlis, evening ziyarat', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 8, title: 'Travel to Najaf', description: 'Journey to Najaf, visit Imam Ali Shrine', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 9, title: 'Najaf Exploration', description: 'Wadi Al-Salam, Kufa Mosque, Prophet Hud shrine', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 10, title: 'Najaf Free Day', description: 'Personal time for prayer and reflection', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 11, title: 'Return to Baghdad', description: 'Travel back to Baghdad, farewell dinner', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 12, title: 'Departure', description: 'Morning checkout, airport transfer', meals: ['Breakfast'] }
    ],
    reviews: [
      { name: 'Ahmed Raza', rating: 5, comment: 'The most comprehensive tour of Iraq. Covered everything we wanted to see!', date: '2024-11-01' },
      { name: 'Maryam Khan', rating: 4, comment: 'Excellent organization, only wish we had more time in each city.', date: '2024-10-28' }
    ]
  },
  {
    id: 5,
    title: 'Budget Karbala & Najaf - 5 Days',
    departure: '2025-12-08',
    return: '2025-12-12',
    duration: 5,
    price: 750,
    currency: 'USD',
    seatsLeft: 22,
    totalSeats: 45,
    image: 'https://images.unsplash.com/photo-1761474758252-6af7f4d61868',
    organizer: 'Pilgrim Express',
    organizerRating: 4.5,
    organizerReviews: 89,
    cities: ['Karbala', 'Najaf'],
    country: 'Iraq',
    departureCity: 'Birmingham',
    inclusions: ['Return Flights', '3-Star Hotels', 'Breakfast Daily', 'Group Transport', 'Basic Guide Service'],
    exclusions: ['Lunch & Dinner', 'Travel Insurance', 'Visa Fees', 'Personal Expenses'],
    highlights: ['Affordable Pilgrimage', 'Main Shrines Covered', 'Perfect for Budget Travelers'],
    status: 'available',
    specialEvent: null,
    itinerary: [
      { day: 1, title: 'Arrive Najaf', description: 'Airport pickup, hotel check-in, evening ziyarat', meals: ['Breakfast'] },
      { day: 2, title: 'Najaf Full Day', description: 'Visit Imam Ali Shrine, Wadi Al-Salam, free time', meals: ['Breakfast'] },
      { day: 3, title: 'Travel to Karbala', description: 'Morning departure, visit both shrines', meals: ['Breakfast'] },
      { day: 4, title: 'Karbala Full Day', description: 'Full day at the holy shrines, attend majlis', meals: ['Breakfast'] },
      { day: 5, title: 'Departure', description: 'Morning prayer, airport transfer from Najaf', meals: ['Breakfast'] }
    ],
    reviews: [
      { name: 'Hassan Ali', rating: 4, comment: 'Great budget option. Hotels were basic but clean. Perfect for young travelers.', date: '2024-10-15' }
    ]
  },
  {
    id: 6,
    title: 'Luxury Iran Experience - 14 Days',
    departure: '2026-01-05',
    return: '2026-01-18',
    duration: 14,
    price: 2450,
    currency: 'USD',
    seatsLeft: 8,
    totalSeats: 20,
    image: 'https://images.unsplash.com/photo-1600356199555-0c66edfcef53',
    organizer: 'Premium Pilgrim Services',
    organizerRating: 4.9,
    organizerReviews: 67,
    cities: ['Tehran', 'Mashhad', 'Qom', 'Shiraz', 'Isfahan'],
    country: 'Iran',
    departureCity: 'London',
    inclusions: ['Business Class Flights', '5-Star Hotels', 'All Meals', 'Private Guide', 'Luxury Transport', 'VIP Shrine Access', 'Full Visa Service', 'Travel Insurance'],
    exclusions: ['Personal Shopping', 'Optional Private Tours'],
    highlights: ['VIP Treatment', 'Business Class Flights', '5-Star Accommodation', 'Cultural & Religious Sites'],
    status: 'filling-fast',
    specialEvent: null,
    itinerary: [
      { day: 1, title: 'Arrive Tehran (VIP)', description: 'VIP airport service, 5-star hotel, welcome reception', meals: ['Dinner'] },
      { day: 2, title: 'Tehran Premium Tour', description: 'Private tours of palaces and museums', meals: ['Breakfast', 'Lunch', 'Dinner'] }
    ],
    reviews: []
  },
  {
    id: 7,
    title: 'Iraq & Iran Combined - 16 Days',
    departure: '2026-01-15',
    return: '2026-01-30',
    duration: 16,
    price: 2650,
    currency: 'USD',
    seatsLeft: 10,
    totalSeats: 25,
    image: 'https://images.unsplash.com/photo-1629206755907-d0e179c07dd6',
    organizer: 'Al-Mahdi Travel',
    organizerRating: 4.8,
    organizerReviews: 156,
    cities: ['Baghdad', 'Karbala', 'Najaf', 'Tehran', 'Mashhad', 'Qom'],
    country: 'Iraq & Iran',
    departureCity: 'London',
    inclusions: ['All Flights', '4-Star Hotels', 'All Meals', 'Guides in Both Countries', 'All Transport', 'Both Visas', 'Travel Insurance'],
    exclusions: ['Personal Expenses', 'Optional Tours', 'Tips'],
    highlights: ['Complete Pilgrimage', 'Both Countries', 'All Major Shrines', 'Comprehensive Experience'],
    status: 'available',
    specialEvent: null,
    itinerary: [
      { day: 1, title: 'Arrive Baghdad', description: 'Start of Iraq portion of tour', meals: ['Dinner'] }
    ],
    reviews: []
  },
  {
    id: 8,
    title: 'Najaf Intensive - 6 Days',
    departure: '2025-12-27',
    return: '2026-01-01',
    duration: 6,
    price: 880,
    currency: 'USD',
    seatsLeft: 18,
    totalSeats: 35,
    image: 'https://images.unsplash.com/photo-1761474758252-6af7f4d61868',
    organizer: 'Husaini Tours',
    organizerRating: 4.9,
    organizerReviews: 203,
    cities: ['Najaf', 'Kufa'],
    country: 'Iraq',
    departureCity: 'Manchester',
    inclusions: ['Return Flights', '3-Star Hotels', 'All Meals', 'Scholarly Guide', 'Transport', 'Seminary Visits'],
    exclusions: ['Travel Insurance', 'Personal Expenses'],
    highlights: ['Deep Spiritual Focus', 'Najaf Seminary Visits', 'Meet Scholars', 'Extended Prayer Time'],
    status: 'available',
    specialEvent: null,
    itinerary: [
      { day: 1, title: 'Arrive & Settle', description: 'Airport transfer, orientation', meals: ['Dinner'] },
      { day: 2, title: 'Imam Ali Shrine', description: 'Full day ziyarat and prayer', meals: ['Breakfast', 'Lunch', 'Dinner'] }
    ],
    reviews: []
  },
  {
    id: 9,
    title: 'Karbala Ashura Special - 8 Days',
    departure: '2025-07-05',
    return: '2025-07-12',
    duration: 8,
    price: 1350,
    currency: 'USD',
    seatsLeft: 5,
    totalSeats: 40,
    image: 'https://images.unsplash.com/photo-1711594937687-eed59068e043',
    organizer: 'Husaini Tours',
    organizerRating: 4.9,
    organizerReviews: 203,
    cities: ['Karbala', 'Najaf'],
    country: 'Iraq',
    departureCity: 'London',
    inclusions: ['Return Flights', '4-Star Hotels', 'All Meals', 'Ashura Programs Access', 'Guide', 'Transport'],
    exclusions: ['Travel Insurance', 'Personal Expenses'],
    highlights: ['Witness Ashura Ceremonies', 'Attend Majalis', 'Historical Reenactments', 'Special Programs'],
    status: 'almost-full',
    specialEvent: 'Ashura',
    itinerary: [
      { day: 1, title: 'Arrive Karbala', description: 'Check-in, evening preparation', meals: ['Dinner'] }
    ],
    reviews: []
  },
  {
    id: 10,
    title: 'Mashhad Weekend - 5 Days',
    departure: '2025-12-18',
    return: '2025-12-22',
    duration: 5,
    price: 950,
    currency: 'USD',
    seatsLeft: 14,
    totalSeats: 30,
    image: 'https://images.unsplash.com/photo-1600356199555-0c66edfcef53',
    organizer: 'Iran Pilgrimage Co.',
    organizerRating: 4.7,
    organizerReviews: 124,
    cities: ['Mashhad'],
    country: 'Iran',
    departureCity: 'London',
    inclusions: ['Return Flights', '4-Star Hotels', 'Breakfast & Dinner', 'Guide', 'Airport Transfers', 'Iran Visa'],
    exclusions: ['Lunch', 'Travel Insurance', 'Personal Expenses'],
    highlights: ['Quick Pilgrimage', 'Imam Reza Shrine Focus', 'Perfect Weekend Trip'],
    status: 'available',
    specialEvent: null,
    itinerary: [
      { day: 1, title: 'Arrive Mashhad', description: 'Airport pickup, hotel, evening ziyarat', meals: ['Dinner'] }
    ],
    reviews: []
  },
  {
    id: 11,
    title: 'Ramadan Special Iraq - 10 Days',
    departure: '2025-03-01',
    return: '2025-03-10',
    duration: 10,
    price: 1450,
    currency: 'USD',
    seatsLeft: 20,
    totalSeats: 50,
    image: 'https://images.unsplash.com/photo-1631627412230-cf651d683bca',
    organizer: 'Al-Mahdi Travel',
    organizerRating: 4.8,
    organizerReviews: 156,
    cities: ['Karbala', 'Najaf', 'Baghdad'],
    country: 'Iraq',
    departureCity: 'Birmingham',
    inclusions: ['Return Flights', '4-Star Hotels', 'Suhoor & Iftar', 'Ramadan Programs', 'Guide', 'Transport'],
    exclusions: ['Travel Insurance', 'Personal Expenses'],
    highlights: ['Ramadan in Holy Cities', 'Special Iftar Arrangements', 'Night Prayers', 'Laylat al-Qadr Programs'],
    status: 'early-bird',
    specialEvent: 'Ramadan',
    itinerary: [
      { day: 1, title: 'Arrive Najaf', description: 'Settle in for Ramadan', meals: ['Suhoor', 'Iftar'] }
    ],
    reviews: []
  },
  {
    id: 12,
    title: 'Qom Scholarly Tour - 7 Days',
    departure: '2026-01-20',
    return: '2026-01-26',
    duration: 7,
    price: 1180,
    currency: 'USD',
    seatsLeft: 16,
    totalSeats: 25,
    image: 'https://images.unsplash.com/photo-1700130375571-8f2eca1b825e',
    organizer: 'Iran Pilgrimage Co.',
    organizerRating: 4.7,
    organizerReviews: 124,
    cities: ['Qom', 'Tehran'],
    country: 'Iran',
    departureCity: 'Manchester',
    inclusions: ['Return Flights', '3-Star Hotels', 'All Meals', 'Seminary Tours', 'Scholar Meetings', 'Guide', 'Visa'],
    exclusions: ['Travel Insurance', 'Personal Expenses'],
    highlights: ['Visit Seminaries', 'Meet Scholars', 'Jamkaran Mosque', 'Educational Focus'],
    status: 'available',
    specialEvent: null,
    itinerary: [
      { day: 1, title: 'Arrive Qom', description: 'Introduction to holy city', meals: ['Dinner'] }
    ],
    reviews: []
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