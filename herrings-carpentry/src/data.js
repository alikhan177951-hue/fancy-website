export const BASE = "/herrings-carpentry";

/*
 * Originality build 2026-10-19 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from batch JSON (checked 19 Oct 2026):
 * - Name, phone, suburb/service area, services, rating, listed facts only. No review count shown.
 * - Hero Pexels 8829711: https://www.pexels.com/video/a-drilling-a-wood-8829711/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG).
 */
export const brand = {"name":"Herrings Carpentry","shortName":"Herrings Carpentry","legal":"Herrings Carpentry","phoneDisplay":"0413 116 124","phoneTel":"+61413116124","address":"Caroline Springs VIC","addressShort":"Caroline Springs","hours":"Free measure & quote · Melbourne-wide","owner":"Shane","rating":"4.9","reviewCount":null};

export const maps = { place: "https://www.google.com/maps/place/Herrings+Carpentry/@-37.754651,144.748316,17z" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Why us"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"deck","title":"Decking & Pergolas","summary":"Timber decking and pergolas."},{"slug":"clad","title":"Cladding & Feature Walls","summary":"Cladding and timber feature walls."},{"slug":"frame","title":"Framing","summary":"Framing for extensions and new builds."},{"slug":"cabin","title":"Custom Cabinetry","summary":"Custom cabinetry and storage."},{"slug":"doors","title":"Doors & Windows","summary":"Door and window installations."},{"slug":"reno","title":"Renovation Fit-outs","summary":"Renovation support and fit-outs."}];

export const areasPrimary = ["Caroline Springs","Preston"];
export const areasWider = ["Melbourne west to north"];

export const reviews = [];
export const facts = [{"big":"30+","small":"Years of woodworking"},{"big":"Shane","small":"Licensed carpenter · owner"},{"big":"4.9★","small":"Google rating"}];

export const hero = {"headline":"Carpentry built to last.","support":"Herrings Carpentry — decking, framing and custom work from Caroline Springs. Call Shane on 0413 116 124."};
export const heroRating = "4.9-star Google rating · Caroline Springs";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Timber work done right.","servicesLead":"Caroline Springs to Preston — Melbourne-wide. Free measure and quote. 0413 116 124.","aboutEyebrow":"Local facts","aboutHeading":"4.9-star Google rating · Caroline Springs.","aboutLead":"Owner Shane Herring — licensed carpenter with 30+ years of woodworking. Transparent quotes, no hidden costs.","quoteHeading":"Book a free measure & quote.","quoteArea":"Caroline Springs to Preston · Melbourne","detailsPlaceholder":"Suburb, job (deck, pergola, cabinetry, framing)…","footerCtaLine":"Need a carpenter?","footerCtaSub":"Call Herrings Carpentry.","footerBlurb":"Decking, framing, cabinetry and renovation carpentry across Melbourne.","footerPlace":"Caroline Springs VIC"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Herrings","b":"Carpentry","tag":"Caroline Springs"},
  long: false,
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M10 36l14-24 14 24H10z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/><path d=\"M18 36V28h12v8\" fill=\"none\" stroke=\"#c4a574\" stroke-width=\"2.4\"/></svg>",
};

export const quoteMessage = "Hi Shane, I'd like a quote from Herrings Carpentry.";
export const media = {
  videoId: "8829711",
  source: "Pexels",
  page: "https://www.pexels.com/video/a-drilling-a-wood-8829711/",
  note: "Worker drilling wood / decking",
};
