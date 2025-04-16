import FreeSourceCode from '@/components/pagesComponent/freeSourceCode/FreeSourceCode'
import React from 'react'
import type { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: 'Free Source Code',
  description: 'We prioritize customer satisfaction and transparency.'
}

const Page = () => {
    return (
        <div>
            <FreeSourceCode />
        </div>
    )
}

export default Page
