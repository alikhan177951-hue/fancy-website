import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem, useReducedMotion } from "./Motion";
import { areasPrimary, areasWider, brand, reviews } from "../data";

export default function AboutAreas() {
  const reduce = useReducedMotion();

  return (
    <section className="section band band--dark" id="about">
      <div className="wrap">
        <Reveal>
          <div className="about-head">
            <div>
              <p className="eyebrow">Reviews · areas</p>
              <h2 className="leaf-heading leaf-heading--light">
                {brand.rating}★ from {brand.reviewCount} Google reviews.
              </h2>
            </div>
            <p className="lead">
              {brand.owner} runs Tree Safe Solutions out of {brand.addressShort} — commercial,
              schools and homes, working all over Melbourne. Pensioners get 10% off.
            </p>
          </div>
        </Reveal>

        <Stagger className="review-grid">
          {reviews.map((r) => (
            <motion.blockquote
              key={r.date}
              className="review-card"
              variants={reduce ? undefined : staggerItem}
            >
              <span className="review-card__stars" aria-label="5 out of 5">★★★★★</span>
              <p>“{r.quote}”</p>
              <cite>Google review · {r.date}</cite>
            </motion.blockquote>
          ))}
        </Stagger>

        <Stagger className="area-tags">
          {areasPrimary.map((area) => (
            <motion.span key={area} className="area-tag area-tag--primary" variants={reduce ? undefined : staggerItem}>
              {area}
            </motion.span>
          ))}
          {areasWider.map((area) => (
            <motion.span key={area} className="area-tag" variants={reduce ? undefined : staggerItem}>
              {area}
            </motion.span>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
