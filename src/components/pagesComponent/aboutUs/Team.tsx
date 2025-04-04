"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { axiosClient } from '@/lib/api'
import { TeamMember, TeamMemberResponse } from '@/types/teamMembers'
import TeamSkeleton from './TeamSkeleton'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Team = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                setIsLoading(true);
                const response = await axiosClient.get<TeamMemberResponse>('/api/team-members', {
                    params: { page: currentPage },
                    timeout: 10000
                });

                if (response?.data?.data?.data) {
                    setTeamMembers(response.data.data.data);
                    setTotalPages(response.data.data.last_page);
                }
            } catch (error) {
                console.error('Error fetching team members:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTeamMembers();
    }, [currentPage]);

    return (
        <section className='commonBg commonMT py-8 md:py-20'>
            <div className='container space-y-12 md:space-y-20'>
                <div className="flexColCenter commonTextGap lg:w-[70%] xl:w-[50%] text-center m-auto">
                    <span className='sectionTag'>Expert <span>Team</span></span>
                    <h5 className='sectionTitle'>Catalyzing Global Reach The <span>Expert Team Powering IT Solutions Worldwide</span></h5>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {isLoading ? (
                        <TeamSkeleton count={16} />
                    ) : (
                        teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className='relative rounded-[30px] overflow-hidden group transition-all duration-500 shadow-md'
                            >
                                <Image
                                    src={member.image}
                                    height={400}
                                    width={300}
                                    alt={member.name}
                                    loading='lazy'
                                    className='w-full h-auto object-cover aspect-[3/4]'
                                />
                                <div className='flex flex-col gap-2 bg-white w-[94%] m-auto rounded-[15px] bottom-4 py-2 px-6 absolute left-0 right-0 h-[44px] overflow-hidden transition-all duration-500 group-hover:h-[80px]'>
                                    <span className='font-extrabold text-lg lg:text-xl'>{member.name}</span>
                                    <span className='textSecondary'>{member.designation}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Pagination controls */}
                {!isLoading && totalPages > 1 && (
                    <div className="flex justify-center mt-10">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`w-10 h-10 flexCenter rounded-full secondaryBg text-white ${currentPage === 1 ? 'cursor-not-allowed ' : ''}`}
                            >
                                <FaChevronLeft />
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-10 h-10 rounded-full ${page === currentPage ? 'primaryBg text-white' : 'secondaryBg text-white'}`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`w-10 h-10 flexCenter rounded-full secondaryBg text-white ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
                            >
                               <FaChevronRight />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Team