'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<'today' | 'week' | 'month'>('week');

  // Mock data
  const stats = {
    today: {
      newLeads: 5,
      followUps: 8,
      pendingTasks: 3,
      sales: 1
    },
    week: {
      newLeads: 32,
      followUps: 45,
      pendingTasks: 12,
      sales: 7
    },
    month: {
      newLeads: 124,
      followUps: 186,
      pendingTasks: 28,
      sales: 22
    }
  };

  const currentStats = stats[selectedPeriod];

  const recentActivities = [
    { type: 'lead', name: 'Vikram Mehta', action: 'added as new lead', time: '15 minutes ago', module: 'crm' },
    { type: 'task', name: 'Send catalog to Priya Shah', action: 'completed', time: '2 hours ago', module: 'tasks' },
    { type: 'campaign', name: 'Diwali Gold Collection', action: 'campaign started', time: '5 hours ago', module: 'campaigns' },
    { type: 'message', name: 'Rajesh Kumar', action: 'replied to WhatsApp message', time: '1 day ago', module: 'whatsapp' },
    { type: 'lead', name: 'Anita Patel', action: 'updated profile information', time: '1 day ago', module: 'crm' },
    { type: 'task', name: 'Follow up with Sanjay', action: 'due tomorrow', time: '1 day ago', module: 'tasks' }
  ];

  const upcomingEvents = [
    { name: 'Akshaya Tritiya', date: 'May 15, 2025', type: 'festival' },
    { name: 'Summer Collection Launch', date: 'June 1, 2025', type: 'campaign' },
    { name: 'Wedding Season Sale', date: 'June 10, 2025', type: 'promotion' }
  ];

  // Links to quick actions
  const quickActions = [
    { title: 'Add New Lead', href: '/crm/leads/new', icon: '👤', color: 'bg-blue-50 text-blue-600' },
    { title: 'Send WhatsApp Broadcast', href: '/whatsapp/broadcast', icon: '📢', color: 'bg-green-50 text-green-600' },
    { title: 'Create Campaign', href: '/campaigns/new', icon: '✨', color: 'bg-purple-50 text-purple-600' },
    { title: 'Assign Tasks', href: '/tasks/new', icon: '📋', color: 'bg-amber-50 text-amber-600' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
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
          <p className="text-sm text-amber-600 font-medium">New Leads</p>
          <p className="text-3xl font-bold text-amber-700 mt-1">{currentStats.newLeads}</p>
          <div className="text-xs text-amber-500 mt-2">
            {selectedPeriod === 'today' ? 'Today' : selectedPeriod === 'week' ? 'This Week' : 'This Month'}
          </div>
        </Card>
        
        <Card className="p-4 border-blue-100 bg-blue-50">
          <p className="text-sm text-blue-600 font-medium">Follow-ups</p>
          <p className="text-3xl font-bold text-blue-700 mt-1">{currentStats.followUps}</p>
          <div className="text-xs text-blue-500 mt-2">
            {selectedPeriod === 'today' ? 'Today' : selectedPeriod === 'week' ? 'This Week' : 'This Month'}
          </div>
        </Card>
        
        <Card className="p-4 border-green-100 bg-green-50">
          <p className="text-sm text-green-600 font-medium">Sales</p>
          <p className="text-3xl font-bold text-green-700 mt-1">{currentStats.sales}</p>
          <div className="text-xs text-green-500 mt-2">
            {selectedPeriod === 'today' ? 'Today' : selectedPeriod === 'week' ? 'This Week' : 'This Month'}
          </div>
        </Card>
        
        <Card className="p-4 border-purple-100 bg-purple-50">
          <p className="text-sm text-purple-600 font-medium">Pending Tasks</p>
          <p className="text-3xl font-bold text-purple-700 mt-1">{currentStats.pendingTasks}</p>
          <div className="text-xs text-purple-500 mt-2">
            {selectedPeriod === 'today' ? 'Due Today' : selectedPeriod === 'week' ? 'Due This Week' : 'Due This Month'}
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card className="border">
            <div className="p-4 border-b">
              <h2 className="font-semibold text-neutral-900">Recent Activity</h2>
            </div>
            <div className="divide-y">
              {recentActivities.map((activity, i) => (
                <div key={i} className="p-4 hover:bg-neutral-50">
                  <div className="flex items-start">
                    <div className="mr-3">
                      {activity.type === 'lead' && <span className="text-blue-500 text-xl">👤</span>}
                      {activity.type === 'task' && <span className="text-amber-500 text-xl">📋</span>}
                      {activity.type === 'campaign' && <span className="text-purple-500 text-xl">✨</span>}
                      {activity.type === 'message' && <span className="text-green-500 text-xl">💬</span>}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-neutral-900">
                        <span className="font-bold">{activity.name}</span> {activity.action}
                      </p>
                      <p className="text-xs text-neutral-500 mt-1">{activity.time}</p>
                    </div>
                    <Link 
                      href={`/${activity.module}`} 
                      className="text-xs text-amber-600 hover:text-amber-800 hover:underline"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 text-center border-t">
              <Button variant="link" asChild>
                <Link href="/activities" className="text-sm text-neutral-600 hover:text-neutral-900">
                  View All Activities
                </Link>
              </Button>
            </div>
          </Card>
        </div>

        {/* Upcoming Events & Reminders */}
        <div>
          <Card className="border">
            <div className="p-4 border-b">
              <h2 className="font-semibold text-neutral-900">Upcoming Events</h2>
            </div>
            <div className="divide-y">
              {upcomingEvents.map((event, i) => (
                <div key={i} className="p-4 hover:bg-neutral-50">
                  <div className="flex items-start">
                    <div className="mr-3">
                      {event.type === 'festival' && <span className="text-amber-500 text-xl">🎆</span>}
                      {event.type === 'campaign' && <span className="text-blue-500 text-xl">📣</span>}
                      {event.type === 'promotion' && <span className="text-green-500 text-xl">🏷️</span>}
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900">{event.name}</p>
                      <p className="text-xs text-neutral-500 mt-1">{event.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 text-center border-t">
              <Button variant="link" asChild>
                <Link href="/campaigns/calendar" className="text-sm text-neutral-600 hover:text-neutral-900">
                  View Calendar
                </Link>
              </Button>
            </div>
          </Card>

          <Card className="border mt-6">
            <div className="p-4 border-b">
              <h2 className="font-semibold text-neutral-900">Need Help?</h2>
            </div>
            <div className="p-4">
              <p className="text-sm text-neutral-600 mb-4">Reach out to our support team for assistance with JewelOS.</p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/help">Contact Support</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 