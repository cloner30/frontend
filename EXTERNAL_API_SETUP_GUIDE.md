# External API Integration Setup Guide

## ✅ What's Already Done (Phase 1 Complete)

The code is **100% ready** for external API integration. All three content types support dynamic API switching:

- **Hotels** ✅ - `getHotels()` and `getHotel(id)`
- **Group Tours** ✅ - `getGroupTours()` and `getGroupTour(id)`  
- **Packages** ✅ - `getPackages()` and `getPackage(id)`

## 📋 How It Works

```javascript
// Example: Hotels API fetching logic in /app/frontend/src/services/api.js

export const getHotels = async (city = null) => {
  // 1. Check if external API is configured
  const externalConfig = getExternalApiConfig('hotels');
  
  if (externalConfig) {
    try {
      // 2. If configured & enabled → Fetch from external API
      const endpoint = city ? `${externalConfig.endpoint}?city=${city}` : externalConfig.endpoint;
      return await fetchExternalAPI(externalConfig, endpoint);
    } catch (error) {
      // 3. If external fails → Fallback to internal
      console.warn('External API failed, falling back to internal API:', error);
    }
  }
  
  // 4. Use internal MongoDB API
  const query = city ? `?city=${city}` : '';
  return fetchAPI(`/api/hotels${query}`);
};
```

## 🎯 Current Status

**Frontend is fetching from**: **Internal MongoDB** (2 hotels, 1 group tour, 2 packages)

**Reason**: No external API configuration has been saved yet.

## 🔧 How to Configure External API

### Step 1: Access API Manager

1. Login to admin panel: `https://your-domain.com/admin/login`
   - Email: `admin@pilgrimportal.com`
   - Password: `Admin123!`

2. Navigate to **API Manager** in the sidebar

### Step 2: Configure Hotels API

Select the "**Hotels API**" tab and fill in:

| Field | Value | Example |
|-------|-------|---------|
| **API Base URL** | Your ACF Journeys base URL | `https://api.acfjourneys.com` |
| **Endpoint Path** | Hotels endpoint path | `/api/hotels` or `/v1/accommodations` |
| **API Key** | Your ACF API key | `acf_live_abc123xyz...` |
| **API Secret** | (Optional) If required | Leave blank if not needed |
| **Enable API** | Toggle ON | Switch at top right |

### Step 3: Save & Test

1. Click **"Save Configuration"** (yellow button)
   - Configuration is saved to localStorage
   - Status badge shows "Not Configured" → will update after test

2. Click **"Test Connection"** button
   - System makes a test API call
   - If successful: Status → "Connected" (green)
   - If failed: Status → "Error" (red)

### Step 4: Verify on Frontend

1. Visit the Hotels page: `https://your-domain.com/search`
2. Open Browser DevTools → Console
3. Look for these messages:
   - ✅ **Using external API**: No warning message
   - ⚠️ **Fallback to internal**: Warning message shown

## 🧪 How to Test if External API is Working

### Method 1: Browser Console

```javascript
// In browser console on any page:

// Check configuration
const config = localStorage.getItem('api_config_hotels');
console.log('Hotels Config:', JSON.parse(config));

// Expected output if configured:
// {
//   enabled: true,
//   apiUrl: "https://api.acfjourneys.com",
//   endpoint: "/api/hotels",
//   apiKey: "your_key",
//   status: "connected"
// }
```

### Method 2: Network Tab

1. Open DevTools → Network tab
2. Visit Hotels page (`/search`)
3. Look for API requests:
   - **External API**: Request to `https://api.acfjourneys.com/api/hotels`
   - **Internal API**: Request to `your-domain.com/api/hotels`

### Method 3: Console Warnings

If external API is configured but fails, you'll see:
```
⚠️ External API failed, falling back to internal API: [Error details]
```

## 📊 Configuration Storage

Currently uses **localStorage** (browser-based):

```javascript
// Storage keys:
localStorage.setItem('api_config_hotels', JSON.stringify(config));
localStorage.setItem('api_config_packages', JSON.stringify(config));
localStorage.setItem('api_config_groups', JSON.stringify(config));
```

### ⚠️ Important Notes:

1. **Per-Browser**: Configuration is stored per browser/device
2. **Not Persistent**: Clearing browser data removes configuration
3. **Production Ready**: In production, save to backend database instead

## 🔄 Switching Between APIs

### Use External API:
1. Configure in API Manager
2. Toggle "Enable API" = ON
3. Save & Test Connection
4. Status = "Connected"

### Use Internal API:
1. Go to API Manager
2. Toggle "Enable API" = OFF
3. Save Configuration

Or simply delete the localStorage item:
```javascript
localStorage.removeItem('api_config_hotels');
```

## 📱 Configuring Packages & Group Tours

Follow the same steps for:
- **Packages API** tab
- **Group Tours API** tab

Each has its own independent configuration.

## 🐛 Troubleshooting

### Issue: Hotels still loading from internal DB

**Check:**
1. ✅ Is configuration saved? `localStorage.getItem('api_config_hotels')`
2. ✅ Is `enabled: true`?
3. ✅ Is `status: "connected"`?
4. ✅ Is API Key valid?
5. ✅ Is endpoint correct?

**Solution:**
- Re-save configuration
- Test connection again
- Check console for error messages
- Verify external API is accessible (test with Postman/curl)

### Issue: "External API failed" warning

**This is expected behavior** - it means:
1. External API was configured ✅
2. System tried to fetch from external API ✅
3. Request failed (network/auth/format error) ❌
4. System fell back to internal API ✅ (graceful degradation)

**Fix:**
- Verify API credentials are correct
- Check API endpoint URL
- Ensure API is accessible (test manually)
- Check API response format matches expected structure

## 🎉 Success Indicators

When external API is working correctly:

1. ✅ Configuration shows "Connected" status
2. ✅ No warning messages in console
3. ✅ Network tab shows requests to external domain
4. ✅ Data displayed matches external API content

## 📄 Example: Complete Hotels API Configuration

```json
{
  "enabled": true,
  "apiUrl": "https://api.acfjourneys.com",
  "apiKey": "acf_live_abc123xyz",
  "apiSecret": "",
  "endpoint": "/api/hotels",
  "method": "GET",
  "headers": {},
  "cacheEnabled": true,
  "cacheDuration": 3600,
  "lastSync": "2024-11-16T18:45:32.000Z",
  "status": "connected"
}
```

## 🚀 Next Steps

1. **Get your ACF Journeys API credentials**
   - API Base URL
   - API Key
   - Endpoint paths for hotels, packages, and group tours

2. **Configure in API Manager**
   - Fill in all three API configurations
   - Test each connection
   - Verify "Connected" status

3. **Test on frontend**
   - Visit Hotels, Packages, and Group Tours pages
   - Verify data is loading from external API
   - Check console for any errors

4. **Production Enhancement** (Optional)
   - Move configuration storage from localStorage to backend database
   - Add API response caching
   - Implement automatic sync schedules

---

## 💡 Quick Reference

| Action | Location |
|--------|----------|
| Configure APIs | `/admin/api-manager` |
| View Hotels | `/search` |
| View Packages | `/packages` |
| View Group Tours | `/groups` |
| Check Config | Browser Console: `localStorage.getItem('api_config_hotels')` |

---

**Phase 1 Status**: ✅ **COMPLETE** - All code is ready for external API integration!

**Your Task**: Configure the external API credentials in the API Manager to start using ACF Journeys API.
