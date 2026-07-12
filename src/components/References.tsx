"use client";

import { Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export const References = () => {
  const { t } = useI18n();
  const items: { company: string; industry: string; quote: string }[] = t("references.items");

  return (
    <section id="references" data-testid="references-section" className="scroll-mt-20 border-t border-line/50 py-28">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <p className="label text-silver">{t("references.eyebrow")}</p>
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("references.headline")}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08}>
              <figure
                data-testid={`reference-card-${index}`}
                className="flex h-full flex-col rounded-lg border border-line bg-surface p-8"
              >
                <Quote size={20} className="text-muted/50" />
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink/90">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 border-t border-line pt-5">
                  <p className="font-display font-semibold">{item.company}</p>
                  <p className="label mt-1.5 text-muted">{item.industry}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
