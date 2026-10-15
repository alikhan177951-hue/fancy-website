export const BASE = "/cam-tiling";

/*
 * Originality build 2026-10-16 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from batch JSON (checked 16 Oct 2026):
 * - Name, phone, suburb/address, services, rating, listed facts only. No review count shown.
 * - Hero Mixkit 46079: https://mixkit.co/free-stock-video/person-shaping-ceramic-tiles-on-a-grinder-46079/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG).
 */
export const brand = {"name":"Cam Tiling","shortName":"Cam Tiling","legal":"Cam Tiling","phoneDisplay":"0434 863 236","phoneTel":"+61434863236","address":"Deer Park VIC 3023","addressShort":"Deer Park","hours":"Quotes by phone · residential & commercial","owner":"Cam Tiling","rating":"5.0","reviewCount":null};

export const maps = { place: "https://www.google.com/maps/place/Cam+Tiling/@-37.7687146,144.7655598,17z" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Why us"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"all","title":"Residential & Commercial Tiling","summary":"Tiling for homes and commercial spaces."},{"slug":"bath","title":"Bathroom & Shower Tiling","summary":"Wet-area tiling for bathrooms and showers."},{"slug":"kitchen","title":"Kitchen Tiling & Splashbacks","summary":"Kitchen floors, walls and splashbacks."},{"slug":"floor","title":"Floor & Wall Tiling","summary":"Floor and wall installs inside and out."},{"slug":"mosaic","title":"Mosaics","summary":"Feature mosaic work."},{"slug":"pool","title":"Pool Tiling","summary":"Pool tiling and surrounds."},{"slug":"outdoor","title":"Paving & Outdoor Tiling","summary":"Outdoor paving and tiled areas."},{"slug":"water","title":"Waterproofing","summary":"Waterproofing before wet-area tiles."},{"slug":"finish","title":"Screeding, Regrouting & Caulking","summary":"Prep and finishing for a clean result."}];

export const areasPrimary = ["Deer Park","Sunshine","St Albans"];
export const areasWider = ["Caroline Springs","Melton","Hoppers Crossing","Werribee","Sydenham"];

export const reviews = [];
export const facts = [{"big":"3023","small":"Based at Deer Park VIC"},{"big":"Full","small":"Residential & commercial tiling"},{"big":"5.0★","small":"Google rating"}];

export const hero = {"headline":"Bathroom, kitchen and pool tiling.","support":"Cam Tiling in Deer Park — mosaics, paving, waterproofing and more. Call 0434 863 236."};
export const heroRating = "5.0-star Google rating · Deer Park";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Tiling done properly.","servicesLead":"Deer Park VIC 3023. Call 0434 863 236.","aboutEyebrow":"Local facts","aboutHeading":"5.0-star Google rating · Deer Park.","aboutLead":"Based at Deer Park VIC 3023 — residential and commercial tiling across a wide service list.","quoteHeading":"Request a Cam Tiling quote.","quoteArea":"Deer Park & surrounds","detailsPlaceholder":"Suburb, area (bath, kitchen, pool, outdoor) and tile style…","footerCtaLine":"Need tiling done?","footerCtaSub":"Call Cam Tiling.","footerBlurb":"Residential and commercial tiling from Deer Park — bathrooms, kitchens, pools and outdoors.","footerPlace":"Deer Park VIC 3023"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Cam","b":"Tiling","tag":"Deer Park"},
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><rect x=\"8\" y=\"8\" width=\"14\" height=\"14\" rx=\"1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\"/><rect x=\"26\" y=\"8\" width=\"14\" height=\"14\" rx=\"1\" fill=\"none\" stroke=\"#e07a3a\" stroke-width=\"2.6\"/><rect x=\"8\" y=\"26\" width=\"14\" height=\"14\" rx=\"1\" fill=\"none\" stroke=\"#e07a3a\" stroke-width=\"2.6\"/><rect x=\"26\" y=\"26\" width=\"14\" height=\"14\" rx=\"1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\"/></svg>",
};

export const quoteMessage = "Hi, I'd like a quote from Cam Tiling.";
export const media = {
  videoId: "46079",
  source: "Mixkit",
  page: "https://mixkit.co/free-stock-video/person-shaping-ceramic-tiles-on-a-grinder-46079/",
  note: "Person shaping ceramic tiles on a grinder",
};
