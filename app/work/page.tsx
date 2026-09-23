import type { Metadata } from "next";
import Image from "next/image";
import { gallery } from "../lib/content";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container reveal">
          <p className="kicker">Work</p>
          <h1>Gallery</h1>
          <p className="section-lead">Installations and upgrades from sites across Kenya.</p>
        </div>
      </section>
      <section className="section">
        <div className="container gallery-grid">
          {gallery.map((g) => (
            <figure className="gallery-card reveal" key={g.src}>
              <Image src={g.src} alt={g.label} fill sizes="(max-width:700px) 50vw, 33vw" />
              <figcaption>{g.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
