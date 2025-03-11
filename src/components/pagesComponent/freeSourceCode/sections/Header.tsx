import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/footerLogo.svg'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='container p-5 md:p-10 flexCenter'>
            <Link href={'/'}>
            <Image src={logo} height={0} width={0} alt='logo' className='w-[200px] md:w-[250px] h-auto'/>
            </Link>
        </div>
    )
}

export default Header
