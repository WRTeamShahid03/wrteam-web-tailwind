'use client'
import Layout from '@/components/layout/Layout'
import React, { useEffect, useState, Suspense } from 'react'
import RightSideContent from './RightSideContent'
import { Blog } from '@/types/blogs'
import { axiosClient } from '@/lib/api'
import BlogCard from './BlogCard'
import { useSearchParams } from 'next/navigation'
import BlogCardSkeleton from './BlogCardSkeleton'

const Blogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalBlogs, setTotalBlogs] = useState(0);
    const [lastPage, setLastPage] = useState(1);
    const [categoryId, setCategoryId] = useState<number | null>(null);
    const [categorySlug, setCategorySlug] = useState<string | null>(null);

    const searchParams = useSearchParams();
    const categoryIdFromUrl = searchParams.get('category_id');
    const categorySlugFromUrl = searchParams.get('category_slug');

    // Fetch blogs with proper parameters
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setIsLoading(true);
                
                // Build query parameters based on filters
                const params: Record<string, string | number> = {
                    page: currentPage
                };
                
                // Add optional filters if they exist
                // if (categoryIdFromUrl) params.category_id = categoryIdFromUrl;
                if (categorySlugFromUrl) params.category_slug = categorySlugFromUrl;

                const response = await axiosClient.get('/api/blogs', {
                    timeout: 10000,
                    params
                });

                if (response?.data?.data?.data && Array.isArray(response.data.data.data)) {
                    setBlogs(response.data.data.data);
                    setTotalBlogs(response.data.data.total || 0);
                    setLastPage(response.data.data.last_page || 1);
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
                // Fallback to empty array is already set in initial state
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, [currentPage, categoryIdFromUrl, categorySlugFromUrl]); // Re-fetch when these dependencies change

    // Format date for display
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    };

    return (
        <Layout>
            <section className='container commonMT commonMB'>
                <div className='grid grid-cols-12 gap-y-8 lg:gap-6'>
                    <div className="max-1199:col-span-12 col-span-8">
                        {isLoading ? (
                        <div className="grid md:grid-cols-2 gap-6">
                                {[1, 2, 3, 4].map((item) => (
                                    <BlogCardSkeleton key={item} />
                                ))}
                                </div>
                        ) : blogs.length === 0 ? (
                            <div className="text-center py-10">
                                <p>No blogs found.</p>
                                    </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-6">
                                {blogs.map((blog) => (
                                    <BlogCard
                                        key={blog.id}
                                        blog={blog}
                                        formatDate={formatDate}
                                    />
                                ))}
                            </div>
                        )}
                        
                        {/* Pagination controls */}
                        {!isLoading && lastPage > 1 && (
                            <div className="flex justify-center mt-8">
                                <div className="flex items-center gap-2">
                                    <button 
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'primaryBg text-white'}`}
                                    >
                                        Previous
                                    </button>
                                    
                                    {Array.from({ length: lastPage }, (_, i) => i + 1).map(page => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`w-10 h-10 rounded-full ${page === currentPage ? 'primaryBg text-white' : 'border'}`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    
                                    <button 
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, lastPage))}
                                        disabled={currentPage === lastPage}
                                        className={`px-4 py-2 rounded ${currentPage === lastPage ? 'bg-gray-200 cursor-not-allowed' : 'primaryBg text-white'}`}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <Suspense fallback={<div className="col-span-12 lg:col-span-4">Loading categories...</div>}>
                        <RightSideContent />
                    </Suspense>
                </div>
            </section>
        </Layout>
    )
}

export default Blogs