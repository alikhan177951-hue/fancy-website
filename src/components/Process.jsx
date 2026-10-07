import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem, useReducedMotion } from "./Motion";
import { process } from "../data";

export default function Process() {
  const reduce = useReducedMotion();

  return (
    <section className="section section--tight" id="process">
      <div className="wrap">
        <Reveal>
          <div className="process-band">
            <p className="eyebrow">How it works</p>
            <h2>Call. Quote. Schedule.</h2>
            <p className="lead">
              Kept simple so you are never guessing where the job sits.
            </p>

            <Stagger className="process-steps" delay={0.1}>
              {process.map((step) => (
                <motion.div
                  key={step.n}
                  className="process-step"
                  variants={reduce ? undefined : staggerItem}
                >
                  <div className="process-step__n">{step.n}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
