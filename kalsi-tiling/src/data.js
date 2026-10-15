export const BASE = "/kalsi-tiling";

/*
 * Originality build 2026-10-16 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from batch JSON (checked 16 Oct 2026):
 * - Name, phone, suburb/address, services, rating, listed facts only. No review count shown.
 * - Hero Pexels 6008078: https://www.pexels.com/video/laying-over-tiles-on-the-floor-6008078/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG).
 */
export const brand = {"name":"Kalsi Tiling","shortName":"Kalsi Tiling","legal":"Kalsi Tiling","phoneDisplay":"0433 800 172","phoneTel":"+61433800172","address":"Truganina VIC","addressShort":"Truganina","hours":"Quotes by phone · Melbourne west","owner":"Kalsi Tiling","rating":"5.0","reviewCount":null};

export const maps = { place: "https://www.google.com/maps/place/Kalsi+Tiling+Pty+Ltd/@-37.8237025,144.7196108,17z" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Why us"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"floor","title":"Floor & Wall Tiling","summary":"Floor and wall tiling for homes and workplaces."},{"slug":"grout","title":"Grouting","summary":"Neat grouting for a lasting finish."},{"slug":"screed","title":"Screeding","summary":"Screeding to level floors before tiling."},{"slug":"water","title":"Waterproofing","summary":"Waterproofing under wet-area tiles."},{"slug":"all","title":"Residential, Commercial & Renovation","summary":"New builds, renovations and commercial jobs."}];

export const areasPrimary = ["Truganina","Tarneit","Hoppers Crossing"];
export const areasWider = ["Werribee","Point Cook","Deer Park","Sunshine","Caroline Springs"];

export const reviews = [];
export const facts = [{"big":"7 yrs","small":"Industry experience"},{"big":"West","small":"Based in Truganina, Melbourne west"},{"big":"5.0★","small":"Google rating"}];

export const hero = {"headline":"Floor and wall tiling in Truganina.","support":"Kalsi Tiling — grouting, screeding and waterproofing. Call 0433 800 172."};
export const heroRating = "5.0-star Google rating · Truganina";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Tiling services.","servicesLead":"Truganina and Melbourne’s west. Call 0433 800 172.","aboutEyebrow":"Local facts","aboutHeading":"5.0-star Google rating · 7 years.","aboutLead":"Seven years of industry experience based in Truganina, Melbourne west.","quoteHeading":"Get a tiling quote.","quoteArea":"Truganina & Melbourne west","detailsPlaceholder":"Suburb, floor or wall, room type and tile size if known…","footerCtaLine":"Need a tiler?","footerCtaSub":"Call Kalsi Tiling.","footerBlurb":"Floor and wall tiling, grouting and waterproofing from Truganina across Melbourne’s west.","footerPlace":"Truganina VIC"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Kalsi","b":"Tiling","tag":"Truganina"},
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M10 34h28\" stroke=\"currentColor\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M14 34l6-16h8l6 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><path d=\"M18 26h12\" stroke=\"#facc15\" stroke-width=\"2.8\" stroke-linecap=\"round\"/></svg>",
};

export const quoteMessage = "Hi, I'd like a quote from Kalsi Tiling.";
export const media = {
  videoId: "6008078",
  source: "Pexels",
  page: "https://www.pexels.com/video/laying-over-tiles-on-the-floor-6008078/",
  note: "Hands installing floor tiles",
};
