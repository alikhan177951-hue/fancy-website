# DB Bobcat and Tipper Hire

Short **Vite + React + Framer Motion** site for **https://kaamtasker.com/bobcatbob/**.

Owner-operator David. Contacts and services from the live brief — nothing invented.

## Stack

- Vite + React (`base: /bobcatbob/`)
- Framer Motion — **one** Mixkit tipper dump, scroll-scrubbed (`useScroll` → `video.currentTime`)
- Brand: blue `#0064d8` + yellow `#fcfc64` (dark text `#0b1a2e` on yellow CTAs)

## Hero — Path A (single 10327 scrub)

One continuous tipper-dumping sequence. **Not** a multi-clip photo swap.

| Beat | Progress | Action |
|------|----------|--------|
| Establish | 0–15% | Site / trucks in frame |
| Tip / soil cascade | 15–75% | Tipper dumping |
| Settle + CTA | 75–100% | Hold end; Call / Get a quote |

- Scrub file: `/bobcatbob/videos/tipper-10327-scrub.mp4` (dense-keyframe re-encode of [Mixkit 10327](https://mixkit.co/free-stock-video/trucks-dumping-dirt-on-a-construction-site-10327/))
- Single `<video>` — src never swaps; `currentTime` driven by scroll
- Safari unlock on first wheel/touch; metadata gate before seek
- License: [`public/videos/LICENSE.md`](public/videos/LICENSE.md)

No cartoon SVG tipper. No multi-clip crossfade.

## Page sections

1. Hero + tip scrub  
2. Services  
3. About / areas  
4. Quote lead form  
5. Footer (no floating duplicate Call)

## Deploy

SFTP `dist/` into `public_html/kaamtasker.com/bobcatbob/`.

```bash
npm install
npm run build
npm run preview
# http://127.0.0.1:4173/bobcatbob/
```

## Brand facts

- **DB Bobcat and Tipper Hire** — David — 0412 026 793 (`tel:+61412026793`)
- dbbobcat@optusnet.com.au
- 8 Lush Crt (Ct), Altona Meadows VIC 3028
- ABN 53 138 642 412 / ACN 138 642 412
- Hours: Mon–Sat 8am–6pm, Sunday closed
