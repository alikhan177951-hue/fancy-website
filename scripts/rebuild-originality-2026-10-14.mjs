#!/usr/bin/env node
/**
 * Batch originality rebuild (2026-10-14):
 * - Replace scraped client logos with original CSS/SVG wordmarks
 * - Keep Mixkit stock hero media only
 * - Rewrite marketing copy; retain facts only
 * - Replace favicon / apple-touch / icon-512 with original monograms
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = "/workspace";

const SITES = {
  "elite-carpet-care": {
    brand: {
      name: "Elite Carpet Care",
      shortName: "Elite",
      legal: "Elite Carpet Care",
      phoneDisplay: "0408 807 420",
      phoneTel: "+61408807420",
      address: "28 Warrington Crescent, Deer Park VIC",
      addressShort: "Deer Park",
      hours: "Mon–Sat 8:00 am – 8:00 pm",
      owner: "Elite Carpet Care",
      rating: "4.8",
      reviewCount: 72,
    },
    mapsQuery: "Elite+Carpet+Care+Deer+Park",
    services: [
      { slug: "carpets", title: "Carpet Steam Cleaning", summary: "On-site steam cleaning for carpets and rugs in homes and small businesses." },
      { slug: "upholstery", title: "Sofa & Upholstery Cleaning", summary: "Fabric sofas, chairs and upholstery cleaned where they sit." },
      { slug: "tile", title: "Tile & Grout Cleaning", summary: "Tile floors and grout lines cleaned as a scheduled service." },
      { slug: "eol", title: "End of Lease Cleaning", summary: "Carpet and hard-floor cleans timed for vacate handovers." },
      { slug: "flood", title: "Flood Restoration", summary: "Drying and recovery work after leaks or water damage." },
      { slug: "stain", title: "Stain & Odour Removal", summary: "Focused treatment for stains and odours, including pet messes." },
    ],
    areasPrimary: ["Deer Park", "Sunshine", "St Albans"],
    areasWider: ["Hoppers Crossing", "Werribee", "Melton", "Tarneit", "Point Cook", "Sunbury"],
    facts: [
      { big: "72", small: "Google reviews · 4.8★ rating" },
      { big: "West", small: "Northern & western Melbourne suburbs" },
      { big: "Mon–Sat", small: "8:00 am – 8:00 pm" },
    ],
    hero: {
      headline: "Carpets cleaned on schedule in Melbourne’s west.",
      support: "Elite Carpet Care in Deer Park — carpet, tile and upholstery steam cleaning. Call or text 0408 807 420.",
    },
    heroRating: "4.8 on Google · ~72 reviews · Deer Park",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "What we clean.",
      servicesLead: "Mobile steam cleaning. Phone 0408 807 420.",
      aboutEyebrow: "Local facts",
      aboutHeading: "4.8★ on Google from ~72 reviews.",
      aboutLead: "Based in Deer Park. Carpet, rug, tile and upholstery work across Melbourne’s northern and western suburbs.",
      quoteHeading: "Request a call-back.",
      quoteArea: "Deer Park & Melbourne’s west",
      detailsPlaceholder: "Suburb, rooms (carpet, sofa, tile) and preferred day…",
      footerCtaLine: "Book carpet cleaning",
      footerCtaSub: "Call Elite Carpet Care.",
      footerBlurb: "Steam cleaning for carpets, tiles and upholstery from Deer Park across Melbourne’s west.",
      footerPlace: "Deer Park VIC",
    },
    word: { a: "Elite", b: "Carpet Care", tag: "Deer Park" },
    initials: "EC",
    colors: { forest: "#0c2740", leaf: "#1a6fb5", leafBright: "#3d9adf" },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="4" y="28" width="40" height="6" rx="2" fill="currentColor" opacity=".35"/><path d="M8 26c4-10 12-16 16-16s12 6 16 16" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/><circle cx="24" cy="14" r="3.2" fill="#3d9adf"/></svg>`,
    title: "Elite Carpet Care · Deer Park carpet cleaning",
    description: "Carpet, tile and upholstery steam cleaning from Deer Park across Melbourne’s west. 4.8★ on Google. Call 0408 807 420.",
    quoteMessage: "Hi, I'd like a quote from Elite Carpet Care.",
    mixkitNote: "Hero Mixkit 45040: https://mixkit.co/free-stock-video/close-up-of-a-vacuum-steam-cleaner-45040/",
    sources: "elitecarpetcare.com.au + Google Maps (phone, Deer Park address, hours, services list, 4.8★ ~72 reviews). No invented contact names.",
    oldLogo: "elite-carpet-care-logo.png",
  },
  "sisa-steam-cleaning": {
    brand: {
      name: "Sisa Steam Cleaning",
      shortName: "SISA",
      legal: "Sisa Steam Cleaning",
      phoneDisplay: "0416 081 969",
      phoneTel: "+61416081969",
      address: "Melbourne West VIC",
      addressShort: "Melbourne West",
      hours: "Quotes by phone",
      owner: "SISA",
      rating: "5.0",
      reviewCount: 80,
    },
    mapsQuery: "Sisa+Steam+Cleaning+Melbourne",
    services: [
      { slug: "couch", title: "Couch Cleaning", summary: "Steam cleaning for fabric sofas and lounge suites." },
      { slug: "upholstery", title: "Upholstery Cleaning", summary: "Chairs, armchairs and other upholstered pieces cleaned on site." },
      { slug: "rugs", title: "Wool Rug Cleaning", summary: "Wool rugs and soft furnishings cleaned carefully." },
      { slug: "mattress", title: "Mattress Cleaning", summary: "Mattress and bedframe cleaning available on request." },
      { slug: "stairs", title: "Carpeted Stairs", summary: "Stair carpets and related fabric surfaces cleaned in place." },
      { slug: "dining", title: "Dining Chairs", summary: "Dining chairs and ottomans included in upholstery jobs." },
    ],
    areasPrimary: ["Melbourne West", "Inner West", "Western suburbs"],
    areasWider: ["Footscray", "Yarraville", "Sunshine", "Werribee", "Point Cook", "Hoppers Crossing"],
    facts: [
      { big: "80", small: "Google reviews · 5.0★ rating" },
      { big: "Sofas", small: "Couch & upholstery focus" },
      { big: "West", small: "Melbourne western suburbs" },
    ],
    hero: {
      headline: "Sofa and rug steam cleaning across Melbourne.",
      support: "Sisa Steam Cleaning — couches, upholstery and wool rugs. Call 0416 081 969 for a quote.",
    },
    heroRating: "5.0 on Google · ~80 reviews · Melbourne West",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Upholstery services.",
      servicesLead: "Steam cleaning across Melbourne. Call 0416 081 969.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0★ on Google from ~80 reviews.",
      aboutLead: "Upholstery cleaning for sofas, chairs, rugs and mattresses across Melbourne’s west.",
      quoteHeading: "Ask for a quote.",
      quoteArea: "Melbourne West & surrounds",
      detailsPlaceholder: "Suburb, item (sofa, rug, mattress) and fabric type if known…",
      footerCtaLine: "Get an upholstery quote",
      footerCtaSub: "Call Sisa Steam Cleaning.",
      footerBlurb: "Couch and upholstery steam cleaning across Melbourne.",
      footerPlace: "Melbourne West VIC",
    },
    word: { a: "Sisa", b: "Steam Cleaning", tag: "Melbourne West" },
    initials: "SS",
    colors: { forest: "#0c2418", leaf: "#1a5c38", leafBright: "#2f8a55" },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 34h28v4H10z" fill="currentColor" opacity=".35"/><path d="M14 30c3-8 8-14 10-14s7 6 10 14" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/><path d="M18 18c2-4 4-6 6-6s4 2 6 6" fill="none" stroke="#2f8a55" stroke-width="2.6" stroke-linecap="round"/></svg>`,
    title: "Sisa Steam Cleaning · Melbourne upholstery",
    description: "Couch, upholstery and wool rug steam cleaning across Melbourne’s west. 5.0★ on Google. Call 0416 081 969.",
    quoteMessage: "Hi, I'd like a quote from Sisa Steam Cleaning.",
    mixkitNote: "Hero Mixkit 45040: https://mixkit.co/free-stock-video/close-up-of-a-vacuum-steam-cleaner-45040/",
    sources: "sisaupholstery.com.au + Google Maps (services, phone, 5.0★ ~80 reviews).",
    oldLogo: "sisa-steam-cleaning-logo.png",
  },
  "revolution-cleaning": {
    brand: {
      name: "Revolution Cleaning",
      shortName: "Revolution",
      legal: "Revolution Cleaning",
      phoneDisplay: "0411 396 401",
      phoneTel: "+61411396401",
      address: "36 River Run Dr, Werribee VIC 3030",
      addressShort: "Werribee",
      hours: "Quotes by phone · Werribee & west",
      owner: "Justin",
      rating: "5.0",
      reviewCount: 87,
    },
    mapsQuery: "Revolution+Cleaning+Werribee",
    services: [
      { slug: "carpet", title: "Carpet Cleaning", summary: "Residential and commercial carpet steam cleaning around Werribee." },
      { slug: "rug", title: "Rug Cleaning", summary: "Area rugs cleaned as a booked service." },
      { slug: "upholstery", title: "Upholstery Cleaning", summary: "Fabric and leather upholstery cleaned on site." },
      { slug: "tile", title: "Tile & Grout Cleaning", summary: "Tile and grout cleaning for kitchens and bathrooms." },
      { slug: "mattress", title: "Mattress Cleaning", summary: "Mattress cleaning available with carpet jobs." },
      { slug: "eol", title: "End of Lease Cleaning", summary: "Vacate cleans that include carpets for handover." },
    ],
    areasPrimary: ["Werribee", "Point Cook", "Hoppers Crossing"],
    areasWider: ["Tarneit", "Wyndham Vale", "Williams Landing", "Truganina", "Manor Lakes"],
    facts: [
      { big: "87", small: "Google reviews · 5.0★ rating" },
      { big: "West", small: "Werribee, Point Cook & Hoppers Crossing" },
      { big: "Justin", small: "Quotes on 0411 396 401" },
    ],
    hero: {
      headline: "Carpet cleaning based in Werribee.",
      support: "Revolution Cleaning — carpets, rugs, upholstery and tile & grout for Werribee, Point Cook and Hoppers Crossing. Call Justin on 0411 396 401.",
    },
    heroRating: "5.0 on Google · ~87 reviews · Werribee",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Cleaning services.",
      servicesLead: "Werribee and Melbourne’s west. Call Justin on 0411 396 401.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0★ on Google from ~87 reviews.",
      aboutLead: "Werribee address on River Run Dr. Carpet and hard-floor cleaning for nearby western suburbs.",
      quoteHeading: "Message Justin for a quote.",
      quoteArea: "Werribee, Point Cook & Hoppers Crossing",
      detailsPlaceholder: "Suburb, carpet/rug/upholstery and preferred day…",
      footerCtaLine: "Need a Werribee clean?",
      footerCtaSub: "Call Justin at Revolution Cleaning.",
      footerBlurb: "Carpet, rug, upholstery and tile cleaning from Werribee across Melbourne’s west.",
      footerPlace: "Werribee VIC 3030",
    },
    word: { a: "Revolution", b: "Cleaning", tag: "Werribee" },
    initials: "RC",
    colors: { forest: "#0a1f2e", leaf: "#0096d6", leafBright: "#33b0e6" },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-width="3"/><path d="M24 10v14l10 6" fill="none" stroke="#33b0e6" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: "Revolution Cleaning · Werribee carpet cleaning",
    description: "Carpet, rug, upholstery and tile cleaning in Werribee and surrounds. 5.0★ on Google. Call Justin 0411 396 401.",
    quoteMessage: "Hi Justin, I'd like a quote from Revolution Cleaning.",
    mixkitNote: "Hero Mixkit 45040: https://mixkit.co/free-stock-video/close-up-of-a-vacuum-steam-cleaner-45040/",
    sources: "revolutioncleaning.net.au + Google Maps (Justin, Werribee address, services, 5.0★ ~87 reviews).",
    oldLogo: "revolution-cleaning-logo.png",
  },
  "deepshine-carpet": {
    brand: {
      name: "DeepShine Carpet Cleaning",
      shortName: "Deep Shine",
      legal: "Deep Shine Cleaning",
      phoneDisplay: "0466 713 111",
      phoneTel: "+61466713111",
      address: "Melbourne West VIC",
      addressShort: "Melbourne West",
      hours: "Free estimates by phone",
      owner: "Deep Shine",
      rating: "4.6",
      reviewCount: 86,
    },
    mapsQuery: "DeepShine+Carpet+Cleaning+Melbourne",
    services: [
      { slug: "steam", title: "Carpet Steam Cleaning", summary: "Steam and deep cleaning for residential and commercial carpets." },
      { slug: "upholstery", title: "Upholstery Cleaning", summary: "Sofas and fabric upholstery cleaned on appointment." },
      { slug: "tile", title: "Tile and Grout Cleaning", summary: "Tile and grout deep cleaning for hard floors." },
      { slug: "rug", title: "Rug Cleaning", summary: "Rugs cleaned and returned when the job is done." },
      { slug: "stain", title: "Stain Treatment", summary: "Spot treatment for common carpet stains." },
      { slug: "quote", title: "Free Estimate", summary: "Phone estimate before booking a clean." },
    ],
    areasPrimary: ["Melbourne West", "Western suburbs", "North-west"],
    areasWider: ["Sunshine", "St Albans", "Deer Park", "Melton", "Werribee", "Hoppers Crossing"],
    facts: [
      { big: "86", small: "Google reviews · 4.6★ rating" },
      { big: "Steam", small: "Carpet, upholstery, tile & rugs" },
      { big: "Quote", small: "Estimate on 0466 713 111" },
    ],
    hero: {
      headline: "Carpet steam cleaning for Melbourne’s west.",
      support: "DeepShine Carpet Cleaning — carpets, upholstery, tile & grout and rugs. Call 0466 713 111 for an estimate.",
    },
    heroRating: "4.6 on Google · ~86 reviews · Melbourne West",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Services list.",
      servicesLead: "Melbourne west coverage. Call 0466 713 111.",
      aboutEyebrow: "Local facts",
      aboutHeading: "4.6★ on Google from ~86 reviews.",
      aboutLead: "Carpet, rug, tile and upholstery cleaning across western and north-western Melbourne suburbs.",
      quoteHeading: "Ask for an estimate.",
      quoteArea: "Melbourne West & surrounds",
      detailsPlaceholder: "Suburb, rooms and carpet or hard-floor type…",
      footerCtaLine: "Book a carpet clean",
      footerCtaSub: "Call DeepShine Carpet Cleaning.",
      footerBlurb: "Carpet steam cleaning, upholstery, tile and rugs across Melbourne.",
      footerPlace: "Melbourne West VIC",
    },
    word: { a: "DeepShine", b: "Carpet", tag: "Melbourne West" },
    initials: "DS",
    colors: { forest: "#0c2740", leaf: "#6bbf2a", leafBright: "#8ad44a" },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 30l16-18 16 18H8z" fill="currentColor" opacity=".28"/><path d="M12 30l12-14 12 14" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><circle cx="24" cy="34" r="4" fill="#8ad44a"/></svg>`,
    title: "DeepShine Carpet Cleaning · Melbourne west",
    description: "Carpet steam cleaning, upholstery, tile and rugs across Melbourne’s west. 4.6★ on Google. Call 0466 713 111.",
    quoteMessage: "Hi, I'd like a quote from DeepShine Carpet Cleaning.",
    mixkitNote: "Hero Mixkit 45040: https://mixkit.co/free-stock-video/close-up-of-a-vacuum-steam-cleaner-45040/",
    sources: "deepshinecarpetcleaning.com.au + Google Maps (phone, services, 4.6★ ~86 reviews).",
    oldLogo: "deepshine-carpet-logo.png",
  },
  "crystal-carpet": {
    brand: {
      name: "Crystal Carpet Cleaning",
      shortName: "Crystal",
      legal: "Crystal Carpet Cleaning",
      phoneDisplay: "0430 596 073",
      phoneTel: "+61430596073",
      address: "Melton VIC 3337",
      addressShort: "Melton / Werribee area",
      hours: "Daily 9:00 am – 5:00 pm",
      owner: "Jo",
      rating: "4.9",
      reviewCount: 80,
    },
    mapsQuery: "Crystal+Carpet+Cleaning+Melton",
    services: [
      { slug: "steam", title: "Carpet Steam Cleaning", summary: "Carpet steam cleaning for Melton and western Melbourne." },
      { slug: "eol", title: "End of Lease Carpet Cleaning", summary: "Vacate carpet cleans for bond inspections." },
      { slug: "dry", title: "Carpet Dry Cleaning", summary: "Dry cleaning option when steam is not suitable." },
      { slug: "mattress", title: "Mattress Cleaning", summary: "Mattress cleaning booked with other soft-furnishing work." },
      { slug: "rug", title: "Rug Cleaning", summary: "Rugs cleaned on site or as arranged." },
      { slug: "couch", title: "Couch Cleaning", summary: "Couch and upholstery cleaning for living rooms." },
    ],
    areasPrimary: ["Melton", "Werribee", "Hoppers Crossing"],
    areasWider: ["Tarneit", "Deer Park", "Sunshine", "Point Cook", "Sunbury"],
    facts: [
      { big: "80", small: "Google reviews · 4.9★ rating" },
      { big: "9–5", small: "Daily hours in Melton VIC 3337" },
      { big: "Jo", small: "Quotes on 0430 596 073" },
    ],
    hero: {
      headline: "Carpet cleaning from Melton.",
      support: "Crystal Carpet Cleaning — carpets, rugs, mattresses and couches across Melton and Melbourne’s west. Call Jo on 0430 596 073.",
    },
    heroRating: "4.9 on Google · ~80 reviews · Melton / Werribee area",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Carpet and soft furnishings.",
      servicesLead: "Melton VIC 3337. Call Jo on 0430 596 073.",
      aboutEyebrow: "Local facts",
      aboutHeading: "4.9★ on Google from ~80 reviews.",
      aboutLead: "Melton-based carpet cleaning covering Werribee and nearby western suburbs. Open daily 9am–5pm.",
      quoteHeading: "Message Jo for a quote.",
      quoteArea: "Melton, Werribee & western suburbs",
      detailsPlaceholder: "Suburb, carpet/rug/couch and preferred day…",
      footerCtaLine: "Book Melton carpet cleaning",
      footerCtaSub: "Call Jo at Crystal Carpet Cleaning.",
      footerBlurb: "Steam cleaning, rugs and couches across Melton and Melbourne’s west.",
      footerPlace: "Melton VIC 3337",
    },
    word: { a: "Crystal", b: "Carpet", tag: "Melton" },
    initials: "CC",
    colors: { forest: "#0c2418", leaf: "#1a8754", leafBright: "#2eac6e" },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 6l14 18-14 18L10 24 24 6z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M24 14l8 10-8 10-8-10 8-10z" fill="#2eac6e"/></svg>`,
    title: "Crystal Carpet Cleaning · Melton",
    description: "Carpet, rug, mattress and couch cleaning in Melton and Melbourne’s west. 4.9★ on Google. Call Jo 0430 596 073.",
    quoteMessage: "Hi Jo, I'd like a quote from Crystal Carpet Cleaning.",
    mixkitNote: "Hero Mixkit 45040: https://mixkit.co/free-stock-video/close-up-of-a-vacuum-steam-cleaner-45040/",
    sources: "crystalcarpetcleaning.au + Google Maps (Jo, Melton, hours, services, 4.9★ ~80 reviews).",
    oldLogo: "crystal-carpet-logo.png",
  },
  "as-cleaning": {
    brand: {
      name: "A.S Cleaning and Maintenance",
      shortName: "A.S Cleaning",
      legal: "A.S Cleaning and Maintenance",
      phoneDisplay: "0425 613 921",
      phoneTel: "+61425613921",
      address: "Werribee & Point Cook VIC",
      addressShort: "Werribee",
      hours: "Quotes by phone · Werribee & Point Cook",
      owner: "A.S",
      rating: "4.8",
      reviewCount: 136,
    },
    mapsQuery: "A.S+Cleaning+and+Maintenance+Werribee",
    services: [
      { slug: "carpet", title: "Carpet Cleaning", summary: "Carpet steam cleaning in Werribee, Point Cook and nearby suburbs." },
      { slug: "house", title: "House Cleaning", summary: "General house cleaning by appointment." },
      { slug: "eol", title: "End of Lease / Bond Cleaning", summary: "Vacate and bond cleans for rental handovers." },
      { slug: "office", title: "Office Cleaning", summary: "Office and small commercial cleans." },
      { slug: "pressure", title: "Pressure Cleaning", summary: "Outdoor pressure cleaning for hard surfaces." },
      { slug: "pest", title: "Pest Control", summary: "Pest control offered alongside cleaning work." },
    ],
    areasPrimary: ["Werribee", "Point Cook", "Hoppers Crossing"],
    areasWider: ["Tarneit", "Williams Landing", "Truganina", "Laverton", "Altona Meadows"],
    facts: [
      { big: "136", small: "Google reviews · 4.8★ rating" },
      { big: "West", small: "Werribee & Point Cook focus" },
      { big: "Phone", small: "0425 613 921 for quotes" },
    ],
    hero: {
      headline: "House and carpet cleaning in Werribee.",
      support: "A.S Cleaning and Maintenance — carpet steam cleaning, house cleans and end-of-lease across Werribee and Point Cook. Call 0425 613 921.",
    },
    heroRating: "4.8 on Google · ~136 reviews · Werribee",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Cleaning & maintenance.",
      servicesLead: "Werribee and Point Cook. Call 0425 613 921.",
      aboutEyebrow: "Local facts",
      aboutHeading: "4.8★ on Google from ~136 reviews.",
      aboutLead: "Carpet, house, office and end-of-lease cleaning for Werribee, Point Cook and nearby western suburbs.",
      quoteHeading: "Request a quote.",
      quoteArea: "Werribee, Point Cook & surrounds",
      detailsPlaceholder: "Suburb, carpet or house clean, and preferred day…",
      footerCtaLine: "Book a clean",
      footerCtaSub: "Call A.S Cleaning and Maintenance.",
      footerBlurb: "House, carpet, office and end-of-lease cleaning across Werribee and Point Cook.",
      footerPlace: "Werribee & Point Cook VIC",
    },
    word: { a: "A.S", b: "Cleaning", tag: "Werribee" },
    initials: "AS",
    colors: { forest: "#0a2428", leaf: "#0e7a86", leafBright: "#1aa3b0" },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="8" y="10" width="32" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="3"/><path d="M14 28c4-8 8-12 10-12s6 4 10 12" fill="none" stroke="#1aa3b0" stroke-width="3" stroke-linecap="round"/></svg>`,
    title: "A.S Cleaning and Maintenance · Werribee",
    description: "Carpet, house and end-of-lease cleaning in Werribee and Point Cook. 4.8★ on Google. Call 0425 613 921.",
    quoteMessage: "Hi, I'd like a quote from A.S Cleaning and Maintenance.",
    mixkitNote: "Hero Mixkit 45040: https://mixkit.co/free-stock-video/close-up-of-a-vacuum-steam-cleaner-45040/",
    sources: "amazingcleaningservice.com.au + Google Maps (phone, Werribee/Point Cook, services, 4.8★ ~136 reviews).",
    oldLogo: "as-cleaning-logo.png",
  },
  "final-feast-pest": {
    brand: {
      name: "Final Feast Pest Control",
      shortName: "Final Feast",
      legal: "Final Feast Pest Control",
      phoneDisplay: "0415 231 270",
      phoneTel: "+61415231270",
      address: "Melton area VIC",
      addressShort: "Melton",
      hours: "Same-day pest control · Melbourne & rural VIC",
      owner: "Final Feast",
      rating: "5.0",
      reviewCount: 49,
    },
    mapsQuery: "Final+Feast+Pest+Control+Melton",
    services: [
      { slug: "general", title: "Spider & General Pest", summary: "Internal, external and fenceline spray and dust treatments." },
      { slug: "cockroach", title: "German Cockroach Treatment", summary: "Gel baiting and spray work for cockroach jobs." },
      { slug: "ant", title: "Ant Treatment", summary: "Spray, dust and bait options aimed at ant activity." },
      { slug: "wasp", title: "Bees, Wasp & European Wasp", summary: "Wasp nest treatment and stinging-insect callouts." },
      { slug: "bedbug", title: "Bed Bug Treatment", summary: "Bed bug treatments booked after inspection." },
      { slug: "rodent", title: "Rodent Control", summary: "Rat and mouse control for homes and sheds." },
    ],
    areasPrimary: ["Melton", "Bacchus Marsh", "Sunbury"],
    areasWider: ["Caroline Springs", "Hillside", "Diggers Rest", "Werribee", "Hoppers Crossing"],
    facts: [
      { big: "49", small: "Google reviews · 5.0★ rating" },
      { big: "Same-day", small: "Melbourne & rural VIC callouts" },
      { big: "Melton", small: "Local pest control base" },
    ],
    hero: {
      headline: "Pest control covering Melton and surrounds.",
      support: "Final Feast Pest Control — spiders, cockroaches, ants, wasps, bed bugs and rodents. Call 0415 231 270.",
    },
    heroRating: "5.0 on Google · ~49 reviews · Melton",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Pest treatments.",
      servicesLead: "Melton area and beyond. Call 0415 231 270.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0★ on Google from ~49 reviews.",
      aboutLead: "Pest control for Melton, Bacchus Marsh, Sunbury and nearby suburbs, with same-day options when available.",
      quoteHeading: "Book a pest visit.",
      quoteArea: "Melton, Bacchus Marsh & surrounds",
      detailsPlaceholder: "Suburb, pest type (ants, cockroaches, spiders…) and urgency…",
      footerCtaLine: "Need pest control?",
      footerCtaSub: "Call Final Feast Pest Control.",
      footerBlurb: "Pest control across Melton, Melbourne and rural VIC.",
      footerPlace: "Melton area VIC",
    },
    word: { a: "Final Feast", b: "Pest", tag: "Melton" },
    initials: "FF",
    colors: { forest: "#0a1f28", leaf: "#2bb3e0", leafBright: "#48c9b0" },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 6l16 8v12c0 10-7 16-16 20C15 42 8 36 8 26V14l16-8z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M18 24l5 5 9-11" fill="none" stroke="#48c9b0" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: "Final Feast Pest Control · Melton",
    description: "Pest control in Melton and surrounds — spiders, cockroaches, ants, wasps, bed bugs and rodents. 5.0★ on Google. Call 0415 231 270.",
    quoteMessage: "Hi, I'd like a quote from Final Feast Pest Control.",
    mixkitNote: "Hero Mixkit 33583: https://mixkit.co/free-stock-video/person-disinfecting-a-door-with-spray-33583/",
    sources: "finalfeastpestcontrol.com.au + Google Maps (phone, Melton area, services, 5.0★ ~49 reviews).",
    oldLogo: "final-feast-pest-logo.png",
  },
  "friendly-pest": {
    brand: {
      name: "Friendly Pest Control",
      shortName: "Friendly Pest",
      legal: "Friendly Pest Control",
      phoneDisplay: "0420 605 365",
      phoneTel: "+61420605365",
      address: "50 Woodbury Street, Williams Landing VIC 3027",
      addressShort: "Williams Landing / Werribee",
      hours: "Quotes by phone · Melbourne west",
      owner: "Friendly Pest",
      rating: "5.0",
      reviewCount: 47,
    },
    mapsQuery: "Friendly+Pest+Control+Williams+Landing",
    services: [
      { slug: "ant", title: "Ant Control", summary: "Ant treatments for houses and workplaces." },
      { slug: "cockroach", title: "Cockroach Control", summary: "Cockroach treatments for Melbourne west properties." },
      { slug: "spider", title: "Spider Control", summary: "Spider treatments indoors and around the exterior." },
      { slug: "bee", title: "Bee Control", summary: "Bee callouts handled around the home." },
      { slug: "flea", title: "Flea Control", summary: "Flea treatments for households with pets." },
      { slug: "rodent", title: "Rodent Control", summary: "Rat and mouse control for homes and businesses." },
    ],
    areasPrimary: ["Werribee", "Williams Landing", "Hoppers Crossing"],
    areasWider: ["Tarneit", "Point Cook", "Truganina", "Deer Park", "Melton", "Altona"],
    facts: [
      { big: "47", small: "Google reviews · 5.0★ rating" },
      { big: "Local", small: "Williams Landing VIC 3027" },
      { big: "West", small: "Werribee & western suburbs" },
    ],
    hero: {
      headline: "Pest control from Williams Landing.",
      support: "Friendly Pest Control — ants, cockroaches, spiders, bees, fleas and rodents across Werribee and Melbourne’s west. Call 0420 605 365.",
    },
    heroRating: "5.0 on Google · ~47 reviews · Williams Landing / Werribee",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Pest services.",
      servicesLead: "Williams Landing base. Call 0420 605 365.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0★ on Google from ~47 reviews.",
      aboutLead: "Based at Woodbury Street, Williams Landing. Pest work across Werribee and western Melbourne suburbs.",
      quoteHeading: "Describe the pest issue.",
      quoteArea: "Werribee, Williams Landing & west",
      detailsPlaceholder: "Suburb, pest type and where you’re seeing them…",
      footerCtaLine: "Book pest control",
      footerCtaSub: "Call Friendly Pest Control.",
      footerBlurb: "Pest control for homes and businesses across Melbourne’s west.",
      footerPlace: "Williams Landing VIC 3027",
    },
    word: { a: "Friendly", b: "Pest Control", tag: "Williams Landing" },
    initials: "FP",
    colors: { forest: "#002d62", leaf: "#72bf44", leafBright: "#8ed15f" },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-width="3"/><path d="M16 24h16M24 16v16" stroke="#8ed15f" stroke-width="3.2" stroke-linecap="round"/></svg>`,
    title: "Friendly Pest Control · Williams Landing",
    description: "Pest control in Werribee, Williams Landing and Melbourne’s west. 5.0★ on Google. Call 0420 605 365.",
    quoteMessage: "Hi, I'd like a quote from Friendly Pest Control.",
    mixkitNote: "Hero Mixkit 33583: https://mixkit.co/free-stock-video/person-disinfecting-a-door-with-spray-33583/",
    sources: "friendlypestcontrol.com.au + Google Maps (Williams Landing address, phone, services, 5.0★ ~47 reviews).",
    oldLogo: "friendly-pest-logo.png",
  },
  "pest-and-snakes": {
    brand: {
      name: "Pest and Snakes Removals",
      shortName: "Pest and Snakes",
      legal: "Pest and Snakes Removals",
      phoneDisplay: "0421 879 959",
      phoneTel: "+61421879959",
      address: "Sunbury VIC",
      addressShort: "Sunbury",
      hours: "Quick inspection by phone · Sunbury & Melbourne",
      owner: "Pest and Snakes",
      rating: "5.0",
      reviewCount: 50,
    },
    mapsQuery: "Pest+and+Snakes+Removals+Sunbury",
    services: [
      { slug: "pest", title: "Pest Control", summary: "Treatments for ants, cockroaches, bed bugs and common pests." },
      { slug: "snake", title: "Snake Removal", summary: "Snake catching and removal by trained catchers." },
      { slug: "possum", title: "Possum Control", summary: "Possum control around the home." },
      { slug: "spider", title: "Spider Control", summary: "Spider treatments indoors and outdoors." },
      { slug: "rodent", title: "Rodent Control", summary: "Rat and mouse control for houses and sheds." },
      { slug: "inspect", title: "Quick Inspection", summary: "Phone triage and on-site inspection when needed." },
    ],
    areasPrimary: ["Sunbury", "Diggers Rest", "Melton"],
    areasWider: ["Gisborne", "Riddells Creek", "Craigieburn", "Bacchus Marsh"],
    facts: [
      { big: "50", small: "Google reviews · 5.0★ rating" },
      { big: "Snakes", small: "Trained catchers · Sunbury base" },
      { big: "Phone", small: "0421 879 959" },
    ],
    hero: {
      headline: "Pest and snake removal in Sunbury.",
      support: "Pest and Snakes Removals — pest control, snake catching, possums and rodents. Call 0421 879 959.",
    },
    heroRating: "5.0 on Google · ~50 reviews · Sunbury",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Pests and snakes.",
      servicesLead: "Sunbury and Melbourne. Call 0421 879 959.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0★ on Google from ~50 reviews.",
      aboutLead: "Sunbury-based pest control and snake removal covering Diggers Rest, Melton and nearby towns.",
      quoteHeading: "Request a quick inspection.",
      quoteArea: "Sunbury & Melbourne",
      detailsPlaceholder: "Suburb, pest or snake sighting, and urgency…",
      footerCtaLine: "Need pest or snake help?",
      footerCtaSub: "Call Pest and Snakes Removals.",
      footerBlurb: "Pest control and snake removal in Sunbury and Melbourne.",
      footerPlace: "Sunbury VIC",
    },
    word: { a: "Pest & Snakes", b: "Removals", tag: "Sunbury" },
    initials: "PS",
    colors: { forest: "#121812", leaf: "#3d8c3a", leafBright: "#5aad56" },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 30c8-14 24-14 32 0" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/><circle cx="36" cy="28" r="3.2" fill="#5aad56"/><path d="M12 18h8M14 14h4" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" opacity=".55"/></svg>`,
    title: "Pest and Snakes Removals · Sunbury",
    description: "Pest control and snake removal in Sunbury and Melbourne. 5.0★ on Google. Call 0421 879 959.",
    quoteMessage: "Hi, I'd like a quote from Pest and Snakes Removals.",
    mixkitNote: "Hero Mixkit 33583: https://mixkit.co/free-stock-video/person-disinfecting-a-door-with-spray-33583/",
    sources: "pestandsnakes.com.au + Google Maps (Sunbury, phone, services, 5.0★ ~50 reviews).",
    oldLogo: "pest-and-snakes-logo.png",
  },
  "babylon-pest": {
    brand: {
      name: "Babylon Pest Control",
      shortName: "Babylon",
      legal: "Babylon Pest Control",
      phoneDisplay: "0485 044 567",
      phoneTel: "+61485044567",
      address: "Werribee / Melbourne west VIC",
      addressShort: "Werribee",
      hours: "Same-day service · 7 days a week",
      owner: "Robin",
      rating: "5.0",
      reviewCount: 49,
    },
    mapsQuery: "Babylon+Pest+Control+Werribee",
    services: [
      { slug: "spider", title: "Spider Control", summary: "Spider treatments with follow-up advice." },
      { slug: "cockroach", title: "Cockroach Control", summary: "Cockroach treatments for active infestations." },
      { slug: "ant", title: "Ant Control", summary: "Identify, treat and reduce common ant problems." },
      { slug: "rodent", title: "Rats & Mice", summary: "Rodent control for cooler-month activity indoors." },
      { slug: "possum", title: "Licensed Roof Possum Control", summary: "Licensed possum removal from roofs." },
      { slug: "sameday", title: "Same-Day Service", summary: "Licensed and insured — same-day options, 7 days a week." },
    ],
    areasPrimary: ["Werribee", "Hoppers Crossing", "Tarneit"],
    areasWider: ["Point Cook", "Melton", "Altona", "Wyndham Vale", "Truganina"],
    facts: [
      { big: "49", small: "Google reviews · 5.0★ rating" },
      { big: "7 days", small: "Same-day service when available" },
      { big: "Robin", small: "0485 044 567" },
    ],
    hero: {
      headline: "Pest control across Werribee and the west.",
      support: "Babylon Pest Control — spiders, cockroaches, ants, rats, mice and possums. Licensed and insured. Call Robin on 0485 044 567.",
    },
    heroRating: "5.0 on Google · ~49 reviews · Werribee",
    scrollHint: "Scroll for services",
    copy: {
      servicesHeading: "Pest jobs we handle.",
      servicesLead: "Same-day options 7 days a week. Call Robin on 0485 044 567.",
      aboutEyebrow: "Local facts",
      aboutHeading: "5.0★ on Google from ~49 reviews.",
      aboutLead: "Werribee-focused pest control across Melbourne’s west — spiders, cockroaches, ants, rodents and roof possums.",
      quoteHeading: "Message Robin for a visit.",
      quoteArea: "Werribee & Melbourne west",
      detailsPlaceholder: "Suburb, pest type and how urgent it is…",
      footerCtaLine: "Need pest control today?",
      footerCtaSub: "Call Robin at Babylon Pest Control.",
      footerBlurb: "Pest control across Melbourne’s west — spiders, cockroaches, ants, rats, mice and possums.",
      footerPlace: "Werribee / Melbourne west VIC",
    },
    word: { a: "Babylon", b: "Pest Control", tag: "Werribee" },
    initials: "BP",
    colors: { forest: "#141414", leaf: "#d51c22", leafBright: "#e84a4f" },
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 34V18l14-8 14 8v16l-14 8-14-8z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M24 16v20M17 22h14" stroke="#e84a4f" stroke-width="3" stroke-linecap="round"/></svg>`,
    title: "Babylon Pest Control · Werribee",
    description: "Pest control in Werribee and Melbourne’s west — spiders, cockroaches, ants, rodents and possums. 5.0★ on Google. Call Robin 0485 044 567.",
    quoteMessage: "Hi Robin, I'd like a quote from Babylon Pest Control.",
    mixkitNote: "Hero Mixkit 33583: https://mixkit.co/free-stock-video/person-disinfecting-a-door-with-spray-33583/",
    sources: "babylonpestcontrol.com + Google Maps (Robin, Werribee, services, 5.0★ ~49 reviews).",
    oldLogo: "babylon-pest-logo.png",
  },
};

const LOGO_JSX = `import { logo } from "../data";

/**
 * Original styled text wordmark — no client logos or scraped brand images.
 * Placement (header / hero / footer / menu) picks the treatment from data.logo.spec.
 */
export default function Logo({ className = "", title = "" }) {
  const place = (className.match(/ts-logo--(\\w+)/) || [])[1] || "header";
  const spec = logo.spec[place] || logo.spec.header;
  const cls = \`ts-logo brand-logo brand-logo--\${spec.type} \${className}\`.trim();
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

function j(v) {
  return JSON.stringify(v);
}

function writeData(slug, s) {
  const content = `export const BASE = "/${slug}";

/*
 * Originality rebuild 2026-10-14 — no client logos, no scraped images, no copied marketing sentences.
 * Facts only from public listings (checked 14 Oct 2026):
 * - ${s.sources}
 * - ${s.mixkitNote}
 * - Wordmark + favicon monogram are original (CSS/SVG + generated PNG). Scraped logo files deleted.
 */
export const brand = ${j(s.brand)};

export const maps = { place: "https://www.google.com/maps/search/?api=1&query=${s.mapsQuery}" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Reviews"}, {"href": "#quote", "label": "Free quote"}];

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
`;
  fs.writeFileSync(path.join(ROOT, slug, "src/data.js"), content);
}

function patchCss(slug) {
  const cssPath = path.join(ROOT, slug, "src/index.css");
  let css = fs.readFileSync(cssPath, "utf8");
  const patch = `
/* Originality wordmark polish */
.brand-logo__name { font-family: var(--display); font-weight: 800; text-transform: uppercase; letter-spacing: 0.02em; }
.brand-logo__name strong { color: var(--leaf-bright); margin-right: 0.12em; font-style: normal; }
.brand-logo__name em { font-style: normal; font-weight: 700; }
.ts-logo--header.brand-logo--word { color: #fff; }
.site-header .brand-logo__name strong { color: var(--leaf-bright); }
`;
  if (!css.includes("Originality wordmark polish")) {
    css = css.replace(
      ".ts-logo--menu.brand-logo--word { font-size: 1.1rem; color: #fff; }",
      ".ts-logo--menu.brand-logo--word { font-size: 1.1rem; color: #fff; }\n" + patch
    );
    fs.writeFileSync(cssPath, css);
  }
}

function patchIndexHtml(slug, s) {
  const htmlPath = path.join(ROOT, slug, "index.html");
  let html = fs.readFileSync(htmlPath, "utf8");
  html = html.replace(/<title>.*?<\/title>/, `<title>${s.title}</title>`);
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${s.description.replace(/"/g, "&quot;")}" />`
  );
  // Prefer SVG favicon; keep PNG fallbacks that we regenerate as monograms
  if (!html.includes("favicon.svg")) {
    html = html.replace(
      `<link rel="icon" type="image/png" sizes="32x32" href="/${slug}/favicon-32.png" />`,
      `<link rel="icon" type="image/svg+xml" href="/${slug}/favicon.svg" />\n    <link rel="icon" type="image/png" sizes="32x32" href="/${slug}/favicon-32.png" />`
    );
  }
  fs.writeFileSync(htmlPath, html);
}

function writeFaviconSvg(slug, s) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${s.colors.forest}"/>
  <text x="32" y="40" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="22" font-weight="800" fill="${s.colors.leafBright}">${s.initials}</text>
</svg>`;
  fs.writeFileSync(path.join(ROOT, slug, "public/favicon.svg"), svg);
}

function generatePngIcons(slug, s) {
  const py = `
from PIL import Image, ImageDraw, ImageFont
import os
slug = ${JSON.stringify(slug)}
forest = ${JSON.stringify(s.colors.forest)}
leaf = ${JSON.stringify(s.colors.leafBright)}
initials = ${JSON.stringify(s.initials)}
out_dir = f"/workspace/{slug}/public"
os.makedirs(out_dir, exist_ok=True)

def make(size, path, radius_ratio=0.22):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    r = int(size * radius_ratio)
    draw.rounded_rectangle((0, 0, size-1, size-1), radius=r, fill=forest)
    # font
    font_size = int(size * 0.42)
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
print("icons ok", slug)
`;
  const r = spawnSync("python3", ["-c", py], { encoding: "utf8" });
  if (r.status !== 0) {
    console.error(r.stderr || r.stdout);
    throw new Error(`favicon png failed for ${slug}`);
  }
}

function deleteScrapedLogos(slug, s) {
  const paths = [
    path.join(ROOT, slug, "public/brand", s.oldLogo),
    path.join(ROOT, slug, "dist/brand", s.oldLogo),
    path.join(ROOT, slug, "public/brand"),
    path.join(ROOT, slug, "dist/brand"),
  ];
  for (const p of paths) {
    if (!fs.existsSync(p)) continue;
    const st = fs.statSync(p);
    if (st.isDirectory()) {
      // remove leftover logo files; drop empty brand dir
      for (const f of fs.readdirSync(p)) {
        fs.unlinkSync(path.join(p, f));
      }
      fs.rmdirSync(p);
    } else {
      fs.unlinkSync(p);
    }
  }
}

function main() {
  for (const [slug, s] of Object.entries(SITES)) {
    console.log("rebuilding", slug);
    writeData(slug, s);
    fs.writeFileSync(path.join(ROOT, slug, "src/components/Logo.jsx"), LOGO_JSX);
    patchCss(slug);
    patchIndexHtml(slug, s);
    writeFaviconSvg(slug, s);
    generatePngIcons(slug, s);
    deleteScrapedLogos(slug, s);
  }
  // Persist stock media URL list for the report
  const media = {
    carpetHero: "https://mixkit.co/free-stock-video/close-up-of-a-vacuum-steam-cleaner-45040/",
    pestHero: "https://mixkit.co/free-stock-video/person-disinfecting-a-door-with-spray-33583/",
    note: "Hero videos already in public/videos/ (Mixkit free licence). No business-site or Maps images remain.",
  };
  fs.writeFileSync(
    path.join(ROOT, "scripts/originality-stock-media-2026-10-14.json"),
    JSON.stringify(media, null, 2) + "\n"
  );
  console.log("done", Object.keys(SITES).length, "sites");
}

main();
