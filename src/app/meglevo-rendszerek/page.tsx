import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BeforeAfterSystemMap } from "@/components/diagrams/BeforeAfterSystemMap";
import { EXISTING_SYSTEMS_DATA } from "@/lib/existingSystemsData";

export const metadata: Metadata = {
  title: "Meglévő Rendszerek — Bővítés, Javítás, Korszerűsítés & Üzemeltetés | SIROTECH",
  description: "Nem kell nulláról indulni. Meglévő informatikai, biztonságtechnikai, szoftveres és villamos rendszereit bővítjük, javítjuk, korszerűsítjük és üzemeltetjük.",
  alternates: {
    canonical: "https://sirotech.hu/meglevo-rendszerek",
  },
};

export default function MeglevoRendszerekPage() {
  const cards = [
    {
      slug: "bovites",
      title: "Bővítés",
      desc: "Új végpontok, területek, eszközök és funkciók illesztése a meglévő hálózatba.",
      href: "/meglevo-rendszerek/bovites",
      color: "border-sironic-red/40 hover:border-sironic-red text-sironic-red",
    },
    {
      slug: "javitas",
      title: "Javítás",
      desc: "Műszeres hibafeltárás és a stabil működés gyors helyreállítása.",
      href: "/meglevo-rendszerek/javitas",
      color: "border-siroved-blue/40 hover:border-siroved-blue text-siroved-blue",
    },
    {
      slug: "korszerusites",
      title: "Korszerűsítés",
      desc: "Elavult vagy nehezen fenntartható rendszerek megújítása az értékek megőrzésével.",
      href: "/meglevo-rendszerek/korszerusites",
      color: "border-sirovill-yellow/40 hover:border-sirovill-yellow text-sirovill-yellow",
    },
    {
      slug: "uzemeltetes",
      title: "Üzemeltetés",
      desc: "Proaktív felügyelet, karbantartás és garantált SLA reakcióidős támogatás.",
      href: "/meglevo-rendszerek/uzemeltetes",
      color: "border-sirosoft-green/40 hover:border-sirosoft-green text-sirosoft-green",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-bg text-ink">
        <div className="mx-auto max-w-site px-6">
          {/* Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold tracking-widest text-sironic-red uppercase block mb-3">
                MEGLÉVŐ RENDSZEREK
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink leading-tight mb-6">
                Nem kell nulláról indulni.
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Meglévő rendszereit is bővítjük, javítjuk, korszerűsítjük vagy hosszú távon támogatjuk. Felmérjük a jelenlegi állapotot és az értékek megőrzése mellett fejlesztünk.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#iranyok"
                  className="px-6 py-3.5 rounded-xl bg-sironic-red text-white font-semibold text-sm hover:bg-sironic-red/90 transition-all"
                >
                  Szolgáltatási irányok
                </a>
                <Link
                  href="/kapcsolat"
                  className="px-6 py-3.5 rounded-xl border border-line bg-surface text-ink font-semibold text-sm hover:border-silver/60 transition-all"
                >
                  Állapotfelmérés kérése
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <BeforeAfterSystemMap />
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div id="iranyok" className="pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-10 text-center">
              Miben tudunk segíteni meglévő rendszerénél?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {cards.map((card) => (
                <Link
                  key={card.slug}
                  href={card.href}
                  className={`group rounded-2xl border bg-surface/80 p-8 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl ${card.color}`}
                >
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider block mb-2 opacity-80">
                      IRÁNY 0{cards.indexOf(card) + 1}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-ink mb-3 group-hover:text-sironic-red transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-8">
                      {card.desc}
                    </p>
                  </div>
                  <div className="inline-flex items-center justify-between text-sm font-semibold text-ink group-hover:translate-x-1 transition-transform">
                    <span>Részletek megtekintése</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
