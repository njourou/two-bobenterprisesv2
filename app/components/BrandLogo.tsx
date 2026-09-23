"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Header mark — settles after page loader; then random flips. */
export default function BrandLogo() {
  const [phase, setPhase] = useState<"waiting" | "settled">("waiting");
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const start = () => setPhase("settled");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      start();
      return;
    }

    // Sync with page loader (~2.5s), or settle sooner if loader already gone
    const delay = document.body.classList.contains("is-booting") ? 2600 : 400;
    const t = window.setTimeout(start, delay);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== "settled") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let flipTimer = 0;
    let coolTimer = 0;

    const schedule = () => {
      const wait = 3500 + Math.random() * 7500;
      flipTimer = window.setTimeout(() => {
        setFlipping(true);
        coolTimer = window.setTimeout(() => {
          setFlipping(false);
          schedule();
        }, 900);
      }, wait);
    };

    schedule();
    return () => {
      window.clearTimeout(flipTimer);
      window.clearTimeout(coolTimer);
    };
  }, [phase]);

  return (
    <span className={`brand-logo is-settled ${phase === "waiting" ? "is-waiting" : ""}`}>
      <span className={`brand-chevrons ${flipping ? "is-flipping" : ""}`} aria-hidden="true">
        <Image
          src="/assets/logo-chevron-green.png"
          alt=""
          width={420}
          height={336}
          priority
          className="chev chev-green"
        />
        <Image
          src="/assets/logo-chevron-grey.png"
          alt=""
          width={420}
          height={336}
          priority
          className="chev chev-grey"
        />
      </span>
      <Image
        src="/assets/logo-wordmark.png"
        alt="Two Bob Enterprises"
        width={677}
        height={166}
        priority
        className="brand-wordmark"
      />
    </span>
  );
}
