export const BASE = "/brb-plastering";

/*
 * Originality build 2026-10-19 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from batch JSON (checked 19 Oct 2026):
 * - Name, phone, suburb/service area, services, rating, listed facts only. No review count shown.
 * - Hero Pexels 6474186: https://www.pexels.com/video/man-using-skimming-spatula-on-wall-6474186/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG).
 */
export const brand = {"name":"BRB Plastering","shortName":"BRB Plastering","legal":"BRB Plastering","phoneDisplay":"0438 377 798","phoneTel":"+61438377798","address":"Sunbury VIC","addressShort":"Sunbury","hours":"Quotes by phone · Melbourne west & north-west","owner":"Brian","rating":"5.0","reviewCount":null};

export const maps = { place: "https://www.google.com/maps/place/BRB+Plastering/@-37.5749136,144.7092646,17z" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Why us"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"homes","title":"New & Old Homes","summary":"Plastering for new builds and established homes."},{"slug":"reno","title":"Renovations","summary":"Walls and ceilings for bathroom and home renos."},{"slug":"ext","title":"Extensions","summary":"Plaster finish for house extensions."},{"slug":"cornice","title":"Ornamental Cornice","summary":"Cornice install and detail work."},{"slug":"ins","title":"Insurance Work","summary":"Insurance plaster repairs after damage."},{"slug":"maint","title":"Maintenance & Repairs","summary":"Patches, garage ceilings and small fixes."},{"slug":"susp","title":"Suspended Ceilings","summary":"Suspended ceiling installs."},{"slug":"domcom","title":"Domestic & Commercial","summary":"Homes and commercial plastering."}];

export const areasPrimary = ["Sunbury","Footscray","Yarraville"];
export const areasWider = ["Williamstown","Altona","Essendon","Moonee Ponds","Keilor","St Albans","Taylors Lakes","Gisborne","Woodend","Kyneton","Daylesford","Castlemaine","Bendigo"];

export const reviews = [];
export const facts = [{"big":"25+","small":"Years in the plastering industry"},{"big":"Brian","small":"Owner · qualified plasterer"},{"big":"5.0★","small":"Google rating"}];

export const hero = {"headline":"Plastering across Melbourne’s west.","support":"BRB Plastering in Sunbury — new homes, renos, cornice and repairs. Call Brian on 0438 377 798."};
export const heroRating = "5.0-star Google rating · Sunbury";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Plaster work done properly.","servicesLead":"Sunbury, Melbourne’s inner west & north-west, plus country Victoria. 0438 377 798.","aboutEyebrow":"Local facts","aboutHeading":"5.0-star Google rating · Sunbury.","aboutLead":"Owner Brian Briffa — 25+ years. No job too small, from bathroom renos to house extensions.","quoteHeading":"Request a BRB Plastering quote.","quoteArea":"Sunbury, west & north-west Melbourne","detailsPlaceholder":"Suburb, job type (reno, cornice, repair) and timing…","footerCtaLine":"Need a plasterer?","footerCtaSub":"Call BRB Plastering.","footerBlurb":"Domestic and commercial plastering from Sunbury across Melbourne’s west and country Victoria.","footerPlace":"Sunbury VIC"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"BRB","b":"Plastering","tag":"Sunbury"},
  long: false,
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M8 34l14-20h4l14 20H8z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/><path d=\"M14 34h20\" stroke=\"#d4a574\" stroke-width=\"2.6\" stroke-linecap=\"round\"/></svg>",
};

export const quoteMessage = "Hi Brian, I'd like a quote from BRB Plastering.";
export const media = {
  videoId: "6474186",
  source: "Pexels",
  page: "https://www.pexels.com/video/man-using-skimming-spatula-on-wall-6474186/",
  note: "Man using skimming spatula on wall",
};
