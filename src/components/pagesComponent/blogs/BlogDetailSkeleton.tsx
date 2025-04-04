import React from 'react'

const BlogDetailSkeleton = () => {
  return (
    <div className="col-span-12 lg:col-span-8">
      <div className="flexColCenter !items-start commonTextGap">
        {/* Date and read time skeleton */}
        <div className='flex items-center gap-6'>
          <div className='flexCenter gap-2 w-28'>
            <div className='w-5 h-5 rounded-full bg-gray-200 animate-pulse'></div>
            <div className='h-4 bg-gray-200 animate-pulse w-full rounded'></div>
          </div>
          <div className='flexCenter gap-2 w-32'>
            <div className='w-5 h-5 rounded-full bg-gray-200 animate-pulse'></div>
            <div className='h-4 bg-gray-200 animate-pulse w-full rounded'></div>
          </div>
        </div>
        
        {/* Title skeleton */}
        <div className='space-y-2 w-full'>
          <div className='h-8 bg-gray-200 animate-pulse w-full rounded'></div>
          <div className='h-8 bg-gray-200 animate-pulse w-3/4 rounded'></div>
        </div>
        
        {/* Image skeleton */}
        <div className='relative overflow-hidden rounded-[16px] w-full'>
          <div className='absolute top-4 left-0 h-6 w-24 bg-gray-300 animate-pulse rounded-e-sm'></div>
          <div className='w-full h-[350px] bg-gray-200 animate-pulse'></div>
        </div>
        
        {/* Content paragraphs skeleton */}
        <div className='space-y-4 w-full'>
          <div className='h-4 bg-gray-200 animate-pulse w-full rounded'></div>
          <div className='h-4 bg-gray-200 animate-pulse w-full rounded'></div>
          <div className='h-4 bg-gray-200 animate-pulse w-full rounded'></div>
          <div className='h-4 bg-gray-200 animate-pulse w-3/4 rounded'></div>
          
          <div className='h-4 bg-gray-200 animate-pulse w-full rounded mt-6'></div>
          <div className='h-4 bg-gray-200 animate-pulse w-full rounded'></div>
          <div className='h-4 bg-gray-200 animate-pulse w-5/6 rounded'></div>
          
          <div className='h-4 bg-gray-200 animate-pulse w-full rounded mt-6'></div>
          <div className='h-4 bg-gray-200 animate-pulse w-full rounded'></div>
          <div className='h-4 bg-gray-200 animate-pulse w-4/5 rounded'></div>
        </div>

        {/* Social share skeleton */}
        <div className="flex items-center gap-3 mt-8">
          <div className='h-6 bg-gray-200 animate-pulse w-24 rounded'></div>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 rounded-full bg-gray-200 animate-pulse'></div>
            <div className='w-8 h-8 rounded-full bg-gray-200 animate-pulse'></div>
            <div className='w-8 h-8 rounded-full bg-gray-200 animate-pulse'></div>
            <div className='w-8 h-8 rounded-full bg-gray-200 animate-pulse'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailSkeleton 