import { BASE, logo } from "../data";

/**
 * Client logo as a core design element — transparent cutout, no plate.
 * Placement (header / hero / footer / menu) picks the treatment from data.logo.spec.
 */
export default function Logo({ className = "", title = "" }) {
  const place = (className.match(/ts-logo--(\w+)/) || [])[1] || "header";
  const spec = logo.spec[place] || logo.spec.header;
  const cls = `ts-logo brand-logo brand-logo--${spec.type} ${className}`.trim();
  const url = spec.src ? `${BASE}/brand/${spec.src}` : "";
  if (spec.type === "mask") {
    return (
      <span
        className={cls}
        role="img"
        aria-label={title}
        style={{ WebkitMaskImage: `url(${url})`, maskImage: `url(${url})`, aspectRatio: spec.ratio }}
      />
    );
  }
  if (spec.type === "img") {
    return <img className={cls} src={url} alt={title} width={spec.w} height={spec.h} decoding="async" />;
  }
  if (spec.type === "imgtext") {
    return (
      <span className={cls} role="img" aria-label={title}>
        <img src={url} alt="" width={spec.w} height={spec.h} aria-hidden="true" />
        <span className="brand-logo__text" aria-hidden="true">{spec.text}</span>
      </span>
    );
  }
  const w = logo.word;
  return (
    <span className={cls} role="img" aria-label={title}>
      <span className="brand-logo__icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: logo.icon }} />
      <span className="brand-logo__text" aria-hidden="true">
        <span className="brand-logo__name">
          {w.a === "AR" ? <strong>{w.a}</strong> : <>{w.a} </>}
          {w.a === "AR" ? w.b : <em>{w.b}</em>}
        </span>
        <small className="brand-logo__tag">{w.tag}</small>
      </span>
    </span>
  );
}
