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
  addressShort: "8 Lush Crt, Altona Meadows",
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
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#areas", label: "Areas" },
  { href: "#reviews", label: "Reviews" },
  { href: "#quote", label: "Get a quote" },
];

export const services = [
  {
    slug: "site-preparation",
    title: "Site Preparation",
    image: img("gallery/site-preparation-1.jpg"),
    summary:
      "Excavation and levelling with bobcats and tippers so projects start on a clean, level site.",
  },
  {
    slug: "rock-removal",
    title: "Rock Removal",
    image: img("gallery/rock-removal.jpg"),
    summary:
      "Safe, efficient removal of rocks of any size. Hourly hire plus floatage, or a fixed quote.",
  },
  {
    slug: "concrete-cutting",
    title: "Concrete Cutting",
    image: img("gallery/concrete-cutting.jpg"),
    summary:
      "Concrete cutters for tight areas and hard ground — old footings, slabs, and brickwork.",
  },
  {
    slug: "site-clean",
    title: "Site Clean",
    image: img("gallery/site-clean.jpg"),
    summary:
      "Post-construction clean-up, footings to spec, tippers for spoils, and final trimming.",
  },
  {
    slug: "rubbish-removal",
    title: "Rubbish Removal",
    image: img("gallery/rubbish.jpeg"),
    summary:
      "Tippers from 2 tonne to 12 tonne 6-wheelers for builders’ waste and spoils. Recycle where possible.",
  },
  {
    slug: "small-demolition",
    title: "Small Demolition",
    image: img("gallery/small-demolition.jpg"),
    summary:
      "Sheds and other small structures, run as a one-person operation with a safety-first approach.",
  },
  {
    slug: "soil-removal",
    title: "Soil Removal",
    image: img("gallery/soil-removal.jpg"),
    summary:
      "Any volume, any western-Melbourne location. Complimentary site inspections to match the machine.",
  },
  {
    slug: "concrete-removal",
    title: "Concrete Removal",
    image: img("gallery/a-8.jpeg"),
    summary:
      "Driveways, footpaths, old footings and brickwork — machinery for tight or hard areas.",
  },
];

export const process = [
  {
    n: "01",
    title: "Call us",
    text: "Call 0412 026 793 and talk through the earthmoving or demolition work. A few questions is usually enough to see how David can help.",
  },
  {
    n: "02",
    title: "Get a quote",
    text: "Once the job is clear, you get a detailed quote covering cost and scope. Transparency first — no fuzzy extras.",
  },
  {
    n: "03",
    title: "Schedule the work",
    text: "Agree a date and time. Scheduling stays flexible around your site and other trades, and you stay informed through the job.",
  },
];

export const trust = [
  {
    title: "Reliable equipment",
    text: "Premium bobcats and tippers kept in working order so the plant starts when the job does.",
  },
  {
    title: "Professional operator",
    text: "One skilled operator on the tools, with safety protocols on every job.",
  },
  {
    title: "Price and time",
    text: "Competitive rates, flexible scheduling, and personal service from first call to last tip.",
  },
];

export const reviews = [
  {
    quote:
      "Really glad i found him to demolish our front yard, excellent work ethics, hard working, good communication… pretty good price, thanks Dave!",
    meta: "Google review · 10 Apr 2025",
  },
  {
    quote:
      "I had David do a site clean, what a gentlemen with great communication, workmanship and rates. Highly recommend.",
    meta: "Google review · 25 Mar 2025",
  },
  {
    quote:
      "Dave was such a pleasure to work with. Came around the same day to do a quote… Arrived the next day on time… Would recommend Dave in a heartbeat…",
    meta: "Google review · 7 Nov 2024",
  },
  {
    quote:
      "Very nice person to deal with. Open and clear communication. Prompt response. Great service. Thank you David…",
    meta: "Google review · 25 Aug 2024",
  },
];

export const gallery = Array.from({ length: 17 }, (_, i) => {
  const n = i + 1;
  return {
    src: img(`gallery/a-${n}.jpeg`),
    alt: `DB Bobcat and Tipper Hire job photo ${n}`,
  };
});

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
  image: img("gallery/aa.jpeg"),
  brand: "DB Bobcat and Tipper Hire",
  headline: "Western Melbourne earthmoving, without the runaround.",
  support:
    "Owner-operated by David from Altona Meadows. Bobcat and tipper hire for site prep, rock and soil, concrete, small demolition, and a proper clean-up.",
};
