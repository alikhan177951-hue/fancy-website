# sitemd — DB Bobcat and Tipper Hire

Markdown source of truth: `sitemd/pages/`. Production static export: `dist/` via `npm run build`.

Deploy path: `https://kaamtasker.com/bobcatbob/` (asset prefix `/bobcatbob/`).

Brand theme (logo-matched from `logo-1.png`): primary royal blue `#0064d8`, accent golden yellow `#fcfc64`, cool neutrals so the transparent PNG logo sits native on a light header plate — not a warm/dark clash.

Lead capture: quote form on home `#quote` and contact (name, phone, email, job details) opens mailto to `dbbobcat@optusnet.com.au` — static-hosting friendly, no fake auth.

Motion: CSS entrance + IntersectionObserver scroll reveals on logo/hero/services/gallery/CTAs; respects `prefers-reduced-motion`.

## Auth limits

SiteMD CLI `help` works without login. `sitemd whoami` and `sitemd auth status` both return **Not logged in**. `deploy` / `activate` need an account. This cloud agent has **no SiteMD credentials**, so we did not run a licensed CLI site export. CoS should SFTP `dist/` from the renderer.

Hours conflict (Maps vs old website header) is documented on the live pages — confirm with David before dropping either line.
