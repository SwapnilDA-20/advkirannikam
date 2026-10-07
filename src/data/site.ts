/**
 * Canonical origin used for canonical URLs, Open Graph tags and the sitemap.
 * Update this when the production domain is confirmed.
 */
export const SITE_URL = 'https://www.advkirannikam.com';

export const firm = {
  name: 'Adv. Kiran Nikam & Associates',
  nameLine1: 'Adv. Kiran Nikam',
  nameLine2: '& Associates',
  descriptor: 'Advocates & Legal Consultants',
  city: 'Mumbai, Maharashtra',
  email: 'nikamassociates@gmail.com',
  address: {
    lines: ['Shop No. 10, Dynesty Society,', 'Thakur Complex, 90 Feet Road,', 'Kandivali East,', 'Mumbai, Maharashtra'],
    street: 'Shop No. 10, Dynesty Society, Thakur Complex, 90 Feet Road',
    locality: 'Kandivali East, Mumbai',
    region: 'Maharashtra',
    country: 'IN',
  },
} as const;

export const fullAddress = firm.address.lines.join(' ').replace(/,\s*$/, '');

export const mailto = `mailto:${firm.email}`;

export const mailtoConsultation = `mailto:${firm.email}?subject=${encodeURIComponent('Consultation request')}`;

export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Shop No. 10, Dynesty Society, Thakur Complex, 90 Feet Road, Kandivali East, Mumbai, Maharashtra',
)}`;

export type NavItem = { label: string; to: string };

export const primaryNav: NavItem[] = [
  { label: 'About', to: '/about' },
  { label: 'Practice Areas', to: '/practice-areas' },
  { label: 'Legal Team', to: '/legal-team' },
  { label: 'Courts', to: '/courts' },
  { label: 'Contact', to: '/contact' },
];

export const mobileNav: NavItem[] = [{ label: 'Home', to: '/' }, ...primaryNav];
