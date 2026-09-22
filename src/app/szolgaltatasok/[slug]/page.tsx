import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SERVICES_DATA } from "@/lib/servicesData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { DivisionBrandVisual, DivisionKey } from "@/components/DivisionBrandVisual";

export function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = SERVICES_DATA[params.slug];
  if (!data) return {};

  return {
    title: `${data.brand} — ${data.heading_hu} | SIROTECH`,
    description: data.body_hu,
    alternates: {
      canonical: `https://sirotech.hu/szolgaltatasok/${data.slug}`,
    },
  };
}

// Maps route slugs to division brand keys
const SLUG_TO_BRAND_KEY: Record<string, DivisionKey> = {
  informatika: "sironic",
  biztonsagtechnika: "siroved",
  szoftverfejlesztes: "sirosoft",
  villanyszereles: "sirovill",
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const data = SERVICES_DATA[params.slug];

  if (!data) {
    notFound();
  }

  const brandKey = SLUG_TO_BRAND_KEY[params.slug] ?? (params.slug as DivisionKey);

  // JSON-LD Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Főoldal",
        item: "https://sirotech.hu",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Szolgáltatások",
        item: "https://sirotech.hu/szolgaltatasok",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.brand,
        item: `https://sirotech.hu/szolgaltatasok/${data.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Navbar />
      <main className="pt-28 pb-20 bg-bg text-ink">
        <div className="mx-auto max-w-site px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-muted mb-8 overflow-x-auto pb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink whitespace-nowrap">
              Főoldal
            </Link>
            <ChevronRight size={14} />
            <span className="text-muted whitespace-nowrap">Szolgáltatások</span>
            <ChevronRight size={14} />
            <span className="text-ink whitespace-nowrap font-semibold">{data.brand}</span>
          </nav>

          {/* Gateway Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 order-1">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase mb-4"
                style={{ backgroundColor: `${data.accentColor}20`, color: data.accentColor }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: data.accentColor }} />
                {data.brand} DIVÍZIÓ
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink leading-tight mb-6">
                {data.heading_hu}
              </h1>
              <p className="text-base sm:text-lg text-muted mb-8 leading-relaxed">
                {data.body_hu}
              </p>

              {/* Mobile Brand Panel Position: shown below H1/Lead on mobile, hidden on LG because LG shows it in right column */}
              <div className="block lg:hidden mb-8">
                <DivisionBrandVisual brandKey={brandKey} context="hero" />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={data.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border text-sm font-bold transition-all shadow-lg hover:scale-105 ${data.borderClass} ${data.bgClass}`}
                >
                  <span>{data.primary_cta_hu}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-4 rounded-xl border border-line bg-surface text-ink text-sm font-semibold hover:border-silver transition-all"
                >
                  Komplex SIROTECH projekt kezdeményezése
                </a>
              </div>
            </div>

            {/* Desktop Brand Panel (right column) */}
            <div className="hidden lg:block lg:col-span-6 order-2">
              <DivisionBrandVisual brandKey={brandKey} context="hero" />
            </div>
          </div>

          {/* 4-6 Capability Chips */}
          <section className="mb-20 pt-8 border-t border-line/50">
            <h2 className="text-xs font-mono font-bold tracking-widest text-muted uppercase mb-8">
              Kiemelt szakmai képességek & szakterületek
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.chips_hu.map((chip, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-line bg-surface/70 p-6 flex items-start gap-4 transition-all hover:border-line/90"
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: data.accentColor }}
                  />
                  <span className="text-sm font-semibold text-ink leading-snug">
                    {chip}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Form section at bottom */}
          <section id="contact" className="pt-12 border-t border-line/50">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-ink mb-4">
                Komplex projekt egyeztetése
              </h2>
              <p className="text-muted text-sm sm:text-base">
                Amennyiben a(z) {data.brand} szakága mellett más területre (pl. villamos vagy szoftver) is szüksége van, kérjen egyeztetést!
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <ContactForm defaultService={data.slug} />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
