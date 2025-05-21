"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import ServicesDropdown from "../commonComponents/dropdowns/ServicesDropdown";
import MorePagesDropdown from "../commonComponents/dropdowns/MorePagesDropdown";
import OurWorkDropdown from "../commonComponents/dropdowns/OurWorkDropdown";
import { FaAngleDown, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { LucidePhoneCall } from "lucide-react";
import { usePathname } from "next/navigation";
import webDev from '../../assets/images/serviceDropdown/Web Development.svg'
import appDev from '../../assets/images/serviceDropdown/App Development.svg'
import uiux from '../../assets/images/serviceDropdown/UX Design.svg'
import marketing from '../../assets/images/serviceDropdown/Digital Marketing.svg'
import customization from '../../assets/images/serviceDropdown/Customization.svg'
import installation from '../../assets/images/serviceDropdown/Installation.svg'
import Image from "next/image";
import developmentImg from '../../assets/images/homePage/development-portfolio.png'
import designImg from '../../assets/images/homePage/ui-ux-portfolio.png'

interface dataProps {
  servicesDropdown: boolean,
  setServicesDropdown: (value: boolean) => void,
  morePagesDropdown: boolean,
  setMorePagesDropdown: (value: boolean) => void,
  ourWorkDropdown: boolean,
  setOurWorkDropdown: (value: boolean) => void
}

const MobileNav: React.FC<dataProps> = ({ servicesDropdown, setServicesDropdown, morePagesDropdown, setMorePagesDropdown, ourWorkDropdown, setOurWorkDropdown }) => {
  const pathname = usePathname();

  const isMobileNav = true;

  const dropData = [
    {
      img: webDev,
      title: 'Web Development',
      desc: 'Building fast, scalable, and user-friendly websites.',
      link: '/services/web-development',
    },
    {
      img: appDev,
      title: 'App Development',
      desc: 'Creating seamless, high-performing mobile and web apps.',
      link: '/services/app-development',
    },
    {
      img: uiux,
      title: 'UI/UX Design',
      desc: 'Designing intuitive, engaging, and user-centric experiences.',
      link: '/services/ui-ux-design',
    },
    {
      img: marketing,
      title: 'Digital Marketing',
      desc: 'Boosting your brand with data-driven marketing strategies.',
      link: '/services/digital-marketing',
    },
    {
      img: customization,
      title: 'Customization',
      desc: 'Tailoring solutions to fit your unique business needs.',
      link: '/services/customization',
    },
    {
      img: installation,
      title: 'Installation',
      desc: 'Seamless setup and integration for your systems.',
      link: '/services/installation',
    },
  ]

  const active = pathname?.startsWith('/services');

  const activeDrop = pathname?.startsWith('/about-us') || pathname?.startsWith('/career') || pathname?.startsWith('/blogs') || pathname?.startsWith('/contact-us');


  const data = [
    {
      id: 1,
      img: developmentImg,
      title: 'Development Portfolio',
      subTitle: 'Built to Perform',
      desc: `Apps and websites built to perform—check out what we've created.`,
      link: '/our-work/development',
    },
    {
      id: 2,
      img: designImg,
      title: 'Design Portfolio',
      subTitle: 'Designs That Speak',
      desc: 'Clean, modern, and user-friendly—designs that make an impact.',
      link: '/our-work/design',
    },
  ];

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label="Open navigation menu"
            className="primaryBg block text-white p-1 rounded-sm"
          >
            <RxHamburgerMenu size={26} />
          </button>

        </SheetTrigger>
        <SheetContent className="overflow-y-scroll w-[90%]">
          <SheetTitle className="hidden"></SheetTitle>
          <div className="">
            <nav className="flex flex-col items-start gap-6 textPrimary font-semibold">
              <Link
                href={"/"}
                className={`relative transition-all duration-300 after:contents-[""] after:absolute after:-bottom-[36px] max-1199:after:-bottom-2 after:left-0 after:bg-transparent after:h-[3px] after:w-full font-medium hover:after:bg-black ${pathname === "/" && "after:!bg-black font-semibold"
                  }`}
              >
                Home
              </Link>
              <Link
                href={"/products"}
                className={`relative transition-all duration-300 after:contents-[""] after:absolute after:-bottom-[36px] max-1199:after:-bottom-2 after:left-0 after:bg-transparent after:h-[3px] after:w-full font-medium hover:after:bg-black ${pathname === "/products" && "after:!bg-black font-semibold"
                  }`}
              >
                Products
              </Link>

              {/* Services Dropdown */}
              <div className="max-1199:relative  w-max">
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => setServicesDropdown(isMobileNav ? !servicesDropdown : true)} onMouseEnter={() => setServicesDropdown(isMobileNav ? !servicesDropdown : true)}>
                  <span className={`flex items-center gap-1 relative transition-all duration-300 after:contents-[""] after:absolute between-1400-1680:after:-bottom-[36px] after:-bottom-[40px] max-1199:after:-bottom-2 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:bg-black font-medium ${active && 'after:!bg-black font-semibold'}`}>
                    Services <FaAngleDown />
                  </span>
                </div>

                {servicesDropdown && (
                  <div
                    className="max-1199:!top-[28px] max-1680:top-[137px] top-[144px] left-0 right-0 mx-auto bg-white rounded-b-2xl shadow-md max-399:w-[250px] max-1199:w-[350px] between-1200-1399:w-[1100px] w-[1320px] max-1199:p-3 p-6 z-50"
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <div className="flex flex-wrap">
                      {/* Core Services */}
                      <div className={`${isMobileNav ? 'w-full' : 'lg:w-2/3'} px-3`}>
                        <div className="w-max border-b-4 primaryBorder mb-4">
                          <span className="text-primary font-semibold max-1199:text-base text-xl">Core Services</span>
                        </div>
                        <div className="flex flex-wrap max-1199:gap-y-1 gap-y-6 max-1199:px-0 px-3 pb-0">
                          {dropData.slice(0, 4).map((data, index) => (
                            <div key={index} className={`${isMobileNav ? 'w-full' : 'lg:w-1/2'} max-1199:px-0 px-2`}>
                              <Link href={data.link} title={data.title}>
                                <div className="flex gap-3 max-1199:px-0 p-3 max-1199:pb-0 rounded-lg hover:bg-[#EFF2FA] transition-all text-[#181C24] max-1199:hover:bg-transparent group max-1199:items-center">
                                  <div className="bg-[#EFF2FA] group-hover:primaryBg max-1199:h-[40px] max-1199:w-[40px] h-[60px] w-[60px] max-1199:p-2 p-3 rounded-[10px] flex items-center justify-center transition-all">
                                    <Image src={data.img} alt="webDev-icon" height={0} width={0} className="h-full w-full group-hover:filter group-hover:invert" />
                                  </div>
                                  <div className="flex flex-col gap-[2px]">
                                    <span className="font-bold max-1199:text-sm">{data.title}</span>
                                    <p className="text-sm font-normal max-1199:hidden">{data.desc}</p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Product Configurations */}
                      <div className={`${isMobileNav ? 'w-full mt-6' : 'lg:w-1/3 border-l border-[#D8DEEF] max-1199:border-none max-1199:pl-0 pl-8'} max-1199:px-0 px-3`}>
                        <div className="w-max border-b-4 primaryBorder mb-4 mt-4 lg:mt-0">
                          <span className="text-primary font-semibold max-1199:text-base text-xl">Product Configurations</span>
                        </div>
                        <div className="flex flex-col max-1199:gap-y-1 gap-y-6 max-1199:px-0 px-3 pb-0">
                          {dropData.slice(4, 6).map((data, index) => (
                            <div key={index} className="w-full px-2">
                              <Link href={data.link} title={data.title}>
                                <div className="flex gap-3 max-1199:px-0 p-3 max-1199:pb-0 rounded-lg hover:bg-[#EFF2FA] transition-all text-[#181C24] max-1199:hover:bg-transparent group max-1199:items-center">
                                  <div className="bg-[#EFF2FA] group-hover:primaryBg max-1199:h-[40px] max-1199:w-[40px] h-[60px] w-[60px] max-1199:p-2 p-3 rounded-[10px] flex items-center justify-center transition-all">
                                    <Image src={data.img} alt="webDev-icon" height={0} width={0} className="h-full w-full group-hover:filter group-hover:invert" />
                                  </div>
                                  <div className="flex flex-col gap-[2px]">
                                    <span className="font-bold max-1199:text-sm">{data.title}</span>
                                    <p className="text-sm font-normal max-1199:hidden">{data.desc}</p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="max-1199:relative">
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => setOurWorkDropdown(isMobileNav ? !ourWorkDropdown : true)} onMouseEnter={() => setOurWorkDropdown(isMobileNav ? !ourWorkDropdown : true)}>
                  <span className={`flex items-center gap-1 relative transition-all duration-300 after:contents-[""] after:absolute between-1400-1680:after:-bottom-[36px] after:-bottom-[40px] max-1199:after:-bottom-2 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:bg-black font-medium ${active && 'after:!bg-black font-semibold'}`}> Our Work <FaAngleDown /></span>
                </div>

                {ourWorkDropdown && (
                  <div
                    className="max-1199:!top-[28px] max-1680:top-[137px] top-[144px] left-0 right-0 mx-auto bg-white rounded-b-2xl shadow-md max-399:w-[250px] max-1199:w-[350px] between-1200-1399:w-[900px] w-[1000px] max-1199:p-3 p-6 z-50 pt-0"
                    onMouseLeave={() => setOurWorkDropdown(false)}
                  >
                    <div className="flex gap-6 max-1199:flex-wrap">
                      {data.map((item, index) => (
                        <div key={index} className="w-full lg:w-1/2">
                          <div className="max-1199:p-0 p-5 rounded-xl h-full">
                            <span className="block max-1199:text-base text-xl font-semibold text-[#181C24] mb-3">{item.title}</span>
                            <div className="w-full h-[280px] mb-3 overflow-hidden rounded-lg">
                              <Image
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                              />
                            </div>
                            <span className="block textPrimary font-medium max-1199:text-sm text-base my-1">{item.subTitle}</span>
                            <p className="textSecondary font-normal text-sm mb-4">{item.desc}</p>
                            <Link
                              href={item.link}
                              title="View Case Studies"
                              className="inline-flex items-center max-1199:text-sm text-primary font-semibold border rounded-[8px] max-1199:px-2 max-1199:py-1 px-4 py-2 transition-all duration-300 hover:bg-black hover:text-white border-black"
                            >
                              View portfolio <FaArrowRight className="ml-2" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="max-1199:relative">
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => setMorePagesDropdown(isMobileNav ? !morePagesDropdown : true)}
                  onMouseEnter={() => setMorePagesDropdown(isMobileNav ? !morePagesDropdown : true)}
                >
                  <span className={`flex items-center gap-1 relative transition-all duration-300 after:contents-[""] after:absolute between-1400-1680:after:-bottom-[36px] after:-bottom-[40px] max-1199:after:-bottom-2 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:bg-black font-medium ${activeDrop && 'after:!bg-black font-semibold'}`}>
                    Company <FaAngleDown />
                  </span>
                </div>

                {morePagesDropdown && (
                  <div
                    className="max-[350px]:w-[250px] max-1199:!top-[28px] max-1680:top-[137px] top-[144px] bg-white rounded-b-2xl shadow-md z-50"
                    onMouseLeave={() => setMorePagesDropdown(false)}
                  >
                    <div className="flex flex-col p-4 gap-1">
                      <DropdownLink href="/about-us" title="About Us" router={pathname} />
                      <DropdownLink href="/career" title="Career" router={pathname} />
                      <DropdownLink href="/blogs" title="Blogs" router={pathname} />
                      <DropdownLink href="/contact-us" title="Contact Us" router={pathname} />
                    </div>
                  </div>
                )}
              </div>


              {/* <ServicesDropdown servicesDropdown={servicesDropdown} setServicesDropdown={setServicesDropdown} isMobileNav={true} /> */}
              {/* <MorePagesDropdown morePagesDropdown={morePagesDropdown} setMorePagesDropdown={setMorePagesDropdown} isMobileNav={true} /> */}
              {/* <OurWorkDropdown ourWorkDropdown={ourWorkDropdown} setOurWorkDropdown={setOurWorkDropdown} isMobileNav={true} /> */}
              <Link
                href={"/exclusive-license"}
                className={`relative transition-all duration-300 after:contents-[""] after:absolute after:-bottom-[36px] max-1199:after:-bottom-2 after:left-0 after:bg-transparent after:h-[3px] after:w-full font-medium hover:after:bg-black ${pathname === "/exclusive-license" &&
                  "after:!bg-black font-semibold"
                  }`}
              >
                Exclusive License
              </Link>
              <Link
                href={"/hire-us"}
                className="bg-[#181C24] text-white max-1680:py-2 max-1680:px-4 py-4 px-8 rounded-[8px] flexCenter gap-2"
              >
                <span>Hire Us</span>
                <FaArrowRight />
              </Link>
              <div className="flexCenter gap-2">
                <div className="flexCenter primaryBg text-white h-[48px] w-[48px] rounded-full">
                  <LucidePhoneCall />
                </div>
                <div className="flex flex-col font-semibold">
                  <span>24/7 Available</span>
                  <Link
                    href={"tel:+91 97979 45459"}
                    title="+91 97979 45459"
                    className="primaryColor"
                  >
                    {" "}
                    +91 97979 45459
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

const DropdownLink = ({ href, title, router }: { href: string; title: string, router: string }) => {
  const [hover, setHover] = useState(false)

  return (
    <Link
      href={href}
      title={title}
      className={`flex items-center justify-between px-4 py-3 w-[250px] rounded-lg font-semibold text-black transition-all duration-300 hover:bg-[#EFF2FA] ${router === href && 'bg-[#EFF2FA]'}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span>{title}</span>
      <FaAngleRight className={`${hover || router === href ? 'block' : 'hidden'} transition-all`} />
    </Link>
  )
}

export default MobileNav;
