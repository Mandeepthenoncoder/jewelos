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

export default function SuperAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeModule, setActiveModule] = useState('dashboard');

  const navItems: NavItem[] = [
    { title: 'Dashboard', href: '/mandeepsuperadmin', icon: '📊', module: 'dashboard' },
    { title: 'Organizations', href: '/mandeepsuperadmin/organizations', icon: '🏢', module: 'organizations' },
    { title: 'Users', href: '/mandeepsuperadmin/users', icon: '👥', module: 'users' },
    { title: 'Plans & Billing', href: '/mandeepsuperadmin/billing', icon: '💰', module: 'billing' },
    { title: 'Settings', href: '/mandeepsuperadmin/settings', icon: '⚙️', module: 'settings' },
  ];

  useEffect(() => {
    // Set the active module based on pathname
    const currentPath = pathname.replace('/mandeepsuperadmin', '');
    const currentModule = navItems.find(item => 
      currentPath === '' ? item.href === '/mandeepsuperadmin' : pathname.includes(item.href)
    )?.module || 'dashboard';
    setActiveModule(currentModule);
  }, [pathname]);

  return (
    <div className="flex h-screen bg-neutral-50">
      {/* Sidebar */}
      <aside
        className={`bg-neutral-900 border-r border-neutral-800 h-screen overflow-y-auto flex-shrink-0 transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
          <div className={`flex items-center ${!isSidebarOpen && 'justify-center w-full'}`}>
            {isSidebarOpen ? (
              <Link href="/mandeepsuperadmin">
                <div className="flex items-center">
                  <Image 
                    src="/jewelos-logo.png" 
                    alt="JewelOS Logo" 
                    width={80} 
                    height={20} 
                    className="object-contain"
                  />
                  <span className="ml-2 text-amber-500 font-bold">ADMIN</span>
                </div>
              </Link>
            ) : (
              <Link href="/mandeepsuperadmin">
                <div className="flex items-center justify-center bg-amber-500 rounded-full w-8 h-8">
                  <span className="text-white font-bold text-xs">SA</span>
                </div>
              </Link>
            )}
          </div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-neutral-400 hover:text-white"
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
                    pathname === item.href || (item.href !== '/mandeepsuperadmin' && pathname.includes(item.href))
                      ? 'bg-amber-500 text-white'
                      : 'text-neutral-300 hover:bg-neutral-800'
                  }`}
                >
                  <span className="mr-3 text-xl">{item.icon}</span>
                  {isSidebarOpen && <span>{item.title}</span>}
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t border-neutral-800 mt-8 pt-4">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className="flex items-center p-2 rounded-md text-neutral-300 hover:bg-neutral-800 transition-colors"
                >
                  <span className="mr-3 text-xl">🏠</span>
                  {isSidebarOpen && <span>Back to Website</span>}
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="flex items-center p-2 rounded-md text-neutral-300 hover:bg-neutral-800 transition-colors"
                >
                  <span className="mr-3 text-xl">💼</span>
                  {isSidebarOpen && <span>User Dashboard</span>}
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
            <h1 className="text-xl font-semibold text-neutral-900">
              Super Admin <span className="text-amber-500">|</span> <span className="capitalize">{activeModule}</span>
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-neutral-500 hover:text-neutral-800">
              <span className="text-xl">🔔</span>
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-white">SA</span>
              </div>
              {isSidebarOpen && (
                <div className="ml-2">
                  <p className="text-sm font-medium">Super Admin</p>
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