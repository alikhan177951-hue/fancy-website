import { logo } from "../data";

/**
 * Original styled text wordmark — no client logos or scraped brand images.
 * Placement (header / hero / footer / menu) picks the treatment from data.logo.spec.
 */
export default function Logo({ className = "", title = "" }) {
  const place = (className.match(/ts-logo--(\w+)/) || [])[1] || "header";
  const spec = logo.spec[place] || logo.spec.header;
  const cls = `ts-logo brand-logo brand-logo--${spec.type} ${className}`.trim();
  const w = logo.word;
  return (
    <span className={cls} role="img" aria-label={title}>
      <span className="brand-logo__icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: logo.icon }} />
      <span className="brand-logo__text" aria-hidden="true">
        <span className="brand-logo__name">
          <strong>{w.a}</strong> <em>{w.b}</em>
        </span>
        <small className="brand-logo__tag">{w.tag}</small>
      </span>
    </span>
  );
}
