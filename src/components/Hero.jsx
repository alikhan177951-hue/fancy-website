import { motion, useReducedMotion } from "framer-motion";
import { brand, hero } from "../data";
import TipperAnim from "./TipperAnim";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  const enter = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero__intro">
        <div className="wrap hero__intro-inner">
          <motion.div className="hero__brand" {...enter(0.05)}>
            <img
              src={brand.logo}
              alt="DB Bobcat and Tipper Hire"
              width={140}
              height={66}
            />
          </motion.div>

          <motion.h1 {...enter(0.15)}>{hero.headline}</motion.h1>
          <motion.p className="lead" {...enter(0.28)}>
            {hero.support}
          </motion.p>
          <motion.div className="cta-row" {...enter(0.4)}>
            <motion.a
              className="btn btn--yellow"
              href={`tel:${brand.phoneTel}`}
              whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              Call {brand.phoneDisplay}
            </motion.a>
            <motion.a
              className="btn btn--ghost-dark"
              href="#quote"
              whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              Get a quote
            </motion.a>
          </motion.div>
        </div>
      </div>

      <TipperAnim />
    </section>
  );
}
