import { SectionHeading } from '../components/SectionHeading.tsx';
import { Timeline } from '../components/Timeline.tsx';
import { processSteps } from '../data/approach.ts';

export function ProcessSection({ number = '04', className = '' }: { number?: string; className?: string }) {
  return (
    <section aria-labelledby="process-title" className={`relative py-28 lg:py-40 ${className}`}>
      <div className="shell">
        <SectionHeading
          number={number}
          label="The Process"
          id="process-title"
          title={
            <>
              From Understanding
              <br />
              <em className="font-light text-fg-2">to Representation.</em>
            </>
          }
          intro="Each matter moves through the same careful sequence — from a first conversation to continued assistance."
        />
        <div className="mt-20 lg:mt-28">
          <Timeline steps={processSteps} />
        </div>
      </div>
    </section>
  );
}
