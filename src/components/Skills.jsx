import React from "react";
import SectionHeading from "./SectionHeading";
export default function Skills({ data }) {
  return (
    <section id="skills" className="section container">
      <SectionHeading
        number="04"
        label="Tools of the trade"
        title="Depth in AI. Breadth in engineering."
        description="From model development and data exploration to APIs, applications, and delivery."
      />
      <div className="skills-grid">
        {data.skills.groups.map((group, index) => (
          <article className="skill-group" key={group.title}>
            <span className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="soft-skills">
        <p className="eyebrow">How I work</p>
        <p>{data.skills.soft.join(" · ")}</p>
      </div>
    </section>
  );
}
