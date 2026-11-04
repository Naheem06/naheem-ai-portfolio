import React from "react";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
export default function Experience({ data }) {
  const [current, ...earlier] = data.experience;
  return (
    <section id="experience" className="section container">
      <SectionHeading
        number="01"
        label="The journey"
        title="Building with purpose."
        description="Enterprise AI today. A foundation in analytics, engineering, and application development."
      />
      <article className="current-experience">
        <div className="experience-meta">
          <span className="status-label">
            <i />
            CURRENT ROLE
          </span>
          <p>{current.duration}</p>
          <span>Kozhikode, Kerala</span>
          <div className="experience-monogram">
            L<span>↗</span>
          </div>
        </div>
        <div className="experience-content">
          <p className="eyebrow">Lenok Solutions</p>
          <h3>{current.title}</h3>
          <p>{current.description}</p>
          <ul>
            {current.highlights.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <a className="text-link" href="#projects">
            Explore the work <Icon name="arrow-right" size={17} />
          </a>
        </div>
      </article>
      <div className="earlier-experience">
        <div>
          <p className="eyebrow">Where it started</p>
          <h3>
            Internships
            <br />& training.
          </h3>
          <p>A hands-on foundation across the stack.</p>
        </div>
        <div className="timeline">
          {earlier.map((item) => (
            <article className="timeline-item" key={item.company}>
              <div className="timeline-heading">
                <h4>{item.title}</h4>
                <span>{item.duration}</span>
              </div>
              <p className="timeline-company">{item.company}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
