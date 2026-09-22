import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Licenses } from "@/components/Licenses";
import { WhyOneHand } from "@/components/WhyOneHand";
import { FreeAssessmentCta } from "@/components/FreeAssessmentCta";
import { Footer } from "@/components/Footer";
import { IntentSection } from "@/components/IntentSection";
import { SystemLifecycleOrbit } from "@/components/SystemLifecycleOrbit";
import { DivisionsSection } from "@/components/DivisionsSection";
import { SolutionPreview } from "@/components/SolutionPreview";
import { ExistingSystemCta } from "@/components/ExistingSystemCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntentSection />
        <SystemLifecycleOrbit />
        <DivisionsSection />
        <SolutionPreview />
        <ExistingSystemCta />
        <WhyOneHand />
        <FreeAssessmentCta />
        <Licenses />
      </main>
      <Footer />
    </>
  );
}
