import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LOCATIONS_DATA } from "@/lib/locationsData";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata = {
  title: "Szolgáltatási területek | SIROTECH",
  description: "IT, biztonságtechnikai, szoftveres és villamossági szolgáltatások Székesfehérváron, Fejér vármegyében, Budapesten és a Közép-Dunántúlon.",
};

export default function TeruletekPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-24">
        <div className="mx-auto max-w-site px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight mb-6">
              Hol vagyunk jelen?
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              Székesfehérvári központtal, de országos rálátással végezzük projektjeinket, kiemelten Fejér vármegyében, a Közép-Dunántúlon és Budapesten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(LOCATIONS_DATA).map(([slug, data]) => {
              return (
                <Link
                  key={slug}
                  href={`/teruletek/${slug}`}
                  className="group relative flex flex-col rounded-xl border border-line bg-surface p-8 shadow-sm transition-all duration-300 hover:border-silver hover:bg-panel"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-bg text-silver ring-1 ring-line group-hover:ring-silver/50 transition-all">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl font-bold text-ink mb-3">{data.city}</h2>
                  <p className="text-muted flex-grow">{data.intro}</p>
                  <div className="mt-8 flex items-center text-sm font-semibold text-silver group-hover:text-ink transition-colors">
                    Részletek <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
