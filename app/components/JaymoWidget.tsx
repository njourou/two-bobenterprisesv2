"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const WHATSAPP = "https://wa.me/254714866809";
const TEL = "tel:+254714866809";

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
              alt="Jaymo from Two Bob Enterprises"
              width={56}
              height={56}
              className="jaymo-avatar"
            />
            <div>
              <strong>Jaymo</strong>
              <span>Two Bob · usually replies fast</span>
            </div>
            <button type="button" className="jaymo-close" aria-label="Close" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
          <p className="jaymo-bubble">
            Hi — I&apos;m Jaymo from Two Bob. Need power, solar, HVAC or security? Call or WhatsApp me.
          </p>
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
        className="jaymo-fab glass"
        aria-expanded={open}
        aria-label={open ? "Close Jaymo" : "Chat with Jaymo"}
        onClick={() => setOpen((v) => !v)}
      >
        <Image src="/assets/jaymo.jpg" alt="" width={64} height={64} className="jaymo-fab-img" />
        <span className="jaymo-fab-dot" aria-hidden="true" />
        {!open && <span className="jaymo-fab-label">Jaymo</span>}
      </button>
    </div>
  );
}
