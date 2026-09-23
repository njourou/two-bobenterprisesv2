"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      document.body.classList.remove("is-booting");
      return;
    }

    document.body.classList.add("is-booting");

    const hide = window.setTimeout(() => setHiding(true), 1950);
    const done = window.setTimeout(() => {
      setVisible(false);
      document.body.classList.remove("is-booting");
    }, 2550);

    return () => {
      window.clearTimeout(hide);
      window.clearTimeout(done);
      document.body.classList.remove("is-booting");
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`page-loader ${hiding ? "is-hiding" : ""}`} aria-hidden="true">
      <div className="page-loader-mark brand-logo is-intro">
        <span className="brand-chevrons" aria-hidden="true">
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
          alt=""
          width={677}
          height={166}
          priority
          className="brand-wordmark"
        />
      </div>
    </div>
  );
}
