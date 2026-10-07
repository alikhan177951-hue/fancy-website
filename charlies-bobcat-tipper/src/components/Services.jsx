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
              <h2>Excavator, bobcat & tipper — one crew.</h2>
            </div>
            <p className="lead">
              Wet hire with operators or a fixed quote — call Charly on {brand.phoneDisplay}.
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
