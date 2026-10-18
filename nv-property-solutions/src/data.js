export const BASE = "/nv-property-solutions";

/*
 * Originality build 2026-10-19 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from batch JSON (checked 19 Oct 2026):
 * - Name, phone, suburb/service area, services, rating, listed facts only. No review count shown.
 * - Hero Pexels 6473944: https://www.pexels.com/video/person-painting-a-wall-6473944/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG).
 */
export const brand = {"name":"NV Property Solutions","shortName":"NV Property Solutions","legal":"NV Property Solutions","phoneDisplay":"0420 845 241","phoneTel":"+61420845241","address":"Hoppers Crossing VIC","addressShort":"Hoppers Crossing","hours":"Quotes by phone · homes & offices","owner":"NV Property Solutions","rating":"5.0","reviewCount":null};

export const maps = { place: "https://www.google.com/maps/place/NV+property+solutions/@-37.8498997,144.6740692,17z" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Why us"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"patch","title":"Patch & Paint","summary":"Patch and paint for a clean finish."},{"slug":"feature","title":"Feature Walls","summary":"Feature wall finishes."},{"slug":"reno","title":"Renovations","summary":"Kitchens, bathrooms and full-home makeovers."},{"slug":"maint","title":"Property Maintenance","summary":"Ongoing property maintenance."}];

export const areasPrimary = ["Hoppers Crossing"];
export const areasWider = ["Melbourne west"];

export const reviews = [];
export const facts = [{"big":"Local","small":"Based in Hoppers Crossing"},{"big":"Homes","small":"Homes, offices & post-reno touch-ups"},{"big":"5.0★","small":"Google rating"}];

export const hero = {"headline":"Patch, paint and renovations.","support":"NV Property Solutions in Hoppers Crossing — homes, offices and touch-ups. Call 0420 845 241."};
export const heroRating = "5.0-star Google rating · Hoppers Crossing";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Property solutions.","servicesLead":"Hoppers Crossing. Patch and paint, feature walls, renovations. 0420 845 241.","aboutEyebrow":"Local facts","aboutHeading":"5.0-star Google rating · Hoppers Crossing.","aboutLead":"Based in Hoppers Crossing — homes, offices and post-renovation touch-ups.","quoteHeading":"Request an NV Property quote.","quoteArea":"Hoppers Crossing & surrounds","detailsPlaceholder":"Suburb, room, and what you need (paint, reno, maintenance)…","footerCtaLine":"Property need a refresh?","footerCtaSub":"Call NV Property Solutions.","footerBlurb":"Patch and paint, renovations and property maintenance from Hoppers Crossing.","footerPlace":"Hoppers Crossing VIC"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"NV","b":"Property","tag":"Hoppers Crossing"},
  long: false,
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><rect x=\"10\" y=\"12\" width=\"28\" height=\"24\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.8\"/><path d=\"M14 30h20\" stroke=\"#e0c09a\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>",
};

export const quoteMessage = "Hi, I'd like a quote from NV Property Solutions.";
export const media = {
  videoId: "6473944",
  source: "Pexels",
  page: "https://www.pexels.com/video/person-painting-a-wall-6473944/",
  note: "Person painting a wall with a roller",
};
