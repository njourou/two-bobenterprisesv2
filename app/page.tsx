import Image from "next/image";
import Link from "next/link";
import CertBadges from "./components/CertBadges";
import ServiceIcon from "./components/ServiceIcon";
import { services, stats, TEL, whyUs } from "./lib/content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <Image src="/work/work-60.jpg" alt="" fill priority sizes="100vw" className="hero-img" />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow reveal">Company profile 2026 · Westlands, Nairobi</p>
          <h1 className="reveal d1">
            Power, comfort and security
            <br />
            <em>for the spaces that matter</em>
          </h1>
          <p className="hero-copy reveal d2">
            Electrical, solar, HVAC and security for homes, businesses and institutions. We plan,
            install and maintain building systems with a focus on safety, quality and practical
            results.
          </p>
          <div className="hero-actions reveal d3">
            <a className="btn btn-green" href={TEL}>
              Call us
            </a>
            <Link className="btn btn-glass" href="/services">
              Our services
            </Link>
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
            <h2>What we do</h2>
            <p className="section-lead">
              Engineering for residential, commercial and industrial sites — planned around each
              location.
            </p>
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
              View services
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
            <p className="section-lead">
              We work within the regulatory and safety requirements relevant to our services.
            </p>
          </div>
          <div className="reveal">
            <CertBadges />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container why-grid">
          <div className="reveal">
            <p className="kicker">Why us</p>
            <h2>Practical delivery</h2>
            <p className="section-lead">
              Technical experience with a clear approach from planning to handover.
            </p>
          </div>
          <ul className="why-list reveal">
            {whyUs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section home-strip">
        <div className="container home-strip-grid">
          <div className="glass home-card reveal">
            <p className="kicker">About</p>
            <h2>Since 2015</h2>
            <p>
              Two Bob Enterprises Ltd started with electrical work and now covers HVAC, CCTV and
              solar across Kenya.
            </p>
            <Link href="/about" className="text-link-dark">
              About us →
            </Link>
          </div>
          <div className="glass home-card reveal">
            <p className="kicker">Projects</p>
            <h2>Selected work</h2>
            <p>Industrial power, solar, HVAC, CCTV, generators and UPS installs.</p>
            <Link href="/projects" className="text-link-dark">
              View projects →
            </Link>
          </div>
          <div className="glass home-card reveal">
            <p className="kicker">Contact</p>
            <h2>Westlands</h2>
            <p>Call or email for quotes, site visits and support.</p>
            <Link href="/contact" className="text-link-dark">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
