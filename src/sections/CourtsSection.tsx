import { images } from '../assets/index.ts';
import { TextLink } from '../components/Button.tsx';
import { CourtCard } from '../components/CourtCard.tsx';
import { ImageReveal } from '../components/ImageReveal.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { Eyebrow } from '../components/SectionHeading.tsx';
import { courts } from '../data/courts.ts';

export function CourtsSection() {
  return (
    <section aria-labelledby="courts-title" className="relative overflow-hidden border-t border-line py-28 lg:py-40">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-8">
        <Reveal className="relative lg:col-span-5">
          <figure className="lg:sticky lg:top-28">
            <span aria-hidden="true" className="absolute -top-8 -left-px z-10 h-28 w-px bg-accent" />
            <ImageReveal
              image={images.corridorWide}
              alt="The heritage corridor of the Bombay High Court, with its tiled floor and spiral staircase"
              sizes="(min-width: 1024px) 38vw, 100vw"
              position="50% 40%"
              className="aspect-[4/5] border border-line"
            >
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/30" />
              <p className="eyebrow absolute bottom-6 left-6 text-[0.625rem] text-fg">
                <span className="text-accent">05</span> &nbsp;Bombay High Court, Mumbai
              </p>
            </ImageReveal>
          </figure>
        </Reveal>

        <div className="relative lg:col-span-6 lg:col-start-7">
          <Reveal>
            <Eyebrow number="05" label="Courts & Jurisdiction" />
            <h2 id="courts-title" className="display relative mt-8 text-[clamp(2.6rem,4.6vw,4.5rem)] text-fg">
              Representation Across
              <br />
              <em className="font-light text-fg-2">Key Legal Forums.</em>
            </h2>
            <p className="relative mt-8 max-w-md text-[0.9375rem] leading-relaxed text-fg-2">
              The practice appears before the following courts and forums. The appropriate forum for any matter depends
              on its nature and the applicable law.
            </p>
          </Reveal>

          <div className="mt-14 border-b border-line">
            {courts.map((court, index) => (
              <Reveal key={court.slug} delay={index * 0.08}>
                <CourtCard court={court} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <TextLink to="/courts">Courts &amp; jurisdiction</TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
