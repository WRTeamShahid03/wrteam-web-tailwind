'use client'
import Image from "next/image";
import teamImg from '../../../assets/images/homePage/teamImg.png'
import { FaArrowRight } from 'react-icons/fa'
import heroImg from '../../../assets/images/homePage/heroSectImg.svg'

const HeroSection: React.FC = () => {
    return (
        <section className="commonBg py-12 md:py-16 lg:py-20">
            <div className="container">
                <div className="flex flex-col lg:flex-row">
                    {/* Left box */}
                    <div className="lg:w-1/2 lg:pr-8">
                        <h1 className="sectionTitle">
                            Streamline Your Business Website and Mobile App with the Best IT Company
                        </h1>
                    </div>

                    {/* Right box */}
                    <div className="lg:w-1/2 flex flex-col mt-6 lg:mt-0">
                        <p className="text-gray-700">
                            Upgrade your business administration with WRTeam. Create a customized and feature-loaded website or mobile app with expert and experienced developers at WRTeam, providing digital solutions tailored to your needs.
                        </p>

                        {/* This div arranges button and creative minds section in one row */}
                        <div className="flex flex-wrap between-1200-1399:flex-nowrap items-start md:items-center justify-between max-479:justify-center mt-8 lg:mt-4 gap-4">
                            <button className="commonBtn between-1200-1399:py-2 between-1200-1399:px-1 between-1200-1399:text-sm flex items-center gap-2">
                                <span>Get to Know Us</span>
                                <FaArrowRight />
                            </button>

                            <div className="flex flex-col">
                                <p className="font-medium between-1200-1399:text-sm">Meet Our Creative Minds</p>
                                <p className="text-gray-700 text-sm">
                                    Design. Develop. Inspire.
                                </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <Image src={teamImg} alt="teamImg" width={0} height={0} className="w-[200px] between-1200-1399:w-[185px h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flexCenter mt-16">
                    <Image src={heroImg} alt="heroImg" width={0} height={0} className="w-full h-auto" loading="lazy"/>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
