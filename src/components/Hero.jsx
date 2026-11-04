import React from "react";
import Icon from "./Icon";
import { assetUrl } from "../utils";
function SystemVisual() {
  return (
    <div
      className="system-visual"
      role="img"
      aria-label="AI engineering workflow: video, documents, and data feed computer vision and retrieval models, then APIs and analytics."
    >
      <div className="system-top">
        <span>
          <i /> AI, FROM INPUT TO APPLICATION
        </span>
        <Icon name="code" size={18} />
      </div>
      <div className="system-grid" aria-hidden="true">
        <div className="system-inputs">
          <span>01 / INPUT</span>
          <div>
            Video streams
            <Icon name="arrow-right" size={15} />
          </div>
          <div>
            Documents
            <Icon name="arrow-right" size={15} />
          </div>
          <div>
            Structured data
            <Icon name="arrow-right" size={15} />
          </div>
        </div>
        <div className="system-core">
          <div className="core-orbit orbit-one" />
          <div className="core-orbit orbit-two" />
          <div className="core-dot dot-one" />
          <div className="core-dot dot-two" />
          <div className="core-chip">
            <Icon name="layers" size={32} />
            <strong>AI</strong>
            <span>ENGINE</span>
          </div>
          <span className="core-label label-top">VISION</span>
          <span className="core-label label-bottom">RETRIEVAL</span>
        </div>
        <div className="system-output">
          <span>02 / ENGINEER</span>
          <div>
            <i /> Detect. Understand.
          </div>
          <div>
            <i /> Retrieve. Reason.
          </div>
          <div>
            <i /> Build. Integrate.
          </div>
        </div>
        <div className="system-delivery">
          <span>03 / DELIVER</span>
          <strong>
            Practical intelligence
            <Icon name="arrow" size={20} />
          </strong>
          <p>
            REST APIs <b>·</b> Live analytics <b>·</b> Applications
          </p>
        </div>
      </div>
      <div className="system-bottom">
        <span>Python / Java / AI</span>
        <span>
          END-TO-END THINKING <Icon name="check" size={13} />
        </span>
      </div>
    </div>
  );
}
export default function Hero({ data }) {
  return (
    <section id="home" className="hero container">
      <div className="hero-main">
        <div className="availability">
          <i />
          {data.availability}
        </div>
        <p className="eyebrow hero-intro">Hello, I’m {data.name}</p>
        <h1>
          From complex data
          <br />
          to practical <span>AI.</span>
        </h1>
        <p className="hero-description">
          AI Engineer building computer vision, generative AI, and data-driven
          applications for real-world operations.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <Icon name="arrow-right" size={18} />
          </a>
          <a
            className="button button-outline"
            href={assetUrl(data.resume)}
            download
          >
            Download resume <Icon name="download" size={18} />
          </a>
        </div>
        <div className="hero-meta">
          <span>
            <Icon name="location" size={15} />
            {data.location}
          </span>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Daneesh on LinkedIn"
          >
            <Icon name="linkedin" size={17} />
            LinkedIn <Icon name="arrow" size={13} />
          </a>
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Daneesh on GitHub"
          >
            <Icon name="github" size={17} />
            GitHub <Icon name="arrow" size={13} />
          </a>
        </div>
      </div>
      <div className="hero-aside">
        <SystemVisual />
        <div className="current-role">
          <span className="role-line" />
          <p>
            Currently <strong>AI Engineer @ Lenok Solutions</strong>
          </p>
          <span>Dec 2025 — Present</span>
        </div>
      </div>
      <a className="scroll-cue" href="#experience">
        <span>EXPERIENCE MEETS CURIOSITY</span>
        <Icon name="arrow-right" size={16} />
      </a>
    </section>
  );
}
