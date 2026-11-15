import Link from "next/link";
import { site } from "@/content/site";

export default function Header() {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <Link href="/" className="logo" aria-label="Karnegi Klub, əsas səhifə">
          <span className="logo__mark" aria-hidden="true">K</span>
          <span className="logo__word">karnegi klub</span>
        </Link>
        <nav className="nav" aria-label="Əsas menyu">
          <Link href="/#telimler">Təlimlər</Link>
          <Link href="/#telimci">Təlimçi</Link>
          <Link href="/#korporativ">Korporativ</Link>
          <Link href="/#reyler">Rəylər</Link>
        </nav>
        <a className="header__phone" href={`tel:${site.phones[0].replace(/\s/g, "")}`}>
          {site.phones[0]}
        </a>
        <Link href="/#muraciet" className="btn btn--blue btn--sm">
          Müraciət et
        </Link>
      </div>
    </header>
  );
}
