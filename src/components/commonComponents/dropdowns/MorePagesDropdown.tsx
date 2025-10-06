'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6'


interface dataProps {
  morePagesDropdown: boolean,
  setMorePagesDropdown: (value: boolean) => void,
  isMobileNav?: boolean,
  showSaleStripe: boolean
} 

const MorePagesDropdown: React.FC<dataProps> = ({ morePagesDropdown, setMorePagesDropdown, isMobileNav, showSaleStripe }) => {

  const router = usePathname();
  
  const activeDrop = router === '/about-us' || router === '/career' || router === '/blogs' || router === '/contact-us'; 

  return (
    <div className="max-1199:relative">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setMorePagesDropdown(isMobileNav? !morePagesDropdown : true)}
        onMouseEnter={() => setMorePagesDropdown(isMobileNav? !morePagesDropdown : true)}
      >
        <span className={`flex items-center gap-1 relative transition-all duration-300 after:contents-[""] after:absolute between-1400-1680:after:-bottom-[36px] after:-bottom-[40px] max-1199:after:-bottom-2 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:bg-black font-medium ${activeDrop && 'after:!bg-black font-semibold'}`}>
          Company <FaAngleDown />
        </span>
      </div>

      {morePagesDropdown && (
        <div
          className={`absolute max-[350px]:w-[250px] max-1199:!top-[28px] ${showSaleStripe ? 'between-1400-1680:!top-[202px] between-1200-1399:!top-[202px] top-[210px]' : 'max-1680:top-[137px] top-[144px]'} bg-white rounded-b-2xl shadow-md z-50`}
          onMouseLeave={() => setMorePagesDropdown(false)}
        >
          <div className="flex flex-col p-4 gap-1">
            <DropdownLink href="/about-us" title="About Us" router={router} />
            <DropdownLink href="/career" title="Career" router={router} />
            <DropdownLink href="/blogs" title="Blogs" router={router} />
            <DropdownLink href="/contact-us" title="Contact Us" router={router} />
          </div>
        </div>
      )}
    </div>
  )
}

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

export default MorePagesDropdown
