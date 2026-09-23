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
  {
    title: "Electrical Engineering",
    copy: "Design, install and maintain power systems for homes, commercial and industrial sites.",
    image: "/work/work-01.jpg",
  },
  {
    title: "Solar Energy",
    copy: "Grid-tied and off-grid solar with battery storage to cut costs and keep you online.",
    image: "/work/work-05.jpg",
  },
  {
    title: "HVAC Systems",
    copy: "Heating, ventilation and air conditioning built for comfort and efficiency.",
    image: "/work/work-08.jpg",
  },
  {
    title: "CCTV & Security",
    copy: "Surveillance, access control and monitoring to protect people and property.",
    image: "/work/work-11.jpg",
  },
  {
    title: "UPS Installation",
    copy: "Uninterruptible power for servers, clinics and critical equipment.",
    image: "/work/work-14.jpg",
  },
  {
    title: "Generator Services",
    copy: "Supply, install and service generators for reliable backup power.",
    image: "/work/work-17.jpg",
  },
];

const stats = [
  { value: "2015", label: "Established" },
  { value: "7+", label: "Years experience" },
  { value: "200+", label: "Projects done" },
  { value: "6", label: "Core services" },
];

const certs = [
  { name: "EPRA", detail: "Energy & Petroleum Regulatory Authority" },
  { name: "NCA", detail: "National Construction Authority" },
  { name: "KEBS", detail: "Kenya Bureau of Standards" },
  { name: "OSHA", detail: "Occupational Safety & Health" },
  { name: "NEMA", detail: "Environmental Management" },
  { name: "KRA", detail: "Tax compliant" },
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
  const [markRot, setMarkRot] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      // One full 360° per viewport of scroll
      setMarkRot((y / Math.max(window.innerHeight, 1)) * 360);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} id="top">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="Two Bob Enterprises home">
            <span className="brand-mark-wrap" aria-hidden="true">
              <Image
                src="/assets/logo-mark.png"
                alt=""
                width={96}
                height={96}
                priority
                className="brand-mark"
                style={{ transform: `rotate(${markRot}deg)` }}
              />
            </span>
            <Image
              src="/assets/logo-wordmark.png"
              alt="Two Bob Enterprises"
              width={220}
              height={56}
              priority
              className="brand-wordmark"
            />
          </a>

          <nav className="desktop-nav" aria-label="Main">
            <a href="#services">Services</a>
            <a href="#about">About</a>
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
            ["about", "About"],
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
            <Image src="/work/work-07.jpg" alt="" fill priority sizes="100vw" className="hero-img" />
          </div>
          <div className="hero-overlay" />
          <div className="container hero-content">
            <p className="eyebrow reveal">Established 2015 · Westlands, Nairobi</p>
            <h1 className="reveal d1">
              Powering Kenya with
              <br />
              <em>exceptional engineering</em>
            </h1>
            <p className="hero-copy reveal d2">
              Two Bob Enterprises delivers electrical, HVAC, CCTV, solar, UPS and generator
              solutions — built on technical excellence and clear safety standards.
            </p>
            <div className="hero-actions reveal d3">
              <a className="btn btn-green" href={TEL}>
                Call us
              </a>
              <a className="btn btn-glass" href={WHATSAPP} target="_blank" rel="noreferrer">
                WhatsApp Jaymo
              </a>
              <a className="text-link" href="#services">
                Our services ↓
              </a>
            </div>
            <div className="hero-trust reveal d3">
              <span>Certified · EPRA, NCA, KEBS</span>
              <span>Energy-efficient systems</span>
              <span>Commercial & residential</span>
            </div>
          </div>
        </section>

        <section className="stats-bar">
          <div className="container stats-grid">
            {stats.map((s) => (
              <div className="stat reveal" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Services</p>
              <h2>Six disciplines. One team.</h2>
              <p className="section-lead">
                From design to install and maintenance — we cover the systems that keep your site
                running.
              </p>
            </div>
            <div className="service-grid">
              {services.map((s) => (
                <article className="service-tile reveal" key={s.title}>
                  <div className="service-photo">
                    <Image src={s.image} alt="" fill sizes="(max-width:700px) 50vw, 280px" />
                    <div className="service-overlay" />
                  </div>
                  <div className="service-body">
                    <h3>{s.title}</h3>
                    <p>{s.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="container about-grid">
            <div className="about-copy reveal">
              <p className="kicker">About</p>
              <h2>Engineered excellence since 2015.</h2>
              <p>
                Two Bob Enterprises Ltd is a Nairobi-based provider of electrical, HVAC, CCTV,
                solar, UPS and generator solutions. We serve commercial, industrial and residential
                clients with certified, safety-led installations.
              </p>
              <p>
                Our technicians bring project discipline to every job — quality workmanship,
                compliance and systems that last.
              </p>
              <div className="mission glass">
                <strong>Our mission</strong>
                <p>
                  Deliver innovative, sustainable engineering that meets client needs while holding
                  the highest standards of quality and safety.
                </p>
              </div>
            </div>
            <div className="about-side reveal">
              <div className="about-photo">
                <Image src="/work/work-14.jpg" alt="Two Bob site work" fill sizes="(max-width:900px) 100vw, 480px" />
                <div className="about-photo-overlay" />
              </div>
              <div className="certs glass">
                <h3>Certifications & compliance</h3>
                <ul>
                  {certs.map((c) => (
                    <li key={c.name}>
                      <span className="cert-tag">{c.name}</span>
                      <span>{c.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section work" id="work">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Work</p>
              <h2>On site across Kenya.</h2>
              <p className="section-lead">A look at installations and upgrades we deliver every day.</p>
            </div>
          </div>
          <div className="gallery-rail" tabIndex={0} aria-label="Project gallery">
            {gallery.map((src, i) => (
              <figure className="gallery-item reveal" key={src}>
                <Image src={src} alt={`Two Bob project ${i + 1}`} width={420} height={320} sizes="420px" />
                <div className="gallery-overlay" />
              </figure>
            ))}
          </div>
        </section>

        <section className="section visit" id="visit">
          <div className="container visit-grid">
            <div className="visit-copy glass reveal">
              <p className="kicker">Visit</p>
              <h2>Talk to the team.</h2>
              <p className="visit-intro">
                Based in Westlands. Call or WhatsApp Jaymo for quotes, site visits and support.
              </p>
              <p className="visit-line">
                <strong>Address</strong>
                <span>Kyuna Crescent #30, Westlands, Nairobi, Kenya</span>
              </p>
              <p className="visit-line">
                <strong>Phone</strong>
                <a href={TEL}>{PHONE}</a>
              </p>
              <p className="visit-line">
                <strong>Email</strong>
                <a href={MAIL}>info@twobobenterprises.co.ke</a>
              </p>
              <p className="visit-line">
                <strong>Hours</strong>
                <span>Mon–Sat · site visits by appointment</span>
              </p>
              <div className="visit-actions">
                <a className="btn btn-green" href={TEL}>
                  Call
                </a>
                <a className="btn btn-dark" href={WHATSAPP} target="_blank" rel="noreferrer">
                  WhatsApp Jaymo
                </a>
                <a className="btn btn-outline" href={MAIL}>
                  Email
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
          <Image src="/assets/logo.png" alt="Two Bob Enterprises" width={220} height={72} className="footer-logo" />
          <p>Electrical · Solar · HVAC · CCTV · UPS · Generators</p>
          <a href="#top">Top ↑</a>
        </div>
        <div className="container copyright">
          © {new Date().getFullYear()} Two Bob Enterprises Ltd. · Westlands, Nairobi
        </div>
      </footer>

      <JaymoWidget />
    </>
  );
}
