import Link from "next/link";
import { Building, Briefcase, Factory, Store, Cpu, Package, Stethoscope, HardHat, Truck } from "lucide-react";

const SOLUTIONS = [
  { title: "Új telephely", icon: Building, color: "#1AE87B", href: "/megoldasok/uj-telephely" },
  { title: "Új iroda", icon: Briefcase, color: "#E8271A", href: "/megoldasok/uj-iroda" },
  { title: "Új csarnok", icon: Factory, color: "#F5B81C", href: "/megoldasok/uj-csarnok" },
  { title: "Üzletnyitás", icon: Store, color: "#1A6BE8", href: "/megoldasok/uzletnyitas" },
  { title: "Gyártótelephely", icon: Cpu, color: "#F5B81C", href: "/megoldasok/gyartotelephely" },
  { title: "Raktár / logisztika", icon: Package, color: "#1A6BE8", href: "/megoldasok/raktar-logisztika" },
  { title: "Rendelő", icon: Stethoscope, color: "#E8271A", href: "/megoldasok/rendelo" },
  { title: "Építkezés", icon: HardHat, color: "#F5B81C", href: "/megoldasok/epitkezes" },
  { title: "Cégköltözés", icon: Truck, color: "#C0C0D0", href: "/megoldasok/cegkoltozes" },
];

export const SolutionPreview = () => {
  return (
    <section className="py-24 border-t border-line/50 bg-surface/30">
      <div className="mx-auto max-w-site px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Milyen projekt előtt áll?</h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">A projekt típusa alapján összefogjuk a szükséges szakágakat.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {SOLUTIONS.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.title}
                href={s.href}
                className="group relative flex flex-col items-center justify-center rounded-xl bg-panel p-8 text-center transition-all hover:bg-surface overflow-hidden"
              >
                <Icon size={32} strokeWidth={1} className="text-muted mb-4 group-hover:text-ink transition-colors" />
                <h3 className="text-sm font-semibold text-ink sm:text-base">{s.title}</h3>
                
                {/* Hover Line */}
                <div 
                  className="absolute bottom-0 left-0 h-1 w-full translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
                  style={{ backgroundColor: s.color }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
