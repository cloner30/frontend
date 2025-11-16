from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional, Dict, Any
from datetime import datetime
import uuid


# ========================================
# BASE MODELS
# ========================================

class BaseDBModel(BaseModel):
    """Base model for all database entities"""
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))


# ========================================
# CITY MODELS
# ========================================

class City(BaseDBModel):
    name: str
    country: str
    description: str
    image: str
    popularPlaces: Optional[int] = 0
    hotels: Optional[int] = 0


class CityCreate(BaseModel):
    name: str
    country: str
    description: str
    image: str
    popularPlaces: Optional[int] = 0
    hotels: Optional[int] = 0


# ========================================
# ZIYARAT PLACE MODELS
# ========================================

class ZiyaratPlace(BaseDBModel):
    cityId: str
    name: str
    description: str
    visitingTips: Optional[str] = ""
    accessibility: Optional[str] = ""
    prayerTimes: Optional[List[str]] = []
    distance: Optional[float] = 0
    image: str


class ZiyaratPlaceCreate(BaseModel):
    cityId: str
    name: str
    description: str
    visitingTips: Optional[str] = ""
    accessibility: Optional[str] = ""
    prayerTimes: Optional[List[str]] = []
    distance: Optional[float] = 0
    image: str


# ========================================
# HOTEL MODELS
# ========================================

class RoomType(BaseModel):
    type: str
    beds: str
    capacity: int
    price: float


class NearbyShrine(BaseModel):
    name: str
    distance: float
    walkTime: int


class Hotel(BaseDBModel):
    name: str
    city: str
    country: str
    stars: int
    rating: float
    price: float
    currency: str
    image: str
    images: List[str]
    distanceToShrine: float
    amenities: List[str]
    reviews: int
    description: str
    fullDescription: str
    policies: str
    tags: List[str]
    roomTypes: List[RoomType]
    nearbyShrines: List[NearbyShrine]
    address: str
    phone: str
    email: str


class HotelCreate(BaseModel):
    name: str
    city: str
    country: str
    stars: int
    rating: float
    price: float
    currency: str
    image: str
    images: List[str]
    distanceToShrine: float
    amenities: List[str]
    reviews: int
    description: str
    fullDescription: str
    policies: str
    tags: List[str]
    roomTypes: List[RoomType]
    nearbyShrines: List[NearbyShrine]
    address: str
    phone: str
    email: str


# ========================================
# GROUP TOUR MODELS
# ========================================

class ItineraryDay(BaseModel):
    day: int
    title: str
    description: str
    meals: List[str]
    activities: Optional[List[str]] = []


class Review(BaseModel):
    name: str
    rating: int
    comment: str
    date: str


class GroupTour(BaseDBModel):
    title: str
    departure: str
    return_date: str = Field(..., alias="return")
    duration: int
    price: float
    currency: str
    seatsLeft: int
    totalSeats: int
    image: str
    organizer: str
    organizerRating: float
    organizerReviews: int
    cities: List[str]
    country: str
    departureCity: str
    inclusions: List[str]
    exclusions: List[str]
    highlights: List[str]
    status: str
    specialEvent: Optional[str] = None
    itinerary: List[ItineraryDay]
    reviews: List[Review]


class GroupTourCreate(BaseModel):
    title: str
    departure: str
    return_date: str = Field(..., alias="return")
    duration: int
    price: float
    currency: str
    seatsLeft: int
    totalSeats: int
    image: str
    organizer: str
    organizerRating: float
    organizerReviews: int
    cities: List[str]
    country: str
    departureCity: str
    inclusions: List[str]
    exclusions: List[str]
    highlights: List[str]
    status: str
    specialEvent: Optional[str] = None
    itinerary: List[ItineraryDay]
    reviews: List[Review]


# ========================================
# PACKAGE MODELS
# ========================================

class Package(BaseDBModel):
    title: str
    duration: str
    cities: List[str]
    price: float
    currency: str
    rating: float
    image: str
    description: str
    inclusions: List[str]
    itinerary: List[Dict[str, Any]]


class PackageCreate(BaseModel):
    title: str
    duration: str
    cities: List[str]
    price: float
    currency: str
    rating: float
    image: str
    description: str
    inclusions: List[str]
    itinerary: List[Dict[str, Any]]


# ========================================
# TESTIMONIAL MODELS
# ========================================

class Testimonial(BaseDBModel):
    name: str
    location: str
    rating: int
    text: str
    date: str
    trip: str


class TestimonialCreate(BaseModel):
    name: str
    location: str
    rating: int
    text: str
    date: str
    trip: str


# ========================================
# HOME CONTENT MODELS
# ========================================

class HomeContent(BaseDBModel):
    section: str  # 'hero', 'reviews', 'offers', etc.
    content: Dict[str, Any]
    isActive: bool = True


class HomeContentCreate(BaseModel):
    section: str
    content: Dict[str, Any]
    isActive: bool = True


# ========================================
# IRAQ ZIYARAT GUIDE MODELS
# ========================================

class ZiyaratGuideCity(BaseDBModel):
    cityId: str
    name: str
    nameArabic: str
    title: Optional[str] = ""
    country: str
    province: str
    coordinates: Dict[str, float]
    image: str
    description: str
    significance: str
    welcomeMessage: Optional[str] = ""
    specialSignificance: Optional[str] = ""
    population: str
    bestTimeToVisit: str
    airportDistance: str
    visaInfo: str
    currency: str
    languages: List[str]
    emergencyNumbers: Optional[Dict[str, str]] = {}
    primaryLandmarks: Optional[List[str]] = []


class ZiyaratGuidePlace(BaseDBModel):
    placeId: str
    cityId: str
    name: str
    nameArabic: str
    type: str
    importance: str
    image: str
    description: str
    buriedHere: Optional[List[Dict[str, Any]]] = []
    scholarsBuried: Optional[List[str]] = []
    visitingHours: Optional[str] = ""
    entryRequirements: Optional[Dict[str, Any]] = {}
    nearbyPlaces: Optional[List[Dict[str, Any]]] = []
    spiritualSignificance: Optional[str] = ""
    historicalBackground: Optional[str] = ""
    ziyarahText: Optional[Dict[str, Any]] = {}


class ZiyaratGuideContent(BaseDBModel):
    contentType: str  # 'preparation', 'etiquette', 'packing', 'scholar', 'prayer'
    title: str
    content: Dict[str, Any]


class ZiyaratGuideCityCreate(BaseModel):
    cityId: str
    name: str
    nameArabic: str
    title: Optional[str] = ""
    country: str
    province: str
    coordinates: Dict[str, float]
    image: str
    description: str
    significance: str
    welcomeMessage: Optional[str] = ""
    specialSignificance: Optional[str] = ""
    population: str
    bestTimeToVisit: str
    airportDistance: str
    visaInfo: str
    currency: str
    languages: List[str]
    emergencyNumbers: Optional[Dict[str, str]] = {}
    primaryLandmarks: Optional[List[str]] = []


class ZiyaratGuidePlaceCreate(BaseModel):
    placeId: str
    cityId: str
    name: str
    nameArabic: str
    type: str
    importance: str
    image: str
    description: str
    buriedHere: Optional[List[Dict[str, Any]]] = []
    scholarsBuried: Optional[List[str]] = []
    visitingHours: Optional[str] = ""
    entryRequirements: Optional[Dict[str, Any]] = {}
    nearbyPlaces: Optional[List[Dict[str, Any]]] = []
    spiritualSignificance: Optional[str] = ""
    historicalBackground: Optional[str] = ""
    ziyarahText: Optional[Dict[str, Any]] = {}


class ZiyaratGuideContentCreate(BaseModel):
    contentType: str
    title: str
    content: Dict[str, Any]


# ========================================
# SEO SETTINGS MODELS
# ========================================

class SeoSettings(BaseDBModel):
    page: str  # 'home', 'hotels', 'groups', etc.
    metaTitle: str
    metaDescription: str
    keywords: List[str]
    ogImage: Optional[str] = ""
    structuredData: Optional[Dict[str, Any]] = {}


class SeoSettingsCreate(BaseModel):
    page: str
    metaTitle: str
    metaDescription: str
    keywords: List[str]
    ogImage: Optional[str] = ""
    structuredData: Optional[Dict[str, Any]] = {}
