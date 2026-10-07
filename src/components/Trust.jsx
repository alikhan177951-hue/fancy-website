import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem, useReducedMotion } from "./Motion";
import { trust } from "../data";

export default function Trust() {
  const reduce = useReducedMotion();

  return (
    <section className="section" id="why">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Why David</p>
          <h2>Plant that starts. An operator who answers.</h2>
        </Reveal>

        <Stagger className="trust-grid" delay={0.08}>
          {trust.map((item) => (
            <motion.div
              key={item.title}
              className="trust-item"
              variants={reduce ? undefined : staggerItem}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
