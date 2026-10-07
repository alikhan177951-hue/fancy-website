# SFTP deploy — Speedy Phils

## Target

| Item | Value |
|------|--------|
| Host | Same Namecheap account as bobcatbob / kaamtasker.com |
| Remote path | `public_html/speedy-phils-bobcat-tipper/` |
| Alt nested path | `public_html/kaamtasker.com/speedy-phils-bobcat-tipper/` (mirror bobcatbob nesting if used) |
| Local source | `speedy-phils-bobcat-tipper/dist/` (after `npm run build`) |
| Live URL | https://kaamtasker.com/speedy-phils-bobcat-tipper/ |

## Steps

1. `cd speedy-phils-bobcat-tipper && npm install && npm run build`
2. SFTP upload **all files inside** `dist/` into the remote folder above (including `.htaccess`, `videos/`, `assets/`, `index.html`).
3. Confirm `https://kaamtasker.com/speedy-phils-bobcat-tipper/` loads and Call links dial `0417 305 814`.
4. Confirm `https://kaamtasker.com/bobcatbob/` is untouched.

## Secrets

No SFTP / Namecheap credentials were found in this repo or CI. Leave `dist/` committed and upload manually, or add secrets later and wire a deploy job.

## Safety

- Never upload into `.../bobcatbob/`.
- This site’s Vite `base` is `/speedy-phils-bobcat-tipper/` only.
