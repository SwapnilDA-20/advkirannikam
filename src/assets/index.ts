import atharv400 from './images/atharv-nikam-400.webp';
import atharv640 from './images/atharv-nikam-640.webp';
import maidan1600 from './images/bhc-maidan-1600.webp';
import maidan1920 from './images/bhc-maidan-1920.webp';
import maidan960 from './images/bhc-maidan-960.webp';
import { heroImage } from '../data/heroImage.ts';
import mural720 from './images/chambers-mural-720.webp';
import corridorAdvocate640 from './images/corridor-advocate-640.webp';
import corridorAdvocate960 from './images/corridor-advocate-960.webp';
import corridorWide640 from './images/corridor-wide-640.webp';
import corridorWide960 from './images/corridor-wide-960.webp';
import kiran560 from './images/kiran-nikam-560.webp';
import kiran826 from './images/kiran-nikam-826.webp';
import sachin400 from './images/sachin-thorat-400.webp';
import sachin640 from './images/sachin-thorat-640.webp';
import sanchit400 from './images/sanchit-nikam-400.webp';
import sanchit640 from './images/sanchit-nikam-640.webp';

export type Picture = {
  src: string;
  srcSet?: string;
  width: number;
  height: number;
};

export const images = {
  highCourtTower: {
    src: heroImage.src,
    srcSet: heroImage.srcSet,
    width: heroImage.width,
    height: heroImage.height,
  },
  highCourtMaidanSoft: { src: maidan960, width: 960, height: 400 },
  highCourtMaidan: {
    src: maidan1600,
    srcSet: `${maidan960} 960w, ${maidan1600} 1600w, ${maidan1920} 1920w`,
    width: 1920,
    height: 800,
  },
  corridorWide: {
    src: corridorWide960,
    srcSet: `${corridorWide640} 640w, ${corridorWide960} 960w`,
    width: 960,
    height: 1280,
  },
  corridorAdvocate: {
    src: corridorAdvocate960,
    srcSet: `${corridorAdvocate640} 640w, ${corridorAdvocate960} 960w`,
    width: 960,
    height: 1280,
  },
  chambersMural: { src: mural720, width: 720, height: 480 },
  kiranNikam: {
    src: kiran826,
    srcSet: `${kiran560} 560w, ${kiran826} 826w`,
    width: 826,
    height: 1032,
  },
  sachinThorat: {
    src: sachin640,
    srcSet: `${sachin400} 400w, ${sachin640} 640w`,
    width: 640,
    height: 800,
  },
  atharvNikam: {
    src: atharv640,
    srcSet: `${atharv400} 400w, ${atharv640} 640w`,
    width: 640,
    height: 800,
  },
  sanchitNikam: {
    src: sanchit640,
    srcSet: `${sanchit400} 400w, ${sanchit640} 640w`,
    width: 640,
    height: 800,
  },
} satisfies Record<string, Picture>;
