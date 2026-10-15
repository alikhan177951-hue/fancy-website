export const BASE = "/adams-roofing";

/*
 * Originality build 2026-10-16 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from batch JSON (checked 16 Oct 2026):
 * - Name, phone, suburb/address, services, rating, listed facts only. No review count shown.
 * - Hero Pexels 13361432: https://www.pexels.com/video/roofer-working-on-roofs-13361432/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG).
 */
export const brand = {"name":"Adam's Roofing Restorations","shortName":"Adam's Roofing","legal":"Adam's Roofing Restorations","phoneDisplay":"0407 456 540","phoneTel":"+61407456540","address":"Altona Meadows VIC 3028","addressShort":"Altona Meadows","hours":"Quotes by phone · domestic & commercial","owner":"Adam","rating":"5.0","reviewCount":null};

export const maps = { place: "https://www.google.com/maps/place/Adam%27s+Roofing+Restorations/@-37.7669529,144.5223108,17z" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Why us"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"repairs","title":"Roof Repairs & Leak Fixes","summary":"Find leaks and repair damaged sections."},{"slug":"restore","title":"Roof Restorations","summary":"Full restorations for tired domestic roofs."},{"slug":"new","title":"New Roofs & Extensions","summary":"New roofs and extension roofing."},{"slug":"skylights","title":"Skylights","summary":"Skylight installs and related flashings."},{"slug":"whirly","title":"Whirlybirds","summary":"Whirlybird ventilation installs."}];

export const areasPrimary = ["Altona Meadows","Altona","Laverton"];
export const areasWider = ["Point Cook","Hoppers Crossing","Werribee","Sunshine","Williamstown"];

export const reviews = [];
export const facts = [{"big":"3028","small":"Based in Altona Meadows"},{"big":"Both","small":"Domestic and commercial roofing"},{"big":"5.0★","small":"Google rating"}];

export const hero = {"headline":"Roof repairs from Altona Meadows.","support":"Adam's Roofing Restorations — leaks, restorations, skylights and whirlybirds. Call Adam on 0407 456 540."};
export const heroRating = "5.0-star Google rating · Altona Meadows";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Roofing services.","servicesLead":"Altona Meadows VIC 3028. Call Adam 0407 456 540.","aboutEyebrow":"Local facts","aboutHeading":"5.0-star Google rating · Altona Meadows.","aboutLead":"Domestic and commercial roofing based in Altona Meadows VIC 3028.","quoteHeading":"Message Adam for a quote.","quoteArea":"Altona Meadows & surrounds","detailsPlaceholder":"Suburb, job (leak, restore, skylight) and preferred day…","footerCtaLine":"Need a roof repair?","footerCtaSub":"Call Adam's Roofing Restorations.","footerBlurb":"Domestic and commercial roofing from Altona Meadows across Melbourne’s west.","footerPlace":"Altona Meadows VIC 3028"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Adam's","b":"Roofing","tag":"Altona Meadows"},
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M8 28l16-14 16 14v12H8V28z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><circle cx=\"24\" cy=\"22\" r=\"4\" fill=\"none\" stroke=\"#d4a574\" stroke-width=\"2.8\"/><path d=\"M24 18v-4\" stroke=\"#d4a574\" stroke-width=\"2.8\" stroke-linecap=\"round\"/></svg>",
};

export const quoteMessage = "Hi Adam, I'd like a quote from Adam's Roofing Restorations.";
export const media = {
  videoId: "13361432",
  source: "Pexels",
  page: "https://www.pexels.com/video/roofer-working-on-roofs-13361432/",
  note: "Roofer working on residential roof",
};
