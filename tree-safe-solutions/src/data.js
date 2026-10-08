export const BASE = "/tree-safe-solutions";

/*
 * Real data only — sources (checked 8 Oct 2026):
 * - Their own site treesafesolutions.com (GoDaddy builder): 0401 225 538, paul@treesafesolutions.com,
 *   Berembong Drive, Keilor East VIC 3033; services (tree removal, stump grinding, pruning), fully insured,
 *   10% pensioner discount, firewood & mulch, commercial/schools/residential, "working all over Melbourne"; logo.
 * - Google Business Profile (via exa place snapshot): 4.8 from 17 reviews, open Mon–Sat 8am–8pm;
 *   review quotes below are verbatim (dates 4 Feb 2026, 2 Jun 2025, 14 Dec 2023).
 */
export const brand = {
  name: "Tree Safe Solutions",
  shortName: "Tree Safe",
  legal: "Tree Safe Solutions",
  phoneDisplay: "0401 225 538",
  phoneTel: "+61401225538",
  /* Lead form opens an SMS to the mobile. Do not wire mailto on the page. */
  address: "Keilor East VIC 3033",
  addressShort: "Keilor East",
  hours: "Mon – Sat · 8am – 8pm",
  owner: "Paul",
  rating: "4.8",
  reviewCount: 17,
};

export const maps = {
  place: "https://www.google.com/maps/search/?api=1&query=Tree+Safe+Solutions+Berembong+Dr+Keilor+East+VIC+3033",
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "Reviews" },
  { href: "#quote", label: "Free quote" },
];

export const services = [
  {
    slug: "tree-removal",
    title: "Tree Removal",
    summary: "Large trees and tricky spots taken down safely by a trained crew — fully insured.",
  },
  {
    slug: "stump-grinding",
    title: "Stump Grinding",
    summary: "Stumps ground out so they stop attracting termites, tripping people or getting in the way.",
  },
  {
    slug: "pruning",
    title: "Tree Pruning",
    summary: "Specialist pruning that keeps the tree healthy and the result how you want it.",
  },
  {
    slug: "hedges-conifers",
    title: "Hedges & Conifers",
    summary: "Rows of pines and conifers removed or trimmed back, from the largest trees down.",
  },
  {
    slug: "commercial",
    title: "Commercial & Schools",
    summary: "Commercial sites, schools and homes — every job site left neat and tidy.",
  },
  {
    slug: "firewood-mulch",
    title: "Firewood & Mulch",
    summary: "Firewood and mulch available. Pensioners get 10% off.",
  },
];

export const areasPrimary = ["Keilor East"];
export const areasWider = ["Melbourne's west & north-west", "All over Melbourne"];

export const reviews = [
  {
    quote:
      "Great tree and stump removal experience. Paul was very friendly, on time and got the job done quickly. The stumps are completely gone and the area was left nice and clean.",
    date: "Feb 2026",
  },
  {
    quote:
      "We used Tree Safe Solutions to remove 50 pencil pine conifers and trim down another 50. Couldn’t be happier with the level of service, professionalism and price.",
    date: "Dec 2023",
  },
  {
    quote:
      "Paul arrived on time, was professional and knowledgeable and did a really good job! The finished result was fantastic and I am very happy with his work and price was reasonable for the job.",
    date: "Jun 2025",
  },
];

export const hero = {
  headline: "Tree removal & stump grinding, done safe.",
  support:
    "Tree Safe Solutions — tree removal, stump grinding and pruning from Keilor East, working all over Melbourne. Fully insured. Free quotes from Paul.",
};

export const quoteMessage = "Hi Paul, I'd like a free quote from Tree Safe Solutions.";
