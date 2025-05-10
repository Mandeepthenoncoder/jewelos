'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SuperAdminDashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<'today' | 'week' | 'month'>('week');
  
  // Mock stats data that would come from a database in a real app
  const stats = {
    today: { 
      organizations: 3,
      newUsers: 8, 
      revenue: '₹12,250', 
      activeUsers: 42 
    },
    week: { 
      organizations: 15,
      newUsers: 24, 
      revenue: '₹98,500', 
      activeUsers: 156 
    },
    month: { 
      organizations: 27,
      newUsers: 67, 
      revenue: '₹3,45,200', 
      activeUsers: 324 
    },
  };
  
  // Get current stats based on selected period
  const currentStats = stats[selectedPeriod];
  
  // Quick actions for super admin
  const quickActions = [
    { title: 'Add New Organization', href: '/mandeepsuperadmin/organizations/new', icon: '🏢', color: 'bg-amber-50 text-amber-600' },
    { title: 'Add New User', href: '/mandeepsuperadmin/users/new', icon: '👤', color: 'bg-blue-50 text-blue-600' },
    { title: 'Update Pricing', href: '/mandeepsuperadmin/billing/pricing', icon: '💰', color: 'bg-green-50 text-green-600' },
    { title: 'System Settings', href: '/mandeepsuperadmin/settings', icon: '⚙️', color: 'bg-purple-50 text-purple-600' }
  ];

  // Recent organizations - would come from a database in a real app
  const recentOrganizations = [
    { id: '1', name: 'Kumar Jewellers', location: 'Mumbai', plan: 'Enterprise', status: 'active', users: 12, createdAt: '2023-05-15' },
    { id: '2', name: 'Golden Designs', location: 'Delhi', plan: 'Professional', status: 'active', users: 8, createdAt: '2023-05-10' },
    { id: '3', name: 'Heritage Jewels', location: 'Jaipur', plan: 'Professional', status: 'active', users: 5, createdAt: '2023-05-08' },
    { id: '4', name: 'Royal Diamonds', location: 'Surat', plan: 'Starter', status: 'trial', users: 3, createdAt: '2023-05-05' },
    { id: '5', name: 'Precious Gems', location: 'Bangalore', plan: 'Starter', status: 'trial', users: 2, createdAt: '2023-05-01' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-900">Super Admin Dashboard</h1>
        <div className="flex items-center bg-white border rounded-lg p-1">
          <button
            onClick={() => setSelectedPeriod('today')}
            className={`px-3 py-1 rounded-md text-sm ${
              selectedPeriod === 'today' ? 'bg-neutral-900 text-white' : 'text-neutral-600'
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setSelectedPeriod('week')}
            className={`px-3 py-1 rounded-md text-sm ${
              selectedPeriod === 'week' ? 'bg-neutral-900 text-white' : 'text-neutral-600'
            }`}
          >
            This Week
          </button>
          <button
            onClick={() => setSelectedPeriod('month')}
            className={`px-3 py-1 rounded-md text-sm ${
              selectedPeriod === 'month' ? 'bg-neutral-900 text-white' : 'text-neutral-600'
            }`}
          >
            This Month
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 border-amber-100 bg-amber-50">
          <p className="text-sm text-amber-600 font-medium">Organizations</p>
          <p className="text-3xl font-bold text-amber-700 mt-1">{currentStats.organizations}</p>
          <div className="text-xs text-amber-500 mt-2">
            {selectedPeriod === 'today' ? 'Today' : selectedPeriod === 'week' ? 'This Week' : 'This Month'}
          </div>
        </Card>
        
        <Card className="p-4 border-blue-100 bg-blue-50">
          <p className="text-sm text-blue-600 font-medium">New Users</p>
          <p className="text-3xl font-bold text-blue-700 mt-1">{currentStats.newUsers}</p>
          <div className="text-xs text-blue-500 mt-2">
            {selectedPeriod === 'today' ? 'Today' : selectedPeriod === 'week' ? 'This Week' : 'This Month'}
          </div>
        </Card>
        
        <Card className="p-4 border-green-100 bg-green-50">
          <p className="text-sm text-green-600 font-medium">Revenue</p>
          <p className="text-3xl font-bold text-green-700 mt-1">{currentStats.revenue}</p>
          <div className="text-xs text-green-500 mt-2">
            {selectedPeriod === 'today' ? 'Today' : selectedPeriod === 'week' ? 'This Week' : 'This Month'}
          </div>
        </Card>
        
        <Card className="p-4 border-purple-100 bg-purple-50">
          <p className="text-sm text-purple-600 font-medium">Active Users</p>
          <p className="text-3xl font-bold text-purple-700 mt-1">{currentStats.activeUsers}</p>
          <div className="text-xs text-purple-500 mt-2">
            {selectedPeriod === 'today' ? 'Active' : selectedPeriod === 'week' ? 'This Week' : 'This Month'}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-900 mb-3">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, i) => (
            <Card key={i} className="border hover:shadow-md transition-shadow">
              <Link
                href={action.href}
                className="block p-4"
              >
                <div className={`w-10 h-10 ${action.color} rounded-full flex items-center justify-center mb-3`}>
                  <span className="text-xl">{action.icon}</span>
                </div>
                <h3 className="font-medium text-neutral-900">{action.title}</h3>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Organizations */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-neutral-900">Recent Organizations</h2>
          <Button variant="outline" size="sm" asChild>
            <Link href="/mandeepsuperadmin/organizations">View All</Link>
          </Button>
        </div>
        
        <Card className="border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-50 border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Organization</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Location</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Plan</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Users</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Created</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {recentOrganizations.map((org) => (
                  <tr key={org.id} className="hover:bg-neutral-50">
                    <td className="py-3 px-4">
                      <Link href={`/mandeepsuperadmin/organizations/${org.id}`} className="font-medium text-neutral-900 hover:text-amber-600">
                        {org.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-neutral-600">{org.location}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        org.plan === 'Enterprise' ? 'bg-purple-100 text-purple-800' :
                        org.plan === 'Professional' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {org.plan}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        org.status === 'active' ? 'bg-green-100 text-green-800' :
                        org.status === 'trial' ? 'bg-amber-100 text-amber-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {org.status.charAt(0).toUpperCase() + org.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-neutral-600">{org.users}</td>
                    <td className="py-3 px-4 text-neutral-600">{org.createdAt}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="h-8 px-2">View</Button>
                        <Button variant="outline" size="sm" className="h-8 px-2">Edit</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 border">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">System Status</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-neutral-700">Server Load</span>
                <span className="text-sm font-medium text-green-600">Normal</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-neutral-700">Database Storage</span>
                <span className="text-sm font-medium text-amber-600">65%</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-neutral-700">API Rate Limit</span>
                <span className="text-sm font-medium text-green-600">20%</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-medium text-neutral-900 mb-2">Recent Events</h4>
              <div className="text-sm text-neutral-600 space-y-1">
                <p>✅ Database backup completed (2 hours ago)</p>
                <p>✅ System updates installed (1 day ago)</p>
                <p>✅ Security scan completed (2 days ago)</p>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 border">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-amber-500 pl-3">
              <p className="text-sm text-neutral-900">New organization created: <span className="font-medium">Kumar Jewellers</span></p>
              <p className="text-xs text-neutral-500">2 hours ago</p>
            </div>
            
            <div className="border-l-2 border-green-500 pl-3">
              <p className="text-sm text-neutral-900">Plan upgraded: <span className="font-medium">Golden Designs</span> to Professional</p>
              <p className="text-xs text-neutral-500">5 hours ago</p>
            </div>
            
            <div className="border-l-2 border-blue-500 pl-3">
              <p className="text-sm text-neutral-900">New admin user added: <span className="font-medium">Priya Sharma</span></p>
              <p className="text-xs text-neutral-500">1 day ago</p>
            </div>
            
            <div className="border-l-2 border-purple-500 pl-3">
              <p className="text-sm text-neutral-900">System settings updated: <span className="font-medium">WhatsApp API credentials</span></p>
              <p className="text-xs text-neutral-500">2 days ago</p>
            </div>
            
            <div className="border-l-2 border-red-500 pl-3">
              <p className="text-sm text-neutral-900">Security alert triggered: <span className="font-medium">Multiple failed login attempts</span></p>
              <p className="text-xs text-neutral-500">3 days ago</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 