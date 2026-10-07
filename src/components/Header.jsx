import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '../data/site.js';
import { asset, telHref } from '../lib/paths.js';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#areas', label: 'Areas' },
  { href: '#quote', label: 'Quote' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  function go(href) {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-yellow focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all ${
          scrolled ? 'bg-navy/90 shadow-lg shadow-black/30 backdrop-blur-xl' : 'bg-gradient-to-b from-ink/80 to-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="group relative z-10 shrink-0" onClick={() => setOpen(false)}>
            <span className="flex items-center rounded-2xl bg-white p-1.5 shadow-[0_8px_30px_rgba(0,96,208,0.35)] ring-1 ring-black/10">
              <img
                src={asset('images/logo/logo-1.png')}
                alt={site.brand}
                width={210}
                height={98}
                className="h-10 w-auto object-contain object-left sm:h-12"
              />
            </span>
          </a>

          <nav className="ml-4 hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(l.href);
                }}
                className="rounded-full px-3 py-2 text-sm font-medium text-foam/80 transition hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <a
              href={telHref()}
              className="cta-yellow hidden items-center rounded-full px-4 py-2.5 text-sm sm:inline-flex"
            >
              Call David
            </a>
            <button
              type="button"
              className="relative z-50 ml-0 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1.5">
                <span className={`block h-0.5 w-5 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 bg-white transition ${open ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-40 bg-ink/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile"
              className="fixed inset-y-0 right-0 z-50 flex w-[min(86vw,22rem)] flex-col border-l border-white/10 bg-navy px-6 pb-8 pt-24 shadow-2xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 36 }}
            >
              <p className="mb-6 text-xs uppercase tracking-[0.2em] text-yellow">Menu</p>
              <div className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="rounded-2xl px-3 py-3 text-lg font-semibold text-white hover:bg-white/10"
                    onClick={(e) => {
                      e.preventDefault();
                      go(l.href);
                    }}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </div>
              <a
                href={telHref()}
                className="cta-yellow mt-8 inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm"
              >
                Call David {site.phoneDisplay}
              </a>
              <p className="mt-4 text-sm text-mist">{site.hours}</p>
              <p className="text-sm text-mist">{site.address}</p>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
