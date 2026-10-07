import { SITE_URL, firm } from './site.ts';

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  /** Sitemap priority, 0.0 – 1.0 */
  priority: number;
};

export const pages: PageMeta[] = [
  {
    path: '/',
    title: 'Adv. Kiran Nikam & Associates | Advocates in Mumbai',
    description:
      'Adv. Kiran Nikam & Associates is a legal practice in Mumbai handling Co-operative, Civil and Criminal matters, with practice before the Bombay High Court, Co-operative Courts and Civil Courts.',
    priority: 1,
  },
  {
    path: '/about',
    title: 'About the Practice | Adv. Kiran Nikam & Associates',
    description:
      'Adv. Kiran Nikam leads a Mumbai legal practice focused on representation, advisory and dispute resolution across civil, criminal and co-operative matters.',
    priority: 0.8,
  },
  {
    path: '/practice-areas',
    title: 'Practice Areas — Co-operative, Civil & Criminal Matters | Adv. Kiran Nikam & Associates',
    description:
      'Legal representation and advisory in Co-operative, Civil and Criminal matters from Adv. Kiran Nikam & Associates, Kandivali East, Mumbai.',
    priority: 0.9,
  },
  {
    path: '/legal-team',
    title: 'Legal Team | Adv. Kiran Nikam & Associates',
    description:
      'Meet the legal team: Adv. Kiran Nikam, Principal Advocate, with Adv. Sachin Thorat, Adv. Atharv Nikam and Adv. Sanchit Nikam.',
    priority: 0.8,
  },
  {
    path: '/courts',
    title: 'Courts & Jurisdiction | Adv. Kiran Nikam & Associates',
    description:
      'Adv. Kiran Nikam & Associates practises before the Bombay High Court, Co-operative Courts and Civil Courts in Mumbai, Maharashtra.',
    priority: 0.7,
  },
  {
    path: '/contact',
    title: 'Contact the Office | Adv. Kiran Nikam & Associates',
    description:
      'Contact Adv. Kiran Nikam & Associates at Shop No. 10, Dynesty Society, Thakur Complex, 90 Feet Road, Kandivali East, Mumbai, or by email at nikamassociates@gmail.com.',
    priority: 0.8,
  },
  {
    path: '/disclaimer',
    title: 'Disclaimer | Adv. Kiran Nikam & Associates',
    description:
      'Disclaimer for the website of Adv. Kiran Nikam & Associates, in accordance with the rules of the Bar Council of India.',
    priority: 0.3,
  },
];

export const notFoundMeta: PageMeta = {
  path: '/404',
  title: 'Page Not Found | Adv. Kiran Nikam & Associates',
  description: 'The page you are looking for could not be found.',
  priority: 0,
};

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export function canonicalFor(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function metaFor(path: string): PageMeta {
  return pages.find((p) => p.path === path) ?? notFoundMeta;
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${SITE_URL}/#practice`,
  name: firm.name,
  description: pages[0].description,
  url: `${SITE_URL}/`,
  image: OG_IMAGE,
  email: firm.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: firm.address.street,
    addressLocality: firm.address.locality,
    addressRegion: firm.address.region,
    addressCountry: firm.address.country,
  },
  areaServed: { '@type': 'City', name: 'Mumbai' },
  knowsAbout: ['Co-operative Matters', 'Civil Matters', 'Criminal Matters'],
  employee: [
    { '@type': 'Person', name: 'Adv. Kiran Nikam', jobTitle: 'Principal Advocate' },
    { '@type': 'Person', name: 'Adv. Sachin Thorat', jobTitle: 'Junior Advocate' },
    { '@type': 'Person', name: 'Adv. Atharv Nikam', jobTitle: 'Junior Advocate' },
    { '@type': 'Person', name: 'Adv. Sanchit Nikam', jobTitle: 'Junior Advocate' },
  ],
};
