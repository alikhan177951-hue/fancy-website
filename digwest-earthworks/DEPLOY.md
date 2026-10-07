# SFTP deploy — Digwest Earthworks

## Target

| Item | Value |
|------|--------|
| Host | Same Namecheap account as bobcatbob / kaamtasker.com |
| Remote path | `public_html/kaamtasker.com/digwest-earthworks/` |
| Local source | `digwest-earthworks/dist/` (after `npm run build`) |
| Live URL | https://kaamtasker.com/digwest-earthworks/ |

## Steps

1. `cd digwest-earthworks && npm install && npm run build`
2. SFTP upload **all files inside** `dist/` into the remote folder above (including `.htaccess`, `videos/`, `assets/`, `index.html`).
3. Confirm `https://kaamtasker.com/digwest-earthworks/` loads and Call links dial `0402 165 090`.
4. Confirm `https://kaamtasker.com/bobcatbob/` and `https://kaamtasker.com/speedy-phils-bobcat-tipper/` are untouched.

## Secrets

No SFTP / Namecheap credentials were found in this repo or CI. Leave `dist/` committed and upload manually, or add secrets later and wire a deploy job.

## Safety

- Never upload into `.../bobcatbob/` or `.../speedy-phils-bobcat-tipper/`.
- This site’s Vite `base` is `/digwest-earthworks/` only.
