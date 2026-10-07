import { PageHeader } from '../components/PageHeader.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { Eyebrow } from '../components/SectionHeading.tsx';
import { firm } from '../data/site.ts';
import { ContactDetails } from '../sections/ContactSection.tsx';

const guidance = [
  'A brief description of the nature of your matter.',
  'The court or forum concerned, if proceedings are already pending.',
  'Your name and how you would prefer the office to contact you.',
];

export default function Contact() {
  return (
    <>
      <PageHeader
        number="05"
        label="Contact"
        lines={[
          'Contact',
          <em key="o" className="font-light text-fg-2">
            the Office.
          </em>,
        ]}
        intro={
          <>
            <span className="block font-serif text-[1.375rem] tracking-[0.04em] text-fg uppercase">
              {firm.nameLine1} {firm.nameLine2}
            </span>
            <span className="eyebrow mt-3 block">{firm.descriptor}</span>
          </>
        }
        aside={
          <div className="relative border border-line bg-gradient-to-b from-surface to-ink-2 p-8 sm:p-10">
            <span aria-hidden="true" className="absolute -top-px left-0 h-px w-16 bg-accent" />
            <span aria-hidden="true" className="absolute -top-8 -left-px h-24 w-px bg-accent" />
            <p className="eyebrow">The Office</p>
            <p className="mt-10 font-serif text-[clamp(2.25rem,4vw,3.25rem)] leading-[1] font-light text-fg">
              Kandivali
              <br />
              <em className="text-fg-2">East.</em>
            </p>
            <p className="mt-8 border-t border-line pt-6 text-[0.9375rem] text-fg-2">{firm.city}</p>
          </div>
        }
      />

      <section aria-label="Contact details" className="relative py-20 lg:py-28">
        <div className="shell">
          <ContactDetails />
        </div>
      </section>

      <section aria-labelledby="before-title" className="relative border-t border-line bg-ink-2 py-24 lg:py-36">
        <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />
        <div className="shell relative grid gap-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Eyebrow label="Before You Write" />
            <h2 id="before-title" className="display mt-8 text-[clamp(2.6rem,5vw,4.5rem)] text-fg">
              A few details
              <br />
              <em className="font-light text-fg-2">help us respond.</em>
            </h2>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="border-t border-line">
              {guidance.map((item, index) => (
                <Reveal as="li" key={item} delay={index * 0.08} className="border-b border-line">
                  <div className="grid grid-cols-[3rem_1fr] gap-x-4 py-7">
                    <span className="numeral pt-1 text-sm text-accent">{String(index + 1).padStart(2, '0')}</span>
                    <p className="font-serif text-[clamp(1.25rem,2vw,1.625rem)] leading-snug font-light text-fg">{item}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={0.2}>
              <p className="mt-10 max-w-lg border-l border-accent/70 pl-5 text-[0.875rem] leading-relaxed text-fg-2">
                Please do not send confidential documents until the office has responded. Contacting the office by
                email does not, by itself, create an advocate–client relationship.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
