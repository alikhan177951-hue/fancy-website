export const BASE = "/major-roofs";

/*
 * Originality build 2026-10-16 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from batch JSON (checked 16 Oct 2026):
 * - Name, phone, suburb/address, services, rating, listed facts only. No review count shown.
 * - Hero Pexels 6160419: https://www.pexels.com/video/man-washing-floor-with-water-pressure-machine-6160419/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG).
 */
export const brand = {"name":"Major Roofs","shortName":"Major Roofs","legal":"Major Roofs","phoneDisplay":"0457 562 993","phoneTel":"+61457562993","address":"Werribee VIC","addressShort":"Werribee","hours":"Quotes by phone · Werribee & Melbourne suburbs","owner":"Major Roofs","rating":"5.0","reviewCount":null};

export const maps = { place: "https://www.google.com/maps/place/Major+Roofs/@-37.8951815,144.6328694,17z" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Why us"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"restore","title":"Roof Restorations","summary":"Full restorations for weathered tiled roofs."},{"slug":"repairs","title":"Roof Repairs","summary":"Repairs that stop leaks and replace damaged tiles."},{"slug":"gutters","title":"Gutter & Valley Cleaning","summary":"Gutters and valleys cleared of leaf and debris."},{"slug":"pressure","title":"Roof Pressure Cleaning","summary":"High-pressure cleaning to lift moss and grime."},{"slug":"paint","title":"Roof Painting","summary":"Three-coat roof painting system."}];

export const areasPrimary = ["Werribee","Hoppers Crossing","Point Cook"];
export const areasWider = ["Tarneit","Wyndham Vale","Laverton","Altona","Sunshine"];

export const reviews = [];
export const facts = [{"big":"10+","small":"Years of roofing experience"},{"big":"Werribee","small":"Based in Werribee"},{"big":"5.0★","small":"Google rating"}];

export const hero = {"headline":"Pressure-clean and restore Werribee roofs.","support":"Major Roofs — restorations, repairs, gutters and three-coat painting. Call 0457 562 993."};
export const heroRating = "5.0-star Google rating · Werribee";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Roof care services.","servicesLead":"Werribee and Melbourne’s suburbs. Call 0457 562 993.","aboutEyebrow":"Local facts","aboutHeading":"5.0-star Google rating · 10+ years.","aboutLead":"Based in Werribee with over 10 years of roofing experience across Melbourne’s suburbs.","quoteHeading":"Get a roof quote.","quoteArea":"Werribee & Melbourne suburbs","detailsPlaceholder":"Suburb, service (clean, restore, paint) and roof type…","footerCtaLine":"Ready for a cleaner roof?","footerCtaSub":"Call Major Roofs.","footerBlurb":"Roof restorations, pressure cleaning and painting from Werribee across Melbourne’s suburbs.","footerPlace":"Werribee VIC"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Major","b":"Roofs","tag":"Werribee"},
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M6 30l18-16 18 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 28v14h24V28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><path d=\"M20 22c2-6 4-8 4-8s2 2 4 8\" fill=\"none\" stroke=\"#f0c014\" stroke-width=\"2.8\" stroke-linecap=\"round\"/></svg>",
};

export const quoteMessage = "Hi, I'd like a quote from Major Roofs.";
export const media = {
  videoId: "6160419",
  source: "Pexels",
  page: "https://www.pexels.com/video/man-washing-floor-with-water-pressure-machine-6160419/",
  note: "Pressure washing motion for roof cleaning",
};
