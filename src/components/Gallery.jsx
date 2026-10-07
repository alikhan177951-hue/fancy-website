import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, Stagger, staggerItem, useReducedMotion } from "./Motion";
import { gallery } from "../data";

export default function Gallery() {
  const [active, setActive] = useState(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (active == null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="section" id="gallery">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Gallery</p>
          <h2>Job photos — not catalogue shots.</h2>
          <p className="lead" style={{ marginBottom: "1.75rem" }}>
            Seventeen stills from real DB jobs. Tap any frame to open the
            lightbox.
          </p>
        </Reveal>

        <Stagger className="gallery-grid">
          {gallery.map((shot, index) => (
            <motion.button
              key={shot.src}
              type="button"
              className="gallery-item"
              variants={reduce ? undefined : staggerItem}
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              onClick={() => setActive(index)}
              aria-label={`Open ${shot.alt}`}
            >
              <img src={shot.src} alt={shot.alt} loading="lazy" />
            </motion.button>
          ))}
        </Stagger>
      </div>

      <AnimatePresence>
        {active != null && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery lightbox"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="lightbox__close"
              aria-label="Close lightbox"
              onClick={() => setActive(null)}
            >
              ×
            </button>
            <motion.img
              src={gallery[active].src}
              alt={gallery[active].alt}
              initial={reduce ? false : { scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={reduce ? undefined : { scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
