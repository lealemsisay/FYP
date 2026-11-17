import fs from 'node:fs';
import path from 'node:path';

const raw = fs.readFileSync(path.resolve('..', 'edlegna_landing_page', 'code.html'), 'utf8');
const main = raw.match(/<main\b([^>]*)>([\s\S]*?)<\/main>/)[2];
const idx = main.indexOf('Get Started</span>');
console.log('ORIGINAL:', JSON.stringify(main.slice(idx - 400, idx + 120)));

let output = main;
output = output.replace(/<a\b([^>]*)>/g, (_, attrs) => {
  const pathMatch = attrs.match(/\sdata-path="([^"]+)"/);
  let nextAttrs = attrs.replace(/\sdata-path="[^"]*"/g, '');
  const routes = { 'sign-up': '/register' };
  const mapped = pathMatch ? routes[pathMatch[1]] : undefined;
  if (mapped) nextAttrs = nextAttrs.replace(/\shref="[^"]*"/, ` href="${mapped}"`);
  return `<Link${nextAttrs}>`;
}).replace(/<\/a>/g, '</Link>');
const idx2 = output.indexOf('Get Started</span>');
console.log('AFTER LINK:', JSON.stringify(output.slice(idx2 - 400, idx2 + 120)));

output = output.replace(/<(\/?)([a-zA-Z][\w-]*)([^>]*?)(\/?)>/g, (match, closing, tagName, attrs, selfClosing) => {
  if (closing) return `</${tagName}>`;
  if (selfClosing) return `<${tagName}${attrs} />`;
  return `<${tagName}${attrs}>`;
});
const idx3 = output.indexOf('Get Started</span>');
console.log('AFTER GENERIC:', JSON.stringify(output.slice(idx3 - 400, idx3 + 120)));
