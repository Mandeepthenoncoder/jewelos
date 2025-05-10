'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/hooks/useAuth';
import { createDocument, getDocument } from '@/lib/firebase/firestore';
import { uploadOrgLogo } from '@/lib/firebase/storage';
import { OrgPlanType } from '@/modules/organization/models/Organization';

// Onboarding steps
type Step = 'welcome' | 'organization' | 'team' | 'customers' | 'modules' | 'complete';

export default function OnboardingPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [currentStep, setCurrentStep] = useState<Step>('welcome');
  const [progress, setProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Organization details
  const [orgName, setOrgName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  // Team members
  const [teamMembers, setTeamMembers] = useState<Array<{name: string, role: string, phone: string, email: string}>>([]);
  const [newTeamMember, setNewTeamMember] = useState({name: '', role: 'Staff', phone: '', email: ''});

  // Module preferences
  const [selectedModules, setSelectedModules] = useState({
    crm: true,
    whatsapp: true,
    campaigns: false,
    tasks: false,
    catalog: false
  });

  // Check if user is already onboarded
  useEffect(() => {
    const checkOnboardingStatus = async () => {
      if (user?.uid) {
        // Check if user has an organization
        const userOrg = await getDocument<any>('users', user.uid);
        if (userOrg && userOrg.organizationId) {
          // User is already onboarded, redirect to dashboard
          router.push('/dashboard');
        }
        // If user has phone number, use it for contact
        if (user.phoneNumber) {
          setPhone(user.phoneNumber);
        }
      }
    };
    
    if (!loading) {
      checkOnboardingStatus();
    }
  }, [user, loading, router]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Update progress based on current step
  useEffect(() => {
    const steps: Step[] = ['welcome', 'organization', 'team', 'customers', 'modules', 'complete'];
    const index = steps.indexOf(currentStep);
    setProgress(Math.round((index / (steps.length - 1)) * 100));
  }, [currentStep]);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addTeamMember = () => {
    if (newTeamMember.name && newTeamMember.phone) {
      setTeamMembers([...teamMembers, newTeamMember]);
      setNewTeamMember({name: '', role: 'Staff', phone: '', email: ''});
    }
  };

  const removeTeamMember = (index: number) => {
    const updatedMembers = [...teamMembers];
    updatedMembers.splice(index, 1);
    setTeamMembers(updatedMembers);
  };

  const handleModuleToggle = (module: keyof typeof selectedModules) => {
    setSelectedModules({
      ...selectedModules,
      [module]: !selectedModules[module]
    });
  };

  const handleNext = () => {
    const steps: Step[] = ['welcome', 'organization', 'team', 'customers', 'modules', 'complete'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const steps: Step[] = ['welcome', 'organization', 'team', 'customers', 'modules', 'complete'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const saveOrganization = async () => {
    if (!user) return;
    
    setIsSubmitting(true);
    
    try {
      // Create organization with default free plan
      const orgData = {
        name: orgName,
        ownerName,
        city,
        phone: user.phoneNumber || phone,
        createdBy: user.uid,
        modules: selectedModules,
        plan: 'free' as OrgPlanType,
        isActive: true,
        maxUsers: 3, // Free plan limits
        maxShowrooms: 1
      };
      
      // Create org document
      const orgId = await createDocument('organizations', orgData);
      
      // Handle logo upload if present
      if (logo) {
        try {
          const logoUrl = await uploadOrgLogo(logo, orgId);
          // Update organization with logo URL
          await createDocument('organizations', {
            ...orgData,
            logoUrl
          }, orgId);
        } catch (error) {
          console.error('Error uploading logo:', error);
          // Continue without logo if upload fails
        }
      }
      
      // Create default showroom
      await createDocument(`organizations/${orgId}/showrooms`, {
        name: `${orgName} Main`,
        city,
        isHeadOffice: true,
        isActive: true,
        organizationId: orgId
      });
      
      // Update user with org id
      await createDocument('users', {
        organizationId: orgId,
        role: 'owner',
        name: ownerName,
        phone: user.phoneNumber || phone,
        isActive: true,
      }, user.uid);
      
      // Add team members to invite list
      for (const member of teamMembers) {
        await createDocument(`organizations/${orgId}/teamInvites`, {
          name: member.name,
          role: member.role,
          phone: member.phone,
          email: member.email,
          status: 'pending',
          invitedBy: user.uid,
          organizationId: orgId,
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
        });
      }
      
      // Redirect to dashboard after complete
      if (currentStep === 'complete') {
        router.push('/dashboard');
      } else {
        handleNext();
      }
    } catch (error) {
      console.error('Error saving organization:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 border-4 border-neutral-300 border-t-neutral-800 rounded-full animate-spin mx-auto"></div>
          <p className="text-neutral-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render if not authenticated
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm">
        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded-t-lg">
          <div 
            className="h-2 bg-blue-600 rounded-tl-lg transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="p-6">
          {currentStep === 'welcome' && (
            <div className="text-center py-6">
              <h1 className="text-2xl font-semibold mb-4">Welcome to JewelOS</h1>
              <p className="text-gray-600 mb-6">
                Let's set up your jewelry business on our platform.
                This will only take a few minutes.
              </p>
              <button
                onClick={handleNext}
                className="w-full md:w-auto px-6 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800"
              >
                Let's Get Started
              </button>
            </div>
          )}
          
          {currentStep === 'organization' && (
            <div className="py-4">
              <h2 className="text-xl font-semibold mb-4">Organization Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="e.g., Sharma Jewellers"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="e.g., Raj Sharma"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="e.g., Mumbai"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Logo
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 border rounded-md flex items-center justify-center bg-gray-50">
                      {logoPreview ? (
                        <img 
                          src={logoPreview} 
                          alt="Logo preview" 
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <span className="text-gray-400 text-3xl">+</span>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoChange}
                      className="flex-1"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Upload your business logo (optional)
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <button
                  onClick={handlePrevious}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!orgName || !ownerName}
                  className="px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 disabled:bg-gray-300"
                >
                  Next: Add Team
                </button>
              </div>
            </div>
          )}
          
          {currentStep === 'team' && (
            <div className="py-4">
              <h2 className="text-xl font-semibold mb-4">Add Your Team Members</h2>
              <p className="text-gray-600 mb-4">
                Add staff members who need access to JewelOS. You can add more later.
              </p>
              
              <div className="mb-6 space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-gray-500">{member.role} • {member.phone}</div>
                    </div>
                    <button
                      onClick={() => removeTeamMember(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-3">Add Team Member</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm mb-1">Name</label>
                      <input
                        type="text"
                        value={newTeamMember.name}
                        onChange={(e) => setNewTeamMember({...newTeamMember, name: e.target.value})}
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Role</label>
                      <select
                        value={newTeamMember.role}
                        onChange={(e) => setNewTeamMember({...newTeamMember, role: e.target.value})}
                        className="w-full px-3 py-2 border rounded-md"
                      >
                        <option value="Manager">Manager</option>
                        <option value="Sales">Sales</option>
                        <option value="Staff">Staff</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Phone</label>
                      <input
                        type="tel"
                        value={newTeamMember.phone}
                        onChange={(e) => setNewTeamMember({...newTeamMember, phone: e.target.value})}
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Email (optional)</label>
                      <input
                        type="email"
                        value={newTeamMember.email}
                        onChange={(e) => setNewTeamMember({...newTeamMember, email: e.target.value})}
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <button
                    onClick={addTeamMember}
                    className="mt-3 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                    disabled={!newTeamMember.name || !newTeamMember.phone}
                  >
                    Add Member
                  </button>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <button
                  onClick={handlePrevious}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800"
                >
                  {teamMembers.length > 0 ? "Next: Select Modules" : "Skip: I'll add team later"}
                </button>
              </div>
            </div>
          )}
          
          {currentStep === 'modules' && (
            <div className="py-4">
              <h2 className="text-xl font-semibold mb-4">Choose Your Modules</h2>
              <p className="text-gray-600 mb-4">
                Select which features you want to use in JewelOS. You can change these anytime.
              </p>
              
              <div className="space-y-3">
                <div className="p-4 border rounded-md">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="crm"
                      checked={selectedModules.crm}
                      onChange={() => handleModuleToggle('crm')}
                      className="h-4 w-4"
                    />
                    <label htmlFor="crm" className="ml-2 font-medium">Customer Management (CRM)</label>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 ml-6">
                    Track leads, customer families, purchase history, and follow-ups
                  </p>
                </div>
                
                <div className="p-4 border rounded-md">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="whatsapp"
                      checked={selectedModules.whatsapp}
                      onChange={() => handleModuleToggle('whatsapp')}
                      className="h-4 w-4"
                    />
                    <label htmlFor="whatsapp" className="ml-2 font-medium">WhatsApp Business</label>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 ml-6">
                    Send catalogs, offers, and manage customer conversations on WhatsApp
                  </p>
                </div>
                
                <div className="p-4 border rounded-md">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="campaigns"
                      checked={selectedModules.campaigns}
                      onChange={() => handleModuleToggle('campaigns')}
                      className="h-4 w-4"
                    />
                    <label htmlFor="campaigns" className="ml-2 font-medium">Marketing Campaigns</label>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 ml-6">
                    Create and schedule festivals, occasions and promotional campaigns
                  </p>
                </div>
                
                <div className="p-4 border rounded-md">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="tasks"
                      checked={selectedModules.tasks}
                      onChange={() => handleModuleToggle('tasks')}
                      className="h-4 w-4"
                    />
                    <label htmlFor="tasks" className="ml-2 font-medium">Tasks & Team Management</label>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 ml-6">
                    Assign and track tasks for your team members
                  </p>
                </div>
                
                <div className="p-4 border rounded-md">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="catalog"
                      checked={selectedModules.catalog}
                      onChange={() => handleModuleToggle('catalog')}
                      className="h-4 w-4"
                    />
                    <label htmlFor="catalog" className="ml-2 font-medium">Jewelry Catalog</label>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 ml-6">
                    Upload and share your jewelry designs and collections
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <button
                  onClick={handlePrevious}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep('complete')}
                  className="px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800"
                >
                  Next: Complete Setup
                </button>
              </div>
            </div>
          )}
          
          {currentStep === 'complete' && (
            <div className="py-6 text-center">
              <div className="h-16 w-16 mx-auto mb-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <span className="material-icons text-3xl">check</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">Ready to Go!</h2>
              <p className="text-gray-600 mb-6">
                Your JewelOS system is ready. Let's start managing your jewelry business smarter!
              </p>
              <button
                onClick={saveOrganization}
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 disabled:bg-gray-300"
              >
                {isSubmitting ? 'Setting up...' : 'Start Using JewelOS'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 