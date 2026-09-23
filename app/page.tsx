import Image from "next/image";
import Link from "next/link";
import CertBadges from "./components/CertBadges";
import ServiceIcon from "./components/ServiceIcon";
import { services, stats, TEL } from "./lib/content";

export default function Home() {
  return (
    <>
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
            Electrical, solar, HVAC, CCTV, UPS and generators — certified installs built to last.
          </p>
          <div className="hero-actions reveal d3">
            <a className="btn btn-green" href={TEL}>
              Call us
            </a>
            <Link className="btn btn-glass" href="/services">
              Our services
            </Link>
          </div>
          <div className="hero-trust reveal d3">
            <span>EPRA · NCA · KEBS</span>
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

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="kicker">Services</p>
            <h2>What we deliver</h2>
            <p className="section-lead">Six core disciplines from design through maintenance.</p>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <article className="service-tile reveal" key={s.title}>
                <div className="service-photo">
                  <Image src={s.image} alt={s.title} fill sizes="(max-width:700px) 50vw, 280px" />
                  <div className="service-overlay" />
                  <ServiceIcon name={s.icon} />
                </div>
                <div className="service-body">
                  <h3>{s.title}</h3>
                  <p>{s.copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta reveal">
            <Link className="btn btn-green" href="/services">
              View all services
            </Link>
            <Link className="btn btn-outline" href="/work">
              See our work
            </Link>
          </div>
        </div>
      </section>

      <section className="section certs-section">
        <div className="container">
          <div className="section-head reveal">
            <p className="kicker">Compliance</p>
            <h2>Certifications & compliance</h2>
            <p className="section-lead">Registered and aligned with Kenyan regulatory standards.</p>
          </div>
          <div className="reveal">
            <CertBadges />
          </div>
        </div>
      </section>

      <section className="section home-strip">
        <div className="container home-strip-grid">
          <div className="glass home-card reveal">
            <p className="kicker">About</p>
            <h2>Since 2015 in Nairobi</h2>
            <p>Safety-led engineering for commercial, industrial and residential clients.</p>
            <Link href="/about" className="text-link-dark">
              About us →
            </Link>
          </div>
          <div className="glass home-card reveal">
            <p className="kicker">Projects</p>
            <h2>Recent installs</h2>
            <p>Solar, HVAC, CCTV and power projects across Kenya.</p>
            <Link href="/projects" className="text-link-dark">
              View projects →
            </Link>
          </div>
          <div className="glass home-card reveal">
            <p className="kicker">Visit</p>
            <h2>Westlands office</h2>
            <p>Kyuna Crescent #30 — call for quotes and site visits.</p>
            <Link href="/contact" className="text-link-dark">
              Contact →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
