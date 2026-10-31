// Dark variants of the Canva-drawn figures: the light export (transparent background, palette colours only)
// is recoloured pixel by pixel onto the dark tokens. One Canva source, two files. Run after exporting a new light PNG.
import sharp from 'sharp';
import { readdirSync } from 'node:fs';
const MAP = [ // light -> dark, from brand/palette.json and src/styles/global.css
  [[0x16, 0x16, 0x16], [0xEC, 0xE9, 0xE1]], // ink
  [[0x5B, 0x64, 0x70], [0xA8, 0xB0, 0xBA]], // muted
  [[0xD9, 0xD9, 0xD9], [0x3A, 0x42, 0x4C]], // rule
  [[0xB0, 0x48, 0x2F], [0xD9, 0x69, 0x4E]], // rubric
  [[0xFF, 0xFF, 0xFF], [0x1C, 0x20, 0x26]], // surface
];
const nearest = (r, g, b) => MAP.reduce((best, m) => { const d = (r - m[0][0]) ** 2 + (g - m[0][1]) ** 2 + (b - m[0][2]) ** 2; return d < best.d ? { d, m } : best; }, { d: Infinity, m: MAP[0] }).m;
for (const f of readdirSync('public/figures').filter((f) => f.endsWith('-light.png'))) {
  const src = `public/figures/${f}`, out = src.replace('-light.png', '-dark.png');
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) continue;
    const [, dark] = nearest(data[i], data[i + 1], data[i + 2]);
    data[i] = dark[0]; data[i + 1] = dark[1]; data[i + 2] = dark[2];
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png({ compressionLevel: 9, palette: true }).toFile(out);
  console.log(`${out} written from ${f}`);
}
