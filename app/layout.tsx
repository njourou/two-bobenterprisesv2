import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import JaymoWidget from "./components/JaymoWidget";
import PageLoader from "./components/PageLoader";
import Reveal from "./components/Reveal";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Two Bob Enterprises | Electrical, Solar, HVAC & Security — Nairobi",
    template: "%s | Two Bob Enterprises",
  },
  description:
    "Two Bob Enterprises Ltd — electrical, solar, HVAC and security solutions in Westlands, Nairobi. Call +254 795 321 293.",
  icons: { icon: "/assets/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${montserrat.className}`}>
        <PageLoader />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <JaymoWidget />
        <Reveal />
      </body>
    </html>
  );
}
