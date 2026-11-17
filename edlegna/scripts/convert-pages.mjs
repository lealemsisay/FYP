import fs from 'node:fs';
import path from 'node:path';

const stitchRoot = path.resolve(process.argv[2] ?? '..');
const appRoot = path.resolve(process.argv[3] ?? '.');

const ROUTES = {
  home: '/',
  scholarships: '/scholarships',
  'how-it-works': '/how-it-works',
  about: '/about',
  resources: '/how-it-works#resources',
  'sign-in': '/login',
  'sign-up': '/register',
  login: '/login',
  dashboard: '/student/dashboard',
  'discover-scholarships': '/student/discover',
  'ai-recommendations': '/student/recommendations',
  'eligibility-checker': '/student/eligibility',
  'saved-scholarships': '/student/saved',
  'search-history': '/student/history',
  'my-profile': '/student/profile',
  notifications: '/student/notifications',
  settings: '/student/settings',
  'add-scholarship': '/admin/scholarships/new',
  'administrator-notifications': '/admin/notifications',
  'audit-and-compliance-reports': '/admin/reports',
  'categories-and-filters': '/admin/categories',
  'eligibility-engine': '/admin/eligibility-criteria',
  'recommendation-analytics': '/admin/recommendation-analytics',
  'scholarship-management': '/admin/scholarships',
  'search-ai-analytics': '/admin/search-analytics',
  'student-management': '/admin/students',
  'system-settings': '/admin/settings',
  'verification-requests': '/admin/students?view=verification',
};

const ATTR_MAP = {
  for: 'htmlFor',
  viewbox: 'viewBox',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-opacity': 'strokeOpacity',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  'fill-opacity': 'fillOpacity',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  preserveaspectratio: 'preserveAspectRatio',
  'preserve-aspect-ratio': 'preserveAspectRatio',
  tabindex: 'tabIndex',
  maxlength: 'maxLength',
  minlength: 'minLength',
  autocomplete: 'autoComplete',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  readonly: 'readOnly',
  srcset: 'srcSet',
  'aria-current': 'aria-current',
};

const VOID_TAGS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

const SVG_TAG_MAP = {
  lineargradient: 'linearGradient',
  radialgradient: 'radialGradient',
  clippath: 'clipPath',
  textpath: 'textPath',
  pattern: 'pattern',
  filter: 'filter',
  fegaussianblur: 'feGaussianBlur',
  femerge: 'feMerge',
  femergenode: 'feMergeNode',
};

function convertStyle(style) {
  const declarations = style
    .split(';')
    .map((entry) => entry.trim())
    .filter(Boolean);
  const pairs = declarations.map((declaration) => {
    const colon = declaration.indexOf(':');
    if (colon < 0) return null;
    const property = declaration.slice(0, colon).trim().replace(/-([a-z])/g, (_, char) => char.toUpperCase());
    const value = declaration.slice(colon + 1).trim();
    return `${property}: ${JSON.stringify(value)}`;
  }).filter(Boolean);
  return `style={{ ${pairs.join(', ')} }}`;
}

function convertAttributes(attrs) {
  let result = attrs;
  result = result.replace(/\bclass=/g, 'className=');
  for (const [from, to] of Object.entries(ATTR_MAP)) {
    if (from === to) continue;
    const pattern = new RegExp(`\\s${from}=`, 'g');
    result = result.replace(pattern, ` ${to}=`);
  }
  result = result.replace(/\sstyle="([^"]*)"/g, (_, value) => ` ${convertStyle(value)}`);
  result = result.replace(/\sselected(\s|>|\/)/g, ' selected$1');
  result = result.replace(/\sselected=""?/g, ' selected');
  result = result.replace(/\schecked(\s|>|\/)/g, ' defaultChecked$1');
  result = result.replace(/\schecked=""?/g, ' defaultChecked');
  result = result.replace(/\sdisabled=""?/g, ' disabled');
  result = result.replace(/\sreadonly=""?/g, ' readOnly');
  result = result.replace(/\son(?:click|submit|change|input|load|mouseover)="[^"]*"/g, '');
  return result;
}

function convertHtmlToJsx(html, options) {
  let output = html;

  output = output.replace(/<script\b[\s\S]*?<\/script>/g, '');
  output = output.replace(/<!--([\s\S]*?)-->/g, (_, comment) => `{/* ${comment.replace(/--/g, '- -')} */}`);

  let usesLink = false;
  let usesAssets = false;

  output = output.replace(/<a\b([^>]*)>/g, (_, attrs) => {
    const pathMatch = attrs.match(/\sdata-path="([^"]+)"/);
    let nextAttrs = attrs.replace(/\sdata-path="[^"]*"/g, '');
    const mapped = pathMatch ? options.routes[pathMatch[1]] ?? ROUTES[pathMatch[1]] : undefined;
    if (mapped) {
      if (/\shref="[^"]*"/.test(nextAttrs)) {
        nextAttrs = nextAttrs.replace(/\shref="[^"]*"/, ` href="${mapped}"`);
      } else {
        nextAttrs += ` href="${mapped}"`;
      }
    }
    usesLink = true;
    return `<Link${nextAttrs}>`;
  }).replace(/<\/a>/g, '</Link>');

  output = output.replace(/<img\b([^>]*?)\/?>/g, (_, attrs) => {
    let nextAttrs = attrs.replace(/\s*\/$/, '');
    const srcMatch = nextAttrs.match(/\ssrc="([^"]+)"/);
    if (srcMatch && /^https?:\/\//.test(srcMatch[1])) {
      const altMatch = nextAttrs.match(/\salt="([^"]*)"/);
      const alt = altMatch ? altMatch[1].toLowerCase() : '';
      const expression = alt.includes('logo') ? 'ASSETS.logo' : 'ASSETS.portraitPlaceholder';
      nextAttrs = nextAttrs.replace(/\ssrc="[^"]+"/, ` src={${expression}}`);
      usesAssets = true;
    }
    return `<img${convertAttributes(nextAttrs)} />`;
  });

  output = output.replace(/<(\/?)([a-zA-Z][\w-]*)([^>]*?)(\/?)>/g, (match, closing, tagName, attrs, selfClosing) => {
    if (tagName === 'img') return match;
    if (tagName === 'script' || tagName === 'style') return '';
    const reactTagName = SVG_TAG_MAP[tagName.toLowerCase()] ?? tagName;
    const converted = convertAttributes(attrs);
    if (closing) return `</${reactTagName}>`;
    if (selfClosing || (reactTagName !== 'Link' && VOID_TAGS.has(reactTagName.toLowerCase()))) return `<${reactTagName}${converted} />`;
    return `<${reactTagName}${converted}>`;
  });

  output = output.replace(/&nbsp;/g, ' ');

  return { output, usesLink, usesAssets };
}

function extractMain(html) {
  const match = html.match(/<main\b([^>]*)>([\s\S]*?)<\/main>/);
  if (!match) throw new Error('No <main> element found');
  return { className: (match[1].match(/class="([^"]*)"/) ?? [])[1] ?? '', content: match[2] };
}

const PAGES = [
  { source: 'edlegna_landing_page', target: 'src/app/page.tsx', layout: 'PublicLayout', mode: 'public', name: 'LandingPage' },
  { source: 'scholarship_explorer_edlegna', target: 'src/app/scholarships/page.tsx', layout: 'PublicLayout', mode: 'public', name: 'ScholarshipsPage', alias: 'src/app/student/discover/page.tsx', aliasLayout: 'StudentLayout', aliasName: 'DiscoverPage' },
  { source: 'scholarship_details_edlegna', target: 'src/app/scholarships/[slug]/page.tsx', layout: 'PublicLayout', mode: 'public', name: 'ScholarshipDetailsPage', alias: 'src/app/student/scholarships/[slug]/page.tsx', aliasLayout: 'StudentLayout', aliasName: 'StudentScholarshipDetailsPage' },
  { source: 'student_sign_in_edlegna', target: 'src/app/login/page.tsx', layout: null, mode: 'auth', name: 'LoginPage' },
  { source: 'student_dashboard_edlegna', target: 'src/app/student/dashboard/page.tsx', layout: 'StudentLayout', mode: 'student', name: 'StudentDashboardPage' },
  { source: 'ai_recommendations_edlegna', target: 'src/app/student/recommendations/page.tsx', layout: 'StudentLayout', mode: 'student', name: 'RecommendationsPage' },
  { source: 'eligibility_checker_edlegna', target: 'src/app/student/eligibility/page.tsx', layout: 'StudentLayout', mode: 'student', name: 'EligibilityPage' },
  { source: 'saved_scholarships_edlegna', target: 'src/app/student/saved/page.tsx', layout: 'StudentLayout', mode: 'student', name: 'SavedScholarshipsPage' },
  { source: 'search_history_edlegna', target: 'src/app/student/history/page.tsx', layout: 'StudentLayout', mode: 'student', name: 'SearchHistoryPage' },
  { source: 'administrator_dashboard_edlegna', target: 'src/app/admin/dashboard/page.tsx', layout: 'AdminLayout', mode: 'admin', name: 'AdminDashboardPage' },
  { source: 'scholarship_management_edlegna', target: 'src/app/admin/scholarships/page.tsx', layout: 'AdminLayout', mode: 'admin', name: 'ScholarshipManagementPage' },
  { source: 'student_management_verification_edlegna', target: 'src/app/admin/students/page.tsx', layout: 'AdminLayout', mode: 'admin', name: 'StudentManagementPage' },
];

function importsFor(layout, usesLink, usesAssets) {
  const lines = [];
  if (usesLink) lines.push("import Link from 'next/link';");
  if (usesAssets) lines.push("import { ASSETS } from '@/lib/assets';");
  if (layout) lines.push(`import { ${layout} } from '@/components/layout/${layout}';`);
  return lines.join('\n');
}

function buildFile(page, overrides = {}) {
  const raw = fs.readFileSync(path.join(stitchRoot, page.source, 'code.html'), 'utf8');
  const { className, content } = extractMain(raw);
  const routeOverrides = page.mode === 'admin'
    ? { dashboard: '/admin/dashboard', notifications: '/admin/notifications', settings: '/admin/settings' }
    : {};
  const converted = convertHtmlToJsx(content, { routes: { ...routeOverrides, ...(overrides.routes ?? {}) } });
  const mainClassName = className.replace(/\bpt-(?:16|20)\b/g, '').trim();
  const layout = overrides.layout ?? page.layout;
  const name = overrides.name ?? page.name;
  const imports = importsFor(layout, converted.usesLink, converted.usesAssets);
  const wrapper = `<div className="${mainClassName}">${converted.output}</div>`;
  const body = layout ? `<${layout}>${wrapper}</${layout}>` : wrapper;

  return `'use client';\n\n${imports}\n\nexport default function ${name}() {\n  return ${body};\n}\n`;
}

let count = 0;
for (const page of PAGES) {
  fs.mkdirSync(path.dirname(path.join(appRoot, page.target)), { recursive: true });
  fs.writeFileSync(path.join(appRoot, page.target), buildFile(page));
  count += 1;
  if (page.alias) {
    fs.mkdirSync(path.dirname(path.join(appRoot, page.alias)), { recursive: true });
    fs.writeFileSync(
      path.join(appRoot, page.alias),
      buildFile(page, { layout: page.aliasLayout, name: page.aliasName }),
    );
    count += 1;
  }
}

console.log(`Generated ${count} page components from Stitch HTML.`);
