import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { clientLogos, programs, reviews, site } from "@/content/site";

// Daxili səhifələrin başlıq hissəsi
export function PageHero({ title, lead, crumbs = [] }: { title: string; lead?: string; crumbs?: { label: string; href: string }[] }) {
  return (
    <section className="wrap phero">
      <nav className="crumbs" aria-label="Səhifə yolu">
        <Link href="/">Əsas səhifə</Link>
        {crumbs.map((c) => (
          <span key={c.href}>
            {" / "}
            <Link href={c.href}>{c.label}</Link>
          </span>
        ))}
      </nav>
      <h1 className="phero__title">{title}</h1>
      {lead && <p className="phero__lead">{lead}</p>}
    </section>
  );
}

export function ProgramList() {
  return (
    <ol className="programs">
      {programs.map((p) => (
        <li key={p.slug}>
          <Link href={`/telimler/${p.slug}`} className="program">
            <span className="program__title">{p.title}</span>
            <span className="program__short">{p.short}</span>
            <span className="program__meta">{p.duration ?? "Qrup və fərdi"}</span>
            <span className="program__go" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export function ReviewCards({ limit }: { limit?: number }) {
  return (
    <ul className="rgrid">
      {reviews.slice(0, limit).map((r) => (
        <li key={r.name + r.role} className="review">
          <blockquote>{r.text}</blockquote>
          <p className="review__who">
            <strong>{r.name}</strong>
            <span>{r.role}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}

// Müraciət formu olan blok
export function Apply({ title, text }: { title: string; text: string }) {
  return (
    <section id="muraciet" className="section wrap apply">
      <div className="apply__text">
        <h2 className="h2">{title}</h2>
        <p>{text}</p>
        <p className="apply__phones">
          {site.phones.map((p) => (
            <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>
              {p}
            </a>
          ))}
        </p>
        <p className="apply__addr">{site.address}</p>
      </div>
      <ContactForm />
    </section>
  );
}

// Səhifələrin sonundakı çağırış zolağı
export function CtaBand({ title = "Növbəti qrupa yazılın", text = "Təlim cədvəli və qiymət barədə sizə zəng edək." }: { title?: string; text?: string }) {
  return (
    <section className="wrap">
      <div className="cta">
        <div>
          <h2 className="h2 h2--white">{title}</h2>
          <p>{text}</p>
        </div>
        <Link href="/elaqe#muraciet" className="btn btn--white">
          Müraciət et
        </Link>
      </div>
    </section>
  );
}

// Müştəri loqoları
export function ClientLogos({ title = "Müştərilərimiz" }: { title?: string }) {
  return (
    <section className="section wrap">
      <div className="section__head">
        <h2 className="h2">{title}</h2>
        <p className="section__lead">Təlimlərimizdən faydalanan şirkət və təşkilatlar.</p>
      </div>
      <ul className="logos">
        {clientLogos.map((c) => (
          <li key={c.src}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.src} alt={c.name || "Müştəri loqosu"} width={190} height={110} loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  );
}
