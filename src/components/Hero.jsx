import { motion, useReducedMotion } from "framer-motion";
import { brand, hero } from "../data";

export default function Hero() {
  const reduce = useReducedMotion();

  const enter = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        };

  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero__media" aria-hidden="true">
        <motion.img
          src={hero.image}
          alt=""
          initial={reduce ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="hero__shade" />
      </div>
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__content">
        <motion.div className="hero__brand" {...enter(0.05)}>
          <img src={brand.logo} alt="" width={160} height={75} />
          <div className="hero__brand-name">{hero.brand}</div>
        </motion.div>

        <motion.h1 {...enter(0.18)}>{hero.headline}</motion.h1>
        <motion.p className="lead" {...enter(0.32)}>
          {hero.support}
        </motion.p>
        <motion.div className="cta-row" {...enter(0.44)}>
          <a className="btn btn--yellow" href={`tel:${brand.phoneTel}`}>
            Call David {brand.phoneDisplay}
          </a>
          <a className="btn btn--ghost" href="#quote">
            Get a quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
