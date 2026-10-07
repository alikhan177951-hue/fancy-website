# Digwest Earthworks Pty Ltd

Short **Vite + React + Framer Motion** site for **https://kaamtasker.com/digwest-earthworks/**.

Clone of the bobcatbob / Speedy Phils Path A tipper-scrub pattern. **Does not modify** `/bobcatbob/` or `/speedy-phils-bobcat-tipper/`.

Contacts from the lead brief — no invented business email or hours.

## Stack

- Vite + React (`base: /digwest-earthworks/`)
- Framer Motion — **one** Mixkit tipper dump, scroll-scrubbed (`video.currentTime`)
- Brand: dirt / amber `#e5a00d` + black `#0a0a0a` (dark text on amber CTAs)
- Wordmark **Digwest** (no logo on file)

## Hero — Path A (single 10327 scrub)

Same Mixkit Path A unload scrub as bobcatbob / Speedy Phils.

| Beat | Progress | Action |
|------|----------|--------|
| Establish | 0–15% | Site / trucks in frame |
| Tip / soil cascade | 15–75% | Tipper dumping |
| Settle + CTA | 75–100% | Hold end; Call / Get a quote |

- Scrub file: `/digwest-earthworks/videos/tipper-10327-scrub.mp4`
- Single `<video>` — src never swaps; `currentTime` driven by scroll

## Page sections

1. Hero + tip scrub  
2. Services  
3. About / areas (Hoppers Crossing · west Melb)  
4. Quote lead form (name / phone / email / job → SMS)  
5. Footer (no floating duplicate Call)

## Brand facts

- **Digwest Earthworks Pty Ltd** — 0402 165 090 (`tel:+61402165090`)
- No public business email (form texts the mobile; do not invent mailto)
- Hoppers Crossing VIC 3029
- ABN 14 136 170 629
- Services: bobcat + mini excavator + tipper hire
- Areas: Hoppers Crossing, Werribee, Point Cook + western Melbourne surrounds

## Local build

```bash
cd digwest-earthworks
npm install
npm run build
npm run preview
# http://127.0.0.1:4175/digwest-earthworks/
```

## Deploy (SFTP)

Same Namecheap host as bobcatbob. Upload **contents** of `dist/` into:

```
public_html/kaamtasker.com/digwest-earthworks/
```

Do **not** overwrite `public_html/.../bobcatbob/` or `.../speedy-phils-bobcat-tipper/`.

No deploy secrets / CI SFTP credentials were present in this repo — `dist/` is built and committed ready for manual SFTP.

Live URL after upload: **https://kaamtasker.com/digwest-earthworks/**
