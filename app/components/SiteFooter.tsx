import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image
            src="/assets/logo.png"
            alt="Two Bob Enterprises"
            width={180}
            height={60}
            className="footer-logo"
          />
          <p>Electrical, solar, HVAC, CCTV, UPS and generators — Westlands, Nairobi.</p>
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
              <a href="tel:+254714866809">+254 714 866 809</a>
            </li>
            <li>
              <a href="mailto:info@twobobenterprises.co.ke">info@twobobenterprises.co.ke</a>
            </li>
            <li>Kyuna Crescent #30, Westlands</li>
          </ul>
        </div>
      </div>
      <div className="container copyright">
        © {new Date().getFullYear()} Two Bob Enterprises Ltd.
      </div>
    </footer>
  );
}
