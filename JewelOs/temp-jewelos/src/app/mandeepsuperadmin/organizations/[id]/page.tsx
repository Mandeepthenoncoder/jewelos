'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function OrganizationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<string>('overview');
  
  // Mock data for the organization
  // In a real app, this would be fetched from an API
  const organization = {
    id,
    name: 'Kumar Jewellers',
    subdomain: 'kumarjewellers',
    location: 'Mumbai, India',
    adminName: 'Rajesh Kumar',
    adminEmail: 'rajesh@kumarjewellers.com',
    adminPhone: '+91 98765 43210',
    plan: 'Enterprise',
    status: 'active',
    createdAt: '2023-05-15',
    users: 12,
    billing: {
      plan: 'Enterprise',
      amount: '₹24,999',
      cycle: 'monthly',
      nextBillingDate: '2023-06-15',
      paymentMethod: 'Credit Card (**** 4321)'
    },
    stats: {
      activeUsers: 12,
      totalLeads: 543,
      messagesSent: 2145,
      campaignsRun: 18,
      tasksCreated: 156,
      storageUsed: '2.4 GB',
      apiCalls: '43,210'
    },
    modules: {
      crm: true,
      whatsapp: true,
      campaigns: true,
      tasks: true,
      inventory: true
    },
    recentActivity: [
      {
        type: 'user_added',
        description: 'New user added: Priya Sharma',
        timestamp: '2023-05-20T14:30:00Z'
      },
      {
        type: 'plan_changed',
        description: 'Plan upgraded from Professional to Enterprise',
        timestamp: '2023-05-18T10:15:00Z'
      },
      {
        type: 'payment',
        description: 'Monthly payment processed: ₹24,999',
        timestamp: '2023-05-15T00:00:00Z'
      },
      {
        type: 'module_enabled',
        description: 'Inventory Management module enabled',
        timestamp: '2023-05-12T16:45:00Z'
      },
      {
        type: 'user_login',
        description: 'Admin user logged in from new device',
        timestamp: '2023-05-10T09:20:00Z'
      }
    ]
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2">
            <Link href="/mandeepsuperadmin/organizations" className="text-neutral-500 hover:text-neutral-900">
              Organizations
            </Link>
            <span className="text-neutral-500">/</span>
            <h1 className="text-2xl font-bold text-neutral-900">{organization.name}</h1>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              organization.status === 'active' ? 'bg-green-100 text-green-800' :
              organization.status === 'trial' ? 'bg-amber-100 text-amber-800' :
              'bg-red-100 text-red-800'
            }`}>
              {organization.status.charAt(0).toUpperCase() + organization.status.slice(1)}
            </span>
          </div>
          <p className="text-neutral-500">{organization.subdomain}.jewelos.com</p>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="outline" asChild>
            <Link href={`/mandeepsuperadmin/organizations/${id}/edit`}>Edit</Link>
          </Button>
          <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
            Suspend
          </Button>
        </div>
      </div>
      
      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full" onValueChange={(value: string) => setActiveTab(value)}>
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="billing">Billing & Subscription</TabsTrigger>
          <TabsTrigger value="activity">Activity Log</TabsTrigger>
        </TabsList>
        
        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 border">
              <h3 className="text-sm font-medium text-neutral-500 mb-1">Total Users</h3>
              <p className="text-2xl font-semibold text-neutral-900">{organization.stats.activeUsers}</p>
              <div className="mt-2 h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-1 rounded-full" style={{ width: `${(organization.stats.activeUsers / 20) * 100}%` }}></div>
              </div>
              <p className="text-xs text-neutral-500 mt-1">20 users included in plan</p>
            </Card>
            
            <Card className="p-4 border">
              <h3 className="text-sm font-medium text-neutral-500 mb-1">Total Leads</h3>
              <p className="text-2xl font-semibold text-neutral-900">{organization.stats.totalLeads}</p>
              <div className="mt-2 h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-1 rounded-full" style={{ width: `${(organization.stats.totalLeads / 1000) * 100}%` }}></div>
              </div>
              <p className="text-xs text-neutral-500 mt-1">Unlimited leads in Enterprise plan</p>
            </Card>
            
            <Card className="p-4 border">
              <h3 className="text-sm font-medium text-neutral-500 mb-1">WhatsApp Messages</h3>
              <p className="text-2xl font-semibold text-neutral-900">{organization.stats.messagesSent}</p>
              <div className="mt-2 h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
                <div className="bg-green-500 h-1 rounded-full" style={{ width: `${(organization.stats.messagesSent / 5000) * 100}%` }}></div>
              </div>
              <p className="text-xs text-neutral-500 mt-1">5,000 messages included in plan</p>
            </Card>
          </div>
          
          {/* Organization Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 border">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">Organization Details</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-neutral-500">Organization Name</p>
                    <p className="text-neutral-900 font-medium">{organization.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Subdomain</p>
                    <p className="text-neutral-900 font-medium">{organization.subdomain}.jewelos.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Location</p>
                    <p className="text-neutral-900 font-medium">{organization.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Created Date</p>
                    <p className="text-neutral-900 font-medium">{organization.createdAt}</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium text-neutral-900 mb-2">Admin Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-neutral-500">Admin Name</p>
                      <p className="text-neutral-900 font-medium">{organization.adminName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Admin Email</p>
                      <p className="text-neutral-900 font-medium">{organization.adminEmail}</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Admin Phone</p>
                      <p className="text-neutral-900 font-medium">{organization.adminPhone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">Subscription & Usage</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-neutral-500">Current Plan</p>
                    <div className="flex items-center">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        organization.plan === 'Enterprise' ? 'bg-purple-100 text-purple-800' :
                        organization.plan === 'Professional' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      } mr-2`}>
                        {organization.plan}
                      </span>
                      <span className="text-neutral-900 font-medium">{organization.billing.amount}/month</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Next Billing Date</p>
                    <p className="text-neutral-900 font-medium">{organization.billing.nextBillingDate}</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium text-neutral-900 mb-2">Enabled Modules</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {Object.entries(organization.modules).map(([module, enabled]) => (
                      enabled && (
                        <div key={module} className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-sm text-neutral-700">
                            {module === 'crm' ? 'CRM' : 
                             module === 'whatsapp' ? 'WhatsApp' :
                             module === 'campaigns' ? 'Campaigns' :
                             module === 'tasks' ? 'Tasks' :
                             module === 'inventory' ? 'Inventory' : module}
                          </span>
                        </div>
                      )
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium text-neutral-900 mb-2">Usage Statistics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-neutral-500">Storage Used</p>
                      <p className="text-neutral-900 font-medium">{organization.stats.storageUsed}</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">API Calls (Monthly)</p>
                      <p className="text-neutral-900 font-medium">{organization.stats.apiCalls}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Recent Activity */}
          <Card className="p-6 border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-neutral-900">Recent Activity</h2>
              <Button variant="link" className="text-amber-600" asChild>
                <Link href="#" onClick={() => setActiveTab('activity')}>View All</Link>
              </Button>
            </div>
            <div className="space-y-4">
              {organization.recentActivity.slice(0, 3).map((activity, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      activity.type === 'user_added' ? 'bg-blue-100' :
                      activity.type === 'plan_changed' ? 'bg-purple-100' :
                      activity.type === 'payment' ? 'bg-green-100' :
                      activity.type === 'module_enabled' ? 'bg-amber-100' :
                      'bg-neutral-100'
                    }`}>
                      <span className="text-sm">
                        {activity.type === 'user_added' ? '👤' :
                         activity.type === 'plan_changed' ? '⭐' :
                         activity.type === 'payment' ? '💰' :
                         activity.type === 'module_enabled' ? '🧩' :
                         '🔄'}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-900">{activity.description}</p>
                    <p className="text-xs text-neutral-500">
                      {new Date(activity.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
        
        {/* Users Tab */}
        <TabsContent value="users" className="space-y-6">
          <Card className="p-6 border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-neutral-900">Users</h2>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                Add User
              </Button>
            </div>
            <p className="text-neutral-600 mb-4">This organization has {organization.users} active users.</p>
            <div className="bg-neutral-100 p-8 rounded-md text-center">
              <p className="text-neutral-500">User management interface would be displayed here</p>
            </div>
          </Card>
        </TabsContent>
        
        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-6">
          <Card className="p-6 border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-neutral-900">Billing & Subscription</h2>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                Change Plan
              </Button>
            </div>
            <div className="bg-neutral-100 p-8 rounded-md text-center">
              <p className="text-neutral-500">Billing and subscription management interface would be displayed here</p>
            </div>
          </Card>
        </TabsContent>
        
        {/* Activity Tab */}
        <TabsContent value="activity" className="space-y-6">
          <Card className="p-6 border">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Activity Log</h2>
            <div className="space-y-4">
              {organization.recentActivity.map((activity, index) => (
                <div key={index} className="flex py-3 border-b last:border-0">
                  <div className="mr-4 flex-shrink-0">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      activity.type === 'user_added' ? 'bg-blue-100' :
                      activity.type === 'plan_changed' ? 'bg-purple-100' :
                      activity.type === 'payment' ? 'bg-green-100' :
                      activity.type === 'module_enabled' ? 'bg-amber-100' :
                      'bg-neutral-100'
                    }`}>
                      <span className="text-sm">
                        {activity.type === 'user_added' ? '👤' :
                         activity.type === 'plan_changed' ? '⭐' :
                         activity.type === 'payment' ? '💰' :
                         activity.type === 'module_enabled' ? '🧩' :
                         '🔄'}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-neutral-900">{activity.description}</p>
                    <p className="text-xs text-neutral-500">
                      {new Date(activity.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button variant="ghost" size="sm" className="h-8 px-2 text-neutral-500">
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 