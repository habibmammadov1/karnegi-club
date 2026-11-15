import type { Metadata } from "next";
import { ClientLogos, CtaBand, PageHero } from "@/components/Blocks";
import { about, facts, photos, trainer } from "@/content/site";

export const metadata: Metadata = {
  title: "Haqqımızda",
  description: "Karnegi Klub Treninq Mərkəzi 2011-ci ildə Dr. Nəcəf Allahverdiyev tərəfindən təsis edilib. Mərkəz və təlimçi haqqında.",
  alternates: { canonical: "/haqqimizda" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="Haqqımızda" lead="2011-ci ildən natiqlik, ünsiyyət və şəxsi inkişaf təlimləri." />

      <section className="wrap section section--tight about">
        <div className="about__text">
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <dl className="about__facts">
          {facts.map((f) => (
            <div key={f.label}>
              <dd>{f.value}</dd>
              <dt>{f.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="section wrap trainer">
        <div className="trainer__photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos.portrait} alt={trainer.name} width={700} height={1000} />
        </div>
        <div className="trainer__body">
          <h2 className="h2">{trainer.name}</h2>
          <p className="trainer__role">{trainer.role}</p>
          <ul className="trainer__list">
            {trainer.credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <dl className="trainer__nums">
            {trainer.numbers.map((n) => (
              <div key={n.label}>
                <dd>{n.value}</dd>
                <dt>{n.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section wrap">
        <ul className="duo">
          <li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos.stage} alt="Dr. Nəcəf Allahverdiyev səhnədə çıxış edir" width={600} height={400} loading="lazy" />
          </li>
          <li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos.heart} alt="Dr. Nəcəf Allahverdiyev" width={600} height={400} loading="lazy" />
          </li>
        </ul>
      </section>

      <ClientLogos title="Bizə etibar edənlər" />

      <CtaBand />
    </>
  );
}
