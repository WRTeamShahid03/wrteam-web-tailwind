export default function ReadyToPower() {
  return (
    <div className="container commonMT commonMB">
      <div className="bg-green-50 p-6 md:p-8 my-4 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">
          Ready to Power Up Your Project with eSchool SaaS?
        </h2>
        <p className="text-sm md:text-base text-center mb-4 md:mb-6 max-w-md mx-auto">
          eSchool SaaS is designed to help you work smarter, not harder.
          Let&apos;s get you up and running in no time!
        </p>
        <div className="flex justify-center gap-3 md:gap-4">
          <button className="bg-green-500 text-white px-4 md:px-6 py-2 rounded text-sm md:text-base hover:bg-green-600 transition-colors">
            Buy Now
          </button>
          <button className="border border-green-500 text-green-500 px-4 md:px-6 py-2 rounded text-sm md:text-base hover:bg-green-50 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
