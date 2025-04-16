import ThankYou from '@/components/pagesComponent/thankYou/ThankYou'
import React from 'react'
import type { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: 'Thank You',
}

const Page = () => {
    return (
        <div><ThankYou /></div>
    )
}

export default Page