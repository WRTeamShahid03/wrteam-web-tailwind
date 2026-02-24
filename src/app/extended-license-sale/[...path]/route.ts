import fs from 'fs';
import path from 'path';

// This route handles all static asset requests for the extended-sale page
// It serves files from public/extended-license-sale/_next/ when requested at /extended-license-sale/_next/
export async function GET(
    request: Request,
    { params }: { params: Promise<{ path: string[] }> }
) {
    try {
        const { path: pathSegments } = await params;
        
        // Reconstruct the full path
        // pathSegments will be something like ['_next', 'static', 'css', 'file.css']
        const filePath = pathSegments.join('/');
        
        // Build the full file system path
        // Files are located in public/extended-license-sale/_next/...
        const fullPath = path.join(process.cwd(), 'public', 'extended-license-sale', filePath);
        
        // Security check: ensure the path is within the public/extended-license-sale directory
        const publicEbrokerPath = path.join(process.cwd(), 'public', 'extended-license-sale');
        const resolvedPath = path.resolve(fullPath);
        const resolvedPublicPath = path.resolve(publicEbrokerPath);
        
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
        console.error('Error serving static asset:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

