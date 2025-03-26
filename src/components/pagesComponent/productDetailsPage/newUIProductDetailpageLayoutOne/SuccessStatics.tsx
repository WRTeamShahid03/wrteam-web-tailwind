export default function SuccessStatics() {
  return (
    <div className="container commonMT">
      <div className="bg-[#1d3a5d] w-full grid grid-cols-1 min-[320px]:grid-cols-2 md:flex md:flex-row justify-around items-center py-16 px-4 gap-8 my-10 rounded-3xl">
        {/* Elite Author */}
        <div className="text-center text-white flex flex-col items-center">
          <div className="bg-white rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10 text-[#1d3a5d]"
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
          <h2 className="text-xl md:text-2xl font-semibold mb-1">
            Elite Author
          </h2>
          <p className="text-sm md:text-lg">On CodeCanyon</p>
        </div>

        {/* 19000+ */}
        <div className="text-center text-white flex flex-col items-center">
          <div className="bg-white rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10 text-[#1d3a5d]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-1">19000+</h2>
          <p className="text-sm md:text-lg">Global Clients</p>
        </div>

        {/* White Label */}
        <div className="text-center text-white flex flex-col items-center">
          <div className="bg-white rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10 text-[#1d3a5d]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-1">
            White Label
          </h2>
          <p className="text-sm md:text-lg">Fully Customizable</p>
        </div>

        {/* FREE Updates */}
        <div className="text-center text-white flex flex-col items-center">
          <div className="bg-white rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10 text-[#1d3a5d]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-1">
            FREE Updates
          </h2>
          <p className="text-sm md:text-lg">For Life-Time</p>
        </div>

        {/* One Time Buy */}
        <div className="text-center text-white flex flex-col items-center col-span-1 min-[320px]:col-span-2 md:col-span-1">
          <div className="bg-white rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10 text-[#1d3a5d]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-1">
            One Time Buy
          </h2>
          <p className="text-sm md:text-lg">No Monthly Fees</p>
        </div>
      </div>
    </div>
  );
}
