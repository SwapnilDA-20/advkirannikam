import { PageHeader } from '../components/PageHeader.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { useHashScroll } from '../hooks/useHashScroll.ts';

const sections = [
  {
    title: 'Bar Council of India',
    body: [
      'The rules of the Bar Council of India do not permit advocates to solicit work or advertise in any manner. This website is intended only to provide information about Adv. Kiran Nikam & Associates to those who seek it.',
      'By accessing this website, you acknowledge that there has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from Adv. Kiran Nikam & Associates or any of its members to solicit any work through this website.',
    ],
  },
  {
    title: 'Information Only',
    body: [
      'You are accessing this website of your own accord, to obtain information about the practice for your own use. The content of this website is provided for general information only and should not be interpreted as soliciting or advertisement.',
      'Nothing on this website constitutes legal advice. You should not act, or refrain from acting, on the basis of any content on this website without seeking appropriate legal advice on the facts of your matter.',
    ],
  },
  {
    title: 'No Advocate–Client Relationship',
    body: [
      'Accessing this website, or contacting the office through the details provided on it, does not by itself create an advocate–client relationship.',
    ],
  },
  {
    title: 'Limitation of Liability',
    body: [
      'Adv. Kiran Nikam & Associates is not liable for any consequence of any action taken by a user relying on material or information provided on this website. While care is taken to keep the information accurate, no warranty is made as to its completeness or currency.',
    ],
  },
];

const credits = [
  {
    subject: 'Bombay High Court — central tower; Bombay High Court from the Oval Maidan',
    author: 'A.Savin',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mumbai_03-2016_40_Bombay_High_Court.jpg',
    secondUrl: 'https://commons.wikimedia.org/wiki/File:Mumbai_03-2016_41_Bombay_High_Court.jpg',
    license: 'Free Art License 1.3',
    licenseUrl: 'https://artlibre.org/licence/lal/en/',
  },
];

export default function Disclaimer() {
  useHashScroll();

  return (
    <>
      <PageHeader
        label="Disclaimer"
        lines={['Disclaimer.']}
        intro="Please read the following before using this website."
      />

      <section aria-label="Disclaimer" className="relative py-20 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8 lg:col-start-3">
            {sections.map((section, index) => (
              <Reveal key={section.title} className="grid gap-6 border-t border-line py-12 md:grid-cols-[5rem_1fr]">
                <span className="numeral text-sm text-accent">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-tight font-light text-fg">
                    {section.title}
                  </h2>
                  <div className="mt-6 space-y-5 text-[0.9375rem] leading-[1.85] text-fg-2">
                    {section.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal className="grid gap-6 border-t border-line py-12 md:grid-cols-[5rem_1fr]">
              <span className="numeral text-sm text-accent">{String(sections.length + 1).padStart(2, '0')}</span>
              <div id="image-credits" className="scroll-mt-32">
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-tight font-light text-fg">
                  Image Credits
                </h2>
                <div className="mt-6 space-y-5 text-[0.9375rem] leading-[1.85] text-fg-2">
                  <p>Photographs of the team and of the High Court corridor were supplied by the practice.</p>
                  {credits.map((credit) => (
                    <p key={credit.subject}>
                      {credit.subject}: photographs by {credit.author}, via{' '}
                      <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer" className="link-line text-fg">
                        {credit.source}
                      </a>{' '}
                      (
                      <a href={credit.secondUrl} target="_blank" rel="noopener noreferrer" className="link-line text-fg">
                        second image
                      </a>
                      ), licensed under the{' '}
                      <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="link-line text-fg">
                        {credit.license}
                      </a>
                      . Images have been cropped and tonally adjusted.
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
