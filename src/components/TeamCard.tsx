import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { courts } from '../data/courts.ts';
import { practiceAreas } from '../data/practiceAreas.ts';
import type { TeamMember } from '../data/team.ts';

/** Photograph, or a monogram placeholder until one is supplied. */
function Portrait({ member, sizes, priority = false }: { member: TeamMember; sizes: string; priority?: boolean }) {
  if (member.photo) {
    return (
      <img
        src={member.photo.src}
        srcSet={member.photo.srcSet}
        sizes={member.photo.srcSet ? sizes : undefined}
        width={member.photo.width}
        height={member.photo.height}
        alt={`Portrait of ${member.name}, ${member.role}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{ objectPosition: member.focus }}
        className="portrait-tone absolute inset-0 h-full w-full object-cover group-hover/tc:scale-[1.03] group-hover/tc:[filter:grayscale(0.15)_contrast(1.04)_brightness(0.95)]"
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`${member.name}, ${member.role} — photograph to be added`}
      className="absolute inset-0 grid place-items-center bg-[radial-gradient(120%_80%_at_50%_0%,#1a1a1a,#0a0a0a_70%)] transition-transform duration-1000 ease-[var(--ease-editorial)] group-hover/tc:scale-[1.03]"
    >
      <div aria-hidden="true" className="absolute inset-5 border border-line" />
      <div aria-hidden="true" className="absolute inset-x-5 top-1/2 h-px bg-line/60" />
      <div aria-hidden="true" className="absolute inset-y-5 left-1/2 w-px bg-line/60" />
      <span aria-hidden="true" className="relative font-serif text-[clamp(5rem,9vw,7.5rem)] leading-none font-light tracking-[0.06em] text-fg/85">
        {member.initials}
      </span>
      <span aria-hidden="true" className="absolute bottom-10 h-px w-10 bg-accent" />
    </div>
  );
}

function CardShell({ to, className, children }: { to?: string; className: string; children: ReactNode }) {
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return <article className={className}>{children}</article>;
}

type CompactProps = { member: TeamMember; to?: string; headingLevel?: 'h3' | 'h4' };

export function TeamCard({ member, to, headingLevel = 'h3' }: CompactProps) {
  const Heading = headingLevel;
  return (
    <CardShell
      to={to}
      className="group/tc relative flex flex-col border border-line bg-ink-2 transition-[transform,border-color] duration-700 ease-[var(--ease-editorial)] hover:-translate-y-1 hover:border-line-strong"
    >
      <span
        aria-hidden="true"
        className="absolute -top-px left-0 z-10 h-px w-0 bg-accent transition-[width] duration-700 ease-[var(--ease-editorial)] group-hover/tc:w-full"
      />
      <div className="relative aspect-[4/5] overflow-hidden border-b border-line">
        <Portrait member={member} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-2/80 to-transparent" />
      </div>
      <div className="flex items-end justify-between gap-4 p-6 sm:p-7">
        <div>
          <span className="numeral text-sm text-accent">{member.number}</span>
          <Heading className="mt-3 font-serif text-[1.875rem] leading-[1.05] font-light text-fg">
            <span className="text-fg-2">Adv. </span>
            {member.givenName} {member.familyName}
          </Heading>
          <p className="eyebrow mt-3">{member.role}</p>
        </div>
        {to && (
          <span
            aria-hidden="true"
            className="grid size-11 shrink-0 place-items-center border border-line-strong transition-colors duration-500 group-hover/tc:border-accent"
          >
            <ArrowRight
              strokeWidth={1.5}
              className="size-4 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover/tc:translate-x-1 group-hover/tc:text-accent"
            />
          </span>
        )}
      </div>
    </CardShell>
  );
}

type FeatureProps = {
  member: TeamMember;
  summary: ReactNode;
  children?: ReactNode;
  headingLevel?: 'h2' | 'h3';
};

/** Large editorial profile used for the Principal Advocate. */
export function TeamFeature({ member, summary, children, headingLevel = 'h3' }: FeatureProps) {
  const Heading = headingLevel;
  return (
    <article className="group/tc relative grid gap-10 border-y border-line py-10 md:grid-cols-12 md:gap-8 lg:py-14">
      <div className="relative md:col-span-6 lg:col-span-5">
        <div className="relative aspect-[4/5] overflow-hidden border border-line">
          <Portrait member={member} sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(85%_70%_at_45%_40%,transparent_35%,rgba(5,5,5,0.55)_100%)]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          <span
            aria-hidden="true"
            className="absolute -top-px left-0 h-px w-0 bg-accent transition-[width] duration-1000 ease-[var(--ease-editorial)] group-hover/tc:w-full"
          />
        </div>
        <span aria-hidden="true" className="absolute top-10 -left-px hidden h-28 w-px bg-accent md:block" />
      </div>

      <div className="flex flex-col md:col-span-6 lg:col-span-6 lg:col-start-7">
        <div className="flex items-center justify-between border-b border-line pb-6">
          <span className="numeral text-lg text-accent">{member.number}</span>
          <span className="eyebrow">{member.role}</span>
        </div>
        <Heading className="display mt-10 text-[clamp(3rem,7vw,6.5rem)] text-fg lg:mt-14">
          <span className="block text-[0.42em] tracking-[0.02em] text-fg-2">Adv.</span>
          {member.givenName}
          <br />
          <em className="font-light">{member.familyName}</em>
        </Heading>
        <div className="mt-8 max-w-lg text-[0.9375rem] leading-relaxed text-fg-2 lg:mt-10">{summary}</div>
        <dl className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
          <div>
            <dt className="eyebrow">Practice</dt>
            <dd className="mt-4 space-y-1.5 font-serif text-[1.25rem] leading-snug text-fg">
              {practiceAreas.map((area) => (
                <span key={area.slug} className="block">
                  {area.title}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Courts &amp; Forums</dt>
            <dd className="mt-4 space-y-1.5 font-serif text-[1.25rem] leading-snug text-fg">
              {courts.map((court) => (
                <span key={court.slug} className="block">
                  {court.name}
                </span>
              ))}
            </dd>
          </div>
        </dl>
        {children && <div className="mt-auto pt-10">{children}</div>}
      </div>
    </article>
  );
}
