import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem, useReducedMotion } from "./Motion";
import { areasPrimary, areasWider, copy, facts, reviews } from "../data";

export default function AboutAreas() {
  const reduce = useReducedMotion();
  return (
    <section className="section band band--dark" id="about">
      <div className="wrap">
        <Reveal>
          <div className="about-head">
            <div>
              <p className="eyebrow">{copy.aboutEyebrow}</p>
              <h2 className="leaf-heading leaf-heading--light">{copy.aboutHeading}</h2>
            </div>
            <p className="lead">{copy.aboutLead}</p>
          </div>
        </Reveal>
        {(reviews.length > 0 || facts.length > 0) && (
          <Stagger className="review-grid">
            {reviews.map((r) => (
              <motion.blockquote key={r.date + r.quote.slice(0, 12)} className="review-card" variants={reduce ? undefined : staggerItem}>
                <span className="review-card__stars" aria-label="5 out of 5">★★★★★</span>
                <p>“{r.quote}”</p>
                <cite>Google review · {r.date}</cite>
              </motion.blockquote>
            ))}
            {facts.map((f) => (
              <motion.div key={f.big} className="review-card fact-card" variants={reduce ? undefined : staggerItem}>
                <strong className="fact-card__big">{f.big}</strong>
                <p>{f.small}</p>
              </motion.div>
            ))}
          </Stagger>
        )}
        <Stagger className="area-tags">
          {areasPrimary.map((area) => (
            <motion.span key={area} className="area-tag area-tag--primary" variants={reduce ? undefined : staggerItem}>{area}</motion.span>
          ))}
          {areasWider.map((area) => (
            <motion.span key={area} className="area-tag" variants={reduce ? undefined : staggerItem}>{area}</motion.span>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
