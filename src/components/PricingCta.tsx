"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export const PricingCta = () => {
  const { t } = useI18n();

  return (
    <section data-testid="pricing-section" className="py-12">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg border border-sironic/30 bg-surface px-8 py-16 text-center sm:px-16">
            <div
              className="absolute left-1/2 top-0 h-64 w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
              style={{ background: "radial-gradient(closest-side, #E8271A, transparent)" }}
              aria-hidden
            />
            <h2 className="relative font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("pricing.headline")}
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-base text-muted md:text-lg">
              {t("pricing.sub")}
            </p>
            <a
              href="https://sironic.hu"
              target="_blank"
              rel="noreferrer"
              data-testid="pricing-cta-btn"
              className="relative mt-9 inline-flex rounded bg-sironic px-8 py-4 text-base font-semibold text-white transition-transform duration-150 ease-out hover:scale-[1.02]"
            >
              {t("pricing.cta")}
            </a>
            <p className="relative mt-6 font-mono text-xs text-muted">{t("pricing.note")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
