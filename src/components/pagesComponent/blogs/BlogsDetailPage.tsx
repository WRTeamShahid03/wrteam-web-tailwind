'use client'
import React, { useEffect, useState } from 'react'
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
import { axiosClient } from '@/lib/api'
import { Blog } from '@/types/blogs'
import { useParams } from 'next/navigation'
import BlogDetailSkeleton from './BlogDetailSkeleton';
import RichTextContent from '@/components/commonComponents/RichTextContent';

const BlogsDetailPage = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    const fetchBlogDetail = async () => {
      if (!slug) return;

      try {
        setIsLoading(true);
        const response = await axiosClient.get('/api/blogs', {
          params: { slug },
          timeout: 10000
        });

        if (response?.data?.data) {
          setBlog(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching blog detail:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogDetail();
  }, [slug]);

  // Format date for display
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  useEffect(() => {

  }, [blog]);

  return (
    <Layout>
      <Breadcrumb
        blueText='Blogs'
        secondElement='Blogs'
        thirdElement={blog?.slug || slug as string}
      />
      <section className='container commonMT commonMB'>
        <div className='grid grid-cols-12 gap-6'>
          {isLoading ? (
            <BlogDetailSkeleton />
          ) : blog ? (
            <div className="col-span-12 lg:col-span-8">
              <div className="flexColCenter !items-start commonTextGap">
                <div className='flex items-center gap-6'>
                  <div className='flexCenter gap-2 textSecondary text-sm font-semibold'>
                    <span><MdDateRange className='primaryColor' size={20} /></span>
                    <span>{formatDate(blog.created_at)}</span>
                  </div>
                  <div className='flexCenter gap-2 textSecondary text-sm font-semibold'>
                    <span><FaRegClock className='primaryColor' size={17} /></span>
                    <span>8 minutes read</span>
                  </div>
                </div>
                <h2 className='text-xl md:text-3xl lg:text-4xl/[50px] !font-medium'>{blog.title}</h2>
                <div className='relative overflow-hidden rounded-[16px]'>
                  <span className='primaryBg absolute top-4 text-xs rounded-e-sm font-medium text-white py-1 px-2'>
                    {blog.category?.name || 'Uncategorized'}
                  </span>
                  <Image
                    src={blog.image || blogImg}
                    alt={blog.title}
                    width={800}
                    height={400}
                    className="w-full"
                  />
                </div>
                <RichTextContent content={blog.description} />

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
          ) : (
            <div className="col-span-12 lg:col-span-8 text-center py-10">
              <p>Blog not found.</p>
            </div>
          )}

          <div className="col-span-12 lg:col-span-4">
            <RightSideContent />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogsDetailPage