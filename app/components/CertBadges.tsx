import { certs } from "../lib/content";

export default function CertBadges() {
  return (
    <div className="cert-grid">
      {certs.map((c) => (
        <article className="cert-badge" key={c.name} title={c.detail}>
          <svg viewBox="0 0 80 80" className="cert-seal" aria-hidden="true">
            <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45" />
            <path
              d="M40 16l5.2 10.6 11.7 1.7-8.5 8.3 2 11.6L40 42.8 29.6 48.2l2-11.6-8.5-8.3 11.7-1.7L40 16z"
              fill="currentColor"
              opacity="0.9"
            />
          </svg>
          <strong>{c.name}</strong>
          <span>{c.detail}</span>
        </article>
      ))}
    </div>
  );
}
