export const BASE = "/western-handyman";

/*
 * Originality build 2026-10-19 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from batch JSON (checked 19 Oct 2026):
 * - Name, phone, suburb/service area, services, rating, listed facts only. No review count shown.
 * - Hero Mixkit 44858: https://mixkit.co/free-stock-video/man-building-a-wooden-frame-using-a-power-drill-44858/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG).
 */
export const brand = {"name":"Western Handyman Services","shortName":"Western Handyman","legal":"Western Handyman Services","phoneDisplay":"0478 900 716","phoneTel":"+61478900716","address":"Point Cook VIC","addressShort":"Point Cook","hours":"Free quotation · western suburbs only","owner":"Western Handyman","rating":"5.0","reviewCount":null};

export const maps = { place: "https://www.google.com/maps/place/Western+Handyman+Services/@-37.8872358,144.8115973,17z" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Why us"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"plumb","title":"Leaks, Taps & Drains","summary":"Leaks, taps and blocked drains."},{"slug":"elec","title":"Lights & Power Points","summary":"Light fittings, power points and switches."},{"slug":"carp","title":"Shelves & Cabinets","summary":"Shelves and minor cabinet carpentry."},{"slug":"doors","title":"Doors & Windows","summary":"Door and window adjustments."},{"slug":"flat","title":"Flat-pack Assembly","summary":"Flat-pack furniture assembly."},{"slug":"plaster","title":"Plaster Patching","summary":"Small plaster patches."},{"slug":"store","title":"Shelving & Storage","summary":"Extra shelving and storage."},{"slug":"app","title":"Minor Appliance Repairs","summary":"Minor appliance fixes."},{"slug":"blinds","title":"Curtains & Blinds","summary":"Curtain and blind installs."}];

export const areasPrimary = ["Point Cook"];
export const areasWider = ["Western suburbs"];

export const reviews = [];
export const facts = [{"big":"$0","small":"If not fixed"},{"big":"Free","small":"Quotation"},{"big":"5.0★","small":"Google rating"}];

export const hero = {"headline":"Western suburbs handyman.","support":"Western Handyman Services in Point Cook — $0 if not fixed. Call 0478 900 716."};
export const heroRating = "5.0-star Google rating · Point Cook";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Fixes around the home.","servicesLead":"Western suburbs only — keeps prices affordable. Free quotation. 0478 900 716.","aboutEyebrow":"Local facts","aboutHeading":"5.0-star Google rating · Point Cook.","aboutLead":"$0 if not fixed. Free quotation. Focused on the western suburbs to keep prices affordable.","quoteHeading":"Request a free quotation.","quoteArea":"Point Cook & western suburbs","detailsPlaceholder":"Suburb, what’s broken or needs fixing…","footerCtaLine":"Need a handyman out west?","footerCtaSub":"Call Western Handyman.","footerBlurb":"Handyman services across Melbourne’s western suburbs from Point Cook.","footerPlace":"Point Cook VIC"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Western","b":"Handyman","tag":"Point Cook"},
  long: false,
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M16 10v18l8 12 8-12V10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/><circle cx=\"24\" cy=\"20\" r=\"3\" fill=\"#f5d000\"/></svg>",
};

export const quoteMessage = "Hi, I'd like a quote from Western Handyman Services.";
export const media = {
  videoId: "44858",
  source: "Mixkit",
  page: "https://mixkit.co/free-stock-video/man-building-a-wooden-frame-using-a-power-drill-44858/",
  note: "Man building a wooden frame using a power drill",
};
