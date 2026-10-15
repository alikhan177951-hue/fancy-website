#!/usr/bin/env node
/**
 * Scaffold batch-2026-10-16 roofing + tiling outreach sites.
 * Clones final-feast-pest structure; original wordmarks; licensed stock heroes only.
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = "/workspace";
const TEMPLATE = "final-feast-pest";
const STOCK = "/tmp/stock-encoded";

const SITES = {
  "western-region-rooftiles": {
    brand: {
      name: "Western Region Rooftiles",
      shortName: "Western Region",
      legal: "Western Region Rooftiles",
      phoneDisplay: "0432 445 118",
      phoneTel: "+61432445118",
      address: "23 Collins Rd, Melton VIC 3337",
      addressShort: "Melton",
      hours: "Weekdays · closes 5 pm",
      owner: "Western Region Rooftiles",
      rating: "5.0",
      reviewCount: null,
    },
    mapsQuery: "Western+Region+Rooftiles+Melton",
    mapsUrl:
      "https://www.google.com/maps/place/Western+Region+Rooftiles/@-37.6897369,144.5962993,17z",
    services: [
      { slug: "new", title: "New Tiled Roofs", summary: "Full tiled roof installs for new builds and replacements." },
      { slug: "reroof", title: "Re-roofing", summary: "Strip and re-tile existing roofs with concrete or terracotta." },
      { slug: "tiles", title: "Concrete & Terracotta Tiles", summary: "Monier concrete and Wunderlich terracotta tile options." },
      { slug: "colour", title: "Roof Tile Colour Selection", summary: "Help choosing tile colours that suit the home." },
      { slug: "quotes", title: "Free Quotes", summary: "On-site quotes for Melton and the western region." },
    ],
    areasPrimary: ["Melton", "Melton South", "Melton West"],
    areasWider: ["Rockbank", "Caroline Springs", "Hillside", "Bacchus Marsh", "Diggers Rest"],
    facts: [
      { big: "30+", small: "Years in the roofing industry" },
      { big: "CSR", small: "Accredited CSR Roofing Specialist" },
      { big: "5.0★", small: "Google rating · Melton" },
    ],
    hero: {
      headline: "Tiled roofs built for Melton homes.",
      support:
        "Western Region Rooftiles — new tiled roofs, re-roofing and colour selection. Call 0432 445 118.",
    },
    heroRating: "5.0-star Google rating · Melton",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Roof tile work.",
      servicesLead: "Melton and the western region. Call 0432 445 118.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating from Melton.",
      aboutLead:
        "Over 30 years in roofing. Accredited CSR Roofing Specialist at 23 Collins Rd, Melton — weekdays to 5 pm.",
      quoteHeading: "Request a free roof quote.",
      quoteArea: "Melton & western region",
      detailsPlaceholder: "Suburb, roof type (new, re-roof, colour) and preferred day…",
      footerCtaLine: "Need a tiled roof quote?",
      footerCtaSub: "Call Western Region Rooftiles.",
      footerBlurb: "New tiled roofs and re-roofing across Melton and the western region.",
      footerPlace: "Melton VIC 3337",
    },
    word: { a: "Western Region", b: "Rooftiles", tag: "Melton" },
    initials: "WR",
    colors: {
      forest: "#2a1a14",
      forest2: "#3d281e",
      forest3: "#523528",
      leaf: "#c45c3a",
      leafBright: "#e8a06a",
      leafHover: "#f0b888",
      leafDeep: "#9a3f24",
      mist: "#f7efe6",
      buttonText: "#1a100c",
      pageBg: "#fbf6f0",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 28l18-14 18 14v14H6V28z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M14 30h20M14 36h20" stroke="#e8a06a" stroke-width="2.6" stroke-linecap="round"/></svg>`,
    title: "Western Region Rooftiles · Melton tiled roofs",
    description:
      "New tiled roofs and re-roofing in Melton. Concrete and terracotta tiles. 5.0-star Google rating. Call 0432 445 118.",
    quoteMessage: "Hi, I'd like a quote from Western Region Rooftiles.",
    videoId: "7983305",
    videoSource: "Pexels",
    videoPage: "https://www.pexels.com/video/a-person-transporting-bricks-using-a-wheelbarrow-7983305/",
    videoNote: "Roof tiles on a wheelbarrow at a construction site",
    fonts: { display: "Oswald", sans: "Source Sans 3", google: "Oswald:wght@500;600;700&family=Source+Sans+3:wght@400;600;700" },
  },

  "high-quality-roofing": {
    brand: {
      name: "High Quality Roofing Restoration",
      shortName: "High Quality Roofing",
      legal: "High Quality Roofing Restoration",
      phoneDisplay: "0425 797 779",
      phoneTel: "+61425797779",
      address: "Point Cook VIC",
      addressShort: "Point Cook",
      hours: "Mon–Sun 7:30am–8:30pm · text for 24-hour response",
      owner: "Lisandro",
      rating: "5.0",
      reviewCount: null,
    },
    mapsQuery: "High+Quality+Roofing+Restoration+Point+Cook",
    mapsUrl:
      "https://www.google.com/maps/place/High+Quality+Roofing+Restoration+and+Repairs/@-37.9725665,144.978303,17z",
    services: [
      { slug: "restore", title: "Roof Restoration", summary: "Full restoration to bring tired roofs back to life." },
      { slug: "repairs", title: "Roof Repairs", summary: "Leak fixes and damaged tile repairs." },
      { slug: "maint", title: "Roof Maintenance", summary: "Scheduled upkeep to keep the roof weather-tight." },
      { slug: "bedding", title: "Re-bedding & Re-pointing", summary: "Ridge cap re-bedding and flexible pointing." },
      { slug: "emergency", title: "Emergency Call-outs", summary: "Urgent call-outs when it is safe to work." },
      { slug: "quote", title: "Free On-site Quote", summary: "On-site quotes across Point Cook and surrounds." },
    ],
    areasPrimary: ["Point Cook", "Deer Park", "Werribee"],
    areasWider: ["Hoppers Crossing", "Tarneit", "Altona Meadows", "Sunshine", "Melton"],
    facts: [
      { big: "45+", small: "Years combined experience" },
      { big: "Family", small: "Miguel and his son Lisandro" },
      { big: "5.0★", small: "Google rating · Point Cook" },
    ],
    hero: {
      headline: "Roof restoration across Point Cook.",
      support:
        "High Quality Roofing Restoration — repairs, re-pointing and free on-site quotes. Call or text Lisandro on 0425 797 779.",
    },
    heroRating: "5.0-star Google rating · Point Cook",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Restoration & repairs.",
      servicesLead: "Point Cook, Deer Park and Melbourne surrounds. 0425 797 779.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · family-run.",
      aboutLead:
        "Miguel and Lisandro — over 45 years combined. Open Mon–Sun 7:30am–8:30pm; text for a 24-hour response.",
      quoteHeading: "Book a free on-site quote.",
      quoteArea: "Point Cook, Deer Park & surrounds",
      detailsPlaceholder: "Suburb, issue (leak, restore, re-point) and urgency…",
      footerCtaLine: "Roof looking tired?",
      footerCtaSub: "Call High Quality Roofing Restoration.",
      footerBlurb: "Family-run roof restoration and repairs from Point Cook across Melbourne surrounds.",
      footerPlace: "Point Cook VIC",
    },
    word: { a: "High Quality", b: "Roofing", tag: "Point Cook" },
    initials: "HQ",
    colors: {
      forest: "#0b1c33",
      forest2: "#122844",
      forest3: "#1a3658",
      leaf: "#e85d04",
      leafBright: "#ff7a1a",
      leafHover: "#ff9447",
      leafDeep: "#c44a00",
      mist: "#eef3f9",
      buttonText: "#0b1c33",
      pageBg: "#f5f8fc",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 30l16-14 16 14" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 28v12h20V28" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="24" cy="18" r="3" fill="#ff7a1a"/></svg>`,
    title: "High Quality Roofing Restoration · Point Cook",
    description:
      "Roof restoration and repairs in Point Cook, Deer Park and surrounds. 5.0-star Google rating. Call Lisandro 0425 797 779.",
    quoteMessage: "Hi Lisandro, I'd like a quote from High Quality Roofing Restoration.",
    videoId: "6160419",
    videoSource: "Pexels",
    videoPage: "https://www.pexels.com/video/man-washing-floor-with-water-pressure-machine-6160419/",
    videoNote: "Pressure washing — restoration cleaning motion",
    fonts: { display: "Oswald", sans: "Source Sans 3", google: "Oswald:wght@500;600;700&family=Source+Sans+3:wght@400;600;700" },
  },

  "expert-roofing-wyndham": {
    brand: {
      name: "Expert Roofing Wyndham",
      shortName: "Expert Roofing",
      legal: "Expert Roofing Wyndham",
      phoneDisplay: "0424 142 207",
      phoneTel: "+61424142207",
      address: "Hoppers Crossing VIC",
      addressShort: "Hoppers Crossing",
      hours: "Quotes by phone · Wyndham & Melbourne",
      owner: "Expert Roofing Wyndham",
      rating: "5.0",
      reviewCount: null,
    },
    mapsQuery: "Expert+Roofing+Wyndham+Hoppers+Crossing",
    mapsUrl:
      "https://www.google.com/maps/place/Expert+Roofing+Wyndham/@-37.8806861,144.6954932,17z",
    services: [
      { slug: "leaks", title: "Find & Stop Leaks", summary: "Locate leaks and seal them before damage spreads." },
      { slug: "ridge", title: "Re-bedding Ridge Caps", summary: "Ridge caps re-bedded for a secure finish." },
      { slug: "point", title: "Re-pointing", summary: "Flexible pointing on ridge lines and caps." },
      { slug: "gutters", title: "Gutter Cleaning", summary: "Clear gutters so water runs freely." },
      { slug: "solar", title: "Solar Panel Cleaning", summary: "Panel cleaning as part of roof care." },
      { slug: "general", title: "General Roofing", summary: "Everyday roof repairs across Wyndham." },
    ],
    areasPrimary: ["Hoppers Crossing", "Werribee", "Wyndham Vale"],
    areasWider: ["Point Cook", "Tarneit", "Truganina", "Laverton", "Altona Meadows"],
    facts: [
      { big: "Local", small: "Based in Hoppers Crossing" },
      { big: "Qualified", small: "Qualified roof tilers" },
      { big: "5.0★", small: "Google rating · Wyndham" },
    ],
    hero: {
      headline: "Roof tilers for Wyndham homes.",
      support:
        "Expert Roofing Wyndham — leaks, re-pointing, gutters and solar cleaning. Call 0424 142 207.",
    },
    heroRating: "5.0-star Google rating · Hoppers Crossing",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Wyndham roof jobs.",
      servicesLead: "Hoppers Crossing and Melbourne. Call 0424 142 207.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · locally owned.",
      aboutLead:
        "Qualified roof tilers based in Hoppers Crossing, servicing Wyndham and Melbourne.",
      quoteHeading: "Ask for a roof quote.",
      quoteArea: "Wyndham & Melbourne",
      detailsPlaceholder: "Suburb, job (leak, ridge, gutters) and preferred day…",
      footerCtaLine: "Need a Wyndham roof tiler?",
      footerCtaSub: "Call Expert Roofing Wyndham.",
      footerBlurb: "Locally owned roofing from Hoppers Crossing across Wyndham and Melbourne.",
      footerPlace: "Hoppers Crossing VIC",
    },
    word: { a: "Expert Roofing", b: "Wyndham", tag: "Hoppers Crossing" },
    initials: "ER",
    colors: {
      forest: "#1c242c",
      forest2: "#28323c",
      forest3: "#36424e",
      leaf: "#0d9488",
      leafBright: "#2dd4bf",
      leafHover: "#5eead4",
      leafDeep: "#0f766e",
      mist: "#eef6f5",
      buttonText: "#0f1a1a",
      pageBg: "#f4faf9",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 26l16-12 16 12v14H8V26z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M18 34l4 4 10-12" fill="none" stroke="#2dd4bf" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: "Expert Roofing Wyndham · Hoppers Crossing",
    description:
      "Roof leaks, re-pointing, gutters and solar cleaning in Wyndham. 5.0-star Google rating. Call 0424 142 207.",
    quoteMessage: "Hi, I'd like a quote from Expert Roofing Wyndham.",
    videoId: "13361432",
    videoSource: "Pexels",
    videoPage: "https://www.pexels.com/video/roofer-working-on-roofs-13361432/",
    videoNote: "Roofer working on a residential roof",
    fonts: { display: "Oswald", sans: "Source Sans 3", google: "Oswald:wght@500;600;700&family=Source+Sans+3:wght@400;600;700" },
  },

  "major-roofs": {
    brand: {
      name: "Major Roofs",
      shortName: "Major Roofs",
      legal: "Major Roofs",
      phoneDisplay: "0457 562 993",
      phoneTel: "+61457562993",
      address: "Werribee VIC",
      addressShort: "Werribee",
      hours: "Quotes by phone · Werribee & Melbourne suburbs",
      owner: "Major Roofs",
      rating: "5.0",
      reviewCount: null,
    },
    mapsQuery: "Major+Roofs+Werribee",
    mapsUrl: "https://www.google.com/maps/place/Major+Roofs/@-37.8951815,144.6328694,17z",
    services: [
      { slug: "restore", title: "Roof Restorations", summary: "Full restorations for weathered tiled roofs." },
      { slug: "repairs", title: "Roof Repairs", summary: "Repairs that stop leaks and replace damaged tiles." },
      { slug: "gutters", title: "Gutter & Valley Cleaning", summary: "Gutters and valleys cleared of leaf and debris." },
      { slug: "pressure", title: "Roof Pressure Cleaning", summary: "High-pressure cleaning to lift moss and grime." },
      { slug: "paint", title: "Roof Painting", summary: "Three-coat roof painting system." },
    ],
    areasPrimary: ["Werribee", "Hoppers Crossing", "Point Cook"],
    areasWider: ["Tarneit", "Wyndham Vale", "Laverton", "Altona", "Sunshine"],
    facts: [
      { big: "10+", small: "Years of roofing experience" },
      { big: "Werribee", small: "Based in Werribee" },
      { big: "5.0★", small: "Google rating" },
    ],
    hero: {
      headline: "Pressure-clean and restore Werribee roofs.",
      support: "Major Roofs — restorations, repairs, gutters and three-coat painting. Call 0457 562 993.",
    },
    heroRating: "5.0-star Google rating · Werribee",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Roof care services.",
      servicesLead: "Werribee and Melbourne’s suburbs. Call 0457 562 993.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · 10+ years.",
      aboutLead: "Based in Werribee with over 10 years of roofing experience across Melbourne’s suburbs.",
      quoteHeading: "Get a roof quote.",
      quoteArea: "Werribee & Melbourne suburbs",
      detailsPlaceholder: "Suburb, service (clean, restore, paint) and roof type…",
      footerCtaLine: "Ready for a cleaner roof?",
      footerCtaSub: "Call Major Roofs.",
      footerBlurb: "Roof restorations, pressure cleaning and painting from Werribee across Melbourne’s suburbs.",
      footerPlace: "Werribee VIC",
    },
    word: { a: "Major", b: "Roofs", tag: "Werribee" },
    initials: "MR",
    colors: {
      forest: "#0c2340",
      forest2: "#143156",
      forest3: "#1c406c",
      leaf: "#c9920a",
      leafBright: "#f0c gener 014",
      leafHover: "#f5d24a",
      leafDeep: "#9a7008",
      mist: "#f4f1e8",
      buttonText: "#0c2340",
      pageBg: "#faf8f2",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 30l18-16 18 16" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 28v14h24V28" fill="none" stroke="currentColor" stroke-width="3"/><path d="M20 22c2-6 4-8 4-8s2 2 4 8" fill="none" stroke="#f0c014" stroke-width="2.8" stroke-linecap="round"/></svg>`,
    title: "Major Roofs · Werribee roof restoration",
    description:
      "Roof restorations, pressure cleaning and painting in Werribee. 5.0-star Google rating. Call 0457 562 993.",
    quoteMessage: "Hi, I'd like a quote from Major Roofs.",
    videoId: "6160419",
    videoSource: "Pexels",
    videoPage: "https://www.pexels.com/video/man-washing-floor-with-water-pressure-machine-6160419/",
    videoNote: "Pressure washing motion for roof cleaning",
    fonts: { display: "Oswald", sans: "Source Sans 3", google: "Oswald:wght@500;600;700&family=Source+Sans+3:wght@400;600;700" },
  },

  "adams-roofing": {
    brand: {
      name: "Adam's Roofing Restorations",
      shortName: "Adam's Roofing",
      legal: "Adam's Roofing Restorations",
      phoneDisplay: "0407 456 540",
      phoneTel: "+61407456540",
      address: "Altona Meadows VIC 3028",
      addressShort: "Altona Meadows",
      hours: "Quotes by phone · domestic & commercial",
      owner: "Adam",
      rating: "5.0",
      reviewCount: null,
    },
    mapsQuery: "Adam%27s+Roofing+Restorations+Altona+Meadows",
    mapsUrl:
      "https://www.google.com/maps/place/Adam%27s+Roofing+Restorations/@-37.7669529,144.5223108,17z",
    services: [
      { slug: "repairs", title: "Roof Repairs & Leak Fixes", summary: "Find leaks and repair damaged sections." },
      { slug: "restore", title: "Roof Restorations", summary: "Full restorations for tired domestic roofs." },
      { slug: "new", title: "New Roofs & Extensions", summary: "New roofs and extension roofing." },
      { slug: "skylights", title: "Skylights", summary: "Skylight installs and related flashings." },
      { slug: "whirly", title: "Whirlybirds", summary: "Whirlybird ventilation installs." },
    ],
    areasPrimary: ["Altona Meadows", "Altona", "Laverton"],
    areasWider: ["Point Cook", "Hoppers Crossing", "Werribee", "Sunshine", "Williamstown"],
    facts: [
      { big: "3028", small: "Based in Altona Meadows" },
      { big: "Both", small: "Domestic and commercial roofing" },
      { big: "5.0★", small: "Google rating" },
    ],
    hero: {
      headline: "Roof repairs from Altona Meadows.",
      support:
        "Adam's Roofing Restorations — leaks, restorations, skylights and whirlybirds. Call Adam on 0407 456 540.",
    },
    heroRating: "5.0-star Google rating · Altona Meadows",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Roofing services.",
      servicesLead: "Altona Meadows VIC 3028. Call Adam 0407 456 540.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · Altona Meadows.",
      aboutLead: "Domestic and commercial roofing based in Altona Meadows VIC 3028.",
      quoteHeading: "Message Adam for a quote.",
      quoteArea: "Altona Meadows & surrounds",
      detailsPlaceholder: "Suburb, job (leak, restore, skylight) and preferred day…",
      footerCtaLine: "Need a roof repair?",
      footerCtaSub: "Call Adam's Roofing Restorations.",
      footerBlurb: "Domestic and commercial roofing from Altona Meadows across Melbourne’s west.",
      footerPlace: "Altona Meadows VIC 3028",
    },
    word: { a: "Adam's", b: "Roofing", tag: "Altona Meadows" },
    initials: "AR",
    colors: {
      forest: "#1a2e1c",
      forest2: "#243c28",
      forest3: "#2f4c34",
      leaf: "#b87333",
      leafBright: "#d4a574",
      leafHover: "#e0b88a",
      leafDeep: "#8a5520",
      mist: "#f3f0e8",
      buttonText: "#1a2e1c",
      pageBg: "#f7f4ec",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 28l16-14 16 14v12H8V28z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><circle cx="24" cy="22" r="4" fill="none" stroke="#d4a574" stroke-width="2.8"/><path d="M24 18v-4" stroke="#d4a574" stroke-width="2.8" stroke-linecap="round"/></svg>`,
    title: "Adam's Roofing Restorations · Altona Meadows",
    description:
      "Roof repairs, restorations, skylights and whirlybirds in Altona Meadows. 5.0-star Google rating. Call Adam 0407 456 540.",
    quoteMessage: "Hi Adam, I'd like a quote from Adam's Roofing Restorations.",
    videoId: "13361432",
    videoSource: "Pexels",
    videoPage: "https://www.pexels.com/video/roofer-working-on-roofs-13361432/",
    videoNote: "Roofer working on residential roof",
    fonts: { display: "Oswald", sans: "Source Sans 3", google: "Oswald:wght@500;600;700&family=Source+Sans+3:wght@400;600;700" },
  },

  "man-with-a-vac": {
    brand: {
      name: "Man With a Vac Gutter Cleaning",
      shortName: "Man With a Vac",
      legal: "Man With a Vac Gutter Cleaning",
      phoneDisplay: "0416 127 705",
      phoneTel: "+61416127705",
      address: "45 Fullbrook Drive, Sunbury VIC 3429",
      addressShort: "Sunbury",
      hours: "Quotes by phone · residential & commercial",
      owner: "Man With a Vac",
      rating: "5.0",
      reviewCount: null,
    },
    mapsQuery: "Man+With+a+Vac+Gutter+Cleaning+Sunbury",
    mapsUrl:
      "https://www.google.com/maps/place/Man+With+a+Vac+Gutter+Cleaning/@-37.5597448,144.7058764,17z",
    services: [
      { slug: "vac", title: "Vacuum Gutter Cleaning", summary: "Industrial vacuum suction clears gutters safely." },
      { slug: "downpipe", title: "Downpipe Clearing", summary: "Blocked downpipes cleared so water drains." },
      { slug: "res", title: "Residential Gutter Cleaning", summary: "Homes across Melbourne kept clear of leaf build-up." },
      { slug: "com", title: "Commercial Gutter Cleaning", summary: "Commercial properties with insured, heights-accredited crews." },
      { slug: "est", title: "Gutter Cleaning Estimates", summary: "Straightforward estimates before the job starts." },
    ],
    areasPrimary: ["Sunbury", "Diggers Rest", "Gisborne"],
    areasWider: ["Melton", "Caroline Springs", "Hillside", "Tullamarine", "Craigieburn"],
    facts: [
      { big: "Vac", small: "Industrial vacuum suction technology" },
      { big: "Insured", small: "Fully insured · working-at-heights accredited" },
      { big: "5.0★", small: "Google rating · Sunbury" },
    ],
    hero: {
      headline: "Vacuum gutter cleaning from Sunbury.",
      support:
        "Man With a Vac — industrial suction for residential and commercial gutters. Call 0416 127 705.",
    },
    heroRating: "5.0-star Google rating · Sunbury",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Gutter cleaning.",
      servicesLead: "Sunbury and across Melbourne. Call 0416 127 705.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · vacuum method.",
      aboutLead:
        "Industrial vacuum suction. Fully insured and working-at-heights accredited. 45 Fullbrook Drive, Sunbury.",
      quoteHeading: "Ask for a gutter estimate.",
      quoteArea: "Sunbury & Melbourne",
      detailsPlaceholder: "Suburb, property type (home or commercial) and gutter length if known…",
      footerCtaLine: "Gutters full of leaves?",
      footerCtaSub: "Call Man With a Vac.",
      footerBlurb: "Vacuum gutter cleaning for homes and businesses from Sunbury across Melbourne.",
      footerPlace: "Sunbury VIC 3429",
    },
    word: { a: "Man With a Vac", b: "Gutters", tag: "Sunbury" },
    initials: "MV",
    colors: {
      forest: "#0a1628",
      forest2: "#122038",
      forest3: "#1a2c48",
      leaf: "#84cc16",
      leafBright: "#a3e635",
      leafHover: "#bef264",
      leafDeep: "#65a30d",
      mist: "#eef6e8",
      buttonText: "#0a1628",
      pageBg: "#f4faf0",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 18h20l6 8v12H10V18z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M16 38c0 4 3 6 8 6s8-2 8-6" fill="none" stroke="#a3e635" stroke-width="2.8" stroke-linecap="round"/><circle cx="20" cy="26" r="2" fill="#a3e635"/></svg>`,
    title: "Man With a Vac · Sunbury gutter cleaning",
    description:
      "Vacuum gutter cleaning in Sunbury and across Melbourne. Fully insured. 5.0-star Google rating. Call 0416 127 705.",
    quoteMessage: "Hi, I'd like a gutter cleaning quote from Man With a Vac.",
    videoId: "20719",
    videoSource: "Mixkit",
    videoPage: "https://mixkit.co/free-stock-video/rain-water-running-into-a-gutter-20719/",
    videoNote: "Rain water running into a gutter",
    fonts: { display: "Oswald", sans: "Source Sans 3", google: "Oswald:wght@500;600;700&family=Source+Sans+3:wght@400;600;700" },
  },

  "tn-roof-cleaning": {
    brand: {
      name: "TN Roof Cleaning Service",
      shortName: "TN Roof Cleaning",
      legal: "TN Roof Cleaning Service",
      phoneDisplay: "0434 114 167",
      phoneTel: "+61434114167",
      address: "Deer Park VIC 3023",
      addressShort: "Deer Park",
      hours: "Mon–Sat 8:00am–5:00pm",
      owner: "TN Roof Cleaning",
      rating: "5.0",
      reviewCount: null,
    },
    mapsQuery: "TN+Roof+Cleaning+Service+Deer+Park",
    mapsUrl:
      "https://www.google.com/maps/place/TN+Roof+Cleaning+Service/@-37.7578719,144.7612172,17z",
    services: [
      { slug: "clean", title: "Roof Cleaning", summary: "High-pressure roof cleaning for tiled homes." },
      { slug: "restore", title: "Roof Restoration", summary: "Cleaning plus restoration work as needed." },
      { slug: "pressure", title: "High Pressure Cleaning", summary: "Pressure cleaning that lifts moss and grime." },
      { slug: "paint", title: "Roof Painting", summary: "Fresh roof paint after cleaning." },
      { slug: "point", title: "Re-pointing", summary: "Ridge re-pointing as part of the refresh." },
      { slug: "damage", title: "Damage Repairs", summary: "Repairs for cracked or broken tiles." },
    ],
    areasPrimary: ["Deer Park", "Sunshine", "St Albans"],
    areasWider: ["Caroline Springs", "Melton", "Hoppers Crossing", "Werribee", "Sydenham"],
    facts: [
      { big: "3023", small: "Based in Deer Park VIC" },
      { big: "Mon–Sat", small: "8:00am–5:00pm" },
      { big: "5.0★", small: "Google rating · licensed & insured" },
    ],
    hero: {
      headline: "High-pressure roof cleaning in Deer Park.",
      support:
        "TN Roof Cleaning Service — cleaning, painting, re-pointing and repairs. Call 0434 114 167.",
    },
    heroRating: "5.0-star Google rating · Deer Park",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Roof cleaning services.",
      servicesLead: "Deer Park VIC 3023. Call 0434 114 167.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · licensed & insured.",
      aboutLead: "Based in Deer Park. Open Mon–Sat 8:00am–5:00pm. Licensed and insured.",
      quoteHeading: "Book a roof clean.",
      quoteArea: "Deer Park & surrounds",
      detailsPlaceholder: "Suburb, roof condition and whether you also want paint or re-point…",
      footerCtaLine: "Roof need a clean?",
      footerCtaSub: "Call TN Roof Cleaning Service.",
      footerBlurb: "High-pressure roof cleaning and restoration from Deer Park across Melbourne’s west.",
      footerPlace: "Deer Park VIC 3023",
    },
    word: { a: "TN", b: "Roof Cleaning", tag: "Deer Park" },
    initials: "TN",
    colors: {
      forest: "#1a1f24",
      forest2: "#262c34",
      forest3: "#343c46",
      leaf: "#38bdf8",
      leafBright: "#7dd3fc",
      leafHover: "#bae6fd",
      leafDeep: "#0284c7",
      mist: "#eef5fa",
      buttonText: "#0c1220",
      pageBg: "#f5f9fc",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 28l16-14 16 14" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 26c4 8 8 12 10 12s6-4 10-12" fill="none" stroke="#7dd3fc" stroke-width="2.8" stroke-linecap="round"/></svg>`,
    title: "TN Roof Cleaning Service · Deer Park",
    description:
      "Roof cleaning, painting and repairs in Deer Park. Licensed and insured. 5.0-star Google rating. Call 0434 114 167.",
    quoteMessage: "Hi, I'd like a quote from TN Roof Cleaning Service.",
    videoId: "21212",
    videoSource: "Mixkit",
    videoPage: "https://mixkit.co/free-stock-video/storm-water-running-down-a-roof-21212/",
    videoNote: "Storm water running down a roof",
    fonts: { display: "Oswald", sans: "Source Sans 3", google: "Oswald:wght@500;600;700&family=Source+Sans+3:wght@400;600;700" },
  },

  "tcb-tiling": {
    brand: {
      name: "TCB Tiling & Renovations",
      shortName: "TCB Tiling",
      legal: "TCB Tiling & Renovations",
      phoneDisplay: "0418 364 104",
      phoneTel: "+61418364104",
      address: "St Albans VIC",
      addressShort: "St Albans",
      hours: "Mon–Fri 8am–7pm · Saturday by appointment",
      owner: "TCB Tiling",
      rating: "5.0",
      reviewCount: null,
    },
    mapsQuery: "TCB+Tiling+%26+Renovations+St+Albans",
    mapsUrl:
      "https://www.google.com/maps/place/TCB+Tiling+%26+Renovations/@-37.7097804,144.7476798,17z",
    services: [
      { slug: "bath", title: "Bathroom Renovations", summary: "Full bathroom renovations with tiling and waterproofing." },
      { slug: "kitchen", title: "Kitchen Renovations", summary: "Kitchen tiling, splashbacks and related finishes." },
      { slug: "laundry", title: "Laundries & Toilets", summary: "Laundry and toilet renovations." },
      { slug: "tiling", title: "Tiling", summary: "Floor and wall tiling for homes and fit-outs." },
      { slug: "water", title: "Waterproofing", summary: "Waterproofing before wet-area tiling." },
      { slug: "floor", title: "Flooring", summary: "Floor finishes as part of the renovation." },
      { slug: "paint", title: "Painting", summary: "Painting to complete the room." },
      { slug: "retail", title: "Retail Fit-outs", summary: "Tiling and renovations for retail spaces." },
    ],
    areasPrimary: ["St Albans", "Sunshine", "Deer Park"],
    areasWider: ["Caroline Springs", "Sunbury", "Melton", "Taylors Lakes", "Inner Melbourne"],
    facts: [
      { big: "20+", small: "Years' experience" },
      { big: "West", small: "Melbourne’s west & inner Melbourne" },
      { big: "5.0★", small: "Google rating · St Albans" },
    ],
    hero: {
      headline: "Tiling and renovations from St Albans.",
      support:
        "TCB Tiling & Renovations — bathrooms, kitchens, waterproofing and fit-outs. Call 0418 364 104.",
    },
    heroRating: "5.0-star Google rating · St Albans",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Tiling & renovations.",
      servicesLead: "St Albans and Melbourne’s west. Call 0418 364 104.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · 20+ years.",
      aboutLead:
        "Based in St Albans. Sunshine, Deer Park, Caroline Springs, Sunbury, Melton, Taylors Lakes and inner Melbourne. Mon–Fri 8am–7pm; Saturday by appointment.",
      quoteHeading: "Request a tiling quote.",
      quoteArea: "St Albans, west & inner Melbourne",
      detailsPlaceholder: "Suburb, room (bath, kitchen, laundry) and tile type if known…",
      footerCtaLine: "Planning a renovation?",
      footerCtaSub: "Call TCB Tiling & Renovations.",
      footerBlurb: "Bathroom, kitchen and retail tiling from St Albans across Melbourne’s west.",
      footerPlace: "St Albans VIC",
    },
    word: { a: "TCB", b: "Tiling", tag: "St Albans" },
    initials: "TCB",
    colors: {
      forest: "#121212",
      forest2: "#1e1e1e",
      forest3: "#2a2a2a",
      leaf: "#b8956c",
      leafBright: "#d4b896",
      leafHover: "#e2c9ad",
      leafDeep: "#8a6e4a",
      mist: "#f5f3ef",
      buttonText: "#121212",
      pageBg: "#faf9f7",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="8" y="10" width="14" height="14" rx="1.5" fill="none" stroke="currentColor" stroke-width="2.8"/><rect x="26" y="10" width="14" height="14" rx="1.5" fill="none" stroke="currentColor" stroke-width="2.8"/><rect x="8" y="28" width="14" height="14" rx="1.5" fill="none" stroke="#d4b896" stroke-width="2.8"/><rect x="26" y="28" width="14" height="14" rx="1.5" fill="none" stroke="currentColor" stroke-width="2.8"/></svg>`,
    title: "TCB Tiling & Renovations · St Albans",
    description:
      "Bathroom and kitchen renovations, tiling and waterproofing from St Albans. 5.0-star Google rating. Call 0418 364 104.",
    quoteMessage: "Hi, I'd like a quote from TCB Tiling & Renovations.",
    videoId: "24906850",
    videoSource: "Pexels",
    videoPage: "https://www.pexels.com/video/a-person-is-using-a-tool-to-lay-tile-24906850/",
    videoNote: "Tiler laying floor tiles with tools",
    fonts: { display: "Oswald", sans: "Source Sans 3", google: "Oswald:wght@500;600;700&family=Source+Sans+3:wght@400;600;700" },
  },

  "kalsi-tiling": {
    brand: {
      name: "Kalsi Tiling",
      shortName: "Kalsi Tiling",
      legal: "Kalsi Tiling",
      phoneDisplay: "0433 800 172",
      phoneTel: "+61433800172",
      address: "Truganina VIC",
      addressShort: "Truganina",
      hours: "Quotes by phone · Melbourne west",
      owner: "Kalsi Tiling",
      rating: "5.0",
      reviewCount: null,
    },
    mapsQuery: "Kalsi+Tiling+Truganina",
    mapsUrl: "https://www.google.com/maps/place/Kalsi+Tiling+Pty+Ltd/@-37.8237025,144.7196108,17z",
    services: [
      { slug: "floor", title: "Floor & Wall Tiling", summary: "Floor and wall tiling for homes and workplaces." },
      { slug: "grout", title: "Grouting", summary: "Neat grouting for a lasting finish." },
      { slug: "screed", title: "Screeding", summary: "Screeding to level floors before tiling." },
      { slug: "water", title: "Waterproofing", summary: "Waterproofing under wet-area tiles." },
      { slug: "all", title: "Residential, Commercial & Renovation", summary: "New builds, renovations and commercial jobs." },
    ],
    areasPrimary: ["Truganina", "Tarneit", "Hoppers Crossing"],
    areasWider: ["Werribee", "Point Cook", "Deer Park", "Sunshine", "Caroline Springs"],
    facts: [
      { big: "7 yrs", small: "Industry experience" },
      { big: "West", small: "Based in Truganina, Melbourne west" },
      { big: "5.0★", small: "Google rating" },
    ],
    hero: {
      headline: "Floor and wall tiling in Truganina.",
      support: "Kalsi Tiling — grouting, screeding and waterproofing. Call 0433 800 172.",
    },
    heroRating: "5.0-star Google rating · Truganina",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Tiling services.",
      servicesLead: "Truganina and Melbourne’s west. Call 0433 800 172.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · 7 years.",
      aboutLead: "Seven years of industry experience based in Truganina, Melbourne west.",
      quoteHeading: "Get a tiling quote.",
      quoteArea: "Truganina & Melbourne west",
      detailsPlaceholder: "Suburb, floor or wall, room type and tile size if known…",
      footerCtaLine: "Need a tiler?",
      footerCtaSub: "Call Kalsi Tiling.",
      footerBlurb: "Floor and wall tiling, grouting and waterproofing from Truganina across Melbourne’s west.",
      footerPlace: "Truganina VIC",
    },
    word: { a: "Kalsi", b: "Tiling", tag: "Truganina" },
    initials: "KT",
    colors: {
      forest: "#1e1b4b",
      forest2: "#2a2660",
      forest3: "#38327a",
      leaf: "#eab308",
      leafBright: "#facc15",
      leafHover: "#fde047",
      leafDeep: "#ca8a04",
      mist: "#f7f4e8",
      buttonText: "#1e1b4b",
      pageBg: "#faf8f0",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 34h28" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/><path d="M14 34l6-16h8l6 16" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M18 26h12" stroke="#facc15" stroke-width="2.8" stroke-linecap="round"/></svg>`,
    title: "Kalsi Tiling · Truganina",
    description:
      "Floor and wall tiling, grouting and waterproofing in Truganina. 5.0-star Google rating. Call 0433 800 172.",
    quoteMessage: "Hi, I'd like a quote from Kalsi Tiling.",
    videoId: "6008078",
    videoSource: "Pexels",
    videoPage: "https://www.pexels.com/video/laying-over-tiles-on-the-floor-6008078/",
    videoNote: "Hands installing floor tiles",
    fonts: { display: "Oswald", sans: "Source Sans 3", google: "Oswald:wght@500;600;700&family=Source+Sans+3:wght@400;600;700" },
  },

  "cam-tiling": {
    brand: {
      name: "Cam Tiling",
      shortName: "Cam Tiling",
      legal: "Cam Tiling",
      phoneDisplay: "0434 863 236",
      phoneTel: "+61434863236",
      address: "Deer Park VIC 3023",
      addressShort: "Deer Park",
      hours: "Quotes by phone · residential & commercial",
      owner: "Cam Tiling",
      rating: "5.0",
      reviewCount: null,
    },
    mapsQuery: "Cam+Tiling+Deer+Park",
    mapsUrl: "https://www.google.com/maps/place/Cam+Tiling/@-37.7687146,144.7655598,17z",
    services: [
      { slug: "all", title: "Residential & Commercial Tiling", summary: "Tiling for homes and commercial spaces." },
      { slug: "bath", title: "Bathroom & Shower Tiling", summary: "Wet-area tiling for bathrooms and showers." },
      { slug: "kitchen", title: "Kitchen Tiling & Splashbacks", summary: "Kitchen floors, walls and splashbacks." },
      { slug: "floor", title: "Floor & Wall Tiling", summary: "Floor and wall installs inside and out." },
      { slug: "mosaic", title: "Mosaics", summary: "Feature mosaic work." },
      { slug: "pool", title: "Pool Tiling", summary: "Pool tiling and surrounds." },
      { slug: "outdoor", title: "Paving & Outdoor Tiling", summary: "Outdoor paving and tiled areas." },
      { slug: "water", title: "Waterproofing", summary: "Waterproofing before wet-area tiles." },
      { slug: "finish", title: "Screeding, Regrouting & Caulking", summary: "Prep and finishing for a clean result." },
    ],
    areasPrimary: ["Deer Park", "Sunshine", "St Albans"],
    areasWider: ["Caroline Springs", "Melton", "Hoppers Crossing", "Werribee", "Sydenham"],
    facts: [
      { big: "3023", small: "Based at Deer Park VIC" },
      { big: "Full", small: "Residential & commercial tiling" },
      { big: "5.0★", small: "Google rating" },
    ],
    hero: {
      headline: "Bathroom, kitchen and pool tiling.",
      support: "Cam Tiling in Deer Park — mosaics, paving, waterproofing and more. Call 0434 863 236.",
    },
    heroRating: "5.0-star Google rating · Deer Park",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Tiling done properly.",
      servicesLead: "Deer Park VIC 3023. Call 0434 863 236.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0-star Google rating · Deer Park.",
      aboutLead: "Based at Deer Park VIC 3023 — residential and commercial tiling across a wide service list.",
      quoteHeading: "Request a Cam Tiling quote.",
      quoteArea: "Deer Park & surrounds",
      detailsPlaceholder: "Suburb, area (bath, kitchen, pool, outdoor) and tile style…",
      footerCtaLine: "Need tiling done?",
      footerCtaSub: "Call Cam Tiling.",
      footerBlurb: "Residential and commercial tiling from Deer Park — bathrooms, kitchens, pools and outdoors.",
      footerPlace: "Deer Park VIC 3023",
    },
    word: { a: "Cam", b: "Tiling", tag: "Deer Park" },
    initials: "CT",
    colors: {
      forest: "#0d3d3a",
      forest2: "#14504c",
      forest3: "#1c645f",
      leaf: "#c45c26",
      leafBright: "#f5a060",
      leafHover: "#f8b680",
      leafDeep: "#9a3f14",
      mist: "#f5efe8",
      buttonText: "#0d3d3a",
      pageBg: "#faf6f1",
    },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="8" y="8" width="14" height="14" rx="1" fill="none" stroke="currentColor" stroke-width="2.6"/><rect x="26" y="8" width="14" height="14" rx="1" fill="none" stroke="#f5a060" stroke-width="2.6"/><rect x="8" y="26" width="14" height="14" rx="1" fill="none" stroke="#f5a060" stroke-width="2.6"/><rect x="26" y="26" width="14" height="14" rx="1" fill="none" stroke="currentColor" stroke-width="2.6"/></svg>`,
    title: "Cam Tiling · Deer Park",
    description:
      "Residential and commercial tiling in Deer Park — bathrooms, kitchens, pools and outdoors. 5.0-star Google rating. Call 0434 863 236.",
    quoteMessage: "Hi, I'd like a quote from Cam Tiling.",
    videoId: "46079",
    videoSource: "Mixkit",
    videoPage: "https://mixkit.co/free-stock-video/person-shaping-ceramic-tiles-on-a-grinder-46079/",
    videoNote: "Person shaping ceramic tiles on a grinder",
    fonts: { display: "Oswald", sans: "Source Sans 3", google: "Oswald:wght@500;600;700&family=Source+Sans+3:wght@400;600;700" },
  },
};

// Fix typo in major-roofs leafBright
SITES["major-roofs"].colors.leafBright = "#f0c014";

function j(v) {
  return JSON.stringify(v);
}

function copyDir(src, dest) {
  fs.cpSync(src, dest, { recursive: true });
}

function writeData(slug, s) {
  const content = `export const BASE = "/${slug}";

/*
 * Originality build 2026-10-16 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from batch JSON (checked 16 Oct 2026):
 * - Name, phone, suburb/address, services, rating, listed facts only. No review count shown.
 * - Hero ${s.videoSource} ${s.videoId}: ${s.videoPage}
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG).
 */
export const brand = ${j(s.brand)};

export const maps = { place: ${j(s.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${s.mapsQuery}`)} };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Why us"}, {"href": "#quote", "label": "Free quote"}];

export const services = ${j(s.services)};

export const areasPrimary = ${j(s.areasPrimary)};
export const areasWider = ${j(s.areasWider)};

export const reviews = [];
export const facts = ${j(s.facts)};

export const hero = ${j(s.hero)};
export const heroRating = ${j(s.heroRating)};
export const scrollHint = ${j(s.scrollHint)};
export const copy = ${j(s.copy)};
export const logo = {
  spec: {
    header: { type: "word" },
    hero: { type: "word" },
    footer: { type: "word" },
    menu: { type: "word" },
  },
  word: ${j(s.word)},
  icon: ${j(s.icon)},
};

export const quoteMessage = ${j(s.quoteMessage)};
export const media = {
  videoId: ${j(s.videoId)},
  source: ${j(s.videoSource)},
  page: ${j(s.videoPage)},
  note: ${j(s.videoNote)},
};
`;
  fs.writeFileSync(path.join(ROOT, slug, "src/data.js"), content);
}

function writeCss(slug, s) {
  const c = s.colors;
  const css = `/* Theme — original palette (${slug}) */
:root {
  --leaf: ${c.leaf};
  --leaf-bright: ${c.leafBright}; /* CTA fill */
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
.logo-link { display: inline-flex; align-items: center; z-index: 110; line-height: 1; }

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
.hero-brand { filter: drop-shadow(0 6px 22px rgba(0, 0, 0, 0.55)); }
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
.brand-logo--word { display: inline-flex; align-items: center; gap: 0.55em; width: auto !important; color: var(--ink); line-height: 1; }
.brand-logo__icon { display: inline-flex; width: 2.3em; height: 2.3em; flex: none; }
.brand-logo__icon svg { width: 100%; height: 100%; }
.brand-logo__text { display: grid; gap: 0.28em; }
.brand-logo__name { font-size: 1.45em; white-space: nowrap; font-family: var(--display); font-weight: 800; text-transform: uppercase; letter-spacing: 0.02em; }
.brand-logo__name strong { color: var(--leaf-bright); margin-right: 0.12em; font-style: normal; }
.brand-logo__name em { font-style: normal; font-weight: 700; }
.brand-logo__tag { font-family: var(--sans); font-size: 0.62em; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; opacity: 0.75; white-space: nowrap; }
.ts-logo--header.brand-logo--word { font-size: clamp(0.78rem, 3.2vw, 1.0rem); color: #fff; }
.ts-logo--hero.brand-logo--word { font-size: clamp(1.05rem, 2.2vw, 1.45rem); color: #fff; }
.ts-logo--footer.brand-logo--word { font-size: 1.0rem; color: #fff; }
.ts-logo--menu.brand-logo--word { font-size: 1.05rem; color: #fff; }
.site-header .brand-logo__name strong { color: var(--leaf-bright); }

.fact-card { display: grid; gap: 0.5rem; align-content: start; }
.fact-card__big { font-family: var(--display); font-size: clamp(1.8rem, 3.4vw, 2.4rem); color: var(--leaf-bright); line-height: 1; }

@media (max-width: 720px) { .hero-video__poster, .hero-video__clip { object-position: 46% center; } }
`;
  fs.writeFileSync(path.join(ROOT, slug, "src/index.css"), css);
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

function writeQuoteForm(slug) {
  const content = `import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Motion";
import { brand, copy, maps, quoteMessage } from "../data";

const initial = { name: "", phone: "", suburb: "", details: "" };

export default function QuoteForm() {
  const [form, setForm] = useState(initial);
  const reduce = useReducedMotion();

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      [
        quoteMessage,
        \`Name: \${form.name}\`,
        \`Phone: \${form.phone}\`,
        \`Suburb: \${form.suburb}\`,
        "",
        "Job details:",
        form.details,
      ].join("\\n"),
    );
    window.location.href = \`sms:\${brand.phoneTel}?&body=\${body}\`;
  };

  return (
    <section className="section band band--light" id="quote">
      <div className="wrap quote-shell">
        <Reveal>
          <aside className="quote-aside">
            <p className="eyebrow">Free quote</p>
            <h2 className="leaf-heading leaf-heading--light">{copy.quoteHeading}</h2>
            <p>
              A few quick details. Opens a text to{" "}
              {brand.phoneDisplay} — or just call.
            </p>
            <a className="btn btn--leaf quote-aside__call" href={\`tel:\${brand.phoneTel}\`}>
              Call {brand.phoneDisplay}
            </a>
            <ul className="quote-aside__list">
              <li>
                <strong>Phone</strong>
                <a href={\`tel:\${brand.phoneTel}\`}>{brand.phoneDisplay}</a>
              </li>
              <li>
                <strong>Based</strong>
                <a href={maps.place} target="_blank" rel="noreferrer">
                  {brand.address}
                </a>
              </li>
              <li>
                <strong>Area</strong>
                <span>{copy.quoteArea}</span>
              </li>
            </ul>
          </aside>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.form
            className="quote-form leaf-box"
            onSubmit={onSubmit}
            noValidate
            initial={reduce ? false : { opacity: 0.96 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
          >
            <div className="form-grid form-grid--2">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={form.phone}
                  onChange={onChange}
                  placeholder="04xx …"
                />
              </div>
            </div>

            <div className="form-grid" style={{ marginTop: "1rem" }}>
              <div className="field">
                <label htmlFor="suburb">Suburb</label>
                <input
                  id="suburb"
                  name="suburb"
                  type="text"
                  autoComplete="address-level2"
                  required
                  value={form.suburb}
                  onChange={onChange}
                  placeholder={brand.addressShort}
                />
              </div>
              <div className="field">
                <label htmlFor="details">Job details</label>
                <textarea
                  id="details"
                  name="details"
                  required
                  value={form.details}
                  onChange={onChange}
                  placeholder={copy.detailsPlaceholder}
                />
              </div>
            </div>

            <div className="form-actions">
              <motion.button
                className="btn btn--leaf btn--block-sm"
                type="submit"
                whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                Text my free quote request
              </motion.button>
            </div>
            <p className="form-note">
              Prefer a call? {brand.owner} answers {brand.phoneDisplay} — {brand.hours}.
            </p>
          </motion.form>
        </Reveal>
      </div>
    </section>
  );
}
`;
  fs.writeFileSync(path.join(ROOT, slug, "src/components/QuoteForm.jsx"), content);
}

function writeFooter(slug) {
  const content = `import { motion, useReducedMotion } from "framer-motion";
import { brand, copy, maps, nav } from "../data";
import Logo from "./Logo";

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="wrap footer-cta__inner">
          <p className="footer-cta__line">
            {copy.footerCtaLine} <span>{copy.footerCtaSub}</span>
          </p>
          <motion.a
            className="footer-cta__call"
            href={\`tel:\${brand.phoneTel}\`}
            whileHover={reduce ? undefined : { x: 4 }}
          >
            Call {brand.phoneDisplay}
          </motion.a>
        </div>
      </div>

      <div className="wrap footer-grid">
        <div className="footer-brand-col">
          <div className="footer-brand">
            <Logo className="ts-logo--footer" title={brand.name} />
          </div>
          <p>
            {copy.footerBlurb}
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <div className="footer-links">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3>Contact</h3>
          <div className="footer-links">
            <a href={\`tel:\${brand.phoneTel}\`}>{brand.phoneDisplay}</a>
            <a href={maps.place} target="_blank" rel="noreferrer">
              {brand.address}
            </a>
            <span>{brand.hours}</span>
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} {brand.legal}
        </span>
        <span>{copy.footerPlace}</span>
        <p className="footer-credit">
          Demo site by KaamTasker — $500 AUD all-inclusive.{" "}
          <a href="tel:+61411814712">Ali 0411 814 712</a>
        </p>
      </div>
    </footer>
  );
}
`;
  fs.writeFileSync(path.join(ROOT, slug, "src/components/Footer.jsx"), content);
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

  // Copy encoded video + poster
  const vidSrc = path.join(STOCK, `hero-${s.videoId}-scrub.mp4`);
  const posterSrc = path.join(STOCK, `poster-${s.videoId}.jpg`);
  if (!fs.existsSync(vidSrc)) throw new Error(`missing video ${vidSrc}`);
  fs.copyFileSync(vidSrc, path.join(pub, "videos", `hero-${s.videoId}-scrub.mp4`));
  fs.copyFileSync(posterSrc, path.join(pub, "videos", `poster-${s.videoId}.jpg`));

  // Favicon SVG
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${s.colors.forest}"/>
  <text x="32" y="40" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="${s.initials.length > 2 ? 16 : 22}" font-weight="800" fill="${s.colors.leafBright}">${s.initials}</text>
</svg>`;
  fs.writeFileSync(path.join(pub, "favicon.svg"), svg);

  // PNG icons via Pillow
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

function writeMeta(slug, s) {
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
          preview: `vite preview --host 127.0.0.1 --port ${4300 + Object.keys(SITES).indexOf(slug)}`,
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
    port: ${4300 + Object.keys(SITES).indexOf(slug)},
  },
});
`
  );
  fs.writeFileSync(
    path.join(ROOT, slug, "README.md"),
    `# ${s.brand.name}

Demo site for kaamtasker.com/${slug}/. Original wordmark; licensed stock hero only (see \`public/videos/LICENSE.md\`). Facts from batch 2026-10-16 JSON.

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

function cleanTemplateExtras(slug) {
  const brandDir = path.join(ROOT, slug, "public/brand");
  if (fs.existsSync(brandDir)) fs.rmSync(brandDir, { recursive: true, force: true });
  // remove old template videos
  const vidDir = path.join(ROOT, slug, "public/videos");
  if (fs.existsSync(vidDir)) {
    for (const f of fs.readdirSync(vidDir)) {
      if (f.startsWith("hero-33583") || f.startsWith("poster-33583")) {
        fs.unlinkSync(path.join(vidDir, f));
      }
    }
  }
  // drop dist from template copy — rebuild later
  const dist = path.join(ROOT, slug, "dist");
  if (fs.existsSync(dist)) fs.rmSync(dist, { recursive: true, force: true });
}

function main() {
  for (const [slug, s] of Object.entries(SITES)) {
    console.log("scaffolding", slug);
    const dest = path.join(ROOT, slug);
    if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true, force: true });
    copyDir(path.join(ROOT, TEMPLATE), dest);
    cleanTemplateExtras(slug);
    writeData(slug, s);
    writeCss(slug, s);
    writeVideoHero(slug, s);
    writeQuoteForm(slug);
    writeFooter(slug);
    writePublic(slug, s);
    writeIndexHtml(slug, s);
    writeMeta(slug, s);
  }
  // palette report for email matching
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
    path.join(ROOT, "scripts/batch-2026-10-16-palettes.json"),
    JSON.stringify(report, null, 2) + "\n"
  );
  console.log("done", Object.keys(SITES).length, "sites");
}

main();
