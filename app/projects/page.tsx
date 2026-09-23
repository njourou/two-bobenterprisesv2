import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/content";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container reveal">
          <p className="kicker">Projects</p>
          <h1>Featured work</h1>
          <p className="section-lead">Selected installs across solar, HVAC, security and power.</p>
        </div>
      </section>
      <section className="section">
        <div className="container project-grid">
          {projects.map((p) => (
            <article className="project-card reveal" key={p.title}>
              <div className="project-photo">
                <Image src={p.image} alt={p.title} fill sizes="(max-width:800px) 100vw, 360px" />
              </div>
              <div className="project-body">
                <h2>{p.title}</h2>
                <p>{p.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="container section-cta reveal">
          <Link className="btn btn-outline" href="/work">
            Browse full gallery
          </Link>
        </div>
      </section>
    </div>
  );
}
