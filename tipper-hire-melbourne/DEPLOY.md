# SFTP deploy — Tipper Hire Melbourne

## Target

| Item | Value |
|------|--------|
| Host | Same Namecheap account as bobcatbob / kaamtasker.com |
| Remote path | `public_html/kaamtasker.com/tipper-hire-melbourne/` |
| Local source | `tipper-hire-melbourne/dist/` (after `npm run build`) |
| Live URL | https://kaamtasker.com/tipper-hire-melbourne/ |

## Steps

1. `cd tipper-hire-melbourne && npm install && npm run build`
2. SFTP upload **all files inside** `dist/` into the remote folder above (including `.htaccess`, `videos/`, `assets/`, `index.html`).
3. Confirm `https://kaamtasker.com/tipper-hire-melbourne/` loads and Call links dial `0401 834 848`.
4. Confirm `/bobcatbob/`, `/speedy-phils-bobcat-tipper/`, `/digwest-earthworks/`, `/bga-bobcat-tipper/`, `/advance-bobcat-tipper/`, `/charlies-bobcat-tipper/`, `/jaz-bobcat-tipper/` and `/a1-plus-bobcat-hire/` are untouched.

## Secrets

No SFTP / Namecheap credentials are stored in this repo or CI. `dist/` is committed; upload manually.

## Safety

- Never upload into `.../bobcatbob/`, `.../speedy-phils-bobcat-tipper/`, `.../digwest-earthworks/`, `.../bga-bobcat-tipper/`, `.../advance-bobcat-tipper/`, `.../charlies-bobcat-tipper/`, `.../jaz-bobcat-tipper/` or `.../a1-plus-bobcat-hire/`.
- This site’s Vite `base` is `/tipper-hire-melbourne/` only.
