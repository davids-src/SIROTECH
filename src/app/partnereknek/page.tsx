import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PartnerEcosystemDiagram } from "@/components/diagrams/PartnerEcosystemDiagram";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Partnereknek — Generálkivitelezői & Tervezői Szakági Partner | SIROTECH",
  description: "Generálkivitelezők, tervezők, ingatlanfejlesztők és facility csapatok megbízható informatikai, biztonságtechnikai és villamos alvállalkozó partnerként.",
  alternates: {
    canonical: "https://sirotech.hu/partnereknek",
  },
};

export default function PartnereknekPage() {
  const whenToInvolve = [
    "Új iroda, telephely vagy csarnok kialakításakor.",
    "Ha több szakág koordinációját szeretné csökkenteni.",
    "Ha külön IT, biztonságtechnikai vagy villamos alvállalkozó kell.",
    "Ha meglévő rendszer bővítéséhez vagy korszerűsítéséhez kell kapacitás.",
  ];

  const processSteps = [
    { step: "01", title: "Műszaki egyeztetés", desc: "Tervek és követelmények közös áttekintése." },
    { step: "02", title: "Feladat- és felelősségi határok", desc: "Tiszta műszaki vállalási határok rögzítése." },
    { step: "03", title: "Kivitelezés / koordináció", desc: "Összehangolt helyszíni megvalósítás." },
    { step: "04", title: "Dokumentált átadás", desc: "Mérési jegyzőkönyvek és átadási mappa átadása." },
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
                PARTNEREKNEK
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink leading-tight mb-6">
                Kapcsolódjunk be ott, ahol szakági kapacitásra van szükség.
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Generálkivitelezők, tervezők, ingatlanosok és más szakági partnerek mellett önálló részfeladatot vagy több technológiai területet is át tudunk venni.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3.5 rounded-xl bg-sironic-red text-white font-semibold text-sm hover:bg-sironic-red/90 transition-all"
              >
                Beszéljük át az együttműködést
              </a>
            </div>
            <div className="lg:col-span-5">
              <PartnerEcosystemDiagram />
            </div>
          </div>

          {/* Section 1: Mikor érdemes bevonni minket? */}
          <section className="mb-20">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-8">
              Mikor érdemes bevonni minket?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whenToInvolve.map((text, i) => (
                <div key={i} className="rounded-xl border border-line bg-surface/80 p-6 flex items-start gap-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-sironic-red mt-1.5 shrink-0" />
                  <p className="text-base text-ink font-semibold">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Hogyan kapcsolódunk a projekthez? */}
          <section className="mb-20">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-8">
              Hogyan kapcsolódunk a projekthez?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((p) => (
                <div key={p.step} className="rounded-xl border border-line bg-surface p-6">
                  <span className="text-xs font-mono font-bold text-sironic-red block mb-2">{p.step}</span>
                  <h3 className="font-display text-base font-bold text-ink mb-2">{p.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Nem kell mindent átadnia */}
          <section className="mb-24 rounded-2xl border border-line bg-panel/40 p-8 sm:p-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">
                Nem kell mindent átadnia
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Lehetünk egyetlen szakág (pl. csak biztonságtechnika vagy csak villanyszerelés) kivitelezője, vagy több kapcsolódó terület koordinált integrátor partnere.
              </p>
            </div>
          </section>

          {/* Section 4: Form STRICTLY AFTER content */}
          <section id="contact" className="pt-12 border-t border-line/50">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-ink mb-4">
                Beszéljük át az együttműködést
              </h2>
              <p className="text-muted">
                Adja meg elérhetőségét, és partnerekért felelős műszaki vezetőnk felveszi Önnel a kapcsolatot.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <ContactForm defaultRequestType="partner" />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
