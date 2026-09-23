import Image from "next/image";
import Link from "next/link";
import CertBadges from "./components/CertBadges";
import HeroSlider from "./components/HeroSlider";
import ServiceIcon from "./components/ServiceIcon";
import { news, services, stats, whyUs } from "./lib/content";

export default function Home() {
  const [featured, ...rest] = news;

  return (
    <>
      <HeroSlider />

      <section className="stats-bar">
        <div className="stats-bg" aria-hidden="true">
          {["/work/work-60.jpg", "/work/work-26.jpg", "/work/work-51.jpg", "/work/work-45.jpg"].map((src) => (
            <div className="stats-bg-cell" key={src}>
              <Image src={src} alt="" fill sizes="25vw" />
            </div>
          ))}
        </div>
        <div className="stats-bg-tint" aria-hidden="true" />
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

      <section className="section news-section">
        <div className="container">
          <div className="section-head reveal section-head-row">
            <div>
              <p className="kicker">News</p>
              <h2>From the field</h2>
              <p className="section-lead">Practical notes on power, HVAC, solar and security.</p>
            </div>
            <Link className="btn btn-outline" href="/news">
              All news
            </Link>
          </div>

          <div className="news-home reveal">
            <Link href={`/news/${featured.slug}`} className="news-feature">
              <div className="news-feature-media">
                <Image src={featured.image} alt={featured.title} fill sizes="(max-width:900px) 100vw, 60vw" />
              </div>
              <div className="news-feature-body">
                <span className="news-meta">
                  {featured.category} · {featured.date}
                </span>
                <h3>{featured.title}</h3>
                <p>{featured.excerpt}</p>
              </div>
            </Link>

            <div className="news-side">
              {rest.map((item) => (
                <Link href={`/news/${item.slug}`} className="news-row" key={item.slug}>
                  <div className="news-row-media">
                    <Image src={item.image} alt="" fill sizes="120px" />
                  </div>
                  <div>
                    <span className="news-meta">
                      {item.category} · {item.date}
                    </span>
                    <h3>{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
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
