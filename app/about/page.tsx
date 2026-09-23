import type { Metadata } from "next";
import Image from "next/image";
import CertBadges from "../components/CertBadges";
import { clients } from "../lib/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container reveal">
          <p className="kicker">About</p>
          <h1>Practical engineering since 2015</h1>
          <p className="section-lead">
            Two Bob Enterprises Ltd began with quality electrical work and dependable service. We
            now serve residential, commercial and industrial clients across electrical, HVAC, CCTV
            and solar.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-copy reveal">
            <h2>Welcome</h2>
            <p>
              We focus on work clients can depend on. Our team brings electrical, solar, HVAC and
              security expertise to homes, businesses and institutions.
            </p>
            <p>
              Safety, good workmanship and clear communication guide every job. We take time to
              understand the project, choose suitable solutions and support clients beyond
              installation.
            </p>
            <div className="mission glass">
              <strong>Vision</strong>
              <p>
                To be a trusted engineering partner for reliable electrical, solar, HVAC and
                security solutions across Kenya.
              </p>
            </div>
            <div className="mission glass" style={{ marginTop: "1rem" }}>
              <strong>Mission</strong>
              <p>
                Deliver reliable electrical, HVAC, CCTV and solar solutions. Put safety and quality
                into every stage. Build lasting relationships through clear communication and
                support.
              </p>
            </div>
          </div>
          <div className="about-side reveal">
            <div className="about-photo">
              <Image
                src="/work/work-14.jpg"
                alt="Two Bob solar installation"
                fill
                sizes="(max-width:900px) 100vw, 480px"
              />
              <div className="about-photo-overlay" />
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
              Documentation and qualified personnel support safe, compliant delivery.
            </p>
          </div>
          <div className="reveal">
            <CertBadges />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="kicker">Clients</p>
            <h2>Who we work with</h2>
            <p className="section-lead">
              Government, commercial, institutional and industrial organisations.
            </p>
          </div>
          <ul className="client-list reveal">
            {clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
