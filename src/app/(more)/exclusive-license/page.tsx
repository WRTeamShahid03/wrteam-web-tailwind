import ExclusiveLicense from '@/components/pagesComponent/exclusive-license/ExclusiveLicense'
import React from 'react'

import type { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: 'Exclusive License',
  description: 'We prioritize customer satisfaction and transparency.'
}

const Page = () => {
  return (
    <div><ExclusiveLicense/></div>
  )
}

export default Page