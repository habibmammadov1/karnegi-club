import type { Metadata } from "next";
import { Apply, ClientLogos, PageHero } from "@/components/Blocks";
import { corporate } from "@/content/site";

export const metadata: Metadata = {
  title: "Korporativ təlimlər",
  description: "Şirkətlər üçün ünsiyyət, təqdimat, satış və motivasiya təlimləri. Proqram komandanızın ehtiyacına görə qurulur.",
  alternates: { canonical: "/korporativ" },
};

export default function CorporatePage() {
  return (
    <>
      <PageHero
        title="Korporativ təlimlər"
        lead="Ünsiyyət və təqdimat bacarıqları, effektiv və psixoloji satış, motivasiya və komanda ruhu. Proqramı şirkətinizin ehtiyacına görə qururuq."
        crumbs={[{ label: "Təlimlər", href: "/telimler" }]}
      />
      <section className="wrap section section--tight">
        <ul className="cards">
          {corporate.map((c) => (
            <li key={c.title} className="card">
              <h2 className="h3">{c.title}</h2>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <ClientLogos title="Bizə etibar edənlər" />
      <Apply title="Korporativ təklif alın" text="Komandanız və məqsədiniz barədə qısaca yazın, sizə uyğun proqram təklif edək." />
    </>
  );
}
