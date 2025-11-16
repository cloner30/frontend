import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  MapPin,
  Star,
  Tag,
  TrendingUp,
  Eye,
  MessageSquare,
  ArrowRight,
  Home,
  Package
} from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const AdminDashboard = () => {
  const stats = [
    { name: 'Total Reviews', value: '245', icon: MessageSquare, color: 'bg-blue-500', change: '+12%' },
    { name: 'Active Offers', value: '3', icon: Tag, color: 'bg-green-500', change: '+1' },
    { name: 'Ziyarat Cities', value: '7', icon: MapPin, color: 'bg-purple-500', change: '0' },
    { name: 'Page Views', value: '12.4K', icon: Eye, color: 'bg-orange-500', change: '+18%' },
  ];

  const quickActions = [
    { title: 'Manage Hotels', href: '/admin/hotels', icon: Home, color: 'bg-blue-500' },
    { title: 'Group Tours', href: '/admin/group-tours', icon: Users, color: 'bg-green-500' },
    { title: 'Manage Packages', href: '/admin/packages', icon: Package, color: 'bg-purple-500' },
    { title: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare, color: 'bg-orange-500' },
  ];

  const recentActivity = [
    { action: 'Updated Karbala description', time: '2 hours ago', user: 'Admin' },
    { action: 'Added new testimonial', time: '5 hours ago', user: 'Admin' },
    { action: 'Created Ramadan offer', time: '1 day ago', user: 'Admin' },
    { action: 'Updated homepage hero', time: '2 days ago', user: 'Admin' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#1a2f4a] to-[#2a4f6a] rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome Back, Admin!</h1>
        <p className="text-gray-200">Here's what's happening with your content today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.name}</p>
                    <p className="text-3xl font-bold text-[#1a2f4a]">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`${stat.color} p-4 rounded-xl`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-[#1a2f4a] mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <Link key={idx} to={action.href}>
                  <div className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#ffce05] hover:shadow-lg transition-all group">
                    <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-[#1a2f4a] group-hover:text-[#ffce05]">{action.title}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity & Content Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-[#1a2f4a] mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-[#ffce05] rounded-full mt-2 mr-3"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#1a2f4a]">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time} by {activity.user}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Activity
            </Button>
          </CardContent>
        </Card>

        {/* Content Overview */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-[#1a2f4a] mb-4">Content Overview</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-purple-500" />
                  <span className="font-medium">Ziyarat Sites</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#1a2f4a]">24</span>
                  <Link to="/admin/ziyarat">
                    <Button size="sm" variant="ghost">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-blue-500" />
                  <span className="font-medium">Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#1a2f4a]">245</span>
                  <Link to="/admin/home-content">
                    <Button size="sm" variant="ghost">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Tag className="h-5 w-5 mr-2 text-green-500" />
                  <span className="font-medium">Active Offers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#1a2f4a]">3</span>
                  <Link to="/admin/home-content">
                    <Button size="sm" variant="ghost">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
