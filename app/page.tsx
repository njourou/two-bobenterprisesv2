"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import JaymoWidget from "./components/JaymoWidget";

const SiteMap = dynamic(() => import("./components/SiteMap"), {
  ssr: false,
  loading: () => <div className="tb-map tb-map-skeleton" aria-hidden="true" />,
});

const PHONE = "+254 714 866 809";
const TEL = "tel:+254714866809";
const MAIL = "mailto:info@twobobenterprises.co.ke";
const WHATSAPP = "https://wa.me/254714866809";

const services = [
  { title: "Electrical", image: "/work/work-01.jpg" },
  { title: "Solar", image: "/work/work-05.jpg" },
  { title: "HVAC", image: "/work/work-08.jpg" },
  { title: "CCTV", image: "/work/work-11.jpg" },
  { title: "UPS", image: "/work/work-14.jpg" },
  { title: "Generators", image: "/work/work-17.jpg" },
];

const gallery = [
  "/work/work-02.jpg",
  "/work/work-03.jpg",
  "/work/work-04.jpg",
  "/work/work-06.jpg",
  "/work/work-07.jpg",
  "/work/work-09.jpg",
  "/work/work-10.jpg",
  "/work/work-12.jpg",
  "/work/work-13.jpg",
  "/work/work-15.jpg",
  "/work/work-16.jpg",
  "/work/work-18.jpg",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className={`site-header glass ${scrolled ? "is-scrolled" : ""}`} id="top">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="Two Bob Enterprises home">
            <Image src="/assets/logo.jpg" alt="Two Bob Enterprises" width={120} height={40} priority />
          </a>

          <nav className="desktop-nav" aria-label="Main">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#visit">Visit</a>
          </nav>

          <a className="nav-cta" href={TEL}>
            Call {PHONE}
          </a>

          <button
            type="button"
            className="menu"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          {[
            ["services", "Services"],
            ["work", "Work"],
            ["visit", "Visit"],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a href={TEL} onClick={closeMenu}>
            Call {PHONE}
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <Image
              src="/work/work-07.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero-img"
            />
          </div>
          <div className="hero-overlay" />
          <div className="container hero-content">
            <p className="brand-hero reveal">Two Bob Enterprises</p>
            <h1 className="reveal d1">
              Power done
              <br />
              <em>right.</em>
            </h1>
            <p className="hero-copy reveal d2">
              Electrical, solar, HVAC and security — Westlands, Nairobi.
            </p>
            <div className="hero-actions reveal d3">
              <a className="btn btn-green" href={TEL}>
                Call us
              </a>
              <a className="btn btn-glass" href={WHATSAPP} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="text-link" href="#work">
                View work ↓
              </a>
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Services</p>
              <h2>What we install.</h2>
            </div>
            <div className="service-grid">
              {services.map((s) => (
                <article className="service-tile glass reveal" key={s.title}>
                  <div className="service-photo">
                    <Image src={s.image} alt="" fill sizes="(max-width:700px) 50vw, 200px" />
                  </div>
                  <h3>{s.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section work" id="work">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Work</p>
              <h2>On site.</h2>
            </div>
          </div>
          <div className="gallery-rail" tabIndex={0} aria-label="Project gallery">
            {gallery.map((src, i) => (
              <figure className="gallery-item reveal" key={src} style={{ animationDelay: `${(i % 6) * 0.05}s` }}>
                <Image src={src} alt={`Two Bob project ${i + 1}`} width={420} height={320} sizes="420px" />
              </figure>
            ))}
          </div>
        </section>

        <section className="section visit" id="visit">
          <div className="container visit-grid">
            <div className="visit-copy glass reveal">
              <p className="kicker">Visit</p>
              <h2>Find us.</h2>
              <p className="visit-line">
                <strong>Address</strong>
                <span>Kyuna Crescent #30, Westlands, Nairobi</span>
              </p>
              <p className="visit-line">
                <strong>Phone</strong>
                <a href={TEL}>{PHONE}</a>
              </p>
              <p className="visit-line">
                <strong>Email</strong>
                <a href={MAIL}>info@twobobenterprises.co.ke</a>
              </p>
              <div className="visit-actions">
                <a className="btn btn-green" href={TEL}>
                  Call
                </a>
                <a className="btn btn-dark" href={WHATSAPP} target="_blank" rel="noreferrer">
                  WhatsApp Jaymo
                </a>
              </div>
            </div>
            <div className="map-frame glass reveal">
              <SiteMap />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-row">
          <Image src="/assets/logo.jpg" alt="Two Bob Enterprises" width={110} height={36} />
          <p>Electrical · Solar · HVAC · Security</p>
          <a href="#top">Top ↑</a>
        </div>
        <div className="container copyright">© {new Date().getFullYear()} Two Bob Enterprises Ltd.</div>
      </footer>

      <JaymoWidget />
    </>
  );
}
