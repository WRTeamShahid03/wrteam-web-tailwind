import Image from "next/image";
import React from "react";
import { TeamMember } from "@/types/teamMembers";
import TeamSkeleton from "./TeamSkeleton";
import TeamPagination from "./TeamPagination";

// Server component
async function getTeamMembers(page: number): Promise<{
  members: TeamMember[];
  totalPages: number;
}> {
  try {
    // Use fetch instead of axios for server components
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || "https://backend.wrteam.in"
      }/api/team-members?page=${page}`
    );

    const data = await response.json();

    if (data?.data?.data) {
      return {
        members: data.data.data,
        totalPages: data.data.last_page,
      };
    }
    return { members: [], totalPages: 1 };
  } catch (error) {
    console.error("Error fetching team members:", error);
    return { members: [], totalPages: 1 };
  }
}

// Server component with page parameter
const Team = async ({ page = 1 }: { page?: number }) => {
  // Server-side data fetching
  const { members, totalPages } = await getTeamMembers(page);
  const isLoading = false; // No loading state needed in server component

  return (
    <section id="team-section" className="commonBg commonMT py-8 md:py-20">
      <div className="container space-y-12 md:space-y-20">
        <div className="flexColCenter commonTextGap lg:w-[70%] xl:w-[50%] text-center m-auto">
          <span className="sectionTag">
            Expert <span>Team</span>
          </span>
          <h5 className="sectionTitle">
            Catalyzing Global Reach The{" "}
            <span>Expert Team Powering IT Solutions Worldwide</span>
          </h5>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            <TeamSkeleton count={16} />
          ) : (
            members.map((member) => (
              <div
                key={member.id}
                className="relative rounded-[30px] overflow-hidden group transition-all duration-500 shadow-md"
              >
                <Image
                  src={member.image}
                  height={400}
                  width={300}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                <div className="flex flex-col gap-2 bg-white w-[94%] m-auto rounded-[15px] bottom-4 py-2 px-6 absolute left-0 right-0 h-[44px] overflow-hidden transition-all duration-500 group-hover:h-[80px]">
                  <span className="font-extrabold text-lg lg:text-xl">
                    {member.name}
                  </span>
                  <span className="textSecondary">{member.designation}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination controls - Client component */}
        {totalPages > 1 && (
          <TeamPagination currentPage={page} totalPages={totalPages} />
        )}
      </div>
    </section>
  );
};

export default Team;
