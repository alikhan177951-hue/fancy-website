export const BASE = "/bobcatbob";

export const img = (path) => `${BASE}/images/${path}`;

export const brand = {
  name: "DB Bobcat and Tipper Hire",
  legal: "DB BOBCAT AND TIPPER HIRE PTY LTD",
  owner: "David",
  phoneDisplay: "0412 026 793",
  phoneTel: "+61412026793",
  email: "dbbobcat@optusnet.com.au",
  address: "8 Lush Crt, Altona Meadows VIC 3028",
  addressShort: "Altona Meadows",
  abn: "53 138 642 412",
  acn: "138 642 412",
  rating: "5.0",
  reviewCount: "11–15 Google reviews",
  logo: img("logo/logo-1.png"),
  favicon: img("favicon/favicon-32x32.png"),
};

export const hours = {
  primary: "Monday–Saturday 8:00 am – 6:00 pm",
  sunday: "Sunday closed",
  note: "Hours from Google Maps / directory listings.",
};

export const maps = {
  embed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.4646014715618!2d144.76732837519089!3d-37.87281613741414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad689cc1faf6f6b%3A0x39375c80272ed70c!2s8%20Lush%20Ct%2C%20Altona%20Meadows%20VIC%203028%2C%20Australia!5e0!3m2!1sen!2sin!4v1681761106102!5m2!1sen!2sin",
  place:
    "https://www.google.com/maps/place/8+Lush+Ct,+Altona+Meadows+VIC+3028/@-37.8728161,144.769903,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad689cc1faf6f6b:0x39375c80272ed70c!8m2!3d-37.8728161!4d144.769903",
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#quote", label: "Get a quote" },
];

export const services = [
  {
    slug: "site-preparation",
    title: "Site Preparation",
    summary: "Excavation and levelling so projects start clean and level.",
  },
  {
    slug: "rock-removal",
    title: "Rock Removal",
    summary: "Safe removal of rocks of any size — hourly or fixed quote.",
  },
  {
    slug: "soil-removal",
    title: "Soil Removal",
    summary: "Any volume across western Melbourne. Site inspections complimentary.",
  },
  {
    slug: "concrete-removal",
    title: "Concrete Removal",
    summary: "Driveways, footpaths, old footings and brickwork.",
  },
  {
    slug: "concrete-cutting",
    title: "Concrete Cutting",
    summary: "Cutters for tight areas — slabs, footings, hard ground.",
  },
  {
    slug: "rubbish-removal",
    title: "Rubbish Removal",
    summary: "Tippers 2–12 tonne for builders’ waste and spoils.",
  },
  {
    slug: "site-clean",
    title: "Site Clean",
    summary: "Post-construction clean-up, spoils out, final trim.",
  },
  {
    slug: "small-demolition",
    title: "Small Demolition",
    summary: "Sheds and small structures — safety-first, one-person crew.",
  },
];

export const areasPrimary = ["Altona Meadows", "Laverton", "Seabrook"];
export const areasWider = [
  "Werribee",
  "Altona",
  "Melton",
  "Rockbank",
  "Wyndham Vale",
  "Manor Lakes",
];

export const hero = {
  headline: "Western Melbourne earthmoving, without the runaround.",
  support:
    "Owner-operated by David. Bobcat and tipper hire for site prep, rock and soil, concrete, small demolition, and a proper clean-up.",
};
