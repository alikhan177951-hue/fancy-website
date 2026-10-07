import { INK, RED, TRANSFORM, VIEWBOX } from "./LogoPaths";

/**
 * A1 Plus Bobcat Hire logo as inline vector.
 * Frame is always brand red; the lettering uses currentColor so it can sit
 * dark on light backgrounds and white on dark ones without a plate.
 */
export default function Logo({ className = "", title = "A1 Plus Bobcat Hire", ...rest }) {
  return (
    <svg
      className={`a1-logo ${className}`.trim()}
      viewBox={VIEWBOX}
      role="img"
      aria-label={title}
      focusable="false"
      {...rest}
    >
      <g transform={TRANSFORM} stroke="none">
        <path d={RED} fill="#dd351c" />
        <path d={INK} fill="currentColor" />
      </g>
    </svg>
  );
}
