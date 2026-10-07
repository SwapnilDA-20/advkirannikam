import { images, type Picture } from '../assets/index.ts';

export type TeamMember = {
  slug: string;
  number: string;
  name: string;
  /** Name split for editorial setting, without the honorific. */
  givenName: string;
  familyName: string;
  role: string;
  initials: string;
  photo?: Picture;
  /** Focal point for object-position when cropping the photograph. */
  focus?: string;
};

export const principal: TeamMember = {
  slug: 'kiran-nikam',
  number: '01',
  name: 'Adv. Kiran Nikam',
  givenName: 'Kiran',
  familyName: 'Nikam',
  role: 'Principal Advocate',
  initials: 'KN',
  photo: images.kiranNikam,
  focus: '50% 30%',
};

export const associates: TeamMember[] = [
  {
    slug: 'sachin-thorat',
    number: '02',
    name: 'Adv. Sachin Thorat',
    givenName: 'Sachin',
    familyName: 'Thorat',
    role: 'Junior Advocate',
    initials: 'ST',
    photo: images.sachinThorat,
    focus: '50% 25%',
  },
  {
    slug: 'atharv-nikam',
    number: '03',
    name: 'Adv. Atharv Nikam',
    givenName: 'Atharv',
    familyName: 'Nikam',
    role: 'Junior Advocate',
    initials: 'AN',
    photo: images.atharvNikam,
    focus: '50% 30%',
  },
  {
    slug: 'sanchit-nikam',
    number: '04',
    name: 'Adv. Sanchit Nikam',
    givenName: 'Sanchit',
    familyName: 'Nikam',
    role: 'Junior Advocate',
    initials: 'SN',
    photo: images.sanchitNikam,
    focus: '50% 25%',
  },
];

export const team: TeamMember[] = [principal, ...associates];
