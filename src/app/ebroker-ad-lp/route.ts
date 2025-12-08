import fs from 'fs';
import path from 'path';

export async function GET() {
    const htmlFilePath = path.join(process.cwd(), 'src/landing-pages/ebroker-ad-lp/index.html');
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

    return new Response(htmlContent, {
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
        },
    });
}
