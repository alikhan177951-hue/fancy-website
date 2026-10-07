import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { BASE, brand, hero } from "../data";

/**
 * Realistic scroll-scrubbed hero — Mixkit free-stock video
 * (Free Stock Video License, commercial OK). See public/videos/LICENSE.md.
 *
 * Clips (downloaded into public/videos/):
 *   truck-enter-45816.mp4  — yellow dump truck / rubble (optional enter)
 *   scoop-load-49189.mp4   — bucket loader pouring dirt into a truck
 *   unload-dump-10327.mp4  — trucks dumping dirt on a construction site
 *
 * Scroll beats (useScroll → crossfade + video.currentTime scrub):
 *   0–20%   enter
 *   20–50%  scoop / load
 *   50–80%  tip / unload
 *   80–100% settle + CTA
 *
 * Do not replace this with cartoon SVG tipper paths.
 */
const CLIPS = {
  enter: `${BASE}/videos/truck-enter-45816.mp4`,
  scoop: `${BASE}/videos/scoop-load-49189.mp4`,
  dump: `${BASE}/videos/unload-dump-10327.mp4`,
};

const POSTERS = {
  enter: `${BASE}/videos/poster-enter.jpg`,
  scoop: `${BASE}/videos/poster-scoop.jpg`,
  dump: `${BASE}/videos/poster-dump.jpg`,
};

function fadeBand(p, inStart, inEnd, outStart, outEnd) {
  if (p < inStart) return 0;
  if (p < inEnd) return (p - inStart) / Math.max(inEnd - inStart, 1e-6);
  if (p <= outStart) return 1;
  if (p < outEnd) return 1 - (p - outStart) / Math.max(outEnd - outStart, 1e-6);
  return 0;
}

function scrubTo(video, local01) {
  if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;
  const next = Math.min(Math.max(local01, 0), 0.999) * video.duration;
  if (Math.abs(video.currentTime - next) > 0.04) {
    try {
      video.currentTime = next;
    } catch {
      /* seek before metadata */
    }
  }
}

export default function VideoHero() {
  const reduce = useReducedMotion();
  const trackRef = useRef(null);
  const videoRefs = useRef({});

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 32,
    restDelta: 0.001,
  });

  // Spring only for video scrub feel; raw progress for UI so CTAs don't ghost.
  const scrub = reduce ? scrollYProgress : smooth;
  const ui = scrollYProgress;

  // Crossfade bands — enter visible from the first frame (progress 0).
  const enterOpacity = useTransform(scrub, (p) =>
    fadeBand(p, -0.05, 0, 0.16, 0.22),
  );
  const scoopOpacity = useTransform(scrub, (p) =>
    fadeBand(p, 0.16, 0.22, 0.48, 0.54),
  );
  const dumpOpacity = useTransform(scrub, (p) => {
    if (p < 0.48) return 0;
    if (p < 0.54) return (p - 0.48) / 0.06;
    return 1;
  });

  // One Call + Get a quote in hero copy for the whole scrub (incl. settle beat).
  const copyLift = useTransform(ui, [0, 0.55, 0.9], [0, -4, -10]);
  const copyFade = useTransform(ui, [0, 0.75, 1], [1, 1, 0.92]);
  const hintFade = useTransform(ui, [0, 0.08, 0.18], [0.85, 0.65, 0]);

  useEffect(() => {
    Object.values(videoRefs.current).forEach((el) => {
      if (!el) return;
      el.pause();
      el.muted = true;
      el.playsInline = true;
    });
  }, []);

  const applyScrub = (p) => {
    if (reduce) return;
    const enter = videoRefs.current.enter;
    const scoop = videoRefs.current.scoop;
    const dump = videoRefs.current.dump;

    if (enter && p <= 0.24) scrubTo(enter, Math.min(p / 0.2, 0.999));
    if (scoop && p >= 0.14 && p <= 0.56) scrubTo(scoop, (p - 0.2) / 0.3);
    if (dump && p >= 0.46) {
      const local = p <= 0.8 ? (p - 0.5) / 0.3 : 0.94;
      scrubTo(dump, local);
    }
  };

  useMotionValueEvent(scrub, "change", applyScrub);

  useEffect(() => {
    // Prime first frames so enter isn't stuck on a wrong poster.
    const id = requestAnimationFrame(() => applyScrub(0));
    return () => cancelAnimationFrame(id);
  }, []);

  if (reduce) {
    return (
      <section className="hero" id="top" aria-label="Hero">
        <div className="hero-static">
          <img
            className="hero-static__media"
            src={POSTERS.scoop}
            alt=""
            width={1280}
            height={720}
          />
          <div className="hero-static__shade" aria-hidden="true" />
          <div className="hero-static__copy wrap">
            <p className="hero__brand-name">{brand.name}</p>
            <h1>{hero.headline}</h1>
            <p className="lead">{hero.support}</p>
            <div className="cta-row">
              <a className="btn btn--yellow" href={`tel:${brand.phoneTel}`}>
                Call {brand.phoneDisplay}
              </a>
              <a className="btn btn--ghost" href="#quote">
                Get a quote
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero-scroll" ref={trackRef}>
        <div className="hero-scroll__sticky">
          <div className="hero-video" aria-hidden="true">
            <motion.video
              ref={(el) => {
                videoRefs.current.enter = el;
              }}
              className="hero-video__clip hero-video__clip--enter"
              style={{ opacity: enterOpacity }}
              src={CLIPS.enter}
              muted
              playsInline
              preload="auto"
              poster={POSTERS.enter}
              onLoadedData={(e) => scrubTo(e.currentTarget, 0)}
            />
            <motion.video
              ref={(el) => {
                videoRefs.current.scoop = el;
              }}
              className="hero-video__clip hero-video__clip--scoop"
              style={{ opacity: scoopOpacity }}
              src={CLIPS.scoop}
              muted
              playsInline
              preload="auto"
              poster={POSTERS.scoop}
              onLoadedData={(e) => scrubTo(e.currentTarget, 0)}
            />
            <motion.video
              ref={(el) => {
                videoRefs.current.dump = el;
              }}
              className="hero-video__clip hero-video__clip--dump"
              style={{ opacity: dumpOpacity }}
              src={CLIPS.dump}
              muted
              playsInline
              preload="auto"
              poster={POSTERS.dump}
              onLoadedData={(e) => scrubTo(e.currentTarget, 0)}
            />
            <div className="hero-video__shade" />
          </div>

          <motion.div
            className="hero-copy wrap"
            style={{ y: copyLift, opacity: copyFade }}
          >
            <p className="hero__brand-name">{brand.name}</p>
            <h1>{hero.headline}</h1>
            <p className="lead">{hero.support}</p>
            <div className="cta-row">
              <a className="btn btn--yellow" href={`tel:${brand.phoneTel}`}>
                Call {brand.phoneDisplay}
              </a>
              <a className="btn btn--ghost" href="#quote">
                Get a quote
              </a>
            </div>
          </motion.div>

          <motion.p
            className="hero-scroll-hint"
            style={{ opacity: hintFade }}
            aria-hidden="true"
          >
            Scroll to load & tip
          </motion.p>
        </div>
      </div>
    </section>
  );
}
