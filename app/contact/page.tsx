import type { Metadata } from "next";
import ContactMap from "../components/ContactMap";
import { ADDRESS, EMAIL, MAIL, PHONE, TEL } from "../lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container reveal">
          <p className="kicker">Contact</p>
          <h1>Get in touch</h1>
          <p className="section-lead">Westlands, Nairobi — call or email for quotes and site visits.</p>
        </div>
      </section>
      <section className="section">
        <div className="container visit-grid">
          <div className="visit-copy glass reveal">
            <p className="visit-line">
              <strong>Address</strong>
              <span>{ADDRESS}</span>
            </p>
            <p className="visit-line">
              <strong>Phone</strong>
              <a href={TEL}>{PHONE}</a>
            </p>
            <p className="visit-line">
              <strong>Email</strong>
              <a href={MAIL}>{EMAIL}</a>
            </p>
            <p className="visit-line">
              <strong>Web</strong>
              <span>www.twobobenterprises.co.ke</span>
            </p>
            <div className="visit-actions">
              <a className="btn btn-green" href={TEL}>
                Call
              </a>
              <a className="btn btn-outline" href={MAIL}>
                Email
              </a>
            </div>
          </div>
          <div className="map-frame glass reveal">
            <ContactMap />
          </div>
        </div>
      </section>
    </div>
  );
}
