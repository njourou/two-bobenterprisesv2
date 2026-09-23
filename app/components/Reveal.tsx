"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );

    const observeAll = () => {
      document.querySelectorAll(".reveal:not(.in)").forEach((n) => io.observe(n));
    };

    // Run after paint so new route DOM is present
    const raf = requestAnimationFrame(() => {
      observeAll();
      // Fallback: if still hidden after a tick (e.g. already in view), force in
      window.setTimeout(() => {
        document.querySelectorAll(".reveal:not(.in)").forEach((n) => {
          const rect = n.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            n.classList.add("in");
          } else {
            io.observe(n);
          }
        });
      }, 50);
    });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
