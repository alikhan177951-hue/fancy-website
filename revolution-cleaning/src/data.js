export const BASE = "/revolution-cleaning";

/*
 * Originality rebuild 2026-10-14 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from public listings (checked 14 Oct 2026):
 * - revolutioncleaning.net.au + Google Maps (Justin, Werribee address, services, 5.0★ ~87 reviews).
 * - Hero Mixkit 45040: https://mixkit.co/free-stock-video/close-up-of-a-vacuum-steam-cleaner-45040/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG). Scraped logo files deleted.
 */
export const brand = {"name":"Revolution Cleaning","shortName":"Revolution","legal":"Revolution Cleaning","phoneDisplay":"0411 396 401","phoneTel":"+61411396401","address":"36 River Run Dr, Werribee VIC 3030","addressShort":"Werribee","hours":"Quotes by phone · Werribee & west","owner":"Justin","rating":"5.0","reviewCount":87};

export const maps = { place: "https://www.google.com/maps/search/?api=1&query=Revolution+Cleaning+Werribee" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Reviews"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"carpet","title":"Carpet Cleaning","summary":"Residential and commercial carpet steam cleaning around Werribee."},{"slug":"rug","title":"Rug Cleaning","summary":"Area rugs cleaned as a booked service."},{"slug":"upholstery","title":"Upholstery Cleaning","summary":"Fabric and leather upholstery cleaned on site."},{"slug":"tile","title":"Tile & Grout Cleaning","summary":"Tile and grout cleaning for kitchens and bathrooms."},{"slug":"mattress","title":"Mattress Cleaning","summary":"Mattress cleaning available with carpet jobs."},{"slug":"eol","title":"End of Lease Cleaning","summary":"Vacate cleans that include carpets for handover."}];

export const areasPrimary = ["Werribee","Point Cook","Hoppers Crossing"];
export const areasWider = ["Tarneit","Wyndham Vale","Williams Landing","Truganina","Manor Lakes"];

export const reviews = [];
export const facts = [{"big":"87","small":"Google reviews · 5.0★ rating"},{"big":"West","small":"Werribee, Point Cook & Hoppers Crossing"},{"big":"Justin","small":"Quotes on 0411 396 401"}];

export const hero = {"headline":"Carpet cleaning based in Werribee.","support":"Revolution Cleaning — carpets, rugs, upholstery and tile & grout for Werribee, Point Cook and Hoppers Crossing. Call Justin on 0411 396 401."};
export const heroRating = "5.0 on Google · ~87 reviews · Werribee";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Cleaning services.","servicesLead":"Werribee and Melbourne’s west. Call Justin on 0411 396 401.","aboutEyebrow":"Local facts","aboutHeading":"5.0★ on Google from ~87 reviews.","aboutLead":"Werribee address on River Run Dr. Carpet and hard-floor cleaning for nearby western suburbs.","quoteHeading":"Message Justin for a quote.","quoteArea":"Werribee, Point Cook & Hoppers Crossing","detailsPlaceholder":"Suburb, carpet/rug/upholstery and preferred day…","footerCtaLine":"Need a Werribee clean?","footerCtaSub":"Call Justin at Revolution Cleaning.","footerBlurb":"Carpet, rug, upholstery and tile cleaning from Werribee across Melbourne’s west.","footerPlace":"Werribee VIC 3030"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Revolution","b":"Cleaning","tag":"Werribee"},
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><circle cx=\"24\" cy=\"24\" r=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><path d=\"M24 10v14l10 6\" fill=\"none\" stroke=\"#33b0e6\" stroke-width=\"3.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
};

export const quoteMessage = "Hi Justin, I'd like a quote from Revolution Cleaning.";
