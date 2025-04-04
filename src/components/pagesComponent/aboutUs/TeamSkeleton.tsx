import React from 'react'

const TeamSkeleton = ({ count = 8 }) => {
  return (
    <>
      {Array(count).fill(0).map((_, index) => (
        <div key={index} className='relative rounded-[30px] overflow-hidden shadow-md bg-gray-100'>
          {/* Image skeleton */}
          <div className='w-full h-[300px] bg-gray-200 animate-pulse'></div>
          
          {/* Info skeleton */}
          <div className='flex flex-col gap-2 bg-white w-[94%] m-auto rounded-[15px] bottom-4 py-2 px-6 absolute left-0 right-0'>
            <div className='h-6 bg-gray-200 animate-pulse rounded w-3/4'></div>
            <div className='h-4 bg-gray-200 animate-pulse rounded w-1/2'></div>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamSkeleton 