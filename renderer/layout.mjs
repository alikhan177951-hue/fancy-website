import { BASE, SITE_URL, brand, hours, maps, nav } from "./data.mjs";

export function asset(path) {
  return `${BASE}/${path.replace(/^\//, "")}`;
}

export function href(path) {
  if (path.startsWith("http") || path.startsWith("tel:") || path.startsWith("mailto:")) {
    return path;
  }
  if (path === "/") return `${BASE}/`;
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

function navMarkup(active) {
  return nav
    .map((item) => {
      const isActive =
        (active === "home" && item.href === "/") ||
        (active === "services" && item.href.includes("services")) ||
        (active === "about" && item.href.includes("about")) ||
        (active === "contact" && item.href.includes("contact"));
      return `<a href="${href(item.href)}"${isActive ? ' aria-current="page"' : ""}>${item.label}</a>`;
    })
    .join("");
}

export function page({
  title,
  description,
  active,
  body,
  canonical,
}) {
  const canon = canonical || SITE_URL + (active === "home" ? "/" : `/${active}.html`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    image: `${SITE_URL}/images/logo/logo-1.png`,
    telephone: brand.phoneTel,
    email: brand.email,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 Lush Crt",
      addressLocality: "Altona Meadows",
      addressRegion: "VIC",
      postalCode: "3028",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -37.872816,
      longitude: 144.769903,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    founder: brand.owner,
  };

  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canon}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canon}">
  <meta property="og:image" content="${SITE_URL}/images/logo/fav-1.png">
  <meta name="theme-color" content="#0c0b09">
  <link rel="icon" href="${asset("images/favicon/favicon.ico")}">
  <link rel="icon" type="image/png" sizes="32x32" href="${asset("images/favicon/favicon-32x32.png")}">
  <link rel="icon" type="image/png" sizes="16x16" href="${asset("images/favicon/favicon-16x16.png")}">
  <link rel="apple-touch-icon" href="${asset("images/favicon/apple-touch-icon.png")}">
  <link rel="mask-icon" href="${asset("images/favicon/safari-pinned-tab.svg")}" color="#1d4ed8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@1,8..60,560&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${asset("assets/site.css")}">
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <header class="site-header" data-header>
    <div class="header-inner">
      <a class="brand" href="${href("/")}">
        <img src="${asset("images/logo/logo-1.png")}" alt="${brand.name}" width="210" height="98">
      </a>
      <nav class="nav" id="site-nav" aria-label="Primary">
        ${navMarkup(active)}
      </nav>
      <div class="header-cta">
        <a class="btn btn-call" href="tel:${brand.phoneTel}">Call David</a>
        <button class="menu-btn" type="button" data-menu-toggle aria-expanded="false" aria-controls="site-nav">
          <span></span><span></span>
        </button>
      </div>
    </div>
  </header>
  <main id="main">${body}</main>
  <footer class="site-footer" style="--footer-bg: url('${asset("images/gallery/footer1.jpg")}')">
    <div class="wrap footer-grid">
      <div>
        <img class="footer-logo" src="${asset("images/logo/logo-1.png")}" alt="${brand.name}" width="168" height="78">
        <p class="footer-tag">Owner-operated bobcat and tipper hire for western Melbourne. David on the machine.</p>
        <a class="btn btn-gold" href="tel:${brand.phoneTel}">Call David ${brand.phoneDisplay}</a>
      </div>
      <div>
        <h2>Visit</h2>
        <p><a href="${maps.place}">${brand.address}</a></p>
        <p><a href="mailto:${brand.email}">${brand.email}</a></p>
        <p><a href="tel:${brand.phoneTel}">${brand.phoneDisplay}</a></p>
      </div>
      <div>
        <h2>Hours</h2>
        <p>${hours.primary}<br>${hours.sunday}</p>
        <p class="fine">${hours.mapsNote}</p>
        <p class="fine">${hours.websiteNote}</p>
      </div>
      <div>
        <h2>Site</h2>
        <ul class="footer-links">
          <li><a href="${href("/")}">Home</a></li>
          <li><a href="${href("/services.html")}">Services</a></li>
          <li><a href="${href("/about.html")}">About</a></li>
          <li><a href="${href("/contact.html")}">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="wrap legal">
      <p>${brand.legal} · ABN ${brand.abn} · ACN ${brand.acn}</p>
      <p>Based near Altona Meadows, Laverton &amp; Seabrook. Hosted path /bobcatbob/.</p>
    </div>
  </footer>
  <div class="mobile-bar" role="navigation" aria-label="Call now">
    <a href="tel:${brand.phoneTel}">Call David</a>
    <a class="ghost" href="mailto:${brand.email}">Email</a>
  </div>
  <div class="lightbox" id="lightbox" hidden>
    <button class="lightbox-close" type="button" aria-label="Close gallery">Close</button>
    <button class="lightbox-prev" type="button" aria-label="Previous photo">‹</button>
    <img alt="">
    <button class="lightbox-next" type="button" aria-label="Next photo">›</button>
    <p class="lightbox-cap"></p>
  </div>
  <script src="${asset("assets/site.js")}" defer></script>
</body>
</html>`;
}
