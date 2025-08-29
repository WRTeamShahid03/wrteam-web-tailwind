"use client";
import Image from "next/image";
import teamImg from "../../../assets/images/homePage/teamImg.png";
import { FaArrowRight } from "react-icons/fa";
import heroImg from "../../../assets/images/homePage/heroSectImg.webp";
import { PageTitle } from "@/components/HeadingComponent";
import Link from "next/link";
import saleBanner from "../../../assets/images/homePage/sale_banner.webp";

const HeroSection: React.FC = () => {

  return (
    <section className="commonBg py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          {/* Left box */}
          <div className="lg:w-1/2 lg:pr-8">
            <PageTitle className="sectionTitle">
              Streamline Your Business Website and Mobile App with the Best IT
              Company
            </PageTitle>
          </div>
          {/* Right box */}
          <div className="lg:w-1/2 flex flex-col mt-4 md:mt-6 lg:mt-0">
            <p className="text-gray-700">
              Upgrade your business administration with WRTeam. Create a
              customized and feature-loaded website or mobile app with expert
              and experienced developers at WRTeam, providing digital solutions
              tailored to your needs.
            </p>

            <div className="lg:hidden w-full flexCenter mt-8 md:mt-12">
              <Image
                src={heroImg}
                alt="Creative agency hero banner"
                width={1600}           // real intrinsic size
                height={900}
                priority               // 👈 critical for LCP
                sizes="(max-width:768px) 100vw, 80vw"
                className="w-full h-auto"
              />
            </div>

            {/* This div arranges button and creative minds section in one row */}
            <div className="hidden md:flex flex-wrap between-1200-1399:flex-nowrap items-start md:items-center justify-between max-479:justify-center mt-8 lg:mt-4 gap-4">
              <Link href={'/about-us'} title="Get to Know Us" className="commonBtn between-1200-1399:py-2 between-1200-1399:px-1 between-1200-1399:text-sm flex items-center gap-2">
                <span>Get to Know Us</span>
                <FaArrowRight />
              </Link>

              <div className="flex flex-col">
                <p className="font-medium between-1200-1399:text-sm">
                  Meet Our Creative Minds
                </p>
                <p className="text-gray-700 text-sm">
                  Design. Develop. Inspire.
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src={teamImg}
                  alt="teamImg"
                  width={0}
                  height={0}
                  className="w-[200px] between-1200-1399:w-[185px h-auto"
                />
              </div>
            </div>

            {/* mobile screen */}
            <div className="flex flex-row-reverse md:flex-row md:hidden between-1200-1399:flex-nowrap max-575:items-center items-start md:items-center max-575:justify-center justify-between max-479:justify-center mt-8 lg:mt-4 gap-4">
              <Link href={'/about-us'} title="Get to Know Us" className="max-575:py-2 max-575:px-3 max-575:text-xs commonBtn between-576-767:py-2 between-576-767:px-1 between-576-767:text-sm flex items-center gap-2">
                <span>Get to Know Us</span>
                <FaArrowRight className="max-399:hidden" />
              </Link>

              <div className="flex sm:flex-row max-575:flex-col max-575:gap-3 gap-6">
                <div className="flex flex-col">
                  <p className="max-575:text-xs font-medium between-576-767:text-sm">
                    Meet Our Creative Minds
                  </p>
                  <p className="text-gray-700 text-sm max-575:text-xs">
                    Design. Develop. Inspire.
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    src={teamImg}
                    alt="teamImg"
                    width={0}
                    height={0}
                    className="max-575:w-[150px] w-[200px] between-576-767:w-[185px] h-auto"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="hidden w-full lg:flexCenter mt-12 md:mt-16">
          <Link href={'https://www.wrteam.in/freedom-sale?utm_source=website&utm_medium=strip&utm_campaign=freedom-sale'} title="Sale Banner" target="_blank">
            <Image
              src={heroImg}
              alt="Creative agency hero banner"
              width={1600}           // real intrinsic size
              height={900}
              priority               // 👈 critical for LCP
              sizes="(max-width:768px) 100vw, 80vw"
              className="w-full h-auto"
            />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
