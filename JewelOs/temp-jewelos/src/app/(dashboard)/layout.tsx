'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface NavItem {
  title: string;
  href: string;
  icon: string;
  module: string;
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeModule, setActiveModule] = useState('dashboard');

  const navItems: NavItem[] = [
    { title: 'Dashboard', href: '/dashboard', icon: '📊', module: 'dashboard' },
    { title: 'Customers & Leads', href: '/crm', icon: '👥', module: 'crm' },
    { title: 'WhatsApp Manager', href: '/whatsapp', icon: '💬', module: 'whatsapp' },
    { title: 'Campaigns', href: '/campaigns', icon: '✨', module: 'campaigns' },
    { title: 'Tasks', href: '/tasks', icon: '📋', module: 'tasks' },
  ];

  useEffect(() => {
    // Set the active module based on pathname
    const currentModule = navItems.find(item => pathname.includes(item.href))?.module || 'dashboard';
    setActiveModule(currentModule);
  }, [pathname]);

  return (
    <div className="flex h-screen bg-neutral-50">
      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-neutral-200 h-screen overflow-y-auto flex-shrink-0 transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
          <div className={`flex items-center ${!isSidebarOpen && 'justify-center w-full'}`}>
            {isSidebarOpen ? (
              <Link href="/dashboard">
                <Image 
                  src="/jewelos-logo.png" 
                  alt="JewelOS Logo" 
                  width={120} 
                  height={30} 
                  className="object-contain"
                />
              </Link>
            ) : (
              <Link href="/dashboard">
                <Image 
                  src="/jewelos-logo.png" 
                  alt="JewelOS Logo" 
                  width={24} 
                  height={24} 
                  className="object-contain"
                />
              </Link>
            )}
          </div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-neutral-500 hover:text-neutral-800"
          >
            {isSidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        <nav className="p-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center p-2 rounded-md transition-colors ${
                    pathname.includes(item.href)
                      ? 'bg-amber-50 text-amber-700'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  <span className="mr-3 text-xl">{item.icon}</span>
                  {isSidebarOpen && <span>{item.title}</span>}
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t border-neutral-200 mt-4 pt-4">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/settings"
                  className="flex items-center p-2 rounded-md text-neutral-700 hover:bg-neutral-100 transition-colors"
                >
                  <span className="mr-3 text-xl">⚙️</span>
                  {isSidebarOpen && <span>Settings</span>}
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="flex items-center p-2 rounded-md text-neutral-700 hover:bg-neutral-100 transition-colors"
                >
                  <span className="mr-3 text-xl">❓</span>
                  {isSidebarOpen && <span>Help & Support</span>}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-neutral-200 py-3 px-6 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-neutral-900 capitalize">{activeModule}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-neutral-500 hover:text-neutral-800">
              <span className="text-xl">🔔</span>
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">JS</span>
              </div>
              {isSidebarOpen && (
                <div className="ml-2">
                  <p className="text-sm font-medium">Jewelry Store</p>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
} 