import Breadcrumb from '@/components/commonComponents/Breadcrumb'
import Layout from '@/components/layout/Layout'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'
import img from '../../../assets/images/products/productImg.webp'
import { LiaStarSolid } from 'react-icons/lia'
import { BsStarHalf } from 'react-icons/bs'
import Link from 'next/link'
import { RiShoppingCartFill } from 'react-icons/ri';

const Products = () => {

  const renderStars = (rating:number) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < totalStars; i++) {
        if (i < fullStars) {
            stars.push(<LiaStarSolid key={i} size={20} color='#FFA800' />);
        } else if (hasHalfStar && i === fullStars) {
            stars.push(<BsStarHalf key='half' size={18} color='#FFA800' />);
        } else {
            stars.push(<LiaStarSolid key={i} size={20} color='#bfc3c7' />);
        }
    }
    return stars;
};

  return (
    <Layout>
      <Breadcrumb title='All' blueText='Products' secondElement='Products' />
      <section className='container mt-8 md:mt-12 space-y-8 commonMB'>
        <div className='flex items-center justify-between flex-wrap gap-y-4'>
          <div>
            <h2 className='font-bold text-xl md:text-2xl'>We found <span className='primaryColor'>12</span> Products</h2>
          </div>
          <div className='flex items-center gap-4 md:gap-6 flex-wrap'>
            <div className='flex items-center gap-2'>
              <span className='textSecondary hidden lg:block'>Sort By Categories :</span>
              <div className=''>
                <Select>
                  <SelectTrigger className="w-[135px] sm:w-[180px]">
                    <SelectValue placeholder="All Products" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="all" defaultValue={'all'}>All Products</SelectItem>
                      <SelectItem value="web">Web</SelectItem>
                      <SelectItem value="app">App</SelectItem>
                      <SelectItem value="combo">App + Web (Combined)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <span className='textSecondary hidden lg:block'>Sort By :</span>
              <div className=''>

                <Select>
                  <SelectTrigger className="w-[135px] sm:w-[180px]">
                    <SelectValue placeholder="Select Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Price: Low To High</SelectItem>
                      <SelectItem value="banana">Price: High To Low</SelectItem>
                      <SelectItem value="mostp">Most Popular</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className='sm:grid-cols-2 grid lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          <div className='flex flex-col gap-4 p-3 rounded-[16px] border-dashed border-[2px] border-[#545a6870] overflow-hidden transition-all duration-300 group cursor-pointer'>
            <div>
              <Image src={img} height={0} width={0} alt='product-img' loading="lazy" className='rounded-t-[8px]'/>
            </div>
            <div className='flex items-center justify-between'>
              <span className='p-1 sm:p-2 rounded-sm secondaryBg text-white text-sm font-semibold w-max'>4848 Sales</span>
              <div className='flex items-center gap-1'>
              <div className='flex items-center'>
              {
                renderStars(4.5)
              }
              </div>
              <span className='text-sm secondaryColor font-semibold'>(4.82)</span>
              </div>
            </div>
            <div>
              <h3 className='md:text-lg font-bold line-clamp-2'>eClassify - Classified Buy and Sell Marketpla eClassify - Classified Buy and Sell Marketpla</h3>
            </div>

            <div className='flex items-center justify-between relative after:contents-[""] after:absolute after:top-0 after:-left-2.5 after:w-[120%] after:h-[1px] after:border-dashed after:border-[2px] after:border-[#545a6830] pt-4 md:pt-6'>
              <div className='flex flex-col gap-1'>
                <span className='textSecondary'>Price</span>
                <span className='font-extrabold text-2xl md:text-3xl text-[#22a869]'>$69</span>
              </div>
              <div className='flexCenter textSecondary p-1 rounded-sm transition-all duration-300 group-hover:bg-[#22a869] group-hover:text-white'>
                <Link href={'/'} title='detail-page' className='flexCenter gap-2'> <span><RiShoppingCartFill /></span>Buy</Link>
              </div>
            </div>

          </div>
          <div className='flex flex-col gap-4 p-3 rounded-[16px] border-dashed border-[2px] border-[#545a6870] overflow-hidden transition-all duration-300 group'>
            <div>
              <Image src={img} height={0} width={0} alt='product-img' loading="lazy" className='rounded-t-[8px]'/>
            </div>
            <div className='flex items-center justify-between'>
              <span className='p-1 sm:p-2 rounded-sm secondaryBg text-white text-sm font-semibold w-max'>4848 Sales</span>
              <div className='flex items-center gap-1'>
              <div className='flex items-center'>
              {
                renderStars(4.5)
              }
              </div>
              <span className='text-sm secondaryColor font-semibold'>(4.82)</span>
              </div>
            </div>
            <div>
              <h3 className='md:text-lg font-bold line-clamp-2'>eClassify - Classified Buy and Sell Marketpla eClassify - Classified Buy and Sell Marketpla</h3>
            </div>

            <div className='flex items-center justify-between relative after:contents-[""] after:absolute after:top-0 after:-left-2.5 after:w-[120%] after:h-[1px] after:border-dashed after:border-[2px] after:border-[#545a6830] pt-4 md:pt-6'>
              <div className='flex flex-col gap-1'>
                <span className='textSecondary'>Price</span>
                <span className='font-extrabold text-2xl md:text-3xl text-[#22a869]'>$69</span>
              </div>
              <div className='flexCenter textSecondary p-1 rounded-sm transition-all duration-300 group-hover:bg-[#22a869] group-hover:text-white'>
                <Link href={'/'} title='detail-page' className='flexCenter gap-2'> <span><RiShoppingCartFill /></span>Buy</Link>
              </div>
            </div>

          </div>
          <div className='flex flex-col gap-4 p-3 rounded-[16px] border-dashed border-[2px] border-[#545a6870] overflow-hidden transition-all duration-300 group'>
            <div>
              <Image src={img} height={0} width={0} alt='product-img' loading="lazy" className='rounded-t-[8px]'/>
            </div>
            <div className='flex items-center justify-between'>
              <span className='p-1 sm:p-2 rounded-sm secondaryBg text-white text-sm font-semibold w-max'>4848 Sales</span>
              <div className='flex items-center gap-1'>
              <div className='flex items-center'>
              {
                renderStars(4.5)
              }
              </div>
              <span className='text-sm secondaryColor font-semibold'>(4.82)</span>
              </div>
            </div>
            <div>
              <h3 className='md:text-lg font-bold line-clamp-2'>eClassify - Classified Buy and Sell Marketpla eClassify - Classified Buy and Sell Marketpla</h3>
            </div>

            <div className='flex items-center justify-between relative after:contents-[""] after:absolute after:top-0 after:-left-2.5 after:w-[120%] after:h-[1px] after:border-dashed after:border-[2px] after:border-[#545a6830] pt-4 md:pt-6'>
              <div className='flex flex-col gap-1'>
                <span className='textSecondary'>Price</span>
                <span className='font-extrabold text-2xl md:text-3xl text-[#22a869]'>$69</span>
              </div>
              <div className='flexCenter textSecondary p-1 rounded-sm transition-all duration-300 group-hover:bg-[#22a869] group-hover:text-white'>
                <Link href={'/'} title='detail-page' className='flexCenter gap-2'> <span><RiShoppingCartFill /></span>Buy</Link>
              </div>
            </div>

          </div>
          <div className='flex flex-col gap-4 p-3 rounded-[16px] border-dashed border-[2px] border-[#545a6870] overflow-hidden transition-all duration-300 group'>
            <div>
              <Image src={img} height={0} width={0} alt='product-img' loading="lazy" className='rounded-t-[8px]'/>
            </div>
            <div className='flex items-center justify-between'>
              <span className='p-1 sm:p-2 rounded-sm secondaryBg text-white text-sm font-semibold w-max'>4848 Sales</span>
              <div className='flex items-center gap-1'>
              <div className='flex items-center'>
              {
                renderStars(4.5)
              }
              </div>
              <span className='text-sm secondaryColor font-semibold'>(4.82)</span>
              </div>
            </div>
            <div>
              <h3 className='md:text-lg font-bold line-clamp-2'>eClassify - Classified Buy and Sell Marketpla eClassify - Classified Buy and Sell Marketpla</h3>
            </div>

            <div className='flex items-center justify-between relative after:contents-[""] after:absolute after:top-0 after:-left-2.5 after:w-[120%] after:h-[1px] after:border-dashed after:border-[2px] after:border-[#545a6830] pt-4 md:pt-6'>
              <div className='flex flex-col gap-1'>
                <span className='textSecondary'>Price</span>
                <span className='font-extrabold text-2xl md:text-3xl text-[#22a869]'>$69</span>
              </div>
              <div className='flexCenter textSecondary p-1 rounded-sm transition-all duration-300 group-hover:bg-[#22a869] group-hover:text-white'>
                <Link href={'/'} title='detail-page' className='flexCenter gap-2'> <span><RiShoppingCartFill /></span>Buy</Link>
              </div>
            </div>

          </div>

        </div>
        <div className='flexCenter !mt-12'>
          <button className='commonBtn'>View More</button>
        </div>
      </section>
    </Layout>
  )
}

export default Products