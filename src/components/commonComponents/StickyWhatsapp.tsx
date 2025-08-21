'use client'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

const StickyWhatsapp = () => {

    return (
        <div className="fixed bottom-3 right-7 z-50">
            {/* WhatsApp Button - Green background with rounded corners */}
            <Link
                href={`https://wa.me/+916359302924?text=I%20want%20to%20buy%20script`}
                target='_blank'
                className="flex items-center gap-1 bg-[#4dc247] text-white px-3 py-3 rounded-full shadow-lg"
                aria-label="Start a WhatsApp chat"
            >
                <FaWhatsapp className='text-3xl' />

                {/* "Start a Chat" Text */}
                <span className="font-semibold">Start a Chat</span>
            </Link>
        </div>
    )
}

export default StickyWhatsapp
