"use client";

import { Linkedin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BRANDS } from "@/lib/brands";
import { trackEvent } from "@/lib/gtag";

export const Footer = () => {
  const { t } = useI18n();

  const navLinks = [
    { label: t("nav.services"), href: "#brands" },
    { label: t("nav.about"), href: "#about" },
    // { label: t("nav.references"), href: "#references" },
    { label: t("nav.contact"), href: "#contact" },
    { label: t("footer.privacy"), href: "/adatvedelem" },
  ];

  return (
    <footer data-testid="footer" className="border-t border-line/50 bg-surface/40">
      <div className="mx-auto max-w-site px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/sirotech_seal.svg" alt="SIROTECH Informatikai és Biztonságtechnikai Kft. – IT üzemeltetés és biztonságtechnika, Székesfehérvár" className="h-7 w-auto" />
              <span className="font-display text-lg font-bold tracking-normal text-ink uppercase">Sirotech</span>
            </div>
            <p className="mt-5 max-w-xs text-sm text-muted">{t("footer.tagline")}</p>
            <div className="mt-5 space-y-2 text-xs font-mono text-muted/80">
              <p className="flex items-center gap-2">
                <span className="text-muted/50 uppercase tracking-wider text-[10px]">Email:</span>
                <a
                  href="mailto:hello@sironic.hu"
                  onClick={() => trackEvent("footer_email_click", "engagement", "hello@sironic.hu")}
                  className="transition-colors hover:text-ink hover:underline"
                >
                  hello@sironic.hu
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-muted/50 uppercase tracking-wider text-[10px]">Tel:</span>
                <a
                  href="tel:+36702735532"
                  onClick={() => trackEvent("footer_phone_click", "engagement", "+36702735532")}
                  className="transition-colors hover:text-ink hover:underline"
                >
                  +36 70 273 5532
                </a>
              </p>
            </div>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              data-testid="footer-linkedin"
              aria-label="LinkedIn"
              onClick={() => trackEvent("social_linkedin_click", "engagement", "LinkedIn")}
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded border border-line text-muted transition-colors hover:border-silver hover:text-ink"
            >
              <Linkedin size={17} />
            </a>
          </div>

          <div>
            <p className="label text-muted">{t("footer.brandsTitle")}</p>
            <ul className="mt-5 space-y-3">
              {BRANDS.map((brand) => (
                <li key={brand.id}>
                  <a
                    href={`#${brand.id}`}
                    data-testid={`footer-link-${brand.id}`}
                    className="flex items-center gap-2.5 text-sm text-ink/80 transition-colors hover:text-ink"
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: brand.color }} />
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label text-muted">{t("footer.navTitle")}</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-ink/80 transition-colors hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-line/50 pt-7 flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
          <p className="font-mono text-[11px] leading-relaxed text-muted/80" data-testid="footer-legal">
            {t("footer.legal")}
          </p>
          <p className="font-mono text-[11px] leading-relaxed text-muted/60">
            {t("footer.certifications")}
          </p>
        </div>
      </div>
    </footer>
  );
};
