import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem, useReducedMotion } from "./Motion";
import { brand, services } from "../data";

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section className="section section--tight" id="services">
      <div className="wrap">
        <Reveal>
          <div className="services-head">
            <div>
              <p className="eyebrow">Services</p>
              <h2>Tipper, bobcat & excavator hire.</h2>
            </div>
            <p className="lead">
              Free quote on any job — call {brand.phoneDisplay}.
            </p>
          </div>
        </Reveal>

        <Stagger className="service-list">
          {services.map((service) => (
            <motion.article
              key={service.slug}
              className="service-row"
              variants={reduce ? undefined : staggerItem}
            >
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
