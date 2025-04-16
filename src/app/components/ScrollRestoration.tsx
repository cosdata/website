'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollRestoration component
 * 
 * Automatically scrolls to the top of the page when the route changes
 * or when the component mounts to fix scrolling issues with browser's 
 * back button behavior.
 */
export default function ScrollRestoration() {
  const pathname = usePathname();
  
  useEffect(() => {
    // Scroll to top when pathname changes (route navigation) or component mounts
    window.scrollTo(0, 0);
  }, [pathname]);
  
  // This component doesn't render anything
  return null;
} 