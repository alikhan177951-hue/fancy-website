# DB Bobcat and Tipper Hire

Premium **Vite + React + Framer Motion** rebuild of [dbbobcatandtipperhire.com.au](https://dbbobcatandtipperhire.com.au) for **https://kaamtasker.com/bobcatbob/**.

Owner-operator David. Contacts, services, process, areas, Google review quotes, and job photos come from the scrape / BRIEF — nothing invented.

## Stack

- Vite + React
- Framer Motion (hero entrance, scroll reveals, hover, lightbox; respects `prefers-reduced-motion`)
- Brand theme from the DB logo: royal blue `#0064d8` + yellow `#fcfc64` (dark text on yellow CTAs)

## What to upload

SFTP the contents of `dist/` into `public_html/kaamtasker.com/bobcatbob/`.

Assets are prefixed `/bobcatbob/`. Rebuild with:

```bash
npm install
npm run build
```

Local preview (serves `dist/` at the production subpath):

```bash
npm run preview
# http://127.0.0.1:4173/bobcatbob/
```

Dev server:

```bash
npm run dev
```

## Brand facts

- **DB Bobcat and Tipper Hire** — David — 0412 026 793 (`tel:+61412026793`)
- dbbobcat@optusnet.com.au
- 8 Lush Crt (Ct), Altona Meadows VIC 3028
- ABN 53 138 642 412 / ACN 138 642 412
- Hours: Maps Mon–Sat 8am–6pm, Sunday closed

Gallery is `a-1`–`a-17` plus on-site job photos. Wikimedia-looking stock is not used.
