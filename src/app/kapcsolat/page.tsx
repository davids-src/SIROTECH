import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Kapcsolat | SIROTECH",
  description: "Lépjen kapcsolatba velünk! Kérjen árajánlatot vagy helyszíni felmérést IT, biztonságtechnikai, szoftverfejlesztési és villanyszerelési projektekhez.",
};

export default function KapcsolatPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-24">
        <div className="mx-auto max-w-site px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight mb-6">
              Beszéljük át a feladatot!
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              Kérjük, töltse ki az alábbi űrlapot a projekt részleteivel, és szakértő kollégánk hamarosan felveszi Önnel a kapcsolatot.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
