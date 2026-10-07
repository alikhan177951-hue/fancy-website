import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem, useReducedMotion } from "./Motion";
import { areasPrimary, areasWider, maps } from "../data";

export default function Areas() {
  const reduce = useReducedMotion();

  return (
    <section className="section" id="areas">
      <div className="wrap areas-panel">
        <div>
          <Reveal>
            <p className="eyebrow">Service area</p>
            <h2>Western Melbourne first.</h2>
            <p className="lead" style={{ marginBottom: "1.35rem" }}>
              Most of the western side of Melbourne. Outer jobs on request. Yard
              in Altona Meadows.
            </p>
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

        <Reveal delay={0.1}>
          <iframe
            className="map-frame"
            title="DB Bobcat yard — 8 Lush Crt, Altona Meadows"
            src={maps.embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
