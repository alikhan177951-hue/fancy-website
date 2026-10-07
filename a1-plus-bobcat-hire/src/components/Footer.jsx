import { brand, maps, nav } from "../data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <div className="footer-brand">
            <Logo className="a1-logo--footer" title={brand.name} />
          </div>
          <p>
            Bobcat hire, site cleans, dig outs and removals from Melton
            across Melbourne's west.
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
            <a href={brand.instagram} target="_blank" rel="noreferrer">Instagram @a1plus_bobcathire</a>
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} {brand.legal}
        </span>
        <span>Melton VIC 3337</span>
      </div>
    </footer>
  );
}
