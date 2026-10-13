export const BASE = "/pest-and-snakes";

/*
 * Originality rebuild 2026-10-14 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from public listings (checked 14 Oct 2026):
 * - pestandsnakes.com.au + Google Maps (Sunbury, phone, services, 5.0★ ~50 reviews).
 * - Hero Mixkit 33583: https://mixkit.co/free-stock-video/person-disinfecting-a-door-with-spray-33583/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG). Scraped logo files deleted.
 */
export const brand = {"name":"Pest and Snakes Removals","shortName":"Pest and Snakes","legal":"Pest and Snakes Removals","phoneDisplay":"0421 879 959","phoneTel":"+61421879959","address":"Sunbury VIC","addressShort":"Sunbury","hours":"Quick inspection by phone · Sunbury & Melbourne","owner":"Pest and Snakes","rating":"5.0","reviewCount":50};

export const maps = { place: "https://www.google.com/maps/search/?api=1&query=Pest+and+Snakes+Removals+Sunbury" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Reviews"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"pest","title":"Pest Control","summary":"Treatments for ants, cockroaches, bed bugs and common pests."},{"slug":"snake","title":"Snake Removal","summary":"Snake catching and removal by trained catchers."},{"slug":"possum","title":"Possum Control","summary":"Possum control around the home."},{"slug":"spider","title":"Spider Control","summary":"Spider treatments indoors and outdoors."},{"slug":"rodent","title":"Rodent Control","summary":"Rat and mouse control for houses and sheds."},{"slug":"inspect","title":"Quick Inspection","summary":"Phone triage and on-site inspection when needed."}];

export const areasPrimary = ["Sunbury","Diggers Rest","Melton"];
export const areasWider = ["Gisborne","Riddells Creek","Craigieburn","Bacchus Marsh"];

export const reviews = [];
export const facts = [{"big":"50","small":"Google reviews · 5.0★ rating"},{"big":"Snakes","small":"Trained catchers · Sunbury base"},{"big":"Phone","small":"0421 879 959"}];

export const hero = {"headline":"Pest and snake removal in Sunbury.","support":"Pest and Snakes Removals — pest control, snake catching, possums and rodents. Call 0421 879 959."};
export const heroRating = "5.0 on Google · ~50 reviews · Sunbury";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Pests and snakes.","servicesLead":"Sunbury and Melbourne. Call 0421 879 959.","aboutEyebrow":"Local facts","aboutHeading":"5.0★ on Google from ~50 reviews.","aboutLead":"Sunbury-based pest control and snake removal covering Diggers Rest, Melton and nearby towns.","quoteHeading":"Request a quick inspection.","quoteArea":"Sunbury & Melbourne","detailsPlaceholder":"Suburb, pest or snake sighting, and urgency…","footerCtaLine":"Need pest or snake help?","footerCtaSub":"Call Pest and Snakes Removals.","footerBlurb":"Pest control and snake removal in Sunbury and Melbourne.","footerPlace":"Sunbury VIC"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Pest & Snakes","b":"Removals","tag":"Sunbury"},
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M8 30c8-14 24-14 32 0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><circle cx=\"36\" cy=\"28\" r=\"3.2\" fill=\"#5aad56\"/><path d=\"M12 18h8M14 14h4\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" opacity=\".55\"/></svg>",
};

export const quoteMessage = "Hi, I'd like a quote from Pest and Snakes Removals.";
