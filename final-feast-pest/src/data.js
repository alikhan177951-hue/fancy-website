export const BASE = "/final-feast-pest";

/*
 * Originality rebuild 2026-10-14 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from public listings (checked 14 Oct 2026):
 * - finalfeastpestcontrol.com.au + Google Maps (phone, Melton area, services, 5.0★ ~49 reviews).
 * - Hero Mixkit 33583: https://mixkit.co/free-stock-video/person-disinfecting-a-door-with-spray-33583/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG). Scraped logo files deleted.
 */
export const brand = {"name":"Final Feast Pest Control","shortName":"Final Feast","legal":"Final Feast Pest Control","phoneDisplay":"0415 231 270","phoneTel":"+61415231270","address":"Melton area VIC","addressShort":"Melton","hours":"Same-day pest control · Melbourne & rural VIC","owner":"Final Feast","rating":"5.0","reviewCount":49};

export const maps = { place: "https://www.google.com/maps/search/?api=1&query=Final+Feast+Pest+Control+Melton" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Reviews"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"general","title":"Spider & General Pest","summary":"Internal, external and fenceline spray and dust treatments."},{"slug":"cockroach","title":"German Cockroach Treatment","summary":"Gel baiting and spray work for cockroach jobs."},{"slug":"ant","title":"Ant Treatment","summary":"Spray, dust and bait options aimed at ant activity."},{"slug":"wasp","title":"Bees, Wasp & European Wasp","summary":"Wasp nest treatment and stinging-insect callouts."},{"slug":"bedbug","title":"Bed Bug Treatment","summary":"Bed bug treatments booked after inspection."},{"slug":"rodent","title":"Rodent Control","summary":"Rat and mouse control for homes and sheds."}];

export const areasPrimary = ["Melton","Bacchus Marsh","Sunbury"];
export const areasWider = ["Caroline Springs","Hillside","Diggers Rest","Werribee","Hoppers Crossing"];

export const reviews = [];
export const facts = [{"big":"49","small":"Google reviews · 5.0★ rating"},{"big":"Same-day","small":"Melbourne & rural VIC callouts"},{"big":"Melton","small":"Local pest control base"}];

export const hero = {"headline":"Pest control covering Melton and surrounds.","support":"Final Feast Pest Control — spiders, cockroaches, ants, wasps, bed bugs and rodents. Call 0415 231 270."};
export const heroRating = "5.0 on Google · ~49 reviews · Melton";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Pest treatments.","servicesLead":"Melton area and beyond. Call 0415 231 270.","aboutEyebrow":"Local facts","aboutHeading":"5.0★ on Google from ~49 reviews.","aboutLead":"Pest control for Melton, Bacchus Marsh, Sunbury and nearby suburbs, with same-day options when available.","quoteHeading":"Book a pest visit.","quoteArea":"Melton, Bacchus Marsh & surrounds","detailsPlaceholder":"Suburb, pest type (ants, cockroaches, spiders…) and urgency…","footerCtaLine":"Need pest control?","footerCtaSub":"Call Final Feast Pest Control.","footerBlurb":"Pest control across Melton, Melbourne and rural VIC.","footerPlace":"Melton area VIC"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Final Feast","b":"Pest","tag":"Melton"},
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M24 6l16 8v12c0 10-7 16-16 20C15 42 8 36 8 26V14l16-8z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><path d=\"M18 24l5 5 9-11\" fill=\"none\" stroke=\"#48c9b0\" stroke-width=\"3.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
};

export const quoteMessage = "Hi, I'd like a quote from Final Feast Pest Control.";
