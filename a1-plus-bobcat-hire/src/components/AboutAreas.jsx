import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem, useReducedMotion } from "./Motion";
import { areasPrimary, areasWider, brand, review, stats } from "../data";

export default function AboutAreas() {
  const reduce = useReducedMotion();

  return (
    <section className="section band band--dark" id="about">
      <div className="wrap about-areas">
        <Reveal>
          <div>
            <p className="eyebrow">About · areas</p>
            <h2 className="frame-heading frame-heading--light">A1 Plus — Melton and the west.</h2>
            <p className="lead">
              Owner-operated bobcat work from {brand.addressShort} — {stats}.
              From pre-construction site cleans to slab back fill and yard dig
              outs, give {brand.owner} a call on {brand.phoneDisplay}.
            </p>
            {review && (
              <blockquote className="review-quote">
                <p>“{review.quote}”</p>
                <cite>
                  — {review.author} · {review.source}
                </cite>
              </blockquote>
            )}
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
