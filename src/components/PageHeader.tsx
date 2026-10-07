import { m, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';
import type { Picture } from '../assets/index.ts';
import { ImageReveal } from './ImageReveal.tsx';
import { MaskLine } from './Reveal.tsx';

type PageHeaderProps = {
  number?: string;
  label: string;
  /** Each entry renders as a masked line of the H1. */
  lines: ReactNode[];
  intro?: ReactNode;
  image?: { picture: Picture; alt: string; position?: string; caption?: string };
  /** Alternative right-hand column content when no image is used. */
  aside?: ReactNode;
};

const ease = [0.22, 1, 0.36, 1] as const;

/** Editorial header for interior pages. */
export function PageHeader({ number, label, lines, intro, image, aside }: PageHeaderProps) {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay, ease } };

  return (
    <header className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="glow-accent pointer-events-none absolute -top-40 right-[8%] size-[40rem] opacity-70" />

      <div className="shell relative grid gap-12 pt-32 pb-16 sm:pt-40 lg:grid-cols-12 lg:gap-8 lg:pt-48 lg:pb-24">
        <div className={image || aside ? 'lg:col-span-7' : 'lg:col-span-10'}>
          <m.nav aria-label="Breadcrumb" {...fade(0)}>
            <ol className="eyebrow flex items-center gap-3">
              <li>
                <Link to="/" className="link-line hover:text-fg">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-fg-3">
                /
              </li>
              <li aria-current="page" className="text-fg">
                {label}
              </li>
            </ol>
          </m.nav>

          <m.p className="mt-14 flex items-center gap-4 lg:mt-20" {...fade(0.1)}>
            {number && <span className="numeral text-[0.9375rem] text-accent">{number}</span>}
            <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
            <span className="eyebrow">{label}</span>
          </m.p>

          <h1 className="display mt-8 text-[clamp(2.9rem,8vw,7.25rem)] text-fg">
            {lines.map((line, index) => (
              <MaskLine key={index} delay={0.15 + index * 0.1} animateOnMount>
                {line}
              </MaskLine>
            ))}
          </h1>

          {intro && (
            <m.p className="mt-10 max-w-xl text-[1.0625rem] leading-relaxed text-fg-2" {...fade(0.5)}>
              {intro}
            </m.p>
          )}
        </div>

        {image && (
          <figure className="relative lg:col-span-4 lg:col-start-9 lg:self-end">
            <span aria-hidden="true" className="absolute -top-8 -left-px z-10 h-32 w-px bg-accent" />
            <ImageReveal
              image={image.picture}
              alt={image.alt}
              position={image.position}
              priority
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="aspect-[5/4] border border-line sm:aspect-[16/10] lg:aspect-[4/5]"
            >
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
            </ImageReveal>
            {image.caption && (
              <figcaption className="eyebrow mt-4 flex items-center justify-between gap-4 text-[0.625rem]">
                <span>{image.caption}</span>
                <span aria-hidden="true" className="h-px flex-1 bg-line" />
              </figcaption>
            )}
          </figure>
        )}

        {!image && aside && (
          <m.div className="relative lg:col-span-4 lg:col-start-9 lg:self-end" {...fade(0.3)}>
            {aside}
          </m.div>
        )}
      </div>
    </header>
  );
}
