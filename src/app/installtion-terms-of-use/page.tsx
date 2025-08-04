
import React from 'react'
import type { Metadata } from 'next'
import InstallationTerms from '@/components/pagesComponent/installtionTerms/InstalltionTerms'

// either Static metadata
export const metadata: Metadata = {
    title: 'Installation Terms of Use of WRTeam',
    description: `Learn about WRTeam's installation terms, including conditions, limitations, and user responsibilities during product setup and support.`,
    alternates: {
        canonical: `https://www.wrteam.in/installtion-terms-of-use`,
    },
}


const Page = () => {
    return (
        <div><InstallationTerms /></div>
    )
}

export default Page