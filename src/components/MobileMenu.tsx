import { X } from 'lucide-react';
import { AnimatePresence, m } from 'motion/react';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router';
import { firm, mailto, mobileNav } from '../data/site.ts';
import { Brand } from './Brand.tsx';
import { Button } from './Button.tsx';

type MobileMenuProps = { open: boolean; onClose: () => void };

const ease = [0.22, 1, 0.36, 1] as const;

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = 'hidden';
    const frame = requestAnimationFrame(() => closeRef.current?.focus());

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(frame);
      root.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <m.div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink lg:hidden"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.6, ease }}
        >
          <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />
          <div aria-hidden="true" className="glow-accent pointer-events-none absolute -right-40 bottom-0 size-[28rem]" />

          <div className="shell relative flex h-20 shrink-0 items-center justify-between">
            <Brand onClick={onClose} />
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="-mr-2 grid size-12 place-items-center text-fg transition-colors hover:text-accent"
            >
              <X strokeWidth={1.25} className="size-7" />
            </button>
          </div>

          <nav aria-label="Mobile" className="shell relative flex-1 pt-8 pb-10">
            <ul className="border-t border-line">
              {mobileNav.map((item, index) => (
                <m.li
                  key={item.to}
                  className="border-b border-line"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18 + index * 0.05, ease }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `group/ml flex min-h-16 items-baseline gap-5 py-3 transition-colors ${isActive ? 'text-fg' : 'text-fg-2'}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span aria-hidden="true" className={`numeral w-6 text-sm ${isActive ? 'text-accent' : 'text-fg-3'}`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="font-serif text-[clamp(2rem,9vw,2.75rem)] leading-tight font-light tracking-[-0.01em] transition-transform duration-500 group-hover/ml:translate-x-1.5">
                          {item.label}
                        </span>
                      </>
                    )}
                  </NavLink>
                </m.li>
              ))}
            </ul>
          </nav>

          <m.div
            className="shell relative shrink-0 pb-[max(2rem,env(safe-area-inset-bottom))]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button to="/contact" className="w-full">
              Consult Our Team
            </Button>
            <div className="mt-6 flex flex-col gap-1 text-sm text-fg-2">
              <a href={mailto} className="link-line min-h-11 self-start py-3">
                {firm.email}
              </a>
              <p>Kandivali East, {firm.city}</p>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
