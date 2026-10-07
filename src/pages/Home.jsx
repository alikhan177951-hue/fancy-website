import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { LeadForm } from '../components/LeadForm.jsx';
import { Lightbox } from '../components/Lightbox.jsx';
import { Reveal, Stagger, fadeUp } from '../components/Reveal.jsx';
import { areas, gallery, processSteps, reviews, services, site, why } from '../data/site.js';
import { asset, telHref } from '../lib/paths.js';

const marquee = [...areas, 'Western Melbourne', ...areas, 'Outer on request'];

export function Home() {
  const [light, setLight] = useState(null);

  return (
    <div id="top" className="min-h-screen bg-ink">
      <Header />
      <main id="main">
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Process />
        <Gallery light={light} setLight={setLight} />
        <Why />
        <Reviews />
        <Areas />
        <Quote />
      </main>
      <Footer />
      <Lightbox
        items={gallery}
        index={light}
        onClose={() => setLight(null)}
        onPrev={() => setLight((i) => (i == null ? 0 : (i + gallery.length - 1) % gallery.length))}
        onNext={() => setLight((i) => (i == null ? 0 : (i + 1) % gallery.length))}
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <motion.img
        src={asset('images/gallery/aa.jpeg')}
        alt="DB Bobcat on a western Melbourne job site"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-brand/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <div className="grain" />
      <div className="grid-fade absolute inset-0 opacity-60" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 lg:justify-center lg:pb-24">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Altona Meadows · Owner-operated by David
        </motion.p>
        <motion.h1
          className="font-display mt-4 max-w-3xl text-[clamp(2.4rem,7vw,5.4rem)] leading-[0.95] text-white"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Western Melbourne earthmoving,{' '}
          <span className="text-yellow">without the runaround.</span>
        </motion.h1>
        <motion.p
          className="mt-5 max-w-xl text-base leading-relaxed text-foam/90 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          One-stop excavation for residential and commercial work. Site prep, soil and rock, rubbish, concrete,
          small demolition, and a proper clean-up. One operator. One number.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58 }}
        >
          <motion.a
            href={telHref()}
            className="cta-yellow inline-flex items-center rounded-full px-6 py-3.5 text-sm shadow-[0_12px_40px_rgba(240,240,96,0.28)]"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Call David {site.phoneDisplay}
          </motion.a>
          <motion.a
            href="#quote"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
            whileHover={{ y: -2 }}
          >
            Get a quote
          </motion.a>
        </motion.div>
        <motion.dl
          className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          {[
            ['Hours', site.hours],
            ['Yard', '8 Lush Crt, Altona Meadows'],
            ['Email', site.email],
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-yellow">{k}</dt>
              <dd className="mt-1 text-sm font-medium text-white">{v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

function Ticker() {
  const loop = [...marquee, ...marquee];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-brand">
      <motion.div
        className="flex w-max gap-10 py-3 pr-10"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
      >
        {loop.map((a, i) => (
          <span key={`${a}-${i}`} className="text-sm font-semibold uppercase tracking-[0.22em] text-yellow">
            {a} <span className="text-white/50">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function About() {
  return (
    <section className="relative overflow-hidden py-24" id="about">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-brand/30 blur-2xl" />
            <figure className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl">
              <img
                src={asset('images/gallery/slider-locally-owned.jpg')}
                alt="Locally owned DB Bobcat plant"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-5 text-sm text-white">
                Locally owned · Altona Meadows VIC
              </figcaption>
            </figure>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow">About</p>
            <h2 className="font-display mt-3 text-4xl text-white sm:text-5xl">David on the tools — not a call centre.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-mist leading-relaxed">
              At DB Bobcat and Tipper Hire we provide top-quality services, specialising in site cleaning, soil
              removal, rock removal, rubbish removal, concrete removal, small demolition, and concrete cutting. The
              owner-operator has years of experience and is passionate about reliable, efficient excavation.
            </p>
            <p className="mt-4 text-mist leading-relaxed">
              Each project is unique. We work closely with clients from site preparation through demolition and
              clean-up. As a reputable, locally owned business we take pride in customer satisfaction, safety, and
              environmental responsibility.
            </p>
          </Reveal>
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-3" delay={0.15}>
            {why.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="font-semibold text-yellow">{item.title}</p>
                <p className="mt-2 text-sm text-mist">{item.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative bg-navy py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow">Eight offerings</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl text-white sm:text-5xl">
            Bobcat and tipper work, end to end.
          </h2>
          <p className="mt-4 max-w-2xl text-mist">
            Competitive pricing and packages to suit the site and budget. From first cut to last load, David runs the
            machine himself.
          </p>
        </Reveal>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <motion.a
              key={s.id}
              href={`#${s.id}`}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative isolate overflow-hidden rounded-3xl border border-white/10 bg-ink"
            >
              <img
                src={asset(s.image)}
                alt=""
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-display text-lg text-white">{s.title}</h3>
                <p className="mt-1 line-clamp-3 text-xs text-foam/80">{s.blurb}</p>
              </div>
            </motion.a>
          ))}
        </Stagger>
        <div className="mt-14 space-y-10">
          {services.map((s, i) => (
            <Reveal key={s.id}>
              <article
                id={s.id}
                className={`grid items-center gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 sm:p-6 lg:grid-cols-2 ${
                  i % 2 ? 'lg:[&>img]:order-2' : ''
                }`}
              >
                <img src={asset(s.image)} alt={s.title} className="h-56 w-full rounded-2xl object-cover sm:h-72" />
                <div className="px-2 pb-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-yellow">0{i + 1}</p>
                  <h3 className="font-display mt-2 text-3xl text-white">{s.title}</h3>
                  <p className="mt-3 text-mist">{s.blurb}</p>
                  <a
                    href={telHref()}
                    className="cta-yellow mt-6 inline-flex rounded-full px-5 py-2.5 text-sm"
                  >
                    Call David about {s.title.toLowerCase()}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24">
      <div className="grid-fade absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow">Our process</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl text-white sm:text-5xl">Three steps. Then the machine rolls.</h2>
          <p className="mt-4 max-w-2xl text-mist">
            Simple and straightforward. We keep you informed every step of the way, and we’re always happy to answer
            questions.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                className="relative h-full overflow-hidden rounded-[1.75rem] border border-yellow/20 bg-gradient-to-br from-brand/40 to-navy p-7"
              >
                <span className="font-display text-6xl text-yellow/30">{step.n}</span>
                <h3 className="font-display mt-4 text-2xl text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foam/85">{step.body}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ setLight }) {
  return (
    <section id="gallery" className="bg-navy py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow">Gallery</p>
          <h2 className="font-display mt-3 text-4xl text-white sm:text-5xl">Work that speaks for itself.</h2>
          <p className="mt-4 max-w-2xl text-mist">
            Site preparation and demolition jobs from the live gallery. Tap a frame for the lightbox.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {gallery.map((g, i) => (
            <motion.button
              key={g.src}
              type="button"
              onClick={() => setLight(i)}
              className={`group relative overflow-hidden rounded-2xl ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
              whileHover={{ scale: 0.99 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.04 }}
            >
              <img
                src={asset(g.src)}
                alt={g.alt}
                className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                  i === 0 ? 'aspect-square sm:aspect-auto sm:h-full' : 'aspect-[4/3]'
                }`}
              />
              <span className="pointer-events-none absolute inset-0 bg-brand/0 transition group-hover:bg-brand/20" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <img
            src={asset('images/gallery/why-choose-us.jpg')}
            alt="DB Bobcat and tipper on a job"
            className="w-full rounded-[2rem] object-cover shadow-2xl ring-1 ring-white/10"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow">Get an estimate</p>
          <h2 className="font-display mt-3 text-4xl text-white">On time. On budget. On the tools.</h2>
          <p className="mt-4 text-mist leading-relaxed">
            Completing a project on time and within budget is crucial. We give residential and commercial clients an
            efficient, reliable service focused on results. If you want an estimate, get in touch — we’ll discuss
            requirements and provide an accurate figure.
          </p>
          <a href="#quote" className="cta-yellow mt-6 inline-flex rounded-full px-6 py-3 text-sm">
            Request a call-back
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-navy py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow">Reviews from the live site</p>
          <h2 className="font-display mt-3 text-4xl text-white sm:text-5xl">What clients told David.</h2>
        </Reveal>
        <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="min-w-[min(100%,22rem)] snap-start rounded-[1.75rem] border border-white/10 bg-ink/60 p-6"
            >
              <p className="text-yellow">★★★★★</p>
              <p className="mt-3 text-sm leading-relaxed text-foam/90">“{r.quote}”</p>
              <footer className="mt-5">
                <cite className="not-italic font-semibold text-white">{r.name}</cite>
                {r.role ? <p className="text-xs uppercase tracking-wider text-mist">{r.role}</p> : null}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section id="areas" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow">Areas served</p>
          <h2 className="font-display mt-3 text-4xl text-white sm:text-5xl">Melbourne’s western suburbs.</h2>
          <p className="mt-4 max-w-2xl text-mist">
            We service most areas of the western side of Melbourne. Outer areas can be available on request. Based
            in and around Altona Meadows, Laverton &amp; Seabrook.
          </p>
        </Reveal>
        <Stagger className="mt-10 flex flex-wrap gap-3">
          {areas.map((a) => (
            <motion.span
              key={a}
              variants={fadeUp}
              className="rounded-full border border-yellow/30 bg-brand/20 px-5 py-2.5 text-sm font-semibold text-yellow"
            >
              {a}
            </motion.span>
          ))}
          <motion.span
            variants={fadeUp}
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Broader western Melbourne + outer on request
          </motion.span>
        </Stagger>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section id="quote" className="relative overflow-hidden bg-brand py-24">
      <div className="grain opacity-30" />
      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div id="lead-form">
          <LeadForm />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow">Contact</p>
          <h2 className="font-display mt-3 text-4xl text-white sm:text-5xl">Call David. Or leave the brief here.</h2>
          <p className="mt-4 text-foam/90">
            Your one-stop shop for excavation in the west. Hours {site.hours}.
          </p>
          <ul className="mt-8 space-y-3 text-white">
            <li>
              <a className="text-2xl font-bold text-yellow" href={telHref()}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="underline decoration-yellow/40 underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/15">
            <img
              src={asset('images/gallery/slider-top-qualty.jpg')}
              alt="DB Bobcat and tipper on site"
              className="h-52 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
