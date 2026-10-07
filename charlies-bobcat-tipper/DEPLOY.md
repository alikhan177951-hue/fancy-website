# SFTP deploy — Charly's Bobcat & Tipper

## Target

| Item | Value |
|------|--------|
| Host | Same Namecheap account as bobcatbob / kaamtasker.com |
| Remote path | `public_html/kaamtasker.com/charlies-bobcat-tipper/` |
| Local source | `charlies-bobcat-tipper/dist/` (after `npm run build`) |
| Live URL | https://kaamtasker.com/charlies-bobcat-tipper/ |

## Steps

1. `cd charlies-bobcat-tipper && npm install && npm run build`
2. SFTP upload **all files inside** `dist/` into the remote folder above (including `.htaccess`, `videos/`, `assets/`, `index.html`).
3. Confirm `https://kaamtasker.com/charlies-bobcat-tipper/` loads and Call links dial `0402 212 733`.
4. Confirm `/bobcatbob/`, `/speedy-phils-bobcat-tipper/`, `/digwest-earthworks/`, and `/bga-bobcat-tipper/` are untouched.

## Secrets

No SFTP / Namecheap credentials are stored in this repo or CI. `dist/` is committed; upload manually.

## Safety

- Never upload into `.../bobcatbob/`, `.../speedy-phils-bobcat-tipper/`, `.../digwest-earthworks/`, or `.../bga-bobcat-tipper/`.
- This site’s Vite `base` is `/charlies-bobcat-tipper/` only.
