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
 * Path A — ONE Mixkit tipper dump, scroll-scrubbed (no src swaps, no slideshow).
 *
 * Clip: trucks dumping dirt on a construction site (Mixkit 10327)
 *   https://mixkit.co/free-stock-video/trucks-dumping-dirt-on-a-construction-site-10327/
 *   /bobcatbob/videos/unload-dump-10327.mp4
 * License: public/videos/LICENSE.md (Free Stock Video License, commercial OK)
 *
 * Scroll → video.currentTime (single <video>, never swap src):
 *   0–15%   establish site / trucks
 *   15–75%  tip / soil cascade
 *   75–100% settle + yellow Call CTA
 *
 * Poster underlay prevents blue void. No cartoon SVG. No multi-clip crossfade.
 */
const SRC = `${BASE}/videos/unload-dump-10327.mp4`;
const POSTER = `${BASE}/videos/poster-tipper.jpg`;

function scrubTo(video, local01) {
  if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;
  const next = Math.min(Math.max(local01, 0), 0.999) * video.duration;
  if (Math.abs(video.currentTime - next) > 0.03) {
    try {
      video.currentTime = next;
    } catch {
      /* seek before metadata */
    }
  }
}

async function unlockVideo(video) {
  if (!video) return;
  video.muted = true;
  video.playsInline = true;
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  try {
    await video.play();
    video.pause();
  } catch {
    /* poster still covers */
  }
}

export default function VideoHero() {
  const reduce = useReducedMotion();
  const trackRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 32,
    restDelta: 0.001,
  });
  const progress = reduce ? scrollYProgress : smooth;
  const hintFade = useTransform(scrollYProgress, [0, 0.1, 0.22], [0.9, 0.55, 0]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.playsInline = true;
    el.preload = "auto";
    unlockVideo(el).then(() => scrubTo(el, 0));
  }, []);

  useMotionValueEvent(progress, "change", (p) => {
    if (reduce) return;
    // One continuous timeline: establish → tip cascade → settle.
    scrubTo(videoRef.current, p);
  });

  const copy = (
    <>
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
    </>
  );

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
          <div className="hero-static__copy wrap">{copy}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero-scroll" ref={trackRef}>
        <div className="hero-scroll__sticky">
          <div className="hero-video" aria-hidden="true">
            <img
              className="hero-video__poster"
              src={POSTER}
              alt=""
              width={1280}
              height={720}
              decoding="async"
            />
            {/* Single source only — never change src on scroll */}
            <video
              ref={videoRef}
              className="hero-video__clip"
              src={SRC}
              muted
              playsInline
              preload="auto"
              poster={POSTER}
              onLoadedData={(e) => {
                unlockVideo(e.currentTarget).then(() =>
                  scrubTo(e.currentTarget, 0),
                );
              }}
            />
            <div className="hero-video__shade" />
          </div>

          <div className="hero-copy wrap">{copy}</div>

          <motion.p
            className="hero-scroll-hint"
            style={{ opacity: hintFade }}
            aria-hidden="true"
          >
            Scroll to tip
          </motion.p>
        </div>
      </div>
    </section>
  );
}
