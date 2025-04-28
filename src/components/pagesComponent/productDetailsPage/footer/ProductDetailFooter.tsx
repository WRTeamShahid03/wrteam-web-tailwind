'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../assets/images/logo.svg'
import codecanyon from '../../../../assets/images/productDetailPage/Codecanyon.png'
import envato from '../../../../assets/images/productDetailPage/Envato.svg'
import { HelpSection } from '@/types';


interface ProductDetailFooterProps {
  icon_image?: string;
  codecanyonLink: string;
  supportData: HelpSection
}

const ProductDetailFooter: React.FC<ProductDetailFooterProps> = ({ icon_image, codecanyonLink, supportData }) => {
  return (
    <footer className="productSecondaryBg text-white commonMT">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and marketplace section */}
          <div className="space-y-6">
            {icon_image ? (
              <Link href={codecanyonLink}>
                <Image
                  src={icon_image}
                  width={162}
                  height={46}
                  className='object-cover'
                  alt="WRTeam Logo"
                  unoptimized={true}
                  loader={({ src }) => src}
                />
              </Link>
            ) : (
              <Link href={'/'}>
                <Image
                  src={logo}
                  width={250}
                  height={100}
                  className='!w-[175px] md:!w-[200px] xl:!w-[250px] h-auto'
                  alt="WRTeam Logo"
                />
              </Link>
            )}
            <div className="flex flex-col gap-6">
              <Link href={codecanyonLink} title='codecanyonLink'>
                <Image src={codecanyon} height={0} width={0} alt='codecanyonImg' className='w-[164px] max-575:w-[130px] object-cover h-auto border border-[#6c757d] rounded-[8px]' />
              </Link>
              <Link href={'https://codecanyon.net/user/wrteam/portfolio'} title='portfolioLink'>
                <Image src={envato} height={0} width={0} alt='envatoImg' className='w-[164px] max-575:w-[130px] object-cover h-auto border border-[#6c757d] rounded-[8px]' />
              </Link>
            </div>
          </div>

          {/* Company section */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 w-max border-white">Company</h3>
            <ul className="space-y-4">
              <li><Link href={'/about-us'} title='About Us' className="hover:text-gray-300 transition">About Us</Link></li>
              <li><Link href={'/contact-us'} title='Contact Us' className="hover:text-gray-300 transition">Contact Us</Link></li>
              <li><Link href={'/privacy-policy'} title='Privacy Policy' className="hover:text-gray-300 transition">Privacy Policy</Link></li>
              <li><Link href={'/privacy-policy'} title='Service Policy' className="hover:text-gray-300 transition">Service Policy</Link></li>
            </ul>
          </div>

          {/* Help Center section */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 w-max border-white">Help Center</h3>
            <ul className="space-y-4">
              {
                supportData && supportData &&
                <li><Link href={supportData && supportData?.sections[0].link} className="hover:text-gray-300 transition">Support</Link></li>
              }
              {
                supportData && supportData &&
                <li><Link href={supportData && supportData?.sections[1].link} className="hover:text-gray-300 transition">Documents</Link></li>
              }
              <li><Link href={'/contact-us'} title='Contact Us' className="hover:text-gray-300 transition">Contact Us</Link></li>
              <li><Link href={'/hire-us'} title='Hire Us' className="hover:text-gray-300 transition">Hire Us</Link></li>
            </ul>
          </div>

          {/* Contact Info section */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 w-max border-white">Contact Info</h3>
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <Link href={'mailto:support@wrteam.in'} className="text-gray-400 font-medium">support@wrteam.in</Link>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-boldm">Contact Us</p>
                  <Link href={'tel:+91 97979 45459'} className="text-gray-400 font-medium">+91 97979 45459</Link>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Address</p>
                  <p className="text-gray-400 font-medium">
                    #262-263, Time Square Empire, SH 42 Mirjapar Highway, Bhuj - Kutch 370001 Gujarat India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="py-4 border-t borderColor">
        <div className="container text-center text-white font-medium text-sm">
          Copyright © {new Date().getFullYear()} WRTeam | Powered by WRTeam
        </div>
      </div>
    </footer>
  );
};

export default ProductDetailFooter;