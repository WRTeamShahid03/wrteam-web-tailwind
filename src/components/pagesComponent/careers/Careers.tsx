import Layout from "@/components/layout/Layout";
import Image from "next/image";
import ourValues from "@/assets/images/career/our-values.webp";
import trianglePattern from "@/assets/images/career/triangle-pattern.png";
import AnimatedDots from "./AnimatedDots";
import CareerForm from "./CareerForm";

// Import the CareerForm component with dynamic import to ensure client-side rendering

export default function Careers() {
  return (
    <Layout>
      <section className="container mx-auto commonMT">
        {/* Work With Us section */}
        <div className="flex flex-col items-center justify-center text-center pt-10">
          <div className="bg-blue-50 text-blue-600 font-medium px-4 py-2 rounded-md mb-6 font-poppins">
            Work With Us
          </div>

          {/* Join Our Team heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-montserrat">
            Join Our <span className="text-blue-600">Team</span>
          </h1>

          {/* Description paragraph */}
          <p className="text-gray-500 font-medium max-w-3xl mx-auto text-center mb-16 font-poppins leading-relaxed">
            WRTeam invites all aspiring and experienced IT professionals to join
            and become a part of our family and give the right direction to
            their careers. We&apos;re a leading web & mobile app development
            company, offering the best App development solutions at reasonable
            prices. Our motto is to grow together, and we focus on the holistic
            development of your career along with the growth of the company.
          </p>
        </div>
      </section>

      <section className="bg-[#2e71fe14]">
        <div className="container mx-auto commonMT">
          <div className="flex flex-col md:flex-row gap-8 items-center py-32">
            <div className="w-full md:w-1/2 ">
              {/* Career Growth Tag */}
              <div className="bg-blue-50 text-blue-600 font-medium px-4 py-2 rounded-md mb-6 w-fit font-poppins">
                Career Growth
              </div>

              {/* Section Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
                Why Work With <span className="text-blue-600">WRTeam</span>
              </h2>

              {/* Subtitle */}
              <p className="text-gray-600 mb-8 font-poppins">
                We value creativity, collaboration, and continuous learning
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                {/* Benefit 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">
                    01
                  </div>
                  <span className="font-medium text-gray-800">
                    Competitive Salary and Incentives
                  </span>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">
                    02
                  </div>
                  <span className="font-medium text-gray-800">
                    Collaborative Work culture
                  </span>
                </div>

                {/* Benefit 3 */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">
                    03
                  </div>
                  <span className="font-medium text-gray-800">
                    Learning and Growth
                  </span>
                </div>

                {/* Benefit 4 */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">
                    04
                  </div>
                  <span className="font-medium text-gray-800">
                    Flexible Timings
                  </span>
                </div>

                {/* Benefit 5 */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">
                    05
                  </div>
                  <span className="font-medium text-gray-800">
                    Birthday Celebrations
                  </span>
                </div>

                {/* Benefit 6 */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">
                    06
                  </div>
                  <span className="font-medium text-gray-800">
                    Rewards, Recognition and Appreciation
                  </span>
                </div>

                {/* Benefit 7 */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">
                    07
                  </div>
                  <span className="font-medium text-gray-800">
                    SatFun activities
                  </span>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                {/* Main image */}
                <Image
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                  src={ourValues}
                  alt="Team Collaboration"
                  className="w-full h-auto object-cover"
                />

                {/* Triangle pattern - Using client component */}
                <div className="absolute bottom-[-15%] left-[20%] hidden lg:block rotate-180">
                  <Image
                    height={0}
                    width={0}
                    loading="lazy"
                    src={trianglePattern}
                    alt="trianglePattern"
                    className="trianglePattern2 w-auto h-auto"
                  />
                </div>

                {/* Dots pattern - Using client component */}
                <AnimatedDots />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Job Openings Section */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <div className="bg-blue-50 text-blue-600 font-medium px-4 py-2 rounded-md mb-6 inline-block font-poppins">
            Career Opportunities
          </div>

          <h2 className="text-4xl font-bold mb-8 font-montserrat">
            Current <span className="text-blue-600">Job Openings</span> At
            WRTeam
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-12 font-poppins">
            Explore our current opportunities and fill in the necessary details
            to apply for the desired profile. We&apos;ll be in touch with you
            very soon. If you don&apos;t hear from us within 7 days, you can
            reach us at <span className="font-medium">hr@wrteam.in</span>
          </p>

          {/* Job Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Flutter Developer Card */}
            <div className="border border-gray-200 rounded-lg p-8 text-left hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 min-w-[16px] min-h-[16px] bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                <h3 className="text-xl font-bold font-montserrat">
                  Flutter Developer
                </h3>
              </div>
              <p className="text-gray-600 mb-8 font-poppins">
                Experience: Freshers , 1+ Years
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-medium border border-blue-600 rounded-md px-6 py-2 hover:bg-blue-50 transition-colors"
              >
                Apply Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Laravel Developer Card */}
            <div className="border border-gray-200 rounded-lg p-8 text-left hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 min-w-[16px] min-h-[16px] bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                <h3 className="text-xl font-bold font-montserrat">
                  Laravel Developer
                </h3>
              </div>
              <p className="text-gray-600 mb-8 font-poppins">
                Experience: 1+ Years
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-medium border border-blue-600 rounded-md px-6 py-2 hover:bg-blue-50 transition-colors"
              >
                Apply Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* SEO Expert Card */}
            <div className="border border-gray-200 rounded-lg p-8 text-left hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 min-w-[16px] min-h-[16px] bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                <h3 className="text-xl font-bold font-montserrat">
                  SEO Expert
                </h3>
              </div>
              <p className="text-gray-600 mb-8 font-poppins">
                Experience: 1+ Years
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-medium border border-blue-600 rounded-md px-6 py-2 hover:bg-blue-50 transition-colors"
              >
                Apply Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Digital Marketer Card */}
            <div className="border border-gray-200 rounded-lg p-8 text-left hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 min-w-[16px] min-h-[16px] bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                <h3 className="text-xl font-bold font-montserrat">
                  Digital marketer
                </h3>
              </div>
              <p className="text-gray-600 mb-8 font-poppins">
                Experience: 1+ Years
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-medium border border-blue-600 rounded-md px-6 py-2 hover:bg-blue-50 transition-colors"
              >
                Apply Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Social Media Manager Card */}
            <div className="border border-gray-200 rounded-lg p-8 text-left hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 min-w-[16px] min-h-[16px] bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                <h3 className="text-xl font-bold font-montserrat">
                  Social Media Manager + Content Writer
                </h3>
              </div>
              <p className="text-gray-600 mb-8 font-poppins">
                Experience: 1 Year
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-medium border border-blue-600 rounded-md px-6 py-2 hover:bg-blue-50 transition-colors"
              >
                Apply Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Form Section */}
      <section className="bg-[#f1f5ff] py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 font-montserrat">
              Apply <span className="text-blue-600">Now</span>
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mb-12 font-poppins">
              Explore our current opportunities and fill in the necessary
              details to apply for the desired profile. We&apos;ll be in touch
              with you very soon. If you don&apos;t hear from us within 7 days,
              you can reach us at{" "}
              <strong className="font-bold text-black">hr@wrteam.in</strong>
            </p>
          </div>

          {/* Application Form - Using Client Component */}
          <CareerForm />
        </div>
      </section>
    </Layout>
  );
}
