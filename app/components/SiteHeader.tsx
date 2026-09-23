"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";
import { PHONE, TEL } from "../lib/content";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav">
        <Link className="brand" href="/" aria-label="Two Bob Enterprises home">
          <BrandLogo />
        </Link>

        <nav className="desktop-nav" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? "is-active" : undefined}>
              {l.label}
            </Link>
          ))}
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
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <a href={TEL} onClick={() => setMenuOpen(false)}>
          Call {PHONE}
        </a>
      </div>
    </header>
  );
}
