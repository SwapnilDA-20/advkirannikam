import { images } from '../assets/index.ts';
import { Button } from '../components/Button.tsx';
import { PageHeader } from '../components/PageHeader.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { practiceAreas } from '../data/practiceAreas.ts';
import { firm } from '../data/site.ts';
import { useHashScroll } from '../hooks/useHashScroll.ts';
import { ConsultationCta } from '../sections/ConsultationCta.tsx';
import { ProcessSection } from '../sections/ProcessSection.tsx';

const enquiry = (title: string) =>
  `mailto:${firm.email}?subject=${encodeURIComponent(`Enquiry — ${title}`)}`;

export default function PracticeAreas() {
  useHashScroll();

  return (
    <>
      <PageHeader
        number="02"
        label="Practice Areas"
        lines={[
          'Legal matters.',
          <em key="h" className="font-light text-fg-2">
            Handled with preparation
          </em>,
          <>
            <em className="font-light text-fg-2">
              <span className="text-accent">&amp;</span> precision.
            </em>
          </>,
        ]}
        intro="The practice is focused on three areas — co-operative, civil and criminal matters."
        image={{
          picture: images.highCourtTower,
          alt: 'Gothic stonework of the Bombay High Court tower',
          position: '50% 45%',
          caption: 'Bombay High Court',
        }}
      />

      {/* Index */}
      <nav aria-label="Practice areas" className="sticky top-[4.5rem] z-30 border-b border-line bg-[rgba(5,5,5,0.88)] backdrop-blur-xl">
        <ul className="shell flex overflow-x-auto [scrollbar-width:none]">
          {practiceAreas.map((area) => (
            <li key={area.slug} className="shrink-0 border-r border-line first:border-l">
              <a
                href={`#${area.slug}`}
                className="group/ix flex min-h-14 items-center gap-3 px-5 text-[0.6875rem] font-medium tracking-[0.22em] whitespace-nowrap text-fg-2 uppercase transition-colors hover:text-fg sm:px-8"
              >
                <span className="numeral text-[0.8125rem] tracking-normal text-accent">{area.number}</span>
                {area.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {practiceAreas.map((area, index) => (
        <section
          key={area.slug}
          id={area.slug}
          aria-labelledby={`${area.slug}-title`}
          className={`relative scroll-mt-32 overflow-hidden border-b border-line py-24 lg:py-36 ${index % 2 === 1 ? 'bg-ink-2' : ''}`}
        >
          {index % 2 === 1 && <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />}
          <div className="shell relative grid gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-40">
                <span aria-hidden="true" className="outline-numeral block text-[9rem] leading-[0.78] select-none sm:text-[13rem] lg:text-[17rem]">
                  {area.number}
                </span>
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow flex items-center gap-4">
                  <span className="numeral text-[0.8125rem] tracking-normal text-accent">{area.number}</span>
                  <span aria-hidden="true" className="h-px w-10 bg-line-strong" />
                  Practice Area
                </p>
                <h2 id={`${area.slug}-title`} className="display mt-8 text-[clamp(3rem,7vw,6.5rem)] text-fg">
                  {area.lines[0]}
                  <br />
                  <em className="font-light text-fg-2">{area.lines[1]}</em>
                </h2>
                <p className="mt-10 max-w-xl font-serif text-[clamp(1.375rem,2.2vw,1.875rem)] leading-[1.35] font-light text-fg">
                  {area.description}
                </p>
              </Reveal>

              <Reveal delay={0.1} className="mt-14">
                <h3 className="eyebrow border-b border-line pb-5">Scope of Assistance</h3>
                <ul>
                  {area.scope.map((item, i) => (
                    <li key={item} className="flex items-baseline gap-6 border-b border-line py-5 text-[0.9375rem] text-fg">
                      <span className="numeral w-6 text-sm text-fg-2">{String(i + 1).padStart(2, '0')}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.15} className="mt-12">
                <Button href={enquiry(area.title)} variant="ghost" arrow="external">
                  Discuss a {area.lines[0].toLowerCase()} matter
                </Button>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <ProcessSection />
      <ConsultationCta />
    </>
  );
}
