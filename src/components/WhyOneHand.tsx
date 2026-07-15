"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export const WhyOneHand = () => {
  const { t } = useI18n();
  const pillars = t("whyOneHand.pillars") as { title: string; body: string }[];

  return (
    <section id="why-one-hand" data-testid="why-one-hand-section" className="border-t border-line/50 py-28 relative">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="label text-silver">{t("whyOneHand.eyebrow")}</p>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t("whyOneHand.headline")}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col rounded-lg border bg-surface p-6 shadow-[0_0_24px_-12px_rgba(232,39,26,0.2)] transition-all duration-150 ease-out hover:scale-[1.02] hover:shadow-[0_0_48px_-8px_rgba(232,39,26,0.4)]"
              style={{ borderColor: "rgba(232,39,26,0.15)" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#E8271A]/10 text-[#E8271A] font-mono text-sm font-semibold mb-5">
                0{index + 1}
              </div>
              <h3 className="font-display text-lg font-semibold text-ink mb-3 group-hover:text-[#E8271A] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted flex-1">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
