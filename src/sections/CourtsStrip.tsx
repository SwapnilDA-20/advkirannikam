import { Link } from 'react-router';
import { Reveal } from '../components/Reveal.tsx';
import { courts } from '../data/courts.ts';

export function CourtsStrip() {
  return (
    <section aria-label="Courts and forums" className="relative border-y border-line bg-ink-2">
      <ul className="shell grid md:grid-cols-3">
        {courts.map((court, index) => (
          <Reveal
            as="li"
            key={court.slug}
            delay={index * 0.1}
            className={`border-line ${index > 0 ? 'border-t md:border-t-0 md:border-l' : ''}`}
          >
            <Link
              to={`/courts#${court.slug}`}
              className={`group/cs flex h-full flex-col gap-6 py-10 md:py-16 ${index > 0 ? 'md:pl-8 lg:pl-12' : ''} md:pr-6`}
            >
              <span className="numeral text-[0.9375rem] text-accent">{court.number}</span>
              <span className="font-serif text-[clamp(1.875rem,3vw,2.75rem)] leading-[1.02] font-light tracking-[0.01em] text-fg uppercase transition-transform duration-700 ease-[var(--ease-editorial)] group-hover/cs:translate-x-1.5">
                {court.lines[0]}
                <br />
                <span className="text-fg-2">{court.lines[1]}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
