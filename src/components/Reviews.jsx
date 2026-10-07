import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem, useReducedMotion } from "./Motion";
import { brand, reviews } from "../data";

export default function Reviews() {
  const reduce = useReducedMotion();

  return (
    <section className="section" id="reviews">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">
            Google reviews · {brand.rating} ★ · {brand.reviewCount}
          </p>
          <h2>What people actually wrote.</h2>
          <p className="lead" style={{ marginBottom: "1.75rem" }}>
            Quoted from Maps / Google-synced listings. Theme-placeholder
            testimonials from the old WordPress carousel are not reused.
          </p>
        </Reveal>

        <Stagger className="review-grid">
          {reviews.map((review) => (
            <motion.figure
              key={review.meta}
              className="review-card"
              variants={reduce ? undefined : staggerItem}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <div className="review-card__stars" aria-hidden="true">
                ★★★★★
              </div>
              <blockquote>“{review.quote}”</blockquote>
              <figcaption>{review.meta}</figcaption>
            </motion.figure>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
