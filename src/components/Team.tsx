"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export const Team = () => {
  const { t } = useI18n();
  const body: string = t("team.body");
  const members: { name: string; role: string; photo: string }[] = t("team.members");

  return (
    <section
      id="kik-vagyunk"
      data-testid="team-section"
      className="border-t border-line/50 py-28"
    >
      <div className="mx-auto max-w-site px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Text */}
          <Reveal>
            <p className="label text-silver">{t("team.eyebrow")}</p>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t("team.headline")}
            </h2>
            <div className="mt-7 space-y-5">
              {body.split("\n\n").map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-muted">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Team cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div
                  data-testid={`team-member-${index}`}
                  className="group rounded-lg border border-line bg-surface overflow-hidden transition-colors duration-150 hover:border-silver/40"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-bg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.photo}
                      alt={`${member.name} – ${member.role}`}
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(10,10,12,0.7) 0%, transparent 55%)",
                      }}
                      aria-hidden
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-display text-lg font-semibold text-ink">{member.name}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
