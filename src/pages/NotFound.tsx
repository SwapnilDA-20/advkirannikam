import { Button } from '../components/Button.tsx';

export default function NotFound() {
  return (
    <section aria-labelledby="nf-title" className="relative flex min-h-[90svh] items-center overflow-hidden">
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="glow-accent pointer-events-none absolute top-1/2 left-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2" />
      <div className="shell relative pt-32 pb-20">
        <p aria-hidden="true" className="outline-numeral text-[clamp(8rem,28vw,22rem)] leading-[0.8]">
          404
        </p>
        <h1 id="nf-title" className="display mt-10 text-[clamp(2.75rem,6vw,5.5rem)] text-fg">
          This page could <em className="font-light text-fg-2">not be found.</em>
        </h1>
        <p className="mt-6 max-w-md text-fg-2">The address may be incorrect, or the page may have moved.</p>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button to="/">Return Home</Button>
          <Button to="/contact" variant="ghost">
            Contact the Office
          </Button>
        </div>
      </div>
    </section>
  );
}
