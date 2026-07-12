"use client";

import { Linkedin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BRANDS } from "@/lib/brands";

export const Footer = () => {
  const { t } = useI18n();

  const navLinks = [
    { label: t("nav.services"), href: "#brands" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.references"), href: "#references" },
    { label: t("nav.contact"), href: "#contact" },
    { label: t("footer.privacy"), href: "#" },
  ];

  return (
    <footer data-testid="footer" className="border-t border-line/50 bg-surface/40">
      <div className="mx-auto max-w-site px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logos/sirotech.svg" alt="SIROTECH" className="h-7 w-auto" />
            <p className="mt-5 max-w-xs text-sm text-muted">{t("footer.tagline")}</p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              data-testid="footer-linkedin"
              aria-label="LinkedIn"
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

        <div className="mt-14 border-t border-line/50 pt-7">
          <p className="font-mono text-xs text-muted" data-testid="footer-legal">
            {t("footer.legal")}
          </p>
        </div>
      </div>
    </footer>
  );
};
