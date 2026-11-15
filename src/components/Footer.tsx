import Link from "next/link";
import { programs, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <p className="footer__brand">karnegi klub</p>
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
          </ul>
        </div>
        <div>
          <p className="footer__h">Sosial şəbəkələr</p>
          <ul>
            <li><a href={site.social.instagram} target="_blank" rel="noopener">Instagram</a></li>
            <li><a href={site.social.youtube} target="_blank" rel="noopener">YouTube</a></li>
            <li><a href={site.social.facebook} target="_blank" rel="noopener">Facebook</a></li>
            <li><a href={site.social.tiktok} target="_blank" rel="noopener">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer__base">© {new Date().getFullYear()} {site.legalName}</div>
    </footer>
  );
}
