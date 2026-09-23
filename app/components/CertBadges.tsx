import Image from "next/image";
import { certs } from "../lib/content";

export default function CertBadges() {
  return (
    <div className="cert-grid">
      {certs.map((c) => (
        <article className="cert-badge" key={c.name} title={c.detail}>
          <div className="cert-logo">
            <Image src={c.logo} alt={`${c.name} logo`} width={200} height={120} />
          </div>
          <strong>{c.name}</strong>
          <span>{c.detail}</span>
        </article>
      ))}
    </div>
  );
}
