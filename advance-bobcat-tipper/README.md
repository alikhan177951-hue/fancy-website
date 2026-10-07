# Advance Bobcat & Tipper Hire

Short **Vite + React + Framer Motion** site for **https://kaamtasker.com/advance-bobcat-tipper/**.

Clone of the BGA / Speedy Phils / Digwest Path A tipper-scrub pattern. **Does not modify** any other business folder.

## Stack

- Vite + React (`base: /advance-bobcat-tipper/`)
- Framer Motion — **one** Mixkit 10327 tipper dump, scroll-scrubbed (`video.currentTime`)
- Brand: tipper yellow `#f5c400` + black `#0a0a0a` (dark text on yellow CTAs)
- Wordmark **ADVANCE** (no logo found)

## Page sections

1. Hero + tip scrub
2. Services (bobcat, tipper, slab bases, concreting, paving, landscape prep, soil removal, clean-ups)
3. About / areas + one verified hipages review
4. Quote lead form (name / phone / email / job → SMS)
5. Footer

## Brand facts (sources)

- **Advance Bobcat and Tipper Truck Hire** — ABN 29 511 070 206, sole trader Justin Debono (ABN Lookup)
- 0410 842 334 (`tel:+61410842334`) — Oneflare / top10place
- 4 Cassia Road, Melton West VIC 3337 — Oneflare
- Services — Oneflare + hipages profile descriptions
- Review — hipages (5.0, Jadwiga M, Burnside VIC, 17 Nov 2016)
- No email on the page (form texts the mobile; never add mailto)

## Local build

```bash
cd advance-bobcat-tipper
npm install
npm run build
npm run preview
# http://127.0.0.1:4176/advance-bobcat-tipper/
```

## Deploy

See `DEPLOY.md`. Upload **contents** of `dist/` into `public_html/kaamtasker.com/advance-bobcat-tipper/`.
