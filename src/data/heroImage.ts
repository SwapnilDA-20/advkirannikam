/**
 * The hero photograph lives in public/ under stable names so the generated
 * home-page HTML can preload it before the application script runs.
 * Paths are built from the deploy base so the site also works from a subfolder.
 */
export function heroImageFor(base: string) {
  const url = (width: number) => `${base}images/bhc-tower-${width}.webp`;
  return {
    src: url(1000),
    srcSet: `${url(480)} 480w, ${url(760)} 760w, ${url(1000)} 1000w`,
    sizes: '(min-width: 1280px) 45vw, (min-width: 1024px) 47vw, 100vw',
    width: 1000,
    height: 1415,
  };
}

export const heroImage = heroImageFor(import.meta.env?.BASE_URL ?? '/');
