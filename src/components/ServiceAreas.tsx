"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { MapPin } from "lucide-react";

const AREA_GROUPS = [
  {
    label: "Fejér megye – Elsődleges terület",
    areas: [
      "Székesfehérvár",
      "Fejér megye",
      "Dunaújváros",
      "Bicske",
      "Mór",
      "Gárdony",
      "Martonvásár",
      "Sárbogárd",
      "Velence",
      "Polgárdi",
      "Aba",
      "Bodajk",
      "Enying",
    ],
    priority: true,
  },
  {
    label: "Budapest és agglomeráció",
    areas: ["Budapest", "Érd", "Dunaharaszti", "Pest megye"],
    priority: false,
  },
  {
    label: "Közép-Dunántúl régió",
    areas: ["Közép-Dunántúl", "Győr", "Veszprém", "Tatabánya", "Kecskemét"],
    priority: false,
  },
];

export const ServiceAreas = () => {
  const { t } = useI18n();

  return (
    <section
      id="service-areas"
      data-testid="service-areas-section"
      aria-label="Lefedett szolgáltatási területek"
      className="border-t border-line/50 py-20"
    >
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <div className="flex flex-col items-start gap-4 mb-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="label text-silver flex items-center gap-2">
                <MapPin size={13} className="text-muted" />
                {t("serviceAreas.eyebrow")}
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {t("serviceAreas.headline")}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                {t("serviceAreas.body")}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-6">
          {AREA_GROUPS.map((group) => (
            <Reveal key={group.label}>
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted/60">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.areas.map((area) => (
                    <span
                      key={area}
                      className={`rounded border px-3 py-1.5 font-mono text-xs transition-colors ${
                        group.priority
                          ? "border-[#E8271A]/25 bg-[#E8271A]/8 text-ink/80 hover:border-[#E8271A]/50 hover:text-ink"
                          : "border-line bg-surface/60 text-muted hover:border-silver/40 hover:text-ink/80"
                      }`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
