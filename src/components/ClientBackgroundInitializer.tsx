'use client'

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Client component for initializing background colors
export default function ClientBackgroundInitializer() {
  const pathname = usePathname();
  
  useEffect(() => {
    if (pathname === '/free-source-code' || pathname === '/11-offer-page') {
      document.body.style.backgroundColor = "#090909";
    }
    else if (pathname === '/thank-you') {
      document.body.style.backgroundColor = "#0e1422";
    } else {
      document.body.style.backgroundColor = "initial";
    }
  }, [pathname]);
  
  return null;
} 