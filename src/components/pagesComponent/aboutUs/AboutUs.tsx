import Layout from "@/components/layout/Layout";
import Image from "next/image";
import React from "react";
import knowMore from "@/assets/images/aboutUs/knowMore.webp";
import vision from "@/assets/images/aboutUs/our_vision.webp";
import mission from "@/assets/images/aboutUs/our_mission.webp";
import ourValues from "@/assets/images/career/our-values.webp";
import AnimatedDots from "../careers/AnimatedDots";
import trianglePattern from "@/assets/images/career/triangle-pattern.png";
import { AiFillLike } from "react-icons/ai";
import Counter from "@/components/homePage/sections/Counter";
import { FaRegCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import WorkChain from "@/components/homePage/sections/WorkChain";
import ClientReviewSection from "@/components/homePage/sections/ClientReviewSection";
import Team from "./Team";

interface valuesList {
  id: number;
  text: string;
}

const AboutUs: React.FC = () => {
  const valuesListPoints = [
    {
      id: 0,
      text: "We act with honesty and integrity.",
    },
    {
      id: 1,
      text: "We strive for quality and creativity.",
    },
    {
      id: 2,
      text: "We work closely with our clients.",
    },
    {
      id: 3,
      text: `We put our customers&apos; needs first.`,
    },
    {
      id: 4,
      text: "We are always learning and improving.",
    },
    {
      id: 5,
      text: "We value diversity and promote inclusion.",
    },
  ];

  return (
    <Layout>
      <section className="container commonMT">
        <div className="grid grid-cols-12 gap-y-10 md:gap-y-32 between-1200-1399:gap-y-40 xl:gap-16">
          <div className="max-1199:col-span-12 col-span-7 between-1200-1399:col-span-12 relative">
            <div className="relative">
              <Image
                src={knowMore}
                width={0}
                height={0}
                loading="lazy"
                alt="know about the top marketers, developers, and experts at best wed development company-WRTeam"
                className="w-auto md:w-[92%] h-auto"
              />

              <div className='bg-[#212121] hidden md:flexColCenter !items-start text-white p-3 md:p-6 gap-6 md:gap-12 group transition-all duration-300 h-max border-white border-[8px] rounded-[20px] absolute right-4 md:-right-[34px] -bottom-[60px] md:-bottom-[86px] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-300 group-hover:after:h-16 after:bg-gradient-to-b from-[hsla(0,8%,74%,0.427)] to-[hsla(0,8%,74%,0.427)] after:opacity-[0.4] overflow-hidden'>
                <span className="bg-white rounded-full p-2 textPrimary shadow-[0_8px_36px_#ffffff5c]">
                  <AiFillLike size={30} />
                </span>
                <span className="text-3xl md:text-5xl font-bold">25+</span>
                <h1 className="text-xl md:text-4xl font-semibold">
                  Business Solution
                </h1>
              </div>

              {/* Triangle pattern - Using client component */}
              <div className="absolute bottom-[-10%] 2xl:bottom-[-15%] xl:left-[10%] 2xl:left-[20%] hidden lg:block">
                <Image
                  height={0}
                  width={0}
                  loading="lazy"
                  src={trianglePattern}
                  alt="trianglePattern"
                  className="trianglePattern2 h-auto"
                />
              </div>
              <AnimatedDots data={true} />
            </div>
          </div>

          <div className="flexColCenter !items-start commonTextGap max-1199:col-span-12 between-1200-1399:col-span-12 col-span-5 w-full">
            <span className="sectionTag">
              Get to <span>know more</span>
            </span>
            <h1 className="sectionTitle">
              Your Work Partner in <span>Transforming</span> Your Vision into
              Reality.
            </h1>
            <p className="sectionPara">
              WRTeam is, a software development company located in Bhuj - India,
              serving IT services & digital solutions around the globe.
            </p>
            <p className="sectionPara">
              We&apos;re a team of experienced & expert developers with a
              specialization in making mobile apps, websites, and digital
              solutions tailored to your business.
            </p>
            <p className="sectionPara">
              WRTeam is the elite author on Envato selling digital solutions (
              pre-built source codes) to make applications & websites 5X faster,
              make websites & apps for e-commerce, hotels & restaurants, real
              estate, school management, mobile games, etc.
            </p>
            <p className="sectionPara">
              WRTeam is the one-stop solution for all your digital needs, WRTeam
              is your working partner that helps you with its expertise in web &
              app development, UI/UX designing, digital marketing, etc.
            </p>
          </div>
        </div>
      </section>

      <Counter />

      {/* our vision  */}
      <section className="container commonMT">
        <div className="grid grid-cols-12 gap-y-10 md:gap-y-12 xl:gap-20">
          <div className="flexColCenter !items-start commonTextGap max-1199:col-span-12 between-1200-1399:col-span-12 col-span-6 w-full">
            <span className="sectionTag">
              Our <span>Vision</span>
            </span>
            <h2 className="sectionTitle">
              Inspiring <span>Growth</span> Through Innovative{" "}
              <span>Mobile and Web</span> Solutions
            </h2>
            <p className="sectionPara">
              At WRTeam, we manifest to be the best provider of software
              solutions including source codes to make apps & websites and
              services like IT consultation, software development, UI/UX
              designing, and digital marketing.
            </p>
            <p className="sectionPara">
              Having a website or app is crucial for business growth, we are
              committed to providing innovative, stunning, and smooth software
              solutions that are perfectly made for your business.
            </p>
            <p className="sectionPara">
              We aim to be the best IT company known for its creativity, and
              high-quality software solutions, focussing on client satisfaction.
            </p>
          </div>

          <div className="max-1199:col-span-12 col-span-6 between-1200-1399:col-span-12 relative">
            <div className="relative flex items-end justify-end">
              <AnimatedDots data={false} ourVision={true} />
              <Image
                src={vision}
                width={0}
                height={0}
                alt="our-vision"
                loading="lazy"
                className="w-auto md:w-full between-1200-1399:w-[70%] h-auto"
              />
              {/* Triangle pattern - Using client component */}
              <div className="absolute bottom-[-10%] 2xl:bottom-[-15%] xl:left-[10%] 2xl:left-[20%] hidden lg:block rotate-180">
                <Image
                  height={0}
                  width={0}
                  loading="lazy"
                  src={trianglePattern}
                  alt="trianglePattern"
                  className="trianglePattern2 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our mission */}
      <section className="container commonMT">
        <div className="grid grid-cols-12 gap-y-10 md:gap-y-12 between-1200-1399:gap-y-24 xl:gap-28">
          <div className="max-1199:order-2 max-1199:col-span-12 col-span-6 between-1200-1399:col-span-12 relative">
            <div className="relative flex ">
              <AnimatedDots data={true} ourMission={true} />
              <Image
                src={mission}
                width={0}
                height={0}
                alt="our-mission"
                loading="lazy"
                className="w-auto md:w-full between-1200-1399:w-[70%] h-auto"
              />
              {/* Triangle pattern - Using client component */}
              <div className="absolute bottom-[-10%] 2xl:bottom-[-15%] xl:left-[10%] 2xl:left-[20%] hidden lg:block">
                <Image
                  height={0}
                  width={0}
                  loading="lazy"
                  src={trianglePattern}
                  alt="trianglePattern"
                  className="trianglePattern2 h-auto"
                />
              </div>
            </div>
          </div>

          <div className="max-1199:order-1 flexColCenter !items-start commonTextGap max-1199:col-span-12 between-1200-1399:col-span-12 col-span-6 w-full">
            <span className="sectionTag">
              Our <span>Mission</span>
            </span>
            <h3 className="sectionTitle">
              Bring Change With <span>Best Software</span> Solutions.
            </h3>
            <p className="sectionPara">
              We are on a mission to bring revolution in the way of making
              websites and applications, we make it possible with our easily
              customizable & error-free source codes.
            </p>
            <p className="sectionPara">
              We aim to help businesses enhance their virtual presence with our
              best software solutions, with a strong focus on client
              satisfaction and growth.
            </p>
          </div>
        </div>
      </section>

      {/* our values  */}
      <section className="commonBg">
        <div className="container commonMT">
          <div className="grid max-1199:grid-cols-1 between-1200-1399:grid-cols-1 grid-cols-2 py-8 md:py-20 lg:py-32 gap-12 md:gap-20">
            <div className="space-y-12">
              <div className="flexColCenter !items-start commonTextGap">
                <span className="sectionTag">
                  Our <span>Values</span>
                </span>
                <h4 className="sectionTitle lg:w-[85%]">
                  <span>Integrity</span> and <span>Creativity</span> Lead to
                  Success.
                </h4>
              </div>

              <div className="flexColCenter !items-start gap-4">
                {valuesListPoints.map((item: valuesList) => {
                  return (
                    <div
                      className="flex items-center gap-2 font-semibold textSecondary"
                      key={item.id}
                    >
                      <span>
                        <FaRegCircleCheck />{" "}
                      </span>
                      <span className="">{item.text}</span>
                    </div>
                  );
                })}
              </div>
              <div>
                <Link href={"/hire-us"} className="commonBtn">
                  Hire Us
                </Link>
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
                    className="trianglePattern2 h-auto"
                  />
                </div>

                {/* Dots pattern - Using client component */}
                <AnimatedDots data={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* work chain */}
      <WorkChain />

      {/* expert team  */}
      <Team />

      {/* testimonials  */}
      <ClientReviewSection />
    </Layout>
  );
};

export default AboutUs;
