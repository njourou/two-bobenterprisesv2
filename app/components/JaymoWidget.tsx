"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TEL, WHATSAPP } from "../lib/content";

export default function JaymoWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className={`jaymo ${open ? "is-open" : ""}`}>
      {open && (
        <div className="jaymo-panel glass" role="dialog" aria-label="Chat with Jaymo">
          <div className="jaymo-panel-head">
            <Image
              src="/assets/jaymo.jpg"
              alt="Jaymo"
              width={52}
              height={52}
              className="jaymo-avatar"
            />
            <div>
              <strong>Jaymo</strong>
              <span>Two Bob Enterprises</span>
            </div>
            <button type="button" className="jaymo-close" aria-label="Close" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
          <p className="jaymo-bubble">How can I help with your project?</p>
          <div className="jaymo-actions">
            <a className="btn btn-green" href={TEL}>
              Call
            </a>
            <a className="btn btn-dark" href={WHATSAPP} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        className="jaymo-fab"
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Chat with Jaymo"}
        onClick={() => setOpen((v) => !v)}
      >
        <Image src="/assets/jaymo.jpg" alt="" width={58} height={58} className="jaymo-fab-img" />
        <span className="jaymo-fab-dot" aria-hidden="true" />
      </button>
    </div>
  );
}
