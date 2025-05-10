'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import { getDocument } from '@/lib/firebase/firestore';
import type { ConfirmationResult } from 'firebase/auth';

interface UserDoc {
  organizationId?: string;
  role?: string;
  name?: string;
  phone?: string;
}

export default function LoginPage() {
  const router = useRouter();
  const { sendOTP, confirmOTP, user } = useAuth();
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Handle phone number input and OTP send
  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Format phone number if needed
      let formattedNumber = phoneNumber;
      if (!formattedNumber.startsWith('+')) {
        formattedNumber = `+91${formattedNumber}`; // Default to India
      }
      
      // Create div for recaptcha
      if (!document.getElementById('recaptcha-container')) {
        const div = document.createElement('div');
        div.id = 'recaptcha-container';
        document.body.appendChild(div);
      }
      
      const result = await sendOTP(formattedNumber);
      
      if (result) {
        setConfirmationResult(result);
        setStep('otp');
      } else {
        setError('Could not send OTP. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  // Handle OTP verification
  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      if (confirmationResult) {
        const user = await confirmOTP(confirmationResult, otp);
        
        if (user) {
          // Check if the user belongs to an organization
          const userDoc = await getDocument<UserDoc>('users', user.uid);
          
          if (userDoc && userDoc.organizationId) {
            // User is already part of an organization, redirect to dashboard
            router.push('/dashboard');
          } else {
            // New user, redirect to onboarding
            router.push('/onboarding');
          }
        } else {
          setError('Invalid OTP. Please try again.');
        }
      } else {
        setError('Session expired. Please request a new OTP.');
        setStep('phone');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to verify OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  // If user is already logged in, check org and redirect
  if (user) {
    // We'll handle redirect in handleVerifyOTP after checking user's organization
    router.push('/dashboard');
    return null;
  }
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Login to JewelOS</h1>
          {step === 'phone' ? (
            <p className="text-gray-600 mt-2">Enter your phone number to continue</p>
          ) : (
            <p className="text-gray-600 mt-2">Enter the OTP sent to {phoneNumber}</p>
          )}
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
            {error}
          </div>
        )}
        
        {step === 'phone' ? (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full px-3 py-2 border rounded-md"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 disabled:bg-neutral-400"
              disabled={loading || !phoneNumber}
            >
              {loading ? 'Sending...' : 'Send OTP'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="otp">
                One-Time Password
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                placeholder="Enter 6-digit OTP"
                className="w-full px-3 py-2 border rounded-md"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 disabled:bg-neutral-400"
              disabled={loading || otp.length !== 6}
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
            
            <button 
              type="button"
              className="w-full px-4 py-2 border border-neutral-300 rounded-md hover:bg-neutral-50"
              onClick={() => setStep('phone')}
              disabled={loading}
            >
              Change Phone Number
            </button>
          </form>
        )}
        
        <div className="text-center mt-4">
          <Link className="text-sm text-blue-600 hover:underline" href="/">
            Back to home
          </Link>
        </div>
      </div>
      
      {/* Hidden recaptcha container */}
      <div id="recaptcha-container"></div>
    </div>
  );
} 