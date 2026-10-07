import { images } from '../assets/index.ts';
import { TextLink } from '../components/Button.tsx';
import { ImageReveal } from '../components/ImageReveal.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { Eyebrow } from '../components/SectionHeading.tsx';
import { pillars } from '../data/approach.ts';

export function AboutPreview() {
  return (
    <section aria-labelledby="practice-title" className="relative py-28 lg:py-44">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow label="The Practice" />
            <h2 id="practice-title" className="display mt-8 text-[clamp(2.75rem,6.4vw,6rem)] text-fg">
              Advocacy Built on
              <br />
              <em className="font-light text-fg-2">
                Precision <span className="text-accent">&amp;</span> Principle.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="relative mt-16 hidden max-w-md lg:block">
            <span aria-hidden="true" className="absolute -top-6 -left-px z-10 h-24 w-px bg-accent" />
            <figure>
              <ImageReveal
                image={images.chambersMural}
                alt="A sketch of the Bombay High Court building"
                className="aspect-[3/2] border border-line"
                sizes="28rem"
              >
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              </ImageReveal>
              <figcaption className="eyebrow mt-4 text-[0.625rem]">The Bombay High Court — a study</figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 lg:pt-24">
          <Reveal>
            <p className="font-serif text-[clamp(1.5rem,2.3vw,2rem)] leading-[1.3] font-light text-fg">
              Adv. Kiran Nikam leads a legal practice focused on representation, advisory and dispute resolution across
              civil, criminal and co-operative matters.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-[0.9375rem] leading-[1.8] text-fg-2">
              Every matter begins with preparation — a careful reading of the facts and documents, supported by
              focused legal research into the applicable position. From that foundation, the practice develops a
              considered strategy and carries it through to representation, with clear communication at every stage.
            </p>
          </Reveal>

          <ul className="mt-14 border-t border-line">
            {pillars.map((pillar, index) => (
              <Reveal as="li" key={pillar.number} delay={0.05 * index} className="border-b border-line">
                <div className="flex items-baseline gap-6 py-5">
                  <span className="numeral w-6 text-sm text-accent">{pillar.number}</span>
                  <span className="font-sans text-[0.75rem] font-medium tracking-[0.24em] text-fg uppercase">
                    {pillar.title}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1} className="mt-10">
            <TextLink to="/about">About the practice</TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
