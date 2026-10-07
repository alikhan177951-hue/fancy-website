export const BASE = "/jaz-bobcat-tipper";

/*
 * Real data only — sources:
 * - ABN Lookup 47 788 261 813: E Debrincat & R.J Debrincat (family partnership), trading name
 *   "A JAZ BOBCAT & TIPPER HIRE" since 23 Oct 2007; newer company JAZ BOBCAT & TIPPER HIRE PTY LTD (ABN 46 688 456 724, Jun 2025)
 * - Whereis: A J.A.Z Bobcat & Tipper Hire, 0438 063 525, 20 Torquata Court, Hoppers Crossing VIC 3029,
 *   Excavation & Earthmoving Contractors (also lists the business email — not shown on this page)
 * - AussieWeb / localbusinessguide / zipleaf: landline (03) 9974 3720; earthmoving, excavating,
 *   skip bin hire, rubbish & waste removal, landscape contractors
 * - iseekplant: "Excavation and Earthmoving needs. Give Manny a call." Bobcat S205 (2013, 1.5t–3t)
 * - dlook: excavations & foundations, contract labour, trenching, site clearance
 * - No public reviews found (iseekplant, localbusinessguide, dlook empty; no hipages profile found)
 */
export const brand = {
  name: "A J.A.Z Bobcat & Tipper Hire",
  shortName: "J.A.Z",
  wordmarkRest: "Bobcat",
  legal: "A J.A.Z Bobcat & Tipper Hire",
  phoneDisplay: "0438 063 525",
  phoneTel: "+61438063525",
  landlineDisplay: "(03) 9974 3720",
  /**
   * Site lead form sends SMS to the mobile.
   * Do not wire mailto on the page.
   */
  address: "20 Torquata Court, Hoppers Crossing VIC 3029",
  addressShort: "Hoppers Crossing",
  owner: "Manny",
};

export const maps = {
  place:
    "https://www.google.com/maps/search/?api=1&query=A+J.A.Z+Bobcat+Tipper+Hire+20+Torquata+Court+Hoppers+Crossing",
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#quote", label: "Get a quote" },
];

export const services = [
  {
    slug: "bobcat-hire",
    title: "Bobcat Hire",
    summary: "Bobcat S205 with operator — digs, levelling and tidy finishes.",
  },
  {
    slug: "tipper-hire",
    title: "Tipper Hire",
    summary: "Soil, spoil and fill carted in or out by tipper.",
  },
  {
    slug: "excavation",
    title: "Excavation & Earthmoving",
    summary: "Site prep, excavations and foundations for home and commercial jobs.",
  },
  {
    slug: "trenching",
    title: "Trenching",
    summary: "Trenches dug clean for services and footings.",
  },
  {
    slug: "site-clearance",
    title: "Site Clearance",
    summary: "Clear-outs and clean-ups before or after the build.",
  },
  {
    slug: "rubbish-removal",
    title: "Rubbish & Waste Removal",
    summary: "Loaded up and taken away — one call, job done.",
  },
];

export const areasPrimary = ["Hoppers Crossing"];
export const areasWider = ["Melbourne's west"];

/* No public reviews found — the About block shows the owner line instead. */
export const review = null;

export const stats = "Trading as A J.A.Z Bobcat & Tipper Hire since 2007";

export const hero = {
  headline: "Bobcat & tipper hire — give Manny a call.",
  support:
    "J.A.Z — bobcat, tipper, excavation and earthmoving out of Hoppers Crossing. Trenching, site clearance and rubbish removal too. One call, sorted.",
};
