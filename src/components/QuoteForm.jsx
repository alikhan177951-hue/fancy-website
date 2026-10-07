import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Motion";
import { brand } from "../data";

const initial = { name: "", phone: "", email: "", details: "" };

export default function QuoteForm() {
  const [form, setForm] = useState(initial);
  const reduce = useReducedMotion();

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Quote request from ${form.name || "website visitor"}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        "",
        "Job details:",
        form.details,
      ].join("\n"),
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section section--tight" id="quote">
      <div className="wrap quote-shell">
        <Reveal>
          <aside className="quote-aside">
            <p className="eyebrow">Lead / quote</p>
            <h2>Tell David what the site needs.</h2>
            <p>
              Name, phone, email, and a short job brief. Opens your email to{" "}
              {brand.email}.
            </p>
            <a className="btn btn--yellow quote-aside__call" href={`tel:${brand.phoneTel}`}>
              Call {brand.phoneDisplay}
            </a>
            <ul className="quote-aside__list">
              <li>
                <strong>Email</strong>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </li>
              <li>
                <strong>Yard</strong>
                <span>{brand.address}</span>
              </li>
              <li>
                <strong>Hours</strong>
                <span>Mon–Sat 8am–6pm · Sunday closed</span>
              </li>
            </ul>
          </aside>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.form
            className="quote-form"
            onSubmit={onSubmit}
            noValidate
            initial={reduce ? false : { opacity: 0.96 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
          >
            <div className="form-grid form-grid--2">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={form.phone}
                  onChange={onChange}
                  placeholder="0412 …"
                />
              </div>
            </div>

            <div className="form-grid" style={{ marginTop: "1rem" }}>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                />
              </div>
              <div className="field">
                <label htmlFor="details">Job details</label>
                <textarea
                  id="details"
                  name="details"
                  required
                  value={form.details}
                  onChange={onChange}
                  placeholder="Site address, access notes, and what needs doing…"
                />
              </div>
            </div>

            <div className="form-actions">
              <motion.button
                className="btn btn--yellow"
                type="submit"
                whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                Send quote request
              </motion.button>
            </div>
            <p className="form-note">
              Prefer a call? David answers {brand.phoneDisplay}.
            </p>
          </motion.form>
        </Reveal>
      </div>
    </section>
  );
}
