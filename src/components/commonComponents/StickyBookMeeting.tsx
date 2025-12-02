'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaCalendarAlt } from 'react-icons/fa'

/**
 * Sticky Book Meeting Component
 * 
 * A floating button on the right side (middle) of the screen.
 * Shows only calendar icon initially, expands to show "Book Meeting" text on hover with slide effect.
 * Clicking navigates directly to the booking page.
 */
const StickyBookMeeting = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href="/book-a-meeting"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[45] flex items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Button - expands on hover */}
      <div className="bg-[#2e71fe] text-white rounded-l-full shadow-lg flex items-center gap-2 cursor-pointer hover:bg-[#2563eb] transition-all duration-300 hover:shadow-xl overflow-hidden">
        {/* Calendar Icon - always visible */}
        <div className="p-4 flex items-center justify-center">
          <FaCalendarAlt className="text-xl md:text-2xl" />
        </div>
        
        {/* Text - slides in on hover */}
        <div 
          className={`transition-all duration-300 ease-in-out ${
            isHovered 
              ? 'max-w-[200px] opacity-100 pr-4' 
              : 'max-w-0 opacity-0 pr-0 overflow-hidden'
          }`}
        >
          <span className="font-semibold whitespace-nowrap text-sm md:text-base">
            Book Meeting
          </span>
        </div>
      </div>
    </Link>
  )
}

export default StickyBookMeeting

