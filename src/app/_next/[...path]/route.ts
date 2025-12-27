import fs from 'fs';
import path from 'path';

// This route intercepts requests to /_next/ and serves them from the appropriate subdirectory
// based on the referer header or by checking which directory has the file
export async function GET(
    request: Request,
    { params }: { params: Promise<{ path: string[] }> }
) {
    try {
        const { path: pathSegments } = await params;
        const filePath = pathSegments.join('/');
        
        // Get the referer to determine which page is requesting the asset
        const referer = request.headers.get('referer') || '';
        
        // Determine which subdirectory to use based on referer
        let subdirectory = '';
        if (referer.includes('/year-end-sale')) {
            subdirectory = 'year-end-sale';
        } else if (referer.includes('/ebroker-ad-lp')) {
            subdirectory = 'ebroker-ad-lp';
        } else {
            // If no referer or unknown, try to find the file in any subdirectory
            // Try year-end-sale first, then ebroker-ad-lp
            const yearEndSalePath = path.join(process.cwd(), 'public', 'year-end-sale', '_next', filePath);
            const ebrokerPath = path.join(process.cwd(), 'public', 'ebroker-ad-lp', '_next', filePath);
            
            if (fs.existsSync(yearEndSalePath)) {
                subdirectory = 'year-end-sale';
            } else if (fs.existsSync(ebrokerPath)) {
                subdirectory = 'ebroker-ad-lp';
            } else {
                return new Response('File not found', { status: 404 });
            }
        }
        
        // Build the full file system path
        const fullPath = path.join(process.cwd(), 'public', subdirectory, '_next', filePath);
        
        // Security check: ensure the path is within the public directory
        const publicPath = path.join(process.cwd(), 'public', subdirectory);
        const resolvedPath = path.resolve(fullPath);
        const resolvedPublicPath = path.resolve(publicPath);
        
        if (!resolvedPath.startsWith(resolvedPublicPath)) {
            return new Response('Forbidden', { status: 403 });
        }
        
        // Check if file exists
        if (!fs.existsSync(resolvedPath)) {
            return new Response('File not found', { status: 404 });
        }
        
        // Read the file
        const fileContent = fs.readFileSync(resolvedPath);
        
        // Determine content type based on file extension
        const ext = path.extname(resolvedPath).toLowerCase();
        let contentType = 'application/octet-stream';
        
        if (ext === '.css') contentType = 'text/css';
        else if (ext === '.js') contentType = 'application/javascript';
        else if (ext === '.json') contentType = 'application/json';
        else if (ext === '.svg') contentType = 'image/svg+xml';
        else if (ext === '.png') contentType = 'image/png';
        else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
        else if (ext === '.webp') contentType = 'image/webp';
        else if (ext === '.gif') contentType = 'image/gif';
        else if (ext === '.ico') contentType = 'image/x-icon';
        
        // Return the file with appropriate headers
        return new Response(fileContent, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error('Error serving static asset from /_next:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

