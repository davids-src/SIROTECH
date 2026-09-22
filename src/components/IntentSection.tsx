import { Building2, GitBranchPlus, Wrench, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";

const INTENT_CARDS = [
  { title: "Új kivitelezés", text: "Tervezéstől az átadásig.", icon: Building2, href: "/megoldasok" },
  { title: "Bővítés", text: "A meglévő rendszer továbbfejlesztése.", icon: GitBranchPlus, href: "/meglevo-rendszerek/bovites" },
  { title: "Javítás", text: "Hibakeresés és helyreállítás.", icon: Wrench, href: "/meglevo-rendszerek/javitas" },
  { title: "Üzemeltetés", text: "Folyamatos támogatás és karbantartás.", icon: Activity, href: "/meglevo-rendszerek/uzemeltetes" },
];

export const IntentSection = () => {
  return (
    <section className="py-24 border-t border-line/50 relative">
      <div className="mx-auto max-w-site px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Hol tart most?</h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {INTENT_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group relative flex flex-col rounded-xl border border-line bg-surface p-6 shadow-sm transition-all duration-300 hover:border-silver hover:bg-panel"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-bg text-silver ring-1 ring-line group-hover:ring-silver/50 transition-all">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm text-muted flex-grow">{card.text}</p>
                <div className="mt-6 flex items-center text-sm font-semibold text-silver group-hover:text-ink transition-colors">
                  Részletek <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
