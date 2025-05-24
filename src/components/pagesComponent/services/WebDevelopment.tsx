"use client";
import Breadcrumb from "@/components/commonComponents/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import React from "react";
import webDev from "../../../assets/images/services/web-development/Web Devlopment.webp";

// swiper Imgs
import frontendImg from "../../../assets/images/services/web-development/10-19- Front_end_Devlopment Service.webp";
import backendImg from "../../../assets/images/services/web-development/10-19- Back_end_Devlopment Service.webp";
import fullStactImg from "../../../assets/images/services/web-development/10-19- full_stak_Devlopment Service.webp";
import completeSolution from "../../../assets/images/services/web-development/10-19-Complete Solution Service.webp";

import timelyUpdadtes from "../../../assets/images/services/icons/Benefits/Timely Updates-.png";
import quality from "../../../assets/images/services/icons/Benefits/Testing & Quality Assurance.png";
import support from "../../../assets/images/services/icons/Benefits/Ongoing Support.png";
import eliteAuthor from "../../../assets/images/services/icons/Benefits/EliteAuthorCodecanyon.png";
import { servicesBenefitsDataTypes, servicesBuildDataTypes } from "@/types";

import ProcessSect from "./ProcessSect";
import processImg from "../../../assets/images/services/web-development/Our Work Process Devlopment.webp";
import processImg2 from "../../../assets/images/services/web-development/Our Work Process_Devlopment.webp";
import processIcon1 from "../../../assets/images/services/icons/Process/Development.png";
import processIcon2 from "../../../assets/images/services/icons/Process/Maintenance & Support.png";
import processIcon3 from "../../../assets/images/services/icons/Process/Design & Planning.png";
import processIcon4 from "../../../assets/images/services/icons/Process/Analysis of Demands.png";
import processIcon5 from "../../../assets/images/services/icons/Process/Testing & Quality Assurance.png";
import processIcon6 from "../../../assets/images/services/icons/Process/Deployment.png";
import arrowImg from "../../../assets/images/services/ArrowLeftDown.svg";

import buildBg from "../../../assets/images/contactFormBg.webp";
import laravel from "../../../assets/images/services/web-development/icon/Laravel.png";
import laravelHover from "../../../assets/images/services/web-development/icon/Laravel_Hover.png";
import php from "../../../assets/images/services/web-development/icon/php.png";
import phpHover from "../../../assets/images/services/web-development/icon/php_Hover.png";
import codeignitor from "../../../assets/images/services/web-development/icon/codeigniter.png";
import codeignitorHover from "../../../assets/images/services/web-development/icon/codeigniter_Hover.png";
import vueJs from "../../../assets/images/services/web-development/icon/Vue.js.png";
import vueJsHover from "../../../assets/images/services/web-development/icon/Vue.js_Hover.png";
import nextJs from "../../../assets/images/services/web-development/icon/nextjs.png";
import nextJsHover from "../../../assets/images/services/web-development/icon/nextjs_Hover.png";
import reactJs from "../../../assets/images/services/web-development/icon/React.png";
import reactJsHover from "../../../assets/images/services/web-development/icon/React_Hover.png";
import ServicesSwiper from "./ServicesSwiper";

const WebDevelopment: React.FC = () => {
  const newSwiperData = [
    {
      id: 0,
      img: frontendImg,
      title: "Front-end web development",
      desc: "Our experts focus on front-end development creating flexible layouts, interactive interfaces, and seamless user experiences. Our websites and apps have the latest technologies and are optimized across platforms to make them work on all your devices.",
      alt: "front hand service for your website with experts of the best it company WRTeam",
    },
    {
      id: 1,
      img: backendImg,
      title: "Back-end web development",
      desc: "Our backend web development team builds strong, scalable server applications to support website functions. We use technologies like JavaScript, PHP, Codiginator, and Laravel to create secure and efficient backend solutions for your business needs.",
      alt: "back  hand service for your website with experts of the best it company WRTeam",
    },
    {
      id: 2,
      img: fullStactImg,
      title: "Full-stack web development",
      desc: "WRTeam offers full-stack web development services that combine the best of front-end and back-end development. Our full-stack developers can handle everything needed to create a website. They design attractive, user-friendly interfaces and manage the complex code that makes the website run smoothly. They ensure all parts of the website work together seamlessly, providing a high-quality product.",
      alt: "front  hand - backhand - full stack development with the best it web web developers",
    },
    {
      id: 3,
      img: completeSolution,
      title: "Customization",
      desc: "Not only web development we also offer customization in source codes by WRTeam making it tailored to your needs, & our web development experts can also customize your existing website to make it personalized for your requirements and ensure a unique, userfriendly, & visually appealing online presence.",
      alt: "get complete every digital solutions  with the best web development company WRTeam",
    },
  ];

  const benefitsCardData = [
    {
      id: 0,
      icon: timelyUpdadtes,
      title: "Timely Updates",
    },
    {
      id: 1,
      icon: quality,
      title: "Testing & Quality Assurance",
    },
    {
      id: 2,
      icon: support,
      title: "Ongoing Support",
    },
    {
      id: 3,
      icon: eliteAuthor,
      title: "Elite Author on Codecanyon",
    },
  ];

  const processCardData = [
    {
      id: 0,
      icon: processIcon1,
      title: "Analysis of Demands",
      desc: "Our process of web development starts with in-depth analyses of your business and requirements.",
      img: processIcon1,
    },
    {
      id: 1,
      icon: processIcon2,
      title: "Design & Planning",
      desc: "We design a futuristic stunning website with a user-friendly interface that fulfills all your requirements.",
      img: processIcon2,
    },
    {
      id: 2,
      icon: processIcon3,
      title: "Development",
      desc: "Our experts develop an innovative website that aligns with all your requirements and provides timely updates on the projects.",
      img: processIcon3,
    },
    {
      id: 3,
      icon: processIcon4,
      title: "Testing & Quality Assurance",
      desc: `Once the work of web development is done, we ensure that it's working seamlessly without any errors on all platforms.`,
      img: processIcon4,
    },
    {
      id: 4,
      icon: processIcon5,
      title: "Deployment",
      desc: "Once the website is fully ready, we deploy it to the real environment that allows users to access it across the world.",
      img: processIcon5,
    },
    {
      id: 5,
      icon: processIcon6,
      title: "Maintenance & Support",
      desc: `We not only deploy the website but also ensure that your website remains up-to-date and fully operational. We believe in making long-term connections.`,
      img: processIcon6,
    },
  ];

  const buildCardData = [
    {
      id: 0,
      icon: laravel,
      hoverIcon: laravelHover,
      title: "Laravel",
      alt: `work with Laravel Technology's experts  with the best web-app development company WRTeam bhuj`,
    },
    {
      id: 1,
      icon: php,
      hoverIcon: phpHover,
      title: "Php",
      alt: `work with PHP Technology's experts  with the best web-app development company WRTeam bhuj`,
    },
    {
      id: 2,
      icon: codeignitor,
      hoverIcon: codeignitorHover,
      title: "CodeIgniter",
      alt: `work with codiginatorr Technology's experts  with the best web-app development company WRTeam bhuj`,
    },
    {
      id: 3,
      icon: vueJs,
      hoverIcon: vueJsHover,
      title: "VueJS",
      alt: `work with vue.js Technology's experts  with the best web-app development company WRTeam bhuj`,
    },
    {
      id: 4,
      icon: nextJs,
      hoverIcon: nextJsHover,
      title: "NextJS",
      alt: `work with next.js Technology experts  with the best web-app development company WRTeam bhuj`,
    },
    {
      id: 5,
      icon: reactJs,
      hoverIcon: reactJsHover,
      title: "ReactJS",
      alt: `work with react.js Technology experts  with the best web-app development company WRTeam bhuj`,
    },
  ];

  return (
    <Layout>
      <Breadcrumb
        title="Web"
        blueText="Development"
        secondElement="Services"
        thirdElement="Web Development"
      />
      <section className="container commonMT">
        <div className="grid max-1199:grid-cols-1 grid-cols-2 gap-8">
          <div className="flexColCenter !items-start commonTextGap">
            <span className="sectionTag">
              Web <span>Development</span>
            </span>
            <h2 className="sectionTitle">
              Avail Web Development Services and Build{" "}
              <span>Stunning Websites</span> with the{" "}
              <span>Best IT Company</span> Personalized for Your Business.
            </h2>
            <p className="sectionPara">
              With over 7 years of experience, we create personalized business
              websites for E-commerce, Restaurants, Real Estate, Trivia games,
              and more. We aim to deliver fully functional, stunning websites
              with modern, user-friendly UI/UX.
            </p>
          </div>

          <div className="flexCenter">
            <div className='flexCenter relative before:contents-[""] before:absolute before:top-[6px] before:left-0 before:right-0 before:bottom-0 before:m-auto before:w-[86%] before:h-[96%] before:primaryBg before:-z-[1] before:rotate-[185deg] before:rounded-[16px]'>
              <Image
                src={webDev}
                height={0}
                width={0}
                loading="lazy"
                alt="best web development company for startups, businesses,hotel,etc."
                className="w-[85%] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* swiper  */}
      <section className="commonBg pt-8 pb-12 md:pt-16 md:pb-24 commonMT">
        <div className="container space-y-10">
          <div className="flexColCenter commonTextGap">
            <span className="sectionTag">
              <span>What</span> We Can Do <span>For You</span>
            </span>
            <h3 className="sectionTitle">
              Services <span>We Can Help </span>You With
            </h3>
          </div>
          <ServicesSwiper data={newSwiperData} />
        </div>
      </section>

      {/* benefits */}
      <section className="container commonMT space-y-12">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="flexColCenter !items-start commonTextGap">
            <span className="sectionTag">
              Extensive <span>Benefits</span>
            </span>
            <h4 className="sectionTitle">
              Unleashing the Potential of the Best <span>Web Development</span>{" "}
              Company
            </h4>
          </div>
          <div className="flexCenter">
            <p className="sectionPara">
              Discover unparalleled benefits with the top web development
              company. We are committed to delivering innovative & efficient
              websites to elevate your online success.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {benefitsCardData.map((item: servicesBenefitsDataTypes) => {
            return (
              <div
                className="flexColCenter !items-start gap-7 border-[2px] border-[#545A684D] rounded-[16px] p-5 group transition-all duration-300 hover:bg-white hover:shadow-[-16px_16px_46px_#2830421F] hover:border-transparent"
                key={item.id}
              >
                <div className="flexCenter primaryBg w-[60px] md:w-[74px] h-[56px] md:h-[74px] rounded-md shadow-[0px_8px_26px_#176BF15C]">
                  <Image
                    src={item.icon}
                    height={0}
                    width={0}
                    loading="lazy"
                    alt={item.title}
                    className="w-[30px] md:w-[40px] h-auto"
                  />
                </div>
                <p className="font-bold text-lg">{item.title}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* process  */}
      <section className="container commonMT space-y-16">
        <ProcessSect
          data={processCardData.slice(0, 3)}
          isReverse={false}
          sectionTitle="How Does Our Web Development Team Create a Website?"
          blueText="Web Development"
          sectionImg={processImg}
          alt="work in progress with the best web-app development company WRTeam bhuj"
        />
        <div className="container max-1199:hidden">
          <Image
            src={arrowImg}
            height={0}
            width={0}
            loading="lazy"
            alt="arrowDown"
            className="w-[58%] 2xl:w-[62%] -mt-[40px] -mb-[40px] 2xl:-mb-[80px] mx-[-18px] 2xl:mx-[-60px] h-auto"
          />
        </div>
        <ProcessSect
          data={processCardData.slice(3, processCardData.length)}
          isReverse={true}
          sectionTitle=""
          blueText=""
          sectionImg={processImg2}
          alt="work will never be on hold- with the best web-app development company WRTeam bhuj"
        />
      </section>

      {/* build  */}
      <section className="commonMT">
        <div
          className="h-[400px] relative -z-[1]"
          style={{
            background: `rgb(2 0 16 / 61%) url(${buildBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "darken",
          }}
        >
          <div className="primaryBg relative z-[2] h-full w-full opacity-[0.5]"></div>
        </div>
        <div className="container max-1199:-mt-[350px] -mt-[250px]">
          <div className="bg-white shadow-[0px_0px_46px_#2830421F] relative z-[2] py-4 md:py-8 lg:py-12 rounded-[16px] overflow-hidden">
            <div className="grid grid-cols-12 gap-y-4">
              <div className="max-1199:col-span-12 col-span-5 flexColCenter !items-start commonTextGap border-r p-4 md:p-12">
                <span className="sectionTag">
                  <span>We</span> Build
                </span>
                <h6 className="sectionTitle">
                  We <span>Build</span> Dynamic Solutions with Leading{" "}
                  <span>Web Development</span> Platforms
                </h6>
                <p className="sectionPara">
                  Harness the power of advanced technology and next-level web
                  development for an online presence that captivates attention!
                </p>
              </div>
              <div className="max-1199:col-span-12 col-span-7 !p-[0px_25px] md:max-1199:!p-[0px_65px] lg:!p-[85px]">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                  {buildCardData.map((item: servicesBuildDataTypes) => {
                    return (
                      <div
                        className="flexColCenter gap-4 group transition-all duration-300"
                        key={item.id}
                      >
                        <div className="commonBg rounded-md h-[90px] w-[90px] flexCenter group-hover:primaryBg transition-all duration-300">
                          <Image
                            src={item.hoverIcon}
                            height={0}
                            width={0}
                            loading="lazy"
                            alt={item.alt}
                            className="w-[55px] h-auto group-hover:hidden block transition-all duration-300"
                          />
                          <Image
                            src={item.icon}
                            height={0}
                            width={0}
                            loading="lazy"
                            alt={item.alt}
                            className="w-[55px] h-auto group-hover:block hidden transition-all duration-300"
                          />
                        </div>
                        <span className="font-semibold md:text-lg">
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebDevelopment;
