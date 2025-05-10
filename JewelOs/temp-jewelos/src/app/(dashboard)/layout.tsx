'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { getDocument } from '@/lib/firebase/firestore';

interface UserDoc {
  organizationId?: string;
  role?: string;
  name?: string;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [checkingOrg, setCheckingOrg] = useState(true);
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);
  
  // Check if user has an organization
  useEffect(() => {
    const checkOrganization = async () => {
      if (user?.uid) {
        try {
          const userDoc = await getDocument<UserDoc>('users', user.uid);
          if (!userDoc || !userDoc.organizationId) {
            // User doesn't have an organization, redirect to onboarding
            router.push('/onboarding');
          }
        } catch (error) {
          console.error('Error checking organization:', error);
        } finally {
          setCheckingOrg(false);
        }
      }
    };
    
    if (!loading && user) {
      checkOrganization();
    }
  }, [user, loading, router]);
  
  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };
  
  // Show loading state while checking authentication
  if (loading || checkingOrg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 border-4 border-neutral-300 border-t-neutral-800 rounded-full animate-spin mx-auto"></div>
          <p className="text-neutral-600">Loading...</p>
        </div>
      </div>
    );
  }
  
  // Don't render content if not authenticated
  if (!user) {
    return null;
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b h-16 flex items-center px-4">
        <h1 className="font-semibold text-lg">JewelOS</h1>
        <div className="ml-auto flex items-center gap-4">
          <div className="relative">
            <button 
              className="flex items-center gap-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="h-8 w-8 bg-neutral-800 text-white rounded-full flex items-center justify-center">
                {user.displayName ? 
                  user.displayName.charAt(0).toUpperCase() : 
                  user.phoneNumber?.charAt(3)}
              </div>
              <span className="hidden md:block text-sm">
                {user.displayName || user.phoneNumber}
              </span>
              <span className="material-icons text-sm">
                {isMenuOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
              </span>
            </button>
            
            {isMenuOpen && (
              <div className="absolute right-0 top-10 bg-white shadow-md rounded-md py-2 min-w-[180px]">
                <div className="px-4 py-2 border-b">
                  <p className="text-sm font-medium">{user.displayName || 'User'}</p>
                  <p className="text-xs text-gray-500">{user.phoneNumber}</p>
                </div>
                
                <button
                  className="w-full text-left px-4 py-2 text-sm hover:bg-neutral-50"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      
      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Desktop Sidebar - hidden on mobile */}
        <aside className="w-64 border-r bg-white p-4 hidden md:block">
          <nav className="space-y-2">
            <Link href="/dashboard" className="block p-2 rounded hover:bg-gray-100">Dashboard</Link>
            <Link href="/crm" className="block p-2 rounded hover:bg-gray-100">CRM</Link>
            <Link href="/whatsapp" className="block p-2 rounded hover:bg-gray-100">WhatsApp</Link>
            <Link href="/campaigns" className="block p-2 rounded hover:bg-gray-100">Campaigns</Link>
            <Link href="/tasks" className="block p-2 rounded hover:bg-gray-100">Tasks</Link>
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-4 pb-20 md:pb-4">
          {children}
        </main>
      </div>
      
      {/* Mobile Bottom Navigation - only visible on mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t h-16 flex items-center justify-around px-4">
        <Link href="/dashboard" className="flex flex-col items-center p-2">
          <span className="material-icons text-xl">dashboard</span>
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/crm" className="flex flex-col items-center p-2">
          <span className="material-icons text-xl">people</span>
          <span className="text-xs">Leads</span>
        </Link>
        <Link href="/whatsapp" className="flex flex-col items-center p-2">
          <span className="material-icons text-xl">chat</span>
          <span className="text-xs">Chat</span>
        </Link>
        <Link href="/campaigns" className="flex flex-col items-center p-2">
          <span className="material-icons text-xl">campaign</span>
          <span className="text-xs">Campaigns</span>
        </Link>
        <Link href="/tasks" className="flex flex-col items-center p-2">
          <span className="material-icons text-xl">task</span>
          <span className="text-xs">Tasks</span>
        </Link>
      </nav>
    </div>
  );
} 