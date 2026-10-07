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
 * Paths are under Vite base `/bobcatbob/` → `/bobcatbob/videos/…`
 *
 * Beats (scroll progress 0→1 while sticky pin holds):
 *   0–20%   enter   truck-enter-45816.mp4
 *   20–50%  scoop   scoop-load-49189.mp4
 *   50–80%  dump    unload-dump-10327.mp4
 *   80–100% settle  hold dump + CTA
 *
 * Critical: at least one layer (poster or clip) is always fully visible —
 * never leave the blue stage (#0a1628) empty. Do not use cartoon SVG tipper.
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

/** Overlapping bands so max(enter,scoop,dump) is always ≥ ~1 mid-transition. */
function clipOpacities(p) {
  const x = Math.min(Math.max(p, 0), 1);
  // Enter full → crossfade to scoop (0.14–0.22)
  let enter = 1;
  let scoop = 0;
  let dump = 0;

  if (x < 0.14) {
    enter = 1;
  } else if (x < 0.22) {
    const t = (x - 0.14) / 0.08;
    enter = 1 - t;
    scoop = t;
  } else if (x < 0.44) {
    enter = 0;
    scoop = 1;
  } else if (x < 0.52) {
    const t = (x - 0.44) / 0.08;
    enter = 0;
    scoop = 1 - t;
    dump = t;
  } else {
    enter = 0;
    scoop = 0;
    dump = 1; // hold through settle 80–100%
  }

  // Failsafe: never all-transparent (blue void).
  if (enter + scoop + dump < 0.85) {
    if (x < 0.33) enter = 1;
    else if (x < 0.66) scoop = 1;
    else dump = 1;
  }

  return { enter, scoop, dump };
}

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

/** Some browsers won't paint seeked frames until play() has been called once. */
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
    /* autoplay policy — poster still shows underneath */
  }
}

export default function VideoHero() {
  const reduce = useReducedMotion();
  const trackRef = useRef(null);
  const videoRefs = useRef({});

  const { scrollYProgress } = useScroll({
    target: trackRef,
    // Pin for the full track: start when top hits top, end when bottom hits bottom.
    offset: ["start start", "end end"],
  });

  // Opacity from RAW progress (no spring gaps). Spring only softens seeks.
  const scrubSmooth = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 36,
    restDelta: 0.001,
  });
  const seekProgress = reduce ? scrollYProgress : scrubSmooth;

  const enterOpacity = useTransform(scrollYProgress, (p) => clipOpacities(p).enter);
  const scoopOpacity = useTransform(scrollYProgress, (p) => clipOpacities(p).scoop);
  const dumpOpacity = useTransform(scrollYProgress, (p) => clipOpacities(p).dump);

  // Which poster underlay matches the active beat (always visible fallback).
  const posterEnterOp = useTransform(scrollYProgress, (p) =>
    p < 0.22 ? 1 : 0,
  );
  const posterScoopOp = useTransform(scrollYProgress, (p) =>
    p >= 0.14 && p < 0.52 ? 1 : 0,
  );
  const posterDumpOp = useTransform(scrollYProgress, (p) => (p >= 0.44 ? 1 : 0));

  const hintFade = useTransform(scrollYProgress, [0, 0.08, 0.2], [0.9, 0.65, 0]);

  useEffect(() => {
    const vids = Object.values(videoRefs.current).filter(Boolean);
    vids.forEach((el) => {
      el.muted = true;
      el.playsInline = true;
      el.preload = "auto";
    });
    // Unlock decode/paint, then park at frame 0.
    (async () => {
      for (const el of vids) {
        await unlockVideo(el);
        scrubTo(el, 0);
      }
    })();
  }, []);

  useMotionValueEvent(seekProgress, "change", (p) => {
    if (reduce) return;
    const enter = videoRefs.current.enter;
    const scoop = videoRefs.current.scoop;
    const dump = videoRefs.current.dump;

    if (enter && p <= 0.28) scrubTo(enter, Math.min(Math.max(p / 0.2, 0), 0.999));
    if (scoop && p >= 0.1 && p <= 0.58) scrubTo(scoop, (p - 0.2) / 0.3);
    if (dump && p >= 0.4) {
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
      {/* Tall track keeps position:sticky pinned for the full scrub */}
      <div className="hero-scroll" ref={trackRef}>
        <div className="hero-scroll__sticky">
          <div className="hero-video" aria-hidden="true">
            {/* Poster underlay — tipper never vanishes to blue void */}
            <motion.img
              className="hero-video__poster"
              style={{ opacity: posterEnterOp }}
              src={POSTERS.enter}
              alt=""
              width={1280}
              height={720}
              decoding="async"
            />
            <motion.img
              className="hero-video__poster"
              style={{ opacity: posterScoopOp }}
              src={POSTERS.scoop}
              alt=""
              width={1280}
              height={720}
              decoding="async"
            />
            <motion.img
              className="hero-video__poster"
              style={{ opacity: posterDumpOp }}
              src={POSTERS.dump}
              alt=""
              width={1280}
              height={720}
              decoding="async"
            />

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
              poster={POSTERS.enter}
              onLoadedData={(e) => {
                unlockVideo(e.currentTarget).then(() =>
                  scrubTo(e.currentTarget, 0),
                );
              }}
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
              poster={POSTERS.scoop}
              onLoadedData={(e) => {
                unlockVideo(e.currentTarget).then(() =>
                  scrubTo(e.currentTarget, 0),
                );
              }}
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
              poster={POSTERS.dump}
              onLoadedData={(e) => {
                unlockVideo(e.currentTarget).then(() =>
                  scrubTo(e.currentTarget, 0),
                );
              }}
            />
            <div className="hero-video__shade" />
          </div>

          <div className="hero-copy wrap">
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
