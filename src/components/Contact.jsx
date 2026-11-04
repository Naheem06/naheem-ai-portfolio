import React from "react";
import Icon from "./Icon";
import { assetUrl } from "../utils";
export default function Contact({ data }) {
  return (
    <section id="connect" className="contact-section">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">
            <span>06 /</span> Let’s talk
          </p>
          <h2>
            Good work starts
            <br />
            with a conversation<span>.</span>
          </h2>
          <p>
            I’m looking for my next opportunity in AI, data science, or
            analytics. Have a role where I can make a difference?
          </p>
          <a className="contact-email" href={`mailto:${data.email}`}>
            {data.email}
            <Icon name="arrow" size={26} />
          </a>
        </div>
        <div className="contact-links">
          <span className="availability">
            <i />
            {data.availability}
          </span>
          <a href={data.linkedin} target="_blank" rel="noreferrer">
            <Icon name="linkedin" />
            LinkedIn
            <Icon name="arrow" />
          </a>
          <a href={data.github} target="_blank" rel="noreferrer">
            <Icon name="github" />
            GitHub
            <Icon name="arrow" />
          </a>
          <a href={`tel:${data.phone}`}>
            <Icon name="phone" />
            {data.phone}
            <Icon name="arrow" />
          </a>
          <a href={assetUrl(data.resume)} download>
            <Icon name="download" />
            Download resume
            <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
