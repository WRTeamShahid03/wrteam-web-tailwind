import RefundPolicy from '@/components/pagesComponent/refundPolicy/RefundPolicy'
import React from 'react'
import type { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: 'Refund Policy of WRTeam',
  description: `Review WRTeam's Refund Policy for eligibility, conditions, and timelines related to returns, cancellations, and support services.`,
  alternates: {
    canonical: `https://www.wrteam.in/refund-policy`,
  },
}

const Page = () => {
    return (
        <div><RefundPolicy /></div>
    )
}

export default Page