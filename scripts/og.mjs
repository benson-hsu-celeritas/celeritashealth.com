// OG image from the brand vector only: reversed wordmark on slate, no text that needs a font.
import sharp from 'sharp';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
const wm = readFileSync('brand/wordmark-reversed.svg', 'utf8').replace(/<metadata>[\s\S]*?<\/metadata>/, '').replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#2E3A47"/>
<svg x="120" y="283" width="960" height="64" viewBox="0 -20 11506 760">${wm}</svg>
<rect x="120" y="372" width="960" height="2" fill="#FFFFFF" opacity="0.35"/>
</svg>`;
const out = existsSync('dist') ? 'dist/og.png' : 'public/og.png';
await sharp(Buffer.from(svg)).png().toFile(out);
console.log(`OG image written to ${out}`);
