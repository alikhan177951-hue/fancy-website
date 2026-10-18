export const BASE = "/mcfarlane-plastering";

/*
 * Originality build 2026-10-19 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from batch JSON (checked 19 Oct 2026):
 * - Name, phone, suburb/service area, services, rating, listed facts only. No review count shown.
 * - Hero Pexels 6473931: https://www.pexels.com/video/a-man-using-drywall-stilts-6473931/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG).
 */
export const brand = {"name":"Mcfarlane Plastering","shortName":"Mcfarlane Plastering","legal":"Mcfarlane Plastering","phoneDisplay":"0400 075 710","phoneTel":"+61400075710","address":"Melbourne VIC","addressShort":"Melbourne","hours":"Text photos for a quote · Melbourne","owner":"Michael","rating":"5.0","reviewCount":null};

export const maps = { place: "https://www.google.com/maps/place/Mcfarlane+Plastering/@-37.7251413,144.6162664,17z" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Why us"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"res","title":"Residential Plastering","summary":"Plastering for Melbourne homes."},{"slug":"dec","title":"Decorative Plastering","summary":"Decorative finishes and detail work."},{"slug":"patch","title":"Patching & Repairs","summary":"Patches and repairs before paint."},{"slug":"sand","title":"Sanding & Finishing","summary":"Sanding and finishing ready for paint."}];

export const areasPrimary = ["Melbourne"];
export const areasWider = [];

export const reviews = [];
export const facts = [{"big":"20+","small":"Years of plastering experience"},{"big":"Text","small":"Send photos · get a quote"},{"big":"5.0★","small":"Google rating"}];

export const hero = {"headline":"Smooth plaster, ready for paint.","support":"Mcfarlane Plastering in Melbourne — residential work, patches and finishing. Call Michael on 0400 075 710."};
export const heroRating = "5.0-star Google rating · Melbourne";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Residential plastering.","servicesLead":"Melbourne. Text photos of the job for a quote. 0400 075 710.","aboutEyebrow":"Local facts","aboutHeading":"5.0-star Google rating · Melbourne.","aboutLead":"20+ years of plastering. Quotes made easy — text photos, Michael asks a few questions, then quotes and books.","quoteHeading":"Request a Mcfarlane quote.","quoteArea":"Melbourne","detailsPlaceholder":"Suburb, room, and what needs plastering…","footerCtaLine":"Need plastering done?","footerCtaSub":"Call Mcfarlane Plastering.","footerBlurb":"Residential plastering, decorative work, patching and finishing across Melbourne.","footerPlace":"Melbourne VIC"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Mcfarlane","b":"Plastering","tag":"Melbourne"},
  long: false,
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><rect x=\"8\" y=\"14\" width=\"32\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.8\"/><path d=\"M12 28h24\" stroke=\"#9cb89f\" stroke-width=\"2.8\" stroke-linecap=\"round\"/></svg>",
};

export const quoteMessage = "Hi Michael, I'd like a quote from Mcfarlane Plastering.";
export const media = {
  videoId: "6473931",
  source: "Pexels",
  page: "https://www.pexels.com/video/a-man-using-drywall-stilts-6473931/",
  note: "Man using drywall stilts / ceiling work",
};
