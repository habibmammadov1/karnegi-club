import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/Blocks";
import { gallery } from "@/content/site";

export const metadata: Metadata = {
  title: "Qalereya",
  description: "Karnegi Klubun təlim, masterklass və forumlarından şəkillər.",
  alternates: { canonical: "/qalereya" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Qalereya" lead="Təlimlərdən, masterklasslardan və forumlardan anlar." />
      <section className="wrap section section--tight">
        <ul className="gallery">
          {gallery.map((g) => (
            <li key={g.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} alt={g.alt} width={740} height={740} loading="lazy" />
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
