import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist/portifolio';
const browser = join(dist, 'browser');
const siteUrl = process.env.SITE_URL?.replace(/\/$/, '');

// GitHub Pages serves 404.html for unknown paths; the CSR shell lets the router resolve them.
const shell = existsSync(join(browser, 'index.csr.html')) ? 'index.csr.html' : 'index.html';
copyFileSync(join(browser, shell), join(browser, '404.html'));
writeFileSync(join(browser, '.nojekyll'), '');

const robots = ['User-agent: *', 'Allow: /'];

if (siteUrl) {
  const { routes } = JSON.parse(readFileSync(join(dist, 'prerendered-routes.json'), 'utf8'));
  const { origin } = new URL(siteUrl);
  // Prerendered route keys already include the base href.
  const urls = Object.keys(routes)
    .map((route) => `  <url><loc>${origin}${route.endsWith('/') ? route : `${route}/`}</loc></url>`)
    .join('\n');
  writeFileSync(
    join(browser, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
  robots.push(`Sitemap: ${siteUrl}/sitemap.xml`);
}

writeFileSync(join(browser, 'robots.txt'), `${robots.join('\n')}\n`);
console.log(
  `postbuild: 404.html (from ${shell}), .nojekyll, robots.txt${siteUrl ? ', sitemap.xml' : ''}`,
);
