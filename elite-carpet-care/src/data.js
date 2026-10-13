export const BASE = "/elite-carpet-care";

/*
 * Originality rebuild 2026-10-14 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from public listings (checked 14 Oct 2026):
 * - elitecarpetcare.com.au + Google Maps (phone, Deer Park address, hours, services list, 4.8★ ~72 reviews). No invented contact names.
 * - Hero Mixkit 45040: https://mixkit.co/free-stock-video/close-up-of-a-vacuum-steam-cleaner-45040/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG). Scraped logo files deleted.
 */
export const brand = {"name":"Elite Carpet Care","shortName":"Elite","legal":"Elite Carpet Care","phoneDisplay":"0408 807 420","phoneTel":"+61408807420","address":"28 Warrington Crescent, Deer Park VIC","addressShort":"Deer Park","hours":"Mon–Sat 8:00 am – 8:00 pm","owner":"Elite Carpet Care","rating":"4.8","reviewCount":72};

export const maps = { place: "https://www.google.com/maps/search/?api=1&query=Elite+Carpet+Care+Deer+Park" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Reviews"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"carpets","title":"Carpet Steam Cleaning","summary":"On-site steam cleaning for carpets and rugs in homes and small businesses."},{"slug":"upholstery","title":"Sofa & Upholstery Cleaning","summary":"Fabric sofas, chairs and upholstery cleaned where they sit."},{"slug":"tile","title":"Tile & Grout Cleaning","summary":"Tile floors and grout lines cleaned as a scheduled service."},{"slug":"eol","title":"End of Lease Cleaning","summary":"Carpet and hard-floor cleans timed for vacate handovers."},{"slug":"flood","title":"Flood Restoration","summary":"Drying and recovery work after leaks or water damage."},{"slug":"stain","title":"Stain & Odour Removal","summary":"Focused treatment for stains and odours, including pet messes."}];

export const areasPrimary = ["Deer Park","Sunshine","St Albans"];
export const areasWider = ["Hoppers Crossing","Werribee","Melton","Tarneit","Point Cook","Sunbury"];

export const reviews = [];
export const facts = [{"big":"72","small":"Google reviews · 4.8★ rating"},{"big":"West","small":"Northern & western Melbourne suburbs"},{"big":"Mon–Sat","small":"8:00 am – 8:00 pm"}];

export const hero = {"headline":"Carpets cleaned on schedule in Melbourne’s west.","support":"Elite Carpet Care in Deer Park — carpet, tile and upholstery steam cleaning. Call or text 0408 807 420."};
export const heroRating = "4.8 on Google · ~72 reviews · Deer Park";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"What we clean.","servicesLead":"Mobile steam cleaning. Phone 0408 807 420.","aboutEyebrow":"Local facts","aboutHeading":"4.8★ on Google from ~72 reviews.","aboutLead":"Based in Deer Park. Carpet, rug, tile and upholstery work across Melbourne’s northern and western suburbs.","quoteHeading":"Request a call-back.","quoteArea":"Deer Park & Melbourne’s west","detailsPlaceholder":"Suburb, rooms (carpet, sofa, tile) and preferred day…","footerCtaLine":"Book carpet cleaning","footerCtaSub":"Call Elite Carpet Care.","footerBlurb":"Steam cleaning for carpets, tiles and upholstery from Deer Park across Melbourne’s west.","footerPlace":"Deer Park VIC"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Elite","b":"Carpet Care","tag":"Deer Park"},
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><rect x=\"4\" y=\"28\" width=\"40\" height=\"6\" rx=\"2\" fill=\"currentColor\" opacity=\".35\"/><path d=\"M8 26c4-10 12-16 16-16s12 6 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><circle cx=\"24\" cy=\"14\" r=\"3.2\" fill=\"#3d9adf\"/></svg>",
};

export const quoteMessage = "Hi, I'd like a quote from Elite Carpet Care.";
