import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';

type Variant = 'primary' | 'ghost';

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Use the diagonal arrow for links that leave the site or open another app. */
  arrow?: 'right' | 'external' | 'none';
};

type ButtonProps = BaseProps &
  (
    | { to: string; href?: never; onClick?: never; type?: never }
    | { href: string; to?: never; onClick?: never; type?: never; newTab?: boolean }
    | { onClick: () => void; type?: 'button' | 'submit'; to?: never; href?: never }
  );

const base =
  'group/btn relative inline-flex min-h-[3.25rem] items-center justify-center gap-3 overflow-hidden px-5 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-center transition-colors duration-500 ease-[var(--ease-editorial)] select-none xs:px-7 xs:tracking-[0.24em]';

const variants: Record<Variant, string> = {
  primary: 'border border-accent bg-ink-2 text-fg hover:bg-accent hover:text-ink focus-visible:bg-accent focus-visible:text-ink',
  ghost: 'border border-line-strong text-fg hover:border-fg/70 focus-visible:border-fg/70',
};

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', className = '', arrow = 'right' } = props;
  const cls = `${base} ${variants[variant]} ${className}`;
  const Icon = arrow === 'external' ? ArrowUpRight : ArrowRight;
  const content = (
    <>
      <span>{children}</span>
      {arrow !== 'none' && (
        <Icon
          aria-hidden="true"
          strokeWidth={1.5}
          className={`size-4 shrink-0 transition-transform duration-500 ease-[var(--ease-editorial)] ${
            arrow === 'external'
              ? 'group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5'
              : 'group-hover/btn:translate-x-1'
          }`}
        />
      )}
    </>
  );

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {content}
      </Link>
    );
  }
  if ('href' in props && props.href) {
    const newTab = 'newTab' in props && props.newTab;
    return (
      <a href={props.href} className={cls} {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {content}
        {newTab && <span className="sr-only">(opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <button type={props.type ?? 'button'} onClick={props.onClick} className={cls}>
      {content}
    </button>
  );
}

type TextLinkProps = { to?: string; href?: string; children: ReactNode; className?: string };

/** Understated text link with an underline that draws in on hover. */
export function TextLink({ to, href, children, className = '' }: TextLinkProps) {
  const cls = `group/tl inline-flex min-h-11 items-center gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-fg ${className}`;
  const inner = (
    <>
      <span className="link-line group-hover/tl:bg-[length:100%_1px]">{children}</span>
      <ArrowRight
        aria-hidden="true"
        strokeWidth={1.5}
        className="size-4 text-accent transition-transform duration-500 ease-[var(--ease-editorial)] group-hover/tl:translate-x-1"
      />
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
}
