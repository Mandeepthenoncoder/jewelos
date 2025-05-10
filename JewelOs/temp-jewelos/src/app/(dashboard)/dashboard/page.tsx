export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Active Leads</h3>
          <p className="text-2xl font-bold mt-1">24</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Today's Messages</h3>
          <p className="text-2xl font-bold mt-1">18</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Pending Tasks</h3>
          <p className="text-2xl font-bold mt-1">7</p>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-blue-500 pl-4 py-1">
            <p className="text-sm">New lead: <span className="font-medium">Priya Sharma</span></p>
            <p className="text-xs text-gray-500">5 minutes ago</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-1">
            <p className="text-sm">WhatsApp message sent to <span className="font-medium">Rahul Verma</span></p>
            <p className="text-xs text-gray-500">20 minutes ago</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-1">
            <p className="text-sm">Task completed: <span className="font-medium">Follow up with bridal customers</span></p>
            <p className="text-xs text-gray-500">1 hour ago</p>
          </div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-md text-sm">
            Add New Lead
          </button>
          <button className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-md text-sm">
            Send WhatsApp Broadcast
          </button>
          <button className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-md text-sm">
            Create Campaign
          </button>
        </div>
      </div>
    </div>
  );
} 