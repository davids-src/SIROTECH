import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Licenses } from "@/components/Licenses";
import { WhyOneHand } from "@/components/WhyOneHand";
import { DeepDives } from "@/components/DeepDives";
import { About } from "@/components/About";
import { WhyGrid } from "@/components/WhyGrid";
import { HowWeWork } from "@/components/HowWeWork";
import { FreeAssessmentCta } from "@/components/FreeAssessmentCta";
import { Team } from "@/components/Team";
import { References } from "@/components/References";
import { DoubleCta } from "@/components/DoubleCta";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. Brands are inside Hero (id="brands") */}
        {/* 4. Miért egy kézből */}
        <WhyOneHand />
        {/* 5. DeepDives — divíziónként (id="szolgaltatasok") */}
        <DeepDives />
        {/* 6. A SIROTECH-ről + Miért a SIROTECH */}
        <About />
        <WhyGrid />
        {/* 7. Hogyan dolgozunk */}
        <HowWeWork />
        {/* 8. Ingyenes Állapotfelmérés CTA */}
        <FreeAssessmentCta />
        {/* 9. Kik vagyunk */}
        <Team />
        {/* 10. Referenciák — logófal */}
        <References />
        {/* 11. B2B / B2C kettős CTA */}
        <DoubleCta />
        {/* 12. Lefedett területek */}
        <ServiceAreas />
        {/* 13. Engedélyek bizalmi blokk */}
        <Licenses />
        {/* 14. Kapcsolat */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
