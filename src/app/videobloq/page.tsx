import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "VideoBloq",
  description: "Natiqlik, ünsiyyət və şəxsi inkişaf haqqında pulsuz video dərslər.",
  alternates: { canonical: "/videobloq" },
};

export default function VideoPage() {
  return (
    <>
      <PageHero title="VideoBloq" lead="Natiqlik və ünsiyyət haqqında qısa video dərslər YouTube kanalımızdadır." />
      <section className="wrap section section--tight section--last">
        <div className="empty">
          <h2 className="h3">Bizi YouTube-da izləyin</h2>
          <p>Kanala abunə olun, yeni videolardan vaxtında xəbərdar olun.</p>
          <div className="empty__actions">
            <a href={site.social.youtube} target="_blank" rel="noopener" className="btn btn--blue">Kanala keç</a>
            <a href={site.social.tiktok} target="_blank" rel="noopener" className="btn btn--ghost">TikTok</a>
          </div>
        </div>
      </section>
    </>
  );
}
