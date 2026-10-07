# A1 Plus Bobcat Hire — kaamtasker.com/a1-plus-bobcat-hire/

Short **Vite + React + Framer Motion** site for **https://kaamtasker.com/a1-plus-bobcat-hire/** (cloned from `jaz-bobcat-tipper/`, Path A Mixkit 10327 tipper scrub hero).

## Real data used
- ABN 26 638 187 780 — ALIMOVSKI, LAURON (sole trader, active since 12 Jan 2016, VIC 3338); business name A1 PLUS BOBCAT HIRE since 2 Oct 2024 (ABN Lookup). Also A1 PLUS BOBCAT HIRE PTY LTD, ABN 88 683 708 287 (Jan 2025).
- 0405 018 819, lauron@a1plusbobcathire.com.au, Melton VIC 3337, Mon–Sun open 24 hours — existing Duda site a1plusbobcathire.com.au
- Services list (site cleans, slab back fill & crush rock, nature strip dig out, concrete removal, levelling, soil removal/spreading, rubbish removal, landscaping) — existing site
- Logo (red frame, A1 PLUS / BOBCAT HIRE) — highest-res original on their Duda CDN (1558×1433 PNG), vector-traced (potrace) into `src/components/LogoPaths.js` → `<Logo />` (red frame fixed, lettering = currentColor: dark on light header, white on hero/menu/footer). Static exports in `public/brand/` (SVG dark/light + transparent 1200px PNGs). Favicon/apple-touch icon = frame + "A1" from the same vector.
- Instagram @a1plus_bobcathire
- No public reviews found (no Google rating surfaced, no hipages profile)

## Build
```bash
cd a1-plus-bobcat-hire && npm install && npm run build && npm run preview
# http://127.0.0.1:4178/a1-plus-bobcat-hire/
```

## Deploy
See `DEPLOY.md`. Upload **contents** of `dist/` into `public_html/kaamtasker.com/a1-plus-bobcat-hire/`.
