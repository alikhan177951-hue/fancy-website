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

await writeFile(
  join(dist, ".htaccess"),
  `# Bobcatbob static site — lives ONLY under public_html/kaamtasker.com/bobcatbob/
# Do not apply this file to KaamTasker app, marketing SPA root, or /api.

DirectoryIndex index.html
Options -Indexes

<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`,
  "utf8",
);

await writeFile(
  join(dist, "404.html"),
  `<!DOCTYPE html>
<html lang="en-AU">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Page not found · ${brand.name}</title>
    <meta name="theme-color" content="#0064d8" />
    <link rel="canonical" href="https://kaamtasker.com${BASE}/" />
    <style>
      body {
        font-family: "DM Sans", system-ui, sans-serif;
        background:
          radial-gradient(700px 320px at 10% 0%, rgba(0, 100, 216, 0.14), transparent 55%),
          #eef3f9;
        color: #0f172a;
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 2rem;
      }
      a { color: #0064d8; font-weight: 700; }
      .wrap { text-align: center; max-width: 28rem; }
      .plate {
        display: inline-block;
        background: #fff;
        border: 1px solid rgba(0, 100, 216, 0.16);
        border-radius: 12px;
        padding: 0.4rem 0.55rem;
        margin-bottom: 1.2rem;
        box-shadow: 0 2px 10px rgba(0, 58, 138, 0.12);
      }
      .plate img { height: 52px; width: auto; display: block; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="plate">
        <img src="${BASE}/images/logo/logo-1.png" alt="${brand.name}" width="210" height="98" />
      </div>
      <p>Nothing here. <a href="${BASE}/">Back to home</a> · <a href="tel:${brand.phoneTel}">${brand.phoneDisplay}</a></p>
    </div>
  </body>
</html>
`,
  "utf8",
);

await writeFile(
  join(dist, "favicon.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="${brand.name}">
  <rect width="64" height="64" rx="12" fill="#0064d8"/>
  <text x="32" y="40" text-anchor="middle" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#ffffff">DB</text>
  <rect x="10" y="46" width="44" height="10" rx="2" fill="#fcfc64"/>
</svg>
`,
  "utf8",
);

console.log(`Built ${pages.length} pages into dist/ with asset prefix ${BASE}/`);
