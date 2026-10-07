import type { ReactNode } from 'react';
import { Reveal } from './Reveal.tsx';

type SectionHeadingProps = {
  number?: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  /** Renders an oversized outline numeral behind the heading. */
  watermark?: boolean;
  className?: string;
};

export function Eyebrow({ number, label, className = '' }: { number?: string; label: string; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-4 ${className}`}>
      {number && <span className="numeral text-[0.8125rem] tracking-[0.12em] text-accent">{number}</span>}
      <span aria-hidden="true" className="h-px w-10 bg-line-strong" />
      <span>{label}</span>
    </p>
  );
}

export function SectionHeading({ number, label, title, intro, id, watermark = true, className = '' }: SectionHeadingProps) {
  return (
    <header className={`relative grid gap-10 lg:grid-cols-12 lg:gap-8 ${className}`}>
      {watermark && number && (
        <span
          aria-hidden="true"
          className="outline-numeral pointer-events-none absolute -top-10 right-0 hidden select-none text-[13rem] leading-none lg:block xl:-top-16 xl:text-[17rem]"
        >
          {number}
        </span>
      )}
      <Reveal className="relative lg:col-span-8">
        <Eyebrow number={number} label={label} />
        <h2 id={id} className="display mt-8 text-[clamp(2.6rem,6vw,5.75rem)] text-fg">
          {title}
        </h2>
        {intro && (
          <p className="mt-8 max-w-md border-l border-line-strong pl-5 text-[0.9375rem] leading-relaxed text-fg-2 lg:mt-10">
            {intro}
          </p>
        )}
      </Reveal>
    </header>
  );
}
