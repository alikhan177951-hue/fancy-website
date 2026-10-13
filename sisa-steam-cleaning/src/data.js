export const BASE = "/sisa-steam-cleaning";

/*
 * Originality rebuild 2026-10-14 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from public listings (checked 14 Oct 2026):
 * - sisaupholstery.com.au + Google Maps (services, phone, 5.0★ ~80 reviews).
 * - Hero Mixkit 45040: https://mixkit.co/free-stock-video/close-up-of-a-vacuum-steam-cleaner-45040/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG). Scraped logo files deleted.
 */
export const brand = {"name":"Sisa Steam Cleaning","shortName":"SISA","legal":"Sisa Steam Cleaning","phoneDisplay":"0416 081 969","phoneTel":"+61416081969","address":"Melbourne West VIC","addressShort":"Melbourne West","hours":"Quotes by phone","owner":"SISA","rating":"5.0","reviewCount":80};

export const maps = { place: "https://www.google.com/maps/search/?api=1&query=Sisa+Steam+Cleaning+Melbourne" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Reviews"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"couch","title":"Couch Cleaning","summary":"Steam cleaning for fabric sofas and lounge suites."},{"slug":"upholstery","title":"Upholstery Cleaning","summary":"Chairs, armchairs and other upholstered pieces cleaned on site."},{"slug":"rugs","title":"Wool Rug Cleaning","summary":"Wool rugs and soft furnishings cleaned carefully."},{"slug":"mattress","title":"Mattress Cleaning","summary":"Mattress and bedframe cleaning available on request."},{"slug":"stairs","title":"Carpeted Stairs","summary":"Stair carpets and related fabric surfaces cleaned in place."},{"slug":"dining","title":"Dining Chairs","summary":"Dining chairs and ottomans included in upholstery jobs."}];

export const areasPrimary = ["Melbourne West","Inner West","Western suburbs"];
export const areasWider = ["Footscray","Yarraville","Sunshine","Werribee","Point Cook","Hoppers Crossing"];

export const reviews = [];
export const facts = [{"big":"80","small":"Google reviews · 5.0★ rating"},{"big":"Sofas","small":"Couch & upholstery focus"},{"big":"West","small":"Melbourne western suburbs"}];

export const hero = {"headline":"Sofa and rug steam cleaning across Melbourne.","support":"Sisa Steam Cleaning — couches, upholstery and wool rugs. Call 0416 081 969 for a quote."};
export const heroRating = "5.0 on Google · ~80 reviews · Melbourne West";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Upholstery services.","servicesLead":"Steam cleaning across Melbourne. Call 0416 081 969.","aboutEyebrow":"Local facts","aboutHeading":"5.0★ on Google from ~80 reviews.","aboutLead":"Upholstery cleaning for sofas, chairs, rugs and mattresses across Melbourne’s west.","quoteHeading":"Ask for a quote.","quoteArea":"Melbourne West & surrounds","detailsPlaceholder":"Suburb, item (sofa, rug, mattress) and fabric type if known…","footerCtaLine":"Get an upholstery quote","footerCtaSub":"Call Sisa Steam Cleaning.","footerBlurb":"Couch and upholstery steam cleaning across Melbourne.","footerPlace":"Melbourne West VIC"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Sisa","b":"Steam Cleaning","tag":"Melbourne West"},
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M10 34h28v4H10z\" fill=\"currentColor\" opacity=\".35\"/><path d=\"M14 30c3-8 8-14 10-14s7 6 10 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M18 18c2-4 4-6 6-6s4 2 6 6\" fill=\"none\" stroke=\"#2f8a55\" stroke-width=\"2.6\" stroke-linecap=\"round\"/></svg>",
};

export const quoteMessage = "Hi, I'd like a quote from Sisa Steam Cleaning.";
