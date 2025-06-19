'use client';

import { useEffect } from 'react';

export default function ClientCleanup() {
  useEffect(() => {
    // Add a small delay to ensure DOM is fully loaded
    const cleanup = () => {
      // Check all body children and remove suspicious text nodes
      const bodyChildren = Array.from(document.body.childNodes);
      let found = false;
      
      bodyChildren.forEach((node) => {
        if (
          node.nodeType === Node.TEXT_NODE &&
          node.textContent?.includes('google-site-verification')
        ) {
          // console.log('Found verification text:', node.textContent);
          node.textContent = ''; // remove it
          found = true;
        }
      });

      // if (!found) {
      //   console.log('No verification text found');
      // }
    };

    // Run cleanup after a short delay
    setTimeout(cleanup, 100);

    // Also run cleanup when DOM changes
    const observer = new MutationObserver(cleanup);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
