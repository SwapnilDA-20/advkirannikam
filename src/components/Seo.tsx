import { useEffect } from 'react';
import { OG_IMAGE, canonicalFor, metaFor } from '../data/seo.ts';

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  const el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (el) el.setAttribute(attr, value);
}

/**
 * Keeps document metadata in sync during client-side navigation. The initial
 * HTML for each route is generated at build time with the same values.
 */
export function Seo({ path }: { path: string }) {
  useEffect(() => {
    const meta = metaFor(path);
    const url = canonicalFor(meta.path);
    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:image"]', 'content', OG_IMAGE);
    setMeta('meta[name="twitter:title"]', 'content', meta.title);
    setMeta('meta[name="twitter:description"]', 'content', meta.description);
  }, [path]);
  return null;
}
