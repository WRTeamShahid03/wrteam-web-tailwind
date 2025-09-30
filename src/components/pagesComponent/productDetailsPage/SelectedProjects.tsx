'use client'
import React, { useRef, useState, useEffect } from 'react'
// import selectedProjectsBg from '@/assets/images/breadcrumbBg.png'
import SectionHeading from '@/components/commonComponents/SectionHeading'
import { PiArrowCircleUpRight, PiArrowCircleUpRightFill, PiArrowLeftFill, PiArrowRightFill } from 'react-icons/pi'
import projectImage from '@/assets/images/homePage/productSideImg.jpg'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Project data interface for type safety
interface ProjectCard {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    app_headline?: string;
    play_store_link?: string;
    app_store_link?: string;
    website_link?: string;
    products?: {
        id?: number | string;
        name?: string;
        product_title?: string;
    };
}

// API response interface
interface PortfolioApiItem {
    id?: number | string;
    app_headline?: string;
    short_description?: string;
    description?: string;
    image?: string;
    app_image?: string;
    tag?: string;
    play_store_link?: string;
    app_store_link?: string;
    website_link?: string;
    products?: {
        id?: number | string;
        name?: string;
        product_title?: string;
    };
}

// const SelectedProjects = ({ selectedProjects }: { selectedProjects: PortfolioItem[] }) => {
const SelectedProjects = () => {

    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedProjects, setSelectedProjects] = useState<ProjectCard[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.realIndex);
    };

    const goToSlide = (index: number) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    // Function to fetch portfolio items from API
    const fetchPortfolioItems = async () => {
        try {
            setIsLoading(true);

            // Fetch portfolio items with developer type and limit to 6 items
            const response = await fetch('/api/portfolio?type=developer&limit=6');
            const data = await response.json();

            if (data && !data.error) {
                // Handle different possible response structures
                let itemsData = [];

                if (data.data && Array.isArray(data.data)) {
                    // If data.data is directly an array
                    itemsData = data.data;
                } else if (data.data && data.data.data && Array.isArray(data.data.data)) {
                    // If data.data.data is an array (pagination structure)
                    itemsData = data.data.data;
                } else if (Array.isArray(data)) {
                    // If data itself is an array
                    itemsData = data;
                }

                if (itemsData.length > 0) {
                    // Map API response to our ProjectCard format
                    const projects = itemsData.map((item: PortfolioApiItem) => ({
                        id: Number(item.id) || Math.random(),
                        title: item.app_headline || "Untitled Project",
                        description: item.description || item.short_description || "",
                        image: item.image || item.app_image || "/placeholder.jpg",
                        app_headline: item.app_headline,
                        play_store_link: item.play_store_link,
                        app_store_link: item.app_store_link,
                        website_link: item.website_link,
                        tags: item.tag ? item.tag.split(",").map((t: string) => t.trim()) : ["App Development"],
                        products: item.products,
                    }));

                    setSelectedProjects(projects);
                } else {
                    setSelectedProjects([]);
                }
            } else {
                console.error("API returned error:", data.error, data.message);
                setSelectedProjects([]);
            }
        } catch (error) {
            console.error("Error fetching portfolio items:", error);
            setSelectedProjects([]);
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch portfolio items on component mount
    useEffect(() => {
        fetchPortfolioItems();
    }, []);

    // Loading skeleton component
    const SkeletonCard = () => (
        <div className="bg-white rounded-xl p-4 md:p-6 animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                <div className="flex flex-col gap-4 justify-between">
                    <div className="space-y-3">
                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                        <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                    </div>
                </div>
                <div className="h-[280px] lg:h-[422px] w-full bg-gray-200 rounded-2xl"></div>
            </div>
        </div>
    );

    const breakpoints = {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1.2,
        },
        1024: {
            slidesPerView: 1.3,
        },
        1200: {
            slidesPerView: 1.8,
        },
        1400: {
            slidesPerView: 2.2,
        },
    }

    return (
        <section className={`relative productDetailPrimaryBg py-6 md:py-8 lg:py-20`}>
            <div className="container">
                <div className="grid grid-cols-1 gap-10 xl:gap-20">

                    <div className='flexColCenter commonTextGap md:w-[60%] lg:w-[50%] m-auto text-center'>
                        <h3 className='sectionTitle'>Scaling Faster with Us</h3>
                        <p className='sectionPara'>Our clients’ success is our biggest highlight. These case studies reflect how businesses leverage our product to solve challenges, scale faster, and deliver measurable impact.</p>

                    </div>

                    {/* Swiper Carousel Section */}
                    <div className="relative">
                        {/* Loading State */}
                        {isLoading && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[1, 2, 3].map((index) => (
                                    <SkeletonCard key={`skeleton-${index}`} />
                                ))}
                            </div>
                        )}

                        {/* Empty State */}
                        {!isLoading && selectedProjects.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-lg text-gray-500">
                                    No portfolio projects found.
                                </p>
                            </div>
                        )}

                        {/* Swiper Container - Only show when data is loaded */}
                        {!isLoading && selectedProjects.length > 0 && (
                            <Swiper
                                ref={swiperRef}
                                modules={[Navigation, Pagination]}
                                spaceBetween={30}
                                slidesPerView={1}
                                breakpoints={breakpoints}
                                onSlideChange={handleSlideChange}
                                className="project-swiper"
                            >
                                {selectedProjects.map((project) => (
                                    <SwiperSlide key={project.id} className='pb-5 md:pb-10'>
                                        <div className="bg-white rounded-xl p-4 md:p-6 hover:shadow-md transition-all duration-300 group h-full">
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                                                {/* Content Section */}
                                                <div className="flex flex-col gap-4 justify-between">
                                                    <div className='commonTextGap'>
                                                        <h4 className="text-lg md:text-xl lg:text-2xl font-bold secondaryFont group-hover:productDetailPrimaryColor transition-all duration-300">
                                                            {project.app_headline}
                                                        </h4>

                                                        <p className="sectionPara text-sm lg:text-base">
                                                            {project.description}
                                                        </p>
                                                    </div>

                                                    <div className="flex items-center gap-4 flex-wrap">
                                                        {project?.tags?.map((tag: string, index: number) => (
                                                            <span
                                                                key={index}
                                                                className='border productDetailPrimaryBorder  rounded-full px-3 py-2 text-sm'
                                                            >
                                                                {tag === "App UI"
                                                                    ? "App UI"
                                                                    : tag === "UX/UI"
                                                                        ? "UI/UX"
                                                                        : tag}
                                                            </span>
                                                        ))}
                                                        {project?.products?.name && (
                                                            <span
                                                                className='border productDetailPrimaryBorder rounded-full px-3 py-2 text-sm'
                                                            >
                                                                {project?.products?.product_title}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Image Section */}
                                                <div className="h-[280px] lg:h-[422px] w-full relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:productPrimaryBg after:rounded-2xl after:opacity-0 group-hover:after:opacity-70 after:transition-all after:duration-300">
                                                    <span className='group-hover:opacity-100 opacity-0 transition-all duration-300 absolute text-white text-4xl lg:text-7xl z-[2] right-2 top-2'>
                                                        <PiArrowCircleUpRightFill />
                                                    </span>
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title || project.app_headline || "Project"}
                                                        width={600}
                                                        height={400}
                                                        className='w-full h-full object-cover rounded-2xl'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}

                        {/* Custom Navigation - Only show when data is loaded */}
                        {!isLoading && selectedProjects.length > 0 && (
                            <div className="flex items-center justify-center gap-10 mt-3 md:mt-10">
                                {/* Left Arrow */}
                                <button
                                    onClick={() => swiperRef.current?.swiper?.slidePrev()}
                                    className="w-12 h-12 productPrimaryBg rounded-full flexCenter text-white hover:bg-black transition-all duration-300"
                                >
                                    <PiArrowLeftFill className="text-xl" />
                                </button>

                                {/* Dots Navigation */}
                                <div className="flex items-center gap-2">
                                    {selectedProjects.slice(0, selectedProjects.length - 1).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`w-6 h-3 rounded-full transition-all duration-200 overflow-hidden ${activeIndex === index ? 'productPrimaryBg' : 'productDetailPrimaryBg'}`}
                                        />
                                    ))}
                                </div>

                                {/* Right Arrow */}
                                <button
                                    onClick={() => swiperRef.current?.swiper?.slideNext()}
                                    className="w-12 h-12 productPrimaryBg rounded-full flexCenter text-white hover:bg-black transition-all duration-300"
                                >
                                    <PiArrowRightFill className="text-xl" />
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section >
    )
}

export default SelectedProjects
