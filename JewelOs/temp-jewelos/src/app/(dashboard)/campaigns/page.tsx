export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Campaign Planner</h1>
        <button className="px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 w-full sm:w-auto">
          Create Campaign
        </button>
      </div>
      
      {/* Campaign Calendar */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <h2 className="text-lg font-medium">Campaign Calendar</h2>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <button className="p-1 text-neutral-600 hover:text-neutral-900">
              <span className="material-icons text-xl">navigate_before</span>
            </button>
            <span className="text-sm font-medium">May 2025</span>
            <button className="p-1 text-neutral-600 hover:text-neutral-900">
              <span className="material-icons text-xl">navigate_next</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {/* Day Headers */}
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="text-center text-xs text-neutral-500 font-medium py-1">
              {day}
            </div>
          ))}
          
          {/* Calendar Days */}
          {Array.from({ length: 35 }).map((_, i) => {
            const day = i - 3; // Starting from -3 to adjust first day of month
            return (
              <div 
                key={i} 
                className={`border rounded-md p-1 min-h-[4rem] ${
                  day < 1 || day > 31 ? 'bg-neutral-50 text-neutral-300' : 'hover:bg-neutral-50'
                } ${
                  day === 10 || day === 15 || day === 22 ? 'border-blue-300' : ''
                }`}
              >
                <div className="text-xs">{day > 0 && day <= 31 ? day : ''}</div>
                {day === 10 && (
                  <div className="mt-1 text-[10px] bg-blue-100 text-blue-800 rounded px-1 py-0.5">
                    Diwali Launch
                  </div>
                )}
                {day === 15 && (
                  <div className="mt-1 text-[10px] bg-purple-100 text-purple-800 rounded px-1 py-0.5">
                    Bridal Promo
                  </div>
                )}
                {day === 22 && (
                  <div className="mt-1 text-[10px] bg-green-100 text-green-800 rounded px-1 py-0.5">
                    Family Offers
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Active Campaigns */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium mb-4">Active Campaigns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4 hover:bg-neutral-50">
            <div className="flex items-start">
              <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600">
                <span className="material-icons">celebration</span>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-medium">Diwali Collection Launch</h3>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full mt-1 sm:mt-0">
                    Active
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Showcase new festive designs for the holiday season.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs px-2 py-1 bg-neutral-100 rounded-full">
                    Runs: May 10-20
                  </span>
                  <span className="text-xs px-2 py-1 bg-neutral-100 rounded-full">
                    Audience: All customers
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4 hover:bg-neutral-50">
            <div className="flex items-start">
              <div className="h-12 w-12 bg-purple-100 rounded-md flex items-center justify-center text-purple-600">
                <span className="material-icons">favorite</span>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-medium">Bridal Collection Promotion</h3>
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full mt-1 sm:mt-0">
                    Scheduled
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Highlighting our premium wedding jewelry collection.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs px-2 py-1 bg-neutral-100 rounded-full">
                    Starts: May 15
                  </span>
                  <span className="text-xs px-2 py-1 bg-neutral-100 rounded-full">
                    Audience: Brides
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* AI-Powered Campaign Ideas */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium mb-1">AI-Powered Campaign Ideas</h2>
        <p className="text-sm text-gray-600 mb-4">Suggested campaigns based on your sales data and customer trends.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 bg-gradient-to-br from-neutral-50 to-blue-50">
            <div className="flex items-center mb-2">
              <span className="material-icons text-blue-500 mr-2">auto_awesome</span>
              <h3 className="font-medium">Summer Wedding Special</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Data shows increased interest in wedding jewelry for summer ceremonies. Create a targeted campaign with special pricing.
            </p>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              Create Campaign
            </button>
          </div>
          
          <div className="border rounded-lg p-4 bg-gradient-to-br from-neutral-50 to-purple-50">
            <div className="flex items-center mb-2">
              <span className="material-icons text-purple-500 mr-2">auto_awesome</span>
              <h3 className="font-medium">Re-engagement: Inactive VIPs</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              We've identified 12 VIP customers who haven't visited in 3+ months. Create a personalized re-engagement campaign.
            </p>
            <button className="text-sm text-purple-600 hover:text-purple-800 font-medium">
              Create Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 