export type PracticeArea = {
  slug: string;
  number: string;
  title: string;
  /** Title split for editorial two-line setting. */
  lines: [string, string];
  description: string;
  scope: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'co-operative-matters',
    number: '01',
    title: 'Co-operative Matters',
    lines: ['Co-operative', 'Matters'],
    description:
      'Legal representation and advisory in matters arising before co-operative courts and related forums.',
    scope: [
      'Legal advisory on co-operative matters',
      'Representation before co-operative courts',
      'Representation before related forums',
    ],
  },
  {
    slug: 'civil-matters',
    number: '02',
    title: 'Civil Matters',
    lines: ['Civil', 'Matters'],
    description: 'Representation and legal assistance in civil disputes, proceedings and related documentation.',
    scope: ['Representation in civil disputes', 'Legal assistance in civil proceedings', 'Related legal documentation'],
  },
  {
    slug: 'criminal-matters',
    number: '03',
    title: 'Criminal Matters',
    lines: ['Criminal', 'Matters'],
    description: 'Legal representation and assistance in criminal proceedings and related legal matters.',
    scope: ['Representation in criminal proceedings', 'Legal assistance in related legal matters'],
  },
];
