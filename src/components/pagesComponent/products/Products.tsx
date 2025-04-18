'use client'
import Breadcrumb from '@/components/commonComponents/Breadcrumb'
import Layout from '@/components/layout/Layout'
import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'
import img from '../../../assets/images/products/productImg.webp'
import { LiaStarSolid } from 'react-icons/lia'
import { BsStarHalf } from 'react-icons/bs'
import Link from 'next/link'
import { RiShoppingCartFill } from 'react-icons/ri'
import { axiosClient } from '@/lib/api'
import { Products } from '@/types/products'

// Product card skeleton component
const ProductCardSkeleton = () => {
  return (
    <div className='flex flex-col gap-4 p-3 rounded-[16px] border-dashed border-[2px] border-[#545a6870] overflow-hidden animate-pulse'>
      <div className='bg-gray-200 h-48 rounded-t-[8px]'></div>
      <div className='flex items-center justify-between'>
        <div className='bg-gray-200 h-8 w-24 rounded-sm'></div>
        <div className='flex items-center gap-1'>
          <div className='bg-gray-200 h-5 w-24 rounded'></div>
        </div>
      </div>
      <div className='space-y-2'>
        <div className='bg-gray-200 h-4 w-full rounded'></div>
        <div className='bg-gray-200 h-4 w-3/4 rounded'></div>
      </div>
      <div className='flex items-center justify-between pt-4 md:pt-6'>
        <div className='flex flex-col gap-1'>
          <div className='bg-gray-200 h-4 w-16 rounded'></div>
          <div className='bg-gray-200 h-8 w-24 rounded'></div>
        </div>
        <div className='bg-gray-200 h-8 w-20 rounded'></div>
      </div>
    </div>
  )
}

// Filter options
type FilterOption = "1" | "2" | "3" | "default"; // Added "default" option for the placeholder
type CategoryOption = "all" | "web" | "app" | "combo";

const ProductsPage = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false); // New state for "load more" loading
  const [totalProducts, setTotalProducts] = useState(0);
  const [filter, setFilter] = useState<FilterOption>("default"); // Default to Most Popular
  const [category, setCategory] = useState<CategoryOption>("all"); // Default to All Products
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  // Fetch products whenever filter or category changes
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        // Reset to page 1 when filters change
        setCurrentPage(1);

        // Add filter parameter to the API call
        const response = await axiosClient.get('/api/products', {
          timeout: 10000,
          params: {
            product_filter: filter === "default" ? undefined : filter,
            category: category !== "all" ? category : undefined,
            page: 1 // Always start with page 1 on filter changes
          }
        });

        if (response?.data?.data?.data && Array.isArray(response.data.data.data)) {
          setProducts(response.data.data.data);
          setTotalProducts(response.data.data.total || 0);
          setLastPage(response.data.data.last_page || 1);
        }
      } catch (error) {
        // Fallback to empty array is already set in initial state
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [filter, category]); // Re-fetch when filter or category changes

  // Function to load more products
  const loadMoreProducts = async () => {
    if (currentPage >= lastPage || loadingMore) return;

    try {
      setLoadingMore(true);
      const nextPage = currentPage + 1;

      const response = await axiosClient.get('/api/products', {
        timeout: 10000,
        params: {
          product_filter: filter === "default" ? undefined : filter,
          category: category !== "all" ? category : undefined,
          page: nextPage
        }
      });

      if (response?.data?.data?.data && Array.isArray(response.data.data.data)) {
        // Append the new products to the existing ones
        setProducts(prevProducts => [...prevProducts, ...response.data.data.data]);
        setCurrentPage(nextPage);
      }
    } catch (error) {
      // Handle error silently
    } finally {
      setLoadingMore(false);
    }
  };

  const renderStars = (rating: number) => {
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

  // Handle filter change
  const handleFilterChange = (value: string) => {
    setFilter(value as FilterOption);
  };

  // Handle category change
  const handleCategoryChange = (value: string) => {
    setCategory(value as CategoryOption);
  };

  // Handle external link click without bubbling to parent
  const handleBuyClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Layout>
      <Breadcrumb title={category} blueText='Products' secondElement='Products' />
      <section className='container mt-8 md:mt-12 space-y-8 commonMB'>
        {!isLoading && (
          <div className='flex items-center justify-between flex-wrap gap-y-4'>
            <div>
              <h2 className='font-bold text-xl md:text-2xl'>We found <span className='primaryColor'>{totalProducts}</span> Products</h2>
            </div>
            <div className='flex items-center gap-4 md:gap-6 flex-wrap'>
              <div className='flex items-center gap-2'>
                <span className='textSecondary hidden lg:block'>Sort By Categories :</span>
                <div className=''>
                  <Select value={category} onValueChange={handleCategoryChange}>
                    <SelectTrigger className="w-[135px] sm:w-[180px]">
                      <SelectValue placeholder="All Products" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all">All Products</SelectItem>
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
                  <Select value={filter} onValueChange={handleFilterChange}>
                    <SelectTrigger className="w-[135px] sm:w-[180px]">
                      <SelectValue placeholder="Select Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="default">Select Filter</SelectItem>
                        <SelectItem value="1">Price: Low To High</SelectItem>
                        <SelectItem value="2">Price: High To Low</SelectItem>
                        <SelectItem value="3">Most Popular</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className='sm:grid-cols-2 grid lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {isLoading ? (
            // Show skeleton cards while loading
            [...Array(12)].map((_, index) => (
              <ProductCardSkeleton key={`skeleton-${index}`} />
            ))
          ) : (
            // Show actual product cards when data is loaded
            products.length > 0 ? (
              products.map((product) => (
                <div key={product?.id} className='flex flex-col gap-4 p-3 rounded-[16px] border-dashed border-[2px] border-[#545a6870] overflow-hidden transition-all duration-300 group cursor-pointer'>
                  {/* Product Main Image - Clickable */}
                  <Link href={`/product-details/${product?.slug}`} title='Product Details' target='_blank'>
                    <div>
                      <Image
                        src={product?.banner_image}
                        alt={product?.name || 'Product Image'}
                        width={500}
                        height={300}
                        loader={({ src }) => src}
                        unoptimized={true}
                        loading="lazy"
                        className='rounded-t-[8px] w-full h-auto aspect-[16/10] object-fill'
                      />
                    </div>
                  </Link>

                  {/* Product Details */}
                  <div className='flex items-center justify-between'>
                    <span className='p-1 sm:p-2 rounded-sm secondaryBg text-white text-sm font-semibold w-max'>
                      {product?.sales} Sales
                    </span>
                    <div className='flex items-center gap-1'>
                      <div className='flex items-center'>
                        {renderStars(product?.rating)}
                      </div>
                      <span className='text-sm secondaryColor font-semibold'>
                        ({product?.rating.toFixed(2)})
                      </span>
                    </div>
                  </div>

                  {/* Product Name - Clickable */}
                  <Link href={`/product-details/${product?.slug}`}>
                    <h3 className='md:text-lg font-bold line-clamp-2'>
                      {product?.name}
                    </h3>
                  </Link>

                  <div className='flex items-center justify-between relative after:contents-[""] after:absolute after:top-0 after:-left-2.5 after:w-[120%] after:h-[1px] after:border-dashed after:border-[2px] after:border-[#545a6830] pt-4 md:pt-6'>
                    <div className='flex flex-col gap-1'>
                      <span className='textSecondary'>Price</span>
                      <span className='font-extrabold text-2xl md:text-3xl text-[#22a869]'>
                        ${product?.sale_price !== null ? product?.sale_price : product?.price}
                      </span>
                    </div>
                    <div className='flexCenter textSecondary p-1 rounded-sm transition-all duration-300 group-hover:bg-[#22a869] group-hover:text-white'>
                      {/* Buy Button - Uses custom handler */}
                      <button
                        onClick={(e) => handleBuyClick(e, product?.codecanyon_link)}
                        title='Buy product'
                        className='flexCenter gap-2'
                      >
                        <span><RiShoppingCartFill /></span>Buy
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p>No products found. Please try again later.</p>
              </div>
            )
          )}
        </div>

        {products.length > 0 && currentPage < lastPage && (
          <div className='flexCenter !mt-12'>
            <button
              className={`commonBtn ${loadingMore ? 'opacity-70' : ''}`}
              onClick={loadMoreProducts}
              disabled={loadingMore}
            >
              {loadingMore ? 'Loading...' : 'View More'}
            </button>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default ProductsPage