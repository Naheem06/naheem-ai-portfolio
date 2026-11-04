import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import Icon from "./components/Icon";
import data from "./data.json";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar data={data} />
      <main id="main">
        <Hero data={data} />
        <div className="expertise-strip">
          <div className="container">
            <span>Across the AI lifecycle</span>
            <p>
              Computer vision <i /> Generative AI & RAG <i /> LLMs <i /> Data &
              analytics <i /> Backend engineering
            </p>
          </div>
        </div>
        <Experience data={data} />
        <Projects data={data} />
        <About data={data} />
        <Skills data={data} />
        <Education data={data} />
        <Contact data={data} />
      </main>
      <footer className="site-footer container">
        <a className="footer-name" href="#home">
          {data.name}
          <span>AI Engineer</span>
        </a>
        <p>
          © {new Date().getFullYear()} · Built with care. Driven by curiosity.
        </p>
        <a href="#home">
          Back to top <Icon name="arrow-up" />
        </a>
      </footer>
      <button
        className="chat-launcher"
        onClick={() => setIsChatOpen(!isChatOpen)}
        aria-label={
          isChatOpen ? "Close profile assistant" : "Open profile assistant"
        }
        aria-expanded={isChatOpen}
        aria-controls="profile-assistant"
      >
        <Icon name={isChatOpen ? "close" : "chat"} />
        <span>Ask about me</span>
      </button>
      <Chatbot data={data} isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </>
  );
}
