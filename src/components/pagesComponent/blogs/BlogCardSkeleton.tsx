import React from 'react'

const BlogCardSkeleton = () => {
  return (
    <div className='flexColCenter !items-start border border-[#51535892] rounded-[16px] overflow-hidden space-y-2'>
      {/* Image skeleton */}
      <div className='relative w-full'>
        <div className='absolute top-2 left-0 h-6 w-24 bg-gray-200 animate-pulse rounded-e-sm'></div>
        <div className='w-full h-[220px] bg-gray-200 animate-pulse'></div>
      </div>
      
      <div className='flexColCenter !items-start p-3 gap-3 w-full'>
        {/* Date skeleton */}
        <div className='flexCenter gap-2 w-28'>
          <div className='w-5 h-5 rounded-full bg-gray-200 animate-pulse'></div>
          <div className='h-4 bg-gray-200 animate-pulse w-full rounded'></div>
        </div>
        
        {/* Title skeleton */}
        <div className='h-8 bg-gray-200 animate-pulse w-full rounded mb-1'></div>
        <div className='h-6 bg-gray-200 animate-pulse w-3/4 rounded'></div>
        
        {/* Description skeleton */}
        <div className='w-full space-y-2'>
          <div className='h-4 bg-gray-200 animate-pulse w-full rounded'></div>
          <div className='h-4 bg-gray-200 animate-pulse w-full rounded'></div>
          <div className='h-4 bg-gray-200 animate-pulse w-2/3 rounded'></div>
        </div>
        
        {/* Button skeleton */}
        <div className='h-10 bg-gray-200 animate-pulse w-32 rounded-[8px] mt-2'></div>
      </div>
    </div>
  )
}

export default BlogCardSkeleton 