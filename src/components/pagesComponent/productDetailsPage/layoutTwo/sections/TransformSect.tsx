import Link from 'next/link'
import React from 'react'

const TransformSect = () => {
  return (
    <div className="container commonMT">

      <div className="rounded-[8px] relative w-full affter:content-[''] after:absolute after:h-full after:w-full after:productSecondaryBg after:top-0 after:left-0 after:-z-[1] after:opacity-90 p-6 md:p-8 lg:p-12 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-3/4 h-full overflow-hidden pointer-events-none hidden lg:block">
          <div className="absolute top-[-120px] right-[160px] w-[230px] h-[230px] border-[36px] border-white rounded-full opacity-10 hidden lg:block"></div>
          <div className="absolute bottom-[-210px] right-[-180px] w-[447px] h-[447px] border-[80px] border-[var(--productPage-primary-color)] rounded-full -z-1 hidden lg:block"></div>
        </div>

        {/* Content container */}
        <div className="">
          <div className="max-w-2xl">
            <h1 className="sectionTitle text-white leading-tight mb-8">
              Transform your project with eClassify, the perfect solution for fast and efficient development. Build smarter, not harder.
            </h1>

            <Link href="/buy" className="inline-flex items-center px-6 py-3 productPrimaryBg transition-colors duration-200 text-white font-medium rounded-md group">
              Buy Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransformSect