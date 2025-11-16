"""
Data Migration Script
Migrates data from frontend mock.js and iraqZiyaratData.js to MongoDB
"""
import asyncio
import os
import sys
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pathlib import Path
import uuid

# Add backend to path for imports
sys.path.append(str(Path(__file__).parent))

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]


async def migrate_cities():
    """Migrate cities from mock.js"""
    print("Migrating cities...")
    
    cities_data = [
        {
            "id": "1",
            "name": "Karbala",
            "country": "Iraq",
            "description": "Holy city and shrine of Imam Husain",
            "image": "https://images.unsplash.com/photo-1711594937687-eed59068e043",
            "popularPlaces": 5,
            "hotels": 28
        },
        {
            "id": "2",
            "name": "Najaf",
            "country": "Iraq",
            "description": "Holy shrine of Imam Ali",
            "image": "https://images.unsplash.com/photo-1761474758252-6af7f4d61868",
            "popularPlaces": 4,
            "hotels": 22
        },
        {
            "id": "3",
            "name": "Mashhad",
            "country": "Iran",
            "description": "Shrine of Imam Reza",
            "image": "https://images.unsplash.com/photo-1600356199555-0c66edfcef53",
            "popularPlaces": 6,
            "hotels": 45
        },
        {
            "id": "4",
            "name": "Qom",
            "country": "Iran",
            "description": "Shrine of Fatima Masumeh",
            "image": "https://images.unsplash.com/photo-1700130375571-8f2eca1b825e",
            "popularPlaces": 3,
            "hotels": 18
        },
        {
            "id": "5",
            "name": "Kadhimiya",
            "country": "Iraq",
            "description": "Shrine of Imam Musa al-Kadhim",
            "image": "https://images.unsplash.com/photo-1629206755907-d0e179c07dd6",
            "popularPlaces": 3,
            "hotels": 15
        },
        {
            "id": "6",
            "name": "Samarra",
            "country": "Iraq",
            "description": "Al-Askari Shrine",
            "image": "https://images.unsplash.com/photo-1761475461178-ec5fea65a1a2",
            "popularPlaces": 2,
            "hotels": 12
        }
    ]
    
    await db.cities.delete_many({})
    await db.cities.insert_many(cities_data)
    print(f"✓ Migrated {len(cities_data)} cities")


async def migrate_ziyarat_places():
    """Migrate ziyarat places from mock.js"""
    print("Migrating ziyarat places...")
    
    places_data = [
        {
            "id": "1",
            "cityId": "1",
            "name": "Imam Husain Shrine",
            "description": "The holiest shrine for Shia Muslims, dedicated to Imam Husain, the grandson of Prophet Muhammad.",
            "visitingTips": "Dress modestly. Women must wear abaya and hijab. Photography restrictions apply inside.",
            "accessibility": "Wheelchair accessible entrances and prayer areas available.",
            "prayerTimes": ["Fajr: 4:45 AM", "Dhuhr: 12:15 PM", "Asr: 3:30 PM", "Maghrib: 6:10 PM", "Isha: 7:30 PM"],
            "distance": 0,
            "image": "https://images.unsplash.com/photo-1711594937687-eed59068e043"
        },
        {
            "id": "2",
            "cityId": "1",
            "name": "Al-Abbas Shrine",
            "description": "Beautiful golden-domed shrine of Abbas ibn Ali, brother of Imam Husain.",
            "visitingTips": "Connected to Imam Husain shrine by walkway. Visit both shrines in sequence.",
            "accessibility": "Fully accessible with ramps and elevators.",
            "prayerTimes": ["Fajr: 4:45 AM", "Dhuhr: 12:15 PM", "Asr: 3:30 PM", "Maghrib: 6:10 PM", "Isha: 7:30 PM"],
            "distance": 0.3,
            "image": "https://images.unsplash.com/photo-1629206755907-d0e179c07dd6"
        },
        {
            "id": "3",
            "cityId": "2",
            "name": "Imam Ali Shrine",
            "description": "The magnificent shrine of Imam Ali, first Shia Imam and cousin of Prophet Muhammad.",
            "visitingTips": "Best visited early morning or late evening. Very crowded on Fridays.",
            "accessibility": "Wheelchair accessible. Special prayer areas for elderly.",
            "prayerTimes": ["Fajr: 4:50 AM", "Dhuhr: 12:20 PM", "Asr: 3:35 PM", "Maghrib: 6:15 PM", "Isha: 7:35 PM"],
            "distance": 0,
            "image": "https://images.unsplash.com/photo-1761474758252-6af7f4d61868"
        },
        {
            "id": "4",
            "cityId": "2",
            "name": "Wadi Al-Salam Cemetery",
            "description": "The largest cemetery in the world, where millions of Shia Muslims are buried.",
            "visitingTips": "Hire a local guide. Bring water and wear comfortable shoes.",
            "accessibility": "Limited accessibility due to terrain.",
            "prayerTimes": ["Open for visitation during all prayer times"],
            "distance": 2.5,
            "image": "https://images.unsplash.com/photo-1724051526928-ae6f5d53bead"
        }
    ]
    
    await db.ziyarat_places.delete_many({})
    await db.ziyarat_places.insert_many(places_data)
    print(f"✓ Migrated {len(places_data)} ziyarat places")


async def migrate_hotels():
    """Migrate hotels from mock.js - sample data"""
    print("Migrating hotels (sample)...")
    
    # Sample hotels - we'll migrate a few representative ones
    hotels_data = [
        {
            "id": "1",
            "name": "Al-Warith Hotel",
            "city": "Karbala",
            "country": "Iraq",
            "stars": 4,
            "rating": 4.5,
            "price": 85,
            "currency": "USD",
            "image": "https://images.unsplash.com/photo-1707172308283-e2d1e44d0be3",
            "images": [
                "https://images.unsplash.com/photo-1707172308283-e2d1e44d0be3",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
                "https://images.unsplash.com/photo-1596436889106-be35e843f974"
            ],
            "distanceToShrine": 0.2,
            "amenities": ["Free WiFi", "Breakfast", "AC", "Prayer Room", "Family Rooms", "24/7 Reception", "Laundry"],
            "reviews": 245,
            "description": "Comfortable hotel within walking distance of Imam Husain and Al-Abbas shrines.",
            "fullDescription": "Al-Warith Hotel offers comfortable accommodation for pilgrims visiting the holy shrines of Karbala. Located just 200 meters from Imam Husain Shrine, our hotel provides easy access to all major religious sites.",
            "policies": "Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 24 hours",
            "tags": ["Popular", "Family Friendly"],
            "roomTypes": [
                {"type": "Standard Double", "beds": "1 Double Bed", "capacity": 2, "price": 85},
                {"type": "Family Room", "beds": "2 Double Beds", "capacity": 4, "price": 140},
                {"type": "Triple Room", "beds": "3 Single Beds", "capacity": 3, "price": 115}
            ],
            "nearbyShrines": [
                {"name": "Imam Husain Shrine", "distance": 0.2, "walkTime": 3},
                {"name": "Al-Abbas Shrine", "distance": 0.4, "walkTime": 6}
            ],
            "address": "Al-Mukhayam Street, Old City, Karbala",
            "phone": "+964 32 123 4567",
            "email": "info@alwarith-hotel.com"
        },
        {
            "id": "2",
            "name": "Grand Husain Hotel",
            "city": "Karbala",
            "country": "Iraq",
            "stars": 5,
            "rating": 4.8,
            "price": 120,
            "currency": "USD",
            "image": "https://images.unsplash.com/photo-1607320895054-c5c543e9a069",
            "images": [
                "https://images.unsplash.com/photo-1607320895054-c5c543e9a069",
                "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
            ],
            "distanceToShrine": 0.1,
            "amenities": ["Free WiFi", "Breakfast", "AC", "Prayer Room", "Restaurant", "Elevator", "Room Service", "Shrine Views"],
            "reviews": 387,
            "description": "Premium accommodation with direct shrine views and luxury amenities.",
            "fullDescription": "Experience luxury pilgrimage at Grand Husain Hotel. Our 5-star hotel offers unparalleled views of the golden dome of Imam Husain Shrine.",
            "policies": "Check-in: 2 PM | Check-out: 12 PM | Free cancellation up to 48 hours",
            "tags": ["Luxury", "Best Value", "Shrine Views"],
            "roomTypes": [
                {"type": "Deluxe Room", "beds": "1 King Bed", "capacity": 2, "price": 120},
                {"type": "Shrine View Suite", "beds": "1 King Bed", "capacity": 2, "price": 180},
                {"type": "Family Suite", "beds": "1 King + 2 Single", "capacity": 4, "price": 220}
            ],
            "nearbyShrines": [
                {"name": "Imam Husain Shrine", "distance": 0.1, "walkTime": 2},
                {"name": "Al-Abbas Shrine", "distance": 0.3, "walkTime": 4}
            ],
            "address": "Bab Baghdad Street, Karbala",
            "phone": "+964 32 234 5678",
            "email": "reservations@grandhusain.com"
        }
    ]
    
    await db.hotels.delete_many({})
    await db.hotels.insert_many(hotels_data)
    print(f"✓ Migrated {len(hotels_data)} hotels (sample)")


async def migrate_group_tours():
    """Migrate group tours from mock.js"""
    print("Migrating group tours...")
    
    tours_data = [
        {
            "id": "1",
            "title": "Karbala & Najaf Ziyarat - 7 Days",
            "departure": "2025-12-15",
            "return": "2025-12-22",
            "duration": 7,
            "price": 1250,
            "currency": "USD",
            "seatsLeft": 8,
            "totalSeats": 40,
            "image": "https://images.unsplash.com/photo-1631627412230-cf651d683bca",
            "organizer": "Al-Mahdi Travel",
            "organizerRating": 4.8,
            "organizerReviews": 156,
            "cities": ["Karbala", "Najaf", "Kufa"],
            "country": "Iraq",
            "departureCity": "London",
            "inclusions": ["Return Flights", "4-Star Hotels", "All Meals", "English Guide", "Private Transport", "Visa Assistance"],
            "exclusions": ["Travel Insurance", "Personal Expenses", "Tips"],
            "highlights": ["Visit Imam Husain Shrine", "Visit Imam Ali Shrine", "Wadi Al-Salam Cemetery", "Kufa Mosque"],
            "status": "filling-fast",
            "specialEvent": None,
            "itinerary": [
                {"day": 1, "title": "Arrival in Najaf", "description": "Airport pickup, hotel check-in, evening orientation", "meals": ["Dinner"]},
                {"day": 2, "title": "Najaf Holy Sites", "description": "Visit Imam Ali Shrine, Wadi Al-Salam Cemetery, Kufa Mosque", "meals": ["Breakfast", "Lunch", "Dinner"]},
                {"day": 3, "title": "Travel to Karbala", "description": "Journey to Karbala, visit Imam Husain and Al-Abbas Shrines", "meals": ["Breakfast", "Lunch", "Dinner"]},
                {"day": 4, "title": "Karbala Exploration", "description": "Full day at the shrines, attend majlis, evening ziyarat", "meals": ["Breakfast", "Lunch", "Dinner"]},
                {"day": 5, "title": "Karbala & Najaf", "description": "Morning in Karbala, return to Najaf in afternoon", "meals": ["Breakfast", "Lunch", "Dinner"]},
                {"day": 6, "title": "Free Day in Najaf", "description": "Personal time for prayer and reflection, optional shopping", "meals": ["Breakfast", "Lunch", "Dinner"]},
                {"day": 7, "title": "Departure", "description": "Morning prayer, airport transfer", "meals": ["Breakfast"]}
            ],
            "reviews": [
                {"name": "Sarah Ahmed", "rating": 5, "comment": "Life-changing experience! The guide was knowledgeable and the hotels were excellent.", "date": "2024-10-15"},
                {"name": "Ali Hassan", "rating": 5, "comment": "Well organized tour. Everything went smoothly from start to finish.", "date": "2024-09-20"}
            ]
        }
    ]
    
    await db.group_tours.delete_many({})
    await db.group_tours.insert_many(tours_data)
    print(f"✓ Migrated {len(tours_data)} group tours (sample)")


async def migrate_packages():
    """Migrate packages from mock.js"""
    print("Migrating packages...")
    
    packages_data = [
        {
            "id": "1",
            "title": "Complete Iraq Ziyarat",
            "duration": "10 Days",
            "cities": ["Baghdad", "Karbala", "Najaf", "Kufa", "Samarra", "Kadhimiya"],
            "price": 1850,
            "currency": "USD",
            "rating": 4.9,
            "image": "https://images.unsplash.com/photo-1621165755176-17b7bc1bcd23",
            "description": "Comprehensive tour covering all major Shia shrines in Iraq",
            "inclusions": ["Return Flights", "9 Nights Hotel", "All Meals", "English Guide", "Transport", "Visa Assistance"],
            "itinerary": [
                {"day": 1, "title": "Arrival in Baghdad", "activities": ["Airport pickup", "Hotel check-in", "Rest"]},
                {"day": 2, "title": "Kadhimiya Shrine", "activities": ["Visit Imam Kadhim shrine", "Local market tour"]},
                {"day": 3, "title": "Travel to Karbala", "activities": ["Imam Husain shrine", "Al-Abbas shrine"]}
            ]
        },
        {
            "id": "2",
            "title": "Iran Sacred Cities",
            "duration": "8 Days",
            "cities": ["Tehran", "Mashhad", "Qom"],
            "price": 1650,
            "currency": "USD",
            "rating": 4.7,
            "image": "https://images.unsplash.com/photo-1495833066942-79abe24b0c1f",
            "description": "Spiritual journey through Iran's holiest cities",
            "inclusions": ["Return Flights", "7 Nights Hotel", "Breakfast & Dinner", "Guide", "Transport", "Visa"],
            "itinerary": [
                {"day": 1, "title": "Arrive Tehran", "activities": ["Airport transfer", "City tour"]},
                {"day": 2, "title": "Tehran Sightseeing", "activities": ["Museums", "Historical sites"]}
            ]
        }
    ]
    
    await db.packages.delete_many({})
    await db.packages.insert_many(packages_data)
    print(f"✓ Migrated {len(packages_data)} packages")


async def migrate_testimonials():
    """Migrate testimonials from mock.js"""
    print("Migrating testimonials...")
    
    testimonials_data = [
        {
            "id": "1",
            "name": "Fatima Hassan",
            "location": "London, UK",
            "rating": 5,
            "text": "Beautiful organization and spiritual experience. The guides were knowledgeable and respectful.",
            "date": "2025-06-15",
            "trip": "Karbala & Najaf Ziyarat"
        },
        {
            "id": "2",
            "name": "Ali Reza",
            "location": "Toronto, Canada",
            "rating": 5,
            "text": "Seamless booking process and excellent accommodation near the shrines. Highly recommended!",
            "date": "2025-05-20",
            "trip": "Mashhad Religious Tour"
        },
        {
            "id": "3",
            "name": "Zahra Ahmed",
            "location": "Sydney, Australia",
            "rating": 5,
            "text": "The Arbaeen walk was life-changing. Perfect support and guidance throughout.",
            "date": "2025-04-10",
            "trip": "Arbaeen Pilgrimage"
        }
    ]
    
    await db.testimonials.delete_many({})
    await db.testimonials.insert_many(testimonials_data)
    print(f"✓ Migrated {len(testimonials_data)} testimonials")


async def migrate_iraq_ziyarat_guide():
    """Migrate Iraq Ziyarat Guide data"""
    print("Migrating Iraq Ziyarat Guide content...")
    
    # Cities
    cities_data = [
        {
            "id": str(uuid.uuid4()),
            "cityId": "najaf",
            "name": "Najaf al-Ashraf",
            "nameArabic": "النجف الأشرف",
            "title": "The Dignified City",
            "country": "Iraq",
            "province": "Najaf Governorate",
            "coordinates": {"lat": 31.9956, "lng": 44.3145},
            "image": "https://images.unsplash.com/photo-1761474758252-6af7f4d61868",
            "description": "Sacred city housing the shrine of Imam Ali (a), center of Shia Islamic learning.",
            "significance": "Najaf is home to the shrine of Imam Ali ibn Abi Talib (a), the first Shia Imam.",
            "welcomeMessage": "Welcome to Najaf al-Ashraf, the city of Amir al-Muʾminīn (a).",
            "population": "1.2 million+",
            "bestTimeToVisit": "October to April (cooler months)",
            "airportDistance": "Najaf International Airport (5 km from city center)",
            "visaInfo": "Iraqi visa required (available on arrival for many nationalities)",
            "currency": "Iraqi Dinar (IQD)",
            "languages": ["Arabic", "English (limited in tourist areas)"],
            "emergencyNumbers": {"police": "104", "ambulance": "122", "fire": "115"},
            "primaryLandmarks": ["The holy shrine of Imām ʿAlī (a)", "The graveyard of Wādī as-Salām"]
        },
        {
            "id": str(uuid.uuid4()),
            "cityId": "karbala",
            "name": "Karbala",
            "nameArabic": "كربلاء",
            "country": "Iraq",
            "province": "Karbala Governorate",
            "coordinates": {"lat": 32.6160, "lng": 44.0245},
            "image": "https://images.unsplash.com/photo-1711594937687-eed59068e043",
            "description": "The holiest city for Shia Muslims, site of the Battle of Karbala.",
            "significance": "Location where Imam Husayn (a) was martyred on the 10th of Muharram, 61 AH.",
            "specialSignificance": "The area between the two shrines is compared to Ṣafā and Marwah in Makkah.",
            "population": "700,000+",
            "bestTimeToVisit": "October to April, Muharram, Arbaeen",
            "airportDistance": "100 km to Baghdad International Airport",
            "visaInfo": "Iraqi visa required (available on arrival for many nationalities)",
            "currency": "Iraqi Dinar (IQD)",
            "languages": ["Arabic", "English (limited in tourist areas)"],
            "emergencyNumbers": {"police": "104", "ambulance": "122", "fire": "115"}
        }
    ]
    
    await db.ziyarat_guide_cities.delete_many({})
    await db.ziyarat_guide_cities.insert_many(cities_data)
    print(f"✓ Migrated {len(cities_data)} Ziyarat Guide cities")
    
    # Content (preparation, etiquette, packing)
    content_data = [
        {
            "id": str(uuid.uuid4()),
            "contentType": "preparation",
            "title": "Preparation Tips",
            "content": {
                "mental": {
                    "title": "Mental Preparation",
                    "description": "This is a spiritual journey requiring proper mindset.",
                    "tips": [
                        "Shift your perspective and have a positive outlook",
                        "View challenges as opportunities for growth",
                        "Be open-minded about different customs"
                    ]
                },
                "spiritual": {
                    "title": "Spiritual Preparation",
                    "description": "Strengthen your spiritual health before the journey",
                    "practices": [
                        "Listen to lectures about the Ahl al-Bayt",
                        "Read about the history of the places you will visit",
                        "Perform acts of worship"
                    ]
                }
            }
        },
        {
            "id": str(uuid.uuid4()),
            "contentType": "etiquette",
            "title": "Etiquette (Ādāb) of Ziyārah",
            "content": {
                "rules": [
                    {
                        "category": "Preparation",
                        "items": [
                            "Perform ghusl (ritual bath) before visiting",
                            "Wear clean clothes, preferably white"
                        ]
                    },
                    {
                        "category": "Approaching the Shrine",
                        "items": [
                            "Walk with slow, small steps, with humility",
                            "Recite dhikr while walking"
                        ]
                    }
                ]
            }
        }
    ]
    
    await db.ziyarat_guide_content.delete_many({})
    await db.ziyarat_guide_content.insert_many(content_data)
    print(f"✓ Migrated {len(content_data)} Ziyarat Guide content items")


async def migrate_seo_settings():
    """Create default SEO settings"""
    print("Creating default SEO settings...")
    
    seo_data = [
        {
            "id": str(uuid.uuid4()),
            "page": "home",
            "metaTitle": "Pilgrim Portal - Spiritual Journeys to Holy Shrines",
            "metaDescription": "Book your pilgrimage to Karbala, Najaf, Mashhad and more. Hotels, group tours and packages.",
            "keywords": ["ziyarat", "pilgrimage", "karbala", "najaf", "iraq", "iran", "shia", "holy shrines"],
            "ogImage": ""
        },
        {
            "id": str(uuid.uuid4()),
            "page": "hotels",
            "metaTitle": "Hotels Near Holy Shrines - Pilgrim Portal",
            "metaDescription": "Find comfortable hotels near major shrines in Karbala, Najaf, and more.",
            "keywords": ["hotels", "accommodation", "shrine hotels", "karbala hotels", "najaf hotels"],
            "ogImage": ""
        },
        {
            "id": str(uuid.uuid4()),
            "page": "groups",
            "metaTitle": "Group Tours & Packages - Pilgrim Portal",
            "metaDescription": "Join organized group tours to holy cities. Expert guides, accommodation and transport included.",
            "keywords": ["group tours", "pilgrimage packages", "ziyarat tours", "arbaeen"],
            "ogImage": ""
        }
    ]
    
    await db.seo_settings.delete_many({})
    await db.seo_settings.insert_many(seo_data)
    print(f"✓ Created {len(seo_data)} SEO settings")


async def run_migration():
    """Run all migrations"""
    print("\n" + "="*50)
    print("PILGRIM PORTAL - DATA MIGRATION")
    print("="*50 + "\n")
    
    try:
        await migrate_cities()
        await migrate_ziyarat_places()
        await migrate_hotels()
        await migrate_group_tours()
        await migrate_packages()
        await migrate_testimonials()
        await migrate_iraq_ziyarat_guide()
        await migrate_seo_settings()
        
        print("\n" + "="*50)
        print("✓ MIGRATION COMPLETED SUCCESSFULLY!")
        print("="*50 + "\n")
        
    except Exception as e:
        print(f"\n✗ Migration failed: {e}")
        import traceback
        traceback.print_exc()
    finally:
        client.close()


if __name__ == "__main__":
    asyncio.run(run_migration())
