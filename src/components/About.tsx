"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { BRANDS } from "@/lib/brands";

export const About = () => {
  const { t } = useI18n();
  const rawStats = t("about.stats") as { value: string; label: string }[];
  const stats = rawStats.map((stat) => ({
    ...stat,
    value: stat.value.replace("{count}", BRANDS.length.toString()),
    label: stat.label.replace("{count}", BRANDS.length.toString()),
  }));

  return (
    <section id="about" data-testid="about-section" className="border-t border-line/50 py-28">
      <div className="mx-auto grid max-w-site gap-14 px-6 md:grid-cols-2 md:gap-20">
        <Reveal>
          <p className="label text-silver">{t("about.eyebrow")}</p>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {t("about.headline")}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-base leading-relaxed text-muted md:text-lg">{t("about.body")}</p>
          <div className="mt-12 grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-t border-line pt-4"
                data-testid={`about-stat-${stat.value}`}
              >
                <p className="font-display text-3xl font-bold text-ink sm:text-4xl">{stat.value}</p>
                <p className="label mt-2 text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
