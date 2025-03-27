export default function HelpAndSupport() {
  return (
    <div className="py-10 container">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">
          We&apos;re Here to Help and Support Your Success!
        </h2>
        <p className="text-gray-700">
          We provide full assistance to ensure your school management system
          runs smoothly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Customer Support Card */}
        <div className="bg-emerald-500 rounded-lg p-6 text-white text-center mt-12 group hover:shadow-lg transition-all duration-300">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 -mt-12 group-hover:bg-emerald-100 transition-colors border-[4px] border-white">
            <div className="text-emerald-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Customer support</h3>
          <p className="mb-4">Get direct help from expert developers.</p>
          <button className="border border-white rounded-md px-4 py-2 transition-colors inline-block group-hover:bg-white group-hover:text-emerald-500">
            Contact Now
          </button>
        </div>

        {/* Documentation Card */}
        <div className="bg-emerald-500 rounded-lg p-6 text-white text-center mt-12 group hover:shadow-lg transition-all duration-300">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 -mt-12 group-hover:bg-emerald-100 transition-colors border-[4px] border-white">
            <div className="text-emerald-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Documentation</h3>
          <p className="mb-4">Step-by-step guide to setting up the software.</p>
          <button className="border border-white rounded-md px-4 py-2 transition-colors inline-block group-hover:bg-white group-hover:text-emerald-500">
            Read Now
          </button>
        </div>

        {/* Installation Card */}
        <div className="bg-emerald-500 rounded-lg p-6 text-white text-center mt-12 group hover:shadow-lg transition-all duration-300">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 -mt-12 group-hover:bg-emerald-100 transition-colors border-[4px] border-white">
            <div className="text-emerald-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Installation</h3>
          <p className="mb-4">
            No coding skills? We&apos;ll handle the setup for you.
          </p>
          <button className="border border-white rounded-md px-4 py-2 transition-colors inline-block group-hover:bg-white group-hover:text-emerald-500">
            Get Installation
          </button>
        </div>

        {/* Customization Card */}
        <div className="bg-emerald-500 rounded-lg p-6 text-white text-center mt-12 group hover:shadow-lg transition-all duration-300">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 -mt-12 group-hover:bg-emerald-100 transition-colors border-[4px] border-white">
            <div className="text-emerald-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Customization</h3>
          <p className="mb-4">Need modifications? Share your requirements.</p>
          <button className="border border-white rounded-md px-4 py-2 transition-colors inline-block group-hover:bg-white group-hover:text-emerald-500">
            Get Customization
          </button>
        </div>
      </div>
    </div>
  );
}
