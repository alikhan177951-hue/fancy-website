export const BASE = "/tipper-hire-melbourne";

/*
 * Real data only — sources:
 * - Their old WordPress site tipperhiremelbourne.com.au (Wayback snapshots 2022–2023; domain no longer resolves, Oct 2026):
 *   "Melbourne-wide Tipper Hire for Commercial and Domestic Projects", "Integrity | Professionalism | Quality",
 *   tipper, bobcat and excavator hire, short or long term hiring, labour hire solutions, other services,
 *   0401 834 848, info@tipperhiremelbourne.com.au, Chelmsford Street, Williamstown; testimonial "Amber S"; logo.
 * - Google Maps listing (lead research): Tipper Hire Melbourne, 49 Chelmsford St, Williamstown North VIC 3016.
 * - No registered business name/ABN found for "Tipper Hire Melbourne"; no hipages profile found.
 */
export const brand = {
  name: "Tipper Hire Melbourne",
  shortName: "Tipper Hire",
  wordmarkRest: "Melbourne",
  logo: "/tipper-hire-melbourne/images/thm-logo.png",
  legal: "Tipper Hire Melbourne",
  phoneDisplay: "0401 834 848",
  phoneTel: "+61401834848",
  /**
   * Site lead form sends SMS to the mobile.
   * Do not wire mailto on the page.
   */
  address: "Chelmsford St, Williamstown North VIC 3016",
  addressShort: "Williamstown North",
  hours: "Short or long term hire",
  owner: "the team",
};

export const maps = {
  place:
    "https://www.google.com/maps/search/?api=1&query=Tipper+Hire+Melbourne+49+Chelmsford+St+Williamstown+North",
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#quote", label: "Get a quote" },
];

export const services = [
  {
    slug: "tipper-hire",
    title: "Tipper Hire",
    summary: "Tippers with drivers for soil, spoil, fill and rubbish — in or out.",
  },
  {
    slug: "bobcat-hire",
    title: "Bobcat Hire",
    summary: "Bobcat with operator for digs, levelling and site clean-ups.",
  },
  {
    slug: "excavator-hire",
    title: "Excavator Hire",
    summary: "Excavators for excavation, trenching and earthmoving jobs.",
  },
  {
    slug: "short-long-term",
    title: "Short or Long Term Hiring",
    summary: "One day or the whole project — hire for as long as the job runs.",
  },
  {
    slug: "labour-hire",
    title: "Labour Hire Solutions",
    summary: "Extra hands on site, plus end-to-end solutions for every job size.",
  },
  {
    slug: "commercial-domestic",
    title: "Commercial & Domestic",
    summary: "Builders, landscapers and homeowners — Melbourne-wide.",
  },
];

export const areasPrimary = ["Williamstown North"];
export const areasWider = ["Melbourne's west", "Melbourne-wide"];

export const review = {
  quote:
    "I use Tipper Hire Melbourne for all my client landscaping and excavating. They have never let us down.",
  author: "Amber S",
  source: "Customer testimonial",
};

export const stats = "integrity, professionalism and quality on every job";

export const hero = {
  headline: "Tipper, bobcat & excavator hire — one call.",
  support:
    "Melbourne-wide tipper hire for commercial and domestic projects, out of Williamstown North. Bobcats, excavators and labour hire too.",
};
