import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Two Bob Enterprises | Electrical, Solar, HVAC & Security — Nairobi",
  description:
    "Two Bob Enterprises — electrical, solar, HVAC, CCTV, UPS and generators in Westlands, Nairobi. Call Jaymo on +254 714 866 809.",
  icons: { icon: "/assets/logo.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${montserrat.className}`}>{children}</body>
    </html>
  );
}
