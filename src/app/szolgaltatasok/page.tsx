import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SERVICES_DATA } from "@/lib/servicesData";
import { DivisionBrandVisual, DivisionKey } from "@/components/DivisionBrandVisual";

export const metadata: Metadata = {
  title: "Szolgáltatások — Négy Szakág, Egy Rendszerház | SIROTECH",
  description: "IT, biztonságtechnika, villanyszerelés és szoftverfejlesztés egy partneren belül.",
  alternates: {
    canonical: "https://sirotech.hu/szolgaltatasok",
  },
};

export default function SzolgaltatasokPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-bg text-ink">
        <div className="mx-auto max-w-site px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-sironic-red uppercase block mb-3">
              SZAKÁGAINK & SZOLGÁLTATÁSAINK
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink leading-tight mb-6">
              Négy szakág. Egy felelősség.
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              Szolgáltatásaink lefedik az épületek és vállalatok teljes technológiai infrastruktúráját.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(SERVICES_DATA).map(([slug, data]) => {
              const brandKey = slug as DivisionKey;
              return (
                <div
                  key={slug}
                  className="group relative flex flex-col justify-between rounded-2xl border border-line bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-line/90 hover:shadow-2xl"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-xs font-mono font-bold tracking-wider text-muted uppercase block mb-1">
                          {data.brand}
                        </span>
                        <h2 className="font-display text-2xl font-bold text-ink">
                          {data.heading_hu}
                        </h2>
                      </div>
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: data.accentColor }}
                      />
                    </div>

                    {/* Authentic Brand Emblem Visual */}
                    <div className="mb-6">
                      <DivisionBrandVisual brandKey={brandKey} context="card" />
                    </div>

                    <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                      {data.body_hu}
                    </p>
                  </div>

                  <Link
                    href={`/szolgaltatasok/${slug}`}
                    className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-line bg-panel font-semibold text-sm text-ink transition-colors hover:border-silver"
                  >
                    <span>Részletes divízió megtekintése</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
