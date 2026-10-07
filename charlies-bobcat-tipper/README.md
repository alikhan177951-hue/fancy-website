# Charly's Bobcat & Tipper

Short **Vite + React + Framer Motion** site for **https://kaamtasker.com/charlies-bobcat-tipper/**.
Cloned from `advance-bobcat-tipper/` (Path A Mixkit 10327 tipper scrub + full-screen mobile menu).

## Stack

- Vite + React (`base: /charlies-bobcat-tipper/`)
- Framer Motion
- Wordmark **CHARLY'S** Bobcat (no logo found). Wordmark text turns white while the dark mobile menu is open.

## Page

1. Hero — tipper scroll scrub, "Cleared. Leveled. Hauled." (their hipages tagline)
2. Services (combo wet hire, excavation & site cuts, bobcat, posi track, tipper hire, haul-away)
3. About / areas + one verified hipages review
4. Quote form (opens SMS to 0402 212 733 — no invented email)

## Real data sources

- **Charlys Bobcat** — ABN 43 324 531 443, sole trader Carmelo Saliba, business name registered 31 Aug 2017 (ABN Lookup)
- 0402 212 733 (`tel:+61402212733`) — misterwhat, localbusinessguide (Caroline Springs + Hillside listings), australia2business
- 26 Lawson Way, Caroline Springs VIC 3023 — misterwhat, australia2business
- Services — hipages profile (combo wet hire: excavator + bobcat + tipper) and Felix marketplace (wheel/track skid steer, 10m + 2.6–5t tippers)
- Review — hipages (5.0, Peter H, Sydenham VIC, 25 Sep 2026, verified hire); rating 4.5 from 11 hipages ratings, 19 hires, member since 2018
- Areas — Caroline Springs base, Hillside (ABN 3037 / older listing), hipages reviewer suburbs (Sydenham, Diggers Rest, Point Cook, Melton West)

## Local

```bash
cd charlies-bobcat-tipper
npm install
npm run build
npm run preview
# http://127.0.0.1:4177/charlies-bobcat-tipper/
```

## Deploy

See `DEPLOY.md`. Upload **contents** of `dist/` into `public_html/kaamtasker.com/charlies-bobcat-tipper/`.
