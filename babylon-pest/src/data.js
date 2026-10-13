export const BASE = "/babylon-pest";

/*
 * Originality rebuild 2026-10-14 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from public listings (checked 14 Oct 2026):
 * - babylonpestcontrol.com + Google Maps (Robin, Werribee, services, 5.0★ ~49 reviews).
 * - Hero Mixkit 33583: https://mixkit.co/free-stock-video/person-disinfecting-a-door-with-spray-33583/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG). Scraped logo files deleted.
 */
export const brand = {"name":"Babylon Pest Control","shortName":"Babylon","legal":"Babylon Pest Control","phoneDisplay":"0485 044 567","phoneTel":"+61485044567","address":"Werribee / Melbourne west VIC","addressShort":"Werribee","hours":"Same-day service · 7 days a week","owner":"Robin","rating":"5.0","reviewCount":49};

export const maps = { place: "https://www.google.com/maps/search/?api=1&query=Babylon+Pest+Control+Werribee" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Reviews"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"spider","title":"Spider Control","summary":"Spider treatments with follow-up advice."},{"slug":"cockroach","title":"Cockroach Control","summary":"Cockroach treatments for active infestations."},{"slug":"ant","title":"Ant Control","summary":"Identify, treat and reduce common ant problems."},{"slug":"rodent","title":"Rats & Mice","summary":"Rodent control for cooler-month activity indoors."},{"slug":"possum","title":"Licensed Roof Possum Control","summary":"Licensed possum removal from roofs."},{"slug":"sameday","title":"Same-Day Service","summary":"Licensed and insured — same-day options, 7 days a week."}];

export const areasPrimary = ["Werribee","Hoppers Crossing","Tarneit"];
export const areasWider = ["Point Cook","Melton","Altona","Wyndham Vale","Truganina"];

export const reviews = [];
export const facts = [{"big":"49","small":"Google reviews · 5.0★ rating"},{"big":"7 days","small":"Same-day service when available"},{"big":"Robin","small":"0485 044 567"}];

export const hero = {"headline":"Pest control across Werribee and the west.","support":"Babylon Pest Control — spiders, cockroaches, ants, rats, mice and possums. Licensed and insured. Call Robin on 0485 044 567."};
export const heroRating = "5.0 on Google · ~49 reviews · Werribee";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Pest jobs we handle.","servicesLead":"Same-day options 7 days a week. Call Robin on 0485 044 567.","aboutEyebrow":"Local facts","aboutHeading":"5.0★ on Google from ~49 reviews.","aboutLead":"Werribee-focused pest control across Melbourne’s west — spiders, cockroaches, ants, rodents and roof possums.","quoteHeading":"Message Robin for a visit.","quoteArea":"Werribee & Melbourne west","detailsPlaceholder":"Suburb, pest type and how urgent it is…","footerCtaLine":"Need pest control today?","footerCtaSub":"Call Robin at Babylon Pest Control.","footerBlurb":"Pest control across Melbourne’s west — spiders, cockroaches, ants, rats, mice and possums.","footerPlace":"Werribee / Melbourne west VIC"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Babylon","b":"Pest Control","tag":"Werribee"},
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M10 34V18l14-8 14 8v16l-14 8-14-8z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><path d=\"M24 16v20M17 22h14\" stroke=\"#e84a4f\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>",
};

export const quoteMessage = "Hi Robin, I'd like a quote from Babylon Pest Control.";
