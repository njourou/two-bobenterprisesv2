"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TEL } from "../lib/content";

const slides = [
  {
    src: "/work/work-60.jpg",
    kicker: "Solar",
    title: "Clean power for sites that need it",
    copy: "Grid-tied and hybrid solar with practical design and lasting installs.",
  },
  {
    src: "/work/work-26.jpg",
    kicker: "HVAC",
    title: "Comfort that holds up at work",
    copy: "Air conditioning and ventilation planned around how the space is used.",
  },
  {
    src: "/work/work-51.jpg",
    kicker: "Security",
    title: "Eyes on every corner",
    copy: "CCTV and access control with clear monitoring from day one.",
  },
  {
    src: "/work/work-45.jpg",
    kicker: "Power",
    title: "Standby when the grid drops",
    copy: "Generators and UPS for businesses that cannot afford downtime.",
  },
  {
    src: "/work/work-39.jpg",
    kicker: "Electrical",
    title: "Safe power, done properly",
    copy: "Distribution, wiring and upgrades for homes, offices and industry.",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="hero hero-slider">
      {slides.map((s, i) => (
        <div key={s.src} className={`hero-slide ${i === index ? "is-active" : ""}`} aria-hidden={i !== index}>
          <Image src={s.src} alt="" fill priority={i === 0} sizes="100vw" className="hero-img" />
        </div>
      ))}
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow">{slide.kicker}</p>
        <h1>{slide.title}</h1>
        <p className="hero-copy">{slide.copy}</p>
        <div className="hero-actions">
          <a className="btn btn-green" href={TEL}>
            Call us
          </a>
          <Link className="btn btn-glass" href="/services">
            Our services
          </Link>
        </div>
        <div className="hero-dots" role="tablist" aria-label="Slides">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              className={i === index ? "is-active" : undefined}
              aria-label={`Show slide ${i + 1}`}
              aria-selected={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
