import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2]);
const outDir = path.resolve(process.argv[3]);
const files = fs.readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join(root, entry.name, 'code.html'))
  .filter((file) => fs.existsSync(file));

const first = fs.readFileSync(files[0], 'utf8');
const configMatch = first.match(/<script id="tailwind-config">([\s\S]*?)<\/script>/);
if (!configMatch) throw new Error('Tailwind config not found');

const configSource = configMatch[1].replace(/^\s*tailwind\.config\s*=\s*/, '').trim().replace(/;$/, '');
const config = new Function(`return (${configSource});`)();
fs.writeFileSync(path.join(outDir, 'tailwind.tokens.json'), JSON.stringify(config, null, 2));

const assets = new Map();
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const matches = html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"[^>]*>/g);
  for (const match of matches) {
    const url = match[1];
    if (!url.startsWith('http')) continue;
    if (!assets.has(url)) {
      const altMatch = match[0].match(/alt="([^"]*)"/);
      const pageName = path.basename(path.dirname(file));
      assets.set(url, { url, alt: altMatch ? altMatch[1] : '', page: pageName });
    }
  }
}

fs.writeFileSync(path.join(outDir, 'assets.json'), JSON.stringify([...assets.values()], null, 2));
console.log(`Extracted ${Object.keys(config.theme.extend).length} token groups and ${assets.size} unique image URLs.`);
