"use client";

import { useI18n } from "@/lib/i18n";
import { trackCustomEvent } from "@/lib/gtag";
import { DivisionBrandVisual, DivisionKey } from "@/components/DivisionBrandVisual";

interface DivisionCardData {
  id: DivisionKey;
  brand: string;
  label_hu: string;
  label_en: string;
  accentClass: string;
  accentColor: string;
  short_hu: string;
  short_en: string;
  bullets_hu: string[];
  bullets_en: string[];
  cta_hu: string;
  cta_en: string;
  href: string;
}

const DIVISIONS: DivisionCardData[] = [
  {
    id: "sironic",
    brand: "SIRONIC",
    label_hu: "Informatika",
    label_en: "IT Services",
    accentClass: "border-sironic-red/40 hover:border-sironic-red text-sironic-red group-hover:bg-sironic-red/10",
    accentColor: "#E8271A",
    short_hu: "IT-üzemeltetés, hálózat, Wi-Fi, szerver, Microsoft 365 és infrastruktúra.",
    short_en: "Managed IT, networks, Wi-Fi, servers, Microsoft 365 and infrastructure.",
    bullets_hu: ["Hálózat és Wi-Fi", "Szerver és felhő", "IT üzemeltetés"],
    bullets_en: ["Network & Wi-Fi", "Server & Cloud", "Managed IT Services"],
    cta_hu: "SIRONIC megnyitása",
    cta_en: "Open SIRONIC",
    href: "https://sironic.eu",
  },
  {
    id: "siroved",
    brand: "SIRO-VÉD",
    label_hu: "Biztonságtechnika",
    label_en: "Security Systems",
    accentClass: "border-siroved-blue/40 hover:border-siroved-blue text-siroved-blue group-hover:bg-siroved-blue/10",
    accentColor: "#1A6BE8",
    short_hu: "Kamera, riasztó, beléptetés és fizikai védelmi rendszerek.",
    short_en: "CCTV, alarm, access control and physical security systems.",
    bullets_hu: ["Kamerarendszer", "Riasztó", "Beléptetés"],
    bullets_en: ["CCTV Surveillance", "Alarm Systems", "Access Control"],
    cta_hu: "SIRO-VÉD megnyitása",
    cta_en: "Open SIRO-VÉD",
    href: "https://siroved.hu",
  },
  {
    id: "sirosoft",
    brand: "SIROSOFT",
    label_hu: "Szoftverfejlesztés",
    label_en: "Software Engineering",
    accentClass: "border-sirosoft-green/40 hover:border-sirosoft-green text-sirosoft-green group-hover:bg-sirosoft-green/10",
    accentColor: "#1AE87B",
    short_hu: "Egyedi webes rendszerek, automatizálás és üzleti szoftverek.",
    short_en: "Custom web systems, automation and business software.",
    bullets_hu: ["Egyedi rendszer", "Integráció", "Automatizálás"],
    bullets_en: ["Custom Systems", "API Integration", "Automation"],
    cta_hu: "SIROSOFT megnyitása",
    cta_en: "Open SIROSOFT",
    href: "https://sirosoft.hu",
  },
  {
    id: "sirovill",
    brand: "SIROVILL",
    label_hu: "Villamos kivitelezés",
    label_en: "Electrical Services",
    accentClass: "border-sirovill-yellow/40 hover:border-sirovill-yellow text-sirovill-yellow group-hover:bg-sirovill-yellow/10",
    accentColor: "#F5B81C",
    short_hu: "Villamos hálózatok, elosztók, kiállások és kivitelezési munkák.",
    short_en: "Electrical networks, distribution boards, outlets and installations.",
    bullets_hu: ["Villamos kivitelezés", "Bővítés", "Hibakeresés"],
    bullets_en: ["Electrical Works", "Network Upgrades", "Troubleshooting"],
    cta_hu: "SIROVILL megnyitása",
    cta_en: "Open SIROVILL",
    href: "https://sirovill.hu",
  },
];

export const DivisionsSection = () => {
  const { locale } = useI18n();
  const isEn = locale === "en";

  const heading = isEn ? "Four disciplines. One systems house." : "Négy szakág. Egy rendszerház.";
  const body = isEn
    ? "IT, security technology, software and electrical services with dedicated expertise, coordinated under one approach."
    : "Informatika, biztonságtechnika, szoftver és villamos kivitelezés külön szakértelemmel, de egy közös szemlélettel.";

  const handleOutboundClick = (divisionId: string, brand: string) => {
    trackCustomEvent({
      name: "outbound_division_click",
      params: {
        destination_brand: brand,
        context: `homepage_${divisionId}`,
        cta_location: "divisions_section",
      },
    });
  };

  return (
    <section className="py-20 border-t border-line/50 relative bg-bg">
      <div className="mx-auto max-w-site px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl mb-4">
            {heading}
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            {body}
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIVISIONS.map((div) => {
            const label = isEn ? div.label_en : div.label_hu;
            const shortText = isEn ? div.short_en : div.short_hu;
            const bullets = isEn ? div.bullets_en : div.bullets_hu;
            const ctaText = isEn ? div.cta_en : div.cta_hu;

            return (
              <div
                key={div.id}
                className="group relative rounded-2xl border border-line bg-surface/90 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-line/90 hover:shadow-2xl hover:shadow-black/50"
              >
                <div>
                  {/* Top Header & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider text-muted uppercase block mb-1">
                        {label}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                        {div.brand}
                      </h3>
                    </div>
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: div.accentColor }}
                    />
                  </div>

                  {/* Authentic Brand Emblem Panel */}
                  <div className="mb-6">
                    <DivisionBrandVisual brandKey={div.id} context="card" />
                  </div>

                  {/* Description */}
                  <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                    {shortText}
                  </p>

                  {/* Key Bullets */}
                  <ul className="flex flex-wrap gap-2 mb-8">
                    {bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="inline-flex items-center text-xs font-mono px-3 py-1.5 rounded-md bg-panel border border-line/60 text-ink/90"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mr-2"
                          style={{ backgroundColor: div.accentColor }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outbound Link CTA Button */}
                <a
                  href={div.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleOutboundClick(div.id, div.brand)}
                  className={`inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl border font-semibold text-sm transition-all duration-200 ${div.accentClass}`}
                >
                  <span>{ctaText}</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
