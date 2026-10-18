export const BASE = "/canrepairit";

/*
 * Originality build 2026-10-19 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from batch JSON (checked 19 Oct 2026):
 * - Name, phone, suburb/service area, services, rating, listed facts only. No review count shown.
 * - Hero Pexels 6789602: https://www.pexels.com/video/carpentry-tools-on-wooden-table-6789602/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG).
 */
export const brand = {"name":"Canrepairit","shortName":"Canrepairit","legal":"Canrepairit","phoneDisplay":"0412 933 604","phoneTel":"+61412933604","address":"Altona VIC 3018","addressShort":"Altona","hours":"On-time quotes · western suburbs","owner":"John","rating":"5.0","reviewCount":null};

export const maps = { place: "https://www.google.com/maps/place/Canrepairit.com.au/@-37.8644247,144.8323196,17z" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Why us"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"plumb","title":"Minor Plumbing","summary":"Leaks, tap upgrades, dishwasher installs, toilet cisterns."},{"slug":"lights","title":"Lighting Upgrades","summary":"Lighting fixture upgrades."},{"slug":"tv","title":"TV Mounting & Signal","summary":"TV wall mounting and signal fixes."},{"slug":"cable","title":"Computer Cabling","summary":"Computer and network cabling."},{"slug":"av","title":"AV & Electronics","summary":"Audio-visual and electronic repairs."},{"slug":"carp","title":"Carpentry & Maintenance","summary":"Carpentry and general home and business maintenance."}];

export const areasPrimary = ["Altona"];
export const areasWider = ["Melbourne’s western suburbs"];

export const reviews = [];
export const facts = [{"big":"John","small":"Multiskilled handyman · Altona 3018"},{"big":"West","small":"Homes and businesses out west"},{"big":"5.0★","small":"Google rating"}];

export const hero = {"headline":"Can repair it — Altona handyman.","support":"John at Canrepairit — plumbing, electrics, AV and maintenance for the west. Call 0412 933 604."};
export const heroRating = "5.0-star Google rating · Altona";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Home & business maintenance.","servicesLead":"Altona 3018 and Melbourne’s western suburbs. On-time, cost-effective. 0412 933 604.","aboutEyebrow":"Local facts","aboutHeading":"5.0-star Google rating · Altona.","aboutLead":"John — a mature multiskilled handyman based in Altona 3018, serving homes and businesses out west.","quoteHeading":"Request a Canrepairit quote.","quoteArea":"Altona & western suburbs","detailsPlaceholder":"Suburb, what’s broken (tap, TV, light, cabinet)…","footerCtaLine":"Need something fixed?","footerCtaSub":"Call Canrepairit.","footerBlurb":"Multiskilled handyman work for homes and businesses across Melbourne’s west.","footerPlace":"Altona VIC 3018"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Can","b":"repairit","tag":"Altona"},
  long: false,
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M18 10l4 18h4l4-18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"/><circle cx=\"24\" cy=\"36\" r=\"4\" fill=\"#ffe600\"/></svg>",
};

export const quoteMessage = "Hi John, I'd like a quote from Canrepairit.";
export const media = {
  videoId: "6789602",
  source: "Pexels",
  page: "https://www.pexels.com/video/carpentry-tools-on-wooden-table-6789602/",
  note: "Carpentry tools on wooden table",
};
