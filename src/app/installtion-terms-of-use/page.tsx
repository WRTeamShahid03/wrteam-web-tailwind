
import React from 'react'
import type { Metadata } from 'next'
import InstallationTerms from '@/components/pagesComponent/installtionTerms/InstalltionTerms'

// either Static metadata
export const metadata: Metadata = {
    title: 'Installation Terms of Use of WRTeam',
    description: 'Review our terms of use for a clear understanding of your rights and responsibilities when using our app and web development services.',
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