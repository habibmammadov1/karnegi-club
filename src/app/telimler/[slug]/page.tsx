import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { programs, site } from "@/content/site";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title} təlimi`,
    description: p.lead,
    alternates: { canonical: `/telimler/${p.slug}` },
    openGraph: { title: `${p.title} təlimi | Karnegi Klub`, description: p.lead },
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  if (!p) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: p.title,
    description: p.lead,
    inLanguage: "az",
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="wrap phero">
        <nav className="crumbs" aria-label="Səhifə yolu">
          <Link href="/">Əsas səhifə</Link> / <Link href="/#telimler">Təlimlər</Link>
        </nav>
        <h1 className="phero__title">{p.title}</h1>
        <p className="phero__lead">{p.lead}</p>
        {p.duration && <p className="phero__meta">{p.duration}</p>}
      </section>

      <section className="wrap section pgrid">
        <div>
          <h2 className="h3">Kimlər üçündür</h2>
          <ul className="ticks">
            {p.audience.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="h3">Nə qazanacaqsınız</h2>
          <ul className="ticks">
            {p.goals.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </section>

      {p.outline && (
        <section className="wrap section">
          <h2 className="h2">Proqram</h2>
          <ol className="outline">
            {p.outline.map((o, i) => (
              <li key={o.title} className="outline__day">
                <span className="outline__n">{i + 1}-ci dərs</span>
                <h3 className="outline__t">{o.title}</h3>
                <ul>
                  {o.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section id="muraciet" className="section wrap apply">
        <div className="apply__text">
          <h2 className="h2">“{p.title}” təliminə yazılın</h2>
          <p>Növbəti qrupun tarixi və qiyməti barədə sizə zəng edək.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
