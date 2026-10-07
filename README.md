# Adv. Kiran Nikam & Associates

Website for Adv. Kiran Nikam & Associates, Advocates & Legal Consultants, Mumbai.

React 19 · TypeScript · Vite · Tailwind CSS 4 · React Router · Motion · Lucide.

## Development

```bash
npm install
npm run dev       # local development server
npm run build     # type-check and production build into dist/
npm run preview   # serve the production build
```

## Where things live

| What | Where |
| --- | --- |
| Firm details, address, email, navigation, **production domain (`SITE_URL`)** | `src/data/site.ts` |
| Page titles and descriptions, structured data | `src/data/seo.ts` |
| Practice areas, team, courts, principles, process | `src/data/*.ts` |
| Design tokens (colours, fonts, utilities) | `src/styles/globals.css` |

## Build output

`seo.plugin.ts` writes a static HTML entry for every route (`/about/index.html` and `/about.html`) with that page's title, description, canonical URL and Open Graph tags, plus `sitemap.xml`, `robots.txt` and a `noindex` `404.html`. Any static host works; no rewrite rules are required.

To serve the site from a subfolder, set `BASE_PATH` at build time, for example `BASE_PATH=/advkirannikam/ npm run build`. `.github/workflows/deploy.yml` does this and publishes to GitHub Pages on every push to `main`.

## Images

Source photographs are in `photos/pics/` and `scripts/source/`. To regenerate the optimised WebP files after changing a photograph:

```bash
python3 scripts/process-images.py   # requires Pillow
```

To add a photograph for a team member, export it into `src/assets/images/`, register it in `src/assets/index.ts`, and set `photo` on the member in `src/data/team.ts`. Until then, members without a photograph show an initials monogram.

The Bombay High Court exterior photographs are by A.Savin (Wikimedia Commons), used under the Free Art License 1.3 and credited on the Disclaimer page.
