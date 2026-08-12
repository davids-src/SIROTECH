"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { trackEvent } from "@/lib/gtag";

const buildSchema = (gdprMsg: string, interestMsg: string) =>
  z.object({
    interest: z.string().min(1, interestMsg),
    company: z.string().min(1),
    email: z.string().email(),
    phone: z.string().optional(),
    message: z.string().optional(),
    gdpr: z.literal(true, {
      errorMap: () => ({ message: gdprMsg }),
    }),
  });

type FormValues = {
  interest: string;
  company: string;
  email: string;
  phone?: string;
  message?: string;
  gdpr: true;
};

const inputClass =
  "w-full rounded border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted/50 transition-colors focus:border-silver focus:outline-none";

export const Contact = () => {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const options: string[] = t("contact.form.options");

  const schema = useMemo(
    () => buildSchema(t("contact.form.gdprRequired"), t("contact.form.interestRequired")),
    [t]
  );
  const resolver = useMemo(() => zodResolver(schema), [schema]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = async (values: FormValues) => {
    setStatus("sending");
    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          interest: values.interest,
          company: values.company,
          email: values.email,
          phone: values.phone ?? "",
          message: values.message ?? "",
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      trackEvent("contact_submit_success", "contact", values.interest || "none");
      setStatus("success");
      reset();
    } catch (err: any) {
      trackEvent("contact_submit_failure", "contact", err?.message || "unknown_error");
      setStatus("error");
    }
  };

  const details = [
    {
      icon: Mail,
      value: t("contact.details.email"),
      id: "email",
      href: `mailto:${t("contact.details.email")}`,
    },
    {
      icon: Phone,
      value: t("contact.details.phone"),
      id: "phone",
      href: `tel:${t("contact.details.phone").replace(/\s+/g, "")}`,
    },
    {
      icon: MapPin,
      value: t("contact.details.location"),
      id: "location",
      href: `https://maps.google.com/?q=${encodeURIComponent(t("contact.details.location"))}`,
    },
  ];

  return (
    <section
      id="kapcsolat"
      data-testid="contact-section"
      className="scroll-mt-20 border-t border-line/50 py-28"
    >
      <div className="mx-auto grid max-w-site gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="label text-silver">{t("contact.eyebrow")}</p>
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("contact.headline")}
          </h2>
          <p className="mt-5 text-base text-muted">{t("contact.responseNote")}</p>

          <div className="mt-12 space-y-5">
            {details.map((detail) => (
              <a
                key={detail.id}
                href={detail.href}
                target={detail.id === "location" ? "_blank" : undefined}
                rel={detail.id === "location" ? "noreferrer" : undefined}
                onClick={() =>
                  trackEvent("contact_detail_click", "engagement", detail.id)
                }
                className="flex items-center gap-4 group cursor-pointer"
                data-testid={`contact-detail-${detail.id}`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded border border-line bg-surface text-silver transition-colors group-hover:border-silver group-hover:text-ink">
                  <detail.icon size={18} strokeWidth={1.5} />
                </span>
                <span className="text-sm text-ink/80 transition-colors group-hover:text-ink md:text-base">
                  {detail.value}
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            data-testid="contact-form"
            className="rounded-lg border border-line bg-surface p-8"
            noValidate
          >
            {/* 1. Érdeklődési terület — FIRST */}
            <div>
              <label className="label mb-2 block text-muted">
                {t("contact.form.interest")} *
              </label>
              <select
                {...register("interest")}
                data-testid="contact-interest-select"
                className={`${inputClass} cursor-pointer`}
                defaultValue=""
              >
                <option value="" disabled>
                  — {t("contact.form.interest")} —
                </option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.interest && (
                <p className="mt-1.5 text-xs text-sironic" data-testid="error-interest">
                  {errors.interest.message}
                </p>
              )}
            </div>

            {/* 2. Cégnév / Név */}
            <div className="mt-5">
              <label className="label mb-2 block text-muted">
                {t("contact.form.company")} *
              </label>
              <input
                {...register("company")}
                data-testid="contact-input-company"
                className={inputClass}
                type="text"
              />
              {errors.company && (
                <p className="mt-1.5 text-xs text-sironic" data-testid="error-company">
                  {t("contact.form.required")}
                </p>
              )}
            </div>

            {/* 3. E-mail */}
            <div className="mt-5">
              <label className="label mb-2 block text-muted">
                {t("contact.form.email")} *
              </label>
              <input
                {...register("email")}
                data-testid="contact-input-email"
                className={inputClass}
                type="email"
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-sironic" data-testid="error-email">
                  {t("contact.form.invalidEmail")}
                </p>
              )}
            </div>

            {/* 4. Telefonszám (optional) */}
            <div className="mt-5">
              <label className="label mb-2 block text-muted">
                {t("contact.form.phone")}
              </label>
              <input
                {...register("phone")}
                data-testid="contact-input-phone"
                className={inputClass}
                type="tel"
              />
            </div>

            {/* 5. Üzenet */}
            <div className="mt-5">
              <label className="label mb-2 block text-muted">
                {t("contact.form.message")}
              </label>
              <textarea
                {...register("message")}
                data-testid="contact-input-message"
                className={`${inputClass} min-h-[120px] resize-y`}
              />
            </div>

            {/* 6. GDPR checkbox */}
            <div className="mt-5">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("gdpr")}
                  data-testid="contact-gdpr-checkbox"
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#E8271A]"
                />
                <span
                  className="text-xs leading-relaxed text-muted"
                  dangerouslySetInnerHTML={{ __html: t("contact.form.gdpr") }}
                />
              </label>
              {errors.gdpr && (
                <p className="mt-1.5 text-xs text-sironic" data-testid="error-gdpr">
                  {t("contact.form.gdprRequired")}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              data-testid="contact-submit-btn"
              className="mt-7 w-full rounded bg-silver px-6 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-ink disabled:opacity-60"
            >
              {status === "sending" ? t("contact.form.sending") : t("contact.form.submit")}
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm text-sirosoft" data-testid="contact-success">
                {t("contact.form.success")}
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-sironic" data-testid="contact-error">
                {t("contact.form.error")}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};
