import React, { Suspense } from 'react'
import Blogs from '@/components/pagesComponent/blogs/Blogs'

// Create a loading component
const BlogsLoading = () => (
  <div className="container mx-auto py-8">
    <div className="animate-pulse space-y-4">
      <div className="h-10 bg-gray-200 rounded w-1/3"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-10 bg-gray-200 rounded w-1/4 mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default function BlogsPage() {
  return (
    <Suspense fallback={<BlogsLoading />}>
      <Blogs />
    </Suspense>
  )
}