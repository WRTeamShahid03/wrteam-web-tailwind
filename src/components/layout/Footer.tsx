

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/images/footerLogo.svg'
import achiveIcon1 from '../../assets/images/footerLogos/achieveIcon1.svg'
import achiveIcon2 from '../../assets/images/footerLogos/achieveIcon2.svg'
import achiveIcon3 from '../../assets/images/footerLogos/achieveIcon3.svg'
import achiveIcon4 from '../../assets/images/footerLogos/achieveIcon4.svg'
import achiveIcon5 from '../../assets/images/footerLogos/achieveIcon5.svg'
import achiveIcon6 from '../../assets/images/footerLogos/achieveIcon6.svg'
import achiveIcon7 from '../../assets/images/footerLogos/achieveIcon7.svg'
import achiveIcon8 from '../../assets/images/footerLogos/achieveIcon8.svg'
import achiveIcon9 from '../../assets/images/footerLogos/achieveIcon9.svg'
import achiveIcon10 from '../../assets/images/footerLogos/achieveIcon10.svg'
import achiveIcon11 from '../../assets/images/footerLogos/achieveIcon11.svg'
import achiveIcon12 from '../../assets/images/footerLogos/achieveIcon12.svg'
import achiveIcon13 from '../../assets/images/footerLogos/achieveIcon13.svg'

import fiver from '../../assets/images/footerLogos/Fiverr.svg'
import clutch from '../../assets/images/footerLogos/Clutch.svg'
import trustpilot from '../../assets/images/footerLogos/Trustpilo.svg'
import upwork from '../../assets/images/footerLogos/Upwork.svg'

import { FaStar } from "react-icons/fa";
import FeedbackDialog from '../commonComponents/FeedbackDialog';
import { FaAngleRight } from "react-icons/fa";

const NewFooter = () => {

  const achiveIcons = [
    {
      icon: achiveIcon1,
    },
    {
      icon: achiveIcon2,
    },
    {
      icon: achiveIcon3,
    },
    {
      icon: achiveIcon4,
    },
    {
      icon: achiveIcon5,
    },
    {
      icon: achiveIcon6,
    },
    {
      icon: achiveIcon7,
    },
    {
      icon: achiveIcon8,
    },
    {
      icon: achiveIcon9,
    },
    {
      icon: achiveIcon10,
    },
    {
      icon: achiveIcon11,
    },
    {
      icon: achiveIcon12,
    },
    {
      icon: achiveIcon13,
    },
  ];

  return (
    <footer className="bg-[#181c24] text-white relative z-[2]">
      {/* Main footer content */}
      <div className="max-1680:container 2xl:max-w-[1620px] mx-auto pt-12 grid grid-cols-12 gap-y-12">
        {/* Left section - Logo and description */}
        <div className="space-y-8 col-span-12 sm:col-span-7 sm:border-r border-[#ffffff3d]">
          <div className="logo">
            <Link href="/" title='WRTeam Logo'>
              <Image src={logo} alt="WRTeam Logo" width={150} height={50} className="mb-4" />
            </Link>
          </div>

          <p className="text-gray-300 max-w-lg">
            WRTeam has a creative and dedicated group of developers who are masters in app development and Web
            development with a nice to deliver quality solutions to customers across the globe.
          </p>

          {/* Footer links - 3 columns on small screens, 3 columns within grid on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 pr-6">
            {/* Column 1 - Company */}
            <div>
              <h3 className="text-white font-medium text-lg mb-4 bg-[#2a2e35] py-2 px-4 rounded-md">Company</h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/about-us" className="hover:text-white transition-all flex justify-between items-center group duration-300" title='About Us'>About Us
                <FaAngleRight className='opacity-0 group-hover:opacity-100 transition-all duration-300'/>
                </Link></li>
                <li><Link href="/career" className="hover:text-white transition-all flex justify-between items-center group duration-300" title='Careers'>Careers
                <FaAngleRight className='opacity-0 group-hover:opacity-100 transition-all duration-300'/>
                </Link></li>
                <li><Link href="/blogs" className="hover:text-white transition-all flex justify-between items-center group duration-300" title='Blogs'>Blogs
                <FaAngleRight className='opacity-0 group-hover:opacity-100 transition-all duration-300'/>
                </Link></li>
                <li><Link href="/contact-us" className="hover:text-white transition-all flex justify-between items-center group duration-300" title='Contact Us'>Contact Us
                <FaAngleRight className='opacity-0 group-hover:opacity-100 transition-all duration-300'/>
                </Link></li>
                <li><Link href="/exclusive-license" className="hover:text-white transition-all flex justify-between items-center group duration-300" title='Exclusive License'>Exclusive License
                <FaAngleRight className='opacity-0 group-hover:opacity-100 transition-all duration-300'/>
                </Link></li>
              </ul>
            </div>

            {/* Column 2 - Our Services */}
            <div>
              <h3 className="text-white font-medium text-lg mb-4 bg-[#2a2e35] py-2 px-4 rounded-md">Our Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/services/web-development" title='Web Development' className="hover:text-white transition-all flex justify-between items-center group duration-300">Web Development
                <FaAngleRight className='opacity-0 group-hover:opacity-100 transition-all duration-300'/>
                </Link></li>
                <li><Link href="/services/app-development" title='App Development' className="hover:text-white transition-all flex justify-between items-center group duration-300">App Development
                <FaAngleRight className='opacity-0 group-hover:opacity-100 transition-all duration-300'/>
                </Link></li>
                <li><Link href="/services/ui-ux-design" title='UI / UX Design' className="hover:text-white transition-all flex justify-between items-center group duration-300">UI / UX Design
                <FaAngleRight className='opacity-0 group-hover:opacity-100 transition-all duration-300'/>
                </Link></li>
                <li><Link href="/services/digital-marketing" title='Digital Marketing' className="hover:text-white transition-all flex justify-between items-center group duration-300">Digital Marketing
                <FaAngleRight className='opacity-0 group-hover:opacity-100 transition-all duration-300'/>
                </Link></li>
                <li><Link href="/services/customization" title='Customization' className="hover:text-white transition-all flex justify-between items-center group duration-300">Customization
                <FaAngleRight className='opacity-0 group-hover:opacity-100 transition-all duration-300'/>
                </Link></li>
                <li><Link href="/services/installation" title='Installation' className="hover:text-white transition-all flex justify-between items-center group duration-300">Installation
                <FaAngleRight className='opacity-0 group-hover:opacity-100 transition-all duration-300'/>
                </Link></li>
              </ul>
            </div>

            {/* Column 3 - Our Work */}
            <div>
              <h3 className="text-white font-medium text-lg mb-4 bg-[#2a2e35] py-2 px-4 rounded-md">Our Work</h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/our-work/development" className="hover:text-white transition-all flex justify-between items-center group duration-300" title='Development'>Development
                <FaAngleRight className='opacity-0 group-hover:opacity-100 transition-all duration-300'/>
                </Link></li>
                <li><Link href="/our-work/design" className="hover:text-white transition-all flex justify-between items-center group duration-300" title='Design'>Design
                <FaAngleRight className='opacity-0 group-hover:opacity-100 transition-all duration-300'/>
                </Link></li>
              </ul>
            </div>
          </div>

          {/* CodeCanyon Achievements - Desktop Only */}
          <div className="container px-4 py-12 hidden lg:block border-t border-[#ffffff3d] pr-6">
            <div className="flex justify-between items-center gap-4">
              <div>
                <h3 className="text-white font-medium mb-2">CodeCanyon Achievements</h3>
                <p className="text-gray-300 max-w-lg text-sm">
                  Proudly recognized with elite badges on CodeCanyon, showcasing our expertise and commitment to quality!
                </p>
              </div>
              <div className="flexCenter gap-4 flex-wrap !justify-start bg-[#2A2E35] rounded-[8px] p-4">
                {achiveIcons.map((item, i) => (
                  <div key={i}>
                    <Image src={item.icon} height={32} width={32} alt='icons' />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Right section - Contact, Feedback, and Trust badges */}
        <div className="space-y-8 col-span-12 sm:col-span-5">
          {/* Connect with Us */}
          <div className='border-b border-[#ffffff3d] pb-9'>
            <h3 className="text-white font-medium text-lg mb-9 border-b border-[#ffffff3d] sm:pl-6 pb-3">Connect with Us</h3>

            {/* Phone */}
            <div className="flex items-start space-x-4 mb-6 sm:pl-6">
              <div className="bg-[#2a2e35] p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <Link href={'tel:+91 97979 45459'} className="text-gray-300">+91 97979 45459</Link>
              </div>
            </div>

            {/* Mail */}
            <div className="flex items-start space-x-4 mb-6 sm:pl-6">
              <div className="bg-[#2a2e35] p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Mail Us</h4>
                <Link href={'mailto:support@wrteam.in'} className="text-gray-300">Support@wrteam.in</Link>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4 sm:pl-6">
              <div className="bg-[#2a2e35] p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Find Us Here</h4>
                <p className="text-gray-300">
                  #262-263, Time Square Empire, SH 42 Mirjapar Highway, Bhuj - Kutch 370001 Gujarat India.
                </p>
              </div>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="border-b border-[#ffffff3d] sm:pl-6 pb-[39px] flex items-center gap-[12px_50px] flex-wrap">
            <div>
              <h3 className="text-white font-medium text-lg mb-2">We Value Your Feedback</h3>
              <p className="text-gray-300 text-sm">
                Share your thoughts with us to help improve your experience!
              </p>
            </div>
            <FeedbackDialog />
          </div>

          {/* Trust Badges */}
          <div className='sm:pl-6 between-1200-1399:!mt-6 !mt-16 pb-6'>
            <h3 className="text-white font-medium mb-4">Hire & Trust - Available on Top Platforms with Verified Reviews</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <Link href={process.env.NEXT_PUBLIC_FIVER!} title='Fiver' target='_blank'>
                <div className='bg-[#2a2e35] rounded-[12px] p-3'>
                  <Image src={fiver} width={80} height={24} alt='fiverr' />
                </div>
              </Link>

              <Link href={process.env.NEXT_PUBLIC_UPWORK!} title='Upwork' target='_blank'>
                <div className='bg-[#2a2e35] rounded-[12px] p-3'>
                  <Image src={upwork} alt="Upwork" width={80} height={24} />
                </div>
              </Link>

              <Link href={process.env.NEXT_PUBLIC_CLUTCH!} title='Clutch' target='_blank'>
                <div className="flex items-center bg-[#2a2e35] rounded-[12px] p-3 gap-1">
                  <div className='flex items-center gap-2 border-r pr-2 border-[#ffffff3d]'>
                    <FaStar color='#f38844' />
                    <span className="font-bold"> 5.0</span>
                  </div>
                  <Image src={clutch} alt="Clutch" width={80} height={24} className='pl-1' />
                </div>
              </Link>

              <Link href={process.env.NEXT_PUBLIC_TRUSHTPILOT!} title='Trushtpilot' target='_blank'>
                <div className="flex items-center bg-[#2a2e35] rounded-[12px] p-3 gap-1">
                  <div className='flex items-center gap-2 border-r pr-2 border-[#ffffff3d]'>
                    <FaStar color='#f38844' />
                    <span className="font-bold">4.2</span>
                  </div>
                  <Image src={trustpilot} alt="Trustpilot" width={98} height={24} className='pl-1' />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Copyright bar */}
      <div className="bg-[#171B26] border-t border-[#ffffff3d] py-4 text-[14px]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-y-2 text-sm sm:text-base">
          <div>
            Copyright © {new Date().getFullYear()} All Rights Reserved & Designed by 💕 <Link href="https://wrteam.in" title='WRTeam' className="primaryColor">WRTeam</Link>.
          </div>
          <div className="flex mt-4 md:mt-0 flex-wrap gap-2 between-1200-1399:gap-1">
            <Link href="/terms-of-use" title='Terms of use'>Terms of use</Link>
            <span>|</span>
            <Link href="/privacy-policy" title='Privacy Policies'>Privacy Policies</Link>
            <span>|</span>
            <Link href="/copyright-and-disclaimer" title='Copyright & Disclaimer'>Copyright & Disclaimer</Link>
            <span>|</span>
            <Link href="/refund-policy" title='Refund Policy'>Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter; 