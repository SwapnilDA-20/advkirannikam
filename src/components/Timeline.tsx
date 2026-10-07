import { m, useReducedMotion } from 'motion/react';
import type { ProcessStep } from '../data/approach.ts';

const ease = [0.22, 1, 0.36, 1] as const;

/** Horizontal on desktop, vertical on smaller screens, with an orange progress line drawn on view. */
export function Timeline({ steps }: { steps: ProcessStep[] }) {
  const reduce = useReducedMotion();
  return (
    <ol className="relative grid gap-0 lg:grid-cols-5 lg:gap-8">
      {/* Track and progress — horizontal */}
      <span aria-hidden="true" className="absolute top-[0.3125rem] right-0 left-0 hidden h-px bg-line lg:block" />
      <m.span
        aria-hidden="true"
        className="absolute top-[0.3125rem] right-0 left-0 hidden h-px origin-left bg-accent lg:block"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '0px 0px -20% 0px' }}
        transition={{ duration: 2.4, ease }}
      />
      {/* Track and progress — vertical */}
      <span aria-hidden="true" className="absolute top-2 bottom-2 left-[0.3125rem] w-px bg-line lg:hidden" />
      <m.span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[0.3125rem] w-px origin-top bg-accent lg:hidden"
        initial={reduce ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '0px 0px -30% 0px' }}
        transition={{ duration: 2.4, ease }}
      />

      {steps.map((step, index) => (
        <m.li
          key={step.number}
          className="relative pb-12 pl-10 last:pb-0 lg:pb-0 lg:pl-0"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 0.8, delay: 0.15 + index * 0.18, ease }}
        >
          <span
            aria-hidden="true"
            className="absolute top-0 left-0 size-[0.6875rem] border border-accent bg-ink lg:relative lg:block"
          >
            <span className="absolute inset-[3px] bg-accent" />
          </span>
          <p className="numeral text-[2.75rem] leading-none font-light text-fg lg:mt-10 lg:text-[3.5rem]">
            {step.number}
          </p>
          <h3 className="mt-5 font-sans text-[0.75rem] leading-snug font-medium tracking-[0.22em] text-fg uppercase">
            {step.title}
          </h3>
          <p className="mt-3 max-w-xs text-[0.875rem] leading-relaxed text-fg-2">{step.description}</p>
        </m.li>
      ))}
    </ol>
  );
}
