import { images } from '../assets/index.ts';
import { Button } from '../components/Button.tsx';
import { PageHeader } from '../components/PageHeader.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { Eyebrow, SectionHeading } from '../components/SectionHeading.tsx';
import { TeamCard, TeamFeature } from '../components/TeamCard.tsx';
import { associates, principal } from '../data/team.ts';
import { useHashScroll } from '../hooks/useHashScroll.ts';
import { ConsultationCta } from '../sections/ConsultationCta.tsx';

const supportPoints = [
  { number: '01', title: 'Preparation', text: 'Facts, records and documents are reviewed with care before any step is taken.' },
  { number: '02', title: 'Research', text: 'The applicable legal position is researched for every matter the team handles.' },
  { number: '03', title: 'Precision', text: 'Clear analysis and focused representation, from first consultation onwards.' },
];

export default function LegalTeam() {
  useHashScroll();

  return (
    <>
      <PageHeader
        number="03"
        label="Legal Team"
        lines={[
          'The People',
          <em key="b" className="font-light text-fg-2">
            Behind the Practice.
          </em>,
        ]}
        intro="A focused team supporting every matter with preparation, research and precision."
        image={{
          picture: images.chambersMural,
          alt: 'A sketch of the Bombay High Court building',
          position: '40% 50%',
          caption: 'The Bombay High Court — a study',
        }}
      />

      <section id={principal.slug} aria-label={principal.name} className="relative scroll-mt-24 py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <TeamFeature
              member={principal}
              headingLevel="h2"
              summary={
                <p>
                  Adv. Kiran Nikam leads the practice, with representation, advisory and dispute resolution across
                  civil, criminal and co-operative matters.
                </p>
              }
            >
              <Button to="/contact">Consult Our Team</Button>
            </TeamFeature>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="associates-title" className="relative border-t border-line bg-ink-2 py-24 lg:py-36">
        <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />
        <div className="shell relative">
          <SectionHeading
            number="02"
            label="Junior Advocates"
            id="associates-title"
            watermark={false}
            title={
              <>
                Supporting <em className="font-light text-fg-2">every matter.</em>
              </>
            }
            intro="Working alongside the Principal Advocate on preparation, research and representation."
          />
          <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {associates.map((member, index) => (
              <Reveal
                as="li"
                key={member.slug}
                delay={index * 0.1}
                className={`scroll-mt-28 ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div id={member.slug} className="scroll-mt-28">
                  <TeamCard member={member} />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="together-title" className="relative py-28 lg:py-40">
        <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Eyebrow number="03" label="Working Together" />
            <h2 id="together-title" className="display mt-8 text-[clamp(2.6rem,5vw,4.75rem)] text-fg">
              One team,
              <br />
              <em className="font-light text-fg-2">one standard of care.</em>
            </h2>
            <div className="mt-12">
              <Button to="/contact">Consult Our Team</Button>
            </div>
          </Reveal>
          <ul className="border-t border-line lg:col-span-6 lg:col-start-7">
            {supportPoints.map((point, index) => (
              <Reveal as="li" key={point.number} delay={index * 0.08} className="border-b border-line">
                <div className="grid grid-cols-[3rem_1fr] gap-x-4 py-8 sm:grid-cols-[5rem_1fr]">
                  <span className="numeral pt-1 text-sm text-accent">{point.number}</span>
                  <div>
                    <h3 className="font-sans text-[0.8125rem] font-medium tracking-[0.24em] text-fg uppercase">{point.title}</h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-2">{point.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ConsultationCta />
    </>
  );
}
