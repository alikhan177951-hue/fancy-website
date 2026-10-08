import { motion, useReducedMotion } from "framer-motion";
import { brand, maps, nav } from "../data";
import Logo from "./Logo";

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="wrap footer-cta__inner">
          <p className="footer-cta__line">
            Tree or stump to go? <span>Free quotes, fully insured.</span>
          </p>
          <motion.a
            className="footer-cta__call"
            href={`tel:${brand.phoneTel}`}
            whileHover={reduce ? undefined : { x: 4 }}
          >
            Call {brand.phoneDisplay}
          </motion.a>
        </div>
      </div>

      <div className="wrap footer-grid">
        <div className="footer-brand-col">
          <div className="footer-brand">
            <Logo className="ts-logo--footer" title={brand.name} />
          </div>
          <p>
            Tree removal, stump grinding and pruning from Keilor East,
            working all over Melbourne.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <div className="footer-links">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3>Contact</h3>
          <div className="footer-links">
            <a href={`tel:${brand.phoneTel}`}>{brand.phoneDisplay}</a>
            <a href={maps.place} target="_blank" rel="noreferrer">
              {brand.address}
            </a>
            <span>{brand.hours}</span>
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} {brand.legal}
        </span>
        <span>Keilor East VIC 3033</span>
      </div>
    </footer>
  );
}
