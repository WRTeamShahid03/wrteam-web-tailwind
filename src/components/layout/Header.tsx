'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../assets/images/logo.svg'
import Link from 'next/link'
import MobileNav from './MobileNav'
import ServicesDropdown from '../commonComponents/dropdowns/ServicesDropdown'
import MorePagesDropdown from '../commonComponents/dropdowns/MorePagesDropdown'

const Header = () => {
  return (
    <header className='py-7 fixed top-0 w-full z-[10] bg-white'>
      <div className="container">
        <div className='flex items-center justify-between'>
          <div>
            <Image src={logo} width={0} height={0} className='w-[175px] md:w-[200px] xl:w-auto h-auto' alt='' />
          </div>
          <div className='hidden lg:block'>
            <ul className='flex items-center lg:gap-6 xl:gap-12 textPrimary'>
              <Link href={'/'} className='relative transition-all duration-300 hover:primaryColor after:contents-[""] after:absolute after:-bottom-1 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:primaryBg'>
                Home
              </Link>
              <Link href={'/products'} className='relative transition-all duration-300 hover:primaryColor after:contents-[""] after:absolute after:-bottom-1 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:primaryBg'>
                Products
              </Link>
              <ServicesDropdown />
              <Link href={'/portfolio'} className='relative transition-all duration-300 hover:primaryColor after:contents-[""] after:absolute after:-bottom-1 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:primaryBg'>
                Portfolio
              </Link>
              <Link href={'/about-us'} className='relative transition-all duration-300 hover:primaryColor after:contents-[""] after:absolute after:-bottom-1 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:primaryBg'>
                About Us
              </Link>
              <MorePagesDropdown />
              <Link href={'/hire-us'} className='commonBtn'>
                Hire Us
              </Link>
            </ul>
          </div>

          <div className='block lg:hidden'>
            <MobileNav />
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header