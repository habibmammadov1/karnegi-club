import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Blocks";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Tədbirlər",
  description: "Karnegi Klubun açıq tədbirləri, masterklassları və forumları.",
  alternates: { canonical: "/tedbirler" },
};

export default function EventsPage() {
  return (
    <>
      <PageHero title="Tədbirlər" lead="Açıq masterklasslar, forumlar və görüşlər." />
      <section className="wrap section section--tight section--last">
        <div className="empty">
          <h2 className="h3">Hazırda planlaşdırılmış tədbir yoxdur</h2>
          <p>Yeni tədbirləri əvvəlcə Instagram səhifəmizdə elan edirik. Növbəti qrupa yazılmaq üçün bizimlə əlaqə saxlayın.</p>
          <div className="empty__actions">
            <a href={site.social.instagram} target="_blank" rel="noopener" className="btn btn--blue">Instagram-da izlə</a>
            <Link href="/elaqe" className="btn btn--ghost">Əlaqə</Link>
          </div>
        </div>
      </section>
    </>
  );
}
