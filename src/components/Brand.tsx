import { Link } from 'react-router';

type BrandProps = { className?: string; onClick?: () => void };

/** Monogram and two-line wordmark. */
export function Brand({ className = '', onClick }: BrandProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Adv. Kiran Nikam & Associates — Home"
      className={`group/brand flex min-h-11 items-center gap-3.5 ${className}`}
    >
      <span
        aria-hidden="true"
        className="relative grid size-11 shrink-0 place-items-center border border-line-strong transition-colors duration-500 group-hover/brand:border-accent/70"
      >
        <span className="font-serif text-[1.125rem] leading-none tracking-[0.04em] text-fg">KN</span>
        <span className="absolute -bottom-px left-1/2 h-px w-4 -translate-x-1/2 bg-accent" />
      </span>
      <span aria-hidden="true" className="flex flex-col leading-none">
        <span className="font-serif text-[1.0625rem] tracking-[0.06em] text-fg uppercase sm:text-[1.125rem]">
          Adv. Kiran Nikam
        </span>
        <span className="mt-1.5 text-[0.5625rem] font-medium tracking-[0.34em] text-fg-2 uppercase">& Associates</span>
      </span>
    </Link>
  );
}
