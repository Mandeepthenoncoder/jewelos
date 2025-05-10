export default function TasksPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Tasks Manager</h1>
        <button className="px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 w-full sm:w-auto">
          Create Task
        </button>
      </div>
      
      {/* Task Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-wrap gap-3">
          <div className="w-full sm:w-auto flex-1">
            <input 
              type="text" 
              placeholder="Search tasks" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-400" 
            />
          </div>
          <div className="w-full sm:w-auto">
            <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-400">
              <option value="">All Status</option>
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="w-full sm:w-auto">
            <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-400">
              <option value="">All Assignees</option>
              <option value="me">Assigned to Me</option>
              <option value="unassigned">Unassigned</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Task Kanban */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* To Do Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">To Do</h2>
            <span className="px-2 py-1 bg-neutral-100 rounded-full text-xs font-medium">4</span>
          </div>
          
          {/* Task Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">Follow up with VIP leads</h3>
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">High</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Send personalized messages to VIP customers who viewed Diwali collection.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-neutral-300 flex-shrink-0"></div>
                <span className="text-xs ml-2">Raj Kumar</span>
              </div>
              <span className="text-xs text-gray-500">Due: Today</span>
            </div>
          </div>
          
          {/* Task Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">Prepare showroom display</h3>
              <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Medium</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Update front display with new wedding collection pieces.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-neutral-300 flex-shrink-0"></div>
                <span className="text-xs ml-2">Meena Singh</span>
              </div>
              <span className="text-xs text-gray-500">Due: Tomorrow</span>
            </div>
          </div>
        </div>
        
        {/* In Progress Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">In Progress</h2>
            <span className="px-2 py-1 bg-neutral-100 rounded-full text-xs font-medium">3</span>
          </div>
          
          {/* Task Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">Create Diwali campaign content</h3>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Medium</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Write WhatsApp messages and prepare images for Diwali promotion.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-neutral-300 flex-shrink-0"></div>
                <span className="text-xs ml-2">Priti Sharma</span>
              </div>
              <span className="text-xs text-gray-500">Due: Wed, May 8</span>
            </div>
          </div>
          
          {/* Task Card 4 */}
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">Schedule photoshoot</h3>
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">High</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Book photographer and models for the summer collection shoot.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-neutral-300 flex-shrink-0"></div>
                <span className="text-xs ml-2">Anita Desai</span>
              </div>
              <span className="text-xs text-gray-500">Due: Fri, May 10</span>
            </div>
          </div>
        </div>
        
        {/* Completed Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Completed</h2>
            <span className="px-2 py-1 bg-neutral-100 rounded-full text-xs font-medium">2</span>
          </div>
          
          {/* Task Card 5 */}
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500 opacity-75">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">Update pricing catalog</h3>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Low</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Update the price list for all gold items.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-neutral-300 flex-shrink-0"></div>
                <span className="text-xs ml-2">Rahul Verma</span>
              </div>
              <span className="text-xs text-gray-500">Completed: Yesterday</span>
            </div>
          </div>
          
          {/* Task Card 6 */}
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500 opacity-75">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">Order new packaging materials</h3>
              <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Medium</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Reorder premium packaging for the upcoming festive season.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-neutral-300 flex-shrink-0"></div>
                <span className="text-xs ml-2">Sanjay Patel</span>
              </div>
              <span className="text-xs text-gray-500">Completed: 2 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 