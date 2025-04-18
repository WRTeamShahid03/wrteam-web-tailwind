import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductDetailFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and marketplace section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-teal-400">e</span>
              <span className="text-2xl font-bold">Classify</span>
            </div>
            <div className="space-y-4">
              <Link href="#" className="inline-block bg-white text-black px-4 py-2 rounded">
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.9995 24C5.3765 24 0 18.6235 0 12.0005C0 5.3775 5.3765 0 11.9995 0C18.6235 0 24 5.3775 24 12.0005C24 18.6235 18.6235 24 11.9995 24Z" />
                    </svg>
                  </span>
                  <span className="font-bold">codecanyon</span>
                </div>
              </Link>
              <Link href="#" className="inline-block bg-white text-black px-4 py-2 rounded">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 3h18v18H3z" />
                    </svg>
                  </span>
                  <span className="font-bold">envato</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Company section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-gray-300 transition">About Us</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Service Policy</Link></li>
            </ul>
          </div>

          {/* Help Center section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Help Center</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-gray-300 transition">Support</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Documents</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Hire Us</Link></li>
            </ul>
          </div>

          {/* Contact Info section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-sm">Email</p>
                  <p className="text-gray-400">support@wrteam.in</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm">Contact Us</p>
                  <p className="text-gray-400">+91 97979 45459</p>
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
                  <p className="text-sm">Address</p>
                  <p className="text-gray-400">
                    #262-263, Time Square Empire, SH 42 Mirjapar Highway, Bhuj - Kutch 370001 Gujarat India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright section */}
      <div className="py-4 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          Copyright © 2025 WRTeam | Powered by WRTeam
        </div>
      </div>
    </footer>
  );
};

export default ProductDetailFooter;