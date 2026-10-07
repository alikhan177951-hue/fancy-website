# sitemd — DB Bobcat and Tipper Hire

Markdown source of truth: `sitemd/pages/`. Production static export: `dist/` via `npm run build`.

Deploy path: `https://kaamtasker.com/bobcatbob/` (asset prefix `/bobcatbob/`).

## Auth limits

SiteMD CLI `help` works without login. `sitemd whoami` and `sitemd auth status` both return **Not logged in**. `deploy` / `activate` need an account. This cloud agent has **no SiteMD credentials**, so we did not run a licensed CLI site export. CoS should SFTP `dist/` from the renderer.

Hours conflict (Maps vs old website header) is documented on the live pages — confirm with David before dropping either line.
