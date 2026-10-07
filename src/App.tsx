import { AnimatePresence, LazyMotion, MotionConfig, domAnimation } from 'motion/react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { PageTransition } from './components/PageTransition.tsx';
import { Seo } from './components/Seo.tsx';
import { MainLayout } from './layouts/MainLayout.tsx';
import Home from './pages/Home.tsx';

const About = lazy(() => import('./pages/About.tsx'));
const PracticeAreas = lazy(() => import('./pages/PracticeAreas.tsx'));
const LegalTeam = lazy(() => import('./pages/LegalTeam.tsx'));
const Courts = lazy(() => import('./pages/Courts.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const Disclaimer = lazy(() => import('./pages/Disclaimer.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));

function AnimatedRoutes() {
  const location = useLocation();
  const path = location.pathname.replace(/\/+$/, '') || '/';

  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
      <PageTransition key={path}>
        <Seo path={path} />
        <Suspense fallback={<div className="min-h-svh" />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/legal-team" element={<LegalTeam />} />
            <Route path="/courts" element={<Courts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </PageTransition>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <MainLayout>
            <AnimatedRoutes />
          </MainLayout>
        </MotionConfig>
      </LazyMotion>
    </BrowserRouter>
  );
}
