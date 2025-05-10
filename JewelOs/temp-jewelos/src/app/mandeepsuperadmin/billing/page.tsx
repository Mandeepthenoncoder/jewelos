'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function BillingPage() {
  // Statistics
  const billingStats = {
    monthlyRevenue: '₹4,82,950',
    yearlyGrowth: '18.5%',
    activeSubscriptions: 32,
    pendingPayments: 3
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-900">Billing & Subscriptions</h1>
        <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
          <Link href="/mandeepsuperadmin/billing/pricing">Manage Plans</Link>
        </Button>
      </div>
      
      {/* Billing Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 border">
          <p className="text-sm text-neutral-500 font-medium">Monthly Revenue</p>
          <p className="text-3xl font-bold text-neutral-900 mt-1">{billingStats.monthlyRevenue}</p>
          <div className="flex items-center text-xs text-green-500 mt-2">
            <span className="mr-1">↑</span>
            <span>{billingStats.yearlyGrowth} from last year</span>
          </div>
        </Card>
        
        <Card className="p-4 border">
          <p className="text-sm text-neutral-500 font-medium">Active Subscriptions</p>
          <p className="text-3xl font-bold text-neutral-900 mt-1">{billingStats.activeSubscriptions}</p>
          <div className="text-xs text-neutral-500 mt-2">
            Across all plans
          </div>
        </Card>
        
        <Card className="p-4 border">
          <p className="text-sm text-neutral-500 font-medium">Pending Payments</p>
          <p className="text-3xl font-bold text-neutral-900 mt-1">{billingStats.pendingPayments}</p>
          <div className="text-xs text-amber-500 mt-2">
            Requires attention
          </div>
        </Card>
        
        <Card className="p-4 border">
          <p className="text-sm text-neutral-500 font-medium">Plan Distribution</p>
          <div className="flex space-x-1 items-end mt-3">
            <div className="bg-green-500 h-6 w-4 rounded-t"></div>
            <div className="bg-blue-500 h-12 w-4 rounded-t"></div>
            <div className="bg-purple-500 h-8 w-4 rounded-t"></div>
          </div>
          <div className="flex justify-between text-xs text-neutral-500 mt-2">
            <span>Starter</span>
            <span>Professional</span>
            <span>Enterprise</span>
          </div>
        </Card>
      </div>
      
      <Tabs defaultValue="subscriptions" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="subscriptions">Active Subscriptions</TabsTrigger>
          <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
          <TabsTrigger value="plans">Plan Management</TabsTrigger>
        </TabsList>
        
        {/* Subscriptions Tab */}
        <TabsContent value="subscriptions">
          <Card className="p-6 border">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Active Subscriptions</h2>
            <p className="text-neutral-600">The subscriptions list view would be displayed here. It would include a table of organizations, their current plans, payment status, and billing dates.</p>
          </Card>
        </TabsContent>
        
        {/* Transactions Tab */}
        <TabsContent value="transactions">
          <Card className="p-6 border">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Recent Transactions</h2>
            <p className="text-neutral-600">The transaction history view would be displayed here. It would include a table of all billing transactions, payment statuses, and receipts.</p>
          </Card>
        </TabsContent>
        
        {/* Plans Tab */}
        <TabsContent value="plans">
          <Card className="p-6 border">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Plan Management</h2>
            <p className="text-neutral-600">Here you would be able to view and edit the pricing plans, features, and limits for the JewelOS platform.</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 