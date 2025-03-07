import Link from 'next/link'
import React from 'react'

const RightSideContent = () => {
    return (
        <div className="max-1199:col-span-12 col-span-4">
            <div className='border border-[#51535892] rounded-[16px] p-5 space-y-8'>
                <div className='relative after:content-[""] after:absolute after:left-0 after:-bottom-2 after:primaryBg after:h-[5px] after:w-[14%] after:rounded-[8px]'>
                    <h2 className='font-semibold text-2xl'>Category</h2>
                </div>
                <div className='flexColCenter !items-start gap-6'>
                    <div className='flexCenter !justify-between w-full textSecondary font-semibold border-b border-[#51535892] pb-4'>
                        <Link href={'/'}>Documentation</Link>
                        <span>(4)</span>
                    </div>
                    <div className='flexCenter !justify-between w-full textSecondary font-semibold border-b border-[#51535892] pb-4'>
                        <Link href={'/'}>Documentation</Link>
                        <span>(4)</span>
                    </div>
                    <div className='flexCenter !justify-between w-full textSecondary font-semibold border-b border-[#51535892] pb-4 last:pb-0 last:border-transparent'>
                        <Link href={'/'}>Documentation</Link>
                        <span>(4)</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RightSideContent