import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BASE, brand, hero } from "../data";

/**
 * Path A — ONE Mixkit tipper dump, scroll-scrubbed (same pattern as bobcatbob / Speedy Phils).
 *
 * Source (dense-keyframe re-encode of Mixkit 10327 for reliable seek paint):
 *   /digwest-earthworks/videos/tipper-10327-scrub.mp4
 * Original plate: unload-dump-10327.mp4
 *   https://mixkit.co/free-stock-video/trucks-dumping-dirt-on-a-construction-site-10327/
 *
 * Scroll → ONE video.currentTime (never swap src):
 *   0–15%   establish
 *   15–75%  tip / soil cascade
 *   75–100% settle + amber Call
 */
const SRC = `${BASE}/videos/tipper-10327-scrub.mp4`;
const POSTER = `${BASE}/videos/poster-tipper.jpg`;

function trackProgress(track) {
  if (!track) return 0;
  const rect = track.getBoundingClientRect();
  const total = track.offsetHeight - window.innerHeight;
  if (total <= 1) return 0;
  return Math.min(1, Math.max(0, -rect.top / total));
}

async function unlockVideo(video) {
  if (!video || video.dataset.unlocked === "1") return;
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  try {
    const p = video.play();
    if (p && typeof p.then === "function") await p;
    video.pause();
    video.dataset.unlocked = "1";
  } catch {
    /* retry on first user gesture */
  }
}

export default function VideoHero() {
  const reduce = useReducedMotion();
  const trackRef = useRef(null);
  const videoRef = useRef(null);
  const readyRef = useRef(false);
  const pendingRef = useRef(0);
  const rafRef = useRef(0);
  const [hintOpacity, setHintOpacity] = useState(0.9);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (reduce) return undefined;

    const track = trackRef.current;
    const video = videoRef.current;
    if (!track || !video) return undefined;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("muted", "");

    const applyScrub = (p) => {
      pendingRef.current = p;
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const el = videoRef.current;
        const progress = pendingRef.current;
        setHintOpacity(progress < 0.08 ? 0.9 : progress < 0.2 ? 0.45 : 0);

        if (!el || !readyRef.current) return;
        if (!Number.isFinite(el.duration) || el.duration <= 0) return;

        const next = Math.min(Math.max(progress, 0), 0.999) * el.duration;
        if (Math.abs(el.currentTime - next) < 0.04) return;

        try {
          el.currentTime = next;
        } catch {
          /* ignore seek race */
        }
      });
    };

    const onMeta = () => {
      readyRef.current = true;
      setVideoReady(true);
      unlockVideo(video).then(() => applyScrub(trackProgress(track)));
    };

    if (video.readyState >= 1) onMeta();
    else video.addEventListener("loadedmetadata", onMeta);

    const onScrollOrResize = () => {
      unlockVideo(video);
      applyScrub(trackProgress(track));
    };

    const unlockOnce = () => {
      unlockVideo(video).then(() => applyScrub(trackProgress(track)));
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    window.addEventListener("wheel", unlockOnce, { passive: true, once: true });
    window.addEventListener("touchstart", unlockOnce, { passive: true, once: true });
    window.addEventListener("pointerdown", unlockOnce, { passive: true, once: true });

    applyScrub(trackProgress(track));

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("wheel", unlockOnce);
      window.removeEventListener("touchstart", unlockOnce);
      window.removeEventListener("pointerdown", unlockOnce);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reduce]);

  const copy = (
    <>
      <p className="hero__brand-name">{brand.shortName}</p>
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
            {!videoReady && (
              <img
                className="hero-video__poster"
                src={POSTER}
                alt=""
                width={1280}
                height={720}
                decoding="async"
              />
            )}
            <video
              ref={videoRef}
              className="hero-video__clip"
              src={SRC}
              muted
              playsInline
              preload="auto"
              poster={POSTER}
            />
            <div className="hero-video__shade" />
          </div>

          <div className="hero-copy wrap">{copy}</div>

          <motion.p
            className="hero-scroll-hint"
            style={{ opacity: hintOpacity }}
            aria-hidden="true"
          >
            Scroll to tip
          </motion.p>
        </div>
      </div>
    </section>
  );
}
