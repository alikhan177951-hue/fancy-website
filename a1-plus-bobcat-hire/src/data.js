export const BASE = "/a1-plus-bobcat-hire";

/*
 * Real data only — sources:
 * - ABN Lookup 26 638 187 780: ALIMOVSKI, LAURON (sole trader, active since 12 Jan 2016, GST from 1 Jan 2023, VIC 3338);
 *   business name "A1 PLUS BOBCAT HIRE" registered 2 Oct 2024. Also A1 PLUS BOBCAT HIRE PTY LTD, ABN 88 683 708 287 (Jan 2025).
 * - Existing site a1plusbobcathire.com.au (Duda): 0405 018 819, lauron@a1plusbobcathire.com.au, Melton VIC 3337,
 *   Mon–Sun open 24 hours; services list + logo + job photos (2020–2021).
 * - Instagram @a1plus_bobcathire; contractors1000 listing (Melton, recent pre-construction site clean post).
 * - No public reviews found (no Google rating surfaced, no hipages profile found).
 */
export const brand = {
  name: "A1 Plus Bobcat Hire",
  shortName: "A1 Plus",
  wordmarkRest: "Bobcat Hire",
  logo: "/a1-plus-bobcat-hire/images/a1-plus-logo.png",
  legal: "A1 Plus Bobcat Hire",
  phoneDisplay: "0405 018 819",
  phoneTel: "+61405018819",
  /**
   * Site lead form sends SMS to the mobile.
   * Do not wire mailto on the page.
   */
  address: "Melton VIC 3337",
  addressShort: "Melton",
  hours: "Mon – Sun · open 24 hours",
  owner: "Lauron",
  instagram: "https://www.instagram.com/a1plus_bobcathire/",
};

export const maps = {
  place: "https://www.google.com/maps/search/?api=1&query=A1+Plus+Bobcat+Hire+Melton+VIC+3337",
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#quote", label: "Get a quote" },
];

export const services = [
  {
    slug: "site-cleans",
    title: "Pre-Construction Site Cleans",
    summary: "Rubbish and spoil cleared so your block is ready to build.",
  },
  {
    slug: "slab-backfill",
    title: "Slab Back Fill & Crush Rock",
    summary: "Full slab back fill, then crush rock spread to keep the site clean for trades.",
  },
  {
    slug: "dig-outs",
    title: "Yard Dig Outs & Levelling",
    summary: "Front and back yard dig outs, levelled to a clean base for landscaping.",
  },
  {
    slug: "nature-strip",
    title: "Nature Strip Dig Out & Toppings",
    summary: "Nature strips dug out and topped, neat and level.",
  },
  {
    slug: "soil-concrete",
    title: "Soil & Concrete Removal",
    summary: "Soil removed or spread, old concrete broken out and carted away.",
  },
  {
    slug: "rubbish-landscaping",
    title: "Rubbish Removal & Landscaping",
    summary: "Loaded up and taken away — plus landscaping for new and existing homes.",
  },
];

export const areasPrimary = ["Melton"];
export const areasWider = ["Melbourne's west"];

/* No public reviews found — the About block shows the owner line instead. */
export const review = null;

export const stats = "open 7 days, 24 hours";

export const hero = {
  headline: "Bobcat hire & tipper work — call Lauron.",
  support:
    "A1 Plus — site cleans, slab back fill, dig outs and levelling out of Melton. Soil, concrete and rubbish removal too. Open 7 days.",
};
