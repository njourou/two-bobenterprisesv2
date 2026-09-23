import type { ReactNode } from "react";
import type { ServiceIcon as IconName } from "../lib/content";

const paths: Record<IconName, ReactNode> = {
  bolt: (
    <>
      <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  fan: (
    <>
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 4c3 0 5 2.2 5 4.5S14.2 12 12 12c0-2.8-1-5.5-4.5-5.5S4 8.8 4 11.2 6.5 16 12 16c2.8 0 5.5-1 5.5-4.5S15 7 12 7" />
    </>
  ),
  camera: (
    <>
      <path d="M3 8h4l2-2h6l2 2h4v12H3V8z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="7" width="16" height="10" rx="2" />
      <path d="M19 10h2v4h-2M7 10v4M11 10v4" />
    </>
  ),
  engine: (
    <>
      <path d="M4 12h3l2-3h4l2 3h3v5H4v-5z" />
      <path d="M8 9V6h5v3M17 12h3v3" />
    </>
  ),
};

export default function ServiceIcon({ name }: { name: IconName }) {
  return (
    <span className="svc-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </svg>
    </span>
  );
}
