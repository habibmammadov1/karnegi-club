import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Karnegi Klub — natiqlik və şəxsi inkişaf təlimləri",
    template: "%s | Karnegi Klub",
  },
  description: site.description,
  keywords: ["natiqlik kursu", "natiqlik təlimi", "ünsiyyət təlimi", "şəxsi inkişaf", "satış təlimi", "korporativ təlim", "Bakı", "Karnegi Klub"],
  openGraph: {
    type: "website",
    locale: "az_AZ",
    siteName: site.name,
    title: "Karnegi Klub — natiqlik və şəxsi inkişaf təlimləri",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

// Gilroy (Azərbaycan əlifbası üçün “ə” hərfi əlavə olunmuş versiya)
const gilroy = localFont({
  variable: "--font-gilroy",
  display: "swap",
  src: [
    { path: "../fonts/gilroy-400.woff", weight: "400", style: "normal" },
    { path: "../fonts/gilroy-500.woff", weight: "500", style: "normal" },
    { path: "../fonts/gilroy-700.woff", weight: "700", style: "normal" },
    { path: "../fonts/gilroy-800.woff", weight: "800", style: "normal" },
  ],
});

export const viewport: Viewport = { themeColor: "#018BCF" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" className={gilroy.variable}>
      <body>
        <a className="skip" href="#main">Məzmuna keç</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
