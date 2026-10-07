export type Principle = { number: string; title: string; description: string };

export const principles: Principle[] = [
  {
    number: '01',
    title: 'Preparation',
    description: 'Careful understanding of facts, documents and applicable legal position.',
  },
  { number: '02', title: 'Precision', description: 'Clear legal analysis and focused representation.' },
  { number: '03', title: 'Strategy', description: 'A considered approach to every stage of a matter.' },
  {
    number: '04',
    title: 'Confidentiality',
    description: 'Respectful and confidential handling of client information.',
  },
];

export type ProcessStep = { number: string; title: string; description: string };

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'A first conversation to understand the matter and the assistance you are seeking.',
  },
  {
    number: '02',
    title: 'Understanding the Facts',
    description: 'A careful review of the facts, records and documents relevant to the matter.',
  },
  {
    number: '03',
    title: 'Legal Research & Strategy',
    description: 'Research into the applicable legal position and a considered course of action.',
  },
  {
    number: '04',
    title: 'Preparation & Representation',
    description: 'Thorough preparation and focused representation before the appropriate forum.',
  },
  {
    number: '05',
    title: 'Continued Legal Assistance',
    description: 'Ongoing guidance and communication as the matter progresses.',
  },
];

export type Pillar = { number: string; title: string; description: string };

export const pillars: Pillar[] = [
  {
    number: '01',
    title: 'Preparation',
    description: 'Every matter begins with a careful reading of the facts, the record and the documents involved.',
  },
  {
    number: '02',
    title: 'Legal Research',
    description: 'Focused research into the applicable law, so that advice rests on the correct legal position.',
  },
  {
    number: '03',
    title: 'Strategy',
    description: 'A considered approach to each stage of the matter, shaped by the facts and the forum.',
  },
  {
    number: '04',
    title: 'Representation',
    description: 'Clear, prepared and focused representation before the court or forum concerned.',
  },
  {
    number: '05',
    title: 'Client Communication',
    description: 'Clients are kept informed in plain terms, with timely updates as the matter moves forward.',
  },
];
