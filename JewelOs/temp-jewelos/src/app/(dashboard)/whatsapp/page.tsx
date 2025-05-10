export default function WhatsAppPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">WhatsApp Manager</h1>
        <div className="flex flex-col sm:flex-row gap-2">
          <button className="px-4 py-2 border border-neutral-300 rounded-md hover:bg-neutral-50">
            Templates
          </button>
          <button className="px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800">
            New Broadcast
          </button>
        </div>
      </div>
      
      {/* WhatsApp Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversations List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden lg:col-span-1">
          <div className="p-4 border-b">
            <input 
              type="text" 
              placeholder="Search conversations" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-400" 
            />
          </div>
          <div className="divide-y overflow-y-auto max-h-[500px]">
            {/* Conversation 1 - Active */}
            <div className="p-4 bg-neutral-50 cursor-pointer">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-neutral-300 flex-shrink-0"></div>
                <div className="ml-3 flex-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-sm font-medium">Priya Sharma</h3>
                    <span className="text-xs text-gray-500">5m</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    I'm interested in the gold bangles you shared yesterday.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Conversation 2 */}
            <div className="p-4 hover:bg-neutral-50 cursor-pointer">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-neutral-300 flex-shrink-0"></div>
                <div className="ml-3 flex-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-sm font-medium">Rahul Verma</h3>
                    <span className="text-xs text-gray-500">2h</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Thank you for the information about the wedding collection.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Conversation 3 */}
            <div className="p-4 hover:bg-neutral-50 cursor-pointer">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-neutral-300 flex-shrink-0"></div>
                <div className="ml-3 flex-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-sm font-medium">Anjali Desai</h3>
                    <span className="text-xs text-gray-500">1d</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    What are your store hours this weekend?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chat Window */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden lg:col-span-2 flex flex-col h-[500px]">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center">
            <div className="h-10 w-10 rounded-full bg-neutral-300 flex-shrink-0"></div>
            <div className="ml-3">
              <h3 className="text-sm font-medium">Priya Sharma</h3>
              <p className="text-xs text-gray-500">+91 98765 43210</p>
            </div>
            <div className="ml-auto">
              <button className="p-2 text-neutral-600 hover:text-neutral-900">
                <span className="material-icons text-xl">more_vert</span>
              </button>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-neutral-50">
            {/* Customer Message */}
            <div className="mb-4 flex">
              <div className="max-w-[75%] bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm">Hello, I'm interested in the gold bangles you shared yesterday.</p>
                <span className="text-xs text-gray-500 mt-1 block text-right">10:30 AM</span>
              </div>
            </div>
            
            {/* Our Message */}
            <div className="mb-4 flex justify-end">
              <div className="max-w-[75%] bg-neutral-200 p-3 rounded-lg">
                <p className="text-sm">Hi Priya, thank you for your interest! Those are from our Diwali collection. Would you like to visit our showroom to see them in person?</p>
                <span className="text-xs text-gray-500 mt-1 block text-right">10:32 AM</span>
              </div>
            </div>
            
            {/* Customer Message */}
            <div className="mb-4 flex">
              <div className="max-w-[75%] bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm">Yes, I'd like to come tomorrow. What time are you open?</p>
                <span className="text-xs text-gray-500 mt-1 block text-right">10:35 AM</span>
              </div>
            </div>
          </div>
          
          {/* Message Input */}
          <div className="p-3 border-t">
            <div className="flex items-center">
              <button className="p-2 text-neutral-600 hover:text-neutral-900">
                <span className="material-icons text-xl">attach_file</span>
              </button>
              <input 
                type="text" 
                placeholder="Type a message" 
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-neutral-400" 
              />
              <button className="p-2 text-neutral-600 hover:text-neutral-900 ml-2">
                <span className="material-icons text-xl">send</span>
              </button>
            </div>
            <div className="mt-2 flex gap-2">
              <button className="px-2 py-1 text-xs bg-neutral-100 hover:bg-neutral-200 rounded-md">
                Store Hours
              </button>
              <button className="px-2 py-1 text-xs bg-neutral-100 hover:bg-neutral-200 rounded-md">
                Location
              </button>
              <button className="px-2 py-1 text-xs bg-neutral-100 hover:bg-neutral-200 rounded-md">
                Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 