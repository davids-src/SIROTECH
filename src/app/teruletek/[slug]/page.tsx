import { notFound } from "next/navigation";
import { LOCATIONS_DATA } from "@/lib/locationsData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import { ServiceAreas } from "@/components/ServiceAreas";

export function generateStaticParams() {
  return Object.keys(LOCATIONS_DATA).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const data = LOCATIONS_DATA[params.slug as keyof typeof LOCATIONS_DATA];
  if (!data) return {};

  return {
    title: `${data.h1} | SIROTECH`,
    description: data.intro,
  };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const data = LOCATIONS_DATA[params.slug as keyof typeof LOCATIONS_DATA];
  
  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-site px-6">
          
          <nav className="flex items-center gap-2 text-xs font-medium text-muted mb-8 overflow-x-auto pb-2">
            <Link href="/" className="hover:text-ink whitespace-nowrap">Főoldal</Link>
            <ChevronRight size={14} />
            <span className="text-ink whitespace-nowrap">{data.city}</span>
          </nav>

          <div className="max-w-3xl mb-24">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface border border-line px-3 py-1 text-sm text-silver mb-6">
              <MapPin size={14} />
              <span>Szolgáltatási területünk</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight mb-6">
              {data.h1}
            </h1>
            <p className="text-lg text-muted mb-10 leading-relaxed">
              {data.intro}
            </p>
          </div>

        </div>

        {/* Use existing ServiceAreas component for visual context */}
        <ServiceAreas />

        <section id="contact" className="py-24 bg-surface border-t border-line/50">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-ink mb-4">Projekt indítása: {data.city}</h2>
              <p className="text-muted">Kérjen helyszíni felmérést vagy ajánlatot helyi projektjéhez.</p>
            </div>
            <ContactForm />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
