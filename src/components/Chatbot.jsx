import React, { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { assetUrl } from "../utils";
function getResponse(message, data) {
  const text = message.toLowerCase();
  if (/\b(hi|hello|hey)\b/.test(text))
    return "Hello! I can help you explore Daneesh’s experience, projects, skills, education, and contact details.";
  if (/resume|cv\b/.test(text))
    return `You can download the latest AI Engineer resume using the resume link below.`;
  if (/educat|degree|cgpa|qualif/.test(text))
    return data.education.map(
      (e) =>
        `${e.degree}${e.institution ? ` — ${e.institution}` : ""} (${e.duration}). ${e.honors || e.percentage || ""}`,
    );
  if (/intern|kodnest|training/.test(text))
    return data.experience
      .slice(1)
      .map(
        (e) => `${e.title} — ${e.company} (${e.duration}). ${e.description}`,
      );
  if (/experien|lenok|current|company|job/.test(text))
    return data.experience.map(
      (e) =>
        `${e.title} — ${e.company} (${e.duration}). ${e.description}${e.highlights ? ` ${e.highlights.join(" ")}` : ""}`,
    );
  if (/project|work|rag|vision|ocr/.test(text))
    return data.projects
      .filter((p) =>
        /rag/.test(text)
          ? /rag/i.test(p.title)
          : /ocr/.test(text)
            ? /ocr/i.test(p.title)
            : /vision/.test(text)
              ? /vision|cnn|yolo|opencv/i.test(p.technologies)
              : true,
      )
      .map((p) => `${p.title}: ${p.description} Stack: ${p.technologies}.`);
  if (/skill|python|java|stack|tool/.test(text))
    return data.skills.groups.map((g) => `${g.title}: ${g.items.join(", ")}.`);
  if (/contact|email|phone|hire|opportun|role/.test(text))
    return `${data.availability}. Interested in ${data.targetRoles.join(", ")} roles. Contact: ${data.email} or ${data.phone}.`;
  if (/language/.test(text)) return `Languages: ${data.languages.join(", ")}.`;
  if (/about|who|profile/.test(text)) return data.about.summary;
  return "I answer questions from Daneesh’s portfolio. Try asking about experience, projects, skills, education, or contact details.";
}
export default function Chatbot({ data, isOpen, setIsOpen }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);
  const closeRef = useRef(null);
  const panelRef = useRef(null);
  const messagesRef = useRef(null);
  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement;
    inputRef.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }
      if (event.key === "Tab") {
        const focusable = Array.from(
          panelRef.current.querySelectorAll("button, a[href], input"),
        ).filter((el) => !el.disabled);
        const first = focusable[0],
          last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      previousFocus?.focus();
    };
  }, [isOpen, setIsOpen]);
  useEffect(() => {
    if (messagesRef.current)
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);
  const ask = (question) => {
    if (!question.trim()) return;
    setMessages((previous) => [
      ...previous,
      { sender: "user", text: question.trim() },
      { sender: "assistant", text: getResponse(question, data) },
    ]);
    setInput("");
  };
  if (!isOpen) return null;
  return (
    <>
      <div className="chat-backdrop" onClick={() => setIsOpen(false)} />
      <div
        ref={panelRef}
        id="profile-assistant"
        className="chat-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="assistant-title"
      >
        <div className="chat-header">
          <div>
            <span className="eyebrow">Portfolio guide</span>
            <h2 id="assistant-title">Ask about Daneesh</h2>
          </div>
          <button
            ref={closeRef}
            className="icon-button"
            onClick={() => setIsOpen(false)}
            aria-label="Close profile assistant"
          >
            <Icon name="close" />
          </button>
        </div>
        <p className="chat-note">
          Quick answers from my profile. This is a local FAQ assistant.
        </p>
        <div
          className="chat-messages"
          ref={messagesRef}
          role="log"
          aria-live="polite"
          aria-relevant="additions"
        >
          {!messages.length && (
            <div className="chat-welcome">
              <Icon name="chat" size={28} />
              <h3>A quick introduction?</h3>
              <p>
                Explore my AI work, background, or technical skills. Choose a
                topic below to start.
              </p>
            </div>
          )}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message message-${message.sender}`}
            >
              <span className="message-author">
                {message.sender === "user" ? "You" : "Profile guide"}
              </span>
              {Array.isArray(message.text) ? (
                <ul>
                  {message.text.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{message.text}</p>
              )}
            </div>
          ))}
        </div>
        <div className="chat-topics">
          {["Experience", "Projects", "Skills", "Education"].map((topic) => (
            <button key={topic} onClick={() => ask(topic)}>
              {topic}
            </button>
          ))}
        </div>
        <a className="chat-resume" href={assetUrl(data.resume)} download>
          Download AI Engineer resume <Icon name="download" size={15} />
        </a>
        <form
          className="chat-form"
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
        >
          <label className="sr-only" htmlFor="chat-input">
            Ask about Daneesh’s profile
          </label>
          <input
            id="chat-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my experience…"
            maxLength={500}
            autoComplete="off"
          />
          <button
            type="submit"
            aria-label="Send message"
            disabled={!input.trim()}
          >
            <Icon name="arrow-right" />
          </button>
        </form>
      </div>
    </>
  );
}
