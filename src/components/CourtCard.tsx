import type { Court } from '../data/courts.ts';

type CourtCardProps = { court: Court; headingLevel?: 'h3' | 'h2' };

/** Typographic row naming a court or forum. */
export function CourtCard({ court, headingLevel = 'h3' }: CourtCardProps) {
  const Heading = headingLevel;
  return (
    <article className="group/cc relative grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line py-8 sm:grid-cols-[4rem_1fr] lg:py-10">
      <span
        aria-hidden="true"
        className="absolute -top-px left-0 h-px w-0 bg-accent transition-[width] duration-700 ease-[var(--ease-editorial)] group-hover/cc:w-24"
      />
      <span className="numeral pt-2 text-sm text-accent">{court.number}</span>
      <div>
        <Heading className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1] font-light text-fg transition-transform duration-700 ease-[var(--ease-editorial)] group-hover/cc:translate-x-1.5">
          {court.name}
        </Heading>
        <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-fg-2">{court.description}</p>
      </div>
    </article>
  );
}
