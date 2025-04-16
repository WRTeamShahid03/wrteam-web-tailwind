import RefundPolicy from '@/components/pagesComponent/refundPolicy/RefundPolicy'
import React from 'react'
import type { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: 'Refund Policy of WRTeam',
  description: 'We prioritize customer satisfaction and transparency.'
}

const Page = () => {
    return (
        <div><RefundPolicy /></div>
    )
}

export default Page