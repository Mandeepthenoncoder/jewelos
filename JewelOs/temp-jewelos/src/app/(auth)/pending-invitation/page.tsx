'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';

export default function PendingInvitationPage() {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);
  
  // Handle sign out
  const handleSignOut = async () => {
    await signOut();
    router.push('/');
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8 text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
          <span className="material-icons text-3xl text-yellow-500">hourglass_empty</span>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Waiting for Invitation</h1>
        
        <p className="text-gray-600 mb-6">
          Your account has been created, but you need to be invited to an organization by a business owner to continue.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-md text-blue-800 text-sm mb-6">
          <p className="font-medium mb-2">Next Steps:</p>
          <ol className="list-decimal list-inside text-left">
            <li className="mb-1">Contact your organization owner</li>
            <li className="mb-1">Ask them to send you an invitation from their JewelOS dashboard</li>
            <li>Once invited, you'll receive a notification to join</li>
          </ol>
        </div>
        
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          <Link 
            href="/"
            className="px-4 py-2 border border-neutral-300 rounded-md hover:bg-neutral-50 text-sm"
          >
            Return to Home
          </Link>
          
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-neutral-800 text-white rounded-md hover:bg-neutral-700 text-sm"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
} 