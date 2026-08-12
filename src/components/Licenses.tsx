"use client";

import { ShieldCheck, Building2, FlameKindling, Briefcase } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

const ICONS = [ShieldCheck, Building2, FlameKindling, Briefcase];

export const Licenses = () => {
  const { t } = useI18n();
  const items: { title: string; value: string; body: string }[] = t("licenses.items");

  return (
    <section
      id="engedelyek"
      data-testid="licenses-section"
      className="border-t border-line/50 py-28 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        className="absolute left-1/2 top-0 h-64 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(closest-side, #E8271A, transparent)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="label text-silver">{t("licenses.eyebrow")}</p>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t("licenses.headline")}
            </h2>
            <p className="mt-5 text-base text-muted">{t("licenses.lead")}</p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div
                  data-testid={`license-card-${index}`}
                  className="h-full rounded-lg border border-line bg-surface p-7 flex flex-col gap-4 transition-colors duration-150 hover:border-silver/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded border border-[#E8271A]/25 bg-[#E8271A]/8 text-[#E8271A]">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-ink">{item.title}</p>
                    <p className="mt-1 font-mono text-xs text-silver">{item.value}</p>
                  </div>
                  <p className="text-xs leading-relaxed text-muted flex-1">{item.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
