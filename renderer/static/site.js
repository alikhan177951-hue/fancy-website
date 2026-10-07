(function () {
  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-menu-toggle]");
  var nav = document.getElementById("site-nav");
  var lightbox = document.getElementById("lightbox");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var LEAD_TO = "dbbobcat@optusnet.com.au";

  document.documentElement.classList.add(reduceMotion ? "motion-off" : "motion-on");

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Scroll reveals — fire early so motion is obvious while scrolling */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("is-in"); });
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -4% 0px", threshold: 0.08 },
      );
      revealEls.forEach(function (el) { io.observe(el); });
    }
  }

  /* Restart CSS entrances after paint so they always run (not skipped on cache) */
  if (!reduceMotion) {
    requestAnimationFrame(function () {
      document.querySelectorAll("[data-brand-in], [data-hero-in]").forEach(function (el) {
        el.style.animation = "none";
        void el.offsetWidth;
        el.style.animation = "";
      });
    });
  }

  /* Lead forms → mailto (static hosting, no backend) */
  function buildMailto(data) {
    var subject = "Quote request — " + (data.name || "DB Bobcat site");
    var body = [
      "Name: " + data.name,
      "Phone: " + data.phone,
      "Email: " + data.email,
      "",
      "Job / details:",
      data.details,
      "",
      "— Sent from kaamtasker.com/bobcatbob quote form",
    ].join("\n");
    return (
      "mailto:" +
      encodeURIComponent(LEAD_TO).replace(/%40/g, "@") +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body)
    );
  }

  document.querySelectorAll("[data-lead-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var data = {
        name: String(fd.get("name") || "").trim(),
        phone: String(fd.get("phone") || "").trim(),
        email: String(fd.get("email") || "").trim(),
        details: String(fd.get("details") || "").trim(),
      };
      var status = form.querySelector("[data-lead-status]");
      if (!data.name || !data.phone || !data.email || !data.details) {
        if (status) {
          status.hidden = false;
          status.textContent = "Please fill name, phone, email, and job details.";
        }
        return;
      }
      var href = buildMailto(data);
      if (status) {
        status.hidden = false;
        status.textContent = "Opening your email app to send David the quote request…";
      }
      window.location.href = href;
    });
  });

  if (!lightbox) return;
  var img = lightbox.querySelector("img");
  var cap = lightbox.querySelector(".lightbox-cap");
  var items = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]"));
  var index = 0;

  function show(i) {
    if (!items.length) return;
    index = (i + items.length) % items.length;
    var el = items[index];
    img.src = el.getAttribute("href");
    img.alt = el.getAttribute("data-lightbox") || "";
    cap.textContent = img.alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function close() {
    lightbox.hidden = true;
    img.src = "";
    document.body.style.overflow = "";
  }

  items.forEach(function (el, i) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      show(i);
    });
  });

  lightbox.querySelector(".lightbox-close").addEventListener("click", close);
  lightbox.querySelector(".lightbox-prev").addEventListener("click", function () { show(index - 1); });
  lightbox.querySelector(".lightbox-next").addEventListener("click", function () { show(index + 1); });
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", function (e) {
    if (lightbox.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
})();
