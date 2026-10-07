import { m, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import type { Picture } from '../assets/index.ts';

type ImageRevealProps = {
  image: Picture;
  alt: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  /** CSS object-position for art-directed cropping. */
  position?: string;
  /** Above-the-fold images load eagerly and skip the reveal mask. */
  priority?: boolean;
  children?: ReactNode;
};

const ease = [0.22, 1, 0.36, 1] as const;

/** Architectural image that unmasks upward and settles from a slight zoom. */
export function ImageReveal({
  image,
  alt,
  sizes = '100vw',
  className = '',
  imgClassName = '',
  position = '50% 50%',
  priority = false,
  children,
}: ImageRevealProps) {
  const reduce = useReducedMotion();
  const animate = !reduce;

  const img = (
    <m.img
      src={image.src}
      srcSet={image.srcSet}
      sizes={image.srcSet ? sizes : undefined}
      width={image.width}
      height={image.height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      style={{ objectPosition: position }}
      className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
      initial={animate ? { scale: 1.12 } : false}
      {...(priority ? { animate: { scale: 1 } } : { whileInView: { scale: 1 }, viewport: { once: true } })}
      transition={{ duration: priority ? 2.2 : 1.6, ease }}
    />
  );

  return (
    <div className={`${/\babsolute\b/.test(className) ? '' : 'relative'} overflow-hidden bg-surface ${className}`}>
      {priority || !animate ? (
        img
      ) : (
        <m.div
          className="absolute inset-0"
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          transition={{ duration: 1.3, ease }}
        >
          {img}
        </m.div>
      )}
      {children}
    </div>
  );
}
