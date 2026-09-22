import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { EXISTING_SYSTEMS_DATA } from "@/lib/existingSystemsData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export function generateStaticParams() {
  return Object.keys(EXISTING_SYSTEMS_DATA).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = EXISTING_SYSTEMS_DATA[params.slug];
  if (!data) return {};

  return {
    title: `${data.title_hu} | SIROTECH Meglévő Rendszerek`,
    description: data.sub_hu,
    alternates: {
      canonical: `https://sirotech.hu/meglevo-rendszerek/${data.slug}`,
    },
  };
}

export default function ExistingSystemDetailPage({ params }: { params: { slug: string } }) {
  const data = EXISTING_SYSTEMS_DATA[params.slug];

  if (!data) {
    notFound();
  }

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
        name: "Meglévő rendszerek",
        item: "https://sirotech.hu/meglevo-rendszerek",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.title_hu,
        item: `https://sirotech.hu/meglevo-rendszerek/${data.slug}`,
      },
    ],
  };

  const divisionBadges = {
    sironic: { name: "SIRONIC — IT", color: "border-sironic-red/50 text-sironic-red bg-sironic-red/10", href: "https://sironic.eu" },
    siroved: { name: "SIRO-VÉD — Biztonság", color: "border-siroved-blue/50 text-siroved-blue bg-siroved-blue/10", href: "https://siroved.hu" },
    sirosoft: { name: "SIROSOFT — Szoftver", color: "border-sirosoft-green/50 text-sirosoft-green bg-sirosoft-green/10", href: "https://sirosoft.hu" },
    sirovill: { name: "SIROVILL — Villanyszerelés", color: "border-sirovill-yellow/50 text-sirovill-yellow bg-sirovill-yellow/10", href: "https://sirovill.hu" },
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
            <Link href="/meglevo-rendszerek" className="hover:text-ink whitespace-nowrap">
              Meglévő rendszerek
            </Link>
            <ChevronRight size={14} />
            <span className="text-ink whitespace-nowrap font-semibold">{data.title_hu}</span>
          </nav>

          {/* Hero */}
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-mono font-bold tracking-widest text-sironic-red uppercase block mb-3">
              MEGLÉVŐ RENDSZER SZOLGÁLTATÁS
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink leading-tight mb-6">
              {data.hero_hu}
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-8">
              {data.sub_hu}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3.5 rounded-xl bg-sironic-red text-white font-semibold text-sm hover:bg-sironic-red/90 transition-all"
            >
              Konzultáció & Állapotfelmérés
            </a>
          </div>

          {/* Section 1: Mikor releváns ez? — 4 Short Situation Cards */}
          <section className="mb-24">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-8">
              Mikor releváns ez?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.situations_hu.map((sit, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-line bg-surface/80 p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-sironic-red block mb-2">
                      HELYZET 0{idx + 1}
                    </span>
                    <h3 className="font-display text-lg font-bold text-ink mb-2">
                      {sit.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {sit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Mit vizsgálunk / mit végzünk? — 2x2 Visual Matrix */}
          <section className="mb-24">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-8">
              Mit vizsgálunk és mit végzünk el?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.matrix_hu.map((mat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-line bg-surface p-6"
                >
                  <h3 className="font-display text-lg font-bold text-ink mb-4 border-b border-line/60 pb-3">
                    {mat.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {mat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-sironic-red shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Hogyan döntünk? — 4-Step Process */}
          <section className="mb-24">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-8">
              Hogyan döntünk?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {data.process_hu.map((proc) => (
                <div
                  key={proc.step}
                  className="rounded-xl border border-line bg-surface/70 p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-sironic-red block mb-2">
                      {proc.step}
                    </span>
                    <h3 className="font-display text-base font-bold text-ink mb-2">
                      {proc.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Milyen rendszerekkel foglalkozunk? — 4 Division Compact Chips */}
          <section className="mb-24">
            <h3 className="text-xs font-mono font-bold tracking-widest text-muted uppercase mb-6">
              MILYEN RENDSZEREKKEL FOGLALKOZUNK?
            </h3>
            <div className="flex flex-wrap gap-4">
              {data.divisions.map((divKey) => {
                const div = divisionBadges[divKey];
                return (
                  <a
                    key={divKey}
                    href={div.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all hover:scale-105 ${div.color}`}
                  >
                    {div.name} ↗
                  </a>
                );
              })}
            </div>
          </section>

          {/* Section 5: Closing Form Strictly After Content */}
          <section id="contact" className="pt-12 border-t border-line/50">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-ink mb-4">
                Kérjen mérnöki konzultációt
              </h2>
              <p className="text-muted">
                Adja meg meglévő rendszerének főbb paramétereit, és szakértőnk hamarosan jelentkezik.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <ContactForm defaultRequestType={data.slug} />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
