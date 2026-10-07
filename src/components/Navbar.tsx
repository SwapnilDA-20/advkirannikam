import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { primaryNav } from '../data/site.ts';
import { Brand } from './Brand.tsx';
import { Button } from './Button.tsx';
import { MobileMenu } from './MobileMenu.tsx';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-[var(--ease-editorial)] ${
          scrolled ? 'border-line/80 bg-[rgba(5,5,5,0.88)] backdrop-blur-xl' : 'border-transparent bg-transparent'
        }`}
      >
        <div
          className={`shell flex items-center justify-between transition-[height] duration-500 ease-[var(--ease-editorial)] ${
            scrolled ? 'h-[4.5rem]' : 'h-20 lg:h-24'
          }`}
        >
          <Brand />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9 xl:gap-11">
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `link-line py-2 text-[0.6875rem] font-medium tracking-[0.22em] uppercase transition-colors ${
                        isActive ? 'text-fg' : 'text-fg-2 hover:text-fg'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden xl:block">
              <Button to="/contact" className="!min-h-11 !px-5">
                Consult Our Team
              </Button>
            </div>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="group/menu -mr-2 flex size-12 flex-col items-end justify-center gap-[7px] px-2 lg:hidden"
            >
              <span className="h-px w-7 bg-fg transition-all duration-500 group-hover/menu:w-5" />
              <span className="h-px w-5 bg-fg transition-all duration-500 group-hover/menu:w-7" />
              <span className="h-px w-3 bg-accent" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => {
          setMenuOpen(false);
          toggleRef.current?.focus();
        }}
      />
    </>
  );
}
