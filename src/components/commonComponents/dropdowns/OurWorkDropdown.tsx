import Image from 'next/image'
import React, { useState } from 'react'
import { FaAngleDown, FaArrowRight } from 'react-icons/fa6'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import developmentImg from '../../../assets/images/homePage/development-portfolio.png'
import designImg from '../../../assets/images/homePage/ui-ux-portfolio.png'

const OurWorkDropdown = () => {

  const pathname = usePathname();

  const [showDrop, setShowDrop] = useState<boolean>(false)

  const data = [
    {
      id: 1,
      img: developmentImg,
      title: 'Development Portfolio',
      subTitle: 'Built to Perform',
      desc: `Apps and websites built to perform—check out what we've created.`,
      link: '/our-work/development',
    },
    {
      id: 2,
      img: designImg,
      title: 'Design Portfolio',
      subTitle: 'Designs That Speak',
      desc: 'Clean, modern, and user-friendly—designs that make an impact.',
      link: '/our-work/design',
    },
  ];

  
  const active = pathname?.startsWith('/our-work');

  return (
    <div className="max-1199:relative">
      <div className="flex items-center gap-1 cursor-pointer" onClick={() => setShowDrop(true)}>
      <span className={`flex items-center gap-1 relative transition-all duration-300 after:contents-[""] after:absolute between-1400-1680:after:-bottom-[36px] after:-bottom-[40px] max-1199:after:-bottom-2 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:bg-black font-medium ${active && 'after:!bg-black font-semibold'}`}> Our Work <FaAngleDown /></span>
      </div>

      {showDrop && (
        <div
        className="absolute max-1199:!top-[28px] max-1680:top-[137px] top-[144px] left-0 right-0 mx-auto bg-white rounded-b-2xl shadow-md max-399:w-[250px] max-1199:w-[350px] between-1200-1399:w-[900px] w-[1000px] max-1199:p-3 p-6 z-50 pt-0"
        onMouseLeave={() => setShowDrop(false)}
        >
          <div className="flex gap-6 max-1199:flex-wrap">
            {data.map((item, index) => (
              <div key={index} className="w-full lg:w-1/2">
                <div className="max-1199:p-0 p-5 rounded-xl h-full">
                  <span className="block max-1199:text-base text-xl font-semibold text-[#181C24] mb-3">{item.title}</span>
                  <div className="w-full h-[280px] mb-3 overflow-hidden rounded-lg">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      width={0}
                      height={0}
                    />
                  </div>
                  <span className="block textPrimary font-medium max-1199:text-sm text-base my-1">{item.subTitle}</span>
                  <p className="textSecondary font-normal text-sm mb-4">{item.desc}</p>
                  <Link
                    href={item.link}
                    title="View Case Studies"
                    className="inline-flex items-center max-1199:text-sm text-primary font-semibold border rounded-[8px] max-1199:px-2 max-1199:py-1 px-4 py-2 transition-all duration-300 hover:bg-black hover:text-white border-black"
                  >
                    View portfolio <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default OurWorkDropdown
