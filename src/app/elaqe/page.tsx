import type { Metadata } from "next";
import { Apply, PageHero } from "@/components/Blocks";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Əlaqə",
  description: "Karnegi Klub: Bakı ş., Murtuza Muxtarov küç. 53. Telefon: +994 55 444 14 00.",
  alternates: { canonical: "/elaqe" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Əlaqə" lead="Zəng edin, yazın və ya ofisimizə gəlin." />
      <section className="wrap section section--tight">
        <ul className="contacts">
          <li>
            <span>Telefon</span>
            {site.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/ /g, "")}`}>{p}</a>
            ))}
          </li>
          <li>
            <span>E-poçt</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            <span>Ünvan</span>
            <p>{site.address}</p>
          </li>
        </ul>
        <iframe
          className="map"
          title="Karnegi Klubun xəritədə yeri"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Murtuza+Muxtarov+53,+Bak%C4%B1&output=embed"
        />
      </section>
      <Apply title="Müraciət göndərin" text="Formu doldurun, təlim cədvəli və qiymət barədə sizə zəng edək." />
    </>
  );
}
