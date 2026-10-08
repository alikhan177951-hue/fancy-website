import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Motion";
import { brand, maps, quoteMessage } from "../data";

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
    // Lead form SMS to mobile — pitching email is off-page only; do not invent mailto.
    const body = encodeURIComponent(
      [
        quoteMessage,
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        "",
        "Job details:",
        form.details,
      ].join("\n"),
    );
    window.location.href = `sms:${brand.phoneTel}?&body=${body}`;
  };

  return (
    <section className="section band band--light" id="quote">
      <div className="wrap quote-shell">
        <Reveal>
          <aside className="quote-aside">
            <p className="eyebrow">Free quote</p>
            <h2 className="leaf-heading leaf-heading--light">Tell {brand.owner} about the tree.</h2>
            <p>
              A few quick details. Opens a text to{" "}
              {brand.phoneDisplay} — or just call.
            </p>
            <a className="btn btn--leaf quote-aside__call" href={`tel:${brand.phoneTel}`}>
              Call {brand.phoneDisplay}
            </a>
            <ul className="quote-aside__list">
              <li>
                <strong>Phone</strong>
                <a href={`tel:${brand.phoneTel}`}>{brand.phoneDisplay}</a>
              </li>
              <li>
                <strong>Based</strong>
                <a href={maps.place} target="_blank" rel="noreferrer">
                  {brand.address}
                </a>
              </li>
              <li>
                <strong>Area</strong>
                <span>All over Melbourne</span>
              </li>
            </ul>
          </aside>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.form
            className="quote-form leaf-box"
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
                  placeholder="04xx …"
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
                  placeholder="Suburb, how many trees or stumps, and what needs doing…"
                />
              </div>
            </div>

            <div className="form-actions">
              <motion.button
                className="btn btn--leaf btn--block-sm"
                type="submit"
                whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                Text my free quote request
              </motion.button>
            </div>
            <p className="form-note">
              Prefer a call? {brand.owner} answers {brand.phoneDisplay} — {brand.hours}.
            </p>
          </motion.form>
        </Reveal>
      </div>
    </section>
  );
}
