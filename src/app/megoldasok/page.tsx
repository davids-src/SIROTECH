import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InteractiveSystemMap } from "@/components/diagrams/InteractiveSystemMap";
import { SolutionPreview } from "@/components/SolutionPreview";
import { ExistingSystemCta } from "@/components/ExistingSystemCta";

export const metadata: Metadata = {
  title: "Megoldások — Integrált Rendszerház | SIROTECH",
  description: "Egyetlen partner az informatikai, biztonságtechnikai, szoftveres és villamos infrastruktúra teljes életciklusára.",
  alternates: {
    canonical: "https://sirotech.hu/megoldasok",
  },
};

export default function MegoldasokPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-bg text-ink">
        <div className="mx-auto max-w-site px-6">
          {/* Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold tracking-widest text-sironic-red uppercase block mb-3">
                MEGOLDÁSOK
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink leading-tight mb-6">
                Nem külön rendszereket építünk. Működő környezetet.
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Egy iroda, telephely, üzlet vagy csarnok infrastruktúrája több szakág találkozása. Mi ezeket egy rendszerként tervezzük, kivitelezzük és szükség esetén tovább üzemeltetjük.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#megoldas-kartyak"
                  className="px-6 py-3.5 rounded-xl bg-sironic-red text-white font-semibold text-sm hover:bg-sironic-red/90 transition-all"
                >
                  Megoldások böngészése
                </a>
                <a
                  href="/kapcsolat"
                  className="px-6 py-3.5 rounded-xl border border-line bg-surface text-ink font-semibold text-sm hover:border-silver/60 transition-all"
                >
                  Beszéljük át
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <InteractiveSystemMap />
            </div>
          </div>

          {/* 3 Core Value Sections with Custom Diagrams */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {/* Section 1 */}
            <div className="rounded-2xl border border-line bg-surface/80 p-8 flex flex-col justify-between">
              <div>
                <div className="h-40 mb-6 rounded-xl bg-panel/50 border border-line/60 p-4 flex items-center justify-center">
                  {/* 4 lines converging into 1 project line */}
                  <svg viewBox="0 0 200 100" className="w-full h-full">
                    <line x1="20" y1="20" x2="100" y2="50" stroke="#E8271A" strokeWidth="2" />
                    <line x1="20" y1="40" x2="100" y2="50" stroke="#1A6BE8" strokeWidth="2" />
                    <line x1="20" y1="60" x2="100" y2="50" stroke="#1AE87B" strokeWidth="2" />
                    <line x1="20" y1="80" x2="100" y2="50" stroke="#F5B81C" strokeWidth="2" />
                    <line x1="100" y1="50" x2="180" y2="50" stroke="#F0F0F5" strokeWidth="3" />
                    <circle cx="180" cy="50" r="6" fill="#E8271A" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-3">
                  Egy partnerrel kevesebb egyeztetés
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  A kapcsolódó szakági feladatokat összehangoltan kezeljük, így Önnek kevesebb külön szereplőt kell koordinálnia.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="rounded-2xl border border-line bg-surface/80 p-8 flex flex-col justify-between">
              <div>
                <div className="h-40 mb-6 rounded-xl bg-panel/50 border border-line/60 p-4 flex items-center justify-center">
                  {/* Floorplan -> cabling -> devices -> working location */}
                  <svg viewBox="0 0 200 100" className="w-full h-full">
                    <rect x="15" y="30" width="30" height="40" rx="3" fill="#18181F" stroke="#8888A0" strokeWidth="1" />
                    <path d="M45 50 L70 50" stroke="#E8271A" strokeWidth="1.5" strokeDasharray="2 2" />
                    <rect x="70" y="35" width="30" height="30" rx="3" fill="#18181F" stroke="#E8271A" strokeWidth="1" />
                    <path d="M100 50 L125 50" stroke="#1A6BE8" strokeWidth="1.5" strokeDasharray="2 2" />
                    <circle cx="140" cy="50" r="14" fill="#18181F" stroke="#1AE87B" strokeWidth="1" />
                    <path d="M154 50 L175 50" stroke="#F0F0F5" strokeWidth="2" />
                    <polygon points="172,46 182,50 172,54" fill="#F0F0F5" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-3">
                  A tervtől a használható rendszerig
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  A helyszín, a működés, a későbbi bővíthetőség és az üzemeltethetőség együtt határozza meg a megoldást.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="rounded-2xl border border-line bg-surface/80 p-8 flex flex-col justify-between">
              <div>
                <div className="h-40 mb-6 rounded-xl bg-panel/50 border border-line/60 p-4 flex items-center justify-center">
                  {/* Lifecycle loop */}
                  <svg viewBox="0 0 200 100" className="w-full h-full">
                    <circle cx="100" cy="50" r="32" fill="none" stroke="#2A2A35" strokeWidth="1.5" strokeDasharray="4 4" />
                    <circle cx="100" cy="18" r="5" fill="#E8271A" />
                    <circle cx="132" cy="50" r="5" fill="#1A6BE8" />
                    <circle cx="100" cy="82" r="5" fill="#1AE87B" />
                    <circle cx="68" cy="50" r="5" fill="#F5B81C" />
                    <text x="100" y="54" fontSize="9" fill="#F0F0F5" textAnchor="middle" fontWeight="bold">SIROTECH</text>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-3">
                  A rendszer később is velünk maradhat
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Igény esetén karbantartást, üzemeltetést, támogatást és későbbi bővítést is vállalunk.
                </p>
              </div>
            </div>
          </div>

          {/* Solution Cards List */}
          <div id="megoldas-kartyak" className="pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-10">
              Iparág-specifikus megoldások
            </h2>
            <SolutionPreview />
          </div>
        </div>

        <ExistingSystemCta />
      </main>
      <Footer />
    </>
  );
}
