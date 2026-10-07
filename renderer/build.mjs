import { mkdir, cp, writeFile, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { page } from "./layout.mjs";
import { homePage, aboutPage, servicesPage, contactPage } from "./pages.mjs";
import { BASE, brand } from "./data.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const media = join(root, "sitemd", "media");

await rm(dist, { recursive: true, force: true });
await mkdir(join(dist, "assets"), { recursive: true });
await mkdir(join(dist, "images"), { recursive: true });

await cp(join(root, "renderer", "static", "site.css"), join(dist, "assets", "site.css"));
await cp(join(root, "renderer", "static", "site.js"), join(dist, "assets", "site.js"));
await cp(media, join(dist, "images"), { recursive: true });

const pages = [
  {
    file: "index.html",
    active: "home",
    title: `${brand.name} · Western Melbourne bobcat & tipper hire`,
    description:
      "Owner-operated bobcat and tipper hire in Altona Meadows. Site prep, rock and soil, concrete, small demolition, and clean-up across western Melbourne. Call David 0412 026 793.",
    body: homePage(),
    canonical: `https://kaamtasker.com${BASE}/`,
  },
  {
    file: "about.html",
    active: "about",
    title: `About · ${brand.name}`,
    description:
      "David’s owner-operated excavation service in Altona Meadows — site prep through demolition and clean-up for western Melbourne.",
    body: aboutPage(),
  },
  {
    file: "services.html",
    active: "services",
    title: `Services · ${brand.name}`,
    description:
      "Site preparation, rock removal, concrete cutting, site clean, rubbish, small demolition, soil and concrete removal. Tippers 2 t to 12 t.",
    body: servicesPage(),
  },
  {
    file: "contact.html",
    active: "contact",
    title: `Contact David · ${brand.name}`,
    description:
      "Call David 0412 026 793 · dbbobcat@optusnet.com.au · 8 Lush Crt, Altona Meadows VIC 3028.",
    body: contactPage(),
  },
];

for (const p of pages) {
  await writeFile(
    join(dist, p.file),
    page({
      title: p.title,
      description: p.description,
      active: p.active,
      body: p.body,
      canonical: p.canonical,
    }),
    "utf8",
  );
}

await writeFile(
  join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: https://kaamtasker.com${BASE}/sitemap.xml\n`,
  "utf8",
);

await writeFile(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://kaamtasker.com${BASE}/</loc></url>
  <url><loc>https://kaamtasker.com${BASE}/about.html</loc></url>
  <url><loc>https://kaamtasker.com${BASE}/services.html</loc></url>
  <url><loc>https://kaamtasker.com${BASE}/contact.html</loc></url>
</urlset>
`,
  "utf8",
);

console.log(`Built ${pages.length} pages into dist/ with asset prefix ${BASE}/`);
