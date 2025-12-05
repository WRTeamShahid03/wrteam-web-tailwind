'use client'
import React, { useState, useEffect, useRef } from 'react'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa6'
import { HiClock } from 'react-icons/hi2'
import { MdVideoCall } from 'react-icons/md'
import { FaCheckCircle } from 'react-icons/fa'
import logo from '@/assets/images/logo.svg'

// TypeScript declaration for Calendly window object
declare global {
    interface Window {
        Calendly?: {
            initInlineWidget: (options: {
                url: string
                parentElement: HTMLElement
            }) => void
        }
    }
}

/**
 * Calendly Skeleton Loader Component
 * Shows a loading skeleton while Calendly widget is loading
 */
const CalendlySkeleton = () => {
    return (
        <div className="w-full h-[700px] bg-white rounded-2xl border border-[#e5e7eb] p-3 md:p-4 shadow-sm animate-pulse">
            {/* Header skeleton */}
            <div className="flex items-center justify-between mb-6">
                <div className="h-6 bg-gray-200 rounded w-32"></div>
                <div className="h-8 w-8 bg-gray-200 rounded"></div>
            </div>

            {/* Calendar grid skeleton */}
            <div className="space-y-4">
                {/* Month navigation */}
                <div className="flex items-center justify-between mb-4">
                    <div className="h-6 bg-gray-200 rounded w-24"></div>
                    <div className="flex gap-2">
                        <div className="h-8 w-8 bg-gray-200 rounded"></div>
                        <div className="h-8 w-8 bg-gray-200 rounded"></div>
                    </div>
                </div>

                {/* Days of week */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                    {[...Array(7)].map((_, i) => (
                        <div key={i} className="h-8 bg-gray-200 rounded"></div>
                    ))}
                </div>

                {/* Calendar dates */}
                <div className="grid grid-cols-7 gap-2">
                    {[...Array(35)].map((_, i) => (
                        <div key={i} className="h-10 bg-gray-100 rounded"></div>
                    ))}
                </div>

                {/* Time slots skeleton */}
                <div className="mt-8 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-12 bg-gray-100 rounded"></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

/**
 * Book a Meeting Component
 * 
 * This component allows users to schedule a free consultation meeting with WRTeam.
 * It includes:
 * - A prominent heading
 * - Two WhatsApp-style contact cards for phone numbers
 * - A WRTeam branding card with meeting details
 * - Calendly calendar embed for scheduling with skeleton loader
 * 
 * Note: Calendly script is loaded globally in layout.tsx
 * The widget uses the standard Calendly inline widget approach with data-url attribute
 */
const BookAMeeting: React.FC = () => {
    const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false)
    const calendlyRef = useRef<HTMLDivElement>(null)

    // Check if Calendly widget has loaded
    useEffect(() => {
        let checkInterval: NodeJS.Timeout
        let timeoutId: NodeJS.Timeout

        const checkCalendlyLoaded = () => {
            if (calendlyRef.current) {
                // Check if widget has iframe content (Calendly creates an iframe)
                const widgetIframe = calendlyRef.current.querySelector('iframe')
                if (widgetIframe && widgetIframe.src) {
                    setIsCalendlyLoaded(true)
                    
                    // Hide scrollbar on the iframe
                    try {
                        widgetIframe.style.overflow = 'hidden'
                        // Also try to hide scrollbar via CSS classes
                        if (calendlyRef.current) {
                            calendlyRef.current.style.overflow = 'hidden'
                        }
                    } catch (e) {
                        // Cross-origin restrictions may prevent iframe style changes
                        console.log('Could not modify iframe styles due to cross-origin restrictions')
                    }
                    
                    if (checkInterval) clearInterval(checkInterval)
                    if (timeoutId) clearTimeout(timeoutId)
                    return true
                }
            }
            return false
        }

        // Start checking after a short delay to allow script to load
        const startChecking = setTimeout(() => {
            // Check immediately
            if (!checkCalendlyLoaded()) {
                // Check periodically until loaded (max 10 seconds)
                checkInterval = setInterval(() => {
                    if (checkCalendlyLoaded()) {
                        clearInterval(checkInterval)
                    }
                }, 500)

                // Fallback: hide skeleton after 10 seconds even if not detected
                timeoutId = setTimeout(() => {
                    setIsCalendlyLoaded(true)
                    if (checkInterval) clearInterval(checkInterval)
                }, 10000)
            }
        }, 1000)

        // Cleanup
        return () => {
            clearTimeout(startChecking)
            if (checkInterval) clearInterval(checkInterval)
            if (timeoutId) clearTimeout(timeoutId)
        }
    }, [])

    return (
        <Layout>
            <div className="min-h-screen bg-[#F2F6FF] py-4 md:py-6 lg:py-8">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                        {/* Left Column - Title, WhatsApp Cards, Branding and Meeting Details */}
                        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4">
                            {/* Logo Section */}
                            {/* <div className="pb-4">
                                <Image
                                    src={logo}
                                    width={0}
                                    height={0}
                                    alt="WRTeam Logo"
                                    className="w-[120px] md:w-[150px] h-auto"
                                />
                            </div> */}


                            {/* Divider */}
                            {/* <div className="border-t border-gray-200"></div> */}
                            {/* Main Heading */}
                            <div className="text-center lg:text-left">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold textPrimary mb-3 leading-tight">
                                    Book Your  {' '}
                                    <span className="primaryColor">Free Product </span>
                                    Consultation
                                </h1>
                            </div>

                            {/* WhatsApp Contact Cards */}
                            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                
                                <div className="flexColCenter gap-3 text-center border border-[#e5e7eb] py-5 px-5 rounded-xl transition-all duration-300 hover:shadow-lg overflow-hidden bg-gray-50 hover:border-[#2e71fe] hover:scale-[1.02]">
                                    <div className="w-[56px] h-[56px] flexCenter bg-[#25D366] text-white rounded-full shadow-md">
                                        <FaWhatsapp size={32} />
                                    </div>
                                    <span className="font-semibold text-sm text-gray-800">WhatsApp</span>
                                    <Link
                                        href={'tel:+91 97979 45459'}
                                        className="text-[#2e71fe] hover:underline font-semibold text-sm transition-colors"
                                    >
                                        +91 97979 45459
                                    </Link>
                                </div>
                                <div className="flexColCenter gap-3 text-center border border-[#e5e7eb] py-5 px-5 rounded-xl transition-all duration-300 hover:shadow-lg overflow-hidden bg-gray-50 hover:border-[#2e71fe] hover:scale-[1.02]">
                                    <div className="w-[56px] h-[56px] flexCenter bg-[#25D366] text-white rounded-full shadow-md">
                                        <FaWhatsapp size={32} />
                                    </div>
                                    <span className="font-semibold text-sm text-gray-800">WhatsApp</span>
                                    <Link
                                        href={'tel:+91 97124 45459'}
                                        className="text-[#2e71fe] hover:underline font-semibold text-sm transition-colors"
                                    >
                                        +91 97124 45459
                                    </Link>
                                </div>
                            </div> */}


                            {/* Meeting Title */}
                            <h2 className="text-lg md:text-xl font-bold textPrimary">
                                30 Minutes Meeting
                            </h2>

                            {/* Meeting Details with Icons */}
                            <div className="space-y-3">
                                {/* Duration */}
                                {/* <div className="flex items-center gap-3 p-3 commonBg rounded-lg">
                                    <div className="w-10 h-10 flexCenter bg-white rounded-lg shadow-sm">
                                        <HiClock className="primaryColor text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-base textPrimary">30 min</p>
                                    </div>
                                </div> */}

                                {/* Video Conferencing */}
                                <div className="flex items-center gap-3 p-2.5 commonBg rounded-lg">
                                    <div className="w-9 h-9 flexCenter bg-white rounded-lg shadow-sm flex-shrink-0">
                                        <MdVideoCall className="primaryColor text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-xs md:text-sm textSecondary leading-relaxed">
                                            Web conferencing details provided upon confirmation
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 pt-4"></div>

                            {/* During the demo section */}
                            <div className="space-y-3">
                                <h3 className="text-base md:text-lg font-bold textPrimary capitalize">
                                    During the demo, you'll...
                                </h3>

                                {/* List of points */}
                                <ul className="space-y-2.5">
                                    <li className="flex items-start gap-2.5">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <FaCheckCircle className="primaryColor text-base" />
                                        </div>
                                        <p className="textSecondary text-xs md:text-sm leading-relaxed">
                                            30-minute personalized consultation
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <FaCheckCircle className="primaryColor text-base" />
                                        </div>
                                        <p className="textSecondary text-xs md:text-sm leading-relaxed">
                                            Understand your requirements and business goals
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <FaCheckCircle className="primaryColor text-base" />
                                        </div>
                                        <p className="textSecondary text-xs md:text-sm leading-relaxed">
                                            Live short demo of solutions (Apps, Admin Panels, website)
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <FaCheckCircle className="primaryColor text-base" />
                                        </div>
                                        <p className="textSecondary text-xs md:text-sm leading-relaxed">
                                            Best tech-stack recommendations
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column - Calendly Calendar */}
                        <div className="w-full bg-white rounded-2xl border border-[#e5e7eb shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                            <div className="relative overflow-hidden">
                                {/* Show skeleton while loading */}
                                {!isCalendlyLoaded && <CalendlySkeleton />}

                                {/* Calendly widget */}
                                <div
                                    ref={calendlyRef}
                                    className={`calendly-inline-widget ${!isCalendlyLoaded ? 'hidden' : 'block'} overflow-hidden`}
                                    data-url="https://calendly.com/wrteam-sales/30min"
                                    style={{ minWidth: '320px', height: '900px', width: '100%', overflow: 'hidden', margin:"0px !important" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BookAMeeting

