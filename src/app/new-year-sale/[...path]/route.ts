import fs from 'fs';
import path from 'path';

// This route handles all static asset requests for the new-year-sale page
// It serves files from public/new-year-sale/_next/ when requested at /new-year-sale/_next/
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
        // Files are located in public/new-year-sale/_next/...
        const fullPath = path.join(process.cwd(), 'public', 'new-year-sale', filePath);
        
        // Security check: ensure the path is within the public/new-year-sale directory
        const publicNewYearSalePath = path.join(process.cwd(), 'public', 'new-year-sale');
        const resolvedPath = path.resolve(fullPath);
        const resolvedPublicPath = path.resolve(publicNewYearSalePath);
        
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
