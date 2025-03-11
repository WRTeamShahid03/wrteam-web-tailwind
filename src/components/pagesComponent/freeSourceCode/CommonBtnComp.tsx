'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const CommonBtnComp = () => {

    const pathname = usePathname();

    const freeSourceCodePage = pathname === '/free-source-code';

    return (
        <div className='flexColCenter gap-4 md:gap-4'>
            <div className='flexColCenter gap-1 md:gap-4 primaryBg rounded-sm shadow-[0_4px_70px_0_#316be880] p-[14px] md:p-[12px_40px]'>
                {
                    freeSourceCodePage ?
                        <span className='font-semibold text-base sm:text-lg md:text-2xl'>Get My Free Code Now!</span> 
                        :
                        <span className='font-semibold text-base sm:text-lg md:text-2xl'>Yes I Want These Source Code</span>
                }
                <span className='text-sm md:text-base'>(Star coding smarter, not harder)</span>
            </div>
            <span className=''>(17,000+ Happy Customers )</span>
        </div>
    )
}

export default CommonBtnComp
