# SFTP deploy — BGA Bobcat / Tipper Hire

## Target

| Item | Value |
|------|--------|
| Host | Same Namecheap account as bobcatbob / kaamtasker.com |
| Remote path | `public_html/kaamtasker.com/bga-bobcat-tipper/` |
| Local source | `bga-bobcat-tipper/dist/` (after `npm run build`) |
| Live URL | https://kaamtasker.com/bga-bobcat-tipper/ |

## Steps

1. `cd bga-bobcat-tipper && npm install && npm run build`
2. SFTP upload **all files inside** `dist/` into the remote folder above (including `.htaccess`, `videos/`, `assets/`, `index.html`).
3. Confirm `https://kaamtasker.com/bga-bobcat-tipper/` loads and Call links dial `0432 418 388`.
4. Confirm `https://kaamtasker.com/bobcatbob/`, `https://kaamtasker.com/speedy-phils-bobcat-tipper/`, and `https://kaamtasker.com/digwest-earthworks/` are untouched.

## Secrets

No SFTP / Namecheap credentials were found in this repo or CI. Leave `dist/` committed and upload manually, or add secrets later and wire a deploy job.

## Safety

- Never upload into `.../bobcatbob/`, `.../speedy-phils-bobcat-tipper/`, or `.../digwest-earthworks/`.
- This site’s Vite `base` is `/bga-bobcat-tipper/` only.
