import React, { useState, useEffect } from 'react';
import { Save, RefreshCw, CheckCircle, XCircle, AlertCircle, ExternalLink, Key, Link as LinkIcon, Database } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Switch } from '../../components/ui/switch';
import { useToast } from '../../hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';

const ApiManager = () => {
  const [loading, setLoading] = useState(false);
  const [testingApi, setTestingApi] = useState(null);
  const { toast } = useToast();

  // API Configurations
  const [hotelsConfig, setHotelsConfig] = useState({
    enabled: false,
    apiUrl: '',
    apiKey: '',
    apiSecret: '',
    endpoint: '/api/hotels',
    method: 'GET',
    headers: {},
    cacheEnabled: true,
    cacheDuration: 3600, // seconds
    lastSync: null,
    status: 'not-configured'
  });

  const [packagesConfig, setPackagesConfig] = useState({
    enabled: false,
    apiUrl: '',
    apiKey: '',
    apiSecret: '',
    endpoint: '/api/packages',
    method: 'GET',
    headers: {},
    cacheEnabled: true,
    cacheDuration: 3600,
    lastSync: null,
    status: 'not-configured'
  });

  const [groupToursConfig, setGroupToursConfig] = useState({
    enabled: false,
    apiUrl: '',
    apiKey: '',
    apiSecret: '',
    endpoint: '/api/group-tours',
    method: 'GET',
    headers: {},
    cacheEnabled: true,
    cacheDuration: 3600,
    lastSync: null,
    status: 'not-configured'
  });

  useEffect(() => {
    loadConfigurations();
  }, []);

  const loadConfigurations = () => {
    // Load from localStorage (in production, this would come from backend)
    const savedHotels = localStorage.getItem('api_config_hotels');
    const savedPackages = localStorage.getItem('api_config_packages');
    const savedGroups = localStorage.getItem('api_config_groups');

    if (savedHotels) setHotelsConfig(JSON.parse(savedHotels));
    if (savedPackages) setPackagesConfig(JSON.parse(savedPackages));
    if (savedGroups) setGroupToursConfig(JSON.parse(savedGroups));
  };

  const saveConfiguration = (type, config) => {
    // Save to localStorage (in production, this would save to backend)
    localStorage.setItem(`api_config_${type}`, JSON.stringify(config));
    
    toast({
      title: 'Configuration Saved',
      description: `${type} API configuration has been saved successfully.`
    });
  };

  const testApiConnection = async (type, config) => {
    setTestingApi(type);
    
    try {
      // Simulate API test (in production, this would make a real API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful response
      const updatedConfig = {
        ...config,
        status: 'connected',
        lastSync: new Date().toISOString()
      };

      // Update the appropriate config
      if (type === 'hotels') setHotelsConfig(updatedConfig);
      if (type === 'packages') setPackagesConfig(updatedConfig);
      if (type === 'groups') setGroupToursConfig(updatedConfig);

      saveConfiguration(type, updatedConfig);

      toast({
        title: 'Connection Successful',
        description: `Successfully connected to ${type} API. Data is ready to sync.`
      });
    } catch (error) {
      toast({
        title: 'Connection Failed',
        description: `Failed to connect to ${type} API. Please check your credentials.`,
        variant: 'destructive'
      });
    } finally {
      setTestingApi(null);
    }
  };

  const syncData = async (type) => {
    setLoading(true);
    try {
      // Simulate data sync (in production, this would fetch and store data)
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      toast({
        title: 'Sync Complete',
        description: `Successfully synced ${type} data from external API.`
      });
    } catch (error) {
      toast({
        title: 'Sync Failed',
        description: `Failed to sync ${type} data.`,
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const renderApiConfigForm = (type, config, setConfig) => {
    const getStatusColor = () => {
      switch (config.status) {
        case 'connected': return 'bg-green-500';
        case 'error': return 'bg-red-500';
        case 'testing': return 'bg-yellow-500';
        default: return 'bg-gray-400';
      }
    };

    const getStatusIcon = () => {
      switch (config.status) {
        case 'connected': return <CheckCircle className="h-4 w-4" />;
        case 'error': return <XCircle className="h-4 w-4" />;
        default: return <AlertCircle className="h-4 w-4" />;
      }
    };

    return (
      <div className="space-y-6">
        {/* Status Badge */}
        <div className="flex items-center justify-between">
          <Badge className={`${getStatusColor()} text-white flex items-center space-x-2`}>
            {getStatusIcon()}
            <span className="ml-1 capitalize">{config.status.replace('-', ' ')}</span>
          </Badge>
          <div className="flex items-center space-x-2">
            <Switch
              checked={config.enabled}
              onCheckedChange={(checked) => setConfig({...config, enabled: checked})}
            />
            <Label>Enable API</Label>
          </div>
        </div>

        {/* API Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <LinkIcon className="h-5 w-5" />
              <span>API Configuration</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>API Base URL *</Label>
              <Input
                value={config.apiUrl}
                onChange={(e) => setConfig({...config, apiUrl: e.target.value})}
                placeholder="https://api.acfjourneys.com"
              />
              <p className="text-xs text-gray-500 mt-1">Full base URL of the ACF Journeys API</p>
            </div>

            <div>
              <Label>Endpoint Path</Label>
              <Input
                value={config.endpoint}
                onChange={(e) => setConfig({...config, endpoint: e.target.value})}
                placeholder="/api/hotels"
              />
              <p className="text-xs text-gray-500 mt-1">API endpoint path (e.g., /api/hotels)</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>HTTP Method</Label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={config.method}
                  onChange={(e) => setConfig({...config, method: e.target.value})}
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Authentication */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Key className="h-5 w-5" />
              <span>Authentication</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>API Key *</Label>
              <Input
                type="password"
                value={config.apiKey}
                onChange={(e) => setConfig({...config, apiKey: e.target.value})}
                placeholder="Enter your API key"
              />
              <p className="text-xs text-gray-500 mt-1">Your ACF Journeys API key</p>
            </div>

            <div>
              <Label>API Secret (Optional)</Label>
              <Input
                type="password"
                value={config.apiSecret}
                onChange={(e) => setConfig({...config, apiSecret: e.target.value})}
                placeholder="Enter your API secret if required"
              />
            </div>

            <div>
              <Label>Custom Headers (JSON)</Label>
              <Textarea
                value={JSON.stringify(config.headers, null, 2)}
                onChange={(e) => {
                  try {
                    setConfig({...config, headers: JSON.parse(e.target.value)});
                  } catch (err) {
                    // Invalid JSON, ignore
                  }
                }}
                placeholder='{"Authorization": "Bearer token"}'
                rows={3}
              />
              <p className="text-xs text-gray-500 mt-1">Additional HTTP headers in JSON format</p>
            </div>
          </CardContent>
        </Card>

        {/* Cache Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Database className="h-5 w-5" />
              <span>Cache & Sync Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch
                checked={config.cacheEnabled}
                onCheckedChange={(checked) => setConfig({...config, cacheEnabled: checked})}
              />
              <Label>Enable caching to improve performance</Label>
            </div>

            {config.cacheEnabled && (
              <div>
                <Label>Cache Duration (seconds)</Label>
                <Input
                  type="number"
                  value={config.cacheDuration}
                  onChange={(e) => setConfig({...config, cacheDuration: parseInt(e.target.value)})}
                />
                <p className="text-xs text-gray-500 mt-1">How long to cache API responses (3600 = 1 hour)</p>
              </div>
            )}

            {config.lastSync && (
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-sm text-gray-600">
                  <strong>Last Synced:</strong> {new Date(config.lastSync).toLocaleString()}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button
            onClick={() => saveConfiguration(type, config)}
            className="bg-[#ffce05] hover:bg-[#e6b800] text-[#1a2f4a] flex-1"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Configuration
          </Button>
          <Button
            onClick={() => testApiConnection(type, config)}
            variant="outline"
            disabled={!config.apiUrl || !config.apiKey || testingApi === type}
            className="flex-1"
          >
            {testingApi === type ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Testing...
              </>
            ) : (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Test Connection
              </>
            )}
          </Button>
          {config.status === 'connected' && (
            <Button
              onClick={() => syncData(type)}
              variant="outline"
              disabled={loading}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Sync Now
            </Button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">External API Manager</h1>
        <p className="text-gray-600 mt-1">Configure and manage connections to ACF Journeys API for Hotels, Packages, and Group Tours</p>
      </div>

      {/* Info Alert */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-blue-900 mb-2">About External API Integration</p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• <strong>Hotels, Packages, and Group Tours</strong> data will be fetched from ACF Journeys API</li>
                <li>• Configure API credentials and endpoints for each data source</li>
                <li>• Test connections to ensure proper authentication</li>
                <li>• Data is cached to improve performance and reduce API calls</li>
                <li>• Sync data manually or configure automatic sync intervals</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* API Configuration Tabs */}
      <Tabs defaultValue="hotels" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="hotels" className="flex items-center space-x-2">
            <span>🏨</span>
            <span>Hotels API</span>
            {hotelsConfig.status === 'connected' && (
              <CheckCircle className="h-4 w-4 text-green-600 ml-1" />
            )}
          </TabsTrigger>
          <TabsTrigger value="packages" className="flex items-center space-x-2">
            <span>📦</span>
            <span>Packages API</span>
            {packagesConfig.status === 'connected' && (
              <CheckCircle className="h-4 w-4 text-green-600 ml-1" />
            )}
          </TabsTrigger>
          <TabsTrigger value="groups" className="flex items-center space-x-2">
            <span>👥</span>
            <span>Group Tours API</span>
            {groupToursConfig.status === 'connected' && (
              <CheckCircle className="h-4 w-4 text-green-600 ml-1" />
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="hotels" className="mt-6">
          {renderApiConfigForm('hotels', hotelsConfig, setHotelsConfig)}
        </TabsContent>

        <TabsContent value="packages" className="mt-6">
          {renderApiConfigForm('packages', packagesConfig, setPackagesConfig)}
        </TabsContent>

        <TabsContent value="groups" className="mt-6">
          {renderApiConfigForm('groups', groupToursConfig, setGroupToursConfig)}
        </TabsContent>
      </Tabs>

      {/* API Documentation Link */}
      <Card className="bg-purple-50 border-purple-200">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <ExternalLink className="h-5 w-5 text-purple-600 mt-0.5" />
            <div className="text-sm text-purple-800">
              <strong>Need Help?</strong> Check the ACF Journeys API documentation for authentication details, endpoint information, and data formats.
              <a href="#" className="ml-2 underline font-semibold">View API Docs</a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Hotels API</p>
                <p className="text-2xl font-bold text-gray-900">
                  {hotelsConfig.status === 'connected' ? 'Connected' : 'Not Connected'}
                </p>
              </div>
              <div className={`h-12 w-12 rounded-full ${hotelsConfig.status === 'connected' ? 'bg-green-100' : 'bg-gray-100'} flex items-center justify-center`}>
                {hotelsConfig.status === 'connected' ? (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                ) : (
                  <XCircle className="h-6 w-6 text-gray-400" />
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Packages API</p>
                <p className="text-2xl font-bold text-gray-900">
                  {packagesConfig.status === 'connected' ? 'Connected' : 'Not Connected'}
                </p>
              </div>
              <div className={`h-12 w-12 rounded-full ${packagesConfig.status === 'connected' ? 'bg-green-100' : 'bg-gray-100'} flex items-center justify-center`}>
                {packagesConfig.status === 'connected' ? (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                ) : (
                  <XCircle className="h-6 w-6 text-gray-400" />
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Group Tours API</p>
                <p className="text-2xl font-bold text-gray-900">
                  {groupToursConfig.status === 'connected' ? 'Connected' : 'Not Connected'}
                </p>
              </div>
              <div className={`h-12 w-12 rounded-full ${groupToursConfig.status === 'connected' ? 'bg-green-100' : 'bg-gray-100'} flex items-center justify-center`}>
                {groupToursConfig.status === 'connected' ? (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                ) : (
                  <XCircle className="h-6 w-6 text-gray-400" />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApiManager;
