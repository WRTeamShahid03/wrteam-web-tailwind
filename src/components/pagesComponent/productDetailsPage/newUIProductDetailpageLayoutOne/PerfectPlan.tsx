export default function PerfectPlan() {
  return (
    <div className="bg-[#e6f5f0] py-10">
      <div className="container commonMT">
        {/* Header section */}
        <h2 className="text-center text-4xl font-bold mb-5">
          Choose the perfect plan for your unique needs
        </h2>
        <p className="text-center text-sm mb-8">
          See the differences between the regular and extended licenses, and
          pick the one that fits what you need.
        </p>

        {/* Pricing table with responsive scrolling */}
        <div className="overflow-x-auto">
          <div className="border rounded-md bg-white min-w-[768px]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-4 text-left font-bold w-1/3">
                    Product Plans
                  </th>

                  {/* Regular license column */}
                  <th className="p-4 border-l text-center w-1/3 ">
                    <div className="flex justify-center items-center mb-1">
                      <span className="text-[#1AB394] text-3xl font-bold">
                        $49
                      </span>
                      <span className="text-gray-500 line-through ml-1">
                        $99
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">Regular License</p>
                    <button className="bg-white border border-[#1AB394] text-[#1AB394] px-4 py-2 rounded-md flex items-center mx-auto">
                      Buy Now <span className="ml-1">→</span>
                    </button>
                  </th>

                  {/* Extended license column - ribbon removed */}
                  <th className="p-4 border-l text-center w-1/3 relative">
                    {/* Corner ribbon - moved to left column */}
                    <div
                      className="hidden md:block absolute w-[150px] h-[150px] overflow-hidden top-0 left-0"
                      style={{
                        zIndex: 1,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 32,
                          left: -40,
                          transform: "rotate(-45deg)",
                          background: "#1AB394",
                          color: "white",
                          padding: "5px 40px",
                          fontWeight: 600,
                          fontSize: "14px",
                        }}
                      >
                        Recommended
                      </div>
                    </div>
                    <div className="text-[#1AB394] text-3xl font-bold mb-1">
                      $499
                    </div>
                    <p className="text-gray-700 mb-3">Extended License</p>
                    <button className="bg-[#1AB394] text-white px-4 py-2 rounded-md flex items-center mx-auto">
                      Buy Now <span className="ml-1">→</span>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Feature rows */}
                {[
                  {
                    feature: "Lifetime License Validity",
                    regularIncluded: true,
                    extendedIncluded: true,
                  },
                  {
                    feature: "Permitted for 1 Domain",
                    regularIncluded: true,
                    extendedIncluded: true,
                  },
                  {
                    feature: "6 months of general and technical support",
                    regularIncluded: true,
                    extendedIncluded: true,
                    description: "(As per Envato support policy)",
                  },
                  {
                    feature: "All Premium Features",
                    regularIncluded: true,
                    extendedIncluded: true,
                  },
                  {
                    feature: "Lifetime FREE Update",
                    regularIncluded: true,
                    extendedIncluded: true,
                  },
                  {
                    feature: "For Personal Project",
                    regularIncluded: true,
                    extendedIncluded: true,
                  },
                  {
                    feature: "For Commercial Projects",
                    regularIncluded: false,
                    extendedIncluded: true,
                    description:
                      "(If this end project is paid for using or sell)",
                  },
                  {
                    feature: "Postman Collection for REST API Documentation",
                    regularIncluded: false,
                    extendedIncluded: true,
                    description: "(copy on the product)",
                  },
                  {
                    feature: "Admin Panel FREE Installation in cPanel",
                    regularIncluded: false,
                    extendedIncluded: true,
                    description: "(One Time)",
                  },
                  {
                    feature: "1 Year Priority Support",
                    regularIncluded: false,
                    extendedIncluded: true,
                  },
                  {
                    feature: "AnyDesk Support",
                    regularIncluded: false,
                    extendedIncluded: true,
                  },
                  {
                    feature: "FREE Website Setup",
                    regularIncluded: false,
                    extendedIncluded: true,
                    description: "(One Time)",
                  },
                ].map((item, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="p-4 w-1/3">
                      <div className="flex flex-col justify-center">
                        {item.feature}
                        {item.description && (
                          <span className="text-xs text-gray-500">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 border-l text-center w-1/3">
                      {item.regularIncluded ? (
                        <div className="w-6 h-6 rounded-full bg-[#1AB394] flex items-center justify-center text-white mx-auto">
                          ✓
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white mx-auto">
                          ✕
                        </div>
                      )}
                    </td>
                    <td className="p-4 border-l text-center w-1/3">
                      {item.extendedIncluded ? (
                        <div className="w-6 h-6 rounded-full bg-[#1AB394] flex items-center justify-center text-white mx-auto">
                          ✓
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white mx-auto">
                          ✕
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
