# Bobcatbob homepage

Production static homepage for **Bobcatbob** (Bobcatbob Bobcat And Tipper Hire) — landscaping, excavation, bobcat & tipper hire in Deer Park VIC.

Live path (CoS upload): **https://kaamtasker.com/bobcatbob/**

## Stack (sitemd fallback)

This repo is a sitemd + Cursor starter. **sitemd was not used for the shipped site.**

- Upstream GitHub README marks sitemd as **sunsetted / archived**.
- `npx @sitemd-cc/sitemd` still exists (`0.2.2`), but **deployable builds require a paid/activated sitemd account**. Trial mode is localhost-only and does not produce files you can drop on Namecheap.

Path taken: **Vite 6 + vanilla HTML/CSS/JS**, `base: '/bobcatbob/'`, production files in `dist/`.

## Preview locally

```bash
npm install
npm run dev          # http://localhost:5173/bobcatbob/
npm run build        # writes dist/
npm run preview      # http://localhost:4173/bobcatbob/
```

Open `/bobcatbob/` (not `/`) so asset paths match production.

## Namecheap / cPanel upload (CoS only)

**Upload the contents of `dist/`** into:

`public_html/kaamtasker.com/bobcatbob/`

That folder only. After upload, `https://kaamtasker.com/bobcatbob/` (and `/bobcatbob/index.html`) should serve this site.

Do **not**:

- Touch KaamTasker app files, marketing SPA root, or `/api`
- Upload into `public_html/` root
- Deploy to driveressentials.store or any Cover My Ride path
- Use camtasker.com (no DNS; spoken “Camtasker” = KaamTasker)

Asset URLs are rooted at `/bobcatbob/` (Vite `base`). They will 404 if this site is placed at domain root.

This repo does not include FTP/SSH credentials; CoS handles SFTP after the PR.

## Content sources (no invented inbox)

| Fact | Source / note |
| --- | --- |
| Name | Bobcatbob / Bobcatbob Bobcat And Tipper Hire |
| Address | Station Road, Deer Park VIC 3023, Australia |
| Phone | 0412 947 967 · `tel:+61412947967` (primary CTA) |
| Hours | 06:00–18:00 daily (AussieWeb listing) |
| Established | ~2002 (some listings 2003) |
| About / services | Oneflare-style public directory paraphrase (see homepage) |
| Area | Deer Park + western Melbourne suburbs listed on the page |
| Payments | EFTPOS, cheque |
| Brand domain | bobcatbob.com.au |
| Email | **None found** (Oneflare / AussieWeb / AtoZ / MisterWhat as of 2026-10-07). Contact form does not post to a fake inbox. |
| Reviews | Oneflare showed **0** — testimonials are labelled sample/demo |
| Old website | http://www.bobcatbob.com.au is a broken Apache “Index of /” with empty `cgi-bin` (2020). **No project photos or email to scrape.** |
| Gallery | Royalty-free Unsplash images, captions/alt text state they are **example styles**, not Bobcatbob job photos |

## Repo layout

- `index.html`, `src/` — source
- `public/` — favicon, robots, sitemap, `.htaccess`
- `dist/` — built static site (commit this so CoS can upload without Node)
- `vite.config.js` — `base: '/bobcatbob/'`
