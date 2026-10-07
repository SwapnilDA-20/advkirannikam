import { m, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'li' | 'article' | 'section' | 'header';
};

/** Fades and lifts content into place the first time it scrolls into view. */
export function Reveal({ children, className, delay = 0, y = 24, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion();
  const Component = m[as];
  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}

/** Slides a single line of display type up from behind a mask. */
export function MaskLine({
  children,
  delay = 0,
  className = '',
  animateOnMount = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  animateOnMount?: boolean;
}) {
  const reduce = useReducedMotion();
  const target = { y: '0%' };
  return (
    <span className={`-mb-[0.08em] block overflow-hidden pb-[0.16em] ${className}`}>
      <m.span
        className="block"
        initial={reduce ? false : { y: '105%' }}
        {...(animateOnMount
          ? { animate: target }
          : { whileInView: target, viewport: { once: true, margin: '0px 0px -10% 0px' } })}
        transition={{ duration: 1.05, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </m.span>
    </span>
  );
}
