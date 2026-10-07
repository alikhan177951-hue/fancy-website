import { Reveal } from "./Motion";
import { img } from "../data";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <Reveal>
          <div className="about-visual">
            <img
              src={img("gallery/slider-locally-owned.jpg")}
              alt="Locally owned DB Bobcat plant on a western Melbourne job"
              loading="lazy"
            />
            <span className="about-chip">Locally owned · Altona Meadows</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="about-copy">
            <p className="eyebrow">About</p>
            <h2>David on the tools — not a call centre.</h2>
            <p>
              DB Bobcat and Tipper Hire is a locally owned, owner-operated
              excavation service. David has years in the industry and runs the
              job himself: site cleaning, soil and rock removal, rubbish,
              concrete, small demolition, and concrete cutting.
            </p>
            <p>
              Each site is different, so the conversation happens before the
              machine does. From first scrape to last tip, the brief is the same
              — safe, tidy, and on the quote.
            </p>
            <p>
              Recycling happens where it can. Tippers run from 2 tonne through
              to 12 tonne 6-wheelers. Site inspections for soil jobs are
              complimentary.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
