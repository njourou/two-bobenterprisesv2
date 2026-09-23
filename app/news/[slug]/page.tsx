import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "../../lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);
  return { title: article?.title ?? "News" };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);
  if (!article) notFound();

  const others = news.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <div className="page">
      <article className="section article">
        <div className="container article-wrap">
          <Link href="/news" className="text-link-dark">
            ← All news
          </Link>
          <span className="news-meta">
            {article.category} · {article.date}
          </span>
          <h1>{article.title}</h1>
          <p className="article-lead">{article.excerpt}</p>
          <div className="article-hero">
            <Image src={article.image} alt={article.title} fill sizes="(max-width:900px) 100vw, 900px" />
          </div>
          <div className="article-body">
            <p>
              At Two Bob Enterprises we plan each job around the site — load, access, safety and how
              the finished system will be used day to day. That same approach sits behind the work
              we share here.
            </p>
            <p>
              Whether the focus is solar, HVAC, CCTV, generators or UPS, the goal stays practical:
              clear design, careful install and support after handover.
            </p>
            <p>
              For quotes or a site visit in Nairobi and beyond, call or email the team from our
              contact page.
            </p>
          </div>

          <div className="article-more">
            <h2>More news</h2>
            <div className="news-grid">
              {others.map((item) => (
                <Link href={`/news/${item.slug}`} className="news-card" key={item.slug}>
                  <div className="news-card-media">
                    <Image src={item.image} alt={item.title} fill sizes="300px" />
                  </div>
                  <div className="news-card-body">
                    <span className="news-meta">
                      {item.category} · {item.date}
                    </span>
                    <h3>{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
