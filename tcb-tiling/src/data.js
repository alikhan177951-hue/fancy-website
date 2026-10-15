export const BASE = "/tcb-tiling";

/*
 * Originality build 2026-10-16 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from batch JSON (checked 16 Oct 2026):
 * - Name, phone, suburb/address, services, rating, listed facts only. No review count shown.
 * - Hero Pexels 24906850: https://www.pexels.com/video/a-person-is-using-a-tool-to-lay-tile-24906850/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG).
 */
export const brand = {"name":"TCB Tiling & Renovations","shortName":"TCB Tiling","legal":"TCB Tiling & Renovations","phoneDisplay":"0418 364 104","phoneTel":"+61418364104","address":"St Albans VIC","addressShort":"St Albans","hours":"Mon–Fri 8am–7pm · Saturday by appointment","owner":"TCB Tiling","rating":"5.0","reviewCount":null};

export const maps = { place: "https://www.google.com/maps/place/TCB+Tiling+%26+Renovations/@-37.7097804,144.7476798,17z" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Why us"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"bath","title":"Bathroom Renovations","summary":"Full bathroom renovations with tiling and waterproofing."},{"slug":"kitchen","title":"Kitchen Renovations","summary":"Kitchen tiling, splashbacks and related finishes."},{"slug":"laundry","title":"Laundries & Toilets","summary":"Laundry and toilet renovations."},{"slug":"tiling","title":"Tiling","summary":"Floor and wall tiling for homes and fit-outs."},{"slug":"water","title":"Waterproofing","summary":"Waterproofing before wet-area tiling."},{"slug":"floor","title":"Flooring","summary":"Floor finishes as part of the renovation."},{"slug":"paint","title":"Painting","summary":"Painting to complete the room."},{"slug":"retail","title":"Retail Fit-outs","summary":"Tiling and renovations for retail spaces."}];

export const areasPrimary = ["St Albans","Sunshine","Deer Park"];
export const areasWider = ["Caroline Springs","Sunbury","Melton","Taylors Lakes","Inner Melbourne"];

export const reviews = [];
export const facts = [{"big":"20+","small":"Years' experience"},{"big":"West","small":"Melbourne’s west & inner Melbourne"},{"big":"5.0★","small":"Google rating · St Albans"}];

export const hero = {"headline":"Tiling and renovations from St Albans.","support":"TCB Tiling & Renovations — bathrooms, kitchens, waterproofing and fit-outs. Call 0418 364 104."};
export const heroRating = "5.0-star Google rating · St Albans";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Tiling & renovations.","servicesLead":"St Albans and Melbourne’s west. Call 0418 364 104.","aboutEyebrow":"Local facts","aboutHeading":"5.0-star Google rating · 20+ years.","aboutLead":"Based in St Albans. Sunshine, Deer Park, Caroline Springs, Sunbury, Melton, Taylors Lakes and inner Melbourne. Mon–Fri 8am–7pm; Saturday by appointment.","quoteHeading":"Request a tiling quote.","quoteArea":"St Albans, west & inner Melbourne","detailsPlaceholder":"Suburb, room (bath, kitchen, laundry) and tile type if known…","footerCtaLine":"Planning a renovation?","footerCtaSub":"Call TCB Tiling & Renovations.","footerBlurb":"Bathroom, kitchen and retail tiling from St Albans across Melbourne’s west.","footerPlace":"St Albans VIC"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"TCB","b":"Tiling","tag":"St Albans"},
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><rect x=\"8\" y=\"10\" width=\"14\" height=\"14\" rx=\"1.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.8\"/><rect x=\"26\" y=\"10\" width=\"14\" height=\"14\" rx=\"1.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.8\"/><rect x=\"8\" y=\"28\" width=\"14\" height=\"14\" rx=\"1.5\" fill=\"none\" stroke=\"#d4b896\" stroke-width=\"2.8\"/><rect x=\"26\" y=\"28\" width=\"14\" height=\"14\" rx=\"1.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.8\"/></svg>",
};

export const quoteMessage = "Hi, I'd like a quote from TCB Tiling & Renovations.";
export const media = {
  videoId: "24906850",
  source: "Pexels",
  page: "https://www.pexels.com/video/a-person-is-using-a-tool-to-lay-tile-24906850/",
  note: "Tiler laying floor tiles with tools",
};
