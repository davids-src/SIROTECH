"use client";

import { Check, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BRANDS } from "@/lib/brands";
import { Reveal } from "@/components/Reveal";
import { trackEvent } from "@/lib/gtag";

const DARK_TEXT_BRANDS = new Set(["sirosoft", "sirovill"]);

const BRAND_ALTS: Record<string, string> = {
  sironic: "SIRONIC – Rendszergazda szolgáltatás és IT üzemeltetés KKV-knak Székesfehérvár, Dunaújváros és Budapest területén",
  siroved: "SIRO-VÉD – Biztonságtechnikai kivitelezés, kamerarendszer és riasztórendszer telepítés Székesfehérváron és Fejér megyében",
  sirosoft: "SIROSOFT – KKV szoftverfejlesztés, egyedi webalkalmazások, ERP és CRM rendszerek bevezetése",
  sirovill: "SIROVILL – Ipari és lakossági villanyszerelés, érintésvédelmi vizsgálat és hálózatépítés",
};

export const DeepDives = () => {
  const { t } = useI18n();

  return (
    <section className="border-t border-line/50">
      {BRANDS.map((brand, index) => {
        let bullets: string[] = t(`deep.${brand.id}.bullets`);
        if (brand.id === "sirovill") {
          bullets = bullets.filter(bullet =>
            bullet.toLowerCase().includes("gyengeáram") ||
            bullet.toLowerCase().includes("low-voltage") ||
            bullet.toLowerCase().includes("cabling") ||
            bullet.toLowerCase().includes("hálózat") ||
            bullet.toLowerCase().includes("vezérlés") ||
            bullet.toLowerCase().includes("controls")
          );
        }
        const reversed = index % 2 === 1;
        const ctaTextColor = DARK_TEXT_BRANDS.has(brand.id) ? "#0A0A0C" : "#FFFFFF";

        return (
          <div
            key={brand.id}
            id={brand.id}
            data-testid={`deepdive-${brand.id}`}
            className="scroll-mt-20 py-20 first:pt-28 last:pb-28"
          >
            <div className="mx-auto grid max-w-site items-center gap-12 px-6 md:grid-cols-2 md:gap-20">
              {/* Visual panel */}
              {/* TODO: replace with real project photo before launch */}
              <Reveal className={reversed ? "md:order-2" : ""}>
                <div
                  className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border bg-surface"
                  style={{ borderColor: `${brand.color}30` }}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at 50% 40%, ${brand.color}55, transparent 65%)`,
                    }}
                    aria-hidden
                  />
                  <div className="hero-grid absolute inset-0 opacity-50" aria-hidden />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/brand/${brand.id}_logo.svg`}
                    alt={BRAND_ALTS[brand.id] || brand.name}
                    className="h-32 w-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-5 font-mono text-xs text-muted/70">
                    {`// ${brand.href.replace("https://", "")}`}
                  </span>
                </div>
              </Reveal>

              {/* Copy */}
              <Reveal delay={0.1} className={reversed ? "md:order-1" : ""}>
                <span
                  className="label inline-block rounded-sm border px-2.5 py-1"
                  style={{
                    color: brand.color,
                    borderColor: `${brand.color}40`,
                    background: `${brand.color}12`,
                  }}
                >
                  {brand.id === "sirovill"
                    ? t(`deep.${brand.id}.eyebrow`)
                        .replace("VILLANYSZERELÉS", "GYENGEÁRAMÚ HÁLÓZATOK")
                        .replace("ELECTRICAL WORKS", "LOW-VOLTAGE NETWORKS")
                    : t(`deep.${brand.id}.eyebrow`)}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {t(`deep.${brand.id}.headline`)}
                </h3>
                <ul className="mt-7 space-y-3.5">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-muted md:text-base">
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0"
                        style={{ color: brand.color }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  href={brand.href}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`deepdive-cta-${brand.id}`}
                  onClick={() => trackEvent("deepdive_cta_click", "engagement", brand.id)}
                  className="mt-9 inline-flex items-center gap-2 rounded px-5 py-2.5 text-sm font-semibold transition-transform duration-150 ease-out hover:scale-[1.02]"
                  style={{ background: brand.color, color: ctaTextColor }}
                >
                  {t(`deep.${brand.id}.cta`)}
                  <ArrowUpRight size={16} />
                </a>
              </Reveal>
            </div>
          </div>
        );
      })}
    </section>
  );
};
