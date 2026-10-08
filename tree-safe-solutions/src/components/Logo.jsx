import { GREEN, ICON_GREEN, ICON_GREY, ICON_TF, MARK_VIEWBOX, TXT_GREEN, TXT_GREY, VIEWBOX } from "./LogoPaths";

/**
 * Tree Safe Solutions logo as inline vector (no plate).
 * Leaf + "Tree" are always brand green; the grey swooshes and "Safe Solutions"
 * use currentColor so the logo sits grey on light bands and white on dark ones.
 */
export default function Logo({ className = "", title = "Tree Safe Solutions", mark = false, ...rest }) {
  return (
    <svg
      className={`ts-logo ${className}`.trim()}
      viewBox={mark ? MARK_VIEWBOX : VIEWBOX}
      role="img"
      aria-label={title}
      focusable="false"
      {...rest}
    >
      <g fill="currentColor">
        {!mark && <path d={TXT_GREY} />}
        <g transform={ICON_TF}>
          <path d={ICON_GREY} />
        </g>
      </g>
      <g fill={GREEN}>
        {!mark && <path d={TXT_GREEN} />}
        <g transform={ICON_TF}>
          <path d={ICON_GREEN} />
        </g>
      </g>
    </svg>
  );
}
