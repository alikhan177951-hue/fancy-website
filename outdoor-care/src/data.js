export const BASE = "/outdoor-care";

/*
 * Real data only — sources (checked 8 Oct 2026):
 * - Google Business Profile via exa place snapshot https://exa.ai/library/place/ljycxly94sj: 4.9 from 52 reviews, 0480 300 790, hours, verbatim reviews (latest 26 Jan 2026)
 * - Their own (now offline) site outdoorcares.com, Google-indexed /contact and /pricing: outdoorcare2022@gmail.com, 0480 300 790, 91 Lena Crescent Truganina, fencing/framing/decking/gates
 */
export const brand = {"name": "Outdoor Care", "shortName": "Outdoor Care", "legal": "Outdoor Care", "phoneDisplay": "0480 300 790", "phoneTel": "+61480300790", "address": "Plumpton & Truganina, Melbourne's west", "addressShort": "Melbourne's west", "hours": "Mon – Sat 7am – 5:30pm · Sun 9am – 5pm", "owner": "Gurpreet", "rating": "4.9", "reviewCount": 52};

export const maps = { place: "https://www.google.com/maps/search/?api=1&query=Outdoor+Care+8+Dayspring+Rd+Plumpton+VIC" };

export const nav = [{"href": "#services", "label": "Services"}, {"href": "#about", "label": "Reviews"}, {"href": "#quote", "label": "Free quote"}];

export const services = [{"slug": "fencing", "title": "Timber Fencing", "summary": "New fences built to an excellent standard with quality timber — neat, on time and on budget."}, {"slug": "gates", "title": "Gates", "summary": "Gates built and hung to match the fence line."}, {"slug": "decking", "title": "Decking & Framing", "summary": "Decks and framing for outdoor living areas."}, {"slug": "landscaping", "title": "Landscaping", "summary": "Front and back gardens revitalised, from the plan to the final clean-up."}, {"slug": "concreting", "title": "Concreting", "summary": "Concrete work and concrete cleaning that makes the space look brand new."}, {"slug": "brick-render", "title": "Brick Walls & Rendering", "summary": "Brick walls and rendering finished as part of the full outdoor job."}];

export const areasPrimary = ["Plumpton", "Truganina"];
export const areasWider = ["Melbourne's west"];

export const reviews = [{"quote": "The fencing work was completed to an excellent standard. Gurpreet was very professional, reliable, and clearly experienced. His honesty and transparency throughout the process were truly appreciated and the final result exceeded expectations.", "date": "Dec 2025"}, {"quote": "Gurpreet and his team did a fantastic job with our landscaping. Great quality work with very competitive pricing. Time commitment, expertise, communication, work ethic, everything top notch! Highly recommend!!!", "date": "Dec 2025"}, {"quote": "The best in the west. Gurpreet Done an amazing job. He looked after the work done on fencing, concreting, brick wall, rendering and the landscaping. Definitely recommend.", "date": "Jan 2025"}];
export const facts = [];

export const hero = {"headline": "Fences, decks and gardens, done right.", "support": "Outdoor Care — fencing, gates, decking, landscaping and concreting across Plumpton, Truganina and Melbourne's west. Free quotes from Gurpreet."};
export const heroRating = "4.9 on Google · 52 reviews · Open 7 days";
export const scrollHint = "Scroll to plant";
export const copy = {"servicesHeading": "The whole outdoor job, one team.", "servicesLead": "Fencing to landscaping, quoted honestly and finished on time — call Gurpreet on 0480 300 790.", "aboutEyebrow": "Reviews · areas", "aboutHeading": "4.9★ from 52 Google reviews.", "aboutLead": "Gurpreet and the Outdoor Care team handle fencing, decking, concreting and landscaping across Melbourne's west — honest pricing and clear communication.", "quoteHeading": "Tell Gurpreet about the job.", "quoteArea": "Melbourne's west", "detailsPlaceholder": "Suburb, fence length or area, and what you'd like done…", "footerCtaLine": "Fence, deck or garden?", "footerCtaSub": "Free quotes, open 7 days.", "footerBlurb": "Fencing, gates, decking, landscaping and concreting across Plumpton, Truganina and Melbourne's west.", "footerPlace": "Plumpton · Truganina VIC"};
export const logo = {"spec": {"header": {"type": "word"}, "hero": {"type": "word"}, "footer": {"type": "word"}, "menu": {"type": "word"}}, "word": {"a": "Outdoor", "b": "Care", "tag": "Fencing · Landscaping"}, "icon": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M7 41C7 20 21 8 42 6c-1 21-13 35-35 35z\" fill=\"#7aa35a\"/><path d=\"M9 39C17 29 25 21 36 12\" stroke=\"#e3a24d\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M17 31l-1-9M23 25l-1-8M23 25l8 1M17 31l8 1\" stroke=\"#e3a24d\" stroke-width=\"2.4\" fill=\"none\" stroke-linecap=\"round\"/></svg>"};

export const quoteMessage = "Hi Gurpreet, I'd like a free quote from Outdoor Care.";
