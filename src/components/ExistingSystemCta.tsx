import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ExistingSystemCta = () => {
  return (
    <section className="py-24 border-t border-line/50 relative overflow-hidden bg-surface">
      <div 
        className="absolute right-0 top-0 h-[400px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(closest-side, #1A6BE8, transparent)" }}
      />
      
      <div className="mx-auto max-w-3xl px-6 text-center relative z-10">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Már működik a rendszer?</h2>
        <p className="mt-6 text-lg text-muted">
          Nem kell nulláról indulnia. Meglévő informatikai, biztonságtechnikai és villamos rendszereket is javítunk, bővítünk és korszerűsítünk.
        </p>
        
        <div className="mt-10 flex justify-center">
          <Link
            href="/meglevo-rendszerek"
            className="group flex items-center gap-2 rounded bg-ink px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-silver"
          >
            Meglévő rendszerrel keresek segítséget
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
