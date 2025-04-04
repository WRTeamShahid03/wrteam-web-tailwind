import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'
import { MdDateRange } from "react-icons/md";
import { Blog } from '@/types/blogs';

interface BlogCardProps {
    blog: Blog;
    formatDate: (dateString: string) => string;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, formatDate }) => {
    return (
        <div className='flexColCenter !items-start border border-[#51535892] rounded-[16px] overflow-hidden space-y-2'>
            <div className='relative'>
                <span className='primaryBg absolute top-2 text-xs rounded-e-sm font-medium text-white py-1 px-2'>
                    {blog.category?.name || 'Uncategorized'}
                </span>
                <Image
                    src={blog.image || '/placeholder-image.jpg'}
                    height={300}
                    width={500}
                    alt={blog.title}
                    className="w-full object-cover"
                />
            </div>
            <div className='flexColCenter !items-start p-3 gap-3'>
                <div className='flexCenter gap-2 textSecondary text-sm font-semibold'>
                    <span><MdDateRange className='primaryColor' size={20} /></span>
                    <span>{formatDate(blog.created_at)}</span>
                </div>
                <h1 className='font-bold text-lg md:text-2xl line-clamp-2'>{blog.title}</h1>
                <p className='sectionPara !leading-6 line-clamp-3'>{blog.short_description}</p>
                <Link
                    href={`/blog/${blog.slug}`}
                    title='Read full article'
                    className='flex items-center gap-2 border border-[#51535892] py-1 px-2 rounded-[8px] transition-all duration-300 hover:primaryBg hover:text-white text-sm md:text-base'
                >
                    Read More <BsArrowRightCircle />
                </Link>
            </div>
        </div>
    )
}

export default BlogCard