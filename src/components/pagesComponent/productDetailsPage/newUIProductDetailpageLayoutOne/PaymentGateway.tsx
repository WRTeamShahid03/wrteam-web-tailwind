export default function PaymentGateway() {
  return (
    <div className="container commonMT">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">
          Payment Gateway Integration in eSchool SaaS
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          This education software features secure payment gateway integration,
          streamlining fee collection for schools.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="bg-green-50 p-8 rounded-lg flex flex-col md:flex-row">
        {/* Payment Options */}
        <div className="flex-1 flex items-center justify-center md:justify-start">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {/* Stripe Payment Option */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="text-purple-600 mb-1">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 3.33334C10.8 3.33334 3.33334 10.8 3.33334 20C3.33334 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33334 20 3.33334Z"
                        fill="#6772E5"
                        fillOpacity="0.2"
                      />
                      <path
                        d="M20.3333 16.4C20.3333 15.5333 21.0667 15 22.2 15C23.8 15 24.9333 15.6667 25.6667 16.4L27.3333 14.4C26.2 13.1333 24.5333 12.3333 22.2 12.3333C19.2 12.3333 17 14.2 17 16.6667C17 20.8 22.1333 19.9333 22.1333 21.9333C22.1333 22.9333 21.2667 23.3333 20.0667 23.3333C18.3333 23.3333 17 22.5333 16.1333 21.6667L14.4667 23.6667C15.7333 25 17.5333 26 20 26C23.1333 26 25.5333 24.2667 25.5333 21.8C25.5333 17.4 20.3333 18.4667 20.3333 16.4Z"
                        fill="#6772E5"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">Stripe</span>
                </div>
              </div>
            </div>

            {/* Razorpay Payment Option */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="text-blue-600 mb-1">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 19L26 13V27L18 21V19Z" fill="#0066FF" />
                      <path d="M14 13L22 19V21L14 27V13Z" fill="#0066FF" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">Razorpay</span>
                </div>
              </div>
            </div>

            {/* Coming More Option */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="text-amber-500 mb-1">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 10V20L25 25"
                        stroke="#FDB913"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M20 10C14.5 10 10 14.5 10 20C10 25.5 14.5 30 20 30C25.5 30 30 25.5 30 20C30 14.5 25.5 10 20 10Z"
                        stroke="#FDB913"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700 text-center">
                    Coming
                    <br />
                    more...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Device Image */}
        <div className="flex-1 flex justify-center md:justify-end items-center mt-8 md:mt-0">
          <div className="relative w-64">
            <img
              src="https://placehold.co/300x600/e8f5ff/2563eb?text=eSchool+Mobile+App"
              alt="eSchool Mobile App"
              className="w-full h-auto rounded-3xl"
              style={{
                filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1))",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
