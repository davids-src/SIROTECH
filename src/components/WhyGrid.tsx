"use client";

import { Handshake, ShieldCheck, Clock, MapPin, Layers, FileText } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

const ICONS = [Handshake, ShieldCheck, Clock, MapPin, Layers, FileText];

export const WhyGrid = () => {
  const { t } = useI18n();
  const items: { title: string; body: string }[] = t("why.items");

  return (
    <section data-testid="why-section" className="border-t border-line/50 py-28">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <p className="label text-silver">{t("why.eyebrow")}</p>
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("why.headline")}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div
                  data-testid={`why-item-${index}`}
                  className="h-full rounded-lg border border-line bg-surface p-8 transition-colors duration-150 hover:border-silver/40"
                >
                  <Icon size={24} className="text-silver" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
