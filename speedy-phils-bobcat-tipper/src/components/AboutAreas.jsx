import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem, useReducedMotion } from "./Motion";
import { areasPrimary, areasWider, brand } from "../data";

export default function AboutAreas() {
  const reduce = useReducedMotion();

  return (
    <section className="section section--tight" id="about">
      <div className="wrap about-areas">
        <Reveal>
          <div>
            <p className="eyebrow">About · areas</p>
            <h2>Speedy Phils — Rockbank and western Melb.</h2>
            <p className="lead">
              Bobcat and tipper hire from {brand.addressShort}. Site prep, rock
              and soil, rubbish cartage, and a proper clean-up — one number to
              call.
            </p>
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
