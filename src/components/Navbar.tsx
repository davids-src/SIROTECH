"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BRANDS } from "@/lib/brands";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SOLUTIONS = [
  { name: "Új telephely", href: "/megoldasok/uj-telephely" },
  { name: "Új iroda", href: "/megoldasok/uj-iroda" },
  { name: "Új csarnok", href: "/megoldasok/uj-csarnok" },
  { name: "Üzletnyitás", href: "/megoldasok/uzletnyitas" },
  { name: "Gyártótelephely", href: "/megoldasok/gyartotelephely" },
  { name: "Raktár / logisztika", href: "/megoldasok/raktar-logisztika" },
  { name: "Rendelő", href: "/megoldasok/rendelo" },
  { name: "Építkezés", href: "/megoldasok/epitkezes" },
  { name: "Cégköltözés", href: "/megoldasok/cegkoltozes" },
];

const EXISTING_SYSTEMS = [
  { name: "Bővítés", href: "/meglevo-rendszerek/bovites" },
  { name: "Javítás", href: "/meglevo-rendszerek/javitas" },
  { name: "Korszerűsítés", href: "/meglevo-rendszerek/korszerusites" },
  { name: "Üzemeltetés", href: "/meglevo-rendszerek/uzemeltetes" },
];

export const Navbar = () => {
  const { locale, setLocale, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const pathname = usePathname();

  const isCurrent = (path: string) => pathname === path;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-6">
        <Link href="/" className="shrink-0 flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/sirotech_seal.svg" alt="SIROTECH Informatikai és Biztonságtechnikai Kft." className="h-7 w-auto" />
          <span className="font-display text-lg font-bold tracking-normal text-ink uppercase">Sirotech</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted lg:flex xl:gap-8">
          
          {/* Megoldások Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1.5 py-2 transition-colors hover:text-ink">
              Megoldások
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="w-64 rounded-lg border border-line bg-panel p-2 shadow-2xl shadow-black/60 grid grid-cols-1 gap-1">
                {SOLUTIONS.map((s) => (
                  <Link key={s.href} href={s.href} className={`block rounded px-3 py-2 transition-colors hover:bg-surface ${isCurrent(s.href) ? 'bg-surface text-ink font-medium' : 'text-muted hover:text-ink'}`}>
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Szolgáltatások Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1.5 py-2 transition-colors hover:text-ink">
              Szolgáltatások
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="w-72 rounded-lg border border-line bg-panel p-2 shadow-2xl shadow-black/60">
                {BRANDS.map((brand) => (
                  <Link
                    key={brand.id}
                    href={`/szolgaltatasok/${brand.id === 'sironic' ? 'informatika' : brand.id === 'siroved' ? 'biztonsagtechnika' : brand.id === 'sirosoft' ? 'szoftverfejlesztes' : 'villanyszereles'}`}
                    className="flex items-center gap-3 rounded px-3 py-2.5 transition-colors hover:bg-surface"
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: brand.color, boxShadow: `0 0 8px ${brand.color}` }}
                    />
                    <span className="font-medium text-ink">{brand.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Meglévő rendszerek Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1.5 py-2 transition-colors hover:text-ink">
              Meglévő rendszerek
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="w-48 rounded-lg border border-line bg-panel p-2 shadow-2xl shadow-black/60 grid grid-cols-1 gap-1">
                {EXISTING_SYSTEMS.map((s) => (
                  <Link key={s.href} href={s.href} className={`block rounded px-3 py-2 transition-colors hover:bg-surface ${isCurrent(s.href) ? 'bg-surface text-ink font-medium' : 'text-muted hover:text-ink'}`}>
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/partnereknek" className={`py-2 transition-colors hover:text-ink ${isCurrent('/partnereknek') ? 'text-ink font-medium' : ''}`}>Partnereknek</Link>
          <Link href="/rolunk" className={`py-2 transition-colors hover:text-ink ${isCurrent('/rolunk') ? 'text-ink font-medium' : ''}`}>Rólunk</Link>
          <Link href="/kapcsolat" className={`py-2 transition-colors hover:text-ink ${isCurrent('/kapcsolat') ? 'text-ink font-medium' : ''}`}>Kapcsolat</Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden overflow-hidden rounded border border-line font-mono text-xs sm:flex">
            <button onClick={() => setLocale("hu")} className={`px-2.5 py-1.5 transition-colors ${locale === "hu" ? "bg-silver font-semibold text-bg" : "text-muted hover:text-ink"}`}>HU</button>
            <button onClick={() => setLocale("en")} className={`px-2.5 py-1.5 transition-colors ${locale === "en" ? "bg-silver font-semibold text-bg" : "text-muted hover:text-ink"}`}>EN</button>
          </div>
          <Link
            href="/kapcsolat"
            className="hidden rounded bg-silver px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-ink sm:inline-flex"
          >
            {locale === "en" ? "Let's talk" : "Beszéljük át"}
          </Link>
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="text-ink lg:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-line/60 bg-bg/95 px-6 py-4 backdrop-blur-xl lg:hidden h-[calc(100vh-64px)] overflow-y-auto">
          <div className="flex flex-col gap-2 pb-10">
            
            {/* Accordion: Megoldások */}
            <div>
              <button 
                onClick={() => setOpenAccordion(openAccordion === 'megoldasok' ? null : 'megoldasok')}
                className="flex w-full items-center justify-between py-3 text-sm font-medium text-ink border-b border-line/40"
              >
                Megoldások
                <ChevronDown size={16} className={`transition-transform ${openAccordion === 'megoldasok' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === 'megoldasok' && (
                <div className="pl-4 pt-2 pb-2 grid grid-cols-1 gap-2">
                  {SOLUTIONS.map(s => (
                    <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="py-2 text-sm text-muted">{s.name}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion: Szolgáltatások */}
            <div>
              <button 
                onClick={() => setOpenAccordion(openAccordion === 'szolgaltatasok' ? null : 'szolgaltatasok')}
                className="flex w-full items-center justify-between py-3 text-sm font-medium text-ink border-b border-line/40"
              >
                Szolgáltatások
                <ChevronDown size={16} className={`transition-transform ${openAccordion === 'szolgaltatasok' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === 'szolgaltatasok' && (
                <div className="pl-4 pt-2 pb-2 grid grid-cols-1 gap-2">
                  <Link href="/szolgaltatasok/informatika" onClick={() => setMobileOpen(false)} className="py-2 text-sm text-muted">Informatika</Link>
                  <Link href="/szolgaltatasok/biztonsagtechnika" onClick={() => setMobileOpen(false)} className="py-2 text-sm text-muted">Biztonságtechnika</Link>
                  <Link href="/szolgaltatasok/villanyszereles" onClick={() => setMobileOpen(false)} className="py-2 text-sm text-muted">Villanyszerelés</Link>
                  <Link href="/szolgaltatasok/szoftverfejlesztes" onClick={() => setMobileOpen(false)} className="py-2 text-sm text-muted">Szoftverfejlesztés</Link>
                </div>
              )}
            </div>

            {/* Accordion: Meglévő rendszerek */}
            <div>
              <button 
                onClick={() => setOpenAccordion(openAccordion === 'meglevo' ? null : 'meglevo')}
                className="flex w-full items-center justify-between py-3 text-sm font-medium text-ink border-b border-line/40"
              >
                Meglévő rendszerek
                <ChevronDown size={16} className={`transition-transform ${openAccordion === 'meglevo' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === 'meglevo' && (
                <div className="pl-4 pt-2 pb-2 grid grid-cols-1 gap-2">
                  {EXISTING_SYSTEMS.map(s => (
                    <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="py-2 text-sm text-muted">{s.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/partnereknek" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-medium text-ink border-b border-line/40">Partnereknek</Link>
            <Link href="/rolunk" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-medium text-ink border-b border-line/40">Rólunk</Link>
            <Link href="/kapcsolat" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-medium text-ink border-b border-line/40">Kapcsolat</Link>
            
            <div className="pt-6">
              <Link
                href="/kapcsolat"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded bg-silver py-3 text-center text-sm font-semibold text-bg transition-colors hover:bg-ink"
              >
                {locale === "en" ? "Let's talk" : "Beszéljük át"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
