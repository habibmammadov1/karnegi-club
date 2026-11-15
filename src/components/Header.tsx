"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, type NavItem } from "@/content/site";

const tel = (p: string) => `tel:${p.replace(/\s/g, "")}`;

// Bənd özü və ya alt menyusundakı hər hansı səhifə açıqdırsa aktivdir
function isActive(pathname: string, item: NavItem) {
  if (item.href === "/") return pathname === "/";
  const hrefs = [item.href, ...(item.children ?? []).flatMap((g) => [...(g.href ? [g.href] : []), ...g.links.map((l) => l.href)])];
  return hrefs.some((h) => pathname === h || pathname.startsWith(`${h}/`));
}

export default function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false); // mobil menyu
  const [drop, setDrop] = useState<string | null>(null); // açıq alt menyu (href)

  // Səhifə dəyişəndə menyuları bağla
  useEffect(() => {
    setMenu(false);
    setDrop(null);
  }, [pathname]);

  useEffect(() => {
    if (!drop && !menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDrop(null);
        setMenu(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drop, menu]);

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar__inner">
          <ul className="topbar__info">
            <li>
              <a href={tel(site.phones[0])}>
                <Icon name="phone" />
                {site.phones[0]}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>
                <Icon name="mail" />
                {site.email}
              </a>
            </li>
            <li className="topbar__addr">
              <Icon name="pin" />
              {site.address}
            </li>
          </ul>
          <ul className="topbar__social">
            <li>
              <a href={site.social.facebook} target="_blank" rel="noopener" aria-label="Facebook">
                <Icon name="facebook" />
              </a>
            </li>
            <li>
              <a href={site.social.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                <Icon name="instagram" />
              </a>
            </li>
            <li>
              <a href={site.social.youtube} target="_blank" rel="noopener" aria-label="YouTube">
                <Icon name="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <header className="header">
        <div className="wrap header__inner">
          <Link href="/" className="logo" aria-label="Karnegi Klub, əsas səhifə">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="Karnegi Klub" width={224} height={70} />
          </Link>

          <button
            type="button"
            className={`burger${menu ? " is-open" : ""}`}
            aria-expanded={menu}
            aria-controls="main-nav"
            aria-label={menu ? "Menyunu bağla" : "Menyunu aç"}
            onClick={() => setMenu(!menu)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav id="main-nav" className={`nav${menu ? " is-open" : ""}`} aria-label="Əsas menyu">
            <ul className="nav__list">
              {nav.map((item, i) => {
                const active = isActive(pathname, item);
                const cta = i === nav.length - 1; // sonuncu bənd (Əlaqə) düymə kimi
                const link = (
                  <Link
                    href={item.href}
                    className={`nav__link${active ? " is-active" : ""}${cta ? " nav__link--cta" : ""}`}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
                if (!item.children) return <li key={item.href}>{link}</li>;

                const open = drop === item.href;
                const simple = item.children.length === 1 && !item.children[0].title;
                const id = `drop-${i}`;
                return (
                  <li
                    key={item.href}
                    className={`nav__item--drop${open ? " is-open" : ""}`}
                    onMouseEnter={() => setDrop(item.href)}
                    onMouseLeave={() => setDrop(null)}
                  >
                    {link}
                    <button
                      type="button"
                      className="nav__toggle"
                      aria-expanded={open}
                      aria-controls={id}
                      aria-label={`${item.label} alt menyusu`}
                      // Siçan/toxunuş açır (hover artıq açıb), klaviatura açıb-bağlayır
                      onClick={(e) => setDrop(e.detail === 0 && open ? null : item.href)}
                    >
                      <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
                        <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div id={id} className={`drop${simple ? " drop--simple" : ""}`}>
                      {item.children.map((group, g) => (
                        <div key={g} className="drop__group">
                          {group.title && group.href && (
                            <Link href={group.href} className="drop__title">
                              {group.title}
                            </Link>
                          )}
                          {group.links.length > 0 && (
                            <ul>
                              {group.links.map((l) => (
                                <li key={l.href}>
                                  <Link href={l.href} className={pathname === l.href ? "is-active" : undefined}>
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

function Icon({ name }: { name: "phone" | "mail" | "pin" | "facebook" | "instagram" | "youtube" }) {
  const common = { viewBox: "0 0 24 24", width: 15, height: 15, "aria-hidden": true } as const;
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  switch (name) {
    case "phone":
      return (
        <svg {...common}>
          <path {...stroke} d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect {...stroke} x="3" y="5" width="18" height="14" rx="2" />
          <path {...stroke} d="M3 7l9 6 9-6" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path {...stroke} d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.800 7 11 7 11z" />
          <circle {...stroke} cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path fill="currentColor" d="M13.5 21v-7.500h2.600l.400-3h-3V8.600c0-.900.300-1.500 1.600-1.500h1.500V4.400c-.300 0-1.200-.100-2.200-.100-2.200 0-3.700 1.300-3.700 3.800v2.400H8.200v3h2.500V21h2.800z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect {...stroke} x="4" y="4" width="16" height="16" rx="4.500" />
          <circle {...stroke} cx="12" cy="12" r="3.600" />
          <circle fill="currentColor" cx="16.600" cy="7.400" r="1.100" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path fill="currentColor" d="M21.600 8.200a2.500 2.500 0 00-1.800-1.800C18.200 6 12 6 12 6s-6.200 0-7.800.400a2.500 2.500 0 00-1.800 1.800C2 9.800 2 12 2 12s0 2.200.400 3.800a2.500 2.500 0 001.800 1.800C5.800 18 12 18 12 18s6.200 0 7.800-.400a2.500 2.500 0 001.800-1.800C22 14.200 22 12 22 12s0-2.200-.400-3.800zM10 14.600V9.400l4.500 2.600-4.500 2.600z" />
        </svg>
      );
  }
}
