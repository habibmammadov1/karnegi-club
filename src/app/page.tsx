import Link from "next/link";
import Stories from "@/components/Stories";
import VoiceWave from "@/components/VoiceWave";
import ContactForm from "@/components/ContactForm";
import { clients, facts, otherTopics, programs, reviews, site, stories, trainer } from "@/content/site";

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
          <h1 className="hero__title">Danış ki, eşitsinlər.</h1>
          <p className="hero__lead">
            Karnegi Klub 2011-ci ildən insanlara auditoriya qarşısında sərbəst danışmağı, inamla ünsiyyət qurmağı və öz
            potensialını üzə çıxarmağı öyrədir.
          </p>
          <div className="hero__actions">
            <Link href="#muraciet" className="btn btn--blue">Təlimə yazıl</Link>
            <Link href="#telimler" className="btn btn--ghost">Təlimlərə bax</Link>
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

      <section id="telimler" className="section wrap">
        <div className="section__head">
          <h2 className="h2">Təlimlər</h2>
          <p className="section__lead">Açıq qruplarda, fərdi və korporativ formatda keçirilir.</p>
        </div>
        <ol className="programs">
          {programs.map((p) => (
            <li key={p.slug}>
              <Link href={`/telimler/${p.slug}`} className="program">
                <span className="program__title">{p.title}</span>
                <span className="program__short">{p.short}</span>
                <span className="program__meta">{p.duration ?? "Qrup və fərdi"}</span>
                <span className="program__go" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <div className="topics">
          <p className="topics__h">Həmçinin</p>
          <ul className="topics__list">
            {otherTopics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="practice">
        <div className="wrap">
          <h2 className="h2 h2--white">Təlimdə çox danışırsınız. Biz isə az.</h2>
          <div className="ratio" role="img" aria-label="Təlimin 80 faizi təcrübə, 20 faizi nəzəriyyədir">
            <div className="ratio__part ratio__part--main" style={{ flexBasis: "80%" }}>
              <span className="ratio__num">80%</span>
              <span className="ratio__label">təcrübə</span>
            </div>
            <div className="ratio__part" style={{ flexBasis: "20%" }}>
              <span className="ratio__num">20%</span>
              <span className="ratio__label">nəzəriyyə</span>
            </div>
          </div>
          <p className="practice__text">
            İştirakçılar bütün qrup önündə, cütlükdə, üçlükdə və kiçik qruplarda çıxış edir. Nəzəriyyə yalnız bacarığı
            göstərmək və nəticəni müzakirə etmək üçündür.
          </p>
        </div>
      </section>

      <section id="telimci" className="section wrap trainer">
        <div className="trainer__photo" aria-hidden="true">
          <span>NA</span>
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

      <section id="korporativ" className="section wrap corp">
        <div className="corp__text">
          <h2 className="h2">Komandanız üçün təlimlər</h2>
          <p>
            Korporativ təlimlərimiz ünsiyyət və təqdimat bacarıqlarını, effektiv və psixoloji satış texnikalarını, işçilərin
            motivasiyasını və komanda ruhunu gücləndirir. Proqramı şirkətinizin ehtiyacına görə qururuq.
          </p>
          <Link href="#muraciet" className="btn btn--blue">Korporativ təklif al</Link>
        </div>
        <ul className="clients" aria-label="Təlim keçdiyimiz şirkətlər">
          {clients.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <section id="reyler" className="section reviews">
        <div className="wrap section__head">
          <h2 className="h2">Məzunlar nə deyir</h2>
        </div>
        <ul className="reviews__track wrap">
          {reviews.map((r) => (
            <li key={r.name + r.role} className="review">
              <blockquote>{r.text}</blockquote>
              <p className="review__who">
                <strong>{r.name}</strong>
                <span>{r.role}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section id="muraciet" className="section wrap apply">
        <div className="apply__text">
          <h2 className="h2">Növbəti qrupa yazılın</h2>
          <p>Formu doldurun, təlim cədvəli və qiymət barədə sizə zəng edək. Və ya birbaşa zəng edin:</p>
          <p className="apply__phones">
            {site.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
            ))}
          </p>
          <p className="apply__addr">{site.address}</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
