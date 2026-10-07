import type { ReactNode } from 'react';
import { DisclaimerDialog } from '../components/DisclaimerDialog.tsx';
import { Footer } from '../components/Footer.tsx';
import { Navbar } from '../components/Navbar.tsx';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="fixed top-3 left-3 z-[60] -translate-y-24 bg-accent px-5 py-3 text-xs font-medium tracking-[0.2em] text-ink uppercase transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="relative outline-none">
        {children}
      </main>
      <Footer />
      <DisclaimerDialog />
    </>
  );
}
