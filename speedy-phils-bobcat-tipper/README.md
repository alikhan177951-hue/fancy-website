# Speedy Phils Bobcat and Tipper Hire

Short **Vite + React + Framer Motion** site for **https://kaamtasker.com/speedy-phils-bobcat-tipper/**.

Clone of the bobcatbob Path A tipper-scrub pattern. **Does not modify** `/bobcatbob/`.

Contacts from the lead brief — no invented business email, ABN, or hours.

## Stack

- Vite + React (`base: /speedy-phils-bobcat-tipper/`)
- Framer Motion — **one** Mixkit tipper dump, scroll-scrubbed (`video.currentTime`)
- Brand: tipper yellow `#f5c400` + black `#0a0a0a` (dark text on yellow CTAs)
- Wordmark **Speedy Phils** (no logo on file)

## Hero — Path A (single 10327 scrub)

Same Mixkit Path A unload scrub as bobcatbob.

| Beat | Progress | Action |
|------|----------|--------|
| Establish | 0–15% | Site / trucks in frame |
| Tip / soil cascade | 15–75% | Tipper dumping |
| Settle + CTA | 75–100% | Hold end; Call / Get a quote |

- Scrub file: `/speedy-phils-bobcat-tipper/videos/tipper-10327-scrub.mp4`
- Single `<video>` — src never swaps; `currentTime` driven by scroll

## Page sections

1. Hero + tip scrub  
2. Services  
3. About / areas (Rockbank · Melton · Deer Park)  
4. Quote lead form (name / phone / email / job → SMS to Phil)  
5. Footer (no floating duplicate Call)

## Brand facts

- **Speedy Phils Bobcat and Tipper Hire** — Phil — 0417 305 814 (`tel:+61417305814`)
- No public business email (form texts the mobile; do not invent mailto)
- 1369 Leakes Rd, Rockbank VIC 3335
- Areas: Rockbank, Melton, Deer Park + western Melbourne surrounds

## Local build

```bash
cd speedy-phils-bobcat-tipper
npm install
npm run build
npm run preview
# http://127.0.0.1:4174/speedy-phils-bobcat-tipper/
```

## Deploy (SFTP)

Same Namecheap host as bobcatbob. Upload **contents** of `dist/` into:

```
public_html/speedy-phils-bobcat-tipper/
```

(If the bobcatbob folder is nested as `public_html/kaamtasker.com/bobcatbob/`, mirror that layout: `public_html/kaamtasker.com/speedy-phils-bobcat-tipper/`.)

Do **not** overwrite `public_html/.../bobcatbob/`.

No deploy secrets / CI SFTP credentials were present in this repo — `dist/` is built and committed ready for manual SFTP.

Live URL after upload: **https://kaamtasker.com/speedy-phils-bobcat-tipper/**
