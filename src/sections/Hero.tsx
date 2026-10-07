import { m, useReducedMotion } from 'motion/react';
import { images } from '../assets/index.ts';
import { Button } from '../components/Button.tsx';
import { ImageReveal } from '../components/ImageReveal.tsx';
import { MaskLine } from '../components/Reveal.tsx';
import { courts } from '../data/courts.ts';
import { heroImage } from '../data/heroImage.ts';
import { firm } from '../data/site.ts';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number, y = 16) =>
    reduce ? {} : { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay, ease } };

  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="glow-accent pointer-events-none absolute -z-10 hidden size-[52rem] opacity-60 lg:top-[30%] lg:right-[28%] lg:block"
      />

      {/* Architectural plate */}
      <div className="relative h-[62svh] min-h-[24rem] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[47%] xl:w-[45%]">
        <ImageReveal
          image={images.highCourtTower}
          alt="The central tower of the Bombay High Court, Mumbai"
          position="50% 22%"
          priority
          sizes={heroImage.sizes}
          className="absolute inset-0"
        >
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ink/85 to-transparent" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
          <div aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-2/3 bg-gradient-to-r from-ink via-ink/45 to-transparent lg:block" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(55%_40%_at_20%_62%,rgba(255,106,0,0.09),transparent_70%)] mix-blend-screen"
          />
        </ImageReveal>

        <m.span
          aria-hidden="true"
          className="absolute top-[16%] left-0 hidden h-[56%] w-px origin-top bg-gradient-to-b from-transparent via-accent to-transparent lg:block"
          initial={reduce ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.6, delay: 0.6, ease }}
        />
        <m.p
          aria-hidden="true"
          className="eyebrow absolute right-6 bottom-44 hidden text-[0.625rem] [writing-mode:vertical-rl] lg:block xl:right-10"
          {...fade(1.2, 0)}
        >
          Bombay High Court <span className="text-accent">·</span> Mumbai
        </m.p>
      </div>

      {/* Copy */}
      <div className="shell relative z-10 -mt-[24svh] flex flex-1 flex-col lg:mt-0 lg:pt-40 xl:pt-48">
        <m.p className="eyebrow flex items-center gap-4" {...fade(0.15)}>
          <span aria-hidden="true" className="h-px w-10 bg-accent" />
          {firm.descriptor}
        </m.p>

        <h1
          id="hero-title"
          className="display mt-7 text-[clamp(3.4rem,14vw,5.75rem)] leading-[0.9] text-fg lg:mt-10 lg:text-[clamp(6rem,8.6vw,9.75rem)]"
        >
          <MaskLine animateOnMount delay={0.2}>
            Adv. Kiran
          </MaskLine>
          <MaskLine animateOnMount delay={0.3} className="pl-[0.9em] lg:pl-[1.15em]">
            Nikam
          </MaskLine>
          <MaskLine animateOnMount delay={0.4} className="pl-[0.3em] lg:pl-[2.1em]">
            <em className="font-light text-fg/90">
              <span className="text-accent">&amp;</span> Associates
            </em>
          </MaskLine>
        </h1>

        <m.p className="mt-10 max-w-sm text-[1.0625rem] leading-relaxed text-fg-2 lg:mt-14" {...fade(0.7)}>
          Practising before the Bombay High Court, <span className="whitespace-nowrap">Co-operative Courts</span> and
          Civil Courts.
        </m.p>
        <m.div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4" {...fade(0.85)}>
          <Button to="/contact">Consult Our Team</Button>
          <Button to="/practice-areas" variant="ghost">
            Explore Practice Areas
          </Button>
        </m.div>

        <m.div
          className="mt-auto flex items-end justify-between gap-8 border-t border-line pt-6 pb-8 max-lg:mt-16 lg:pb-10"
          {...fade(1.05, 0)}
        >
          <ul aria-label="Courts" className="flex flex-col gap-3 lg:flex-row lg:gap-0">
            {courts.map((court, index) => (
              <li
                key={court.slug}
                className={`flex items-center gap-3 text-[0.625rem] font-medium tracking-[0.28em] text-fg-2 uppercase lg:px-6 lg:first:pl-0 ${
                  index > 0 ? 'lg:border-l lg:border-line' : ''
                }`}
              >
                <span className="numeral text-[0.75rem] tracking-normal text-accent">{court.number}</span>
                {court.name}
              </li>
            ))}
          </ul>
          <a
            href="#practice"
            className="group/sc hidden min-h-11 shrink-0 items-center gap-4 text-[0.625rem] font-medium tracking-[0.28em] text-fg-2 uppercase transition-colors hover:text-fg md:flex"
          >
            Scroll
            <span aria-hidden="true" className="relative block h-12 w-px overflow-hidden bg-line">
              <span className="absolute inset-0 bg-accent motion-safe:animate-[scrollCue_2.4s_var(--ease-editorial)_infinite]" />
            </span>
          </a>
        </m.div>
      </div>
    </section>
  );
}
