import Installation from '@/components/pagesComponent/installation/Installation'
import React from 'react'
import type { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: 'Installation - Customisable App & Web Setup and Installation',
  description: 'Customized configurations and professional support will help get your app live on PlayStore, App Store, and web. Pick the best package for your needs!'
}

const Page = () => {
  return (
    <div><Installation/></div>
  )
}

export default Page