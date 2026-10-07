export const BASE = "/charlies-bobcat-tipper";

/*
 * Real data only — sources:
 * - ABN Lookup 43 324 531 443: sole trader Carmelo Saliba, business name CHARLYS BOBCAT (VIC 3037)
 * - hipages /connect/charlysbobcat: "CLEARED. LEVELED. HAULED.", combo wet hire (excavator + bobcat + tipper),
 *   4.5 from 11 ratings, 19 hires, member since 2018, Caroline Springs VIC 3023
 * - misterwhat / localbusinessguide / australia2business: 26 Lawson Way, Caroline Springs VIC 3023, 0402 212 733
 * - Felix marketplace: wheel skid steer, track skid steer / posi track, 10m tipper, 2.6–5t tipper
 */
export const brand = {
  name: "Charly's Bobcat & Tipper",
  shortName: "CHARLY'S",
  wordmarkRest: "Bobcat",
  legal: "Charlys Bobcat",
  phoneDisplay: "0402 212 733",
  phoneTel: "+61402212733",
  /**
   * Site lead form sends SMS to the mobile.
   * Do not invent emails or wire mailto on the page.
   */
  address: "26 Lawson Way, Caroline Springs VIC 3023",
  addressShort: "Caroline Springs",
  owner: "Charly",
};

export const maps = {
  place:
    "https://www.google.com/maps/search/?api=1&query=Charly%27s+Bobcat+Tipper+26+Lawson+Way+Caroline+Springs",
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#quote", label: "Get a quote" },
];

export const services = [
  {
    slug: "combo-wet-hire",
    title: "Combo Wet Hire",
    summary: "Excavator, bobcat and tipper together, operated — one crew, one booking.",
  },
  {
    slug: "excavation",
    title: "Excavation & Site Cuts",
    summary: "The excavator cuts, the bobcat loads, the job keeps moving.",
  },
  {
    slug: "bobcat-hire",
    title: "Bobcat Hire",
    summary: "Wheeled skid steer for levelling, digs and clean-ups.",
  },
  {
    slug: "posi-track",
    title: "Posi Track",
    summary: "Tracked skid steer for soft ground and tight backyards.",
  },
  {
    slug: "tipper-hire",
    title: "Tipper Truck Hire",
    summary: "10m tipper or 2.6–5 tonne tipper — sized to the load.",
  },
  {
    slug: "haul-away",
    title: "Soil & Spoil Haul-away",
    summary: "No waiting on third-party trucks — material loaded and gone.",
  },
];

export const areasPrimary = ["Caroline Springs", "Hillside", "Melton West"];
export const areasWider = ["Sydenham", "Diggers Rest", "Point Cook"];

export const review = {
  quote:
    "Excellent price and great work. Charlie went above and beyond what I asked for no extra cost, and a nice bloke as well. Recommend to anyone.",
  author: "Peter H., Sydenham VIC",
  source: "hipages · 5.0 · verified hire",
};

export const stats = "4.5★ from 11 hipages ratings · 19 hires · on hipages since 2018";

export const hero = {
  headline: "Cleared. Leveled. Hauled.",
  support:
    "Charly's — excavator, bobcat and tipper as one crew out of Caroline Springs. No waiting around for third-party trucks: we cut, load and haul in one go across Melbourne's west.",
};
