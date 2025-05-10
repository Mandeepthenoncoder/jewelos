'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/hooks/useAuth';
import { createDocument, getDocument } from '@/lib/firebase/firestore';

interface SignupFormData {
  fullName: string;
  email: string;
  businessName: string;
  role: string;
  agreeToTerms: boolean;
}

interface UserDocument {
  displayName?: string;
  email?: string;
  phone?: string;
  role?: string;
  organizationId?: string;
  isActive?: boolean;
  createdAt?: Date;
}

export default function SignupPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  
  const [formData, setFormData] = useState<SignupFormData>({
    fullName: '',
    email: '',
    businessName: '',
    role: 'owner',
    agreeToTerms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  // Check if user is authenticated and if they already have an account
  useEffect(() => {
    const checkUserAccount = async () => {
      if (!user) {
        // Not authenticated, redirect to login
        router.push('/login');
        return;
      }
      
      try {
        // Check if user already exists in our system
        const userDoc = await getDocument<UserDocument>('users', user.uid);
        
        if (userDoc) {
          // User already exists, check if they have an organization
          if (userDoc.organizationId) {
            // User has organization, redirect to dashboard
            router.push('/dashboard');
          } else {
            // User exists but doesn't have organization, redirect to onboarding
            router.push('/onboarding');
          }
        }
        // If userDoc doesn't exist, allow them to continue with signup
      } catch (error) {
        console.error('Error checking user account:', error);
        setError('Error checking your account. Please try again.');
      }
    };
    
    if (!loading) {
      checkUserAccount();
    }
  }, [user, loading, router]);
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      setError('You must be logged in to create an account');
      return;
    }
    
    if (!formData.agreeToTerms) {
      setError('You must agree to the terms and conditions');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // Create user document
      await createDocument('users', {
        displayName: formData.fullName,
        email: formData.email,
        phone: user.phoneNumber,
        role: formData.role,
        isActive: true,
        createdAt: new Date()
      }, user.uid);
      
      // If role is owner, redirect to onboarding to create organization
      if (formData.role === 'owner') {
        router.push('/onboarding');
      } else {
        // If role is staff/other, show message that they need to be invited
        // TODO: Implement invitation system for non-owner users
        router.push('/pending-invitation');
      }
    } catch (error) {
      console.error('Error creating user account:', error);
      setError('Failed to create your account. Please try again.');
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
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Create Your Account</h1>
          <p className="text-gray-600 mt-2">
            Complete your profile to get started with JewelOS
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full px-3 py-2 border rounded-md"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address (optional)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-3 py-2 border rounded-md"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Your Role
              </label>
              <select
                id="role"
                name="role"
                className="w-full px-3 py-2 border rounded-md"
                value={formData.role}
                onChange={handleInputChange}
              >
                <option value="owner">Business Owner</option>
                <option value="manager">Manager</option>
                <option value="staff">Staff Member</option>
              </select>
            </div>
            
            {formData.role === 'owner' && (
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  required={formData.role === 'owner'}
                  className="w-full px-3 py-2 border rounded-md"
                  value={formData.businessName}
                  onChange={handleInputChange}
                />
              </div>
            )}
            
            <div className="flex items-start">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                className="h-4 w-4 mt-1"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 disabled:bg-neutral-400"
              disabled={isSubmitting || !formData.agreeToTerms}
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>
        </form>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 