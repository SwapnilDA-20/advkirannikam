import { AboutPreview } from '../sections/AboutPreview.tsx';
import { ConsultationCta } from '../sections/ConsultationCta.tsx';
import { ContactSection } from '../sections/ContactSection.tsx';
import { CourtsSection } from '../sections/CourtsSection.tsx';
import { CourtsStrip } from '../sections/CourtsStrip.tsx';
import { Hero } from '../sections/Hero.tsx';
import { PracticePreview } from '../sections/PracticePreview.tsx';
import { PrinciplesSection } from '../sections/PrinciplesSection.tsx';
import { ProcessSection } from '../sections/ProcessSection.tsx';
import { TeamPreview } from '../sections/TeamPreview.tsx';

export default function Home() {
  return (
    <>
      <Hero />
      <CourtsStrip />
      <AboutPreview />
      <PracticePreview />
      <TeamPreview />
      <PrinciplesSection />
      <ProcessSection />
      <CourtsSection />
      <ConsultationCta />
      <ContactSection />
    </>
  );
}
