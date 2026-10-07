# Bobcatbob homepage (sitemd)

Production homepage for **Bobcatbob** (Bobcatbob Bobcat And Tipper Hire) — landscaping, excavation, bobcat & tipper hire in Deer Park VIC.

Live path after CoS upload: **https://kaamtasker.com/bobcatbob/**

This is a **[sitemd](https://github.com/sitemd-cc/sitemd)** project (`Elastic-2.0`). Content lives in `sitemd/pages/` and `sitemd/settings/`. Theme assets are prefixed for subdirectory hosting (`/bobcatbob/theme/...`).

## Scripts

```bash
npm install
npm run dev          # sitemd launch — http://localhost:4747 (trial / memory-only)
npm run status       # sitemd status
npm run pages        # list pages
npm run validate
npm run seo
npm run build        # real engine runBuild() → writes dist/ when activated
npm run build:cli    # `sitemd build` (see blocker below)
npm run deploy       # sitemd deploy (requires paid/activated account)
```

Activated builds are configured to emit into **`dist/`** (`sitemd/settings/build.md` → `outputDir: ../dist`) so CoS can upload that folder.

## Namecheap / cPanel (CoS SFTP only)

Upload **contents of `dist/`** to:

`public_html/kaamtasker.com/bobcatbob/`

Do **not** touch the KaamTasker app, marketing SPA root, or `/api`. Do **not** deploy to driveressentials.store. camtasker.com has no DNS (spoken “Camtasker” = KaamTasker).

This repo does not include FTP credentials.

## SiteMD generate/build — exact blockers (2026-10-07)

sitemd **trial (unactivated)** runs locally. **Disk output (`site/` / `dist/`) requires a paid, activated sitemd account.** Official docs: trial output is memory-only; `sitemd build` / `sitemd deploy` are activated-only.

Recorded from this environment (`@sitemd-cc/sitemd@0.2.2`, not logged in, `SITEMD_TOKEN` unset):

1. **Public CLI has no `build` command**

   ```text
   $ npx sitemd build
   Unknown command: build. Run sitemd help to see all commands.
   ```

   `runBuild()` exists in the engine (`sitemd/engine/build/index.js`) but is **not registered** in the CLI switch. `npm run build` calls `scripts/sitemd-build.js`, which invokes `runBuild()` directly.

2. **Production builder refuses unauthenticated runs**

   ```text
   $ npm run build
   Not authenticated. Run: sitemd auth login
   ```

3. **Auth / slots**

   ```text
   $ npx sitemd auth status
   Not logged in. Run: sitemd login
   ```

   Upstream README also marks the GitHub project as **sunsetted / archived**. There is no offline build flag. Do not bypass the activation/license check.

Until someone with a sitemd license runs `sitemd login` + `npm run build` (or `sitemd deploy`) in this repo, **activated HTML cannot be generated here**. The committed `dist/` is the last subpath-safe static snapshot for CoS (Vite-era export, `base: /bobcatbob/`). Replace it by running `npm run build` after activation — that command is wired to the sitemd engine.

Local preview of the **sitemd** site (trial banner expected): `npm run dev` then open `http://localhost:4747`.

## Content sources (no invented inbox)

| Fact | Source / note |
| --- | --- |
| Name | Bobcatbob / Bobcatbob Bobcat And Tipper Hire |
| Address | Station Road, Deer Park VIC 3023, Australia |
| Phone | 0412 947 967 · `tel:+61412947967` (primary CTA) |
| Hours | 06:00–18:00 daily (AussieWeb listing) |
| Established | ~2002 (some listings 2003) |
| About / services | Oneflare-style public directory paraphrase on the homepage |
| Area | Deer Park + western Melbourne suburbs listed on the page |
| Payments | EFTPOS, cheque |
| Brand domain | bobcatbob.com.au |
| Email | **None found** (Oneflare / AussieWeb / AtoZ / MisterWhat as of 2026-10-07). No fake inbox. |
| Reviews | Oneflare showed **0** — testimonials labelled sample/demo |
| Old website | http://www.bobcatbob.com.au is a broken Apache “Index of /” with empty `cgi-bin` (2020). **No project photos or email to scrape.** |
| Gallery | Royalty-free Unsplash images, captions state **example styles**, not Bobcatbob job photos |

## Layout

- `sitemd/pages/home.md` — homepage sections
- `sitemd/settings/` — meta, header, footer, theme, build, deploy, SEO
- `sitemd/theme/` — layout + CSS (asset URLs use `/bobcatbob/…`)
- `scripts/sitemd-build.js` — production `runBuild()`
- `dist/` — static files for `public_html/kaamtasker.com/bobcatbob/`
