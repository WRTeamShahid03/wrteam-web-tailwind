import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

interface Vacancy {
  id: number;
  title: string;
  experience: string;
}

export default function VacanciesSection({
  vacancies,
}: {
  vacancies: Vacancy[];
}) {
  // If no vacancies, don't render anything
  if (!vacancies.length) {
    return null;
  }

  return (
    <section className="container mx-auto py-16">
      <div className="text-center mb-12">
        <div className="flexColCenter commonTextGap">
          <span className="sectionTag">Career Opportunities</span>

          <h2 className="sectionTitle">
            Current <span className="text-blue-600">Job Openings</span> At
            WRTeam
          </h2>

          <p className="sectionPara max-w-3xl mx-auto mb-12 !font-medium">
            Explore our current opportunities and fill in the necessary details
            to apply for the desired profile. We&apos;ll be in touch with you
            very soon. If you don&apos;t hear from us within 7 days, you can
            reach us at{" "}
            <span className="font-bold text-black">hr@wrteam.in</span>
          </p>
        </div>

        {/* Job Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vacancies.map((job) => (
            <div
              key={job.id}
              className="border-2 border-[#545a684d] p-8 text-left rounded-[16px]"
            >
              <div className="flex items-center mb-4">
                <div className="p-[6px] bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                <h3 className="text-xl font-bold font-montserrat">
                  {job.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-8 font-poppins">
                Experience: {job.experience}
              </p>
              <a
                href="#applySection"
                className="inline-flex items-center text-blue-600 font-medium border border-blue-600 rounded-md px-6 py-2 transition-all duration-300 hover:primaryBg hover:text-white hover:shadow-[0_20px_36px_#2e71ef5c]"
              >
                Apply Now
                <BsArrowRightCircle className="ml-2" /> 
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
