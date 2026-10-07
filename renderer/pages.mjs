import {
  brand,
  hours,
  maps,
  services,
  process,
  reviews,
  gallery,
  areasPrimary,
  areasWider,
} from "./data.mjs";
import { asset, href } from "./layout.mjs";

function serviceCards() {
  return services
    .map(
      (s) => `<a class="svc" href="${href(`/services.html#${s.slug}`)}">
        <div class="svc-media"><img src="${asset(`images/${s.image}`)}" alt="${s.title}" loading="lazy"></div>
        <div class="svc-body">
          <h3>${s.title}</h3>
          <p>${s.summary}</p>
          <span class="more">View service</span>
        </div>
      </a>`,
    )
    .join("");
}

function galleryItems() {
  return gallery
    .map(
      (g, i) => `<a class="tile tile-${(i % 7) + 1}" href="${asset(`images/${g.src}`)}" data-lightbox="${g.alt}">
        <img src="${asset(`images/${g.src}`)}" alt="${g.alt}" loading="lazy">
      </a>`,
    )
    .join("");
}

export function homePage() {
  return `
  <section class="hero">
    <div class="hero-media">
      <img src="${asset("images/gallery/aa.jpeg")}" alt="DB Bobcat on a western Melbourne job site">
    </div>
    <div class="hero-shade"></div>
    <div class="wrap hero-copy">
      <p class="kicker">Altona Meadows · Owner-operated by ${brand.owner}</p>
      <h1>Western Melbourne earthmoving, <em>without the runaround.</em></h1>
      <p class="lede">Bobcat and tipper hire for site prep, rock and soil, concrete, small demolition, and a proper clean-up. One operator. One number.</p>
      <div class="hero-actions">
        <a class="btn btn-gold" href="tel:${brand.phoneTel}">Call David ${brand.phoneDisplay}</a>
        <a class="btn btn-ghost" href="${href("/contact.html")}">Get a quote</a>
      </div>
      <dl class="hero-meta">
        <div><dt>Google</dt><dd>${brand.rating} ★ · ${brand.reviewCount}</dd></div>
        <div><dt>Hours</dt><dd>${hours.primary}</dd></div>
        <div><dt>Yard</dt><dd>8 Lush Crt, Altona Meadows</dd></div>
      </dl>
    </div>
  </section>

  <section class="strip">
    <div class="wrap strip-inner">
      <p>Site preparation → demolition → clean-up. Residential and commercial across the western suburbs.</p>
    </div>
  </section>

  <section class="about-band" id="about">
    <div class="wrap split">
      <figure class="frame">
        <img src="${asset("images/gallery/abbyy-1.jpg")}" alt="David’s bobcat and tipper plant">
        <figcaption>Locally owned · Altona Meadows VIC</figcaption>
      </figure>
      <div>
        <p class="kicker">About</p>
        <h2>David on the tools — not a call centre.</h2>
        <p>DB Bobcat and Tipper Hire is a locally owned, owner-operated excavation service. David has years in the industry and runs the job himself: site cleaning, soil and rock removal, rubbish, concrete, small demolition, and concrete cutting.</p>
        <p>Each site is different, so the conversation happens before the machine does. From first scrape to last tip, the brief is the same — safe, tidy, and on the quote.</p>
        <p>Recycling happens where it can. Tippers run from 2 tonne through to 12 tonne 6-wheelers. Site inspections for soil jobs are complimentary.</p>
        <a class="text-link" href="${href("/about.html")}">The full story</a>
      </div>
    </div>
  </section>

  <section class="services" id="services">
    <div class="wrap">
      <div class="section-head">
        <p class="kicker">Eight services</p>
        <h2>What rolls through the gate.</h2>
        <p>Competitive pricing and packages to match the block. Call for hourly hire, floatage, or a fixed quote.</p>
      </div>
      <div class="svc-grid">
        ${serviceCards()}
      </div>
    </div>
  </section>

  <section class="process" id="process">
    <div class="wrap">
      <div class="section-head light">
        <p class="kicker">Process</p>
        <h2>Call. Quote. Schedule.</h2>
        <p>Kept simple so you are never guessing where the job sits.</p>
      </div>
      <ol class="steps">
        ${process
          .map(
            (s) => `<li>
            <span class="step-n">${s.n}</span>
            <h3>${s.title}</h3>
            <p>${s.text}</p>
          </li>`,
          )
          .join("")}
      </ol>
    </div>
  </section>

  <section class="why">
    <div class="wrap split reverse">
      <figure class="frame">
        <img src="${asset("images/gallery/why-choose-us.jpg")}" alt="A3000 bobcat used on DB jobs">
      </figure>
      <div>
        <p class="kicker">Why choose us</p>
        <h2>Plant that starts. An operator who answers.</h2>
        <ul class="ticks">
          <li><strong>Reliable equipment</strong> — premium bobcats and tippers kept in working order.</li>
          <li><strong>Professional operator</strong> — one skilled operator, safety protocols on every job.</li>
          <li><strong>Price and time</strong> — competitive rates, flexible scheduling, personal service.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="gallery" id="gallery">
    <div class="wrap">
      <div class="section-head">
        <p class="kicker">On the tools</p>
        <h2>Job photos — not catalogue shots.</h2>
        <p>Seventeen stills from real DB jobs. Tap any frame to open the lightbox.</p>
      </div>
      <div class="masonry" data-gallery>
        ${galleryItems()}
      </div>
    </div>
  </section>

  <section class="areas" id="areas">
    <div class="wrap">
      <div class="section-head">
        <p class="kicker">Coverage</p>
        <h2>Western Melbourne first.</h2>
        <p>Most of the western side of Melbourne. Outer jobs on request. Yard in Altona Meadows.</p>
      </div>
      <div class="area-chips">
        ${areasPrimary.map((a) => `<span class="chip chip-strong">${a}</span>`).join("")}
        ${areasWider.map((a) => `<span class="chip">${a}</span>`).join("")}
        <span class="chip">+ more on request</span>
      </div>
      <p class="fine area-note">Werribee through Manor Lakes appear on Maps-synced directory titles. The site itself commits to western Melbourne, with Altona Meadows, Laverton and Seabrook named in the footer.</p>
    </div>
  </section>

  <section class="reviews" id="reviews">
    <div class="wrap">
      <div class="section-head">
        <p class="kicker">Google reviews · ${brand.rating} ★</p>
        <h2>What people actually wrote.</h2>
        <p>Quoted from Maps / Google-synced listings. Theme-placeholder testimonials from the old WordPress carousel are not reused.</p>
      </div>
      <div class="review-grid">
        ${reviews
          .map(
            (r) => `<blockquote>
            <p>“${r.quote}”</p>
            <footer>${r.meta}</footer>
          </blockquote>`,
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="wrap cta-inner">
      <div>
        <p class="kicker">Estimate</p>
        <h2>Need the site moved this week?</h2>
        <p>Residential or commercial. Same-day quotes happen when the diary allows — several Google reviewers noted Dave quoting the same day and arriving the next.</p>
      </div>
      <div class="cta-actions">
        <a class="btn btn-gold" href="tel:${brand.phoneTel}">Call David ${brand.phoneDisplay}</a>
        <a class="btn btn-ghost" href="mailto:${brand.email}">${brand.email}</a>
      </div>
    </div>
  </section>
  `;
}

export function aboutPage() {
  return `
  <section class="page-hero">
    <div class="wrap">
      <p class="kicker">About</p>
      <h1>A one-stop excavation shop in Altona Meadows.</h1>
      <p class="lede">Locally owned and operated. David runs the machines, the quotes, and the clean-up.</p>
    </div>
  </section>
  <section class="about-band">
    <div class="wrap split">
      <figure class="frame">
        <img src="${asset("images/gallery/slider-locally-owned.jpg")}" alt="Locally owned DB Bobcat plant">
      </figure>
      <div>
        <h2>Why the work looks the way it does</h2>
        <p>DB Bobcat and Tipper Hire specialises in site cleaning, soil removal, rock removal, rubbish removal, concrete removal, small demolition, and concrete cutting. The owner-operator has years in the industry and is particular about reliable, efficient excavation.</p>
        <p>Projects are scoped with the client so the solution matches the block — not a generic hourly dump. From site preparation through demolition and clean-up, the same person who quoted is usually the person on site.</p>
        <p>Customer satisfaction, safety, and environmental responsibility sit in the same sentence: recycle when it is possible, leave the site tidy, and keep clients informed.</p>
      </div>
    </div>
  </section>
  <section class="process">
    <div class="wrap">
      <div class="section-head light">
        <p class="kicker">How we work</p>
        <h2>Three steps. No mystery.</h2>
      </div>
      <ol class="steps">
        ${process
          .map(
            (s) => `<li>
            <span class="step-n">${s.n}</span>
            <h3>${s.title}</h3>
            <p>${s.text}</p>
          </li>`,
          )
          .join("")}
      </ol>
    </div>
  </section>
  <section class="why">
    <div class="wrap split reverse">
      <figure class="frame">
        <img src="${asset("images/gallery/slider-top-qualty.jpg")}" alt="DB Bobcat machine on site">
      </figure>
      <div>
        <h2>Plant, operator, price</h2>
        <ul class="ticks">
          <li>Bobcats and tippers kept in optimal condition.</li>
          <li>Highly skilled operator; safety protocols on the job.</li>
          <li>Competitive pricing and flexible scheduling.</li>
          <li>Tippers 2 t to 12 t 6-wheelers; complimentary soil-job inspections.</li>
        </ul>
      </div>
    </div>
  </section>
  `;
}

export function servicesPage() {
  const blocks = services
    .map(
      (s) => `<article class="svc-detail" id="${s.slug}">
      <div class="svc-media"><img src="${asset(`images/${s.image}`)}" alt="${s.title}"></div>
      <div>
        <h2>${s.title}</h2>
        <p>${s.body}</p>
        <a class="btn btn-call" href="tel:${brand.phoneTel}">Call David about ${s.title.toLowerCase()}</a>
      </div>
    </article>`,
    )
    .join("");

  return `
  <section class="page-hero">
    <div class="wrap">
      <p class="kicker">Services</p>
      <h1>Eight ways to move the site.</h1>
      <p class="lede">Residential and commercial excavation across western Melbourne. Hourly hire plus floatage, or a fixed quote after a look.</p>
    </div>
  </section>
  <section class="svc-list wrap">
    ${blocks}
  </section>
  `;
}

export function contactPage() {
  return `
  <section class="page-hero">
    <div class="wrap">
      <p class="kicker">Contact</p>
      <h1>Call David. That is the process.</h1>
      <p class="lede">Office at 8 Lush Crt (Ct), Altona Meadows. Most of western Melbourne; outer areas on request.</p>
    </div>
  </section>
  <section class="contact-grid wrap">
    <div class="contact-card">
      <h2>Direct</h2>
      <p><a class="big-link" href="tel:${brand.phoneTel}">${brand.phoneDisplay}</a></p>
      <p><a href="mailto:${brand.email}">${brand.email}</a></p>
      <p><a href="${maps.place}">${brand.address}</a></p>
      <p>${hours.primary}<br>${hours.sunday}</p>
      <p class="fine">${hours.mapsNote} ${hours.websiteNote}</p>
      <div class="hero-actions">
        <a class="btn btn-gold" href="tel:${brand.phoneTel}">Call David</a>
        <a class="btn btn-ghost" href="mailto:${brand.email}">Email the yard</a>
      </div>
    </div>
    <div class="map-wrap">
      <iframe title="8 Lush Ct, Altona Meadows VIC 3028" src="${maps.embed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      <p class="fine"><a href="${maps.cid}">Open in Google Maps</a> · <a href="${maps.search}">Search listing</a></p>
    </div>
  </section>
  `;
}
