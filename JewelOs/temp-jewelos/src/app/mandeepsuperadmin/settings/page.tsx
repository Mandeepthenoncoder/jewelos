'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function SettingsPage() {
  // System settings state
  const [systemSettings, setSystemSettings] = useState({
    siteName: 'JewelOS',
    siteTagline: 'The complete platform for jewelry retailers in India',
    contactEmail: 'support@jewelos.com',
    supportPhone: '+91 98765 43210',
    maxFileSize: '10',
    maxOrganizationsPerUser: '3',
    defaultUserRole: 'user',
    signupEnabled: true,
    maintenanceMode: false,
    maintenanceMessage: 'JewelOS is currently undergoing scheduled maintenance. Please check back later.'
  });
  
  // API settings state
  const [apiSettings, setApiSettings] = useState({
    whatsappApiKey: '*******************',
    whatsappBusinessId: '12345678901234',
    smsApiKey: '*******************',
    smsProviderId: 'MSG91-98765',
    paymentGatewayKey: '*******************',
    paymentGatewaySecret: '*******************',
    emailServiceApiKey: '*******************',
    rateLimit: '100'
  });
  
  // Email template settings
  const [emailTemplates, setEmailTemplates] = useState({
    welcomeEmail: `Dear {name},

Welcome to JewelOS! Your account has been created successfully.

Your login details:
Email: {email}
Password: {password}

Get started by logging in at {login_url}

Best regards,
The JewelOS Team`,
    
    organizationInvite: `Dear {name},

You have been invited to join {organization} on JewelOS.

Click the link below to accept the invitation:
{invite_url}

Best regards,
The JewelOS Team`,
    
    passwordReset: `Dear {name},

A password reset has been requested for your JewelOS account.

Click the link below to reset your password:
{reset_url}

If you did not request a password reset, please ignore this email.

Best regards,
The JewelOS Team`
  });
  
  // Handle form input changes
  const handleSystemSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setSystemSettings({
      ...systemSettings,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };
  
  const handleApiSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setApiSettings({
      ...apiSettings,
      [name]: value
    });
  };
  
  const handleEmailTemplateChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setEmailTemplates({
      ...emailTemplates,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSystemSettingsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to an API
    console.log('System settings submitted:', systemSettings);
    alert('System settings saved successfully!');
  };
  
  const handleApiSettingsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to an API
    console.log('API settings submitted:', apiSettings);
    alert('API settings saved successfully!');
  };
  
  const handleEmailTemplatesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to an API
    console.log('Email templates submitted:', emailTemplates);
    alert('Email templates saved successfully!');
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-900">System Settings</h1>
        <Button variant="outline" asChild>
          <Link href="/mandeepsuperadmin">Back to Dashboard</Link>
        </Button>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General Settings</TabsTrigger>
          <TabsTrigger value="api">API & Integrations</TabsTrigger>
          <TabsTrigger value="email">Email Templates</TabsTrigger>
          <TabsTrigger value="backup">Backup & Restore</TabsTrigger>
        </TabsList>
        
        {/* General Settings Tab */}
        <TabsContent value="general">
          <Card className="p-6 border">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">System Configuration</h2>
            <form onSubmit={handleSystemSettingsSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="siteName" className="block text-sm font-medium text-neutral-700">
                    Site Name
                  </label>
                  <Input
                    id="siteName"
                    name="siteName"
                    value={systemSettings.siteName}
                    onChange={handleSystemSettingsChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="siteTagline" className="block text-sm font-medium text-neutral-700">
                    Site Tagline
                  </label>
                  <Input
                    id="siteTagline"
                    name="siteTagline"
                    value={systemSettings.siteTagline}
                    onChange={handleSystemSettingsChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-neutral-700">
                    Contact Email
                  </label>
                  <Input
                    id="contactEmail"
                    name="contactEmail"
                    type="email"
                    value={systemSettings.contactEmail}
                    onChange={handleSystemSettingsChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="supportPhone" className="block text-sm font-medium text-neutral-700">
                    Support Phone
                  </label>
                  <Input
                    id="supportPhone"
                    name="supportPhone"
                    value={systemSettings.supportPhone}
                    onChange={handleSystemSettingsChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="maxFileSize" className="block text-sm font-medium text-neutral-700">
                    Max File Upload Size (MB)
                  </label>
                  <Input
                    id="maxFileSize"
                    name="maxFileSize"
                    type="number"
                    value={systemSettings.maxFileSize}
                    onChange={handleSystemSettingsChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="maxOrganizationsPerUser" className="block text-sm font-medium text-neutral-700">
                    Max Organizations per User
                  </label>
                  <Input
                    id="maxOrganizationsPerUser"
                    name="maxOrganizationsPerUser"
                    type="number"
                    value={systemSettings.maxOrganizationsPerUser}
                    onChange={handleSystemSettingsChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="defaultUserRole" className="block text-sm font-medium text-neutral-700">
                    Default User Role
                  </label>
                  <select
                    id="defaultUserRole"
                    name="defaultUserRole"
                    value={systemSettings.defaultUserRole}
                    onChange={handleSystemSettingsChange}
                    className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="user">User</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-4 border-t border-neutral-200">
                <h3 className="text-md font-medium text-neutral-900 mb-4">System Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="signupEnabled"
                      name="signupEnabled"
                      type="checkbox"
                      checked={systemSettings.signupEnabled}
                      onChange={handleSystemSettingsChange}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-neutral-300 rounded"
                    />
                    <label htmlFor="signupEnabled" className="ml-2 block text-sm text-neutral-700">
                      Enable User Signups
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="maintenanceMode"
                      name="maintenanceMode"
                      type="checkbox"
                      checked={systemSettings.maintenanceMode}
                      onChange={handleSystemSettingsChange}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-neutral-300 rounded"
                    />
                    <label htmlFor="maintenanceMode" className="ml-2 block text-sm text-neutral-700">
                      Enable Maintenance Mode
                    </label>
                  </div>
                  
                  {systemSettings.maintenanceMode && (
                    <div className="mt-4">
                      <label htmlFor="maintenanceMessage" className="block text-sm font-medium text-neutral-700 mb-1">
                        Maintenance Message
                      </label>
                      <Textarea
                        id="maintenanceMessage"
                        name="maintenanceMessage"
                        rows={3}
                        value={systemSettings.maintenanceMessage}
                        onChange={handleSystemSettingsChange}
                      />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white">
                  Save Settings
                </Button>
              </div>
            </form>
          </Card>
        </TabsContent>
        
        {/* API & Integrations Tab */}
        <TabsContent value="api">
          <Card className="p-6 border">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">API & Integration Settings</h2>
            <form onSubmit={handleApiSettingsSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="whatsappApiKey" className="block text-sm font-medium text-neutral-700">
                    WhatsApp API Key
                  </label>
                  <Input
                    id="whatsappApiKey"
                    name="whatsappApiKey"
                    type="password"
                    value={apiSettings.whatsappApiKey}
                    onChange={handleApiSettingsChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="whatsappBusinessId" className="block text-sm font-medium text-neutral-700">
                    WhatsApp Business ID
                  </label>
                  <Input
                    id="whatsappBusinessId"
                    name="whatsappBusinessId"
                    value={apiSettings.whatsappBusinessId}
                    onChange={handleApiSettingsChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="smsApiKey" className="block text-sm font-medium text-neutral-700">
                    SMS API Key
                  </label>
                  <Input
                    id="smsApiKey"
                    name="smsApiKey"
                    type="password"
                    value={apiSettings.smsApiKey}
                    onChange={handleApiSettingsChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="smsProviderId" className="block text-sm font-medium text-neutral-700">
                    SMS Provider ID
                  </label>
                  <Input
                    id="smsProviderId"
                    name="smsProviderId"
                    value={apiSettings.smsProviderId}
                    onChange={handleApiSettingsChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="paymentGatewayKey" className="block text-sm font-medium text-neutral-700">
                    Payment Gateway Key
                  </label>
                  <Input
                    id="paymentGatewayKey"
                    name="paymentGatewayKey"
                    type="password"
                    value={apiSettings.paymentGatewayKey}
                    onChange={handleApiSettingsChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="paymentGatewaySecret" className="block text-sm font-medium text-neutral-700">
                    Payment Gateway Secret
                  </label>
                  <Input
                    id="paymentGatewaySecret"
                    name="paymentGatewaySecret"
                    type="password"
                    value={apiSettings.paymentGatewaySecret}
                    onChange={handleApiSettingsChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="emailServiceApiKey" className="block text-sm font-medium text-neutral-700">
                    Email Service API Key
                  </label>
                  <Input
                    id="emailServiceApiKey"
                    name="emailServiceApiKey"
                    type="password"
                    value={apiSettings.emailServiceApiKey}
                    onChange={handleApiSettingsChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="rateLimit" className="block text-sm font-medium text-neutral-700">
                    API Rate Limit (requests/minute)
                  </label>
                  <Input
                    id="rateLimit"
                    name="rateLimit"
                    type="number"
                    value={apiSettings.rateLimit}
                    onChange={handleApiSettingsChange}
                  />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white">
                  Save API Settings
                </Button>
              </div>
            </form>
          </Card>
        </TabsContent>
        
        {/* Email Templates Tab */}
        <TabsContent value="email">
          <Card className="p-6 border">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Email Templates</h2>
            <form onSubmit={handleEmailTemplatesSubmit} className="space-y-6">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="welcomeEmail" className="block text-sm font-medium text-neutral-700">
                      Welcome Email
                    </label>
                    <span className="text-xs text-neutral-500">
                      Available variables: {"{name}"}, {"{email}"}, {"{password}"}, {"{login_url}"}
                    </span>
                  </div>
                  <Textarea
                    id="welcomeEmail"
                    name="welcomeEmail"
                    rows={8}
                    value={emailTemplates.welcomeEmail}
                    onChange={handleEmailTemplateChange}
                    className="font-mono text-sm"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="organizationInvite" className="block text-sm font-medium text-neutral-700">
                      Organization Invitation
                    </label>
                    <span className="text-xs text-neutral-500">
                      Available variables: {"{name}"}, {"{organization}"}, {"{invite_url}"}
                    </span>
                  </div>
                  <Textarea
                    id="organizationInvite"
                    name="organizationInvite"
                    rows={8}
                    value={emailTemplates.organizationInvite}
                    onChange={handleEmailTemplateChange}
                    className="font-mono text-sm"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="passwordReset" className="block text-sm font-medium text-neutral-700">
                      Password Reset
                    </label>
                    <span className="text-xs text-neutral-500">
                      Available variables: {"{name}"}, {"{reset_url}"}
                    </span>
                  </div>
                  <Textarea
                    id="passwordReset"
                    name="passwordReset"
                    rows={8}
                    value={emailTemplates.passwordReset}
                    onChange={handleEmailTemplateChange}
                    className="font-mono text-sm"
                  />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white">
                  Save Email Templates
                </Button>
              </div>
            </form>
          </Card>
        </TabsContent>
        
        {/* Backup & Restore Tab */}
        <TabsContent value="backup">
          <Card className="p-6 border">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Database Backup & Restore</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-md font-medium text-neutral-900 mb-2">Create Backup</h3>
                <p className="text-neutral-600 mb-4">
                  Create a complete backup of all data, including organizations, users, and configurations.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                    Create Full Backup
                  </Button>
                  <Button variant="outline">
                    Schedule Automatic Backups
                  </Button>
                </div>
              </div>
              
              <div className="pt-6 border-t border-neutral-200">
                <h3 className="text-md font-medium text-neutral-900 mb-2">Recent Backups</h3>
                <div className="bg-neutral-50 rounded-md p-4">
                  <div className="space-y-4">
                    {[
                      { id: 'backup-1', name: 'Full Backup', date: '2023-05-21 04:00:00', size: '1.2 GB' },
                      { id: 'backup-2', name: 'Full Backup', date: '2023-05-20 04:00:00', size: '1.18 GB' },
                      { id: 'backup-3', name: 'Full Backup', date: '2023-05-19 04:00:00', size: '1.15 GB' }
                    ].map((backup) => (
                      <div key={backup.id} className="flex justify-between items-center p-3 bg-white border rounded-md">
                        <div>
                          <p className="font-medium text-neutral-900">{backup.name}</p>
                          <p className="text-sm text-neutral-500">{backup.date} · {backup.size}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Download</Button>
                          <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">Delete</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-neutral-200">
                <h3 className="text-md font-medium text-neutral-900 mb-2">Restore Backup</h3>
                <p className="text-neutral-600 mb-4">
                  Upload a backup file to restore the system to a previous state.
                </p>
                <div className="bg-neutral-50 rounded-md p-4 border border-dashed border-neutral-300 text-center">
                  <p className="text-neutral-500 mb-4">Drop backup file here or click to upload</p>
                  <Button variant="outline">
                    Select Backup File
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 