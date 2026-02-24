'use client';

import { useEffect } from 'react';

export default function ClientCleanup() {
  useEffect(() => {
    // Add a small delay to ensure DOM is fully loaded
    const cleanup = () => {
      // Use TreeWalker to find all text nodes in the document
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null
      );

      let node;
      while (node = walker.nextNode()) {
        if (node.textContent?.includes('google-site-verification')) {
          // console.log('Found verification text nested:', node.textContent);
          node.textContent = ''; // remove it
        }
      }
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
