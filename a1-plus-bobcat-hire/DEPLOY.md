# SFTP deploy — A1 Plus Bobcat Hire

## Target

| Item | Value |
|------|--------|
| Host | Same Namecheap account as bobcatbob / kaamtasker.com |
| Remote path | `public_html/kaamtasker.com/a1-plus-bobcat-hire/` |
| Local source | `a1-plus-bobcat-hire/dist/` (after `npm run build`) |
| Live URL | https://kaamtasker.com/a1-plus-bobcat-hire/ |

## Steps

1. `cd a1-plus-bobcat-hire && npm install && npm run build`
2. SFTP upload **all files inside** `dist/` into the remote folder above (including `.htaccess`, `videos/`, `assets/`, `index.html`).
3. Confirm `https://kaamtasker.com/a1-plus-bobcat-hire/` loads and Call links dial `0405 018 819`.
4. Confirm `/bobcatbob/`, `/speedy-phils-bobcat-tipper/`, `/digwest-earthworks/`, `/bga-bobcat-tipper/`, `/advance-bobcat-tipper/`, `/charlies-bobcat-tipper/` and `/jaz-bobcat-tipper/` are untouched.

## Secrets

No SFTP / Namecheap credentials are stored in this repo or CI. `dist/` is committed; upload manually.

## Safety

- Never upload into `.../bobcatbob/`, `.../speedy-phils-bobcat-tipper/`, `.../digwest-earthworks/`, `.../bga-bobcat-tipper/`, `.../advance-bobcat-tipper/`, `.../charlies-bobcat-tipper/` or `.../jaz-bobcat-tipper/`.
- This site’s Vite `base` is `/a1-plus-bobcat-hire/` only.
