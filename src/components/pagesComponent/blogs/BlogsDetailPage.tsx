
import React from 'react'
import Image from 'next/image';
import Layout from '@/components/layout/Layout'
import RightSideContent from './RightSideContent'
import { MdDateRange } from 'react-icons/md'
import { FaRegClock } from "react-icons/fa";
import blogImg from '@/assets/images/blogimg.jpg'
import Link from 'next/link';
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import Breadcrumb from '@/components/commonComponents/Breadcrumb';


const BlogsDetailPage = () => {
  return (
    <Layout>
      <Breadcrumb blueText='Blogs' secondElement='Blogs' thirdElement='meaning-of-sourcecode-everything-a-developer-needs-to-learn'/>
      <section className='container commonMT commonMB'>
        <div className='grid grid-cols-12 gap-6'>
          <div className="col-span-12 lg:col-span-8">
            <div className="flexColCenter !items-start commonTextGap">
              <div className='flex items-center gap-6'>
                <div className='flexCenter gap-2 textSecondary text-sm font-semibold'>
                  <span><MdDateRange className='primaryColor' size={20} /></span>
                  <span>Sep 30, 2024</span>
                </div>
                <div className='flexCenter gap-2 textSecondary text-sm font-semibold'>
                  <span><FaRegClock className='primaryColor' size={17} /></span>
                  <span>8 minutes read</span>
                </div>
              </div>
              <h2 className='text-xl md:text-3xl lg:text-4xl/[50px] !font-medium'>Meaning Of SourceCode | Everything a Developer Needs To Learn.</h2>
              <div className='relative overflow-hidden rounded-[16px]'>
                <span className='primaryBg absolute top-4 text-xs rounded-e-sm font-medium text-white py-1 px-2'>Documentation</span>
                <Image src={blogImg} height={0} width={0} alt='blog-img' className='' />
              </div>
              {/* <div className="blogDetailContent" dangerouslySetInnerHTML={{ __html: blogsData && blogsData?.description || "" }} /> */}
              <div className='sectionPara'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet praesentium tempora error molestias, harum animi quidem fugit, porro recusandae modi illum expedita blanditiis ullam, dignissimos beatae unde. Saepe, facere quos!
              </div>

              <div className="flex items-center gap-3 secondaryColor mt-8">
                <h3 className='seondaryColor font-extrabold text-lg'>Follow Us : </h3>
                <div className='flex items-center gap-3'>
                  <Link href={process.env.NEXT_PUBLIC_FACEBOOK!} title='Facebook' target='_blank'>  <span className='facebook'>  <BsFacebook size={30} /> </span> </Link>
                  <Link href={process.env.NEXT_PUBLIC_TWITTER!} title='Twitter' target='_blank'>  <span className='twitter'>  <FaSquareXTwitter size={30} /> </span> </Link>
                  <Link href={process.env.NEXT_PUBLIC_YOUTUBE!} title='=Youtube' target='_blank'>  <span className='pintrest'>  <TbBrandYoutubeFilled size={34} /> </span> </Link>
                  <Link href={process.env.NEXT_PUBLIC_LINKEDIN!} title='Linkedin' target='_blank'>  <span className='linkedin'>  <BsLinkedin size={30} /> </span> </Link>
                </div>
              </div>

            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <RightSideContent />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogsDetailPage