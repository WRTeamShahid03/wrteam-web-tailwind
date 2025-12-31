import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        // Read the HTML file from the landing-pages directory
        const htmlFilePath = path.join(process.cwd(), 'src/landing-pages/new-year-sale/index.html');
        
        // Debug: Log the current working directory and file path
        console.log('Current working directory:', process.cwd());
        console.log('Looking for HTML file at:', htmlFilePath);
        
        // Check if file exists before reading
        if (!fs.existsSync(htmlFilePath)) {
            console.error('HTML file not found at:', htmlFilePath);
            // Try alternative path
            const altPath = path.join(process.cwd(), 'landing-pages/new-year-sale/index.html');
            console.log('Trying alternative path:', altPath);
            if (fs.existsSync(altPath)) {
                console.log('Found file at alternative path');
                const htmlContent = fs.readFileSync(altPath, 'utf-8');
                const processedContent = htmlContent.replace(/\/_next\//g, '/new-year-sale/_next/');
                return new Response(processedContent, {
                    headers: {
                        'Content-Type': 'text/html; charset=utf-8',
                    },
                });
            }
            return new Response('HTML file not found', { 
                status: 404,
                headers: {
                    'Content-Type': 'text/plain',
                },
            });
        }

        let htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

        // Replace all asset paths from /_next/ to /new-year-sale/_next/
        // This fixes the 404 errors for CSS, JS, and media files
        // The assets are located in public/new-year-sale/_next/ but HTML references /_next/
        htmlContent = htmlContent.replace(/\/_next\//g, '/new-year-sale/_next/');

        // Return the HTML content with proper headers
        return new Response(htmlContent, {
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
            },
        });
    } catch (error) {
        // Handle any errors that occur during file reading
        console.error('Error serving new-year-sale page:', error);
        return new Response('Internal Server Error', { 
            status: 500,
            headers: {
                'Content-Type': 'text/plain',
            },
        });
    }
}
