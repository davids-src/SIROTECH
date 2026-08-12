"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export const References = () => {
  const { t } = useI18n();
  const partners: { name: string; logo: string }[] = t("references.partners");
  const stats: { value: string; label: string }[] = t("references.stats");
  const testimonials: { name: string; company: string; quote: string }[] =
    t("references.testimonials") ?? [];

  return (
    <section
      id="referenciak"
      data-testid="references-section"
      className="scroll-mt-20 border-t border-line/50 py-28"
    >
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="label text-silver">{t("references.eyebrow")}</p>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("references.headline")}
            </h2>
            <p className="mt-5 text-base text-muted">{t("references.lead")}</p>
          </div>
        </Reveal>

        {/* Logo wall */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                data-testid={`partner-logo-${partner.name}`}
                className="flex h-16 w-36 items-center justify-center rounded-lg border border-line bg-surface px-4 py-3 transition-colors duration-150 hover:border-silver/40"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 max-w-full w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal delay={0.2}>
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-t border-line pt-5 text-center"
                data-testid={`references-stat-${stat.value}`}
              >
                <p className="font-display text-3xl font-bold text-ink sm:text-4xl">{stat.value}</p>
                <p className="label mt-2 text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Testimonials — only shown when array is non-empty */}
        {testimonials.length > 0 && (
          <Reveal delay={0.25}>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <figure
                  key={item.name}
                  data-testid={`testimonial-${index}`}
                  className="flex h-full flex-col rounded-lg border border-line bg-surface p-8"
                >
                  <blockquote className="flex-1 text-sm leading-relaxed text-ink/90">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-5">
                    <p className="font-display font-semibold">{item.name}</p>
                    <p className="label mt-1 text-muted">{item.company}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};
