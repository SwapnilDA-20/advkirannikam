import { TextLink } from '../components/Button.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { TeamCard, TeamFeature } from '../components/TeamCard.tsx';
import { associates, principal } from '../data/team.ts';

export function TeamPreview() {
  return (
    <section aria-labelledby="team-title" className="relative py-28 lg:py-40">
      <div className="shell">
        <SectionHeading
          number="02"
          label="Legal Team"
          id="team-title"
          title={
            <>
              The People Behind
              <br />
              <em className="font-light text-fg-2">the Practice.</em>
            </>
          }
          intro="A focused team supporting every matter with preparation, research and precision."
        />

        <Reveal className="mt-20 lg:mt-24">
          <TeamFeature
            member={principal}
            summary={
              <p>
                Adv. Kiran Nikam leads the practice, with representation, advisory and dispute resolution across civil,
                criminal and co-operative matters.
              </p>
            }
          >
            <TextLink to="/legal-team">Meet the legal team</TextLink>
          </TeamFeature>
        </Reveal>

        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {associates.map((member, index) => (
            <Reveal as="li" key={member.slug} delay={index * 0.1} className={index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <TeamCard member={member} to={`/legal-team#${member.slug}`} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
