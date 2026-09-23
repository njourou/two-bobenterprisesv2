import type { Metadata } from "next";
import Image from "next/image";
import CertBadges from "../components/CertBadges";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container reveal">
          <p className="kicker">About</p>
          <h1>Engineered excellence since 2015.</h1>
          <p className="section-lead">
            Two Bob Enterprises Ltd delivers electrical, HVAC, CCTV, solar, UPS and generator
            solutions from Westlands, Nairobi.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-copy reveal">
            <p>
              We serve commercial, industrial and residential clients with certified, safety-led
              installations. Our technicians bring project discipline to every job — quality
              workmanship, compliance and systems that last.
            </p>
            <div className="mission glass">
              <strong>Our mission</strong>
              <p>
                Deliver innovative, sustainable engineering that meets client needs while holding
                the highest standards of quality and safety.
              </p>
            </div>
          </div>
          <div className="about-photo reveal">
            <Image
              src="/work/work-14.jpg"
              alt="Two Bob solar water heating install"
              fill
              sizes="(max-width:900px) 100vw, 480px"
            />
            <div className="about-photo-overlay" />
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
    </div>
  );
}
