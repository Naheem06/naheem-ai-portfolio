import React from "react";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
export default function About({ data }) {
  return (
    <section id="about" className="about-section">
      <div className="container section">
        <SectionHeading
          number="03"
          label="Beyond the code"
          title="An engineer’s mindset. A problem-solver’s curiosity."
        />
        <div className="about-grid">
          <div className="about-copy">
            <p className="about-lead">{data.about.summary}</p>
            <p>{data.about.background}</p>
            <p>{data.about.objective}</p>
          </div>
          <aside className="opportunity-card">
            <span className="eyebrow">
              <i className="green-dot" />
              The next chapter
            </span>
            <h3>
              Ready for the
              <br />
              next challenge.
            </h3>
            <p>
              Actively exploring opportunities to build useful AI and turn data
              into meaningful decisions.
            </p>
            <div className="role-tags">
              {data.targetRoles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
            <a href={`mailto:${data.email}`} className="text-link">
              Let’s connect <Icon name="arrow" size={18} />
            </a>
          </aside>
        </div>
        <div className="personal-details">
          <div>
            <p className="eyebrow">Languages I speak</p>
            <p>{data.languages.join(" · ")}</p>
          </div>
          <div>
            <p className="eyebrow">Areas of interest</p>
            <p>{data.interests.join(" · ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
