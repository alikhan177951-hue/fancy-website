# SFTP deploy — Advance Bobcat & Tipper Hire

## Target

| Item | Value |
|------|--------|
| Host | Same Namecheap account as bobcatbob / kaamtasker.com |
| Remote path | `public_html/kaamtasker.com/advance-bobcat-tipper/` |
| Local source | `advance-bobcat-tipper/dist/` (after `npm run build`) |
| Live URL | https://kaamtasker.com/advance-bobcat-tipper/ |

## Steps

1. `cd advance-bobcat-tipper && npm install && npm run build`
2. SFTP upload **all files inside** `dist/` into the remote folder above (including `.htaccess`, `videos/`, `assets/`, `index.html`).
3. Confirm `https://kaamtasker.com/advance-bobcat-tipper/` loads and Call links dial `0410 842 334`.
4. Confirm `/bobcatbob/`, `/speedy-phils-bobcat-tipper/`, `/digwest-earthworks/`, and `/bga-bobcat-tipper/` are untouched.

## Secrets

No SFTP / Namecheap credentials are stored in this repo or CI. `dist/` is committed; upload manually.

## Safety

- Never upload into `.../bobcatbob/`, `.../speedy-phils-bobcat-tipper/`, `.../digwest-earthworks/`, or `.../bga-bobcat-tipper/`.
- This site’s Vite `base` is `/advance-bobcat-tipper/` only.
