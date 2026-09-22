"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getAttributionData } from "@/lib/attribution";
import { trackCustomEvent } from "@/lib/gtag";
import { Loader2, CheckCircle2 } from "lucide-react";
import { usePathname } from "next/navigation";

const schema = z.object({
  customer_type: z.enum(["Vállalkozás / intézmény", "Magánszemély"], { required_error: "Válassza ki az ügyfél típusát" }),
  request_type: z.enum([
    "Új kivitelezés / új rendszer",
    "Meglévő rendszer bővítése",
    "Javítás / hibaelhárítás",
    "Korszerűsítés / csere",
    "Hosszú távú karbantartás / üzemeltetés",
    "Még nem tudom pontosan",
  ], { required_error: "Válassza ki a megkeresés típusát" }),
  location: z.string().trim().min(1, "A helyszín megadása kötelező").max(100),
  timeframe: z.enum([
    "Sürgős / néhány napon belül",
    "1 hónapon belül",
    "1–3 hónapon belül",
    "3–6 hónapon belül",
    "Később / tervezési szakasz",
  ], { required_error: "Válassza ki az időkeretet" }),
  name: z.string().trim().min(1, "A név megadása kötelező").max(200),
  company: z.string().trim().max(200).optional().default(""),
  email: z.string().trim().email("Érvénytelen e-mail cím"),
  phone: z.string().trim().max(50).optional().default(""),
  message: z.string().trim().min(1, "Üzenet megadása kötelező").max(5000),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "Az adatvédelmi tájékoztató elfogadása kötelező" }),
  }),
});

type ContactFormData = z.infer<typeof schema>;

interface ContactFormProps {
  defaultProjectType?: string;
  defaultRequestType?: string;
  defaultService?: string;
}

export const ContactForm = ({
  defaultProjectType,
  defaultRequestType,
  defaultService,
}: ContactFormProps = {}) => {
  const pathname = usePathname();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema) as any,
  });

  const customerType = watch("customer_type");
  const requestType = watch("request_type");

  // Track field selections for GA4
  useEffect(() => {
    if (customerType) {
      trackCustomEvent({ name: "customer_type_select", params: { customer_type: customerType } });
    }
  }, [customerType]);

  useEffect(() => {
    if (requestType) {
      trackCustomEvent({ name: "request_type_select", params: { request_type: requestType } });
    }
  }, [requestType]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const { firstTouch, lastTouch } = getAttributionData();
      
      const payload = {
        ...data,
        first_touch: JSON.stringify(firstTouch || {}),
        last_touch: JSON.stringify(lastTouch || {}),
        landing_page: pathname,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Hiba történt a küldés során.");
      }

      setIsSuccess(true);
      
      trackCustomEvent({
        name: "generate_lead",
        params: {
          form_type: "contact_form",
          customer_type: data.customer_type,
          request_type: data.request_type,
          cta_location: pathname,
          source_site: "sirotech",
          landing_page: pathname,
        }
      });
    } catch (err: any) {
      setErrorMsg(err.message || "Ismeretlen hiba történt.");
      trackCustomEvent({
        name: "form_error",
        params: { form_type: "contact_form", error_type: "submission_failed" }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasInteracted = () => {
    trackCustomEvent({ name: "form_start", params: { form_type: "contact_form" } });
  };

  if (isSuccess) {
    return (
      <div className="rounded-xl border border-line bg-surface p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto h-16 w-16 text-sirosoft mb-6" />
        <h3 className="text-2xl font-bold text-ink mb-4">Köszönjük megkeresését!</h3>
        <p className="text-muted">
          Üzenetét sikeresen továbbítottuk. Szakértő kollégánk hamarosan felveszi Önnel a kapcsolatot a megadott elérhetőségeken.
        </p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-6 rounded-xl border border-line bg-surface p-6 sm:p-8"
      onClick={() => {
        // Only fire form_start once
        if (!(window as any)._formStarted) {
          hasInteracted();
          (window as any)._formStarted = true;
        }
      }}
    >
      <div className="space-y-4">
        {/* Customer Type */}
        <div>
          <label className="block text-sm font-medium text-ink mb-3">Ön hogyan keres minket? *</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Vállalkozás / intézmény", "Magánszemély"].map((opt) => (
              <label key={opt} className={`relative flex cursor-pointer rounded-lg border p-4 hover:bg-panel transition-colors ${customerType === opt ? 'border-siroved bg-panel' : 'border-line'}`}>
                <input type="radio" value={opt} {...register("customer_type")} className="sr-only" />
                <span className="text-sm font-medium text-ink">{opt}</span>
              </label>
            ))}
          </div>
          {errors.customer_type && <p className="mt-1 text-sm text-sironic">{errors.customer_type.message}</p>}
        </div>

        {/* Request Type */}
        <div>
          <label className="block text-sm font-medium text-ink mb-3">Milyen helyzetben van? *</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Új kivitelezés / új rendszer",
              "Meglévő rendszer bővítése",
              "Javítás / hibaelhárítás",
              "Korszerűsítés / csere",
              "Hosszú távú karbantartás / üzemeltetés",
              "Még nem tudom pontosan"
            ].map((opt) => (
              <label key={opt} className={`relative flex cursor-pointer rounded-lg border p-3 hover:bg-panel transition-colors ${requestType === opt ? 'border-siroved bg-panel' : 'border-line'}`}>
                <input type="radio" value={opt} {...register("request_type")} className="sr-only" />
                <span className="text-sm font-medium text-ink">{opt}</span>
              </label>
            ))}
          </div>
          {errors.request_type && <p className="mt-1 text-sm text-sironic">{errors.request_type.message}</p>}
        </div>
        
        {/* Location & Timeframe */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-muted">Helyszín (Település) *</label>
            <input 
              {...register("location")}
              className="w-full rounded border border-line bg-bg px-4 py-2 text-ink placeholder:text-muted/50 focus:border-silver focus:outline-none focus:ring-1 focus:ring-silver"
              placeholder="Pl. Székesfehérvár"
            />
            {errors.location && <p className="mt-1 text-sm text-sironic">{errors.location.message}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-muted">Mikor lenne aktuális? *</label>
            <select 
              {...register("timeframe")}
              className="w-full rounded border border-line bg-bg px-4 py-2 text-ink focus:border-silver focus:outline-none focus:ring-1 focus:ring-silver"
            >
              <option value="">Kérjük, válasszon...</option>
              <option value="Sürgős / néhány napon belül">Sürgős / néhány napon belül</option>
              <option value="1 hónapon belül">1 hónapon belül</option>
              <option value="1–3 hónapon belül">1–3 hónapon belül</option>
              <option value="3–6 hónapon belül">3–6 hónapon belül</option>
              <option value="Később / tervezési szakasz">Később / tervezési szakasz</option>
            </select>
            {errors.timeframe && <p className="mt-1 text-sm text-sironic">{errors.timeframe.message}</p>}
          </div>
        </div>

        {/* Name & Company */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-muted">Név *</label>
            <input 
              {...register("name")}
              className="w-full rounded border border-line bg-bg px-4 py-2 text-ink focus:border-silver focus:outline-none"
              placeholder="Teljes név"
            />
            {errors.name && <p className="mt-1 text-sm text-sironic">{errors.name.message}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-muted">Cég neve (opcionális)</label>
            <input 
              {...register("company")}
              className="w-full rounded border border-line bg-bg px-4 py-2 text-ink focus:border-silver focus:outline-none"
              placeholder="Cégnév"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-muted">E-mail *</label>
            <input 
              type="email"
              {...register("email")}
              className="w-full rounded border border-line bg-bg px-4 py-2 text-ink focus:border-silver focus:outline-none"
              placeholder="pelda@email.hu"
            />
            {errors.email && <p className="mt-1 text-sm text-sironic">{errors.email.message}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-muted">Telefonszám (opcionális)</label>
            <input 
              type="tel"
              {...register("phone")}
              className="w-full rounded border border-line bg-bg px-4 py-2 text-ink focus:border-silver focus:outline-none"
              placeholder="+36 30 123 4567"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="mb-1 block text-sm font-medium text-muted">Röviden a feladatról *</label>
          <textarea 
            {...register("message")}
            rows={4}
            className="w-full rounded border border-line bg-bg px-4 py-2 text-ink focus:border-silver focus:outline-none resize-none"
            placeholder="Kérjük, írja le a megkeresés részleteit..."
          />
          {errors.message && <p className="mt-1 text-sm text-sironic">{errors.message.message}</p>}
        </div>

        {/* Privacy */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer mt-2">
            <div className="mt-1 flex items-center h-5">
              <input 
                type="checkbox"
                {...register("privacy")}
                className="w-4 h-4 rounded border-line bg-bg text-silver focus:ring-silver focus:ring-offset-bg cursor-pointer"
              />
            </div>
            <span className="text-sm text-muted">
              Elolvastam és elfogadom az <a href="/adatvedelem" target="_blank" className="text-silver hover:underline">adatkezelési tájékoztatót</a>. *
            </span>
          </label>
          {errors.privacy && <p className="mt-1 text-sm text-sironic">{errors.privacy.message}</p>}
        </div>

        {errorMsg && (
          <div className="rounded border border-sironic/50 bg-sironic/10 p-4 text-sm text-sironic">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded bg-silver py-3.5 text-base font-semibold text-bg transition-colors hover:bg-ink disabled:opacity-70 flex justify-center items-center gap-2 mt-4"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Küldés folyamatban...
            </>
          ) : (
            "Megkeresés elküldése"
          )}
        </button>
      </div>
    </form>
  );
};
