export const BASE = "/as-cleaning";

/*
 * Originality rebuild 2026-10-14 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from public listings (checked 14 Oct 2026):
 * - amazingcleaningservice.com.au + Google Maps (phone, Werribee/Point Cook, services, 4.8★ ~136 reviews).
 * - Hero Mixkit 45040: https://mixkit.co/free-stock-video/close-up-of-a-vacuum-steam-cleaner-45040/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG). Scraped logo files deleted.
 */
export const brand = {"name":"A.S Cleaning and Maintenance","shortName":"A.S Cleaning","legal":"A.S Cleaning and Maintenance","phoneDisplay":"0425 613 921","phoneTel":"+61425613921","address":"Werribee & Point Cook VIC","addressShort":"Werribee","hours":"Quotes by phone · Werribee & Point Cook","owner":"A.S","rating":"4.8","reviewCount":136};

export const maps = { place: "https://www.google.com/maps/search/?api=1&query=A.S+Cleaning+and+Maintenance+Werribee" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Reviews"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"carpet","title":"Carpet Cleaning","summary":"Carpet steam cleaning in Werribee, Point Cook and nearby suburbs."},{"slug":"house","title":"House Cleaning","summary":"General house cleaning by appointment."},{"slug":"eol","title":"End of Lease / Bond Cleaning","summary":"Vacate and bond cleans for rental handovers."},{"slug":"office","title":"Office Cleaning","summary":"Office and small commercial cleans."},{"slug":"pressure","title":"Pressure Cleaning","summary":"Outdoor pressure cleaning for hard surfaces."},{"slug":"pest","title":"Pest Control","summary":"Pest control offered alongside cleaning work."}];

export const areasPrimary = ["Werribee","Point Cook","Hoppers Crossing"];
export const areasWider = ["Tarneit","Williams Landing","Truganina","Laverton","Altona Meadows"];

export const reviews = [];
export const facts = [{"big":"136","small":"Google reviews · 4.8★ rating"},{"big":"West","small":"Werribee & Point Cook focus"},{"big":"Phone","small":"0425 613 921 for quotes"}];

export const hero = {"headline":"House and carpet cleaning in Werribee.","support":"A.S Cleaning and Maintenance — carpet steam cleaning, house cleans and end-of-lease across Werribee and Point Cook. Call 0425 613 921."};
export const heroRating = "4.8 on Google · ~136 reviews · Werribee";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Cleaning & maintenance.","servicesLead":"Werribee and Point Cook. Call 0425 613 921.","aboutEyebrow":"Local facts","aboutHeading":"4.8★ on Google from ~136 reviews.","aboutLead":"Carpet, house, office and end-of-lease cleaning for Werribee, Point Cook and nearby western suburbs.","quoteHeading":"Request a quote.","quoteArea":"Werribee, Point Cook & surrounds","detailsPlaceholder":"Suburb, carpet or house clean, and preferred day…","footerCtaLine":"Book a clean","footerCtaSub":"Call A.S Cleaning and Maintenance.","footerBlurb":"House, carpet, office and end-of-lease cleaning across Werribee and Point Cook.","footerPlace":"Werribee & Point Cook VIC"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"A.S","b":"Cleaning","tag":"Werribee"},
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><rect x=\"8\" y=\"10\" width=\"32\" height=\"28\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><path d=\"M14 28c4-8 8-12 10-12s6 4 10 12\" fill=\"none\" stroke=\"#1aa3b0\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>",
};

export const quoteMessage = "Hi, I'd like a quote from A.S Cleaning and Maintenance.";
