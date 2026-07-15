"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import React from "react";

export const DoubleCta = () => {
  const { t } = useI18n();

  return (
    <section id="double-cta" data-testid="double-cta-section" className="border-t border-line/50 py-28 relative">
      <div className="mx-auto max-w-site px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* B2B Column */}
          <Reveal>
            <div
              className="group relative flex h-full flex-col rounded-lg border bg-surface p-8 shadow-[0_0_32px_-16px_var(--glow)] transition-all duration-150 ease-out hover:scale-[1.01] hover:shadow-[0_0_64px_-12px_var(--glow)] md:p-10"
              style={
                {
                  "--glow": "#E8271A",
                  borderColor: "rgba(232, 39, 26, 0.25)",
                } as React.CSSProperties
              }
            >
              <span className="font-mono text-xs uppercase tracking-widest text-[#E8271A] font-semibold">B2B</span>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
                {t("doubleCta.b2b.title")}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                {t("doubleCta.b2b.body")}
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  data-testid="double-cta-b2b-btn"
                  className="inline-flex items-center gap-2 rounded bg-silver px-6 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-ink"
                >
                  {t("doubleCta.b2b.cta")}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* B2C Column */}
          <Reveal delay={0.15}>
            <div
              className="group relative flex h-full flex-col rounded-lg border bg-surface p-8 shadow-[0_0_32px_-16px_var(--glow)] transition-all duration-150 ease-out hover:scale-[1.01] hover:shadow-[0_0_64px_-12px_var(--glow)] md:p-10"
              style={
                {
                  "--glow": "#1A6BE8",
                  borderColor: "rgba(26, 107, 232, 0.25)",
                } as React.CSSProperties
              }
            >
              <span className="font-mono text-xs uppercase tracking-widest text-[#1A6BE8] font-semibold">B2C</span>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
                {t("doubleCta.b2c.title")}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                {t("doubleCta.b2c.body")}
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  data-testid="double-cta-b2c-btn"
                  className="inline-flex items-center gap-2 rounded border border-line px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-[#1A6BE8] hover:text-ink"
                >
                  {t("doubleCta.b2c.cta")}
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
