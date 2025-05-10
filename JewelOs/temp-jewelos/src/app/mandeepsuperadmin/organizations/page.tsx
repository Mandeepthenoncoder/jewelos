'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function OrganizationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [planFilter, setPlanFilter] = useState<string>('all');
  
  // Mock data for organizations
  const allOrganizations = [
    { id: '1', name: 'Kumar Jewellers', location: 'Mumbai', plan: 'Enterprise', status: 'active', users: 12, createdAt: '2023-05-15', adminName: 'Rajesh Kumar', adminEmail: 'rajesh@kumarjewellers.com' },
    { id: '2', name: 'Golden Designs', location: 'Delhi', plan: 'Professional', status: 'active', users: 8, createdAt: '2023-05-10', adminName: 'Priya Sharma', adminEmail: 'priya@goldendesigns.com' },
    { id: '3', name: 'Heritage Jewels', location: 'Jaipur', plan: 'Professional', status: 'active', users: 5, createdAt: '2023-05-08', adminName: 'Vikram Singh', adminEmail: 'vikram@heritagejewels.com' },
    { id: '4', name: 'Royal Diamonds', location: 'Surat', plan: 'Starter', status: 'trial', users: 3, createdAt: '2023-05-05', adminName: 'Anita Patel', adminEmail: 'anita@royaldiamonds.com' },
    { id: '5', name: 'Precious Gems', location: 'Bangalore', plan: 'Starter', status: 'trial', users: 2, createdAt: '2023-05-01', adminName: 'Suresh Reddy', adminEmail: 'suresh@preciousgems.com' },
    { id: '6', name: 'Elegance Jewellery', location: 'Chennai', plan: 'Professional', status: 'active', users: 7, createdAt: '2023-04-28', adminName: 'Deepa Nair', adminEmail: 'deepa@elegancejewellery.com' },
    { id: '7', name: 'Classic Ornaments', location: 'Hyderabad', plan: 'Starter', status: 'inactive', users: 1, createdAt: '2023-04-20', adminName: 'Rahul Mehta', adminEmail: 'rahul@classicornaments.com' },
    { id: '8', name: 'Diamond World', location: 'Ahmedabad', plan: 'Enterprise', status: 'active', users: 10, createdAt: '2023-04-15', adminName: 'Neha Gupta', adminEmail: 'neha@diamondworld.com' },
    { id: '9', name: 'Traditional Creations', location: 'Kolkata', plan: 'Professional', status: 'active', users: 6, createdAt: '2023-04-10', adminName: 'Amit Das', adminEmail: 'amit@traditionalcreations.com' },
    { id: '10', name: 'Gem Paradise', location: 'Pune', plan: 'Starter', status: 'inactive', users: 0, createdAt: '2023-04-05', adminName: 'Kavita Shah', adminEmail: 'kavita@gemparadise.com' }
  ];
  
  // Filter organizations based on search query and filters
  const filteredOrganizations = allOrganizations.filter(org => {
    const matchesSearch = org.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         org.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         org.adminName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         org.adminEmail.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || org.status === statusFilter;
    const matchesPlan = planFilter === 'all' || org.plan === planFilter;
    
    return matchesSearch && matchesStatus && matchesPlan;
  });
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-900">Organizations</h1>
        <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
          <Link href="/mandeepsuperadmin/organizations/new">Add New Organization</Link>
        </Button>
      </div>
      
      {/* Filters */}
      <Card className="p-4 border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search organizations, admins, locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="trial">Trial</option>
              <option value="inactive">Inactive</option>
            </select>
            
            <select
              value={planFilter}
              onChange={(e) => setPlanFilter(e.target.value)}
              className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Plans</option>
              <option value="Enterprise">Enterprise</option>
              <option value="Professional">Professional</option>
              <option value="Starter">Starter</option>
            </select>
          </div>
        </div>
      </Card>
      
      {/* Organizations Table */}
      <Card className="border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-neutral-50 border-b">
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Organization</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Location</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Admin</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Plan</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Users</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Created</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredOrganizations.length > 0 ? (
                filteredOrganizations.map((org) => (
                  <tr key={org.id} className="hover:bg-neutral-50">
                    <td className="py-3 px-4">
                      <Link href={`/mandeepsuperadmin/organizations/${org.id}`} className="font-medium text-neutral-900 hover:text-amber-600">
                        {org.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-neutral-600">{org.location}</td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="text-neutral-900">{org.adminName}</p>
                        <p className="text-neutral-500 text-xs">{org.adminEmail}</p>
                      </div>
                    </td>
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
                        <Button variant="outline" size="sm" className="h-8 px-2" asChild>
                          <Link href={`/mandeepsuperadmin/organizations/${org.id}`}>
                            View
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 px-2" asChild>
                          <Link href={`/mandeepsuperadmin/organizations/${org.id}/edit`}>
                            Edit
                          </Link>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="py-6 text-center text-neutral-500">
                    No organizations found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
      
      {/* Pagination */}
      {filteredOrganizations.length > 0 && (
        <div className="flex justify-between items-center">
          <p className="text-sm text-neutral-500">
            Showing {filteredOrganizations.length} of {allOrganizations.length} organizations
          </p>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-amber-50 border-amber-200">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 