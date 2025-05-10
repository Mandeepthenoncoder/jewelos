'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function NewOrganizationPage() {
  // Organization form state
  const [formData, setFormData] = useState({
    // Organization details
    name: '',
    subdomain: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: 'India',
    
    // Admin details
    adminName: '',
    adminEmail: '',
    adminPhone: '',
    
    // Plan details
    plan: 'Professional',
    billingCycle: 'monthly',
    modules: {
      crm: true,
      whatsapp: true,
      campaigns: true,
      tasks: true,
      inventory: false
    }
  });
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    if (name.startsWith('modules.')) {
      const moduleName = name.split('.')[1];
      setFormData({
        ...formData,
        modules: {
          ...formData.modules,
          [moduleName]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: checked
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to an API
    console.log('Form submitted:', formData);
    
    // Redirect to organizations list after submission
    // In production, this would wait for API response
    alert('Organization created successfully!');
    // router.push('/mandeepsuperadmin/organizations');
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-900">Add New Organization</h1>
        <Button variant="outline" asChild>
          <Link href="/mandeepsuperadmin/organizations">Cancel</Link>
        </Button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          {/* Organization Details */}
          <Card className="p-6 border">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Organization Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                  Organization Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subdomain" className="block text-sm font-medium text-neutral-700">
                  Subdomain <span className="text-red-500">*</span>
                </label>
                <div className="flex rounded-md">
                  <Input
                    id="subdomain"
                    name="subdomain"
                    value={formData.subdomain}
                    onChange={handleInputChange}
                    className="rounded-r-none"
                    required
                  />
                  <span className="inline-flex items-center px-3 border border-l-0 border-neutral-300 bg-neutral-50 text-neutral-500 rounded-r-md">
                    .jewelos.com
                  </span>
                </div>
                <p className="text-xs text-neutral-500">
                  This will be used for the organization's dashboard URL.
                </p>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
                  Business Phone <span className="text-red-500">*</span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-neutral-700">
                  Address
                </label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="city" className="block text-sm font-medium text-neutral-700">
                  City
                </label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="state" className="block text-sm font-medium text-neutral-700">
                  State
                </label>
                <Input
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="country" className="block text-sm font-medium text-neutral-700">
                  Country
                </label>
                <Input
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </Card>
          
          {/* Admin Account */}
          <Card className="p-6 border">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Admin Account</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="adminName" className="block text-sm font-medium text-neutral-700">
                  Admin Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="adminName"
                  name="adminName"
                  value={formData.adminName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="adminEmail" className="block text-sm font-medium text-neutral-700">
                  Admin Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="adminEmail"
                  name="adminEmail"
                  type="email"
                  value={formData.adminEmail}
                  onChange={handleInputChange}
                  required
                />
                <p className="text-xs text-neutral-500">
                  The admin will receive an invitation email at this address.
                </p>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="adminPhone" className="block text-sm font-medium text-neutral-700">
                  Admin Phone <span className="text-red-500">*</span>
                </label>
                <Input
                  id="adminPhone"
                  name="adminPhone"
                  value={formData.adminPhone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </Card>
          
          {/* Plan & Billing */}
          <Card className="p-6 border">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Plan & Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="plan" className="block text-sm font-medium text-neutral-700">
                    Select Plan <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  >
                    <option value="Starter">Starter - ₹4,999/month</option>
                    <option value="Professional">Professional - ₹9,999/month</option>
                    <option value="Enterprise">Enterprise - Custom pricing</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="billingCycle" className="block text-sm font-medium text-neutral-700">
                    Billing Cycle <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="billingCycle"
                    name="billingCycle"
                    value={formData.billingCycle}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  >
                    <option value="monthly">Monthly</option>
                    <option value="annual">Annual (Save 15%)</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="block text-sm font-medium text-neutral-700">
                  Enabled Modules
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="modules.crm"
                      name="modules.crm"
                      type="checkbox"
                      checked={formData.modules.crm}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-neutral-300 rounded"
                    />
                    <label htmlFor="modules.crm" className="ml-2 block text-sm text-neutral-700">
                      CRM & Lead Management
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="modules.whatsapp"
                      name="modules.whatsapp"
                      type="checkbox"
                      checked={formData.modules.whatsapp}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-neutral-300 rounded"
                    />
                    <label htmlFor="modules.whatsapp" className="ml-2 block text-sm text-neutral-700">
                      WhatsApp Business Integration
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="modules.campaigns"
                      name="modules.campaigns"
                      type="checkbox"
                      checked={formData.modules.campaigns}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-neutral-300 rounded"
                    />
                    <label htmlFor="modules.campaigns" className="ml-2 block text-sm text-neutral-700">
                      AI-Driven Campaign Management
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="modules.tasks"
                      name="modules.tasks"
                      type="checkbox"
                      checked={formData.modules.tasks}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-neutral-300 rounded"
                    />
                    <label htmlFor="modules.tasks" className="ml-2 block text-sm text-neutral-700">
                      Task Management
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="modules.inventory"
                      name="modules.inventory"
                      type="checkbox"
                      checked={formData.modules.inventory}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-neutral-300 rounded"
                    />
                    <label htmlFor="modules.inventory" className="ml-2 block text-sm text-neutral-700">
                      Inventory Management (Beta)
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Submit Buttons */}
          <div className="flex justify-end space-x-3">
            <Button variant="outline" type="button" asChild>
              <Link href="/mandeepsuperadmin/organizations">Cancel</Link>
            </Button>
            <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white">
              Create Organization
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
} 