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

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title,blueText,secondElement, thirdElement, fourthElement }) => {

    return (
        <div className='flex items-center gap-2 commonBg pt-[120px] md:pt-[150px] pb-8 md:pb-12'>
            <div className="container space-y-3">
                <h1 className='sectionTitle'>{title} <span>{blueText}</span></h1>
                <div className='flex items-center gap-2 textSecondary font-semibold text-base md:text-lg flex-wrap sm:flex-nowrap'>
                    <Link href={'/'} title='Home'>Home</Link>
                    <span><AiOutlineDoubleRight size={20} /></span>
                    {
                        secondElement === 'Blogs' ? <Link href={'/blogs'} title='Blogs'>Blogs</Link> : <span>{secondElement}</span>
                    }
                    {
                        thirdElement && <span><AiOutlineDoubleRight size={20} /></span>
                    }
                    {
                        thirdElement && <span>{thirdElement}</span>
                    }
                    {
                        fourthElement && <span><AiOutlineDoubleRight size={20} /></span>
                    }
                    {
                        fourthElement && <span>{fourthElement}</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb