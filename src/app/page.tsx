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

      <section className="wrap">
        <Stories stories={stories} />
      </section>

      <section className="hero wrap">
        <div className="hero__text">
          <p className="hero__eyebrow">
            <span aria-hidden="true" />
            Natiqlik və şəxsi inkişaf təlimləri · {site.founded}-ci ildən
          </p>
          <h1 className="hero__title">
            Danış ki, <em>eşitsinlər.</em>
          </h1>
          <p className="hero__lead">
            Karnegi Klub insanlara auditoriya qarşısında sərbəst danışmağı, inamla ünsiyyət qurmağı və öz potensialını üzə
            çıxarmağı öyrədir.
          </p>
          <div className="hero__actions">
            <Link href="/elaqe#muraciet" className="btn btn--blue">
              Təlimə yazıl
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/telimler" className="btn btn--ghost">Təlimlərə bax</Link>
          </div>
          <p className="hero__note">
            Sualınız var? <a href={`tel:${site.phones[0].replace(/ /g, "")}`}>{site.phones[0]}</a>
          </p>
        </div>
        <div className="hero__visual">
          <div className="hero__photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos.portrait} alt={trainer.name} width={700} height={1000} fetchPriority="high" />
            <VoiceWave />
            <p className="hero__name">
              <strong>{trainer.name}</strong>
              <span>Təlimçi, NLP-Master</span>
            </p>
          </div>
          <p className="hero__badge">
            <strong>80%</strong>
            <span>təcrübə</span>
          </p>
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

      <section className="wrap hvideo-wrap">
        <HeroVideo src={heroVideo.src} poster={heroVideo.poster} label={heroVideo.label} />
      </section>

      <section className="section wrap">
        <div className="section__head">
          <h2 className="h2">Təlimlər</h2>
          <Link href="/telimler" className="more">Bütün təlimlər</Link>
        </div>
        <ProgramList />
      </section>

      <section className="section wrap">
        <div className="tband">
          <div>
            <p className="tband__k">Təlimçi</p>
            <h2 className="h2">{trainer.name}</h2>
            <p className="trainer__role">{trainer.role}</p>
            <Link href="/haqqimizda" className="btn btn--blue trainer__more">Haqqımızda</Link>
          </div>
          <dl className="tband__nums">
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
