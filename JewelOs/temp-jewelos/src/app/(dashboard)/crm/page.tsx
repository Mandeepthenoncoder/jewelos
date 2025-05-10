export default function CRMPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Customer Leads</h1>
        <button className="px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 w-full sm:w-auto">
          Add New Lead
        </button>
      </div>
      
      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-wrap gap-3">
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <input 
              type="text" 
              placeholder="Name or phone number" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-400" 
            />
          </div>
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">Tag</label>
            <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-400">
              <option value="">All Tags</option>
              <option value="vip">VIP</option>
              <option value="bride">Bride</option>
              <option value="family-referral">Family Referral</option>
            </select>
          </div>
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">Showroom</label>
            <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-400">
              <option value="">All Showrooms</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Leads List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tags
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Added
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Sample Lead 1 */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium">Priya Sharma</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">+91 98765 43210</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800 mr-1">Bride</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">VIP</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  3 days ago
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-neutral-600 hover:text-neutral-900 mr-3">
                    WhatsApp
                  </button>
                  <button className="text-neutral-600 hover:text-neutral-900">
                    View
                  </button>
                </td>
              </tr>
              
              {/* Sample Lead 2 */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium">Rahul Verma</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">+91 91234 56789</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 mr-1">Family Referral</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  1 week ago
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-neutral-600 hover:text-neutral-900 mr-3">
                    WhatsApp
                  </button>
                  <button className="text-neutral-600 hover:text-neutral-900">
                    View
                  </button>
                </td>
              </tr>
              
              {/* Sample Lead 3 */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium">Anjali Desai</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">+91 87654 32109</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Walk-in</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Today
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-neutral-600 hover:text-neutral-900 mr-3">
                    WhatsApp
                  </button>
                  <button className="text-neutral-600 hover:text-neutral-900">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 