import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        // Read the HTML file from the landing-pages directory
        const htmlFilePath = path.join(process.cwd(), 'src/landing-pages/year-end-sale/index.html');
        
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

        // Replace all asset paths from /_next/ to /year-end-sale/_next/
        // This fixes the 404 errors for CSS, JS, and media files
        // The assets are located in public/year-end-sale/_next/ but HTML references /_next/
        htmlContent = htmlContent.replace(/\/_next\//g, '/year-end-sale/_next/');

        // Return the HTML content with proper headers
        return new Response(htmlContent, {
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
            },
        });
    } catch (error) {
        // Handle any errors that occur during file reading
        console.error('Error serving year-end-sale page:', error);
        return new Response('Internal Server Error', { 
            status: 500,
            headers: {
                'Content-Type': 'text/plain',
            },
        });
    }
}

