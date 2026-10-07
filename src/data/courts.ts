export type Court = {
  slug: string;
  number: string;
  name: string;
  lines: [string, string];
  description: string;
};

export const courts: Court[] = [
  {
    slug: 'bombay-high-court',
    number: '01',
    name: 'Bombay High Court',
    lines: ['Bombay', 'High Court'],
    description: 'Representation in matters before the Bombay High Court at Mumbai.',
  },
  {
    slug: 'co-operative-courts',
    number: '02',
    name: 'Co-operative Courts',
    lines: ['Co-operative', 'Courts'],
    description: 'Representation and advisory in proceedings before Co-operative Courts and related forums.',
  },
  {
    slug: 'civil-courts',
    number: '03',
    name: 'Civil Courts',
    lines: ['Civil', 'Courts'],
    description: 'Representation in civil disputes and proceedings before Civil Courts.',
  },
];
