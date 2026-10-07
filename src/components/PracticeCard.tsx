import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import type { PracticeArea } from '../data/practiceAreas.ts';

export function PracticeCard({ area }: { area: PracticeArea }) {
  return (
    <Link
      to={`/practice-areas#${area.slug}`}
      className="group/pc relative flex h-full min-h-[25rem] flex-col border border-line bg-gradient-to-b from-surface to-ink-2 p-7 transition-[transform,border-color] duration-700 ease-[var(--ease-editorial)] hover:-translate-y-1.5 hover:border-line-strong focus-visible:-translate-y-1.5 sm:p-9 lg:min-h-[32rem]"
    >
      <span
        aria-hidden="true"
        className="absolute -top-px left-0 h-px w-0 bg-accent transition-[width] duration-700 ease-[var(--ease-editorial)] group-hover/pc:w-full group-focus-visible/pc:w-full"
      />
      <span
        aria-hidden="true"
        className="outline-numeral pointer-events-none absolute top-16 right-6 text-[8.5rem] leading-none transition-[-webkit-text-stroke-color] duration-700 select-none group-hover/pc:[-webkit-text-stroke-color:rgb(255_106_0/0.45)] sm:right-8 lg:text-[10rem]"
      >
        {area.number}
      </span>

      <div className="flex items-center justify-between">
        <span className="numeral text-lg text-accent">{area.number}</span>
        <span className="eyebrow">Practice Area</span>
      </div>

      <h3 className="mt-auto pt-24 font-serif text-[clamp(2.4rem,3.4vw,3.25rem)] leading-[0.95] font-light text-fg">
        {area.lines[0]}
        <br />
        <em className="text-fg-2">{area.lines[1]}</em>
      </h3>
      <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-fg-2">{area.description}</p>

      <div className="relative mt-10 flex items-center justify-between border-t border-line pt-6">
        <span className="eyebrow text-fg transition-colors">Explore</span>
        <span className="grid size-11 place-items-center border border-line-strong transition-colors duration-500 group-hover/pc:border-accent">
          <ArrowRight
            aria-hidden="true"
            strokeWidth={1.5}
            className="size-4 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover/pc:translate-x-1 group-hover/pc:text-accent"
          />
        </span>
      </div>
    </Link>
  );
}
