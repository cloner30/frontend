#!/usr/bin/env python3
"""
Backend API Testing Script for Pilgrim Portal
Tests all core API endpoints with focus on priority endpoints
"""

import requests
import json
import sys
from typing import Dict, List, Any
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get base URL from environment
BASE_URL = os.getenv('REACT_APP_BACKEND_URL', 'https://holy-journey-4.preview.emergentagent.com')
API_BASE = f"{BASE_URL}/api"

class APITester:
    def __init__(self):
        self.results = {
            'passed': 0,
            'failed': 0,
            'errors': []
        }
        
    def test_endpoint(self, method: str, endpoint: str, expected_status: int = 200, description: str = ""):
        """Test a single API endpoint"""
        url = f"{API_BASE}{endpoint}"
        print(f"\n🔍 Testing {method} {endpoint}")
        print(f"   URL: {url}")
        if description:
            print(f"   Description: {description}")
        
        try:
            if method.upper() == 'GET':
                response = requests.get(url, timeout=30)
            else:
                print(f"❌ Method {method} not implemented in tester")
                return False
                
            print(f"   Status: {response.status_code}")
            
            if response.status_code == expected_status:
                try:
                    data = response.json()
                    print(f"   ✅ SUCCESS - Valid JSON response")
                    
                    # Additional validation for list endpoints
                    if endpoint in ['/packages', '/hotels', '/group-tours', '/cities', '/testimonials', '/home-content']:
                        if isinstance(data, list):
                            print(f"   📊 Returned {len(data)} items")
                        else:
                            print(f"   ⚠️  Expected list, got {type(data)}")
                    
                    # Additional validation for single item endpoints
                    elif '/{' in endpoint or endpoint.count('/') > 1:
                        if isinstance(data, dict):
                            print(f"   📄 Returned object with {len(data)} fields")
                        else:
                            print(f"   ⚠️  Expected object, got {type(data)}")
                    
                    self.results['passed'] += 1
                    return True
                    
                except json.JSONDecodeError:
                    print(f"   ❌ FAILED - Invalid JSON response")
                    self.results['failed'] += 1
                    self.results['errors'].append(f"{endpoint}: Invalid JSON response")
                    return False
            else:
                print(f"   ❌ FAILED - Expected {expected_status}, got {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   Error details: {error_data}")
                except:
                    print(f"   Response text: {response.text[:200]}")
                
                self.results['failed'] += 1
                self.results['errors'].append(f"{endpoint}: Status {response.status_code} (expected {expected_status})")
                return False
                
        except requests.exceptions.RequestException as e:
            print(f"   ❌ FAILED - Request error: {str(e)}")
            self.results['failed'] += 1
            self.results['errors'].append(f"{endpoint}: Request error - {str(e)}")
            return False
    
    def get_sample_ids(self):
        """Get sample IDs from list endpoints for testing single item endpoints"""
        sample_ids = {}
        
        # Get sample package ID
        try:
            response = requests.get(f"{API_BASE}/packages", timeout=30)
            if response.status_code == 200:
                packages = response.json()
                if packages and len(packages) > 0:
                    sample_ids['package'] = packages[0].get('id')
        except:
            pass
            
        # Get sample hotel ID
        try:
            response = requests.get(f"{API_BASE}/hotels", timeout=30)
            if response.status_code == 200:
                hotels = response.json()
                if hotels and len(hotels) > 0:
                    sample_ids['hotel'] = hotels[0].get('id')
        except:
            pass
            
        # Get sample group tour ID
        try:
            response = requests.get(f"{API_BASE}/group-tours", timeout=30)
            if response.status_code == 200:
                tours = response.json()
                if tours and len(tours) > 0:
                    sample_ids['group_tour'] = tours[0].get('id')
        except:
            pass
            
        return sample_ids
    
    def run_priority_tests(self):
        """Run priority API endpoint tests"""
        print("=" * 80)
        print("🚀 PILGRIM PORTAL BACKEND API TESTING")
        print("=" * 80)
        print(f"Base URL: {BASE_URL}")
        print(f"API Base: {API_BASE}")
        
        # Test basic connectivity
        print("\n📡 Testing Basic Connectivity...")
        self.test_endpoint('GET', '/', 200, "API root endpoint")
        
        # Priority Test 1: Packages API Endpoints
        print("\n" + "="*50)
        print("🎯 PRIORITY TEST 1: PACKAGES API")
        print("="*50)
        
        packages_list_success = self.test_endpoint('GET', '/packages', 200, "Get all packages")
        
        # Priority Test 2: Hotels API Endpoints  
        print("\n" + "="*50)
        print("🎯 PRIORITY TEST 2: HOTELS API")
        print("="*50)
        
        hotels_list_success = self.test_endpoint('GET', '/hotels', 200, "Get all hotels")
        
        # Priority Test 3: Group Tours API Endpoints
        print("\n" + "="*50)
        print("🎯 PRIORITY TEST 3: GROUP TOURS API")
        print("="*50)
        
        tours_list_success = self.test_endpoint('GET', '/group-tours', 200, "Get all group tours")
        
        # Priority Test 4: Other Core Endpoints
        print("\n" + "="*50)
        print("🎯 PRIORITY TEST 4: OTHER CORE ENDPOINTS")
        print("="*50)
        
        self.test_endpoint('GET', '/cities', 200, "Get all cities")
        self.test_endpoint('GET', '/testimonials', 200, "Get all testimonials")
        self.test_endpoint('GET', '/home-content', 200, "Get home content")
        
        # Test single item endpoints if we have sample data
        print("\n" + "="*50)
        print("🎯 TESTING SINGLE ITEM ENDPOINTS")
        print("="*50)
        
        sample_ids = self.get_sample_ids()
        print(f"Sample IDs found: {sample_ids}")
        
        if sample_ids.get('package'):
            self.test_endpoint('GET', f'/packages/{sample_ids["package"]}', 200, "Get specific package by ID")
        else:
            print("⚠️  No package ID available for single item test")
            
        if sample_ids.get('hotel'):
            self.test_endpoint('GET', f'/hotels/{sample_ids["hotel"]}', 200, "Get specific hotel by ID")
        else:
            print("⚠️  No hotel ID available for single item test")
            
        if sample_ids.get('group_tour'):
            self.test_endpoint('GET', f'/group-tours/{sample_ids["group_tour"]}', 200, "Get specific group tour by ID")
        else:
            print("⚠️  No group tour ID available for single item test")
    
    def print_summary(self):
        """Print test summary"""
        print("\n" + "="*80)
        print("📊 TEST SUMMARY")
        print("="*80)
        
        total_tests = self.results['passed'] + self.results['failed']
        print(f"Total Tests: {total_tests}")
        print(f"✅ Passed: {self.results['passed']}")
        print(f"❌ Failed: {self.results['failed']}")
        
        if self.results['failed'] > 0:
            print(f"\n🚨 FAILED TESTS:")
            for error in self.results['errors']:
                print(f"   • {error}")
        
        success_rate = (self.results['passed'] / total_tests * 100) if total_tests > 0 else 0
        print(f"\n📈 Success Rate: {success_rate:.1f}%")
        
        if self.results['failed'] == 0:
            print("\n🎉 ALL TESTS PASSED!")
            return True
        else:
            print(f"\n⚠️  {self.results['failed']} TESTS FAILED")
            return False

def main():
    """Main test execution"""
    tester = APITester()
    
    try:
        tester.run_priority_tests()
        success = tester.print_summary()
        
        # Exit with appropriate code
        sys.exit(0 if success else 1)
        
    except KeyboardInterrupt:
        print("\n\n⏹️  Testing interrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n💥 Unexpected error during testing: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()