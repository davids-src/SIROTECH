import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SOLUTIONS_DATA } from "@/lib/solutionsData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { SolutionDiagram } from "@/components/diagrams/SolutionDiagrams";
import { ExistingSystemCta } from "@/components/ExistingSystemCta";

export function generateStaticParams() {
  return Object.keys(SOLUTIONS_DATA).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = SOLUTIONS_DATA[params.slug];
  if (!data) return {};

  return {
    title: `${data.hero_hu} | SIROTECH Megoldások`,
    description: data.sub_hu,
    alternates: {
      canonical: `https://sirotech.hu/megoldasok/${data.slug}`,
    },
  };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const data = SOLUTIONS_DATA[params.slug];

  if (!data) {
    notFound();
  }

  // JSON-LD Schemas
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
        name: "Megoldások",
        item: "https://sirotech.hu/megoldasok",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.title_hu,
        item: `https://sirotech.hu/megoldasok/${data.slug}`,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title_hu,
    description: data.sub_hu,
    provider: {
      "@type": "Organization",
      name: "SIROTECH Megoldások Kft.",
      url: "https://sirotech.hu",
    },
    areaServed: "HU",
  };

  const divisionBadges = {
    sironic: { name: "SIRONIC — Informatika", color: "border-sironic-red/50 text-sironic-red bg-sironic-red/10", href: "https://sironic.eu" },
    siroved: { name: "SIRO-VÉD — Biztonságtechnika", color: "border-siroved-blue/50 text-siroved-blue bg-siroved-blue/10", href: "https://siroved.hu" },
    sirosoft: { name: "SIROSOFT — Szoftverfejlesztés", color: "border-sirosoft-green/50 text-sirosoft-green bg-sirosoft-green/10", href: "https://sirosoft.hu" },
    sirovill: { name: "SIROVILL — Villanyszerelés", color: "border-sirovill-yellow/50 text-sirovill-yellow bg-sirovill-yellow/10", href: "https://sirovill.hu" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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
            <Link href="/megoldasok" className="hover:text-ink whitespace-nowrap">
              Megoldások
            </Link>
            <ChevronRight size={14} />
            <span className="text-ink whitespace-nowrap font-semibold">{data.title_hu}</span>
          </nav>

          {/* Hero Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold tracking-widest text-sironic-red uppercase block mb-3">
                INTEGRÁLT MEGOLDÁS
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink leading-tight mb-6">
                {data.hero_hu}
              </h1>
              <p className="text-base sm:text-lg text-muted mb-8 leading-relaxed">
                {data.sub_hu}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl bg-sironic-red text-white font-semibold text-sm hover:bg-sironic-red/90 transition-all"
                >
                  Beszéljük át a projektet
                </a>
                <Link
                  href="/meglevo-rendszerek"
                  className="px-6 py-3.5 rounded-xl border border-line bg-surface text-ink font-semibold text-sm hover:border-silver/60 transition-all"
                >
                  Meglévő rendszerem van
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <SolutionDiagram slug={data.slug} />
            </div>
          </div>

          {/* Section 1: Insights - Miért komplex ez a helyzet? */}
          <section className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">
                Miért komplex ez a helyzet?
              </h2>
              <p className="text-muted text-sm sm:text-base">
                Három kritikus kihívás, amit az összehangolt tervezéssel előzünk meg.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.insights_hu.map((insight, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-line bg-surface/70 p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono text-sironic-red font-bold block mb-2">
                      KIHÍVÁS 0{i + 1}
                    </span>
                    <h3 className="font-display text-lg font-bold text-ink mb-3">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {insight.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Interactive System Diagram - Mit hangolunk össze? */}
          <section className="mb-24 rounded-2xl border border-line bg-panel/30 p-8 sm:p-12">
            <div className="max-w-3xl mb-8">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">
                Mit hangolunk össze?
              </h2>
              <p className="text-muted text-sm sm:text-base">
                Informatikai, biztonságtechnikai és villamos alrendszerek egyetlen átgondolt architektúrában.
              </p>
            </div>
            <div className="w-full">
              <SolutionDiagram slug={data.slug} />
            </div>
          </section>

          {/* Section 3: Process - Hogyan dolgozunk? */}
          <section className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">
                Hogyan dolgozunk?
              </h2>
              <p className="text-muted text-sm sm:text-base">
                Öt lépéses mérnöki folyamat az első felméréstől a garanciális átadásig.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {data.process_hu.map((proc) => (
                <div
                  key={proc.step}
                  className="rounded-xl border border-line bg-surface p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-sironic-red block mb-2">
                      {proc.step} LÉPÉS
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

          {/* Section 4: Foresight - Mire érdemes előre gondolni? */}
          <section className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">
                Mire érdemes előre gondolni?
              </h2>
              <p className="text-muted text-sm sm:text-base">
                Gyakorlati szempontok, amelyek megelőzik az utólagos drága átalakításokat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.foresight_hu.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-line bg-surface/60 p-6"
                >
                  <h3 className="font-display text-lg font-bold text-ink mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Balance Block - Új és meglévő rendszerek */}
          <section className="mb-24 rounded-2xl border border-line bg-surface p-8 sm:p-12">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold tracking-widest text-silver uppercase block mb-2">
                ÚJ ÉS MEGLÉVŐ RENDSZEREK EGYENSÚLYA
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">
                {data.balance_hu.title}
              </h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                {data.balance_hu.desc}
              </p>
            </div>
          </section>

          {/* Section 6: Related Divisions */}
          <section className="mb-24">
            <h3 className="text-xs font-mono font-bold tracking-widest text-muted uppercase mb-6">
              KAPCSOLÓDÓ SZAKÁGAINK ÉS SPECIALISTA DOMAINEK
            </h3>
            <div className="flex flex-wrap gap-4">
              {data.relatedDivisions.map((divKey) => {
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

          {/* Section 7: Related Solutions */}
          <section className="mb-24 border-t border-line/50 pt-12">
            <h3 className="font-display text-xl font-bold text-ink mb-6">
              Kapcsolódó megoldások
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.relatedSolutions.map((relSlug) => {
                const relData = SOLUTIONS_DATA[relSlug];
                if (!relData) return null;
                return (
                  <Link
                    key={relSlug}
                    href={`/megoldasok/${relSlug}`}
                    className="group rounded-xl border border-line bg-surface/70 p-5 transition-all hover:border-silver/60"
                  >
                    <h4 className="font-display text-base font-bold text-ink mb-2 group-hover:text-sironic-red transition-colors">
                      {relData.title_hu}
                    </h4>
                    <p className="text-xs text-muted line-clamp-2">
                      {relData.sub_hu}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Section 8: Closing Form */}
          <section id="contact" className="pt-12 border-t border-line/50">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold text-ink mb-4">
                  Beszéljük át a projektet
                </h2>
                <p className="text-muted">
                  Adja meg az alapvető adatokat, és mérnök kollégánk áttekinti az elképzeléseit.
                </p>
              </div>
              <ContactForm defaultProjectType={data.slug} />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
