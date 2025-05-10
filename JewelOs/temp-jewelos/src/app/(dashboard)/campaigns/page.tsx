'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Campaign types
interface Campaign {
  id: string;
  name: string;
  type: 'festival' | 'promotion' | 'collection' | 'occasion';
  status: 'draft' | 'scheduled' | 'active' | 'completed';
  startDate: string;
  endDate: string;
  budget: number;
  audience: {
    total: number;
    reached: number;
  };
  channels: string[];
  engagement?: {
    views: number;
    responses: number;
    conversions: number;
  };
}

export default function CampaignsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'campaigns' | 'ideas' | 'calendar'>('campaigns');

  // Mock campaigns data
  const campaigns: Campaign[] = [
    {
      id: '1',
      name: 'Diwali Celebration Collection',
      type: 'festival',
      status: 'active',
      startDate: '2025-05-01',
      endDate: '2025-05-30',
      budget: 25000,
      audience: {
        total: 5000,
        reached: 3200
      },
      channels: ['WhatsApp', 'Instagram', 'In-store'],
      engagement: {
        views: 4200,
        responses: 840,
        conversions: 85
      }
    },
    {
      id: '2',
      name: 'Wedding Season Special',
      type: 'occasion',
      status: 'scheduled',
      startDate: '2025-06-15',
      endDate: '2025-07-15',
      budget: 40000,
      audience: {
        total: 2000,
        reached: 0
      },
      channels: ['WhatsApp', 'Facebook', 'SMS']
    },
    {
      id: '3',
      name: 'Summer Diamond Collection',
      type: 'collection',
      status: 'completed',
      startDate: '2025-03-01',
      endDate: '2025-04-15',
      budget: 30000,
      audience: {
        total: 3000,
        reached: 2800
      },
      channels: ['WhatsApp', 'Email', 'In-store'],
      engagement: {
        views: 3500,
        responses: 980,
        conversions: 110
      }
    },
    {
      id: '4',
      name: 'Anniversary Sale',
      type: 'promotion',
      status: 'draft',
      startDate: '2025-08-01',
      endDate: '2025-08-10',
      budget: 15000,
      audience: {
        total: 4000,
        reached: 0
      },
      channels: ['WhatsApp', 'SMS']
    }
  ];

  // AI generated campaign ideas
  const campaignIdeas = [
    {
      id: '1',
      title: 'Raksha Bandhan Special',
      description: 'Promote brother-sister jewelry sets for the upcoming Raksha Bandhan festival',
      suggestedDate: 'August 2025',
      type: 'festival',
      aiSuggestion: "Based on your store's sales history, Raksha Bandhan campaigns have generated 40% more revenue compared to regular weeks. Consider offering special packaging or add-ons for gifts."
    },
    {
      id: '2',
      title: 'Akshaya Tritiya Collection',
      description: 'Launch promotional campaign for the auspicious gold buying occasion',
      suggestedDate: 'May 2025',
      type: 'festival',
      aiSuggestion: 'Your customer data shows increased interest in gold coins and small jewelry items during this period. Consider highlighting these items in your campaign.'
    },
    {
      id: '3',
      title: 'Monsoon Mini-Collection',
      description: 'Showcase waterproof and humidity-resistant jewelry perfect for the rainy season',
      suggestedDate: 'July 2025',
      type: 'collection',
      aiSuggestion: 'Trending data shows increased interest in waterproof jewelry during monsoon. Adding waterproof guarantees may increase conversions.'
    }
  ];

  // Calendar events
  const calendarEvents = [
    { id: '1', title: 'Diwali Festival', date: '2025-11-12', type: 'festival' },
    { id: '2', title: 'Akshaya Tritiya', date: '2025-05-22', type: 'festival' },
    { id: '3', title: 'Wedding Season Start', date: '2025-10-15', type: 'season' },
    { id: '4', title: 'Karwa Chauth', date: '2025-11-01', type: 'festival' },
    { id: '5', title: 'Raksha Bandhan', date: '2025-08-19', type: 'festival' },
    { id: '6', title: "Valentine's Day", date: '2025-02-14', type: 'occasion' },
    { id: '7', title: 'Summer Collection Launch', date: '2025-03-15', type: 'event' },
    { id: '8', title: 'Anniversary Sale', date: '2025-08-01', type: 'promotion' }
  ];

  // Filter campaigns based on search term and filters
  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || campaign.status === filterStatus;
    const matchesType = filterType === 'all' || campaign.type === filterType;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Helper for status badge color
  const getStatusColor = (status: Campaign['status']) => {
    switch (status) {
      case 'draft':
        return 'bg-neutral-100 text-neutral-800';
      case 'scheduled':
        return 'bg-amber-100 text-amber-800';
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  // Get engagement rate
  const getEngagementRate = (campaign: Campaign) => {
    if (!campaign.engagement) return null;
    return Math.round((campaign.engagement.responses / campaign.audience.reached) * 100);
  };

  // Get conversion rate
  const getConversionRate = (campaign: Campaign) => {
    if (!campaign.engagement) return null;
    return Math.round((campaign.engagement.conversions / campaign.engagement.responses) * 100);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Campaigns</h1>
          <p className="text-neutral-500 mt-1">Plan and manage your marketing campaigns</p>
        </div>
        <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
          <Link href="/campaigns/new">
            <span className="mr-2">+</span> New Campaign
          </Link>
        </Button>
      </div>

      {/* Tabs */}
      <div className="border-b border-neutral-200">
        <div className="flex -mb-px">
          <button
            onClick={() => setActiveTab('campaigns')}
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'campaigns'
                ? 'border-b-2 border-purple-600 text-purple-600'
                : 'text-neutral-500 hover:text-neutral-700'
            }`}
          >
            Campaigns
          </button>
          <button
            onClick={() => setActiveTab('ideas')}
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'ideas'
                ? 'border-b-2 border-purple-600 text-purple-600'
                : 'text-neutral-500 hover:text-neutral-700'
            }`}
          >
            AI Suggestions
          </button>
          <button
            onClick={() => setActiveTab('calendar')}
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'calendar'
                ? 'border-b-2 border-purple-600 text-purple-600'
                : 'text-neutral-500 hover:text-neutral-700'
            }`}
          >
            Calendar
          </button>
        </div>
      </div>

      {/* Campaigns Tab */}
      {activeTab === 'campaigns' && (
        <>
          {/* Filters */}
          <Card className="p-4 border">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search campaigns..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="draft">Draft</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                </select>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Types</option>
                  <option value="festival">Festival</option>
                  <option value="promotion">Promotion</option>
                  <option value="collection">Collection</option>
                  <option value="occasion">Occasion</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Campaigns List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((campaign) => (
              <Link href={`/campaigns/${campaign.id}`} key={campaign.id}>
                <Card className="border hover:border-purple-300 hover:shadow-md transition-all h-full flex flex-col">
                  <div className="p-4 border-b">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-neutral-900">{campaign.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                        {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-neutral-500 space-x-2">
                      <span className="capitalize">{campaign.type}</span>
                      <span>•</span>
                      <span>
                        {formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex-1">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-neutral-500 mb-1">Audience</p>
                        <p className="font-medium">
                          {campaign.audience.reached} / {campaign.audience.total}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500 mb-1">Budget</p>
                        <p className="font-medium">₹{campaign.budget.toLocaleString()}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 mb-1">Channels</p>
                      <div className="flex flex-wrap gap-1">
                        {campaign.channels.map((channel, i) => (
                          <span key={i} className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs">
                            {channel}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {campaign.engagement && (
                    <div className="p-4 border-t bg-neutral-50">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <p className="text-xs text-neutral-500 mb-1">Views</p>
                          <p className="font-medium text-sm">{campaign.engagement.views}</p>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 mb-1">Engagement</p>
                          <p className="font-medium text-sm">{getEngagementRate(campaign)}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 mb-1">Conversions</p>
                          <p className="font-medium text-sm">{getConversionRate(campaign)}%</p>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </Link>
            ))}
          </div>

          {filteredCampaigns.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500">No campaigns found. Try changing your filters or create a new campaign.</p>
              <Button asChild className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/campaigns/new">
                  Create Campaign
                </Link>
              </Button>
            </div>
          )}
        </>
      )}

      {/* AI Suggestions Tab */}
      {activeTab === 'ideas' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaignIdeas.map((idea) => (
              <Card key={idea.id} className="border">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-neutral-900">{idea.title}</h3>
                    <span className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs capitalize">
                      {idea.type}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-neutral-600 text-sm mb-4">{idea.description}</p>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Suggested Timing</p>
                    <p className="text-sm font-medium mb-4">{idea.suggestedDate}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-md">
                    <p className="text-xs text-purple-700 mb-1">AI Insights</p>
                    <p className="text-sm text-purple-800">{idea.aiSuggestion}</p>
                  </div>
                </div>
                <div className="p-3 border-t flex justify-end">
                  <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Link href={`/campaigns/new?template=${idea.id}`}>
                      Create Campaign
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}

            <Card className="border flex flex-col items-center justify-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl text-purple-600">✨</span>
              </div>
              <h3 className="font-medium text-neutral-900 mb-2">Generate More Ideas</h3>
              <p className="text-sm text-neutral-500 text-center mb-4">
                Let our AI analyze your customer data and suggest more campaign ideas
              </p>
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/campaigns/generate-ideas">
                  Generate Ideas
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      )}

      {/* Calendar Tab */}
      {activeTab === 'calendar' && (
        <div className="space-y-6">
          <Card className="border">
            <div className="p-4 border-b">
              <h2 className="font-semibold">Upcoming Events</h2>
            </div>
            <div className="divide-y">
              {calendarEvents
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .map((event) => (
                  <div key={event.id} className="p-4 hover:bg-neutral-50">
                    <div className="flex items-start">
                      <div className="mr-4 w-12 h-12 flex flex-col items-center justify-center bg-neutral-100 rounded-md">
                        <span className="text-xs font-medium">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                        <span className="text-lg font-bold">{new Date(event.date).getDate()}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-neutral-900">{event.title}</h3>
                          <span className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs capitalize">
                            {event.type}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-500 mt-1">{formatDate(event.date)}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-end">
                      {/* Only show create campaign button for events without associated campaigns */}
                      {!campaigns.some(c => c.name.includes(event.title)) && (
                        <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                          <Link href={`/campaigns/new?event=${event.id}`}>
                            Create Campaign
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
} 