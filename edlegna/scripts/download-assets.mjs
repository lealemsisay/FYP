import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2]);
const assets = JSON.parse(fs.readFileSync(path.join(root, 'assets.json'), 'utf8'));

const names = new Map([
  ['Edlegna Official Logo', ['logos', 'edlegna-logo.png']],
  ['Profile', ['images', 'profile-julian.png']],
  ['Dignified close-up', ['images', 'hero-scholar.png']],
  ['Portrait of an Ethiopian male', ['images', 'testimonial-male.png']],
  ['Close up portrait photo of an East African', ['images', 'testimonial-female.png']],
  ['Portrait photo of a young male Ethiopian', ['images', 'testimonial-student.png']],
  ['Oxford', ['images', 'crest-oxford.png']],
  ['DAAD', ['images', 'crest-daad.png']],
  ['Chevening', ['images', 'crest-chevening.png']],
  ['Cambridge', ['images', 'crest-cambridge.png']],
  ['African woman academic advisor', ['images', 'advisor.png']],
  ['young scholarly Ethiopian university woman', ['images', 'profile-selamawit.png']],
]);

function targetFor(asset) {
  for (const [needle, target] of names) {
    if (asset.alt.includes(needle)) return target;
  }
  return ['assets', `asset-${assets.indexOf(asset) + 1}.png`];
}

const manifest = {};
for (const asset of assets) {
  const [folder, filename] = targetFor(asset);
  const destination = path.join(root, 'public', folder, filename);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  const response = await fetch(asset.url);
  if (!response.ok) throw new Error(`Failed ${filename}: ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(destination, buffer);
  manifest[asset.url] = `/${folder}/${filename}`;
  console.log(`${filename} (${buffer.length} bytes)`);
}

fs.writeFileSync(path.join(root, 'asset-manifest.json'), JSON.stringify(manifest, null, 2));
