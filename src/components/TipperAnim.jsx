import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

/**
 * Scroll-driven tipper site-prep animation.
 * Progress 0→1 while the sticky stage is in view:
 *   0.00–0.18  drive in
 *   0.18–0.42  scoop soil from the ground pile
 *   0.42–0.55  lift scoop + load tipper bed
 *   0.55–0.68  drive to dump zone
 *   0.68–0.90  tip bed + unload soil
 *   0.90–1.00  bed settles
 */
export default function TipperAnim() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  const progress = reduce ? scrollYProgress : smooth;

  const truckX = useTransform(
    progress,
    [0, 0.18, 0.42, 0.55, 0.68, 1],
    [-220, 40, 55, 55, 280, 300],
  );

  const wheelRot = useTransform(progress, [0, 1], [0, 720]);

  const boomAngle = useTransform(
    progress,
    [0, 0.18, 0.28, 0.4, 0.5, 0.55, 1],
    [-8, -8, 42, 48, -18, -22, -22],
  );

  const bucketCurl = useTransform(
    progress,
    [0, 0.22, 0.32, 0.42, 0.5, 1],
    [12, 12, -25, 35, 8, 8],
  );

  const scoopFill = useTransform(
    progress,
    [0, 0.28, 0.38, 0.48, 0.52, 1],
    [0, 0, 1, 1, 0, 0],
  );

  const bedFill = useTransform(
    progress,
    [0, 0.48, 0.55, 0.72, 0.88, 1],
    [0, 0, 1, 1, 0.05, 0],
  );

  const tipAngle = useTransform(
    progress,
    [0, 0.66, 0.76, 0.88, 1],
    [0, 0, 56, 58, 6],
  );

  const ramOpacity = useTransform(progress, [0.68, 0.82], [0.45, 1]);

  const pileScale = useTransform(
    progress,
    [0, 0.25, 0.42, 1],
    [1, 1, 0.28, 0.28],
  );
  const pileOpacity = useTransform(progress, [0.35, 0.48], [1, 0.55]);

  const dumpScale = useTransform(
    progress,
    [0, 0.7, 0.86, 1],
    [0.05, 0.05, 1.12, 1.15],
  );
  const dumpOpacity = useTransform(progress, [0.68, 0.76], [0, 1]);

  const streamOpacity = useTransform(
    progress,
    [0.7, 0.74, 0.86, 0.92],
    [0, 1, 1, 0],
  );

  const dustOpacity = useTransform(
    progress,
    [0.3, 0.36, 0.42, 0.76, 0.84, 0.92],
    [0, 0.7, 0, 0, 0.65, 0],
  );

  const labelOpacity = useTransform(
    progress,
    [0, 0.08, 0.85, 1],
    [0.85, 0.4, 0.4, 0.7],
  );

  return (
    <div className="tipper-scroll" ref={ref} id="tipper" aria-hidden="true">
      <div className="tipper-scroll__sticky">
        <div className="tipper-stage">
          <svg
            className="tipper-svg"
            viewBox="0 0 900 420"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#cfe0f7" />
                <stop offset="55%" stopColor="#e8f0fa" />
                <stop offset="100%" stopColor="#d4c4a8" />
              </linearGradient>
              <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6b5a3e" />
                <stop offset="40%" stopColor="#4a3d2a" />
                <stop offset="100%" stopColor="#2f281c" />
              </linearGradient>
              <linearGradient id="soilGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c4a06a" />
                <stop offset="45%" stopColor="#8b6914" />
                <stop offset="100%" stopColor="#5c4510" />
              </linearGradient>
              <linearGradient id="cabGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1a7aef" />
                <stop offset="50%" stopColor="#0064d8" />
                <stop offset="100%" stopColor="#0047a0" />
              </linearGradient>
              <linearGradient id="bedGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffff8a" />
                <stop offset="40%" stopColor="#fcfc64" />
                <stop offset="100%" stopColor="#d4d420" />
              </linearGradient>
              <linearGradient id="steelGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4a5568" />
                <stop offset="100%" stopColor="#1a2332" />
              </linearGradient>
              <linearGradient id="chromeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e8edf5" />
                <stop offset="50%" stopColor="#9aa8bc" />
                <stop offset="100%" stopColor="#5a6a7e" />
              </linearGradient>
              <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="6"
                  stdDeviation="5"
                  floodColor="#0b1a2e"
                  floodOpacity="0.28"
                />
              </filter>
            </defs>

            <rect width="900" height="420" fill="url(#skyGrad)" />
            <path
              d="M0 210 C120 180 200 195 320 175 C420 158 480 190 580 170 C700 145 780 165 900 155 L900 280 L0 280 Z"
              fill="#9bb8d9"
              opacity="0.45"
            />
            <path
              d="M0 240 C150 220 280 250 420 230 C560 210 680 245 900 225 L900 300 L0 300 Z"
              fill="#7a9fc4"
              opacity="0.35"
            />

            <rect y="300" width="900" height="120" fill="url(#groundGrad)" />
            <path
              d="M0 300 Q80 292 160 300 T320 298 T480 302 T640 296 T800 300 T900 298 L900 312 L0 312 Z"
              fill="#7d6b4a"
            />
            <g stroke="#3d3224" strokeWidth="1" opacity="0.25">
              <path d="M20 340 H180" />
              <path d="M220 355 H390" />
              <path d="M450 330 H610" />
              <path d="M650 350 H860" />
            </g>

            <motion.g
              style={{
                scale: pileScale,
                opacity: pileOpacity,
                transformOrigin: "200px 300px",
              }}
            >
              <ellipse cx="200" cy="302" rx="78" ry="10" fill="#1a140c" opacity="0.35" />
              <path
                d="M120 300 C130 250 155 220 200 215 C245 220 270 250 280 300 Z"
                fill="url(#soilGrad)"
              />
              <path
                d="M145 295 C155 260 175 240 200 236 C220 240 240 265 255 295"
                fill="none"
                stroke="#5c4510"
                strokeWidth="2"
                opacity="0.4"
              />
              <circle cx="175" cy="270" r="6" fill="#a07830" opacity="0.5" />
              <circle cx="220" cy="255" r="4" fill="#6b4e12" opacity="0.55" />
            </motion.g>

            <motion.g
              style={{
                scale: dumpScale,
                opacity: dumpOpacity,
                transformOrigin: "720px 300px",
              }}
            >
              <ellipse cx="720" cy="302" rx="70" ry="9" fill="#1a140c" opacity="0.3" />
              <path
                d="M650 300 C662 255 688 228 720 222 C752 228 778 255 790 300 Z"
                fill="url(#soilGrad)"
              />
            </motion.g>

            <motion.g style={{ opacity: streamOpacity }}>
              <path
                d="M640 175 C650 200 655 230 660 270 C665 250 675 220 680 195"
                fill="#8b6914"
                opacity="0.85"
              />
              <path
                d="M655 180 C662 215 668 245 670 285"
                fill="#c4a06a"
                opacity="0.7"
              />
              <circle cx="648" cy="210" r="5" fill="#a07830" />
              <circle cx="672" cy="240" r="4" fill="#6b4e12" />
              <circle cx="658" cy="260" r="6" fill="#8b6914" />
            </motion.g>

            <motion.g style={{ opacity: dustOpacity }}>
              <circle cx="210" cy="250" r="3" fill="#c4a06a" opacity="0.6" />
              <circle cx="230" cy="235" r="2" fill="#d4b896" opacity="0.5" />
              <circle cx="190" cy="260" r="2.5" fill="#a07830" opacity="0.55" />
              <circle cx="700" cy="220" r="3" fill="#c4a06a" opacity="0.55" />
              <circle cx="730" cy="200" r="2" fill="#d4b896" opacity="0.5" />
              <circle cx="680" cy="235" r="2.5" fill="#a07830" opacity="0.45" />
            </motion.g>

            <motion.g style={{ x: truckX }} filter="url(#softShadow)">
              <ellipse
                cx="210"
                cy="308"
                rx="145"
                ry="11"
                fill="#0b1a2e"
                opacity="0.22"
              />

              <rect
                x="70"
                y="248"
                width="260"
                height="18"
                rx="3"
                fill="url(#steelGrad)"
              />
              <rect x="85" y="262" width="230" height="8" rx="2" fill="#0f1724" />

              <motion.g
                style={{
                  rotate: tipAngle,
                  transformOrigin: "318px 248px",
                }}
              >
                <path
                  d="M145 200 L318 200 L318 248 L145 248 Z"
                  fill="url(#bedGrad)"
                  stroke="#9a9a18"
                  strokeWidth="1.5"
                />
                <path
                  d="M145 200 L155 188 L318 188 L318 200 Z"
                  fill="#e8e848"
                  stroke="#9a9a18"
                  strokeWidth="1"
                />
                <path
                  d="M145 200 L145 248 L155 236 L155 188 Z"
                  fill="#d4d420"
                  stroke="#9a9a18"
                  strokeWidth="1"
                />
                <g stroke="#b8b820" strokeWidth="1.5" opacity="0.7">
                  <line x1="180" y1="200" x2="180" y2="248" />
                  <line x1="220" y1="200" x2="220" y2="248" />
                  <line x1="260" y1="200" x2="260" y2="248" />
                  <line x1="295" y1="200" x2="295" y2="248" />
                </g>
                <text
                  x="230"
                  y="230"
                  textAnchor="middle"
                  fill="#0064d8"
                  fontFamily="Arial Black, sans-serif"
                  fontSize="14"
                  fontWeight="900"
                  opacity="0.85"
                >
                  DB
                </text>
                <motion.path
                  d="M155 245 L155 215 Q200 200 230 208 Q270 200 305 215 L305 245 Z"
                  fill="url(#soilGrad)"
                  style={{ opacity: bedFill }}
                />
              </motion.g>

              <motion.g style={{ opacity: ramOpacity }}>
                <line
                  x1="250"
                  y1="255"
                  x2="290"
                  y2="230"
                  stroke="#8899aa"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <line
                  x1="250"
                  y1="255"
                  x2="285"
                  y2="235"
                  stroke="#c5d0dc"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </motion.g>

              <g>
                <path
                  d="M55 215 L55 255 L125 255 L125 200 L95 200 L75 215 Z"
                  fill="url(#cabGrad)"
                  stroke="#0047a0"
                  strokeWidth="1.5"
                />
                <path d="M58 200 L95 200 L95 192 L62 192 Z" fill="#0047a0" />
                <path
                  d="M78 218 L78 245 L118 245 L118 205 L95 205 L78 218 Z"
                  fill="#9ec5f5"
                  stroke="#003d8a"
                  strokeWidth="1.2"
                  opacity="0.92"
                />
                <path
                  d="M82 222 L95 210 L114 210 L114 240 L82 240 Z"
                  fill="#e8f3ff"
                  opacity="0.35"
                />
                <line
                  x1="95"
                  y1="205"
                  x2="95"
                  y2="255"
                  stroke="#003d8a"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <rect
                  x="48"
                  y="222"
                  width="8"
                  height="12"
                  rx="1"
                  fill="url(#chromeGrad)"
                />
                <circle cx="60" cy="248" r="4" fill="#fcfc64" stroke="#c8c820" />
              </g>

              <rect
                x="42"
                y="248"
                width="20"
                height="14"
                rx="2"
                fill="url(#steelGrad)"
              />
              <g stroke="#8899aa" strokeWidth="1.2">
                <line x1="46" y1="251" x2="58" y2="251" />
                <line x1="46" y1="255" x2="58" y2="255" />
                <line x1="46" y1="259" x2="58" y2="259" />
              </g>

              <motion.g
                style={{
                  rotate: boomAngle,
                  transformOrigin: "95px 250px",
                }}
              >
                <path
                  d="M90 250 L40 250 L35 242 L95 242 Z"
                  fill="url(#steelGrad)"
                  stroke="#0f1724"
                  strokeWidth="1"
                />
                <path
                  d="M40 250 L-15 255 L-12 245 L40 242 Z"
                  fill="#3a4558"
                  stroke="#0f1724"
                  strokeWidth="1"
                />
                <circle cx="90" cy="246" r="5" fill="url(#chromeGrad)" />
                <circle cx="40" cy="246" r="4" fill="url(#chromeGrad)" />

                <motion.g
                  style={{
                    rotate: bucketCurl,
                    transformOrigin: "-15px 250px",
                  }}
                >
                  <path
                    d="M-15 248 L-55 255 L-58 275 L-20 278 L-10 260 Z"
                    fill="url(#steelGrad)"
                    stroke="#0f1724"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M-55 255 L-62 258 L-60 275 L-58 275 Z"
                    fill="#1a2332"
                  />
                  <g fill="#fcfc64" stroke="#9a9a18" strokeWidth="0.8">
                    <path d="M-58 275 L-62 288 L-52 275 Z" />
                    <path d="M-48 276 L-50 290 L-40 276 Z" />
                    <path d="M-36 277 L-36 291 L-26 277 Z" />
                    <path d="M-24 277 L-22 290 L-14 276 Z" />
                  </g>
                  <motion.path
                    d="M-50 262 C-42 252 -28 252 -18 262 L-20 275 L-55 273 Z"
                    fill="url(#soilGrad)"
                    style={{ opacity: scoopFill }}
                  />
                </motion.g>
              </motion.g>

              <Wheel cx={100} cy={285} rot={wheelRot} />
              <Wheel cx={280} cy={285} rot={wheelRot} />
            </motion.g>

            <motion.g style={{ opacity: labelOpacity }}>
              <rect
                x="300"
                y="378"
                width="300"
                height="28"
                rx="8"
                fill="rgba(6, 42, 92, 0.55)"
              />
              <text
                x="450"
                y="397"
                textAnchor="middle"
                fill="#fcfc64"
                fontFamily="Outfit, Segoe UI, sans-serif"
                fontSize="13"
                fontWeight="600"
              >
                Scroll to watch the tipper scoop &amp; tip
              </text>
            </motion.g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Wheel({ cx, cy, rot }) {
  return (
    <motion.g style={{ rotate: rot, transformOrigin: `${cx}px ${cy}px` }}>
      <circle cx={cx} cy={cy} r="28" fill="#1a1a1a" />
      <circle cx={cx} cy={cy} r="22" fill="#2a2a2a" stroke="#444" strokeWidth="2" />
      <circle cx={cx} cy={cy} r="10" fill="url(#chromeGrad)" />
      <circle cx={cx} cy={cy} r="4" fill="#1a1a1a" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={cx}
            y1={cy}
            x2={cx + Math.cos(rad) * 20}
            y2={cy + Math.sin(rad) * 20}
            stroke="#555"
            strokeWidth="2.5"
          />
        );
      })}
      <circle
        cx={cx}
        cy={cy}
        r="26"
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="3"
        strokeDasharray="4 3"
        opacity="0.6"
      />
    </motion.g>
  );
}
