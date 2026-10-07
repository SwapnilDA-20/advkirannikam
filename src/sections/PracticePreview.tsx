import { TextLink } from '../components/Button.tsx';
import { PracticeCard } from '../components/PracticeCard.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { practiceAreas } from '../data/practiceAreas.ts';

export function PracticePreview() {
  return (
    <section id="practice" aria-labelledby="practice-areas-title" className="relative scroll-mt-20 border-t border-line bg-ink-2 py-28 lg:py-40">
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />
      <div className="shell relative">
        <SectionHeading
          number="01"
          label="Practice Areas"
          id="practice-areas-title"
          title={
            <>
              Focused <em className="font-light text-fg-2">Legal Practice.</em>
            </>
          }
          intro="Three areas of practice, each approached with the same preparation, research and precision."
        />

        <ul className="mt-20 grid gap-5 md:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {practiceAreas.map((area, index) => (
            <Reveal as="li" key={area.slug} delay={index * 0.1} className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <PracticeCard area={area} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 flex justify-end">
          <TextLink to="/practice-areas">All practice areas</TextLink>
        </Reveal>
      </div>
    </section>
  );
}
