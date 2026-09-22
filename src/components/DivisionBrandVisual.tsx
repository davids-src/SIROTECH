"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export type DivisionKey = "sironic" | "siroved" | "sirosoft" | "sirovill";

interface DivisionBrandVisualProps {
  brandKey: DivisionKey;
  context?: "card" | "hero";
  className?: string;
}

export const BRAND_VISUAL_DATA: Record<
  DivisionKey,
  {
    name: string;
    logo: string;
    domain: string;
    accent: string;
    subtitle_hu: string;
    subtitle_en: string;
    width: number;
    height: number;
  }
> = {
  sironic: {
    name: "SIRONIC",
    logo: "/brand/sironic_logo.svg",
    domain: "sironic.eu",
    accent: "#E8271A",
    subtitle_hu: "Informatikai divízió",
    subtitle_en: "IT Division",
    width: 700,
    height: 775,
  },
  siroved: {
    name: "SIRO-VÉD",
    logo: "/brand/siroved_logo.svg",
    domain: "siroved.hu",
    accent: "#1A6BE8",
    subtitle_hu: "Biztonságtechnikai divízió",
    subtitle_en: "Security Technology Division",
    width: 700,
    height: 828,
  },
  sirosoft: {
    name: "SIROSOFT",
    logo: "/brand/sirosoft_logo.svg",
    domain: "sirosoft.hu",
    accent: "#1AE87B",
    subtitle_hu: "Szoftverfejlesztési divízió",
    subtitle_en: "Software Development Division",
    width: 700,
    height: 775,
  },
  sirovill: {
    name: "SIROVILL",
    logo: "/brand/sirovill_logo.svg",
    domain: "sirovill.hu",
    accent: "#F5B81C",
    subtitle_hu: "Villamos kivitelezési divízió",
    subtitle_en: "Electrical Services Division",
    width: 700,
    height: 775,
  },
};

export const DivisionBrandVisual = ({
  brandKey,
  context = "card",
  className = "",
}: DivisionBrandVisualProps) => {
  const { locale } = useI18n();
  const isEn = locale === "en";
  const info = BRAND_VISUAL_DATA[brandKey];

  if (!info) return null;

  const isHero = context === "hero";
  const boxHeight = isHero
    ? "h-[280px] sm:h-[320px] lg:h-[360px]"
    : "h-[200px] sm:h-[240px]";
  const subtitle = isEn ? info.subtitle_en : info.subtitle_hu;

  return (
    <div
      className={`relative w-full ${boxHeight} rounded-xl overflow-hidden select-none flex flex-col items-stretch shadow-lg ${className}`}
    >
      {/* Accent-color top label bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 shrink-0"
        style={{ backgroundColor: info.accent }}
      >
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-white/95">
          {info.name}
        </span>
        {isHero && (
          <span className="ml-auto text-[10px] font-mono text-white/60 lowercase">
            {info.domain}
          </span>
        )}
      </div>

      {/* Main colored box — accent-tinted, logo centered */}
      <div
        className="flex-1 flex items-center justify-center p-4 sm:p-6"
        style={{
          backgroundColor: `${info.accent}12`,
          borderLeft: `1.5px solid ${info.accent}35`,
          borderRight: `1.5px solid ${info.accent}35`,
        }}
      >
        <Image
          src={info.logo}
          alt={`${info.name} embléma`}
          width={info.width}
          height={info.height}
          priority={isHero}
          className="object-contain w-auto max-w-[58%] max-h-[130px] sm:max-h-[155px] lg:max-h-[175px] drop-shadow-md"
        />
      </div>

      {/* Bottom subtitle strip */}
      <div
        className="px-4 py-2 text-center shrink-0"
        style={{
          backgroundColor: `${info.accent}0E`,
          borderLeft: `1.5px solid ${info.accent}25`,
          borderRight: `1.5px solid ${info.accent}25`,
          borderBottom: `1.5px solid ${info.accent}25`,
        }}
      >
        <span className="text-[11px] font-mono font-medium tracking-wide text-muted block">
          {subtitle}
        </span>
      </div>
    </div>
  );
};
