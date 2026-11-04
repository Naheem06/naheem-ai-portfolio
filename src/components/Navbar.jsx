import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import { assetUrl } from "../utils";
const links = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Expertise" },
  { id: "education", label: "Education" },
  { id: "connect", label: "Contact" },
];
export default function Navbar({ data }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a
          className="brand"
          href="#home"
          aria-label={`${data.name}, home`}
          onClick={() => setOpen(false)}
        >
          <span className="monogram">
            DN<span>.</span>
          </span>
          <span className="brand-name">
            Daneesh Naheem<span>AI Engineer</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id="main-nav"
          className={open ? "nav-links is-open" : "nav-links"}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="nav-resume"
            href={assetUrl(data.resume)}
            target="_blank"
            rel="noreferrer"
          >
            Resume <Icon name="arrow" size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
