'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import { getDocument } from '@/lib/firebase/firestore';

interface UserDoc {
  organizationId?: string;
  role?: string;
  name?: string;
  phone?: string;
  displayName?: string;
  isActive?: boolean;
}

// Function to get user-friendly error message
const getErrorMessage = (error: any): string => {
  console.error('Authentication error:', error);
  
  // Extract Firebase error code if available
  const errorCode = error?.code || '';
  
  // Map error codes to user-friendly messages
  switch (errorCode) {
    case 'auth/invalid-phone-number':
      return 'Invalid phone number format. Please enter a valid number.';
    case 'auth/invalid-verification-code':
      return 'Invalid verification code. Please try again.';
    case 'auth/code-expired':
      return 'Verification code has expired. Please request a new one.';
    case 'auth/too-many-requests':
      return 'Too many requests. Please try again later.';
    case 'auth/quota-exceeded':
      return 'Service temporarily unavailable. Please try again later.';
    default:
      return error?.message || 'An error occurred. Please try again.';
  }
};

export default function LoginPage() {
  const router = useRouter();
  const { sendOTP, confirmOTP, user } = useAuth();
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [verificationId, setVerificationId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Handle phone submission and OTP sending
  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Validate phone number
    if (!phoneNumber) {
      setError('Please enter a phone number');
      setLoading(false);
      return;
    }
    
    // Format check (simple validation)
    const cleanNumber = phoneNumber.replace(/\s+/g, '');
    if (!/^\+?[0-9]{10,15}$/.test(cleanNumber)) {
      setError('Please enter a valid phone number');
      setLoading(false);
      return;
    }
    
    try {
      // Format phone number
      let formattedNumber = phoneNumber.trim();
      if (!formattedNumber.startsWith('+')) {
        formattedNumber = `+91${formattedNumber}`; // Default to India
      }
      
      const result = await sendOTP(formattedNumber);
      
      if (result) {
        setVerificationId(result);
        setStep('otp');
      } else {
        setError('Could not send OTP. Please try again.');
      }
    } catch (err) {
      setError(getErrorMessage(err));
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
      if (!verificationId) {
        setError('Session expired. Please request a new OTP.');
        setStep('phone');
        return;
      }
      
      if (!otp || otp.length !== 6 || !/^\d{6}$/.test(otp)) {
        setError('Please enter a valid 6-digit OTP');
        setLoading(false);
        return;
      }
      
      const user = await confirmOTP(verificationId, otp);
      
      if (user) {
        // Check if the user exists in our database
        const userDoc = await getDocument<UserDoc>('users', user.uid);
        
        if (!userDoc) {
          // New user, redirect to signup
          router.push('/signup');
        } else if (userDoc.organizationId) {
          // User already has organization, redirect to dashboard
          router.push('/dashboard');
        } else {
          // User exists but no organization, redirect to onboarding
          router.push('/onboarding');
        }
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };
  
  // If user is already logged in, redirect to appropriate page
  if (user) {
    // We'll handle redirect in handleVerifyOTP after checking user's status
    router.push('/dashboard');
    return null;
  }
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Login or Sign Up to JewelOS</h1>
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
              {loading ? 'Sending OTP...' : 'Send OTP'}
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
              <p className="text-xs text-amber-600 mt-1">
                Development mode: Enter any 6 digits
              </p>
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
              onClick={() => {
                setStep('phone');
              }}
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
    </div>
  );
} 