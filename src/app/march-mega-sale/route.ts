import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        // Read the HTML file from the landing-pages directory
        const htmlFilePath = path.join(process.cwd(), 'src/landing-pages/march-mega-sale/index.html');

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

        // NOTE: Unlike other landing pages, march-mega-sale HTML already has
        // /march-mega-sale/_next/ paths pre-baked, so no path replacement needed.

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
        console.error('Error serving march-mega-sale page:', error);
        return new Response('Internal Server Error', {
            status: 500,
            headers: {
                'Content-Type': 'text/plain',
            },
        });
    }
}
