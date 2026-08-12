"use client";

import { Check, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { trackEvent } from "@/lib/gtag";

export const FreeAssessmentCta = () => {
  const { t } = useI18n();
  const bullets: string[] = t("freeAssessment.bullets");

  return (
    <section
      id="ingyenes-felmeres"
      data-testid="free-assessment-section"
      className="border-t border-line/50 py-28 relative overflow-hidden"
    >
      <div
        className="absolute left-1/2 top-0 h-80 w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(closest-side, #E8271A, transparent)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-site px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Copy */}
          <Reveal>
            <p className="label text-silver">{t("freeAssessment.eyebrow")}</p>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t("freeAssessment.headline")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              {t("freeAssessment.lead")}
            </p>

            <ul className="mt-8 space-y-3.5">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-muted md:text-base">
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-[#E8271A]"
                  />
                  {bullet}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xs text-muted/60 italic">{t("freeAssessment.microcopy")}</p>
          </Reveal>

          {/* Right: CTA card */}
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-lg border border-[#E8271A]/25 bg-surface p-10 text-center shadow-[0_0_60px_-20px_rgba(232,39,26,0.3)]">
              <div
                className="absolute left-1/2 top-0 h-48 w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(closest-side, #E8271A, transparent)" }}
                aria-hidden
              />
              <div className="relative">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#E8271A]/25 bg-[#E8271A]/10 mb-6">
                  <Check size={28} className="text-[#E8271A]" strokeWidth={2.5} />
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#E8271A] mb-4">
                  {t("freeAssessment.eyebrow")}
                </p>
                <p className="font-display text-xl font-semibold text-ink mb-8">
                  Ingyenes · Kötelezettségmentes · Személyes
                </p>
                <a
                  href="#kapcsolat"
                  data-testid="free-assessment-cta-btn"
                  onClick={() =>
                    trackEvent("free_assessment_cta_click", "engagement", "Free Assessment CTA")
                  }
                  className="inline-flex items-center gap-2 rounded bg-[#E8271A] px-8 py-4 text-sm font-semibold text-white transition-all duration-150 ease-out hover:scale-[1.02] hover:bg-[#c91f15]"
                >
                  {t("freeAssessment.cta")}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
