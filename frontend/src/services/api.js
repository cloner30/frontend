/**
 * API Service
 * Centralized service for all backend API calls
 * Supports both internal and external (ACF Journeys) APIs
 */

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || '';

// Generic fetch wrapper with error handling
const fetchAPI = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
};

// External API wrapper for ACF Journeys
const fetchExternalAPI = async (config, endpoint = '') => {
  try {
    const url = `${config.apiUrl}${endpoint || config.endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...config.headers,
    };

    // Add API Key to headers
    if (config.apiKey) {
      headers['X-API-Key'] = config.apiKey;
      headers['Authorization'] = `Bearer ${config.apiKey}`;
    }

    const response = await fetch(url, {
      method: config.method || 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error(`External API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('External API Error:', error);
    throw error;
  }
};

// Helper to check if external API is configured and enabled
const getExternalApiConfig = (type) => {
  const configKey = `api_config_${type}`;
  const savedConfig = localStorage.getItem(configKey);
  
  if (savedConfig) {
    const config = JSON.parse(savedConfig);
    if (config.enabled && config.apiUrl && config.apiKey && config.status === 'connected') {
      return config;
    }
  }
  
  return null;
};

// ========================================
// CITIES
// ========================================
export const getCities = async () => {
  return fetchAPI('/api/cities');
};

export const getCity = async (cityId) => {
  return fetchAPI(`/api/cities/${cityId}`);
};

export const createCity = async (cityData) => {
  return fetchAPI('/api/cities', {
    method: 'POST',
    body: JSON.stringify(cityData),
  });
};

export const updateCity = async (cityId, cityData) => {
  return fetchAPI(`/api/cities/${cityId}`, {
    method: 'PUT',
    body: JSON.stringify(cityData),
  });
};

export const deleteCity = async (cityId) => {
  return fetchAPI(`/api/cities/${cityId}`, {
    method: 'DELETE',
  });
};

// ========================================
// ZIYARAT PLACES
// ========================================
export const getZiyaratPlaces = async (cityId = null) => {
  const query = cityId ? `?city_id=${cityId}` : '';
  return fetchAPI(`/api/ziyarat-places${query}`);
};

export const getZiyaratPlace = async (placeId) => {
  return fetchAPI(`/api/ziyarat-places/${placeId}`);
};

export const createZiyaratPlace = async (placeData) => {
  return fetchAPI('/api/ziyarat-places', {
    method: 'POST',
    body: JSON.stringify(placeData),
  });
};

export const updateZiyaratPlace = async (placeId, placeData) => {
  return fetchAPI(`/api/ziyarat-places/${placeId}`, {
    method: 'PUT',
    body: JSON.stringify(placeData),
  });
};

export const deleteZiyaratPlace = async (placeId) => {
  return fetchAPI(`/api/ziyarat-places/${placeId}`, {
    method: 'DELETE',
  });
};

// ========================================
// HOTELS (with External API Support)
// ========================================
export const getHotels = async (city = null) => {
  // Check if external API is configured
  const externalConfig = getExternalApiConfig('hotels');
  
  if (externalConfig) {
    try {
      const endpoint = city ? `${externalConfig.endpoint}?city=${city}` : externalConfig.endpoint;
      return await fetchExternalAPI(externalConfig, endpoint);
    } catch (error) {
      console.warn('External API failed, falling back to internal API:', error);
      // Fallback to internal API
    }
  }
  
  // Use internal API
  const query = city ? `?city=${city}` : '';
  return fetchAPI(`/api/hotels${query}`);
};

export const getHotel = async (hotelId) => {
  // Check if external API is configured
  const externalConfig = getExternalApiConfig('hotels');
  
  if (externalConfig) {
    try {
      return await fetchExternalAPI(externalConfig, `${externalConfig.endpoint}/${hotelId}`);
    } catch (error) {
      console.warn('External API failed, falling back to internal API:', error);
      // Fallback to internal API
    }
  }
  
  // Use internal API
  return fetchAPI(`/api/hotels/${hotelId}`);
};

export const createHotel = async (hotelData) => {
  return fetchAPI('/api/hotels', {
    method: 'POST',
    body: JSON.stringify(hotelData),
  });
};

export const updateHotel = async (hotelId, hotelData) => {
  return fetchAPI(`/api/hotels/${hotelId}`, {
    method: 'PUT',
    body: JSON.stringify(hotelData),
  });
};

export const deleteHotel = async (hotelId) => {
  return fetchAPI(`/api/hotels/${hotelId}`, {
    method: 'DELETE',
  });
};

// ========================================
// GROUP TOURS
// ========================================
export const getGroupTours = async (country = null) => {
  const query = country ? `?country=${country}` : '';
  return fetchAPI(`/api/group-tours${query}`);
};

export const getGroupTour = async (tourId) => {
  return fetchAPI(`/api/group-tours/${tourId}`);
};

export const createGroupTour = async (tourData) => {
  return fetchAPI('/api/group-tours', {
    method: 'POST',
    body: JSON.stringify(tourData),
  });
};

export const updateGroupTour = async (tourId, tourData) => {
  return fetchAPI(`/api/group-tours/${tourId}`, {
    method: 'PUT',
    body: JSON.stringify(tourData),
  });
};

export const deleteGroupTour = async (tourId) => {
  return fetchAPI(`/api/group-tours/${tourId}`, {
    method: 'DELETE',
  });
};

// ========================================
// PACKAGES
// ========================================
export const getPackages = async () => {
  return fetchAPI('/api/packages');
};

export const getPackage = async (packageId) => {
  return fetchAPI(`/api/packages/${packageId}`);
};

export const createPackage = async (packageData) => {
  return fetchAPI('/api/packages', {
    method: 'POST',
    body: JSON.stringify(packageData),
  });
};

export const updatePackage = async (packageId, packageData) => {
  return fetchAPI(`/api/packages/${packageId}`, {
    method: 'PUT',
    body: JSON.stringify(packageData),
  });
};

export const deletePackage = async (packageId) => {
  return fetchAPI(`/api/packages/${packageId}`, {
    method: 'DELETE',
  });
};

// ========================================
// TESTIMONIALS
// ========================================
export const getTestimonials = async () => {
  return fetchAPI('/api/testimonials');
};

export const getTestimonial = async (testimonialId) => {
  return fetchAPI(`/api/testimonials/${testimonialId}`);
};

export const createTestimonial = async (testimonialData) => {
  return fetchAPI('/api/testimonials', {
    method: 'POST',
    body: JSON.stringify(testimonialData),
  });
};

export const updateTestimonial = async (testimonialId, testimonialData) => {
  return fetchAPI(`/api/testimonials/${testimonialId}`, {
    method: 'PUT',
    body: JSON.stringify(testimonialData),
  });
};

export const deleteTestimonial = async (testimonialId) => {
  return fetchAPI(`/api/testimonials/${testimonialId}`, {
    method: 'DELETE',
  });
};

// ========================================
// HOME CONTENT
// ========================================
export const getHomeContent = async (section = null) => {
  const query = section ? `?section=${section}` : '';
  return fetchAPI(`/api/home-content${query}`);
};

export const getHomeContentItem = async (contentId) => {
  return fetchAPI(`/api/home-content/${contentId}`);
};

export const createHomeContent = async (contentData) => {
  return fetchAPI('/api/home-content', {
    method: 'POST',
    body: JSON.stringify(contentData),
  });
};

export const updateHomeContent = async (contentId, contentData) => {
  return fetchAPI(`/api/home-content/${contentId}`, {
    method: 'PUT',
    body: JSON.stringify(contentData),
  });
};

export const deleteHomeContent = async (contentId) => {
  return fetchAPI(`/api/home-content/${contentId}`, {
    method: 'DELETE',
  });
};

// ========================================
// ZIYARAT GUIDE
// ========================================
export const getZiyaratGuideCities = async () => {
  return fetchAPI('/api/ziyarat-guide/cities');
};

export const getZiyaratGuideCity = async (cityId) => {
  return fetchAPI(`/api/ziyarat-guide/cities/${cityId}`);
};

export const getZiyaratGuidePlaces = async (cityId = null) => {
  const query = cityId ? `?city_id=${cityId}` : '';
  return fetchAPI(`/api/ziyarat-guide/places${query}`);
};

export const getZiyaratGuidePlace = async (placeId) => {
  return fetchAPI(`/api/ziyarat-guide/places/${placeId}`);
};

export const getZiyaratGuideContent = async (contentType = null) => {
  const query = contentType ? `?content_type=${contentType}` : '';
  return fetchAPI(`/api/ziyarat-guide/content${query}`);
};

export const createZiyaratGuideCity = async (cityData) => {
  return fetchAPI('/api/ziyarat-guide/cities', {
    method: 'POST',
    body: JSON.stringify(cityData),
  });
};

export const updateZiyaratGuideCity = async (cityId, cityData) => {
  return fetchAPI(`/api/ziyarat-guide/cities/${cityId}`, {
    method: 'PUT',
    body: JSON.stringify(cityData),
  });
};

export const deleteZiyaratGuideCity = async (cityId) => {
  return fetchAPI(`/api/ziyarat-guide/cities/${cityId}`, {
    method: 'DELETE',
  });
};

export const createZiyaratGuidePlace = async (placeData) => {
  return fetchAPI('/api/ziyarat-guide/places', {
    method: 'POST',
    body: JSON.stringify(placeData),
  });
};

export const updateZiyaratGuidePlace = async (placeId, placeData) => {
  return fetchAPI(`/api/ziyarat-guide/places/${placeId}`, {
    method: 'PUT',
    body: JSON.stringify(placeData),
  });
};

export const deleteZiyaratGuidePlace = async (placeId) => {
  return fetchAPI(`/api/ziyarat-guide/places/${placeId}`, {
    method: 'DELETE',
  });
};

export const createZiyaratGuideContent = async (contentData) => {
  return fetchAPI('/api/ziyarat-guide/content', {
    method: 'POST',
    body: JSON.stringify(contentData),
  });
};

export const updateZiyaratGuideContent = async (contentId, contentData) => {
  return fetchAPI(`/api/ziyarat-guide/content/${contentId}`, {
    method: 'PUT',
    body: JSON.stringify(contentData),
  });
};

export const deleteZiyaratGuideContent = async (contentId) => {
  return fetchAPI(`/api/ziyarat-guide/content/${contentId}`, {
    method: 'DELETE',
  });
};

// ========================================
// SEO SETTINGS
// ========================================
export const getSeoSettings = async (page = null) => {
  const query = page ? `?page=${page}` : '';
  return fetchAPI(`/api/seo-settings${query}`);
};

export const getSeoSetting = async (page) => {
  return fetchAPI(`/api/seo-settings/${page}`);
};

export const createSeoSettings = async (settingsData) => {
  return fetchAPI('/api/seo-settings', {
    method: 'POST',
    body: JSON.stringify(settingsData),
  });
};

export const updateSeoSettings = async (settingsId, settingsData) => {
  return fetchAPI(`/api/seo-settings/${settingsId}`, {
    method: 'PUT',
    body: JSON.stringify(settingsData),
  });
};

export const deleteSeoSettings = async (settingsId) => {
  return fetchAPI(`/api/seo-settings/${settingsId}`, {
    method: 'DELETE',
  });
};
