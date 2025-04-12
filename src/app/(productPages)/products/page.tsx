import Products from '@/components/pagesComponent/products/Products'
import React from 'react'
import { generatePageMetadata } from '@/lib/generate-metadata'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    pageType: "web_products",
  });
}

const Page = () => {
    return (
        <div>
            <Products />
        </div>
    )
}

export default Page