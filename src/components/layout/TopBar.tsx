'use client'
import React from 'react'
import Link from 'next/link'
import { LuPhoneCall } from 'react-icons/lu'
import { GrLocation } from 'react-icons/gr'
import { BsFacebook, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

const TopBar:React.FC = () => {
  return (
    <div className="bg-[#181C24] text-white lg:block hidden">
      <div className="max-1680:container 2xl:max-w-[1620px] mx-auto">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 pr-3 border-r border-[#4C5B79]">
              <LuPhoneCall className="hover:primaryColor transition-all" />
              <span>
                Mail Us:{' '}
                <Link href="mailto:support@wrteam.in" className="text-white hover:underline">
                  support@wrteam.in
                </Link>
              </span>
            </div>
            <div className="flex items-center gap-1">
              <GrLocation className="hover:primaryColor transition-all" />
              <span>
                Address: #262-263, Time Square Empire, Bhuj - Kutch
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              title="Facebook"
              href={process.env.NEXT_PUBLIC_FACEBOOK || '#'}
              className="hover:primaryColor transition-all"
            >
              <BsFacebook size={20} />
            </Link>
            <Link
              target="_blank"
              title="Instagram"
              href={process.env.NEXT_PUBLIC_INSTAGRAM || '#'}
              className="hover:primaryColor transition-all"
            >
              <AiFillInstagram size={24} />
            </Link>
            <Link
              target="_blank"
              title="Linkedin"
              href={process.env.NEXT_PUBLIC_LINKEDIN || '#'}
              className="hover:primaryColor transition-all"
            >
              <BsLinkedin size={20} />
            </Link>
            <Link
              target="_blank"
              title="Youtube"
              href={process.env.NEXT_PUBLIC_YOUTUBE || '#'}
              className="hover:primaryColor transition-all"
            >
              <BsYoutube size={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
