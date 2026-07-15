"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BRANDS } from "@/lib/brands";

export const Navbar = () => {
  const { locale, setLocale, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: t("nav.about"), href: "#about", id: "about" },
    // { label: t("nav.references"), href: "#references", id: "references" },
    { label: t("nav.contact"), href: "#contact", id: "contact" },
  ];

  return (
    <header
      data-testid="navbar"
      className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-6">
        <a href="#top" data-testid="navbar-logo" className="shrink-0 flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/sirotech_seal.svg" alt="SIROTECH Informatikai és Biztonságtechnikai Kft. – IT, biztonságtechnika, szoftverfejlesztés, villanyszerelés – Székesfehérvár" className="h-7 w-auto" />
          <span className="font-display text-lg font-bold tracking-normal text-ink uppercase">Sirotech</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted lg:flex">
          <div className="group relative">
            <button
              data-testid="nav-services-dropdown"
              className="flex items-center gap-1.5 py-2 transition-colors hover:text-ink"
            >
              {t("nav.services")}
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="w-72 rounded-lg border border-line bg-panel p-2 shadow-2xl shadow-black/60">
                {BRANDS.map((brand) => (
                  <a
                    key={brand.id}
                    href={`#${brand.id}`}
                    data-testid={`nav-link-${brand.id}`}
                    className="flex items-center gap-3 rounded px-3 py-2.5 transition-colors hover:bg-surface"
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: brand.color, boxShadow: `0 0 8px ${brand.color}` }}
                    />
                    <span className="font-medium text-ink">{brand.name}</span>
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-muted">
                      {brand.id === "sironic" ? "IT" : brand.id === "siroved" ? "SEC" : "DEV"}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              data-testid={`nav-link-${link.id}`}
              className="py-2 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex overflow-hidden rounded border border-line font-mono text-xs">
            <button
              data-testid="lang-toggle-hu"
              onClick={() => setLocale("hu")}
              className={`px-2.5 py-1.5 transition-colors ${
                locale === "hu" ? "bg-silver font-semibold text-bg" : "text-muted hover:text-ink"
              }`}
            >
              HU
            </button>
            <button
              data-testid="lang-toggle-en"
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1.5 transition-colors ${
                locale === "en" ? "bg-silver font-semibold text-bg" : "text-muted hover:text-ink"
              }`}
            >
              EN
            </button>
          </div>
          <a
            href="#contact"
            data-testid="navbar-quote-btn"
            className="hidden rounded bg-silver px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-ink sm:inline-flex"
          >
            {t("nav.quote")}
          </a>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMobileOpen((open) => !open)}
            className="text-ink lg:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          data-testid="mobile-menu"
          className="border-t border-line/60 bg-bg/95 px-6 py-4 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {BRANDS.map((brand) => (
              <a
                key={brand.id}
                href={`#${brand.id}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded px-2 py-2.5 text-sm text-ink"
              >
                <span className="h-2 w-2 rounded-full" style={{ background: brand.color }} />
                {brand.name}
              </a>
            ))}
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded px-2 py-2.5 text-sm text-muted"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
