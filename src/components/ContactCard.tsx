import type { ReactNode } from 'react';

type ContactCardProps = {
  number: string;
  label: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
};

export function ContactCard({ number, label, children, action, className = '' }: ContactCardProps) {
  return (
    <div
      className={`group/ct relative flex h-full flex-col border border-line bg-gradient-to-b from-surface to-ink-2 p-7 transition-colors duration-700 hover:border-line-strong sm:p-9 ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute -top-px left-0 h-px w-12 bg-accent transition-[width] duration-700 ease-[var(--ease-editorial)] group-hover/ct:w-full"
      />
      <div className="flex items-center justify-between">
        <span className="numeral text-sm text-accent">{number}</span>
        <h3 className="eyebrow">{label}</h3>
      </div>
      <div className="mt-10 flex-1">{children}</div>
      {action && <div className="mt-10">{action}</div>}
    </div>
  );
}
