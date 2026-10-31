// Screenshots for Panel 2: five pages at 390 and 1280 px, light and dark, full page.
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { serve } from './serve.mjs';
const pages = ['/', '/lab/', '/lab/ch-001/', '/advisory/', '/about/'];
const out = process.argv[2] || 'reviews/shots';
mkdirSync(out, { recursive: true });
const srv = await serve('dist', 4322);
const browser = await chromium.launch();
for (const scheme of ['light', 'dark']) for (const width of [390, 1280]) {
  const ctx = await browser.newContext({ viewport: { width, height: width === 390 ? 844 : 800 }, colorScheme: scheme, deviceScaleFactor: 1 });
  for (const p of pages) {
    const page = await ctx.newPage();
    await page.goto(`http://localhost:4322${p}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.querySelectorAll('.sig,[data-rise]').forEach((e) => e.classList.add('in')));
    await page.waitForTimeout(400);
    const name = `${p.replace(/\//g, '_').replace(/^_|_$/g, '') || 'home'}-${width}-${scheme}`;
    await page.screenshot({ path: `${out}/${name}.png`, fullPage: true });
    if (width === 390 && p === '/') await page.screenshot({ path: `${out}/${name}-fold.png`, fullPage: false });
    await page.close();
  }
  await ctx.close();
}
await browser.close(); srv.close();
console.log(`screenshots in ${out}`);
