# DB Bobcat and Tipper Hire

Reel-quality rebuild of [dbbobcatandtipperhire.com.au](https://dbbobcatandtipperhire.com.au) for **https://kaamtasker.com/bobcatbob/**.

Stack: **Vite + React + Tailwind CSS + Framer Motion**. Contacts, services, process, areas, reviews, and photos come from the 2026-10-07 scrape / BRIEF — nothing invented.

## Deploy to `/bobcatbob/`

1. `npm install`
2. `npm run build`
3. SFTP **the contents of `dist/`** (not the folder itself) into `public_html/kaamtasker.com/bobcatbob/`.

The Vite `base` is `/bobcatbob/`. Asset URLs, the canonical, and `.htaccess` assume that subpath. Do not upload into the agency root, `/api/`, or marketplace trees.

Local preview (same subpath as production):

```bash
npm run dev      # http://127.0.0.1:5173/bobcatbob/
npm run preview  # http://127.0.0.1:4173/bobcatbob/
```

## Brand facts (locked)

- **DB Bobcat and Tipper Hire** — owner-operator David
- Phone: 0412 026 793 (`tel:+61412026793`)
- Email: dbbobcat@optusnet.com.au
- Address: 8 Lush Crt, Altona Meadows VIC 3028
- Hours: Mon–Fri 9:00 am – 7:00 pm
- Palette: logo blue `#0060D0`, yellow/gold `#F0F060` — CTAs use **dark text on yellow**, never white-on-yellow

Lead form is on-page (name, phone/email, job brief) with a call-back confirmation — not mailto-only.
