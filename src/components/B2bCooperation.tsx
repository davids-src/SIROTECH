"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { BRANDS } from "@/lib/brands";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export const B2bCooperation = () => {
  const { t } = useI18n();

  return (
    <section id="b2b-cooperation" className="border-t border-line/50 py-28 bg-surface/30">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <div className="flex flex-col items-start gap-4 mb-16 md:mb-20">
            <span className="font-mono text-xs uppercase tracking-widest text-muted/80 font-semibold border border-line px-3 py-1.5 rounded-sm bg-surface">
              {t("b2bCooperation.eyebrow")}
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:w-2/3">
              {t("b2bCooperation.headline")}
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted sm:text-lg lg:w-2/3">
              {t("b2bCooperation.lead")}
            </p>
            <div className="mt-4 rounded-lg bg-surface border border-line p-6 lg:w-2/3 shadow-sm">
              <p className="text-sm font-medium leading-relaxed text-ink">
                {t("b2bCooperation.highlight")}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {["sironic", "siroved", "sirovill"].map((brandId, idx) => {
            const brand = BRANDS.find((b) => b.id === brandId);
            if (!brand) return null;

            return (
              <Reveal key={brandId} delay={idx * 0.1}>
                <a
                  href={brand.href.replace(".hu", ".hu/partneri-egyuttmukodes").replace(".eu", ".eu/hu/partneri-egyuttmukodes")}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-full flex-col rounded-lg border border-line bg-surface p-8 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
                  style={
                    {
                      "--hover-color": brand.color,
                      "--hover-border": `${brand.color}60`,
                    } as React.CSSProperties
                  }
                >
                  {/* Subtle glow on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 pointer-events-none"
                    style={{ background: `radial-gradient(circle at top right, ${brand.color}, transparent 60%)` }}
                  />
                  {/* Interactive border on hover */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent transition-colors duration-300 group-hover:border-[var(--hover-border)] pointer-events-none" />

                  <div className="mb-6 flex items-center justify-between">
                    <span 
                      className="font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm border"
                      style={{ 
                        color: brand.color,
                        borderColor: `${brand.color}40`,
                        backgroundColor: `${brand.color}15`
                      }}
                    >
                      {brand.name}
                    </span>
                    <ArrowUpRight size={18} className="text-muted transition-colors duration-300 group-hover:text-[var(--hover-color)]" />
                  </div>
                  
                  <h3 className="mb-3 font-display text-xl font-bold text-ink transition-colors duration-300 group-hover:text-[var(--hover-color)]">
                    {t(`b2bCooperation.cards.${brandId}.title`)}
                  </h3>
                  
                  <p className="mb-8 flex-1 text-sm leading-relaxed text-muted">
                    {t(`b2bCooperation.cards.${brandId}.body`)}
                  </p>
                  
                  <div className="mt-auto border-t border-line pt-4">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-muted/60 mb-1">Célcsoport:</span>
                    <p className="text-xs font-medium text-ink/80">
                      {t(`b2bCooperation.cards.${brandId}.target`)}
                    </p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
