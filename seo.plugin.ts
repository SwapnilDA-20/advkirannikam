import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { Plugin, ResolvedConfig } from 'vite';
import { OG_IMAGE, canonicalFor, metaFor, notFoundMeta, pages, structuredData, type PageMeta } from './src/data/seo.ts';
import { heroImageFor } from './src/data/heroImage.ts';
import { SITE_URL, firm } from './src/data/site.ts';

const START = '<!--seo:start-->';
const END = '<!--seo:end-->';

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function headTags(meta: PageMeta, { noindex = false, base = '/' } = {}): string {
  const heroImage = heroImageFor(base);
  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);
  const url = canonicalFor(meta.path);
  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    noindex ? `<meta name="robots" content="noindex, follow" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeAttr(firm.name)}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeAttr(firm.name)} — Advocates &amp; Legal Consultants, Mumbai" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`,
  ];
  if (meta.path === '/') {
    tags.push(
      `<link rel="preload" as="image" type="image/webp" href="${heroImage.src}" imagesrcset="${heroImage.srcSet}" imagesizes="${heroImage.sizes}" fetchpriority="high" />`,
    );
  }
  return `${START}\n    ${tags.join('\n    ')}\n    ${END}`;
}

function replaceHead(html: string, meta: PageMeta, options?: { noindex?: boolean; base?: string }): string {
  const start = html.indexOf(START);
  const end = html.indexOf(END);
  if (start === -1 || end === -1) throw new Error('SEO markers missing from index.html');
  return html.slice(0, start) + headTags(meta, options) + html.slice(end + END.length);
}

function sitemap(): string {
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map(
      (p) =>
        `  <url>\n    <loc>${canonicalFor(p.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p.priority.toFixed(1)}</priority>\n  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

const robots = () => `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;

/**
 * Injects per-route metadata into index.html and, at build time, emits a static
 * HTML entry for every route plus sitemap.xml, robots.txt and 404.html.
 */
const routeModules: Record<string, string> = {
  '/about': 'About',
  '/practice-areas': 'PracticeAreas',
  '/legal-team': 'LegalTeam',
  '/courts': 'Courts',
  '/contact': 'Contact',
  '/disclaimer': 'Disclaimer',
};

export function seo(): Plugin {
  let config: ResolvedConfig;
  /** Route path → JS files to modulepreload, so lazy pages do not wait on the entry chunk. */
  const routeChunks = new Map<string, string[]>();
  return {
    name: 'kn-seo',
    configResolved(resolved) {
      config = resolved;
    },
    generateBundle(_options, bundle) {
      for (const [route, name] of Object.entries(routeModules)) {
        const chunk = Object.values(bundle).find(
          (c) => c.type === 'chunk' && c.facadeModuleId?.endsWith(`/src/pages/${name}.tsx`),
        );
        if (chunk && chunk.type === 'chunk') routeChunks.set(route, [chunk.fileName, ...chunk.imports]);
      }
    },
    transformIndexHtml(html) {
      return html.replace('<!--seo-->', headTags(metaFor('/'), { base: config.base }));
    },
    configureServer(server) {
      server.middlewares.use('/sitemap.xml', (_req, res) => {
        res.setHeader('Content-Type', 'application/xml');
        res.end(sitemap());
      });
      server.middlewares.use('/robots.txt', (_req, res) => {
        res.setHeader('Content-Type', 'text/plain');
        res.end(robots());
      });
    },
    async closeBundle() {
      if (config.command !== 'build') return;
      const outDir = path.resolve(config.root, config.build.outDir);
      const html = await readFile(path.join(outDir, 'index.html'), 'utf8');

      for (const page of pages) {
        if (page.path === '/') continue;
        const dir = path.join(outDir, page.path);
        await mkdir(dir, { recursive: true });
        let pageHtml = replaceHead(html, page, { base: config.base });
        const preloads = (routeChunks.get(page.path) ?? [])
          .filter((file) => !html.includes(`/${file}"`))
          .map((file) => `<link rel="modulepreload" crossorigin href="${config.base}${file}">`)
          .join('\n    ');
        if (preloads) pageHtml = pageHtml.replace('</head>', `  ${preloads}\n  </head>`);
        // Both forms, so `/about` resolves on hosts with and without directory indexes.
        await writeFile(path.join(dir, 'index.html'), pageHtml);
        await writeFile(`${dir}.html`, pageHtml);
      }
      await writeFile(path.join(outDir, '404.html'), replaceHead(html, notFoundMeta, { noindex: true, base: config.base }));
      await writeFile(path.join(outDir, 'sitemap.xml'), sitemap());
      await writeFile(path.join(outDir, 'robots.txt'), robots());
    },
  };
}
