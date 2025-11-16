from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone

# Import models
from models import (
    City, CityCreate,
    ZiyaratPlace, ZiyaratPlaceCreate,
    Hotel, HotelCreate,
    GroupTour, GroupTourCreate,
    Package, PackageCreate,
    Testimonial, TestimonialCreate,
    HomeContent, HomeContentCreate,
    ZiyaratGuideCity, ZiyaratGuideCityCreate,
    ZiyaratGuidePlace, ZiyaratGuidePlaceCreate,
    ZiyaratGuideContent, ZiyaratGuideContentCreate,
    SeoSettings, SeoSettingsCreate
)


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Pilgrim Portal API v1.0"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# ========================================
# CITIES ENDPOINTS
# ========================================

@api_router.get("/cities", response_model=List[City])
async def get_cities():
    """Get all cities"""
    cities = await db.cities.find({}, {"_id": 0}).to_list(1000)
    return cities

@api_router.get("/cities/{city_id}", response_model=City)
async def get_city(city_id: str):
    """Get a single city by ID"""
    city = await db.cities.find_one({"id": city_id}, {"_id": 0})
    if not city:
        raise HTTPException(status_code=404, detail="City not found")
    return city

@api_router.post("/cities", response_model=City)
async def create_city(city: CityCreate):
    """Create a new city"""
    city_obj = City(**city.model_dump())
    doc = city_obj.model_dump()
    await db.cities.insert_one(doc)
    return city_obj

@api_router.put("/cities/{city_id}", response_model=City)
async def update_city(city_id: str, city: CityCreate):
    """Update a city"""
    city_dict = city.model_dump()
    city_dict["id"] = city_id
    
    result = await db.cities.update_one(
        {"id": city_id},
        {"$set": city_dict}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="City not found")
    
    return City(**city_dict)

@api_router.delete("/cities/{city_id}")
async def delete_city(city_id: str):
    """Delete a city"""
    result = await db.cities.delete_one({"id": city_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="City not found")
    return {"message": "City deleted successfully"}


# ========================================
# ZIYARAT PLACES ENDPOINTS
# ========================================

@api_router.get("/ziyarat-places", response_model=List[ZiyaratPlace])
async def get_ziyarat_places(city_id: str = None):
    """Get all ziyarat places, optionally filtered by city"""
    query = {"cityId": city_id} if city_id else {}
    places = await db.ziyarat_places.find(query, {"_id": 0}).to_list(1000)
    return places

@api_router.get("/ziyarat-places/{place_id}", response_model=ZiyaratPlace)
async def get_ziyarat_place(place_id: str):
    """Get a single ziyarat place by ID"""
    place = await db.ziyarat_places.find_one({"id": place_id}, {"_id": 0})
    if not place:
        raise HTTPException(status_code=404, detail="Place not found")
    return place

@api_router.post("/ziyarat-places", response_model=ZiyaratPlace)
async def create_ziyarat_place(place: ZiyaratPlaceCreate):
    """Create a new ziyarat place"""
    place_obj = ZiyaratPlace(**place.model_dump())
    doc = place_obj.model_dump()
    await db.ziyarat_places.insert_one(doc)
    return place_obj

@api_router.put("/ziyarat-places/{place_id}", response_model=ZiyaratPlace)
async def update_ziyarat_place(place_id: str, place: ZiyaratPlaceCreate):
    """Update a ziyarat place"""
    place_dict = place.model_dump()
    place_dict["id"] = place_id
    
    result = await db.ziyarat_places.update_one(
        {"id": place_id},
        {"$set": place_dict}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Place not found")
    
    return ZiyaratPlace(**place_dict)

@api_router.delete("/ziyarat-places/{place_id}")
async def delete_ziyarat_place(place_id: str):
    """Delete a ziyarat place"""
    result = await db.ziyarat_places.delete_one({"id": place_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Place not found")
    return {"message": "Place deleted successfully"}


# ========================================
# HOTELS ENDPOINTS
# ========================================

@api_router.get("/hotels", response_model=List[Hotel])
async def get_hotels(city: str = None):
    """Get all hotels, optionally filtered by city"""
    query = {"city": city} if city else {}
    hotels = await db.hotels.find(query, {"_id": 0}).to_list(1000)
    return hotels

@api_router.get("/hotels/{hotel_id}", response_model=Hotel)
async def get_hotel(hotel_id: str):
    """Get a single hotel by ID"""
    hotel = await db.hotels.find_one({"id": hotel_id}, {"_id": 0})
    if not hotel:
        raise HTTPException(status_code=404, detail="Hotel not found")
    return hotel

@api_router.post("/hotels", response_model=Hotel)
async def create_hotel(hotel: HotelCreate):
    """Create a new hotel"""
    hotel_obj = Hotel(**hotel.model_dump())
    doc = hotel_obj.model_dump()
    await db.hotels.insert_one(doc)
    return hotel_obj

@api_router.put("/hotels/{hotel_id}", response_model=Hotel)
async def update_hotel(hotel_id: str, hotel: HotelCreate):
    """Update a hotel"""
    hotel_dict = hotel.model_dump()
    hotel_dict["id"] = hotel_id
    
    result = await db.hotels.update_one(
        {"id": hotel_id},
        {"$set": hotel_dict}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Hotel not found")
    
    return Hotel(**hotel_dict)

@api_router.delete("/hotels/{hotel_id}")
async def delete_hotel(hotel_id: str):
    """Delete a hotel"""
    result = await db.hotels.delete_one({"id": hotel_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Hotel not found")
    return {"message": "Hotel deleted successfully"}


# ========================================
# GROUP TOURS ENDPOINTS
# ========================================

@api_router.get("/group-tours", response_model=List[GroupTour])
async def get_group_tours(country: str = None):
    """Get all group tours, optionally filtered by country"""
    query = {"country": country} if country else {}
    tours = await db.group_tours.find(query, {"_id": 0}).to_list(1000)
    return tours

@api_router.get("/group-tours/{tour_id}", response_model=GroupTour)
async def get_group_tour(tour_id: str):
    """Get a single group tour by ID"""
    tour = await db.group_tours.find_one({"id": tour_id}, {"_id": 0})
    if not tour:
        raise HTTPException(status_code=404, detail="Group tour not found")
    return tour

@api_router.post("/group-tours", response_model=GroupTour)
async def create_group_tour(tour: GroupTourCreate):
    """Create a new group tour"""
    tour_obj = GroupTour(**tour.model_dump(by_alias=True))
    doc = tour_obj.model_dump(by_alias=True)
    await db.group_tours.insert_one(doc)
    return tour_obj

@api_router.put("/group-tours/{tour_id}", response_model=GroupTour)
async def update_group_tour(tour_id: str, tour: GroupTourCreate):
    """Update a group tour"""
    tour_dict = tour.model_dump(by_alias=True)
    tour_dict["id"] = tour_id
    
    result = await db.group_tours.update_one(
        {"id": tour_id},
        {"$set": tour_dict}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Group tour not found")
    
    return GroupTour(**tour_dict)

@api_router.delete("/group-tours/{tour_id}")
async def delete_group_tour(tour_id: str):
    """Delete a group tour"""
    result = await db.group_tours.delete_one({"id": tour_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Group tour not found")
    return {"message": "Group tour deleted successfully"}


# ========================================
# PACKAGES ENDPOINTS
# ========================================

@api_router.get("/packages", response_model=List[Package])
async def get_packages():
    """Get all packages"""
    packages = await db.packages.find({}, {"_id": 0}).to_list(1000)
    return packages

@api_router.get("/packages/{package_id}", response_model=Package)
async def get_package(package_id: str):
    """Get a single package by ID"""
    package = await db.packages.find_one({"id": package_id}, {"_id": 0})
    if not package:
        raise HTTPException(status_code=404, detail="Package not found")
    return package

@api_router.post("/packages", response_model=Package)
async def create_package(package: PackageCreate):
    """Create a new package"""
    package_obj = Package(**package.model_dump())
    doc = package_obj.model_dump()
    await db.packages.insert_one(doc)
    return package_obj

@api_router.put("/packages/{package_id}", response_model=Package)
async def update_package(package_id: str, package: PackageCreate):
    """Update a package"""
    package_dict = package.model_dump()
    package_dict["id"] = package_id
    
    result = await db.packages.update_one(
        {"id": package_id},
        {"$set": package_dict}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Package not found")
    
    return Package(**package_dict)

@api_router.delete("/packages/{package_id}")
async def delete_package(package_id: str):
    """Delete a package"""
    result = await db.packages.delete_one({"id": package_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Package not found")
    return {"message": "Package deleted successfully"}


# ========================================
# TESTIMONIALS ENDPOINTS
# ========================================

@api_router.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    """Get all testimonials"""
    testimonials = await db.testimonials.find({}, {"_id": 0}).to_list(1000)
    return testimonials

@api_router.get("/testimonials/{testimonial_id}", response_model=Testimonial)
async def get_testimonial(testimonial_id: str):
    """Get a single testimonial by ID"""
    testimonial = await db.testimonials.find_one({"id": testimonial_id}, {"_id": 0})
    if not testimonial:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    return testimonial

@api_router.post("/testimonials", response_model=Testimonial)
async def create_testimonial(testimonial: TestimonialCreate):
    """Create a new testimonial"""
    testimonial_obj = Testimonial(**testimonial.model_dump())
    doc = testimonial_obj.model_dump()
    await db.testimonials.insert_one(doc)
    return testimonial_obj

@api_router.put("/testimonials/{testimonial_id}", response_model=Testimonial)
async def update_testimonial(testimonial_id: str, testimonial: TestimonialCreate):
    """Update a testimonial"""
    testimonial_dict = testimonial.model_dump()
    testimonial_dict["id"] = testimonial_id
    
    result = await db.testimonials.update_one(
        {"id": testimonial_id},
        {"$set": testimonial_dict}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    
    return Testimonial(**testimonial_dict)

@api_router.delete("/testimonials/{testimonial_id}")
async def delete_testimonial(testimonial_id: str):
    """Delete a testimonial"""
    result = await db.testimonials.delete_one({"id": testimonial_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    return {"message": "Testimonial deleted successfully"}


# ========================================
# HOME CONTENT ENDPOINTS
# ========================================

@api_router.get("/home-content", response_model=List[HomeContent])
async def get_home_content(section: str = None):
    """Get home content, optionally filtered by section"""
    query = {"section": section} if section else {}
    content = await db.home_content.find(query, {"_id": 0}).to_list(1000)
    return content

@api_router.get("/home-content/{content_id}", response_model=HomeContent)
async def get_home_content_item(content_id: str):
    """Get a single home content item by ID"""
    content = await db.home_content.find_one({"id": content_id}, {"_id": 0})
    if not content:
        raise HTTPException(status_code=404, detail="Content not found")
    return content

@api_router.post("/home-content", response_model=HomeContent)
async def create_home_content(content: HomeContentCreate):
    """Create new home content"""
    content_obj = HomeContent(**content.model_dump())
    doc = content_obj.model_dump()
    await db.home_content.insert_one(doc)
    return content_obj

@api_router.put("/home-content/{content_id}", response_model=HomeContent)
async def update_home_content(content_id: str, content: HomeContentCreate):
    """Update home content"""
    content_dict = content.model_dump()
    content_dict["id"] = content_id
    
    result = await db.home_content.update_one(
        {"id": content_id},
        {"$set": content_dict}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Content not found")
    
    return HomeContent(**content_dict)

@api_router.delete("/home-content/{content_id}")
async def delete_home_content(content_id: str):
    """Delete home content"""
    result = await db.home_content.delete_one({"id": content_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Content not found")
    return {"message": "Content deleted successfully"}


# ========================================
# ZIYARAT GUIDE ENDPOINTS
# ========================================

@api_router.get("/ziyarat-guide/cities", response_model=List[ZiyaratGuideCity])
async def get_ziyarat_guide_cities():
    """Get all Iraq Ziyarat Guide cities"""
    cities = await db.ziyarat_guide_cities.find({}, {"_id": 0}).to_list(1000)
    return cities

@api_router.get("/ziyarat-guide/cities/{city_id}", response_model=ZiyaratGuideCity)
async def get_ziyarat_guide_city(city_id: str):
    """Get a single Iraq Ziyarat Guide city"""
    city = await db.ziyarat_guide_cities.find_one({"cityId": city_id}, {"_id": 0})
    if not city:
        raise HTTPException(status_code=404, detail="City not found")
    return city

@api_router.post("/ziyarat-guide/cities", response_model=ZiyaratGuideCity)
async def create_ziyarat_guide_city(city: ZiyaratGuideCityCreate):
    """Create a new Iraq Ziyarat Guide city"""
    city_obj = ZiyaratGuideCity(**city.model_dump())
    doc = city_obj.model_dump()
    await db.ziyarat_guide_cities.insert_one(doc)
    return city_obj

@api_router.put("/ziyarat-guide/cities/{city_id}", response_model=ZiyaratGuideCity)
async def update_ziyarat_guide_city(city_id: str, city: ZiyaratGuideCityCreate):
    """Update a Ziyarat Guide city"""
    city_dict = city.model_dump()
    city_dict["id"] = str(uuid.uuid4())
    
    result = await db.ziyarat_guide_cities.update_one(
        {"cityId": city_id},
        {"$set": city_dict}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="City not found")
    
    return ZiyaratGuideCity(**city_dict)

@api_router.delete("/ziyarat-guide/cities/{city_id}")
async def delete_ziyarat_guide_city(city_id: str):
    """Delete a Ziyarat Guide city"""
    result = await db.ziyarat_guide_cities.delete_one({"cityId": city_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="City not found")
    return {"message": "City deleted successfully"}

@api_router.get("/ziyarat-guide/places", response_model=List[ZiyaratGuidePlace])
async def get_ziyarat_guide_places(city_id: str = None):
    """Get all Iraq Ziyarat Guide places"""
    query = {"cityId": city_id} if city_id else {}
    places = await db.ziyarat_guide_places.find(query, {"_id": 0}).to_list(1000)
    return places

@api_router.get("/ziyarat-guide/places/{place_id}", response_model=ZiyaratGuidePlace)
async def get_ziyarat_guide_place(place_id: str):
    """Get a single Iraq Ziyarat Guide place"""
    place = await db.ziyarat_guide_places.find_one({"placeId": place_id}, {"_id": 0})
    if not place:
        raise HTTPException(status_code=404, detail="Place not found")
    return place

@api_router.post("/ziyarat-guide/places", response_model=ZiyaratGuidePlace)
async def create_ziyarat_guide_place(place: ZiyaratGuidePlaceCreate):
    """Create a new Iraq Ziyarat Guide place"""
    place_obj = ZiyaratGuidePlace(**place.model_dump())
    doc = place_obj.model_dump()
    await db.ziyarat_guide_places.insert_one(doc)
    return place_obj

@api_router.put("/ziyarat-guide/places/{place_id}", response_model=ZiyaratGuidePlace)
async def update_ziyarat_guide_place(place_id: str, place: ZiyaratGuidePlaceCreate):
    """Update a Ziyarat Guide place"""
    place_dict = place.model_dump()
    place_dict["id"] = str(uuid.uuid4())
    
    result = await db.ziyarat_guide_places.update_one(
        {"placeId": place_id},
        {"$set": place_dict}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Place not found")
    
    return ZiyaratGuidePlace(**place_dict)

@api_router.delete("/ziyarat-guide/places/{place_id}")
async def delete_ziyarat_guide_place(place_id: str):
    """Delete a Ziyarat Guide place"""
    result = await db.ziyarat_guide_places.delete_one({"placeId": place_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Place not found")
    return {"message": "Place deleted successfully"}

@api_router.get("/ziyarat-guide/content", response_model=List[ZiyaratGuideContent])
async def get_ziyarat_guide_content(content_type: str = None):
    """Get Ziyarat Guide content (preparation, etiquette, etc.)"""
    query = {"contentType": content_type} if content_type else {}
    content = await db.ziyarat_guide_content.find(query, {"_id": 0}).to_list(1000)
    return content

@api_router.get("/ziyarat-guide/content/{content_id}", response_model=ZiyaratGuideContent)
async def get_ziyarat_guide_content_item(content_id: str):
    """Get a single Ziyarat Guide content item"""
    content = await db.ziyarat_guide_content.find_one({"id": content_id}, {"_id": 0})
    if not content:
        raise HTTPException(status_code=404, detail="Content not found")
    return content

@api_router.post("/ziyarat-guide/content", response_model=ZiyaratGuideContent)
async def create_ziyarat_guide_content(content: ZiyaratGuideContentCreate):
    """Create new Ziyarat Guide content"""
    content_obj = ZiyaratGuideContent(**content.model_dump())
    doc = content_obj.model_dump()
    await db.ziyarat_guide_content.insert_one(doc)
    return content_obj

@api_router.put("/ziyarat-guide/content/{content_id}", response_model=ZiyaratGuideContent)
async def update_ziyarat_guide_content(content_id: str, content: ZiyaratGuideContentCreate):
    """Update Ziyarat Guide content"""
    content_dict = content.model_dump()
    content_dict["id"] = content_id
    
    result = await db.ziyarat_guide_content.update_one(
        {"id": content_id},
        {"$set": content_dict}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Content not found")
    
    return ZiyaratGuideContent(**content_dict)

@api_router.delete("/ziyarat-guide/content/{content_id}")
async def delete_ziyarat_guide_content(content_id: str):
    """Delete Ziyarat Guide content"""
    result = await db.ziyarat_guide_content.delete_one({"id": content_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Content not found")
    return {"message": "Content deleted successfully"}


# ========================================
# SEO SETTINGS ENDPOINTS
# ========================================

@api_router.get("/seo-settings", response_model=List[SeoSettings])
async def get_seo_settings(page: str = None):
    """Get SEO settings, optionally filtered by page"""
    query = {"page": page} if page else {}
    settings = await db.seo_settings.find(query, {"_id": 0}).to_list(1000)
    return settings

@api_router.get("/seo-settings/{page}", response_model=SeoSettings)
async def get_seo_setting(page: str):
    """Get SEO settings for a specific page"""
    setting = await db.seo_settings.find_one({"page": page}, {"_id": 0})
    if not setting:
        raise HTTPException(status_code=404, detail="SEO settings not found")
    return setting

@api_router.post("/seo-settings", response_model=SeoSettings)
async def create_seo_settings(settings: SeoSettingsCreate):
    """Create new SEO settings"""
    settings_obj = SeoSettings(**settings.model_dump())
    doc = settings_obj.model_dump()
    await db.seo_settings.insert_one(doc)
    return settings_obj

@api_router.put("/seo-settings/{settings_id}", response_model=SeoSettings)
async def update_seo_settings(settings_id: str, settings: SeoSettingsCreate):
    """Update SEO settings"""
    settings_dict = settings.model_dump()
    settings_dict["id"] = settings_id
    
    result = await db.seo_settings.update_one(
        {"id": settings_id},
        {"$set": settings_dict}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="SEO settings not found")
    
    return SeoSettings(**settings_dict)

@api_router.delete("/seo-settings/{settings_id}")
async def delete_seo_settings(settings_id: str):
    """Delete SEO settings"""
    result = await db.seo_settings.delete_one({"id": settings_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="SEO settings not found")
    return {"message": "SEO settings deleted successfully"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()