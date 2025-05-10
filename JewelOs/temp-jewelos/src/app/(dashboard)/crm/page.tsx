'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Mock data types
interface Lead {
  id: string;
  name: string;
  phone: string;
  source: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'converted' | 'lost';
  lastContact: string;
  tags: string[];
  notes?: string;
}

export default function CRMPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  
  // Mock leads data
  const leadsData: Lead[] = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      source: 'WhatsApp',
      status: 'new',
      lastContact: '2025-05-08',
      tags: ['wedding', 'gold'],
      notes: 'Looking for wedding jewelry sets'
    },
    {
      id: '2',
      name: 'Priya Sharma',
      phone: '+91 87654 32109',
      source: 'Website',
      status: 'contacted',
      lastContact: '2025-05-07',
      tags: ['diamond', 'anniversary']
    },
    {
      id: '3',
      name: 'Amit Patel',
      phone: '+91 76543 21098',
      source: 'Store Visit',
      status: 'qualified',
      lastContact: '2025-05-05',
      tags: ['investment', 'gold']
    },
    {
      id: '4',
      name: 'Deepika Singh',
      phone: '+91 65432 10987',
      source: 'Referral',
      status: 'proposal',
      lastContact: '2025-05-03',
      tags: ['bridal', 'custom']
    },
    {
      id: '5',
      name: 'Vikram Mehta',
      phone: '+91 54321 09876',
      source: 'Instagram',
      status: 'converted',
      lastContact: '2025-04-28',
      tags: ['gift', 'diamond']
    },
    {
      id: '6',
      name: 'Anita Reddy',
      phone: '+91 43210 98765',
      source: 'Facebook',
      status: 'lost',
      lastContact: '2025-04-20',
      tags: ['earrings', 'budget']
    }
  ];

  // Filter leads based on search term and status
  const filteredLeads = leadsData.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      lead.phone.includes(searchTerm) ||
      (lead.notes && lead.notes.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = filterStatus === 'all' || lead.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  // Get status badge color
  const getStatusColor = (status: Lead['status']) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'contacted':
        return 'bg-purple-100 text-purple-800';
      case 'qualified':
        return 'bg-amber-100 text-amber-800';
      case 'proposal':
        return 'bg-orange-100 text-orange-800';
      case 'converted':
        return 'bg-green-100 text-green-800';
      case 'lost':
        return 'bg-neutral-100 text-neutral-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  // Format date to a readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get days since last contact
  const getDaysSinceLastContact = (dateString: string) => {
    const lastContactDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - lastContactDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Customers & Leads</h1>
          <p className="text-neutral-500 mt-1">Manage your customer relationships</p>
        </div>
        <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white">
          <Link href="/crm/leads/new">
            <span className="mr-2">+</span> Add New Lead
          </Link>
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="p-4 border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search by name, phone or notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="proposal">Proposal</option>
              <option value="converted">Converted</option>
              <option value="lost">Lost</option>
            </select>
            <Button variant="outline">
              More Filters
            </Button>
          </div>
        </div>
      </Card>

      {/* Leads List */}
      <Card className="border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50 border-b">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-700">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-700">Phone</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-700">Source</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-700">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-700">Last Contact</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-700">Tags</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-neutral-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-neutral-50">
                  <td className="py-3 px-4">
                    <Link href={`/crm/leads/${lead.id}`} className="font-medium text-neutral-900 hover:text-amber-600">
                      {lead.name}
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-neutral-700">
                    <Link href={`/whatsapp/chat/${lead.id}`} className="hover:text-green-600">
                      {lead.phone}
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-neutral-600">{lead.source}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                      {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-neutral-700">{formatDate(lead.lastContact)}</div>
                    <div className="text-xs text-neutral-500">{getDaysSinceLastContact(lead.lastContact)} days ago</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {lead.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right space-x-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/whatsapp/chat/${lead.id}`} className="text-green-600 hover:text-green-800">
                        Chat
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/crm/leads/${lead.id}/edit`}>
                        Edit
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredLeads.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500">No leads found. Try changing your filters or add a new lead.</p>
            <Button asChild className="mt-4 bg-amber-500 hover:bg-amber-600 text-white">
              <Link href="/crm/leads/new">
                Add New Lead
              </Link>
            </Button>
          </div>
        )}
        
        {/* Pagination */}
        <div className="border-t px-4 py-3 flex items-center justify-between">
          <div className="text-sm text-neutral-600">
            Showing <span className="font-medium">{filteredLeads.length}</span> leads
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 border">
          <p className="text-sm text-neutral-600 font-medium">Total Leads</p>
          <p className="text-2xl font-bold text-neutral-900 mt-1">{leadsData.length}</p>
        </Card>
        <Card className="p-4 border">
          <p className="text-sm text-neutral-600 font-medium">Converted</p>
          <p className="text-2xl font-bold text-green-600 mt-1">
            {leadsData.filter(lead => lead.status === 'converted').length}
          </p>
        </Card>
        <Card className="p-4 border">
          <p className="text-sm text-neutral-600 font-medium">Needs Follow-up</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">
            {leadsData.filter(lead => ['new', 'contacted', 'qualified'].includes(lead.status)).length}
          </p>
        </Card>
        <Card className="p-4 border">
          <p className="text-sm text-neutral-600 font-medium">Conversion Rate</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">
            {Math.round((leadsData.filter(lead => lead.status === 'converted').length / leadsData.length) * 100)}%
          </p>
        </Card>
      </div>
    </div>
  );
} 