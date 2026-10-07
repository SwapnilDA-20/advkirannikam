import { m } from 'motion/react';
import type { ReactNode } from 'react';

/** Quiet cross-fade between routes. Motion's reducedMotion setting removes the lift. */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
      exit={{ opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } }}
    >
      {children}
    </m.div>
  );
}
