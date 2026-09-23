import type { Metadata } from "next";
import Image from "next/image";
import ServiceIcon from "../components/ServiceIcon";
import { services } from "../lib/content";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container reveal">
          <p className="kicker">Services</p>
          <h1>Our services</h1>
          <p className="section-lead">
            Electrical, HVAC, CCTV, solar, UPS and generators for residential, commercial and
            industrial clients.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container service-grid">
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
      </section>
    </div>
  );
}
