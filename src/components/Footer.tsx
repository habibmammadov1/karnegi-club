import Link from "next/link";
import { nav, programs, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <Link href="/" className="footer__logo" aria-label="Karnegi Klub, əsas səhifə">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="Karnegi Klub" width={224} height={70} loading="lazy" />
          </Link>
          <p className="footer__note">Natiqlik, ünsiyyət və şəxsi inkişaf təlimləri. 2011-ci ildən.</p>
        </div>
        <div>
          <p className="footer__h">Təlimlər</p>
          <ul>
            {programs.map((p) => (
              <li key={p.slug}>
                <Link href={`/telimler/${p.slug}`}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer__h">Səhifələr</p>
          <ul>
            {nav
              .filter((n) => n.href !== "/" && !n.children)
              .map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            <li>
              <Link href="/korporativ">Korporativ təlimlər</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer__h">Əlaqə</p>
          <ul>
            {site.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.address}</li>
            <li className="footer__social">
              <a href={site.social.instagram} target="_blank" rel="noopener">Instagram</a>
              <a href={site.social.youtube} target="_blank" rel="noopener">YouTube</a>
              <a href={site.social.facebook} target="_blank" rel="noopener">Facebook</a>
              <a href={site.social.tiktok} target="_blank" rel="noopener">TikTok</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer__base">© {new Date().getFullYear()} {site.legalName}</div>
    </footer>
  );
}
