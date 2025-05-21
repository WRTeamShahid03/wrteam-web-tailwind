'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import GetOfferModal from './GetOfferModal';

const CommonBtnComp = () => {

    const pathname = usePathname();

    const freeSourceCodePage = pathname === '/free-source-code';

    return (
        freeSourceCodePage ?
            <GetOfferModal />
            :
            <Link href={'https://1.envato.market/Y9Wg2B'} target='_blank' title='Yes I Want These Source Code'>
                <div className='flexColCenter gap-4 md:gap-4'>
                    <div className='flexColCenter gap-1 primaryBg rounded-sm shadow-[0_4px_70px_0_#316be880] p-[14px] md:p-[12px_40px]'>
                        <span className='font-semibold text-base sm:text-lg md:text-2xl'>Yes I Want These Source Code</span>
                        <span className='text-sm md:text-base'>(Star coding smarter, not harder)</span>
                    </div>
                    <span className=''>(20,000+ Happy Customers )</span>
                </div>
            </Link>
    )
}

export default CommonBtnComp
