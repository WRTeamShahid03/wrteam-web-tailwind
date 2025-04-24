import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse, UrlWithParsedQuery } from 'url';
import next from 'next';
import fs from 'fs';
import path from 'path';

const dev: boolean = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port: number = parseInt(process.env.NODE_PORT || '8003', 10);

app.prepare().then(() => {
  createServer((req: IncomingMessage, res: ServerResponse) => {
    const parsedUrl: UrlWithParsedQuery = parse(req.url as string, true);
    const { pathname, query } = parsedUrl;
    
    if (pathname?.startsWith('/.well-known')) {
      const filePath: string = path.join(process.cwd(), pathname.substring(1));
      try {
        const fileContent: string = fs.readFileSync(filePath, 'utf-8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(fileContent);
        return;
      } catch (error) {
        console.error(error);
        res.writeHead(404);
        res.end('Not Found');
        return;
      }
    }
    
    handle(req, res, parsedUrl);
  }).listen(port, (err?: Error) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});