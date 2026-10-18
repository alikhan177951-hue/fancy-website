#!/usr/bin/env node
/**
 * Scaffold batch-2026-10-19 plastering + handyman outreach sites (10).
 * Clones cam-tiling; original wordmarks; licensed stock heroes only.
 * Facts only from batch JSON 2026-10-19.
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = "/workspace";
const TEMPLATE = "cam-tiling";
const STOCK = "/tmp/stock-encoded";

const SITES = {
  "brb-plastering": {
    brand: {
      name: "BRB Plastering",
      shortName: "BRB Plastering",
      legal: "BRB Plastering",
      phoneDisplay: "0438 377 798",
      phoneTel: "+61438377798",
      address: "Sunbury VIC",
      addressShort: "Sunbury",
      hours: "Quotes by phone · Melbourne west & north-west",
      owner: "Brian",
      rating: "5.0",
      reviewCount: null,
    },
    mapsUrl:
      "https://www.google.com/maps/place/BRB+Plastering/@-37.5749136,144.7092646,17z",
    services: [
      { slug: "homes", title: "New & Old Homes", summary: "Plastering for new builds and established homes." },
      { slug: "reno", title: "Renovations", summary: "Walls and ceilings for bathroom and home renos." },
      { slug: "ext", title: "Extensions", summary: "Plaster finish for house extensions." },
      { slug: "cornice", title: "Ornamental Cornice", summary: "Cornice install and detail work." },
      { slug: "ins", title: "Insurance Work", summary: "Insurance plaster repairs after damage." },
      { slug: "maint", title: "Maintenance & Repairs", summary: "Patches, garage ceilings and small fixes." },
      { slug: "susp", title: "Suspended Ceilings", summary: "Suspended ceiling installs." },
      { slug: "domcom", title: "Domestic & Commercial", summary: "Homes and commercial plastering." },
    ],
    areasPrimary: ["Sunbury", "Footscray", "Yarraville"],
    areasWider: [
      "Williamstown", "Altona", "Essendon", "Moonee Ponds", "Keilor", "St Albans",
      "Taylors Lakes", "Gisborne", "Woodend", "Kyneton", "Daylesford", "Castlemaine", "Bendigo",
    ],
    facts: [
      { big: "25+", small: "Years in the plastering industry" },
      { big: "Brian", small: "Owner · qualified plasterer" },
      { big: "5.0★", small: "Google rating" },
    ],
    hero: {
      headline: "Plastering across Melbourne’s west.",
      support:
        "BRB Plastering in Sunbury — new homes, renos, cornice and repairs. Call Brian on 0438 377 798.",
    },
    heroRating: "5.0-star Google rating · Sunbury",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Plaster work done properly.",
      servicesLead: "Sunbury, Melbourne’s inner west & north-west, plus country Victoria. 0438 377 798.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · Sunbury.",
      aboutLead:
        "Owner Brian Briffa — 25+ years. No job too small, from bathroom renos to house extensions.",
      quoteHeading: "Request a BRB Plastering quote.",
      quoteArea: "Sunbury, west & north-west Melbourne",
      detailsPlaceholder: "Suburb, job type (reno, cornice, repair) and timing…",
      footerCtaLine: "Need a plasterer?",
      footerCtaSub: "Call BRB Plastering.",
      footerBlurb:
        "Domestic and commercial plastering from Sunbury across Melbourne’s west and country Victoria.",
      footerPlace: "Sunbury VIC",
    },
    word: { a: "BRB", b: "Plastering", tag: "Sunbury" },
    initials: "BRB",
    longWord: false,
    colors: {
      forest: "#1a2744",
      forest2: "#243556",
      forest3: "#2f4468",
      leaf: "#b87333",
      leafBright: "#d4a574",
      leafHover: "#e0b888",
      leafDeep: "#8a5520",
      mist: "#f4f1ec",
      buttonText: "#1a2744",
      pageBg: "#faf8f5",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 34l14-20h4l14 20H8z" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round"/><path d="M14 34h20" stroke="#d4a574" stroke-width="2.6" stroke-linecap="round"/></svg>`,
    title: "BRB Plastering · Sunbury",
    description:
      "Plastering for homes, renos and commercial work from Sunbury across Melbourne’s west. 5.0-star Google rating. Call 0438 377 798.",
    quoteMessage: "Hi Brian, I'd like a quote from BRB Plastering.",
    videoId: "6474186",
    videoSource: "Pexels",
    videoPage: "https://www.pexels.com/video/man-using-skimming-spatula-on-wall-6474186/",
    videoNote: "Man using skimming spatula on wall",
    fonts: {
      display: "Oswald",
      sans: "Source Sans 3",
      google: "Oswald:wght@500;600;700&family=Source+Sans+3:wght@400;600;700",
    },
  },

  "all-cracked-walls": {
    brand: {
      name: "ALL CRACKED WALLS Plastering",
      shortName: "ALL CRACKED WALLS",
      legal: "ALL CRACKED WALLS Plastering",
      phoneDisplay: "0452 027 615",
      phoneTel: "+61452027615",
      address: "Melbourne VIC",
      addressShort: "Melbourne",
      hours: "Free on-site quotes · Melbourne & ~50 km",
      owner: "Adam",
      rating: "5.0",
      reviewCount: null,
    },
    mapsUrl:
      "https://www.google.com/maps/place/ALL+CRACKED+WALLS+Plastering/@-37.9430727,144.9989029,17z",
    services: [
      { slug: "repair", title: "Wall & Ceiling Repair", summary: "Repair and replacement for walls and ceilings." },
      { slug: "external", title: "External Crack Repair", summary: "Fix external cracks before they spread." },
      { slug: "wet", title: "Wet-area Plastering", summary: "Wet-area plaster and water-damage repairs." },
      { slug: "restore", title: "Lath & Solid Plaster", summary: "Lath, solid plaster and plasterboard restoration." },
      { slug: "cornice", title: "Cornice Repairs", summary: "Cornice fixes and matching." },
      { slug: "render", title: "Solid Rendering", summary: "Solid rendering for a durable finish." },
      { slug: "mortar", title: "Mortar & Brickwork", summary: "Mortar and brickwork repair." },
      { slug: "chimney", title: "Chimney Repairs", summary: "Chimney plaster and repair work." },
      { slug: "paint", title: "Interior & Exterior Painting", summary: "Painting to finish the job." },
    ],
    areasPrimary: ["Melbourne"],
    areasWider: ["Suburbs within ~50 km of the city"],
    facts: [
      { big: "26+", small: "Years in plastering and painting" },
      { big: "Free", small: "On-site quotes" },
      { big: "5.0★", small: "Google rating" },
    ],
    hero: {
      headline: "Cracked walls fixed properly.",
      support:
        "ALL CRACKED WALLS Plastering — Melbourne repairs, rendering and painting. Call Adam on 0452 027 615.",
    },
    heroRating: "5.0-star Google rating · Melbourne",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Repair, render, repaint.",
      servicesLead: "Melbourne and suburbs within about 50 km. Free on-site quotes. 0452 027 615.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · Melbourne.",
      aboutLead: "26+ years in plastering and painting. No job too small — free on-site quotes.",
      quoteHeading: "Request a free on-site quote.",
      quoteArea: "Melbourne & ~50 km",
      detailsPlaceholder: "Suburb, crack or damage location, and what you need…",
      footerCtaLine: "Walls looking cracked?",
      footerCtaSub: "Call ALL CRACKED WALLS.",
      footerBlurb: "Plastering, rendering and painting across Melbourne — no job too small.",
      footerPlace: "Melbourne VIC",
    },
    word: { a: "ALL CRACKED WALLS", b: "Plastering", tag: "Melbourne" },
    initials: "ACW",
    longWord: true,
    colors: {
      forest: "#0f3d3a",
      forest2: "#16504c",
      forest3: "#1d6460",
      leaf: "#c47a1a",
      leafBright: "#e8a84a",
      leafHover: "#f0bc6a",
      leafDeep: "#9a5c10",
      mist: "#f3f6f4",
      buttonText: "#0f3d3a",
      pageBg: "#f7faf8",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 12h28v24H10z" fill="none" stroke="currentColor" stroke-width="2.8"/><path d="M16 20l6 8 4-5 6 9" fill="none" stroke="#e8a84a" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: "ALL CRACKED WALLS Plastering · Melbourne",
    description:
      "Wall and ceiling repair, rendering and painting in Melbourne. 5.0-star Google rating. Free on-site quotes. Call 0452 027 615.",
    quoteMessage: "Hi Adam, I'd like a quote from ALL CRACKED WALLS Plastering.",
    videoId: "6474173",
    videoSource: "Pexels",
    videoPage: "https://www.pexels.com/video/a-man-polishing-a-wall-using-a-drywall-sanders-6474173/",
    videoNote: "Man polishing a wall using a drywall sander",
    fonts: {
      display: "Barlow Condensed",
      sans: "Barlow",
      google: "Barlow+Condensed:wght@600;700&family=Barlow:wght@400;600;700",
    },
  },

  "mcfarlane-plastering": {
    brand: {
      name: "Mcfarlane Plastering",
      shortName: "Mcfarlane Plastering",
      legal: "Mcfarlane Plastering",
      phoneDisplay: "0400 075 710",
      phoneTel: "+61400075710",
      address: "Melbourne VIC",
      addressShort: "Melbourne",
      hours: "Text photos for a quote · Melbourne",
      owner: "Michael",
      rating: "5.0",
      reviewCount: null,
    },
    mapsUrl:
      "https://www.google.com/maps/place/Mcfarlane+Plastering/@-37.7251413,144.6162664,17z",
    services: [
      { slug: "res", title: "Residential Plastering", summary: "Plastering for Melbourne homes." },
      { slug: "dec", title: "Decorative Plastering", summary: "Decorative finishes and detail work." },
      { slug: "patch", title: "Patching & Repairs", summary: "Patches and repairs before paint." },
      { slug: "sand", title: "Sanding & Finishing", summary: "Sanding and finishing ready for paint." },
    ],
    areasPrimary: ["Melbourne"],
    areasWider: [],
    facts: [
      { big: "20+", small: "Years of plastering experience" },
      { big: "Text", small: "Send photos · get a quote" },
      { big: "5.0★", small: "Google rating" },
    ],
    hero: {
      headline: "Smooth plaster, ready for paint.",
      support:
        "Mcfarlane Plastering in Melbourne — residential work, patches and finishing. Call Michael on 0400 075 710.",
    },
    heroRating: "5.0-star Google rating · Melbourne",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Residential plastering.",
      servicesLead: "Melbourne. Text photos of the job for a quote. 0400 075 710.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · Melbourne.",
      aboutLead:
        "20+ years of plastering. Quotes made easy — text photos, Michael asks a few questions, then quotes and books.",
      quoteHeading: "Request a Mcfarlane quote.",
      quoteArea: "Melbourne",
      detailsPlaceholder: "Suburb, room, and what needs plastering…",
      footerCtaLine: "Need plastering done?",
      footerCtaSub: "Call Mcfarlane Plastering.",
      footerBlurb: "Residential plastering, decorative work, patching and finishing across Melbourne.",
      footerPlace: "Melbourne VIC",
    },
    word: { a: "Mcfarlane", b: "Plastering", tag: "Melbourne" },
    initials: "MP",
    longWord: false,
    colors: {
      forest: "#1a1f1a",
      forest2: "#2a322a",
      forest3: "#3a4438",
      leaf: "#6b8f71",
      leafBright: "#9cb89f",
      leafHover: "#b4ccb6",
      leafDeep: "#4a6b50",
      mist: "#f3f0e8",
      buttonText: "#1a1f1a",
      pageBg: "#f8f6f0",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="8" y="14" width="32" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="2.8"/><path d="M12 28h24" stroke="#9cb89f" stroke-width="2.8" stroke-linecap="round"/></svg>`,
    title: "Mcfarlane Plastering · Melbourne",
    description:
      "Residential plastering, decorative work, patching and finishing in Melbourne. 5.0-star Google rating. Call 0400 075 710.",
    quoteMessage: "Hi Michael, I'd like a quote from Mcfarlane Plastering.",
    videoId: "6473931",
    videoSource: "Pexels",
    videoPage: "https://www.pexels.com/video/a-man-using-drywall-stilts-6473931/",
    videoNote: "Man using drywall stilts / ceiling work",
    fonts: {
      display: "Libre Franklin",
      sans: "Libre Franklin",
      google: "Libre+Franklin:wght@400;600;700;800",
    },
  },

  "venetian-plaster-gallery": {
    brand: {
      name: "Venetian Plaster Gallery Melbourne",
      shortName: "Venetian Plaster Gallery",
      legal: "Venetian Plaster Gallery Melbourne",
      phoneDisplay: "0402 764 723",
      phoneTel: "+61402764723",
      address: "Williamstown North VIC",
      addressShort: "Williamstown North",
      hours: "Studio quotes · residential & commercial",
      owner: "Venetian Plaster Gallery",
      rating: "5.0",
      reviewCount: null,
    },
    mapsUrl:
      "https://www.google.com/maps/place/Venetian+Plaster+Gallery+Melbourne/@-37.8507058,144.8691795,17z",
    services: [
      { slug: "ven", title: "Venetian Plaster Finishes", summary: "Polished Venetian plaster wall finishes." },
      { slug: "bespoke", title: "Bespoke Decorative Walls", summary: "Custom decorative wall finishes." },
      { slug: "res", title: "Residential Projects", summary: "Feature walls for homes." },
      { slug: "com", title: "Commercial Projects", summary: "Decorative finishes for commercial spaces." },
      { slug: "tables", title: "Custom-built Tables", summary: "Custom tables alongside plaster work." },
    ],
    areasPrimary: ["Williamstown North", "Williamstown"],
    areasWider: ["Melbourne west"],
    facts: [
      { big: "Studio", small: "Based in Williamstown North" },
      { big: "Artisan", small: "Traditional craft · contemporary style" },
      { big: "5.0★", small: "Google rating" },
    ],
    hero: {
      headline: "Polished Venetian plaster.",
      support:
        "Venetian Plaster Gallery Melbourne — bespoke wall finishes from Williamstown North. Call 0402 764 723.",
    },
    heroRating: "5.0-star Google rating · Williamstown North",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Decorative wall finishes.",
      servicesLead: "Studio in Williamstown North. Residential and commercial. 0402 764 723.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · Williamstown North.",
      aboutLead: "Traditional artisan craftsmanship with a contemporary style — from our Williamstown North studio.",
      quoteHeading: "Request a finish quote.",
      quoteArea: "Williamstown North & Melbourne",
      detailsPlaceholder: "Suburb, room, and finish style you’re after…",
      footerCtaLine: "Want a Venetian finish?",
      footerCtaSub: "Call Venetian Plaster Gallery.",
      footerBlurb: "Venetian plaster and bespoke decorative finishes from Williamstown North.",
      footerPlace: "Williamstown North VIC",
    },
    word: { a: "Venetian Plaster", b: "Gallery", tag: "Williamstown North" },
    initials: "VP",
    longWord: true,
    colors: {
      forest: "#0c1424",
      forest2: "#162038",
      forest3: "#223050",
      leaf: "#b8973a",
      leafBright: "#d4b45c",
      leafHover: "#e0c478",
      leafDeep: "#8a7028",
      mist: "#f0ebe3",
      buttonText: "#0c1424",
      pageBg: "#f7f4ef",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="14" fill="none" stroke="currentColor" stroke-width="2.6"/><path d="M14 28c4-8 16-8 20 0" fill="none" stroke="#d4b45c" stroke-width="2.6" stroke-linecap="round"/></svg>`,
    title: "Venetian Plaster Gallery Melbourne · Williamstown North",
    description:
      "Venetian plaster finishes and bespoke decorative walls from Williamstown North. 5.0-star Google rating. Call 0402 764 723.",
    quoteMessage: "Hi, I'd like a quote from Venetian Plaster Gallery Melbourne.",
    videoId: "34488",
    videoSource: "Mixkit",
    videoPage: "https://mixkit.co/free-stock-video/detailed-texture-of-a-smooth-marble-surface-34488/",
    videoNote: "Detailed texture of a smooth marble surface",
    fonts: {
      display: "Cormorant Garamond",
      sans: "Source Sans 3",
      google: "Cormorant+Garamond:wght@600;700&family=Source+Sans+3:wght@400;600;700",
    },
  },

  "gazzas-handyman": {
    brand: {
      name: "Gazzas Mowing & Handyman Maintenance",
      shortName: "Gazzas Handyman",
      legal: "Gazzas Mowing & Handyman Maintenance",
      phoneDisplay: "0421 766 589",
      phoneTel: "+61421766589",
      address: "Hoppers Crossing VIC",
      addressShort: "Hoppers Crossing",
      hours: "Free quotes · western suburbs",
      owner: "Gazzas",
      rating: "4.7",
      reviewCount: null,
    },
    mapsUrl:
      "https://www.google.com/maps/place/Gazzas+Mowing+%26+Handyman+Maintenance/@-37.8733055,144.6879257,17z",
    services: [
      { slug: "mow", title: "Lawn Mowing", summary: "Regular and one-off lawn mowing." },
      { slug: "garden", title: "Garden Maintenance", summary: "Garden tidy-ups and ongoing care." },
      { slug: "handy", title: "Small Handyman Jobs", summary: "Odd jobs and small home fixes." },
      { slug: "quote", title: "Free Quotes", summary: "No-obligation quotes for your job." },
    ],
    areasPrimary: ["Hoppers Crossing", "Werribee", "Tarneit"],
    areasWider: ["Manor Lakes", "Point Cook", "Sanctuary Lakes", "Altona", "Williamstown"],
    facts: [
      { big: "10", small: "Years of garden & handyman work" },
      { big: "West", small: "Hoppers Crossing to Williamstown" },
      { big: "4.7★", small: "Google rating" },
    ],
    hero: {
      headline: "Mowing and handyman jobs done.",
      support:
        "Gazzas Mowing & Handyman Maintenance — Hoppers Crossing and the west. Call 0421 766 589.",
    },
    heroRating: "4.7-star Google rating · Hoppers Crossing",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Lawn care & odd jobs.",
      servicesLead: "Hoppers Crossing, Werribee, Tarneit and nearby. Free quotes. 0421 766 589.",
      aboutEyebrow: "Local facts",
      aboutHeading: "4.7-star Google rating · Hoppers Crossing.",
      aboutLead:
        "10 years of garden maintenance and handyman work across Hoppers Crossing to Williamstown.",
      quoteHeading: "Request a free Gazzas quote.",
      quoteArea: "Hoppers Crossing & western suburbs",
      detailsPlaceholder: "Suburb, lawn or handyman job, and preferred day…",
      footerCtaLine: "Need mowing or a handyman?",
      footerCtaSub: "Call Gazzas.",
      footerBlurb: "Lawn mowing, garden maintenance and small handyman jobs from Hoppers Crossing.",
      footerPlace: "Hoppers Crossing VIC",
    },
    word: { a: "Gazzas", b: "Handyman", tag: "Hoppers Crossing" },
    initials: "GM",
    longWord: true,
    colors: {
      forest: "#1c2420",
      forest2: "#2a3530",
      forest3: "#384840",
      leaf: "#5a9e2e",
      leafBright: "#a3e635",
      leafHover: "#bef264",
      leafDeep: "#3f7a1c",
      mist: "#eef6e8",
      buttonText: "#1c2420",
      pageBg: "#f4faf0",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="18" cy="30" r="8" fill="none" stroke="currentColor" stroke-width="2.6"/><path d="M26 30h12M32 18v12" stroke="#a3e635" stroke-width="2.8" stroke-linecap="round"/></svg>`,
    title: "Gazzas Mowing & Handyman · Hoppers Crossing",
    description:
      "Lawn mowing, garden maintenance and small handyman jobs in Hoppers Crossing and the west. 4.7-star Google rating. Call 0421 766 589.",
    quoteMessage: "Hi, I'd like a quote from Gazzas Mowing & Handyman Maintenance.",
    videoId: "12215822",
    videoSource: "Pexels",
    videoPage: "https://www.pexels.com/video/man-mowing-grass-12215822/",
    videoNote: "Man mowing grass",
    fonts: {
      display: "Archivo Black",
      sans: "Nunito Sans",
      google: "Archivo+Black&family=Nunito+Sans:wght@400;600;700",
    },
  },

  "western-handyman": {
    brand: {
      name: "Western Handyman Services",
      shortName: "Western Handyman",
      legal: "Western Handyman Services",
      phoneDisplay: "0478 900 716",
      phoneTel: "+61478900716",
      address: "Point Cook VIC",
      addressShort: "Point Cook",
      hours: "Free quotation · western suburbs only",
      owner: "Western Handyman",
      rating: "5.0",
      reviewCount: null,
    },
    mapsUrl:
      "https://www.google.com/maps/place/Western+Handyman+Services/@-37.8872358,144.8115973,17z",
    services: [
      { slug: "plumb", title: "Leaks, Taps & Drains", summary: "Leaks, taps and blocked drains." },
      { slug: "elec", title: "Lights & Power Points", summary: "Light fittings, power points and switches." },
      { slug: "carp", title: "Shelves & Cabinets", summary: "Shelves and minor cabinet carpentry." },
      { slug: "doors", title: "Doors & Windows", summary: "Door and window adjustments." },
      { slug: "flat", title: "Flat-pack Assembly", summary: "Flat-pack furniture assembly." },
      { slug: "plaster", title: "Plaster Patching", summary: "Small plaster patches." },
      { slug: "store", title: "Shelving & Storage", summary: "Extra shelving and storage." },
      { slug: "app", title: "Minor Appliance Repairs", summary: "Minor appliance fixes." },
      { slug: "blinds", title: "Curtains & Blinds", summary: "Curtain and blind installs." },
    ],
    areasPrimary: ["Point Cook"],
    areasWider: ["Western suburbs"],
    facts: [
      { big: "$0", small: "If not fixed" },
      { big: "Free", small: "Quotation" },
      { big: "5.0★", small: "Google rating" },
    ],
    hero: {
      headline: "Western suburbs handyman.",
      support:
        "Western Handyman Services in Point Cook — $0 if not fixed. Call 0478 900 716.",
    },
    heroRating: "5.0-star Google rating · Point Cook",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Fixes around the home.",
      servicesLead: "Western suburbs only — keeps prices affordable. Free quotation. 0478 900 716.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · Point Cook.",
      aboutLead: "$0 if not fixed. Free quotation. Focused on the western suburbs to keep prices affordable.",
      quoteHeading: "Request a free quotation.",
      quoteArea: "Point Cook & western suburbs",
      detailsPlaceholder: "Suburb, what’s broken or needs fixing…",
      footerCtaLine: "Need a handyman out west?",
      footerCtaSub: "Call Western Handyman.",
      footerBlurb: "Handyman services across Melbourne’s western suburbs from Point Cook.",
      footerPlace: "Point Cook VIC",
    },
    word: { a: "Western", b: "Handyman", tag: "Point Cook" },
    initials: "WH",
    longWord: false,
    colors: {
      forest: "#0a1e4a",
      forest2: "#122a5c",
      forest3: "#1a3870",
      leaf: "#e6b800",
      leafBright: "#f5d000",
      leafHover: "#ffe033",
      leafDeep: "#b38f00",
      mist: "#eef2fa",
      buttonText: "#0a1e4a",
      pageBg: "#f5f7fc",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M16 10v18l8 12 8-12V10" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round"/><circle cx="24" cy="20" r="3" fill="#f5d000"/></svg>`,
    title: "Western Handyman Services · Point Cook",
    description:
      "Handyman services in Point Cook and Melbourne’s west. $0 if not fixed. 5.0-star Google rating. Call 0478 900 716.",
    quoteMessage: "Hi, I'd like a quote from Western Handyman Services.",
    videoId: "44858",
    videoSource: "Mixkit",
    videoPage: "https://mixkit.co/free-stock-video/man-building-a-wooden-frame-using-a-power-drill-44858/",
    videoNote: "Man building a wooden frame using a power drill",
    fonts: {
      display: "Teko",
      sans: "IBM Plex Sans",
      google: "Teko:wght@500;600;700&family=IBM+Plex+Sans:wght@400;600;700",
    },
  },

  "canrepairit": {
    brand: {
      name: "Canrepairit",
      shortName: "Canrepairit",
      legal: "Canrepairit",
      phoneDisplay: "0412 933 604",
      phoneTel: "+61412933604",
      address: "Altona VIC 3018",
      addressShort: "Altona",
      hours: "On-time quotes · western suburbs",
      owner: "John",
      rating: "5.0",
      reviewCount: null,
    },
    mapsUrl: "https://www.google.com/maps/place/Canrepairit.com.au/@-37.8644247,144.8323196,17z",
    services: [
      { slug: "plumb", title: "Minor Plumbing", summary: "Leaks, tap upgrades, dishwasher installs, toilet cisterns." },
      { slug: "lights", title: "Lighting Upgrades", summary: "Lighting fixture upgrades." },
      { slug: "tv", title: "TV Mounting & Signal", summary: "TV wall mounting and signal fixes." },
      { slug: "cable", title: "Computer Cabling", summary: "Computer and network cabling." },
      { slug: "av", title: "AV & Electronics", summary: "Audio-visual and electronic repairs." },
      { slug: "carp", title: "Carpentry & Maintenance", summary: "Carpentry and general home and business maintenance." },
    ],
    areasPrimary: ["Altona"],
    areasWider: ["Melbourne’s western suburbs"],
    facts: [
      { big: "John", small: "Multiskilled handyman · Altona 3018" },
      { big: "West", small: "Homes and businesses out west" },
      { big: "5.0★", small: "Google rating" },
    ],
    hero: {
      headline: "Can repair it — Altona handyman.",
      support:
        "John at Canrepairit — plumbing, electrics, AV and maintenance for the west. Call 0412 933 604.",
    },
    heroRating: "5.0-star Google rating · Altona",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Home & business maintenance.",
      servicesLead: "Altona 3018 and Melbourne’s western suburbs. On-time, cost-effective. 0412 933 604.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · Altona.",
      aboutLead: "John — a mature multiskilled handyman based in Altona 3018, serving homes and businesses out west.",
      quoteHeading: "Request a Canrepairit quote.",
      quoteArea: "Altona & western suburbs",
      detailsPlaceholder: "Suburb, what’s broken (tap, TV, light, cabinet)…",
      footerCtaLine: "Need something fixed?",
      footerCtaSub: "Call Canrepairit.",
      footerBlurb: "Multiskilled handyman work for homes and businesses across Melbourne’s west.",
      footerPlace: "Altona VIC 3018",
    },
    word: { a: "Can", b: "repairit", tag: "Altona" },
    initials: "CR",
    longWord: false,
    colors: {
      forest: "#2a2a2a",
      forest2: "#3a3a3a",
      forest3: "#4a4a4a",
      leaf: "#e6c200",
      leafBright: "#ffe600",
      leafHover: "#fff066",
      leafDeep: "#b39a00",
      mist: "#f5f5f5",
      buttonText: "#1a1a1a",
      pageBg: "#fafafa",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M18 10l4 18h4l4-18" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/><circle cx="24" cy="36" r="4" fill="#ffe600"/></svg>`,
    title: "Canrepairit · Altona handyman",
    description:
      "Handyman repairs in Altona and Melbourne’s west — plumbing, lighting, TV mounting and more. 5.0-star Google rating. Call 0412 933 604.",
    quoteMessage: "Hi John, I'd like a quote from Canrepairit.",
    videoId: "6789602",
    videoSource: "Pexels",
    videoPage: "https://www.pexels.com/video/carpentry-tools-on-wooden-table-6789602/",
    videoNote: "Carpentry tools on wooden table",
    fonts: {
      display: "Anton",
      sans: "Karla",
      google: "Anton&family=Karla:wght@400;600;700",
    },
  },

  "top-shelf-property": {
    brand: {
      name: "Top Shelf Property Maintenance",
      shortName: "Top Shelf Property",
      legal: "Top Shelf Property Maintenance",
      phoneDisplay: "0434 254 816",
      phoneTel: "+61434254816",
      address: "Williamstown VIC",
      addressShort: "Williamstown",
      hours: "Quotes by phone · Williamstown & surrounds",
      owner: "Top Shelf Property",
      rating: "5.0",
      reviewCount: null,
    },
    mapsUrl:
      "https://www.google.com/maps/place/Top+Shelf+Property+Maintenance/@-37.8545672,144.8574026,17z",
    services: [
      { slug: "presale", title: "Pre-sale Preparation", summary: "Get the property presentation-ready." },
      { slug: "estate", title: "Deceased Estate Clean-ups", summary: "Sensitive estate clean-ups." },
      { slug: "rubbish", title: "Rubbish Removal", summary: "Clear junk and rubbish." },
      { slug: "paint", title: "Fence & House Painting", summary: "Fence painting and general painting." },
      { slug: "land", title: "Landscaping", summary: "Garden and landscape tidy-ups." },
      { slug: "drive", title: "Driveways & Concreting", summary: "Driveways, concreting and sealing." },
      { slug: "epoxy", title: "Epoxy & Concrete Grinding", summary: "Epoxy finishes and concrete grinding." },
      { slug: "fence", title: "Fencing", summary: "Fence repairs and installs." },
      { slug: "earth", title: "Earth Moving", summary: "Small earth-moving jobs." },
      { slug: "asbestos", title: "Asbestos Removal", summary: "Asbestos removal where required." },
      { slug: "wood", title: "Firewood Delivery", summary: "Firewood delivery." },
      { slug: "move", title: "House Moving", summary: "Help with house moves." },
    ],
    areasPrimary: ["Williamstown"],
    areasWider: ["Melbourne west"],
    facts: [
      { big: "One", small: "Place for maintenance needs" },
      { big: "Local", small: "Based in Williamstown" },
      { big: "5.0★", small: "Google rating" },
    ],
    hero: {
      headline: "Property maintenance, sorted.",
      support:
        "Top Shelf Property Maintenance in Williamstown — clean-ups, painting, concreting and more. Call 0434 254 816.",
    },
    heroRating: "5.0-star Google rating · Williamstown",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "All your maintenance needs.",
      servicesLead: "Williamstown. Pre-sale prep, clean-ups, painting, concreting and more. 0434 254 816.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · Williamstown.",
      aboutLead: "Based in Williamstown — all your maintenance needs in one place.",
      quoteHeading: "Request a Top Shelf quote.",
      quoteArea: "Williamstown & surrounds",
      detailsPlaceholder: "Suburb, job type (clean-up, paint, driveway)…",
      footerCtaLine: "Property need a tidy-up?",
      footerCtaSub: "Call Top Shelf Property.",
      footerBlurb: "Property maintenance from Williamstown — clean-ups, painting, concreting and more.",
      footerPlace: "Williamstown VIC",
    },
    word: { a: "Top Shelf", b: "Property", tag: "Williamstown" },
    initials: "TS",
    longWord: true,
    colors: {
      forest: "#1a1e22",
      forest2: "#2a3036",
      forest3: "#3a424a",
      leaf: "#0d9488",
      leafBright: "#2dd4bf",
      leafHover: "#5eead4",
      leafDeep: "#0f766e",
      mist: "#e8f4f2",
      buttonText: "#0a1210",
      pageBg: "#f4faf9",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 34V18l16-10 16 10v16H8z" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round"/><path d="M18 34V22h12v12" fill="none" stroke="#2dd4bf" stroke-width="2.6"/></svg>`,
    title: "Top Shelf Property Maintenance · Williamstown",
    description:
      "Property maintenance in Williamstown — clean-ups, painting, concreting and more. 5.0-star Google rating. Call 0434 254 816.",
    quoteMessage: "Hi, I'd like a quote from Top Shelf Property Maintenance.",
    videoId: "6160419",
    videoSource: "Pexels",
    videoPage: "https://www.pexels.com/video/man-washing-floor-with-water-pressure-machine-6160419/",
    videoNote: "Man washing floor with water pressure machine",
    fonts: {
      display: "Montserrat",
      sans: "Montserrat",
      google: "Montserrat:wght@500;600;700;800",
    },
  },

  "herrings-carpentry": {
    brand: {
      name: "Herrings Carpentry",
      shortName: "Herrings Carpentry",
      legal: "Herrings Carpentry",
      phoneDisplay: "0413 116 124",
      phoneTel: "+61413116124",
      address: "Caroline Springs VIC",
      addressShort: "Caroline Springs",
      hours: "Free measure & quote · Melbourne-wide",
      owner: "Shane",
      rating: "4.9",
      reviewCount: null,
    },
    mapsUrl:
      "https://www.google.com/maps/place/Herrings+Carpentry/@-37.754651,144.748316,17z",
    services: [
      { slug: "deck", title: "Decking & Pergolas", summary: "Timber decking and pergolas." },
      { slug: "clad", title: "Cladding & Feature Walls", summary: "Cladding and timber feature walls." },
      { slug: "frame", title: "Framing", summary: "Framing for extensions and new builds." },
      { slug: "cabin", title: "Custom Cabinetry", summary: "Custom cabinetry and storage." },
      { slug: "doors", title: "Doors & Windows", summary: "Door and window installations." },
      { slug: "reno", title: "Renovation Fit-outs", summary: "Renovation support and fit-outs." },
    ],
    areasPrimary: ["Caroline Springs", "Preston"],
    areasWider: ["Melbourne west to north"],
    facts: [
      { big: "30+", small: "Years of woodworking" },
      { big: "Shane", small: "Licensed carpenter · owner" },
      { big: "4.9★", small: "Google rating" },
    ],
    hero: {
      headline: "Carpentry built to last.",
      support:
        "Herrings Carpentry — decking, framing and custom work from Caroline Springs. Call Shane on 0413 116 124.",
    },
    heroRating: "4.9-star Google rating · Caroline Springs",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Timber work done right.",
      servicesLead: "Caroline Springs to Preston — Melbourne-wide. Free measure and quote. 0413 116 124.",
      aboutEyebrow: "Local facts",
      aboutHeading: "4.9-star Google rating · Caroline Springs.",
      aboutLead:
        "Owner Shane Herring — licensed carpenter with 30+ years of woodworking. Transparent quotes, no hidden costs.",
      quoteHeading: "Book a free measure & quote.",
      quoteArea: "Caroline Springs to Preston · Melbourne",
      detailsPlaceholder: "Suburb, job (deck, pergola, cabinetry, framing)…",
      footerCtaLine: "Need a carpenter?",
      footerCtaSub: "Call Herrings Carpentry.",
      footerBlurb: "Decking, framing, cabinetry and renovation carpentry across Melbourne.",
      footerPlace: "Caroline Springs VIC",
    },
    word: { a: "Herrings", b: "Carpentry", tag: "Caroline Springs" },
    initials: "HC",
    longWord: false,
    colors: {
      forest: "#1a2e1c",
      forest2: "#2a3e2c",
      forest3: "#3a4e3c",
      leaf: "#8b5a2b",
      leafBright: "#c4a574",
      leafHover: "#d4b888",
      leafDeep: "#6b4420",
      mist: "#f3efe6",
      buttonText: "#1a2e1c",
      pageBg: "#f8f5ee",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 36l14-24 14 24H10z" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round"/><path d="M18 36V28h12v8" fill="none" stroke="#c4a574" stroke-width="2.4"/></svg>`,
    title: "Herrings Carpentry · Caroline Springs",
    description:
      "Decking, framing, cabinetry and renovation carpentry from Caroline Springs across Melbourne. 4.9-star Google rating. Call 0413 116 124.",
    quoteMessage: "Hi Shane, I'd like a quote from Herrings Carpentry.",
    videoId: "8829711",
    videoSource: "Pexels",
    videoPage: "https://www.pexels.com/video/a-drilling-a-wood-8829711/",
    videoNote: "Worker drilling wood / decking",
    fonts: {
      display: "Merriweather",
      sans: "Source Sans 3",
      google: "Merriweather:wght@700;900&family=Source+Sans+3:wght@400;600;700",
    },
  },

  "nv-property-solutions": {
    brand: {
      name: "NV Property Solutions",
      shortName: "NV Property Solutions",
      legal: "NV Property Solutions",
      phoneDisplay: "0420 845 241",
      phoneTel: "+61420845241",
      address: "Hoppers Crossing VIC",
      addressShort: "Hoppers Crossing",
      hours: "Quotes by phone · homes & offices",
      owner: "NV Property Solutions",
      rating: "5.0",
      reviewCount: null,
    },
    mapsUrl:
      "https://www.google.com/maps/place/NV+property+solutions/@-37.8498997,144.6740692,17z",
    services: [
      { slug: "patch", title: "Patch & Paint", summary: "Patch and paint for a clean finish." },
      { slug: "feature", title: "Feature Walls", summary: "Feature wall finishes." },
      { slug: "reno", title: "Renovations", summary: "Kitchens, bathrooms and full-home makeovers." },
      { slug: "maint", title: "Property Maintenance", summary: "Ongoing property maintenance." },
    ],
    areasPrimary: ["Hoppers Crossing"],
    areasWider: ["Melbourne west"],
    facts: [
      { big: "Local", small: "Based in Hoppers Crossing" },
      { big: "Homes", small: "Homes, offices & post-reno touch-ups" },
      { big: "5.0★", small: "Google rating" },
    ],
    hero: {
      headline: "Patch, paint and renovations.",
      support:
        "NV Property Solutions in Hoppers Crossing — homes, offices and touch-ups. Call 0420 845 241.",
    },
    heroRating: "5.0-star Google rating · Hoppers Crossing",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Property solutions.",
      servicesLead: "Hoppers Crossing. Patch and paint, feature walls, renovations. 0420 845 241.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · Hoppers Crossing.",
      aboutLead: "Based in Hoppers Crossing — homes, offices and post-renovation touch-ups.",
      quoteHeading: "Request an NV Property quote.",
      quoteArea: "Hoppers Crossing & surrounds",
      detailsPlaceholder: "Suburb, room, and what you need (paint, reno, maintenance)…",
      footerCtaLine: "Property need a refresh?",
      footerCtaSub: "Call NV Property Solutions.",
      footerBlurb: "Patch and paint, renovations and property maintenance from Hoppers Crossing.",
      footerPlace: "Hoppers Crossing VIC",
    },
    word: { a: "NV", b: "Property", tag: "Hoppers Crossing" },
    initials: "NV",
    longWord: false,
    colors: {
      forest: "#3b1f3a",
      forest2: "#4c2a4a",
      forest3: "#5e365c",
      leaf: "#c9a06e",
      leafBright: "#e0c09a",
      leafHover: "#ecd0b0",
      leafDeep: "#9a7040",
      mist: "#f6eef2",
      buttonText: "#2a1528",
      pageBg: "#faf5f7",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="10" y="12" width="28" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="2.8"/><path d="M14 30h20" stroke="#e0c09a" stroke-width="3" stroke-linecap="round"/></svg>`,
    title: "NV Property Solutions · Hoppers Crossing",
    description:
      "Patch and paint, renovations and property maintenance in Hoppers Crossing. 5.0-star Google rating. Call 0420 845 241.",
    quoteMessage: "Hi, I'd like a quote from NV Property Solutions.",
    videoId: "6473944",
    videoSource: "Pexels",
    videoPage: "https://www.pexels.com/video/person-painting-a-wall-6473944/",
    videoNote: "Person painting a wall with a roller",
    fonts: {
      display: "Playfair Display",
      sans: "Lato",
      google: "Playfair+Display:wght@600;700&family=Lato:wght@400;700",
    },
  },
};

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === "dist" || entry.name === ".git") continue;
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function writeData(slug, s) {
  const content = `export const BASE = "/${slug}";

/*
 * Originality build 2026-10-19 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from batch JSON (checked 19 Oct 2026):
 * - Name, phone, suburb/service area, services, rating, listed facts only. No review count shown.
 * - Hero ${s.videoSource} ${s.videoId}: ${s.videoPage}
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG).
 */
export const brand = ${JSON.stringify(s.brand)};

export const maps = { place: ${JSON.stringify(s.mapsUrl)} };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Why us"}, {"href": "#quote", "label": "Free quote"}];

export const services = ${JSON.stringify(s.services)};

export const areasPrimary = ${JSON.stringify(s.areasPrimary)};
export const areasWider = ${JSON.stringify(s.areasWider)};

export const reviews = [];
export const facts = ${JSON.stringify(s.facts)};

export const hero = ${JSON.stringify(s.hero)};
export const heroRating = ${JSON.stringify(s.heroRating)};
export const scrollHint = ${JSON.stringify(s.scrollHint)};
export const copy = ${JSON.stringify(s.copy)};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: ${JSON.stringify(s.word)},
  long: ${s.longWord ? "true" : "false"},
  icon: ${JSON.stringify(s.icon)},
};

export const quoteMessage = ${JSON.stringify(s.quoteMessage)};
export const media = {
  videoId: ${JSON.stringify(s.videoId)},
  source: ${JSON.stringify(s.videoSource)},
  page: ${JSON.stringify(s.videoPage)},
  note: ${JSON.stringify(s.videoNote)},
};
`;
  fs.writeFileSync(path.join(ROOT, slug, "src/data.js"), content);
}

function writeCss(slug, s) {
  const c = s.colors;
  const css = `/* Theme — original palette (${slug}) */
:root {
  --leaf: ${c.leaf};
  --leaf-bright: ${c.leafBright}; /* CTA fill — contrast >= 4.5:1 on dark text */
  --leaf-hover: ${c.leafHover};
  --leaf-deep: ${c.leafDeep}; /* accent text on white */
  --forest: ${c.forest};
  --forest-2: ${c.forest2};
  --forest-3: ${c.forest3};
  --grey: #6c7a88;
  --ink: #0f1a26;
  --muted: #4a5a6a;
  --muted-on-dark: rgba(255, 255, 255, 0.78);
  --line: rgba(15, 20, 30, 0.12);
  --line-dark: rgba(255, 255, 255, 0.12);
  --mist: ${c.mist};
  --white: #ffffff;
  --page-bg: ${c.pageBg};
  --btn-text: ${c.buttonText};
  --leaf-r: 18px;
  --leaf-r-sm: 8px;
  --shadow: 0 18px 40px rgba(10, 20, 30, 0.12);
  --display: "${s.fonts.display}", "Arial Narrow", sans-serif;
  --sans: "${s.fonts.sans}", "Segoe UI", sans-serif;
  --max: 1100px;
  --header-h: 5.25rem;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
body {
  margin: 0;
  font-family: var(--sans);
  color: var(--ink);
  background: var(--page-bg);
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
img, svg, video { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
h1, h2, h3 { font-family: var(--display); font-weight: 700; line-height: 1.12; margin: 0; letter-spacing: 0.01em; }
p { margin: 0; }

.skip { position: absolute; left: -999px; top: 0; z-index: 200; background: var(--leaf-bright); color: var(--btn-text); padding: 0.6rem 1rem; font-weight: 700; }
.skip:focus { left: 1rem; top: 1rem; }
.wrap { width: min(var(--max), calc(100% - 2.5rem)); margin-inline: auto; }
.section { padding: clamp(3.5rem, 8vw, 5.5rem) 0; position: relative; overflow: hidden; }
.band--light { background: var(--mist); }
.band--dark { background: var(--forest); color: var(--white); }
.band--dark .lead { color: var(--muted-on-dark); }

.band--dark::before,
.band--light::before {
  content: "";
  position: absolute;
  width: 46rem; height: 46rem;
  right: -20rem; top: -14rem;
  border-radius: 50%;
  border: 2px solid transparent;
  border-left-color: rgba(255, 255, 255, 0.07);
  border-bottom-color: rgba(255, 255, 255, 0.07);
  box-shadow: -28px 18px 0 -12px color-mix(in srgb, var(--leaf) 18%, transparent);
  transform: rotate(-20deg);
  pointer-events: none;
}
.band--light::before { border-left-color: rgba(95, 98, 102, 0.12); border-bottom-color: rgba(95, 98, 102, 0.12); }
.section > .wrap { position: relative; z-index: 1; }

.eyebrow {
  display: inline-flex; align-items: center; gap: 0.55rem;
  margin: 0 0 0.8rem;
  font-size: 0.8rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--leaf-deep);
}
.band--dark .eyebrow { color: var(--leaf-bright); }
.eyebrow::before {
  content: ""; width: 0.85rem; height: 0.85rem;
  background: var(--leaf);
  border-radius: 0 100% 0 100%;
}
.lead { font-size: clamp(1.02rem, 1.6vw, 1.15rem); color: var(--muted); max-width: 40rem; }

.leaf-heading { font-size: clamp(1.75rem, 3.6vw, 2.6rem); color: var(--ink); max-width: 22ch; }
.leaf-heading--light { color: var(--white); }

.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
  min-height: 3.1rem; padding: 0.8rem 1.5rem;
  border: 2px solid transparent; border-radius: var(--leaf-r-sm);
  font-family: var(--sans); font-size: 1.02rem; font-weight: 700; letter-spacing: 0.01em;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s var(--ease);
}
.btn:focus-visible, .nav-desktop a:focus-visible, .menu-toggle:focus-visible { outline: 3px solid var(--leaf-hover); outline-offset: 3px; }
.btn--leaf { background: var(--leaf-bright); color: var(--btn-text); box-shadow: 0 10px 26px color-mix(in srgb, var(--leaf) 28%, transparent); }
.btn--leaf:hover { background: var(--leaf-hover); color: var(--btn-text); }
.btn--ghost { border-color: rgba(255, 255, 255, 0.75); color: var(--white); background: rgba(15, 39, 64, 0.25); backdrop-filter: blur(4px); }
.btn--ghost:hover { background: var(--white); color: var(--forest); }
.cta-row { display: flex; flex-wrap: wrap; gap: 0.75rem; }

.site-header {
  position: fixed; inset: 0 0 auto; z-index: 100;
  height: var(--header-h);
  display: flex; align-items: center;
  background: color-mix(in srgb, var(--forest) 96%, transparent);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  transition: background 0.35s var(--ease), box-shadow 0.35s var(--ease);
}
.site-header::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: -1px; height: 3px;
  background: linear-gradient(90deg, transparent, var(--leaf-bright) 50%, transparent);
  opacity: 0.9;
}
.site-header.is-scrolled { background: var(--forest); box-shadow: 0 10px 30px rgba(15, 39, 64, 0.25); }
.site-header.menu-open { background: var(--forest); border-bottom-color: transparent; }
.site-header.menu-open::after { opacity: 0; }
.site-header__inner { width: min(var(--max), calc(100% - 2rem)); margin-inline: auto; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
.logo-link { display: inline-flex; align-items: center; z-index: 110; line-height: 1; max-width: calc(100% - 4rem); }

.ts-logo { height: auto; color: var(--white); }
.ts-logo--header { width: clamp(156px, 42vw, 238px); }
.site-header.menu-open .logo-link { visibility: hidden; }

.nav-desktop { display: none; align-items: center; gap: 0.2rem; }
.nav-desktop a { position: relative; padding: 0.55rem 0.85rem; font-weight: 600; font-size: 0.98rem; color: #fff; border-radius: var(--leaf-r-sm); transition: color 0.2s, background 0.2s; }
.nav-desktop a:not(.nav-call)::after {
  content: ""; position: absolute; left: 0.85rem; right: 0.85rem; bottom: 0.25rem; height: 2px;
  background: var(--leaf-bright); transform: scaleX(0); transform-origin: left; transition: transform 0.25s var(--ease);
}
.nav-desktop a:not(.nav-call):hover::after { transform: scaleX(1); }
.nav-desktop .nav-call { margin-left: 0.5rem; background: var(--leaf-bright); color: var(--btn-text); font-weight: 700; }
.nav-desktop .nav-call:hover { background: var(--leaf-hover); color: var(--btn-text); }

.menu-toggle {
  margin-left: auto; display: inline-flex; align-items: center; justify-content: center;
  width: 2.9rem; height: 2.9rem; border: 0; border-radius: var(--leaf-r-sm);
  background: rgba(255,255,255,0.08); color: var(--white); cursor: pointer; z-index: 110; flex-shrink: 0;
}
.site-header.menu-open .menu-toggle { background: var(--leaf-bright); color: var(--btn-text); }
.menu-toggle__bars { display: flex; flex-direction: column; gap: 5px; width: 18px; }
.menu-toggle__bars span { display: block; height: 2px; width: 100%; background: currentColor; transition: transform 0.3s var(--ease), opacity 0.3s var(--ease); }
.menu-toggle.is-open .menu-toggle__bars span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.menu-toggle.is-open .menu-toggle__bars span:nth-child(2) { opacity: 0; }
.menu-toggle.is-open .menu-toggle__bars span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.nav-mobile {
  position: fixed; inset: 0 0 auto; height: 100vh; height: 100dvh; overflow-y: auto; z-index: 105;
  background: radial-gradient(circle at 110% 0%, var(--forest-3) 0, transparent 55%), var(--forest);
  display: flex; flex-direction: column; justify-content: center;
  padding: 5.5rem 1.75rem 2rem;
}
.nav-mobile::before {
  content: ""; position: absolute; width: 30rem; height: 30rem; left: -19rem; bottom: -12rem; border-radius: 50%;
  border: 2px solid transparent; border-top-color: rgba(255, 255, 255, 0.1); border-right-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}
.nav-mobile__brand { margin-bottom: 1.6rem; }
.ts-logo--menu { width: min(250px, 70vw); color: var(--white); }
.nav-mobile a {
  position: relative; font-family: var(--display); font-size: clamp(1.9rem, 8.5vw, 2.4rem); font-weight: 700;
  color: var(--white); padding: 0.5rem 0; border-bottom: 1px solid var(--line-dark);
}
.nav-mobile__call {
  color: var(--btn-text) !important; background: var(--leaf-bright); border: 0 !important; border-radius: var(--leaf-r);
  text-align: center; margin-top: 1.5rem; padding: 0.95rem 1rem !important;
  font-family: var(--sans) !important; font-size: 1.3rem !important;
}
.nav-mobile__meta { margin-top: 1.6rem; color: var(--muted-on-dark); font-size: 0.95rem; display: grid; gap: 0.2rem; }
@media (min-width: 900px) {
  .menu-toggle { display: none; }
  .nav-desktop { display: flex; }
}

.hero { position: relative; color: var(--white); }
.hero-scroll { height: 210vh; position: relative; }
.hero-scroll__sticky { position: sticky; top: 0; height: 100svh; min-height: 100svh; overflow: hidden; display: grid; align-items: end; isolation: isolate; }
.hero-video { position: absolute; inset: 0; z-index: 0; background: var(--forest); }
.hero-video__poster, .hero-video__clip { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 60% center; pointer-events: none; }
.hero-video__poster { z-index: 1; }
.hero-video__clip { z-index: 2; }
.hero-video__shade {
  position: absolute; inset: 0; z-index: 3; pointer-events: none;
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--forest) 45%, transparent) 0%, color-mix(in srgb, var(--forest) 12%, transparent) 38%, color-mix(in srgb, var(--forest) 86%, transparent) 100%),
    linear-gradient(90deg, color-mix(in srgb, var(--forest) 70%, transparent) 0%, transparent 62%);
}
.hero-copy { position: relative; z-index: 4; padding: calc(var(--header-h) + 1.5rem) 0 3.25rem; display: grid; gap: 0.9rem; align-content: end; justify-items: start; }
.hero-brand { filter: drop-shadow(0 6px 22px rgba(0, 0, 0, 0.55)); max-width: 100%; }
.ts-logo--hero { width: clamp(240px, 30vw, 360px); color: var(--white); }
.hero-rating { font-size: 0.92rem; font-weight: 600; color: rgba(255, 255, 255, 0.92); }
.hero-rating span { color: var(--leaf-bright); letter-spacing: 0.08em; margin-right: 0.25rem; }
.hero h1 { max-width: 18ch; color: var(--white); font-size: clamp(2rem, 4.6vw, 3.4rem); text-shadow: 0 8px 28px rgba(0, 0, 0, 0.45); }
.hero .lead { color: rgba(255, 255, 255, 0.9); max-width: 36rem; }
.hero .cta-row { margin-top: 0.3rem; }
.hero-scroll-hint {
  position: absolute; right: 1.25rem; bottom: 1.25rem; z-index: 4; margin: 0;
  font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255, 255, 255, 0.82);
  pointer-events: none; display: flex; align-items: center; gap: 0.6rem;
}
.hero-scroll-hint::before { content: ""; width: 0.8rem; height: 0.8rem; background: var(--leaf); border-radius: 0 100% 0 100%; }
.hero-static { position: relative; min-height: 100svh; display: grid; align-items: end; overflow: hidden; }
.hero-static__media { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.hero-static__shade { position: absolute; inset: 0; background: linear-gradient(180deg, color-mix(in srgb, var(--forest) 50%, transparent), color-mix(in srgb, var(--forest) 88%, transparent)); }
.hero-static__copy { position: relative; z-index: 1; padding: calc(var(--header-h) + 2rem) 0 3rem; display: grid; gap: 0.9rem; justify-items: start; }
@media (max-width: 640px) {
  .hero-scroll { height: 190vh; }
  .hero-copy { padding-bottom: 3.5rem; gap: 0.75rem; }
  .hero-video__poster, .hero-video__clip { object-position: 28% center; }
  .hero h1 { font-size: 1.85rem; }
  .hero .lead { font-size: 0.98rem; }
  .hero-scroll-hint { display: none; }
  .hero .cta-row .btn { flex: 1 1 auto; }
}
@media (prefers-reduced-motion: reduce) { .hero-scroll { height: auto; } }

.services-head { display: grid; gap: 1rem; margin-bottom: 2.2rem; }
@media (min-width: 860px) { .services-head { grid-template-columns: 1.1fr 0.9fr; align-items: end; } }
.service-grid { display: grid; gap: 1rem; }
@media (min-width: 640px) { .service-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 960px) { .service-grid { grid-template-columns: repeat(3, 1fr); } }
.service-card {
  position: relative; padding: 1.5rem 1.4rem 1.4rem;
  background: var(--white); border-radius: var(--leaf-r);
  border: 1px solid var(--line); box-shadow: var(--shadow); overflow: hidden;
}
.service-card::before {
  content: ""; position: absolute; left: 0; top: 0; width: 100%; height: 4px;
  background: linear-gradient(90deg, var(--leaf), var(--leaf) 55%, transparent);
  transform: scaleX(0.35); transform-origin: left; transition: transform 0.35s var(--ease);
}
.service-card:hover::before { transform: scaleX(1); }
.service-card__num {
  display: inline-grid; place-items: center; width: 2.4rem; height: 2.4rem; margin-bottom: 0.9rem;
  font-family: var(--display); font-weight: 700; font-size: 0.95rem;
  color: var(--btn-text); background: color-mix(in srgb, var(--leaf) 22%, transparent); border-radius: 0 100% 0 100%;
}
.service-card h3 { font-size: 1.22rem; margin-bottom: 0.45rem; color: var(--ink); }
.service-card p { color: var(--muted); font-size: 0.98rem; }

.about-head { display: grid; gap: 1rem; margin-bottom: 2.2rem; }
@media (min-width: 860px) { .about-head { grid-template-columns: 1.1fr 0.9fr; align-items: end; } }
.review-grid { display: grid; gap: 1rem; }
@media (min-width: 860px) { .review-grid { grid-template-columns: repeat(3, 1fr); } }
.review-card {
  margin: 0; padding: 1.5rem 1.4rem; display: grid; gap: 0.8rem; align-content: start;
  background: var(--forest-2); border: 1px solid var(--line-dark); border-radius: var(--leaf-r);
  border-left: 4px solid var(--leaf);
}
.review-card__stars { color: var(--leaf-bright); letter-spacing: 0.12em; }
.review-card p { color: rgba(255, 255, 255, 0.92); font-size: 1rem; }
.review-card cite { font-style: normal; font-size: 0.85rem; color: var(--muted-on-dark); }
.area-tags { display: flex; flex-wrap: wrap; gap: 0.55rem; margin-top: 1.8rem; }
.area-tag { padding: 0.45rem 0.95rem; border-radius: 999px; border: 1px solid rgba(255, 255, 255, 0.22); color: var(--white); font-size: 0.92rem; font-weight: 500; }
.area-tag--primary { background: var(--leaf-bright); border-color: var(--leaf-bright); color: var(--btn-text); font-weight: 700; }

.quote-shell { display: grid; gap: 1.5rem; align-items: start; }
@media (min-width: 900px) { .quote-shell { grid-template-columns: 0.85fr 1.15fr; gap: 2rem; } }
.quote-shell > div { min-width: 0; }
.quote-aside {
  padding: clamp(1.6rem, 3vw, 2.2rem); background: var(--forest); color: var(--white);
  border-radius: var(--leaf-r); position: relative; overflow: hidden;
}
.quote-aside::after {
  content: ""; position: absolute; width: 16rem; height: 16rem; right: -8rem; bottom: -8rem; border-radius: 0 100% 0 100%;
  background: color-mix(in srgb, var(--leaf) 12%, transparent); pointer-events: none;
}
.quote-aside .eyebrow { color: var(--leaf-bright); }
.quote-aside h2 { font-size: clamp(1.6rem, 3vw, 2.1rem); margin-bottom: 0.7rem; }
.quote-aside p { color: var(--muted-on-dark); }
.quote-aside__call { margin-top: 1.3rem; }
.quote-aside__list { list-style: none; padding: 0; margin: 1.5rem 0 0; display: grid; gap: 0.75rem; position: relative; z-index: 1; }
.quote-aside__list li { display: grid; gap: 0.1rem; padding-top: 0.75rem; border-top: 1px solid var(--line-dark); }
.quote-aside__list strong { font-size: 0.75rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--leaf-bright); }
.quote-aside__list a:hover { color: var(--leaf-bright); }
.leaf-box { background: var(--white); border-radius: var(--leaf-r); border: 1px solid var(--line); box-shadow: var(--shadow); border-top: 4px solid var(--leaf); }
.quote-form { padding: clamp(1.4rem, 3vw, 2rem); }
.form-grid { display: grid; gap: 1rem; }
@media (min-width: 640px) { .form-grid--2 { grid-template-columns: 1fr 1fr; } }
.field { display: grid; gap: 0.35rem; }
.field label { font-size: 0.85rem; font-weight: 700; color: var(--ink); }
.field input, .field textarea {
  width: 100%; padding: 0.8rem 0.95rem; font: inherit; color: var(--ink);
  background: var(--mist); border: 1.5px solid transparent; border-radius: 10px 3px 10px 3px;
  transition: border-color 0.2s, background 0.2s;
}
.field input::placeholder, .field textarea::placeholder { color: #7b827d; }
.field input:focus, .field textarea:focus { outline: none; border-color: var(--leaf); background: var(--white); }
.field textarea { min-height: 7.5rem; resize: vertical; }
.form-actions { margin-top: 1.25rem; }
.form-note { margin-top: 0.9rem; font-size: 0.88rem; color: var(--muted); }
@media (max-width: 639px) { .btn--block-sm { width: 100%; } }

.site-footer { background: var(--forest); color: var(--muted-on-dark); }
.footer-cta { background: var(--leaf-bright); color: var(--btn-text); }
.footer-cta__inner { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.8rem 1.5rem; padding: 1.4rem 0; }
.footer-cta__line { font-family: var(--display); font-weight: 700; font-size: clamp(1.15rem, 2.4vw, 1.5rem); }
.footer-cta__line span { font-family: var(--sans); font-weight: 600; font-size: 0.95rem; display: block; opacity: 0.85; }
.footer-cta__call { display: inline-flex; padding: 0.8rem 1.4rem; background: var(--forest); color: var(--white); font-weight: 700; border-radius: var(--leaf-r-sm); }
.footer-grid { display: grid; gap: 2rem; padding: 3rem 0 2rem; }
@media (min-width: 760px) { .footer-grid { grid-template-columns: 1.4fr 0.8fr 1fr; } }
.footer-brand { margin-bottom: 0.9rem; }
.ts-logo--footer { width: 220px; color: var(--white); }
.footer-brand-col p { max-width: 22rem; font-size: 0.95rem; }
.site-footer h3 { font-family: var(--sans); font-size: 0.78rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--leaf-bright); margin-bottom: 0.8rem; }
.footer-links { display: grid; gap: 0.45rem; font-size: 0.95rem; }
.site-footer a:hover { color: var(--leaf-bright); }
.footer-bottom { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.5rem; padding: 1.2rem 0 1.6rem; border-top: 1px solid var(--line-dark); font-size: 0.85rem; }
.footer-credit { width: 100%; margin-top: 0.35rem; font-size: 0.8rem; color: rgba(255,255,255,0.55); }
.footer-credit a { color: var(--leaf-bright); }

.brand-logo--mask { display: block; background: currentColor; -webkit-mask-size: contain; mask-size: contain; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-position: left center; mask-position: left center; }
img.brand-logo { height: auto; }
.brand-logo--word { display: inline-flex; align-items: center; gap: 0.55em; width: auto !important; max-width: 100%; color: var(--ink); line-height: 1; }
.brand-logo__icon { display: inline-flex; width: 2.3em; height: 2.3em; flex: none; }
.brand-logo__icon svg { width: 100%; height: 100%; }
.brand-logo__text { display: grid; gap: 0.28em; min-width: 0; }
.brand-logo__name { font-size: 1.45em; white-space: nowrap; font-family: var(--display); font-weight: 800; text-transform: uppercase; letter-spacing: 0.02em; }
.brand-logo__name strong { color: var(--leaf-bright); margin-right: 0.12em; font-style: normal; }
.brand-logo__name em { font-style: normal; font-weight: 700; }
.brand-logo__tag { font-family: var(--sans); font-size: 0.62em; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; opacity: 0.75; white-space: nowrap; }
.ts-logo--header.brand-logo--word { font-size: clamp(0.78rem, 3.2vw, 1.0rem); color: #fff; }
.ts-logo--hero.brand-logo--word { font-size: clamp(1.05rem, 2.2vw, 1.45rem); color: #fff; }
.ts-logo--footer.brand-logo--word { font-size: 1.0rem; color: #fff; }
.ts-logo--menu.brand-logo--word { font-size: 1.05rem; color: #fff; }
.site-header .brand-logo__name strong { color: var(--leaf-bright); }

/* Long business names — wrap cleanly at 390px */
.brand-logo--long .brand-logo__name {
  white-space: normal;
  line-height: 1.05;
  max-width: min(16ch, 62vw);
}
.brand-logo--long .brand-logo__tag {
  white-space: normal;
  letter-spacing: 0.12em;
  max-width: 18ch;
}
.ts-logo--header.brand-logo--long { font-size: clamp(0.58rem, 2.5vw, 0.88rem); width: auto; max-width: min(240px, 68vw); }
.ts-logo--hero.brand-logo--long { font-size: clamp(0.88rem, 3.4vw, 1.25rem); width: auto; max-width: min(340px, 90vw); }
.ts-logo--footer.brand-logo--long,
.ts-logo--menu.brand-logo--long { font-size: clamp(0.85rem, 3vw, 1.0rem); width: auto; max-width: min(280px, 80vw); }
@media (max-width: 400px) {
  .ts-logo--header.brand-logo--word { font-size: clamp(0.55rem, 2.4vw, 0.78rem); }
  .ts-logo--header.brand-logo--long { font-size: 0.55rem; }
  .brand-logo--long .brand-logo__name { max-width: 14ch; letter-spacing: 0.01em; }
  .brand-logo__icon { width: 2em; height: 2em; }
}

.fact-card { display: grid; gap: 0.5rem; align-content: start; }
.fact-card__big { font-family: var(--display); font-size: clamp(1.8rem, 3.4vw, 2.4rem); color: var(--leaf-bright); line-height: 1; }

@media (max-width: 720px) { .hero-video__poster, .hero-video__clip { object-position: 46% center; } }
`;
  fs.writeFileSync(path.join(ROOT, slug, "src/index.css"), css);
}

function writeLogo(slug) {
  const content = `import { logo } from "../data";

/**
 * Original styled text wordmark — no client logos or scraped brand images.
 * Placement (header / hero / footer / menu) picks the treatment from data.logo.spec.
 */
export default function Logo({ className = "", title = "" }) {
  const place = (className.match(/ts-logo--(\\w+)/) || [])[1] || "header";
  const spec = logo.spec[place] || logo.spec.header;
  const long = logo.long ? " brand-logo--long" : "";
  const cls = \`ts-logo brand-logo brand-logo--\${spec.type}\${long} \${className}\`.trim();
  const w = logo.word;
  return (
    <span className={cls} role="img" aria-label={title}>
      <span className="brand-logo__icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: logo.icon }} />
      <span className="brand-logo__text" aria-hidden="true">
        <span className="brand-logo__name">
          <strong>{w.a}</strong> <em>{w.b}</em>
        </span>
        <small className="brand-logo__tag">{w.tag}</small>
      </span>
    </span>
  );
}
`;
  fs.writeFileSync(path.join(ROOT, slug, "src/components/Logo.jsx"), content);
}

function writeVideoHero(slug, s) {
  const content = `import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BASE, brand, hero, heroRating, scrollHint } from "../data";
import Logo from "./Logo";

/**
 * Scroll-scrubbed hero — licensed stock only.
 * Source: ${s.videoPage}
 * File: /${slug}/videos/hero-${s.videoId}-scrub.mp4
 */
const SRC = \`\${BASE}/videos/hero-${s.videoId}-scrub.mp4\`;
const POSTER = \`\${BASE}/videos/poster-${s.videoId}.jpg\`;

function trackProgress(track) {
  if (!track) return 0;
  const rect = track.getBoundingClientRect();
  const total = track.offsetHeight - window.innerHeight;
  if (total <= 1) return 0;
  return Math.min(1, Math.max(0, -rect.top / total));
}

async function unlockVideo(video) {
  if (!video || video.dataset.unlocked === "1") return;
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  try {
    const p = video.play();
    if (p && typeof p.then === "function") await p;
    video.pause();
    video.dataset.unlocked = "1";
  } catch {
    /* retry on first user gesture */
  }
}

export default function VideoHero() {
  const reduce = useReducedMotion();
  const trackRef = useRef(null);
  const videoRef = useRef(null);
  const readyRef = useRef(false);
  const pendingRef = useRef(0);
  const rafRef = useRef(0);
  const [hintOpacity, setHintOpacity] = useState(0.9);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (reduce) return undefined;

    const track = trackRef.current;
    const video = videoRef.current;
    if (!track || !video) return undefined;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("muted", "");

    const applyScrub = (p) => {
      pendingRef.current = p;
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const el = videoRef.current;
        const progress = pendingRef.current;
        setHintOpacity(progress < 0.08 ? 0.9 : progress < 0.2 ? 0.45 : 0);

        if (!el || !readyRef.current) return;
        if (!Number.isFinite(el.duration) || el.duration <= 0) return;

        const next = Math.min(Math.max(progress, 0), 0.999) * el.duration;
        if (Math.abs(el.currentTime - next) < 0.04) return;

        try {
          el.currentTime = next;
        } catch {
          /* ignore seek race */
        }
      });
    };

    const onMeta = () => {
      readyRef.current = true;
      setVideoReady(true);
      unlockVideo(video).then(() => applyScrub(trackProgress(track)));
    };

    if (video.readyState >= 1) onMeta();
    else video.addEventListener("loadedmetadata", onMeta);

    const onScrollOrResize = () => {
      unlockVideo(video);
      applyScrub(trackProgress(track));
    };

    const unlockOnce = () => {
      unlockVideo(video).then(() => applyScrub(trackProgress(track)));
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    window.addEventListener("wheel", unlockOnce, { passive: true, once: true });
    window.addEventListener("touchstart", unlockOnce, { passive: true, once: true });
    window.addEventListener("pointerdown", unlockOnce, { passive: true, once: true });

    applyScrub(trackProgress(track));

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("wheel", unlockOnce);
      window.removeEventListener("touchstart", unlockOnce);
      window.removeEventListener("pointerdown", unlockOnce);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reduce]);

  const copy = (
    <>
      <div className="hero-brand">
        <Logo className="ts-logo--hero" title={brand.name} />
      </div>
      <p className="hero-rating">
        <span aria-hidden="true">★★★★★</span> {heroRating}
      </p>
      <h1>{hero.headline}</h1>
      <p className="lead">{hero.support}</p>
      <div className="cta-row">
        <a className="btn btn--leaf" href={\`tel:\${brand.phoneTel}\`}>
          Call {brand.phoneDisplay}
        </a>
        <a className="btn btn--ghost" href="#quote">
          Get a quote
        </a>
      </div>
    </>
  );

  if (reduce) {
    return (
      <section className="hero" id="top" aria-label="Hero">
        <div className="hero-static">
          <img
            className="hero-static__media"
            src={POSTER}
            alt=""
            width={1280}
            height={720}
          />
          <div className="hero-static__shade" aria-hidden="true" />
          <div className="hero-static__copy wrap">{copy}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero-scroll" ref={trackRef}>
        <div className="hero-scroll__sticky">
          <div className="hero-video" aria-hidden="true">
            {!videoReady && (
              <img
                className="hero-video__poster"
                src={POSTER}
                alt=""
                width={1280}
                height={720}
                decoding="async"
              />
            )}
            <video
              ref={videoRef}
              className="hero-video__clip"
              src={SRC}
              muted
              playsInline
              preload="auto"
              poster={POSTER}
            />
            <div className="hero-video__shade" />
          </div>

          <div className="hero-copy wrap">{copy}</div>

          <motion.p
            className="hero-scroll-hint"
            style={{ opacity: hintOpacity }}
            aria-hidden="true"
          >
            {scrollHint}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
`;
  fs.writeFileSync(path.join(ROOT, slug, "src/components/VideoHero.jsx"), content);
}

function writePublic(slug, s) {
  const pub = path.join(ROOT, slug, "public");
  fs.mkdirSync(path.join(pub, "videos"), { recursive: true });

  fs.writeFileSync(
    path.join(pub, "robots.txt"),
    `User-agent: *\nAllow: /\nSitemap: https://kaamtasker.com/${slug}/sitemap.xml\n`
  );
  fs.writeFileSync(
    path.join(pub, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>https://kaamtasker.com/${slug}/</loc><changefreq>monthly</changefreq></url>\n</urlset>\n`
  );
  fs.writeFileSync(
    path.join(pub, ".htaccess"),
    `# ${s.brand.name} — lives under public_html/kaamtasker.com/${slug}/\n# Same Namecheap host as the other demo sites. Do not overwrite any other /<slug>/ folder.\n\nDirectoryIndex index.html\nOptions -Indexes\n\n<IfModule mod_headers.c>\n  Header set X-Content-Type-Options "nosniff"\n  Header set Referrer-Policy "strict-origin-when-cross-origin"\n</IfModule>\n\n<IfModule mod_rewrite.c>\n  RewriteEngine On\n  RewriteBase /${slug}/\n  RewriteRule ^index\\.html$ - [L]\n  RewriteCond %{REQUEST_FILENAME} !-f\n  RewriteCond %{REQUEST_URI} \\.(png|jpe?g|gif|webp|svg|ico|mp4|webm|pdf|map|woff2?|ttf|eot|css|js)$ [NC]\n  RewriteRule ^ - [R=404,L]\n  RewriteCond %{REQUEST_FILENAME} !-f\n  RewriteCond %{REQUEST_FILENAME} !-d\n  RewriteRule . /${slug}/index.html [L]\n</IfModule>\n`
  );
  fs.writeFileSync(
    path.join(pub, "videos/LICENSE.md"),
    `# Licensed stock video — ${s.videoSource}\n\nHero uses **one** licensed clip (${s.videoSource} free licence / commercial OK).\n\n| File | Role |\n|------|------|\n| \`hero-${s.videoId}-scrub.mp4\` | Hero scrub — re-encoded (dense keyframes) for scroll seek |\n| \`poster-${s.videoId}.jpg\` | Still from the clip (poster / reduced-motion) |\n\nPage: [${s.videoNote}](${s.videoPage})\n`
  );

  const vidSrc = path.join(STOCK, `hero-${s.videoId}-scrub.mp4`);
  const posterSrc = path.join(STOCK, `poster-${s.videoId}.jpg`);
  if (!fs.existsSync(vidSrc)) throw new Error(`missing video ${vidSrc}`);
  fs.copyFileSync(vidSrc, path.join(pub, "videos", `hero-${s.videoId}-scrub.mp4`));
  fs.copyFileSync(posterSrc, path.join(pub, "videos", `poster-${s.videoId}.jpg`));

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${s.colors.forest}"/>
  <text x="32" y="40" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="${s.initials.length > 2 ? 16 : 22}" font-weight="800" fill="${s.colors.leafBright}">${s.initials}</text>
</svg>`;
  fs.writeFileSync(path.join(pub, "favicon.svg"), svg);

  const py = `
from PIL import Image, ImageDraw, ImageFont
import os
forest = ${JSON.stringify(s.colors.forest)}
leaf = ${JSON.stringify(s.colors.leafBright)}
initials = ${JSON.stringify(s.initials)}
out_dir = ${JSON.stringify(pub)}

def make(size, path, radius_ratio=0.22):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    r = int(size * radius_ratio)
    draw.rounded_rectangle((0, 0, size-1, size-1), radius=r, fill=forest)
    font_size = int(size * (0.34 if len(initials) > 2 else 0.42))
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
    except Exception:
        font = ImageFont.load_default()
    bbox = draw.textbbox((0, 0), initials, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (size - tw) / 2 - bbox[0]
    y = (size - th) / 2 - bbox[1] - size * 0.02
    draw.text((x, y), initials, fill=leaf, font=font)
    img.save(path)

make(32, os.path.join(out_dir, "favicon-32.png"))
make(180, os.path.join(out_dir, "apple-touch-icon.png"))
make(512, os.path.join(out_dir, "icon-512.png"))
print("icons ok")
`;
  const r = spawnSync("python3", ["-c", py], { encoding: "utf8" });
  if (r.status !== 0) throw new Error(`icons failed: ${r.stderr || r.stdout}`);
}

function writeIndexHtml(slug, s) {
  const html = `<!doctype html>
<html lang="en-AU">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${s.title}</title>
    <meta name="description" content="${s.description.replace(/"/g, "&quot;")}" />
    <link rel="canonical" href="https://kaamtasker.com/${slug}/" />
    <link rel="icon" type="image/svg+xml" href="/${slug}/favicon.svg" />
    <link rel="icon" type="image/png" sizes="32x32" href="/${slug}/favicon-32.png" />
    <link rel="apple-touch-icon" href="/${slug}/apple-touch-icon.png" />
    <meta name="theme-color" content="${s.colors.forest}" />
    <meta property="og:title" content="${s.brand.name}" />
    <meta property="og:description" content="${s.description.replace(/"/g, "&quot;")}" />
    <meta property="og:image" content="https://kaamtasker.com/${slug}/icon-512.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=${s.fonts.google}&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;
  fs.writeFileSync(path.join(ROOT, slug, "index.html"), html);
}

function writeMeta(slug, s, index) {
  fs.writeFileSync(
    path.join(ROOT, slug, "package.json"),
    JSON.stringify(
      {
        name: slug,
        private: true,
        version: "1.0.0",
        description: `${s.brand.name} — Vite + React + Framer Motion for kaamtasker.com/${slug}/`,
        type: "module",
        scripts: {
          dev: "vite",
          build: "vite build",
          preview: `vite preview --host 127.0.0.1 --port ${4400 + index}`,
        },
        dependencies: {
          "framer-motion": "^12.23.12",
          react: "^19.1.1",
          "react-dom": "^19.1.1",
        },
        devDependencies: {
          "@vitejs/plugin-react": "^5.0.2",
          vite: "^7.1.5",
        },
      },
      null,
      2
    ) + "\n"
  );
  fs.writeFileSync(
    path.join(ROOT, slug, "vite.config.js"),
    `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/${slug}/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
  },
  preview: {
    port: ${4400 + index},
  },
});
`
  );
  fs.writeFileSync(
    path.join(ROOT, slug, "README.md"),
    `# ${s.brand.name}

Demo site for kaamtasker.com/${slug}/. Original wordmark; licensed stock hero only (see \`public/videos/LICENSE.md\`). Facts from batch 2026-10-19 JSON.

- Hero: ${s.videoSource} — ${s.videoPage}
- Palette: ${s.colors.forest} / ${s.colors.leafBright}

\`\`\`
npm ci && npm run build   # dist/ → public_html/kaamtasker.com/${slug}/
\`\`\`
`
  );
  fs.writeFileSync(
    path.join(ROOT, slug, "DEPLOY.md"),
    `# Deploy

Upload \`dist/\` (including \`.htaccess\`) to \`public_html/kaamtasker.com/${slug}/\`. Never overwrite another \`/<slug>/\` folder.
`
  );
}

function cleanExtras(slug) {
  const brandDir = path.join(ROOT, slug, "public/brand");
  if (fs.existsSync(brandDir)) fs.rmSync(brandDir, { recursive: true, force: true });
  const vidDir = path.join(ROOT, slug, "public/videos");
  if (fs.existsSync(vidDir)) {
    for (const f of fs.readdirSync(vidDir)) {
      if (f.startsWith("hero-46079") || f.startsWith("poster-46079")) {
        fs.unlinkSync(path.join(vidDir, f));
      }
    }
  }
  const dist = path.join(ROOT, slug, "dist");
  if (fs.existsSync(dist)) fs.rmSync(dist, { recursive: true, force: true });
}

function main() {
  const slugs = Object.keys(SITES);
  slugs.forEach((slug, i) => {
    const s = SITES[slug];
    console.log("scaffolding", slug);
    const dest = path.join(ROOT, slug);
    if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true, force: true });
    copyDir(path.join(ROOT, TEMPLATE), dest);
    cleanExtras(slug);
    writeData(slug, s);
    writeCss(slug, s);
    writeLogo(slug);
    writeVideoHero(slug, s);
    writePublic(slug, s);
    writeIndexHtml(slug, s);
    writeMeta(slug, s, i);
  });

  const report = {};
  for (const [slug, s] of Object.entries(SITES)) {
    report[slug] = {
      primary: s.colors.leaf,
      accent: s.colors.leafBright,
      dark: s.colors.forest,
      buttonText: s.colors.buttonText,
      pageBg: s.colors.pageBg,
      media: s.videoPage,
    };
  }
  fs.writeFileSync(
    path.join(ROOT, "scripts/batch-2026-10-19-palettes.json"),
    JSON.stringify(report, null, 2) + "\n"
  );
  console.log("done", slugs.length, "sites");
}

main();
