import React, { useState } from "react";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
const filters = [
  "All work",
  "Enterprise AI",
  "ML & vision",
  "Data analytics",
  "Applications",
];
function ProjectVisual({ type }) {
  const isVision = [
    "vision",
    "occupancy",
    "gesture",
    "emotion",
    "leaf",
  ].includes(type);
  const isData = type === "analytics";
  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      <span className="visual-caption">
        {isVision
          ? "COMPUTER VISION"
          : isData
            ? "DATA → INSIGHT"
            : type === "rag"
              ? "RETRIEVAL → GENERATION"
              : type === "document" || type === "ocr"
                ? "EXTRACT → VERIFY"
                : "MODELS → APPLICATIONS"}
      </span>
      {isVision ? (
        <div className="vision-scene">
          <div className="vision-grid" />
          <div className="detection-box box-a">
            <span>
              {type === "vision"
                ? "AIRCRAFT"
                : type === "leaf"
                  ? "LEAF"
                  : "DETECTION"}
            </span>
            <svg viewBox="0 0 200 90">
              <path
                d={
                  type === "vision"
                    ? "M16 47 77 39 97 8 108 8 106 40 176 55 178 62 106 56 100 80 91 80 86 55 16 54Z"
                    : type === "leaf"
                      ? "M40 70Q15 10 150 10Q150 90 40 70ZM40 70 130 25"
                      : "M70 75 75 42 90 35 105 42 110 75M90 35V17M68 45 90 40 115 45"
                }
              />
            </svg>
          </div>
          <div className="detection-box box-b">
            <span>{type === "vision" ? "GSE" : "TRACK"}</span>
            <div />
          </div>
          <div className="vision-zone" />
        </div>
      ) : isData ? (
        <div className="chart-scene">
          <div className="chart-bars">
            {[25, 45, 36, 68, 52, 83, 70, 96, 81, 110].map((height, i) => (
              <i key={i} style={{ height }} />
            ))}
          </div>
          <svg viewBox="0 0 400 140">
            <path d="M10 118 50 105 90 110 130 77 170 84 210 57 250 64 290 33 330 40 390 12" />
          </svg>
        </div>
      ) : (
        <div className="pipeline-scene">
          <div className="doc-stack">
            <i />
            <i />
            <i />
            <span>
              {type === "ocr" ? "kWh" : type === "rag" ? "DOCS" : "{ data }"}
            </span>
          </div>
          <span className="pipeline-connector" />
          <div className="pipeline-node">
            <Icon name={type === "rag" ? "layers" : "code"} size={28} />
          </div>
          <span className="pipeline-connector" />
          <div className="pipeline-result">
            <Icon name="check" size={20} />
            <span>{type === "rag" ? "CONTEXT" : "STRUCTURED"}</span>
            <i />
            <i />
          </div>
        </div>
      )}
      <span className="visual-footnote">SCHEMATIC / ENGINEERING APPROACH</span>
    </div>
  );
}
function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `project-details-${index}`;
  return (
    <article className="project-card">
      <ProjectVisual type={project.visual} />
      <div className="project-content">
        <div className="project-topline">
          <span>{project.category}</span>
          <span>{String(index + 1).padStart(2, "0")}</span>
        </div>
        <p className="project-discipline">{project.discipline}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.technologies.split(",").map((tech) => (
            <span key={tech}>{tech.trim()}</span>
          ))}
        </div>
        <div className="project-details" id={detailsId} hidden={!expanded}>
          {project.problem && (
            <div>
              <h4>The challenge</h4>
              <p>{project.problem}</p>
            </div>
          )}
          {project.approach && (
            <div>
              <h4>The approach</h4>
              <p>{project.approach}</p>
            </div>
          )}
          {project.outcome && (
            <div>
              <h4>The result</h4>
              <p>{project.outcome}</p>
            </div>
          )}
          <div>
            <h4>Context</h4>
            <p>
              {project.kind} · {project.duration}
            </p>
          </div>
        </div>
        <div className="project-footer">
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={detailsId}
          >
            {expanded ? "Close details" : "Project details"}
            <Icon name={expanded ? "close" : "plus"} size={16} />
          </button>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              GitHub
              <Icon name="arrow" size={15} />
            </a>
          ) : (
            <span>
              {project.category === "Enterprise AI"
                ? "Professional work"
                : "Portfolio project"}
            </span>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live demo <Icon name="arrow" size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
export default function Projects({ data }) {
  const [filter, setFilter] = useState("All work");
  const [showAll, setShowAll] = useState(false);
  const selected = data.projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );
  const visible = showAll ? selected : selected.slice(0, 6);
  return (
    <section id="projects" className="projects-section">
      <div className="section container">
        <SectionHeading
          number="02"
          label="Selected work"
          title="Real problems. Thoughtful systems."
          description="Enterprise applications, machine learning experiments, and analytics — with the engineering behind each one."
        >
          <a
            className="text-link"
            href={data.github}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub <Icon name="arrow" size={18} />
          </a>
        </SectionHeading>
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {filters.map((item) => (
            <button
              key={item}
              aria-pressed={filter === item}
              onClick={() => {
                setFilter(item);
                setShowAll(false);
              }}
            >
              {item}
              <span>
                {item === "All work"
                  ? data.projects.length
                  : data.projects.filter((p) => p.category === item).length}
              </span>
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">
          Showing {visible.length} of {selected.length} projects for {filter}.
        </p>
        <div className="projects-grid">
          {visible.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={data.projects.indexOf(project)}
            />
          ))}
        </div>
        {selected.length > 6 && (
          <div className="show-projects">
            <button
              className="button button-outline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? "Show selected work"
                : `Explore all ${selected.length} projects`}
              <Icon name={showAll ? "arrow-up" : "plus"} size={18} />
            </button>
            <p>
              {showAll
                ? "All professional and independent projects"
                : "Plus more computer vision, analytics, and full-stack projects"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
