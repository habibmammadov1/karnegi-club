import type { Metadata } from "next";
import { CtaBand, PageHero, ReviewCards } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Təlim haqda fikirlər",
  description: "Karnegi Klub məzunlarının “Xarizmatik Natiq” və digər təlimlər haqqında fikirləri.",
  alternates: { canonical: "/fikirler" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero title="Məzunlar nə deyir" lead="Təlimlərimizdə iştirak edənlərin fikirləri." crumbs={[{ label: "Təlimlər", href: "/telimler" }]} />
      <section className="wrap section section--tight">
        <ReviewCards />
      </section>
      <CtaBand />
    </>
  );
}
