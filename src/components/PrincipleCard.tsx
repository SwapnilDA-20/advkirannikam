import type { Principle } from '../data/approach.ts';

export function PrincipleCard({ principle }: { principle: Principle }) {
  return (
    <article className="group/pr relative flex h-full flex-col border-t border-line pt-8 pb-4 lg:border-t-0 lg:border-l lg:px-8 lg:pt-0">
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 h-px w-12 bg-accent lg:h-12 lg:w-px"
      />
      <span
        aria-hidden="true"
        className="outline-numeral text-[6.5rem] leading-[0.8] transition-[-webkit-text-stroke-color] duration-700 select-none group-hover/pr:[-webkit-text-stroke-color:var(--color-accent)] lg:text-[8rem]"
      >
        {principle.number}
      </span>
      <h3 className="mt-10 font-sans text-[0.8125rem] font-medium tracking-[0.26em] text-fg uppercase lg:mt-14">
        <span className="sr-only">{principle.number}. </span>
        {principle.title}
      </h3>
      <p className="mt-4 max-w-[17rem] text-[0.9375rem] leading-relaxed text-fg-2">{principle.description}</p>
    </article>
  );
}
