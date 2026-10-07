# BGA Bobcat / Tipper Hire

Short **Vite + React + Framer Motion** site for **https://kaamtasker.com/bga-bobcat-tipper/**.

Clone of the Speedy Phils / Digwest Path A tipper-scrub pattern. **Does not modify** `/bobcatbob/`, `/speedy-phils-bobcat-tipper/`, or `/digwest-earthworks/`.

Contacts from the lead brief — site form texts the mobile; pitching email kept off-page mailto.

## Stack

- Vite + React (`base: /bga-bobcat-tipper/`)
- Framer Motion — **one** Mixkit tipper dump, scroll-scrubbed (`video.currentTime`)
- Brand: tipper yellow `#f5c400` + black `#0a0a0a` (dark text on yellow CTAs)
- Wordmark **BGA** (no logo on file)

## Hero — Path A (single 10327 scrub)

Same Mixkit Path A unload scrub as bobcatbob / Speedy Phils / Digwest.

| Beat | Progress | Action |
|------|----------|--------|
| Establish | 0–15% | Site / trucks in frame |
| Tip / soil cascade | 15–75% | Tipper dumping |
| Settle + CTA | 75–100% | Hold end; Call / Get a quote |

- Scrub file: `/bga-bobcat-tipper/videos/tipper-10327-scrub.mp4`
- Single `<video>` — src never swaps; `currentTime` driven by scroll

## Page sections

1. Hero + tip scrub  
2. Services  
3. About / areas (Werribee · Wyndham)  
4. Quote lead form (name / phone / email / job → SMS)  
5. Footer (no floating duplicate Call)

## Brand facts

- **BGA Bobcat / Tipper Hire** — 0432 418 388 (`tel:+61432418388`)
- Pitching email on file: `georgestar-12@hotmail.com` (form texts the mobile; do not invent other emails or mailto)
- 4 Buckingham Drive, Werribee VIC 3030
- Areas: Werribee, Hoppers Crossing, Point Cook + western Melbourne surrounds

## Local build

```bash
cd bga-bobcat-tipper
npm install
npm run build
npm run preview
# http://127.0.0.1:4176/bga-bobcat-tipper/
```

## Deploy (SFTP)

Same Namecheap host as bobcatbob. Upload **contents** of `dist/` into:

```
public_html/kaamtasker.com/bga-bobcat-tipper/
```

Do **not** overwrite `public_html/.../bobcatbob/`, `.../speedy-phils-bobcat-tipper/`, or `.../digwest-earthworks/`.

No deploy secrets / CI SFTP credentials were present in this repo — `dist/` is built and committed ready for manual SFTP.

Live URL after upload: **https://kaamtasker.com/bga-bobcat-tipper/**
