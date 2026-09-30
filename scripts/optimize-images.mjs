import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const assets = path.join(root, 'public/assets');
const originals = path.join(root, 'src/assets/originals');
const projects = [
  ['imgcarouselBipbip01.png', 'bipbip'],
  ['imgcarouselLumi02-1.png', 'lumi'],
  ['imgcarousel_D_nde_comemos_hoy_03.png', 'dining'],
  ['imgcarouselgdo04.png', 'solar'],
];
for (const [source, name] of projects) {
  for (const width of [800, 1600]) {
    await sharp(path.join(root, 'src/imports', source)).resize({ width, withoutEnlargement: true }).webp({ quality: 88, effort: 6 }).toFile(path.join(assets, `${name}-${width}.webp`));
  }
}
for (const [name, width] of [['cover', 2400], ['portrait', 640], ['chicken', 683], ['portrait-right', 1024], ['portrait-left', 768]]) {
  await sharp(path.join(originals, `${name}.png`)).resize({ width, withoutEnlargement: true }).webp({ quality: name === 'cover' ? 93 : 90, effort: 6 }).toFile(path.join(assets, `${name}.webp`));
}
const uri = async (file, type) => `data:${type};base64,${(await fs.readFile(file)).toString('base64')}`;
const cover = await uri(path.join(originals, 'cover.png'), 'image/png');
const wordmarkFile = path.join(assets, 'wordmark.svg');
const wordmark = await uri(wordmarkFile, 'image/svg+xml');
const wordmarkSvg = await fs.readFile(wordmarkFile, 'utf8');
const wordmarkWidth = /width="([\d.]+)"/.exec(wordmarkSvg)[1];
const wordmarkHeight = /height="([\d.]+)"/.exec(wordmarkSvg)[1];
const cross = await uri(path.join(assets, '1b99c.svg'), 'image/svg+xml');
const social = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#0d0b0c"/>
<svg x="36" y="62" width="760" height="455" viewBox="302 700 2610 1560"><image href="${cover}" width="3000" height="3000"/></svg>
<g transform="translate(616 258) rotate(13.44) scale(.65)"><image href="${cross}" x="-146.4605" y="-146.4605" width="292.921" height="292.921"/></g>
<g transform="translate(872 174) scale(.85)"><image href="${wordmark}" width="${wordmarkWidth}" height="${wordmarkHeight}"/></g>
<text x="872" y="388" fill="#fefefe" font-family="sans-serif" font-size="25" font-weight="600">UX/UI Designer</text>
<text x="872" y="426" fill="#b5adb1" font-family="sans-serif" font-size="19">Interactive Media Design</text>
<rect x="48" y="554" width="64" height="5" fill="#ff0103"/>
<text x="132" y="566" fill="#fefefe" font-family="sans-serif" font-size="23">Selected work · Portfolio</text>
</svg>`;
await sharp(Buffer.from(social)).png().toFile(path.join(root, 'public/og-image.png'));
const sizes = await Promise.all(projects.map(async ([, name]) => (await fs.stat(path.join(assets, `${name}-1600.webp`))).size));
console.log(`Generated responsive images and 1200×630 social preview. Full-size project images: ${(sizes.reduce((a, b) => a + b, 0) / 1_000_000).toFixed(2)} MB.`);
