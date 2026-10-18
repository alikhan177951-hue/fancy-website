export const BASE = "/gazzas-handyman";

/*
 * Originality build 2026-10-19 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from batch JSON (checked 19 Oct 2026):
 * - Name, phone, suburb/service area, services, rating, listed facts only. No review count shown.
 * - Hero Pexels 12215822: https://www.pexels.com/video/man-mowing-grass-12215822/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG).
 */
export const brand = {"name":"Gazzas Mowing & Handyman Maintenance","shortName":"Gazzas Handyman","legal":"Gazzas Mowing & Handyman Maintenance","phoneDisplay":"0421 766 589","phoneTel":"+61421766589","address":"Hoppers Crossing VIC","addressShort":"Hoppers Crossing","hours":"Free quotes · western suburbs","owner":"Gazzas","rating":"4.7","reviewCount":null};

export const maps = { place: "https://www.google.com/maps/place/Gazzas+Mowing+%26+Handyman+Maintenance/@-37.8733055,144.6879257,17z" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Why us"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"mow","title":"Lawn Mowing","summary":"Regular and one-off lawn mowing."},{"slug":"garden","title":"Garden Maintenance","summary":"Garden tidy-ups and ongoing care."},{"slug":"handy","title":"Small Handyman Jobs","summary":"Odd jobs and small home fixes."},{"slug":"quote","title":"Free Quotes","summary":"No-obligation quotes for your job."}];

export const areasPrimary = ["Hoppers Crossing","Werribee","Tarneit"];
export const areasWider = ["Manor Lakes","Point Cook","Sanctuary Lakes","Altona","Williamstown"];

export const reviews = [];
export const facts = [{"big":"10","small":"Years of garden & handyman work"},{"big":"West","small":"Hoppers Crossing to Williamstown"},{"big":"4.7★","small":"Google rating"}];

export const hero = {"headline":"Mowing and handyman jobs done.","support":"Gazzas Mowing & Handyman Maintenance — Hoppers Crossing and the west. Call 0421 766 589."};
export const heroRating = "4.7-star Google rating · Hoppers Crossing";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Lawn care & odd jobs.","servicesLead":"Hoppers Crossing, Werribee, Tarneit and nearby. Free quotes. 0421 766 589.","aboutEyebrow":"Local facts","aboutHeading":"4.7-star Google rating · Hoppers Crossing.","aboutLead":"10 years of garden maintenance and handyman work across Hoppers Crossing to Williamstown.","quoteHeading":"Request a free Gazzas quote.","quoteArea":"Hoppers Crossing & western suburbs","detailsPlaceholder":"Suburb, lawn or handyman job, and preferred day…","footerCtaLine":"Need mowing or a handyman?","footerCtaSub":"Call Gazzas.","footerBlurb":"Lawn mowing, garden maintenance and small handyman jobs from Hoppers Crossing.","footerPlace":"Hoppers Crossing VIC"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Gazzas","b":"Handyman","tag":"Hoppers Crossing"},
  long: true,
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><circle cx=\"18\" cy=\"30\" r=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\"/><path d=\"M26 30h12M32 18v12\" stroke=\"#a3e635\" stroke-width=\"2.8\" stroke-linecap=\"round\"/></svg>",
};

export const quoteMessage = "Hi, I'd like a quote from Gazzas Mowing & Handyman Maintenance.";
export const media = {
  videoId: "12215822",
  source: "Pexels",
  page: "https://www.pexels.com/video/man-mowing-grass-12215822/",
  note: "Man mowing grass",
};
