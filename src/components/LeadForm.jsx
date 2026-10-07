import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '../data/site.js';
import { telHref } from '../lib/paths.js';

const empty = { name: '', contact: '', brief: '', company: '' };

export function LeadForm({ compact = false }) {
  const [fields, setFields] = useState(empty);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  function onChange(e) {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (fields.company) return;
    const name = fields.name.trim();
    const contact = fields.contact.trim();
    const brief = fields.brief.trim();
    if (!name) return setError('Please add your name.');
    if (!contact) return setError('Please add a phone number or email.');
    if (!brief) return setError('Please add a short job brief.');
    setBusy(true);
    await new Promise((r) => setTimeout(r, 420));
    setBusy(false);
    setSent(true);
  }

  return (
    <div className={compact ? '' : 'relative overflow-hidden rounded-3xl border border-white/20 bg-navy/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8'}>
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 py-6"
          >
            <p className="font-display text-2xl text-white">Request received.</p>
            <p className="text-mist">
              Thanks {fields.name.split(' ')[0]}. David will get back to you on {fields.contact}. For a faster start,
              call now.
            </p>
            <a
              href={telHref()}
              className="cta-yellow inline-flex items-center justify-center rounded-full px-6 py-3 text-sm tracking-wide"
            >
              Call David {site.phoneDisplay}
            </a>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} className="space-y-4" noValidate>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow">Job brief</p>
              <h3 className="font-display mt-2 text-2xl text-white sm:text-3xl">Tell David what the site needs</h3>
              <p className="mt-2 text-sm text-mist">Name, phone or email, and a short brief. No call-centre runaround.</p>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-mist">Name</span>
              <input
                name="name"
                value={fields.name}
                onChange={onChange}
                autoComplete="name"
                className="w-full rounded-2xl border border-white/10 bg-navy/70 px-4 py-3 text-white outline-none ring-yellow/0 transition focus:border-yellow/60 focus:ring-2 focus:ring-yellow/30"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-mist">Phone or email</span>
              <input
                name="contact"
                value={fields.contact}
                onChange={onChange}
                autoComplete="tel"
                className="w-full rounded-2xl border border-white/10 bg-navy/70 px-4 py-3 text-white outline-none transition focus:border-yellow/60 focus:ring-2 focus:ring-yellow/30"
                placeholder="0412 … or you@email"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-mist">Job brief</span>
              <textarea
                name="brief"
                value={fields.brief}
                onChange={onChange}
                rows={4}
                className="w-full resize-y rounded-2xl border border-white/10 bg-navy/70 px-4 py-3 text-white outline-none transition focus:border-yellow/60 focus:ring-2 focus:ring-yellow/30"
                placeholder="Suburb, site prep / soil / concrete / demolition, timing…"
              />
            </label>
            <input
              name="company"
              value={fields.company}
              onChange={onChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            {error ? <p className="text-sm text-yellow">{error}</p> : null}
            <button
              type="submit"
              disabled={busy}
              className="cta-yellow inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm tracking-wide disabled:opacity-70"
            >
              {busy ? 'Sending…' : 'Request a call-back'}
            </button>
            <p className="text-center text-xs text-mist">
              Or call{' '}
              <a className="font-semibold text-yellow underline-offset-2 hover:underline" href={telHref()}>
                {site.phoneDisplay}
              </a>{' '}
              · {site.hoursShort}
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
