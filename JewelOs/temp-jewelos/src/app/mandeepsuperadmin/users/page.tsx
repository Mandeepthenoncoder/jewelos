'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  
  // Mock data for users
  const allUsers = [
    { id: '1', name: 'Rajesh Kumar', email: 'rajesh@kumarjewellers.com', phone: '+91 98765 43210', organization: 'Kumar Jewellers', organizationId: '1', role: 'admin', status: 'active', lastLogin: '2023-05-21T14:30:00Z' },
    { id: '2', name: 'Priya Sharma', email: 'priya@kumarjewellers.com', phone: '+91 87654 32109', organization: 'Kumar Jewellers', organizationId: '1', role: 'manager', status: 'active', lastLogin: '2023-05-20T10:15:00Z' },
    { id: '3', name: 'Amit Patel', email: 'amit@kumarjewellers.com', phone: '+91 76543 21098', organization: 'Kumar Jewellers', organizationId: '1', role: 'user', status: 'active', lastLogin: '2023-05-19T16:45:00Z' },
    { id: '4', name: 'Neha Gupta', email: 'neha@goldendesigns.com', phone: '+91 65432 10987', organization: 'Golden Designs', organizationId: '2', role: 'admin', status: 'active', lastLogin: '2023-05-18T09:20:00Z' },
    { id: '5', name: 'Vikram Singh', email: 'vikram@heritagejewels.com', phone: '+91 54321 09876', organization: 'Heritage Jewels', organizationId: '3', role: 'admin', status: 'active', lastLogin: '2023-05-17T11:30:00Z' },
    { id: '6', name: 'Deepa Nair', email: 'deepa@elegancejewellery.com', phone: '+91 43210 98765', organization: 'Elegance Jewellery', organizationId: '6', role: 'admin', status: 'active', lastLogin: '2023-05-16T14:00:00Z' },
    { id: '7', name: 'Rahul Mehta', email: 'rahul@classicornaments.com', phone: '+91 32109 87654', organization: 'Classic Ornaments', organizationId: '7', role: 'admin', status: 'inactive', lastLogin: '2023-04-20T15:45:00Z' },
    { id: '8', name: 'Suresh Reddy', email: 'suresh@preciousgems.com', phone: '+91 21098 76543', organization: 'Precious Gems', organizationId: '5', role: 'admin', status: 'trial', lastLogin: '2023-05-01T13:10:00Z' },
    { id: '9', name: 'Anita Patel', email: 'anita@royaldiamonds.com', phone: '+91 10987 65432', organization: 'Royal Diamonds', organizationId: '4', role: 'admin', status: 'trial', lastLogin: '2023-05-05T10:30:00Z' },
    { id: '10', name: 'Kavita Shah', email: 'kavita@gemparadise.com', phone: '+91 09876 54321', organization: 'Gem Paradise', organizationId: '10', role: 'admin', status: 'inactive', lastLogin: '2023-04-05T11:15:00Z' }
  ];
  
  // Filter users based on search query and filters
  const filteredUsers = allUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.organization.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-900">Users</h1>
        <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
          <Link href="/mandeepsuperadmin/users/new">Add New User</Link>
        </Button>
      </div>
      
      {/* Filters */}
      <Card className="p-4 border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search users by name, email, or organization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div className="flex gap-2">
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="user">User</option>
            </select>
            
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
          </div>
        </div>
      </Card>
      
      {/* Users Table */}
      <Card className="border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-neutral-50 border-b">
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">User</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Organization</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Role</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Last Login</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-neutral-50">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-neutral-900">{user.name}</p>
                        <p className="text-neutral-500 text-xs">{user.email} · {user.phone}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Link 
                        href={`/mandeepsuperadmin/organizations/${user.organizationId}`} 
                        className="text-neutral-900 hover:text-amber-600"
                      >
                        {user.organization}
                      </Link>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.role === 'admin' ? 'bg-purple-100 text-purple-800' :
                        user.role === 'manager' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === 'active' ? 'bg-green-100 text-green-800' :
                        user.status === 'trial' ? 'bg-amber-100 text-amber-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-neutral-600">
                      {new Date(user.lastLogin).toLocaleString()}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="h-8 px-2" asChild>
                          <Link href={`/mandeepsuperadmin/users/${user.id}`}>
                            View
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 px-2" asChild>
                          <Link href={`/mandeepsuperadmin/users/${user.id}/edit`}>
                            Edit
                          </Link>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-6 text-center text-neutral-500">
                    No users found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
      
      {/* Pagination */}
      {filteredUsers.length > 0 && (
        <div className="flex justify-between items-center">
          <p className="text-sm text-neutral-500">
            Showing {filteredUsers.length} of {allUsers.length} users
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