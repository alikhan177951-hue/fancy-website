import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem, useReducedMotion } from "./Motion";
import { areasPrimary, areasWider, brand, review } from "../data";

export default function AboutAreas() {
  const reduce = useReducedMotion();

  return (
    <section className="section section--tight" id="about">
      <div className="wrap about-areas">
        <Reveal>
          <div>
            <p className="eyebrow">About · areas</p>
            <h2>Advance — Melton and western Melb.</h2>
            <p className="lead">
              Bobcat, tipper, and concreting from {brand.addressShort}. Years of
              hands-on experience — on time, neat, and priced to suit any size
              job. One number to call.
            </p>
            <blockquote className="review-quote">
              <p>“{review.quote}”</p>
              <cite>
                — {review.author} · {review.source}
              </cite>
            </blockquote>
          </div>
        </Reveal>

        <Stagger className="area-tags">
          {areasPrimary.map((area) => (
            <motion.span
              key={area}
              className="area-tag area-tag--primary"
              variants={reduce ? undefined : staggerItem}
            >
              {area}
            </motion.span>
          ))}
          {areasWider.map((area) => (
            <motion.span
              key={area}
              className="area-tag"
              variants={reduce ? undefined : staggerItem}
            >
              {area}
            </motion.span>
          ))}
          <motion.span
            className="area-tag area-tag--more"
            variants={reduce ? undefined : staggerItem}
          >
            + more on request
          </motion.span>
        </Stagger>
      </div>
    </section>
  );
}
