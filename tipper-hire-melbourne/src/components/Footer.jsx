import { brand, maps, nav } from "../data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <div className="footer-brand">
            <span className="footer-wordmark">{brand.shortName}</span>
          </div>
          <p>
            Tipper, bobcat, excavator and labour hire for commercial and
            domestic projects — Melbourne-wide.
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
            <span>Short or long term hire</span>
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} {brand.legal}
        </span>
        <span>Williamstown North VIC 3016</span>
      </div>
    </footer>
  );
}
