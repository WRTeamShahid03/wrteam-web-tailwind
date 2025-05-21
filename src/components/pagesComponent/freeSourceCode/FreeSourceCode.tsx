'use client'
import React from 'react'
import Header from './sections/Header'
import HeroSect from './sections/HeroSect'
import CheckoutSect from './sections/CheckoutSect'
import Testimonials from './sections/Testimonials'
import Footer from './sections/Footer'

const FreeSourceCode = () => {
    return (
        <div className='!text-white !font-roboto'>
            <Header />
            <HeroSect />
            <CheckoutSect freeCodePage={true}/>
            <Testimonials />
            <Footer/>
        </div>
    )
}

export default FreeSourceCode
