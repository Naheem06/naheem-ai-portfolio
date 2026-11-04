import React from "react";
import SectionHeading from "./SectionHeading";
export default function Education({ data }) {
  return (
    <section id="education" className="education-section">
      <div className="section container">
        <SectionHeading
          number="05"
          label="The foundation"
          title="Education & learning."
        />
        <div className="education-grid">
          {data.education.map((item, i) => (
            <article
              className={`education-item ${i === 0 ? "degree-featured" : ""}`}
              key={item.degree}
            >
              <span className="eyebrow">{item.duration}</span>
              <h3>{item.degree}</h3>
              {item.institution && <p>{item.institution}</p>}
              <div className="education-score">
                {item.honors && <span>{item.honors}</span>}
                {item.percentage && <span>{item.percentage}</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
