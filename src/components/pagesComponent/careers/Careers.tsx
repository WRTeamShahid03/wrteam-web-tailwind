import Layout from "@/components/layout/Layout";
import Image from "next/image";
import ourValues from "@/assets/images/career/our-values.webp";
import trianglePattern from "@/assets/images/career/triangle-pattern.png";
import AnimatedDots from "./AnimatedDots";
import React from "react";
import VacanciesSection from "./VacanciesSection";
import CareerFormWrapper from "./CareerFormWrapper";


interface Vacancy {
  id: number;
  title: string;
  experience: string;
}

// Fetch vacancies data on the server
async function fetchVacancies(): Promise<Vacancy[]> {
  try {

    let url = `${process.env.NEXT_PUBLIC_API_URL || "https://backend.wrteam.in"
      }/api/get-vacancies`;

    const response = await fetch(url);

    const data = await response.json();

    if (data.error) {
      console.error("Error fetching vacancies:", data.message);
      return [];
    }

    return data.data || [];
  } catch (err) {
    console.error("Error fetching vacancies:", err);
    return [];
  }
}

/**
 * Careers component using Next.js hybrid rendering approach
 * - Server-rendered static content for better SEO
 * - Server-side data fetching for vacancies
 * - Client components for interactive elements (form, animations)
 */
const Careers = async () => {
  // Fetch vacancies on the server
  const vacancies = await fetchVacancies();

  return (
    <Layout>
      <section className="container mx-auto commonMT">
        {/* Work With Us section */}
        <div className="flexColCenter commonTextGap">
          <span className="sectionTag">
            Work <span>With Us</span>
          </span>

          {/* Join Our Team heading */}
          <h1 className="sectionTitle">
            Join Our <span>Team</span>
          </h1>

          {/* Description paragraph */}
          <p className="sectionPara max-w-3xl mx-auto text-center leading-relaxed">
            WRTeam invites all aspiring and experienced IT professionals to join
            and become a part of our family and give the right direction to
            their careers. We&apos;re a leading web & mobile app development
            company, offering the best App development solutions at reasonable
            prices. Our motto is to grow together, and we focus on the holistic
            development of your career along with the growth of the company.
          </p>
        </div>
      </section>

      <section className="commonBg">
        <div className="container commonMT">
          <div className="grid max-1199:grid-cols-1 grid-cols-2 gap-8 py-8 md:py-12 between-1200-1399:py-24 xl:py-24">
            <div className="space-y-6">
              <div className="flexColCenter !items-start commonTextGap">
                <span className="sectionTag">Career Growth</span>
                <h2 className="sectionTitle">
                  Why Work With <span>WRTeam</span>
                </h2>
                <p className="sectionPara">
                  We value creativity, collaboration, and continuous learning
                </p>
              </div>

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
            <div className="">
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
                <AnimatedDots data={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies Section - Use the preloaded data */}
      <VacanciesSection vacancies={vacancies} />

      {/* Application Form Section */}
      <div className="container mx-auto">
        <section className="commonBg py-16 max-575:px-3 px-10 rounded-[16px]" id="applySection">
          <div className="flexColCenter commonTextGap text-center">
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
          <CareerFormWrapper vacancies={vacancies} />
        </section>
      </div>
    </Layout>
  );
}

export default Careers;
