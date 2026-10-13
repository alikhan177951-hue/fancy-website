export const BASE = "/deepshine-carpet";

/*
 * Originality rebuild 2026-10-14 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from public listings (checked 14 Oct 2026):
 * - deepshinecarpetcleaning.com.au + Google Maps (phone, services, 4.6★ ~86 reviews).
 * - Hero Mixkit 45040: https://mixkit.co/free-stock-video/close-up-of-a-vacuum-steam-cleaner-45040/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG). Scraped logo files deleted.
 */
export const brand = {"name":"DeepShine Carpet Cleaning","shortName":"Deep Shine","legal":"Deep Shine Cleaning","phoneDisplay":"0466 713 111","phoneTel":"+61466713111","address":"Melbourne West VIC","addressShort":"Melbourne West","hours":"Free estimates by phone","owner":"Deep Shine","rating":"4.6","reviewCount":86};

export const maps = { place: "https://www.google.com/maps/search/?api=1&query=DeepShine+Carpet+Cleaning+Melbourne" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Reviews"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"steam","title":"Carpet Steam Cleaning","summary":"Steam and deep cleaning for residential and commercial carpets."},{"slug":"upholstery","title":"Upholstery Cleaning","summary":"Sofas and fabric upholstery cleaned on appointment."},{"slug":"tile","title":"Tile and Grout Cleaning","summary":"Tile and grout deep cleaning for hard floors."},{"slug":"rug","title":"Rug Cleaning","summary":"Rugs cleaned and returned when the job is done."},{"slug":"stain","title":"Stain Treatment","summary":"Spot treatment for common carpet stains."},{"slug":"quote","title":"Free Estimate","summary":"Phone estimate before booking a clean."}];

export const areasPrimary = ["Melbourne West","Western suburbs","North-west"];
export const areasWider = ["Sunshine","St Albans","Deer Park","Melton","Werribee","Hoppers Crossing"];

export const reviews = [];
export const facts = [{"big":"86","small":"Google reviews · 4.6★ rating"},{"big":"Steam","small":"Carpet, upholstery, tile & rugs"},{"big":"Quote","small":"Estimate on 0466 713 111"}];

export const hero = {"headline":"Carpet steam cleaning for Melbourne’s west.","support":"DeepShine Carpet Cleaning — carpets, upholstery, tile & grout and rugs. Call 0466 713 111 for an estimate."};
export const heroRating = "4.6 on Google · ~86 reviews · Melbourne West";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Services list.","servicesLead":"Melbourne west coverage. Call 0466 713 111.","aboutEyebrow":"Local facts","aboutHeading":"4.6★ on Google from ~86 reviews.","aboutLead":"Carpet, rug, tile and upholstery cleaning across western and north-western Melbourne suburbs.","quoteHeading":"Ask for an estimate.","quoteArea":"Melbourne West & surrounds","detailsPlaceholder":"Suburb, rooms and carpet or hard-floor type…","footerCtaLine":"Book a carpet clean","footerCtaSub":"Call DeepShine Carpet Cleaning.","footerBlurb":"Carpet steam cleaning, upholstery, tile and rugs across Melbourne.","footerPlace":"Melbourne West VIC"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"DeepShine","b":"Carpet","tag":"Melbourne West"},
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M8 30l16-18 16 18H8z\" fill=\"currentColor\" opacity=\".28\"/><path d=\"M12 30l12-14 12 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><circle cx=\"24\" cy=\"34\" r=\"4\" fill=\"#8ad44a\"/></svg>",
};

export const quoteMessage = "Hi, I'd like a quote from DeepShine Carpet Cleaning.";
