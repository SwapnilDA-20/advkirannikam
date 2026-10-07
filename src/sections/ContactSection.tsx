import { Button } from '../components/Button.tsx';
import { ContactCard } from '../components/ContactCard.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { Eyebrow } from '../components/SectionHeading.tsx';
import { directionsUrl, firm, mailto } from '../data/site.ts';

type ContactSectionProps = { showHeading?: boolean };

const [emailUser, emailDomain] = firm.email.split('@');

export function ContactDetails() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Reveal className="h-full">
        <ContactCard
          number="01"
          label="The Office"
          action={
            <Button href={directionsUrl} newTab variant="ghost" arrow="external" className="w-full sm:w-auto">
              Get Directions
            </Button>
          }
        >
          <address className="font-serif text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.3] font-light text-fg not-italic">
            {firm.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </ContactCard>
      </Reveal>
      <Reveal delay={0.1} className="h-full">
        <ContactCard
          number="02"
          label="Email"
          action={
            <Button href={mailto} arrow="external" className="w-full sm:w-auto">
              Email Us
            </Button>
          }
        >
          <a
            href={mailto}
            className="link-line font-serif text-[clamp(1.375rem,6.4vw,2.25rem)] leading-tight font-light text-fg md:text-[clamp(1.5rem,2.6vw,2.25rem)]"
          >
            {emailUser}
            <wbr />@{emailDomain}
          </a>
          <p className="mt-6 max-w-sm text-[0.875rem] leading-relaxed text-fg-2">
            Please share a brief outline of your matter. Confidential documents need not be sent until the office has
            responded.
          </p>
        </ContactCard>
      </Reveal>
    </div>
  );
}

export function ContactSection({ showHeading = true }: ContactSectionProps) {
  return (
    <section aria-labelledby="contact-title" className="relative border-t border-line py-28 lg:py-40">
      <div className="shell">
        {showHeading && (
          <Reveal className="mb-16 grid gap-10 lg:mb-20 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-7">
              <Eyebrow label="Contact" />
              <h2 id="contact-title" className="display mt-8 text-[clamp(2.75rem,6vw,5.75rem)] text-fg">
                Contact <em className="font-light text-fg-2">the Office.</em>
              </h2>
            </div>
            <div className="border-l border-accent/70 pl-5 lg:col-span-4 lg:col-start-9">
              <p className="font-serif text-xl tracking-[0.04em] text-fg uppercase">
                {firm.nameLine1}
                <br />
                {firm.nameLine2}
              </p>
              <p className="eyebrow mt-3">{firm.descriptor}</p>
            </div>
          </Reveal>
        )}
        <ContactDetails />
      </div>
    </section>
  );
}
