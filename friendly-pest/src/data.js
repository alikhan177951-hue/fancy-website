export const BASE = "/friendly-pest";

/*
 * Originality rebuild 2026-10-14 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from public listings (checked 14 Oct 2026):
 * - friendlypestcontrol.com.au + Google Maps (Williams Landing address, phone, services, 5.0★ ~47 reviews).
 * - Hero Mixkit 33583: https://mixkit.co/free-stock-video/person-disinfecting-a-door-with-spray-33583/
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG). Scraped logo files deleted.
 */
export const brand = {"name":"Friendly Pest Control","shortName":"Friendly Pest","legal":"Friendly Pest Control","phoneDisplay":"0420 605 365","phoneTel":"+61420605365","address":"50 Woodbury Street, Williams Landing VIC 3027","addressShort":"Williams Landing / Werribee","hours":"Quotes by phone · Melbourne west","owner":"Friendly Pest","rating":"5.0","reviewCount":47};

export const maps = { place: "https://www.google.com/maps/search/?api=1&query=Friendly+Pest+Control+Williams+Landing" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Reviews"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug":"ant","title":"Ant Control","summary":"Ant treatments for houses and workplaces."},{"slug":"cockroach","title":"Cockroach Control","summary":"Cockroach treatments for Melbourne west properties."},{"slug":"spider","title":"Spider Control","summary":"Spider treatments indoors and around the exterior."},{"slug":"bee","title":"Bee Control","summary":"Bee callouts handled around the home."},{"slug":"flea","title":"Flea Control","summary":"Flea treatments for households with pets."},{"slug":"rodent","title":"Rodent Control","summary":"Rat and mouse control for homes and businesses."}];

export const areasPrimary = ["Werribee","Williams Landing","Hoppers Crossing"];
export const areasWider = ["Tarneit","Point Cook","Truganina","Deer Park","Melton","Altona"];

export const reviews = [];
export const facts = [{"big":"47","small":"Google reviews · 5.0★ rating"},{"big":"Local","small":"Williams Landing VIC 3027"},{"big":"West","small":"Werribee & western suburbs"}];

export const hero = {"headline":"Pest control from Williams Landing.","support":"Friendly Pest Control — ants, cockroaches, spiders, bees, fleas and rodents across Werribee and Melbourne’s west. Call 0420 605 365."};
export const heroRating = "5.0 on Google · ~47 reviews · Williams Landing / Werribee";
export const scrollHint = "Scroll for services";
export const copy = {"servicesHeading":"Pest services.","servicesLead":"Williams Landing base. Call 0420 605 365.","aboutEyebrow":"Local facts","aboutHeading":"5.0★ on Google from ~47 reviews.","aboutLead":"Based at Woodbury Street, Williams Landing. Pest work across Werribee and western Melbourne suburbs.","quoteHeading":"Describe the pest issue.","quoteArea":"Werribee, Williams Landing & west","detailsPlaceholder":"Suburb, pest type and where you’re seeing them…","footerCtaLine":"Book pest control","footerCtaSub":"Call Friendly Pest Control.","footerBlurb":"Pest control for homes and businesses across Melbourne’s west.","footerPlace":"Williams Landing VIC 3027"};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: {"a":"Friendly","b":"Pest Control","tag":"Williams Landing"},
  icon: "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><circle cx=\"24\" cy=\"24\" r=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><path d=\"M16 24h16M24 16v16\" stroke=\"#8ed15f\" stroke-width=\"3.2\" stroke-linecap=\"round\"/></svg>",
};

export const quoteMessage = "Hi, I'd like a quote from Friendly Pest Control.";
