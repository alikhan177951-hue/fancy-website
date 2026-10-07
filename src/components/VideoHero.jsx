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

const POSTER = `${BASE}/videos/poster-scoop.jpg`;

function fadeBand(p, inStart, inEnd, outStart, outEnd) {
  if (p <= inStart) return 0;
  if (p < inEnd) return (p - inStart) / (inEnd - inStart);
  if (p <= outStart) return 1;
  if (p < outEnd) return 1 - (p - outStart) / (outEnd - outStart);
  return 0;
}

function scrubTo(video, local01) {
  if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;
  const next = Math.min(Math.max(local01, 0), 0.999) * video.duration;
  if (Math.abs(video.currentTime - next) > 0.05) {
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

  const progress = reduce ? scrollYProgress : smooth;

  // Crossfade bands aligned to scroll beats (enter visible from progress 0).
  const enterOpacity = useTransform(progress, (p) =>
    fadeBand(p, -0.05, 0, 0.16, 0.22),
  );
  const scoopOpacity = useTransform(progress, (p) =>
    fadeBand(p, 0.16, 0.22, 0.48, 0.54),
  );
  const dumpOpacity = useTransform(progress, (p) => {
    if (p < 0.48) return 0;
    if (p < 0.54) return (p - 0.48) / 0.06;
    return 1; // hold through settle 80–100%
  });

  const copyLift = useTransform(progress, [0, 0.55, 0.82], [0, -8, -36]);
  const copyFade = useTransform(progress, [0, 0.6, 0.82], [1, 0.85, 0.15]);
  const settleCta = useTransform(progress, [0.74, 0.88, 1], [0, 1, 1]);
  const settleY = useTransform(progress, [0.74, 0.9], [32, 0]);
  const hintFade = useTransform(progress, [0, 0.08, 0.2], [0.9, 0.7, 0]);

  useEffect(() => {
    Object.values(videoRefs.current).forEach((el) => {
      if (!el) return;
      el.pause();
      el.muted = true;
      el.playsInline = true;
    });
  }, []);

  useMotionValueEvent(progress, "change", (p) => {
    if (reduce) return;

    const enter = videoRefs.current.enter;
    const scoop = videoRefs.current.scoop;
    const dump = videoRefs.current.dump;

    if (enter && p <= 0.24) scrubTo(enter, p / 0.2);
    if (scoop && p >= 0.14 && p <= 0.56) scrubTo(scoop, (p - 0.2) / 0.3);
    if (dump && p >= 0.46) {
      const local = p <= 0.8 ? (p - 0.5) / 0.3 : 0.94;
      scrubTo(dump, local);
    }
  });

  if (reduce) {
    return (
      <section className="hero" id="top" aria-label="Hero">
        <div className="hero-static">
          <img
            className="hero-static__media"
            src={POSTER}
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
              className="hero-video__clip"
              style={{ opacity: enterOpacity }}
              src={CLIPS.enter}
              muted
              playsInline
              preload="auto"
              poster={POSTER}
            />
            <motion.video
              ref={(el) => {
                videoRefs.current.scoop = el;
              }}
              className="hero-video__clip"
              style={{ opacity: scoopOpacity }}
              src={CLIPS.scoop}
              muted
              playsInline
              preload="auto"
              poster={POSTER}
            />
            <motion.video
              ref={(el) => {
                videoRefs.current.dump = el;
              }}
              className="hero-video__clip"
              style={{ opacity: dumpOpacity }}
              src={CLIPS.dump}
              muted
              playsInline
              preload="auto"
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

          <motion.div
            className="hero-settle wrap"
            style={{ opacity: settleCta, y: settleY }}
          >
            <p className="hero-settle__label">Ready when your site is.</p>
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
