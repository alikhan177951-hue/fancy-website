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
          <motion.p className="hero__brand-name" {...enter(0.05)}>
            {brand.name}
          </motion.p>

          <motion.h1 {...enter(0.15)}>{hero.headline}</motion.h1>
          <motion.p className="lead" {...enter(0.28)}>
            {hero.support}
          </motion.p>
          <motion.div className="cta-row" {...enter(0.4)}>
            <a className="btn btn--yellow" href={`tel:${brand.phoneTel}`}>
              Call {brand.phoneDisplay}
            </a>
            <a className="btn btn--ghost-dark" href="#quote">
              Get a quote
            </a>
          </motion.div>
        </div>
      </div>

      <TipperAnim />
    </section>
  );
}
