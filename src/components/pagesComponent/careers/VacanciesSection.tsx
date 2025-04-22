import React from "react";

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
              className="border border-gray-200 rounded-lg p-8 text-left hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 min-w-[16px] min-h-[16px] bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                <h3 className="text-xl font-bold font-montserrat">
                  {job.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-8 font-poppins">
                Experience: {job.experience}
              </p>
              <a
                href="#applySection"
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
          ))}
        </div>
      </div>
    </section>
  );
}
