import { brand, hours, maps, nav } from "../data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <div className="footer-brand">
            <img
              src={brand.logo}
              alt=""
              width={100}
              height={47}
            />
            <h3>{brand.name}</h3>
          </div>
          <p>
            Owner-operated bobcat and tipper hire across western Melbourne.
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
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <a href={maps.place} target="_blank" rel="noreferrer">
              {brand.address}
            </a>
            <span>
              {hours.primary}
              <br />
              {hours.sunday}
            </span>
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} {brand.legal}
        </span>
        <span>
          ABN {brand.abn} · ACN {brand.acn}
        </span>
      </div>
    </footer>
  );
}
