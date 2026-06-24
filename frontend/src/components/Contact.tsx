"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

const schema = z.object({
  company: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email(),
  interests: z.array(z.string()).optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const inputClass =
  "w-full rounded border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted/50 transition-colors focus:border-silver focus:outline-none";

export const Contact = () => {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const options: string[] = t("contact.form.options");
  const resolver = useMemo(() => zodResolver(schema), []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver, defaultValues: { interests: [] } });

  const onSubmit = async (values: FormValues) => {
    setStatus("sending");
    try {
      const res = await fetch(`/server/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          interests: values.interests ?? [],
          message: values.message ?? "",
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const details = [
    { icon: Mail, value: t("contact.details.email"), id: "email" },
    { icon: Phone, value: t("contact.details.phone"), id: "phone" },
    { icon: MapPin, value: t("contact.details.location"), id: "location" },
  ];

  return (
    <section id="contact" data-testid="contact-section" className="scroll-mt-20 border-t border-line/50 py-28">
      <div className="mx-auto grid max-w-site gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="label text-silver">{t("contact.eyebrow")}</p>
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("contact.headline")}
          </h2>
          <p className="mt-5 text-base text-muted">{t("contact.responseNote")}</p>

          <div className="mt-12 space-y-5">
            {details.map((detail) => (
              <div key={detail.id} className="flex items-center gap-4" data-testid={`contact-detail-${detail.id}`}>
                <span className="flex h-11 w-11 items-center justify-center rounded border border-line bg-surface text-silver">
                  <detail.icon size={18} strokeWidth={1.5} />
                </span>
                <span className="text-sm text-ink md:text-base">{detail.value}</span>
              </div>
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
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="label mb-2 block text-muted">{t("contact.form.company")} *</label>
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
              <div>
                <label className="label mb-2 block text-muted">{t("contact.form.name")} *</label>
                <input
                  {...register("name")}
                  data-testid="contact-input-name"
                  className={inputClass}
                  type="text"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-sironic" data-testid="error-name">
                    {t("contact.form.required")}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label className="label mb-2 block text-muted">{t("contact.form.email")} *</label>
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

            <div className="mt-5">
              <span className="label mb-3 block text-muted">{t("contact.form.interest")}</span>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {options.map((option, index) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-3 rounded border border-line bg-bg px-3.5 py-3 text-sm text-ink transition-colors hover:border-silver/50"
                  >
                    <input
                      type="checkbox"
                      value={option}
                      {...register("interests")}
                      data-testid={`contact-interest-${index}`}
                      className="h-4 w-4 accent-[#C0C0D0]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <label className="label mb-2 block text-muted">{t("contact.form.message")}</label>
              <textarea
                {...register("message")}
                data-testid="contact-input-message"
                className={`${inputClass} min-h-[120px] resize-y`}
              />
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
