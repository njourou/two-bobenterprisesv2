"use client";

import dynamic from "next/dynamic";

const SiteMap = dynamic(() => import("./SiteMap"), {
  ssr: false,
  loading: () => <div className="tb-map tb-map-skeleton" aria-hidden="true" />,
});

export default function ContactMap() {
  return <SiteMap />;
}
