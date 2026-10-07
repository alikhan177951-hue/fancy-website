import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem, useReducedMotion } from "./Motion";
import { services } from "../data";

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="services-head">
          <Reveal>
            <div>
              <p className="eyebrow">Services</p>
              <h2>What rolls through the gate.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead">
              Competitive pricing and packages to match the block. Call for
              hourly hire, floatage, or a fixed quote.
            </p>
          </Reveal>
        </div>

        <Stagger className="service-grid">
          {services.map((service) => (
            <motion.article
              key={service.slug}
              className="service-card"
              variants={reduce ? undefined : staggerItem}
              whileHover={
                reduce
                  ? undefined
                  : { y: -6, transition: { duration: 0.25 } }
              }
            >
              <div className="service-card__media">
                <motion.img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  whileHover={reduce ? undefined : { scale: 1.06 }}
                  transition={{ duration: 0.45 }}
                />
              </div>
              <div className="service-card__body">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
