import type { Metadata, Viewport } from "next";
import "@fontsource/unbounded/500.css";
import "@fontsource/unbounded/600.css";
import "@fontsource-variable/onest/index.css";
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "az_AZ",
    siteName: site.name,
    title: "Karnegi Klub — natiqlik və şəxsi inkişaf təlimləri",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#018BCF" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <body>
        <a className="skip" href="#main">Məzmuna keç</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
