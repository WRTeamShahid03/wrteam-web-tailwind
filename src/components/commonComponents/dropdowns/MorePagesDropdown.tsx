'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6'

const MorePagesDropdown = () => {

  const router = usePathname();
  const [showDrop, setShowDrop] = useState<boolean>(false)

  const activeDrop = router === '/about-us' || router === '/careers' || router === '/blogs';

  return (
    <div className="max-1199:relative">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setShowDrop(true)}
      >
        <span className={`flex items-center gap-1 relative transition-all duration-300 after:contents-[""] after:absolute after:-bottom-[36px] max-1199:after:-bottom-2 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:bg-black ${activeDrop && '!after:bg-black font-semibold'}`}>
          Company <FaAngleDown />
        </span>
      </div>

      {showDrop && (
        <div
          className="absolute max-[350px]:w-[250px] max-1199:!top-[28px] max-1680:!top-[96px] top-[104px] bg-white rounded-b-2xl shadow-md z-50"
          onMouseLeave={() => setShowDrop(false)}
        >
          <div className="flex flex-col p-4 gap-1">
            <DropdownLink href="/about-us" title="About Us" router={router}/>
            <DropdownLink href="/careers" title="Careers" router={router}/>
            <DropdownLink href="/blogs" title="Blogs" router={router}/>
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
      className={`flex items-center justify-between px-4 py-3 w-[250px] rounded-lg text-black transition-all duration-300 hover:bg-[#EFF2FA] ${router === href && 'bg-[#EFF2FA]'}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span>{title}</span>
      <FaAngleRight className={`${hover || router === href ? 'block' : 'hidden'} transition-all`} />
    </Link>
  )
}

export default MorePagesDropdown
