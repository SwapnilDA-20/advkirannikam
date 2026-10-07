import { PrincipleCard } from '../components/PrincipleCard.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { principles } from '../data/approach.ts';

export function PrinciplesSection({ number = '03' }: { number?: string }) {
  return (
    <section aria-labelledby="approach-title" className="relative overflow-hidden border-y border-line bg-ink-2 py-28 lg:py-40">
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="glow-accent pointer-events-none absolute -bottom-96 -left-60 size-[48rem] opacity-50" />
      <div className="shell relative">
        <SectionHeading
          number={number}
          label="Our Approach"
          id="approach-title"
          title={
            <>
              Principles That Guide
              <br />
              <em className="font-light text-fg-2">Our Practice.</em>
            </>
          }
        />
        <ul className="mt-20 grid gap-12 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4 lg:gap-0">
          {principles.map((principle, index) => (
            <Reveal as="li" key={principle.number} delay={index * 0.1}>
              <PrincipleCard principle={principle} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
