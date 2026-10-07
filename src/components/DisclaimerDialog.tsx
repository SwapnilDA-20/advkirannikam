import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { Button } from './Button.tsx';

const STORAGE_KEY = 'kn-disclaimer-accepted';

function hasAccepted() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

/**
 * First-visit acknowledgement required by the Bar Council of India rules on
 * advertising by advocates. Uses the native <dialog> for focus containment.
 */
export function DisclaimerDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!hasAccepted()) setOpen(true);
  }, []);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const root = document.documentElement;
    if (open && !dialog.open) {
      dialog.showModal();
      root.style.overflow = 'hidden';
    }
    if (!open && dialog.open) dialog.close();
    return () => {
      root.style.overflow = '';
    };
  }, [open]);

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* Storage may be unavailable in private modes; acceptance then lasts for this visit. */
    }
    setOpen(false);
  };

  return (
    <dialog
      ref={ref}
      aria-labelledby="disclaimer-title"
      aria-describedby="disclaimer-body"
      onCancel={(event) => event.preventDefault()}
      className="fixed inset-0 m-auto max-h-[calc(100svh-2rem)] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto border border-line bg-ink-2 p-0 text-fg shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] open:animate-[fadeIn_0.5s_ease-out]"
    >
      <span aria-hidden="true" className="absolute top-0 left-0 h-px w-24 bg-accent" />
      <div className="p-7 sm:p-12">
        <p className="eyebrow flex items-center gap-4">
          <span aria-hidden="true" className="h-px w-10 bg-accent" />
          Bar Council of India
        </p>
        <h2 id="disclaimer-title" className="display mt-6 text-[clamp(2.25rem,6vw,3.25rem)]">
          Disclaimer
        </h2>
        <div id="disclaimer-body" className="mt-6 space-y-4 text-[0.9375rem] leading-relaxed text-fg-2">
          <p>
            The rules of the Bar Council of India do not permit advocates to solicit work or advertise. By clicking
            &ldquo;I Agree&rdquo; below, you acknowledge that:
          </p>
          <ul className="space-y-3 border-l border-line pl-5">
            <li>
              there has been no advertisement, personal communication, solicitation, invitation or inducement of any
              sort from Adv. Kiran Nikam &amp; Associates or any of its members to solicit work through this website;
            </li>
            <li>you are seeking information about the practice of your own accord and for your own use;</li>
            <li>
              the information on this website is provided for general information only, does not constitute legal
              advice, and does not create an advocate–client relationship.
            </li>
          </ul>
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button onClick={accept} className="sm:min-w-44">
            I Agree
          </Button>
          <Link
            to="/disclaimer"
            onClick={() => setOpen(false)}
            className="link-line inline-flex min-h-11 items-center self-start text-[0.6875rem] font-medium tracking-[0.24em] text-fg-2 uppercase hover:text-fg sm:self-auto sm:px-4"
          >
            Read full disclaimer
          </Link>
        </div>
      </div>
    </dialog>
  );
}
