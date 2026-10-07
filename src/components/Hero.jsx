import { motion, useReducedMotion } from "framer-motion";
import { brand, hero } from "../data";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const words = hero.headline.split(" ");

  const enter = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease },
        };

  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero__media" aria-hidden="true">
        <motion.img
          src={hero.image}
          alt=""
          initial={reduce ? false : { scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease }}
        />
        <div className="hero__shade" />
      </div>
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__content">
        <motion.div className="hero__brand" {...enter(0.05)}>
          <img src={brand.logo} alt="" width={160} height={75} />
          <div className="hero__brand-name">{hero.brand}</div>
        </motion.div>

        <h1 aria-label={hero.headline}>
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="hero__word"
              initial={reduce ? false : { opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.045, ease }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          ))}
        </h1>
        <motion.p className="lead" {...enter(0.55)}>
          {hero.support}
        </motion.p>
        <motion.div className="cta-row" {...enter(0.68)}>
          <motion.a
            className="btn btn--yellow"
            href={`tel:${brand.phoneTel}`}
            whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            Call David {brand.phoneDisplay}
          </motion.a>
          <motion.a
            className="btn btn--ghost"
            href="#quote"
            whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            Get a quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
