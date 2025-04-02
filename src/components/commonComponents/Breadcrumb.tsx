import Link from 'next/link'
import React from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'

interface BreadcrumbProps {
    title?: string,
    blueText?: string,
    secondElement?: string,
    thirdElement?: string,
    fourthElement?: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, blueText, secondElement, thirdElement, fourthElement }) => {

    return (
        <div className='flex items-center gap-2 commonBg pt-[30px] md:pt-[60px] pb-8 md:pb-12 relative overflow-hidden'>
            <div className='line1 breadcrumbLine hidden lg:block after:contents-[""] after:absolute after:w-[2px] after:h-full after:left-36 after:top-0 after:bg-[#80808024]
            before:contents-[""] before:absolute before:w-[2px] before:h-14 before:left-36 before:top-12 before:primaryBg
            '></div>
            <div className='line2 breadcrumbLine hidden lg:block after:contents-[""] after:absolute after:w-[2px] after:h-full after:left-[30%] after:top-0 after:bg-[#80808024]
            before:contents-[""] before:absolute before:w-[2px] before:h-14 before:left-[30%] before:top-12 before:primaryBg
            '></div>
            <div className='line3 breadcrumbLine hidden lg:block after:contents-[""] after:absolute after:w-[2px] after:h-full after:right-[50%] after:top-0 after:bg-[#80808024]
            before:contents-[""] before:absolute before:w-[2px] before:h-14 before:right-[50%] before:top-12 before:primaryBg
            '></div>
            <div className='line4 breadcrumbLine hidden lg:block after:contents-[""] after:absolute after:w-[2px] after:h-full after:right-[30%] after:top-0 after:bg-[#80808024]
            before:contents-[""] before:absolute before:w-[2px] before:h-14 before:right-[30%] before:top-12 before:primaryBg
            '></div>
            <div className='line5 breadcrumbLine hidden lg:block after:contents-[""] after:absolute after:w-[2px] after:h-full after:right-36 after:top-0 after:bg-[#80808024]
            before:contents-[""] before:absolute before:w-[2px] before:h-14 before:right-36 before:top-12 before:primaryBg
            '></div>
            <div className="container space-y-3">
                <h1 className='sectionTitle capitalize'>{title} <span>{blueText}</span></h1>
                <div className='flex items-center gap-2 textSecondary font-semibold text-base md:text-lg flex-wrap sm:flex-nowrap'>
                    <Link href={'/'} title='Home'>Home</Link>
                    <span><AiOutlineDoubleRight size={20} /></span>
                    {
                        secondElement === 'Blogs' ? <Link href={'/blogs'} title='Blogs'>Blogs</Link> : <span className='capitalize'>{secondElement}</span>
                    }
                    {
                        thirdElement && <span><AiOutlineDoubleRight size={20} /></span>
                    }
                    {
                        thirdElement && <span className='capitalize'>{thirdElement}</span>
                    }
                    {
                        fourthElement && <span><AiOutlineDoubleRight size={20} /></span>
                    }
                    {
                        fourthElement && <span className='capitalize'>{fourthElement}</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb