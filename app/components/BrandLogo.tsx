"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BrandLogo() {
  const [phase, setPhase] = useState<"intro" | "settled">("intro");
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const settle = window.setTimeout(() => setPhase("settled"), 1600);
    return () => window.clearTimeout(settle);
  }, []);

  useEffect(() => {
    if (phase !== "settled") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let flipTimer = 0;
    let coolTimer = 0;

    const schedule = () => {
      const delay = 3500 + Math.random() * 7500;
      flipTimer = window.setTimeout(() => {
        setFlipping(true);
        coolTimer = window.setTimeout(() => {
          setFlipping(false);
          schedule();
        }, 900);
      }, delay);
    };

    schedule();
    return () => {
      window.clearTimeout(flipTimer);
      window.clearTimeout(coolTimer);
    };
  }, [phase]);

  return (
    <span className={`brand-logo ${phase === "settled" ? "is-settled" : "is-intro"}`}>
      <span className={`brand-chevrons ${flipping ? "is-flipping" : ""}`} aria-hidden="true">
        <Image
          src="/assets/logo-chevron-green.png"
          alt=""
          width={569}
          height={303}
          priority
          className="chev chev-green"
        />
        <Image
          src="/assets/logo-chevron-grey.png"
          alt=""
          width={569}
          height={303}
          priority
          className="chev chev-grey"
        />
      </span>
      <Image
        src="/assets/logo-wordmark.png"
        alt="Two Bob Enterprises"
        width={553}
        height={136}
        priority
        className="brand-wordmark"
      />
    </span>
  );
}
