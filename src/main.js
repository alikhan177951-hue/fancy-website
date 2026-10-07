import "./styles.css";

const nav = document.querySelector(".site-nav");
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".nav-links a");
const yearEl = document.getElementById("year");
const form = document.getElementById("enquiry-form");
const formStatus = document.getElementById("form-status");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const onScroll = () => {
  nav?.classList.toggle("is-scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

toggle?.addEventListener("click", () => {
  const open = nav?.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !phone || !message) {
    if (formStatus) {
      formStatus.hidden = false;
      formStatus.className = "form-status is-error";
      formStatus.textContent = "Please add your name, phone, and a short description of the job.";
    }
    return;
  }

  const summary = [
    `Enquiry from ${name}`,
    `Callback number: ${phone}`,
    `Job: ${message}`,
  ].join("\n");

  if (formStatus) {
    formStatus.hidden = false;
    formStatus.className = "form-status is-ok";
    formStatus.innerHTML = `
      <strong>No public email inbox is listed for Bobcatbob.</strong>
      Complete this enquiry by phone: <a href="tel:+61412947967">0412 947 967</a>
      (daily 6:00am–6:00pm). Your note is kept on this device only — it is not emailed.
    `;
  }

  try {
    sessionStorage.setItem("bobcatbob-enquiry", summary);
  } catch {
    /* storage may be blocked */
  }

  form.reset();
});

document.querySelectorAll("[data-gallery] button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const src = btn.getAttribute("data-full");
    const caption = btn.getAttribute("data-caption") || "";
    if (!src) return;
    const dialog = document.getElementById("lightbox");
    const img = dialog?.querySelector("img");
    const fig = dialog?.querySelector("figcaption");
    if (img && fig && dialog instanceof HTMLDialogElement) {
      img.src = src;
      img.alt = caption;
      fig.textContent = caption;
      dialog.showModal();
    }
  });
});

document.getElementById("lightbox")?.addEventListener("click", (event) => {
  const dialog = event.currentTarget;
  if (event.target === dialog && dialog instanceof HTMLDialogElement) {
    dialog.close();
  }
});
