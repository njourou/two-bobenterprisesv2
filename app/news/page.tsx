import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { news } from "../lib/content";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  const [featured, ...rest] = news;

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container reveal">
          <p className="kicker">News</p>
          <h1>From the field</h1>
          <p className="section-lead">Updates and practical notes from Two Bob projects.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Link href={`/news/${featured.slug}`} className="news-feature news-feature-page reveal">
            <div className="news-feature-media">
              <Image src={featured.image} alt={featured.title} fill sizes="(max-width:900px) 100vw, 55vw" />
            </div>
            <div className="news-feature-body">
              <span className="news-meta">
                {featured.category} · {featured.date}
              </span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <span className="text-link-dark">Read more →</span>
            </div>
          </Link>

          <div className="news-grid">
            {rest.map((item) => (
              <Link href={`/news/${item.slug}`} className="news-card reveal" key={item.slug}>
                <div className="news-card-media">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width:700px) 100vw, 33vw" />
                </div>
                <div className="news-card-body">
                  <span className="news-meta">
                    {item.category} · {item.date}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
