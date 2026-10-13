export const BASE = "/crystal-carpet";

/*
 * Originality rebuild 2026-10-14 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from public listings (checked 14 Oct 2026):
 * - crystalcarpetcleaning.au + Google Maps (Jo, Melton, hours, services, 4.9★ ~80 reviews).
 * - Hero Mixkit 45040: https://mixkit.co/free-stock-video/close-up-of-a-vacuum-steam-cleaner-45040/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG). Scraped logo files deleted.
 */
export const brand = {"name":"Crystal Carpet Cleaning","shortName":"Crystal","legal":"Crystal Carpet Cleaning","phoneDisplay":"0430 596 073","phoneTel":"+61430596073","address":"Melton VIC 3337","addressShort":"Melton / Werribee area","hours":"Daily 9:00 am – 5:00 pm","owner":"Jo","rating":"4.9","reviewCount":80};

export const maps = { place: "https://www.google.com/maps/search/?api=1&query=Crystal+Carpet+Cleaning+Melton" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Reviews"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"steam","title":"Carpet Steam Cleaning","summary":"Carpet steam cleaning for Melton and western Melbourne."},{"slug":"eol","title":"End of Lease Carpet Cleaning","summary":"Vacate carpet cleans for bond inspections."},{"slug":"dry","title":"Carpet Dry Cleaning","summary":"Dry cleaning option when steam is not suitable."},{"slug":"mattress","title":"Mattress Cleaning","summary":"Mattress cleaning booked with other soft-furnishing work."},{"slug":"rug","title":"Rug Cleaning","summary":"Rugs cleaned on site or as arranged."},{"slug":"couch","title":"Couch Cleaning","summary":"Couch and upholstery cleaning for living rooms."}];

export const areasPrimary = ["Melton","Werribee","Hoppers Crossing"];
export const areasWider = ["Tarneit","Deer Park","Sunshine","Point Cook","Sunbury"];

export const reviews = [];
export const facts = [{"big":"80","small":"Google reviews · 4.9★ rating"},{"big":"9–5","small":"Daily hours in Melton VIC 3337"},{"big":"Jo","small":"Quotes on 0430 596 073"}];

export const hero = {"headline":"Carpet cleaning from Melton.","support":"Crystal Carpet Cleaning — carpets, rugs, mattresses and couches across Melton and Melbourne’s west. Call Jo on 0430 596 073."};
export const heroRating = "4.9 on Google · ~80 reviews · Melton / Werribee area";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Carpet and soft furnishings.","servicesLead":"Melton VIC 3337. Call Jo on 0430 596 073.","aboutEyebrow":"Local facts","aboutHeading":"4.9★ on Google from ~80 reviews.","aboutLead":"Melton-based carpet cleaning covering Werribee and nearby western suburbs. Open daily 9am–5pm.","quoteHeading":"Message Jo for a quote.","quoteArea":"Melton, Werribee & western suburbs","detailsPlaceholder":"Suburb, carpet/rug/couch and preferred day…","footerCtaLine":"Book Melton carpet cleaning","footerCtaSub":"Call Jo at Crystal Carpet Cleaning.","footerBlurb":"Steam cleaning, rugs and couches across Melton and Melbourne’s west.","footerPlace":"Melton VIC 3337"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Crystal","b":"Carpet","tag":"Melton"},
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M24 6l14 18-14 18L10 24 24 6z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><path d=\"M24 14l8 10-8 10-8-10 8-10z\" fill=\"#2eac6e\"/></svg>",
};

export const quoteMessage = "Hi Jo, I'd like a quote from Crystal Carpet Cleaning.";
