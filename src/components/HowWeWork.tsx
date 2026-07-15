"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export const HowWeWork = () => {
  const { t } = useI18n();
  const steps = t("howWeWork.steps") as { number: string; title: string; body: string }[];

  return (
    <section id="how-we-work" data-testid="how-we-work-section" className="border-t border-line/50 py-28 relative overflow-hidden">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="label text-silver">{t("howWeWork.eyebrow")}</p>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t("howWeWork.headline")}
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Timeline connecting line (desktop only) */}
          <div className="absolute top-[28px] left-[5%] right-[5%] hidden h-[2px] bg-gradient-to-r from-[#E8271A]/0 via-[#E8271A]/20 to-[#E8271A]/0 lg:block" aria-hidden />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Step indicator circle */}
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border bg-bg text-ink shadow-[0_0_20px_rgba(232,39,26,0.15)] transition-all duration-300 hover:border-[#E8271A] hover:text-[#E8271A] z-10"
                  style={{ borderColor: "rgba(232,39,26,0.3)" }}
                >
                  <span className="font-mono text-sm font-semibold tracking-wide text-silver">{step.number}</span>
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted max-w-xs lg:max-w-none">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
