// Tiny static server for dist/, used by the audits. No dependencies.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2', '.json': 'application/json', '.txt': 'text/plain', '.xml': 'application/xml', '.ico': 'image/x-icon' };
export function serve(root = 'dist', port = 4321) {
  const srv = createServer(async (req, res) => {
    try {
      let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
      let f = join(root, p);
      let s = await stat(f).catch(() => null);
      if (s?.isDirectory()) { f = join(f, 'index.html'); s = await stat(f).catch(() => null); }
      if (!s && !extname(f)) { f = join(root, p + '.html'); s = await stat(f).catch(() => null); }
      if (!s) { res.writeHead(404, { 'content-type': 'text/html' }); res.end(await readFile(join(root, '404.html')).catch(() => 'not found')); return; }
      res.writeHead(200, { 'content-type': types[extname(f)] || 'application/octet-stream', 'cache-control': 'no-store' });
      res.end(await readFile(f));
    } catch (e) { res.writeHead(500); res.end(String(e)); }
  });
  return new Promise((r) => srv.listen(port, () => r(srv)));
}
if (import.meta.url === `file://${process.argv[1]}`) serve().then(() => console.log('serving dist on http://localhost:4321'));
