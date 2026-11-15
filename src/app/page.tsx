import Link from "next/link";
import Stories from "@/components/Stories";
import VoiceWave from "@/components/VoiceWave";
import HeroVideo from "@/components/HeroVideo";
import { ClientLogos, CtaBand, ProgramList, ReviewCards } from "@/components/Blocks";
import { facts, heroVideo, photos, site, stories, trainer } from "@/content/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phones,
    foundingDate: String(site.founded),
    address: { "@type": "PostalAddress", streetAddress: "Murtuza Muxtarov küç. 53", addressLocality: "Bakı", addressCountry: "AZ" },
    sameAs: Object.values(site.social),
    founder: { "@type": "Person", name: trainer.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="wrap hvideo-wrap">
        <HeroVideo src={heroVideo.src} poster={heroVideo.poster} label={heroVideo.label} />
      </section>

      <section className="wrap">
        <Stories stories={stories} />
      </section>

      <section className="hero wrap">
        <div className="hero__text">
          <h1 className="hero__title">Danış ki, eşitsinlər.</h1>
          <p className="hero__lead">
            Karnegi Klub 2011-ci ildən insanlara auditoriya qarşısında sərbəst danışmağı, inamla ünsiyyət qurmağı və öz
            potensialını üzə çıxarmağı öyrədir.
          </p>
          <div className="hero__actions">
            <Link href="/elaqe#muraciet" className="btn btn--blue">Təlimə yazıl</Link>
            <Link href="/telimler" className="btn btn--ghost">Təlimlərə bax</Link>
          </div>
        </div>
        <div className="hero__visual">
          <VoiceWave />
          <figure className="hero__quote">
            <blockquote>Qorxularımızın nə qədər boş olduğunu burada öyrəndik.</blockquote>
            <figcaption>Səməndər Səfərli, məzun</figcaption>
          </figure>
        </div>
        <dl className="facts">
          {facts.map((f) => (
            <div key={f.label} className="facts__item">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section wrap">
        <div className="section__head">
          <h2 className="h2">Təlimlər</h2>
          <Link href="/telimler" className="more">Bütün təlimlər</Link>
        </div>
        <ProgramList />
      </section>

      <section className="section wrap trainer">
        <div className="trainer__photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos.portrait} alt={trainer.name} width={700} height={1000} loading="lazy" />
        </div>
        <div className="trainer__body">
          <h2 className="h2">{trainer.name}</h2>
          <p className="trainer__role">{trainer.role}</p>
          <dl className="trainer__nums">
            {trainer.numbers.map((n) => (
              <div key={n.label}>
                <dd>{n.value}</dd>
                <dt>{n.label}</dt>
              </div>
            ))}
          </dl>
          <Link href="/haqqimizda" className="btn btn--ghost trainer__more">Haqqımızda</Link>
        </div>
      </section>

      <section className="section wrap">
        <div className="section__head">
          <h2 className="h2">Məzunlar nə deyir</h2>
          <Link href="/fikirler" className="more">Bütün fikirlər</Link>
        </div>
        <ReviewCards limit={3} />
      </section>

      <ClientLogos />

      <CtaBand />
    </>
  );
}
