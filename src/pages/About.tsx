import { images } from '../assets/index.ts';
import { TextLink } from '../components/Button.tsx';
import { ImageReveal } from '../components/ImageReveal.tsx';
import { PageHeader } from '../components/PageHeader.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { Eyebrow } from '../components/SectionHeading.tsx';
import { pillars } from '../data/approach.ts';
import { courts } from '../data/courts.ts';
import { practiceAreas } from '../data/practiceAreas.ts';
import { firm, mailto } from '../data/site.ts';
import { principal } from '../data/team.ts';
import { ConsultationCta } from '../sections/ConsultationCta.tsx';
import { PrinciplesSection } from '../sections/PrinciplesSection.tsx';

export default function About() {
  return (
    <>
      <PageHeader
        number="01"
        label="About"
        lines={[
          'A practice built',
          <>
            on <em className="font-light text-fg-2">preparation</em>
          </>,
          <>
            <em className="font-light text-fg-2">
              <span className="text-accent">&amp;</span> principle.
            </em>
          </>,
        ]}
        intro="Representation, advisory and dispute resolution across civil, criminal and co-operative matters — from an office in Kandivali East, Mumbai."
        image={{
          picture: images.corridorAdvocate,
          alt: 'An advocate in court robes in the heritage corridor of the Bombay High Court',
          position: '50% 35%',
          caption: 'Bombay High Court, Mumbai',
        }}
      />

      {/* Statement */}
      <section aria-labelledby="statement-title" className="relative py-28 lg:py-44">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-3">
            <Eyebrow label="The Practice" />
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 id="statement-title" className="sr-only">
                The practice
              </h2>
              <p className="font-serif text-[clamp(1.875rem,4.2vw,3.75rem)] leading-[1.15] font-light text-fg">
                Adv. Kiran Nikam leads a legal practice focused on{' '}
                <em className="text-fg-2">representation, advisory and dispute resolution</em> across civil, criminal and
                co-operative matters.
              </p>
            </Reveal>
            <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-2 md:gap-12">
              <Reveal>
                <p className="text-[0.9375rem] leading-[1.8] text-fg-2">
                  The practice is built around a simple discipline: understand the matter thoroughly before acting on it.
                  Facts, records and documents are read carefully, and the applicable legal position is researched with
                  the same care.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[0.9375rem] leading-[1.8] text-fg-2">
                  That preparation shapes a considered strategy for each stage of the matter, and informs focused
                  representation before the Bombay High Court, Co-operative Courts and Civil Courts — with clients kept
                  informed throughout.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section aria-labelledby="method-title" className="relative border-t border-line bg-ink-2 py-28 lg:py-40">
        <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />
        <div className="shell relative grid gap-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Eyebrow number="02" label="How We Work" />
              <h2 id="method-title" className="display mt-8 text-[clamp(2.6rem,5vw,4.75rem)] text-fg">
                Five disciplines,
                <br />
                <em className="font-light text-fg-2">one standard.</em>
              </h2>
            </div>
          </Reveal>
          <ol className="lg:col-span-7 lg:col-start-6">
            {pillars.map((pillar, index) => (
              <Reveal as="li" key={pillar.number} delay={index * 0.04}>
                <article className="group/pl relative grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-line py-10 sm:grid-cols-[6rem_1fr] lg:py-12">
                  <span
                    aria-hidden="true"
                    className="absolute -top-px left-0 h-px w-0 bg-accent transition-[width] duration-700 ease-[var(--ease-editorial)] group-hover/pl:w-24"
                  />
                  <span aria-hidden="true" className="outline-numeral text-[3.25rem] leading-[0.8] sm:text-[4.5rem]">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-tight font-light text-fg">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-fg-2">{pillar.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Principal */}
      <section aria-labelledby="principal-title" className="relative py-28 lg:py-40">
        <div className="shell grid items-center gap-14 md:grid-cols-12 md:gap-8">
          <Reveal className="relative md:col-span-5 lg:col-span-4">
            <span aria-hidden="true" className="absolute -top-8 -left-px z-10 h-28 w-px bg-accent" />
            <ImageReveal
              image={principal.photo!}
              alt={`Portrait of ${principal.name}, ${principal.role}`}
              position={principal.focus}
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 40vw, 100vw"
              className="aspect-[4/5] border border-line"
              imgClassName="portrait-tone"
            />
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 lg:col-span-6 lg:col-start-6">
            <Eyebrow number="03" label="Led by" />
            <h2 id="principal-title" className="display mt-8 text-[clamp(2.75rem,6vw,5.75rem)] text-fg">
              Adv. Kiran Nikam
            </h2>
            <p className="eyebrow mt-5 text-fg">{principal.role}</p>
            <p className="mt-8 max-w-lg text-[0.9375rem] leading-relaxed text-fg-2">
              The practice is led by Adv. Kiran Nikam, supported by a team of junior advocates who assist on every
              matter with preparation, research and precision.
            </p>
            <div className="mt-10">
              <TextLink to="/legal-team">Meet the legal team</TextLink>
            </div>
          </Reveal>
        </div>
      </section>

      <PrinciplesSection number="04" />

      {/* At a glance */}
      <section aria-labelledby="glance-title" className="relative py-28 lg:py-40">
        <div className="shell">
          <Reveal>
            <Eyebrow number="05" label="At a Glance" />
            <h2 id="glance-title" className="display mt-8 text-[clamp(2.6rem,5vw,4.75rem)] text-fg">
              The practice, <em className="font-light text-fg-2">in brief.</em>
            </h2>
          </Reveal>
          <dl className="mt-16 border-t border-line lg:mt-20">
            {[
              { term: 'Practice', value: practiceAreas.map((a) => a.title) },
              { term: 'Courts & Forums', value: courts.map((c) => c.name) },
              { term: 'Office', value: [firm.address.lines.join(' ')] },
            ].map((row, index) => (
              <Reveal
                key={row.term}
                delay={index * 0.06}
                className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8 lg:py-10"
              >
                <dt className="eyebrow pt-2 md:col-span-3">{row.term}</dt>
                <dd className="flex flex-col gap-1 font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-snug font-light text-fg md:col-span-9">
                  {row.value.map((v) => (
                    <span key={v}>{v}</span>
                  ))}
                </dd>
              </Reveal>
            ))}
            <Reveal className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8 lg:py-10">
              <dt className="eyebrow pt-2 md:col-span-3">Email</dt>
              <dd className="font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-snug font-light md:col-span-9">
                <a href={mailto} className="link-line [overflow-wrap:anywhere] text-fg">
                  {firm.email}
                </a>
              </dd>
            </Reveal>
          </dl>
        </div>
      </section>

      <ConsultationCta />
    </>
  );
}
