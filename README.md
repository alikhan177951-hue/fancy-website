# DB Bobcat and Tipper Hire

Short **Vite + React + Framer Motion** site for **https://kaamtasker.com/bobcatbob/**.

Owner-operator David. Contacts and services from the live brief — nothing invented.

## Stack

- Vite + React (`base: /bobcatbob/`)
- Framer Motion — scroll-scrubbed Mixkit video hero (`useScroll` → `video.currentTime` + crossfade)
- Brand palette from the DB logo: blue `#0064d8` + yellow `#fcfc64` (dark text `#0b1a2e` on yellow CTAs)

## Hero (realistic video, not SVG)

Sticky full-bleed construction footage scrubbed as you scroll:

| Beat | Progress | Clip |
|------|----------|------|
| Enter | 0–20% | `truck-enter-45816.mp4` |
| Scoop / load | 20–50% | `scoop-load-49189.mp4` |
| Tip / unload | 50–80% | `unload-dump-10327.mp4` |
| Settle + CTA | 80–100% | hold dump frame; Call / Get a quote stay on hero |

Assets live in `public/videos/` under the **Mixkit Free Stock Video License** (commercial OK). Details: [`public/videos/LICENSE.md`](public/videos/LICENSE.md).

Do **not** reintroduce a cartoon SVG tipper for this hero.

## Page sections

1. **Hero + scroll video** — brand, headline, one yellow Call + Get a quote
2. **Services** — compact list
3. **About / areas** — short owner blurb + western Melbourne tags
4. **Quote form** — lead gen + Call CTA
5. **Footer** — no floating duplicate Call

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
