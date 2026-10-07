import { images } from '../assets/index.ts';
import { Button } from '../components/Button.tsx';
import { MaskLine, Reveal } from '../components/Reveal.tsx';
import { mailto } from '../data/site.ts';

export function ConsultationCta() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden border-t border-line bg-ink">
      <img
        src={images.highCourtMaidanSoft.src}
        width={images.highCourtMaidanSoft.width}
        height={images.highCourtMaidanSoft.height}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_30%] opacity-[0.16]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/70 to-ink" />
      <div aria-hidden="true" className="glow-accent absolute -bottom-80 left-1/2 -z-10 size-[56rem] -translate-x-1/2" />
      <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />

      <div className="shell relative py-32 lg:py-48">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <Reveal>
            <span aria-hidden="true" className="mx-auto block h-20 w-px bg-gradient-to-b from-transparent to-accent" />
            <p className="eyebrow mt-8">Consultation</p>
          </Reveal>
          <h2 id="cta-title" className="display mt-8 text-[clamp(3rem,8.4vw,8.25rem)] text-fg">
            <MaskLine>Have a Legal Matter</MaskLine>
            <MaskLine delay={0.1}>
              <em className="font-light text-fg-2">to Discuss?</em>
            </MaskLine>
          </h2>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-10 max-w-md text-[1.0625rem] leading-relaxed text-fg-2">
              Speak with our team to understand the appropriate next steps for your matter.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-12 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Button to="/contact">Consult Our Team</Button>
            <Button href={mailto} variant="ghost" arrow="external">
              Email the Office
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
