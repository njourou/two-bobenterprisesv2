import Image from "next/image";
import Link from "next/link";
import { ADDRESS, EMAIL, MAIL, PHONE, TEL } from "../lib/content";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image
            src="/assets/logo-on-green.png"
            alt="Two Bob Enterprises"
            width={220}
            height={80}
            className="footer-logo"
          />
          <p>Electrical, solar, HVAC and security — Westlands, Nairobi.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={TEL}>{PHONE}</a>
            </li>
            <li>
              <a href={MAIL}>{EMAIL}</a>
            </li>
            <li>{ADDRESS}</li>
          </ul>
        </div>
      </div>
      <div className="container copyright">
        © {new Date().getFullYear()} Two Bob Enterprises Ltd.
      </div>
    </footer>
  );
}
