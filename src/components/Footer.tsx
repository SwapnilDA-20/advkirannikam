import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { courts } from '../data/courts.ts';
import { practiceAreas } from '../data/practiceAreas.ts';
import { directionsUrl, firm, mailto, mobileNav } from '../data/site.ts';

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="eyebrow border-b border-line pb-5">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  );
}

const linkCls = 'link-line inline-flex min-h-10 items-center text-[0.9375rem] text-fg-2 transition-colors hover:text-fg';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-2">
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="glow-accent pointer-events-none absolute -bottom-72 left-1/2 size-[46rem] -translate-x-1/2 opacity-60" />

      <div className="shell relative pt-20 pb-10 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <p className="eyebrow flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-accent" />
              {firm.descriptor}
            </p>
            <p className="display mt-8 text-[clamp(3rem,9vw,4.5rem)] text-fg lg:text-[clamp(4.5rem,7.6vw,8.5rem)]">
              Adv. Kiran Nikam
              <br />
              <em className="text-fg-2">&amp; Associates</em>
            </p>
          </div>
          <div className="flex flex-col justify-end gap-2 lg:col-span-3 lg:items-end lg:text-right">
            <p className="font-serif text-2xl text-fg">{firm.city}</p>
            <a href={mailto} className="link-line self-start text-fg-2 hover:text-fg lg:self-end">
              {firm.email}
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-line pt-14 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4 lg:gap-10">
          <Column title="Navigation">
            <ul className="flex flex-col">
              {mobileNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkCls}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>
          <Column title="Practice Areas">
            <ul className="flex flex-col">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link to={`/practice-areas#${area.slug}`} className={linkCls}>
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>
          <Column title="Courts">
            <ul className="flex flex-col">
              {courts.map((court) => (
                <li key={court.slug}>
                  <Link to={`/courts#${court.slug}`} className={linkCls}>
                    {court.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>
          <Column title="Contact">
            <address className="text-[0.9375rem] leading-relaxed text-fg-2 not-italic">
              {firm.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <div className="mt-4 flex flex-col">
              <a href={mailto} className={`${linkCls} self-start`}>
                Email the office
              </a>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={`${linkCls} self-start`}>
                Get directions<span className="sr-only"> (opens Google Maps in a new tab)</span>
              </a>
            </div>
          </Column>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-8 text-[0.8125rem] text-fg-2 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Adv. Kiran Nikam &amp; Associates. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            <li>
              <Link to="/disclaimer" className="link-line inline-flex min-h-10 items-center hover:text-fg">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link to="/disclaimer#image-credits" className="link-line inline-flex min-h-10 items-center hover:text-fg">
                Image Credits
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
