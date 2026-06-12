"use client";

import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BRANDS } from "@/lib/brands";

export const Hero = () => {
  const { t } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden pb-28 pt-36 sm:pt-44">
      <div className="hero-grid absolute inset-0" aria-hidden />
      <div
        className="absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(closest-side, #C0C0D0, transparent)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-site px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="label text-silver"
          data-testid="hero-eyebrow"
        >
          {t("hero.eyebrow")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 whitespace-pre-line font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
          data-testid="hero-headline"
        >
          {t("hero.headline")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-base text-muted md:text-lg"
          data-testid="hero-subheadline"
        >
          {t("hero.sub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#brands"
            data-testid="hero-primary-cta"
            className="rounded bg-silver px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-ink"
          >
            {t("hero.cta1")}
          </a>
          <a
            href="#contact"
            data-testid="hero-secondary-cta"
            className="rounded border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-silver"
          >
            {t("hero.cta2")}
          </a>
        </motion.div>

        {/* Brand switcher strip */}
        <div
          id="brands"
          data-testid="brand-cards"
          className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {BRANDS.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 + index * 0.06, ease: "easeOut" }}
            >
              <a
                href={`#${brand.id}`}
                data-testid={`brand-card-${brand.id}`}
                className="group flex h-full flex-col rounded-lg border bg-surface p-6 shadow-[0_0_28px_-14px_var(--glow)] transition-all duration-150 ease-out hover:scale-[1.02] hover:shadow-[0_0_56px_-10px_var(--glow)]"
                style={
                  {
                    "--glow": brand.color,
                    borderColor: `${brand.color}40`,
                  } as React.CSSProperties
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={brand.logo} alt={brand.name} className="h-6 w-auto self-start" />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">
                  {t(`brands.${brand.id}`)}
                </p>
                <span
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium"
                  style={{ color: brand.color }}
                >
                  {t("brands.explore")} {brand.name}
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 + 3 * 0.06, ease: "easeOut" }}
          >
            <div
              data-testid="brand-card-soon"
              className="flex h-full flex-col rounded-lg border border-dashed border-line bg-surface/50 p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted">
                <Plus size={16} />
              </span>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted/70">
                {t("brands.soonDesc")}
              </p>
              <span className="label mt-6 text-muted/60">{t("brands.soon")}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
