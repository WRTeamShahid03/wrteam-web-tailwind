import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        // Read the HTML file from the landing-pages directory
        const htmlFilePath = path.join(process.cwd(), 'src/landing-pages/extended-license-sale/index.html');

        // Check if file exists before reading
        if (!fs.existsSync(htmlFilePath)) {
            return new Response('HTML file not found', {
                status: 404,
                headers: {
                    'Content-Type': 'text/plain',
                },
            });
        }

        let htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

        // Replace all asset paths from /_next/ to /extended-license-sale/_next/
        // This fixes the 404 errors for CSS, JS, and media files
        // The assets are located in public/extended-license-sale/_next/ but HTML references /_next/
        htmlContent = htmlContent.replace(/\/_next\//g, '/extended-license-sale/_next/');

        // Inject cleanup script to remove google-site-verification text leak
        const cleanupScript = `
        <script>
          (function() {
            function cleanup() {
              var walker = document.createTreeWalker(document.body, 4, null);
              var node; while (node = walker.nextNode()) {
                if (node.textContent.includes('google-site-verification')) node.textContent = '';
              }
            }
            cleanup(); setTimeout(cleanup, 100);
            new MutationObserver(cleanup).observe(document.body, { childList: true, subtree: true, characterData: true });
          })();
        </script>`;

        htmlContent = htmlContent.replace('</body>', cleanupScript + '</body>');

        // Return the HTML content with proper headers
        return new Response(htmlContent, {
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
            },
        });
    } catch (error) {
        // Handle any errors that occur during file reading
        console.error('Error serving extended-sale page:', error);
        return new Response('Internal Server Error', {
            status: 500,
            headers: {
                'Content-Type': 'text/plain',
            },
        });
    }
}
