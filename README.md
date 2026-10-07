# DB Bobcat and Tipper Hire

Short **Vite + React + Framer Motion** site for **https://kaamtasker.com/bobcatbob/**.

Owner-operator David. Contacts and services from the live brief — nothing invented.

## Stack

- Vite + React (`base: /bobcatbob/`)
- Framer Motion — scroll-driven tipper animation (`useScroll` / `useTransform`), section reveals
- Brand palette from the DB logo: blue `#0064d8` + yellow `#fcfc64` (dark text on yellow CTAs)

## Page sections

1. **Hero** — brand logo, headline, one Call CTA + Get a quote
2. **Tipper scroll anim** — sticky SVG tipper scoops soil then tips as you scroll
3. **Services** — compact list
4. **About / areas** — short owner blurb + western Melbourne tags
5. **Quote form** — lead gen + Call CTA
6. **Footer**

## Deploy

SFTP the contents of `dist/` into `public_html/kaamtasker.com/bobcatbob/`.

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
