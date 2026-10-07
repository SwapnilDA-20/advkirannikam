import { images } from '../assets/index.ts';
import { ImageReveal } from '../components/ImageReveal.tsx';
import { PageHeader } from '../components/PageHeader.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { Eyebrow } from '../components/SectionHeading.tsx';
import { courts } from '../data/courts.ts';
import { useHashScroll } from '../hooks/useHashScroll.ts';
import { ConsultationCta } from '../sections/ConsultationCta.tsx';

export default function Courts() {
  useHashScroll();
  const [highCourt, ...others] = courts;

  return (
    <>
      <PageHeader
        number="04"
        label="Courts"
        lines={[
          'Representation',
          <em key="a" className="font-light text-fg-2">
            across key
          </em>,
          <em key="b" className="font-light text-fg-2">
            legal forums.
          </em>,
        ]}
        intro="The practice appears before the Bombay High Court, Co-operative Courts and Civil Courts. The appropriate forum for any matter depends on its nature and the applicable law."
      />

      <figure className="relative">
        <ImageReveal
          image={images.highCourtMaidan}
          alt="The Bombay High Court seen across the Oval Maidan, Mumbai"
          position="50% 40%"
          sizes="100vw"
          priority
          className="aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/8]"
        >
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink" />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_100%,rgba(255,106,0,0.12),transparent)]" />
        </ImageReveal>
        <figcaption className="shell relative -mt-14 flex items-center gap-4">
          <span className="eyebrow text-[0.625rem] text-fg">Bombay High Court, from the Oval Maidan</span>
          <span aria-hidden="true" className="h-px flex-1 bg-line" />
        </figcaption>
      </figure>

      {/* Bombay High Court */}
      <section id={highCourt.slug} aria-labelledby={`${highCourt.slug}-title`} className="relative scroll-mt-24 py-28 lg:py-40">
        <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6">
            <Eyebrow number={highCourt.number} label="High Court" />
            <h2 id={`${highCourt.slug}-title`} className="display mt-8 text-[clamp(3.25rem,8vw,8rem)] text-fg">
              {highCourt.lines[0]}
              <br />
              <em className="font-light text-fg-2">{highCourt.lines[1]}</em>
            </h2>
            <p className="mt-10 max-w-md font-serif text-[clamp(1.375rem,2.2vw,1.75rem)] leading-[1.35] font-light text-fg">
              {highCourt.description}
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-5 lg:col-span-5 lg:col-start-8">
            <Reveal className="relative pt-16">
              <ImageReveal
                image={images.highCourtTower}
                alt="The central tower of the Bombay High Court"
                position="50% 30%"
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="aspect-[3/5] border border-line"
              />
            </Reveal>
            <Reveal delay={0.12} className="relative">
              <span aria-hidden="true" className="absolute -top-6 left-0 z-10 h-24 w-px bg-accent" />
              <ImageReveal
                image={images.corridorWide}
                alt="A heritage corridor inside the Bombay High Court"
                position="50% 50%"
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="aspect-[3/5] border border-line"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Co-operative and Civil Courts */}
      <section aria-label="Co-operative and Civil Courts" className="relative border-t border-line bg-ink-2">
        <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />
        <div className="shell relative grid md:grid-cols-2">
          {others.map((court, index) => (
            <article
              key={court.slug}
              id={court.slug}
              aria-labelledby={`${court.slug}-title`}
              className={`group/fc relative scroll-mt-24 py-20 lg:py-32 ${index > 0 ? 'border-t border-line md:border-t-0 md:border-l md:pl-10 lg:pl-16' : 'md:pr-10 lg:pr-16'}`}
            >
              <span
                aria-hidden="true"
                className="outline-numeral pointer-events-none absolute top-10 right-0 text-[9rem] leading-none select-none lg:text-[12rem]"
              >
                {court.number}
              </span>
              <Reveal className="relative">
                <Eyebrow number={court.number} label="Forum" />
                <h2 id={`${court.slug}-title`} className="display mt-8 text-[clamp(2.75rem,5.5vw,5.25rem)] text-fg">
                  {court.lines[0]}
                  <br />
                  <em className="font-light text-fg-2">{court.lines[1]}</em>
                </h2>
                <span aria-hidden="true" className="mt-10 block h-px w-12 bg-accent transition-[width] duration-700 group-hover/fc:w-24" />
                <p className="mt-8 max-w-sm text-[0.9375rem] leading-relaxed text-fg-2">{court.description}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* Note on jurisdiction */}
      <section aria-labelledby="jurisdiction-title" className="relative border-t border-line py-24 lg:py-32">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <h2 id="jurisdiction-title" className="eyebrow flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-accent" />A Note on Jurisdiction
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <p className="font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.35] font-light text-fg">
              Which court or forum a matter belongs before is a question of law and fact. It is assessed for each matter
              at the outset, during the initial consultation.
            </p>
          </Reveal>
        </div>
      </section>

      <ConsultationCta />
    </>
  );
}
