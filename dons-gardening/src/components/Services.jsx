import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem, useReducedMotion } from "./Motion";
import { copy, services } from "../data";

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section className="section band band--light" id="services">
      <div className="wrap">
        <Reveal>
          <div className="services-head">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="leaf-heading">{copy.servicesHeading}</h2>
            </div>
            <p className="lead">
              {copy.servicesLead}
            </p>
          </div>
        </Reveal>

        <Stagger className="service-grid">
          {services.map((service, i) => (
            <motion.article
              key={service.slug}
              className="service-card"
              variants={reduce ? undefined : staggerItem}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
            >
              <span className="service-card__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
