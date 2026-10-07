# DB Bobcat and Tipper Hire

Premium rebuild of [dbbobcatandtipperhire.com.au](https://dbbobcatandtipperhire.com.au) for hosting at **https://kaamtasker.com/bobcatbob/**.

Owner-operator David. Contacts, services, process, areas, Google review quotes, and job photos come from the 2026-10-07 scrape / BRIEF — nothing invented.

## What to upload

SFTP the contents of `dist/` into `public_html/kaamtasker.com/bobcatbob/`.

Assets are prefixed `/bobcatbob/`. Rebuild with:

```bash
npm run build
```

Local preview (serves `dist/` at the production subpath):

```bash
npm run preview
# http://127.0.0.1:4173/bobcatbob/
```

## SiteMD

Content and settings live in `sitemd/pages/` and `sitemd/settings/`. Theme tokens are darkened in `sitemd/theme/styles.css`.

Official `sitemd deploy` / activation needs a SiteMD account. This environment has no SiteMD login, so the **committed `dist/` is produced by the trial renderer** (`renderer/build.mjs`), not the licensed CLI export.

```bash
npm run sitemd -- help
npm run sitemd:launch   # trial preview on :4747 if the binary runs
```

## Brand facts

- **DB Bobcat and Tipper Hire** — David — 0412 026 793 (`tel:+61412026793`)
- dbbobcat@optusnet.com.au
- 8 Lush Crt (Ct), Altona Meadows VIC 3028
- ABN 53 138 642 412 / ACN 138 642 412
- Hours: Maps Mon–Sat 8am–6pm, Sunday closed (website header still says Mon–Fri 9–7; noted on site)

Wikimedia-looking `Bobcat_S650_…` stock is not used. Gallery is `a-1`–`a-17` plus on-site job photos.
