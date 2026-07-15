import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyOneHand } from "@/components/WhyOneHand";
import { About } from "@/components/About";
import { DeepDives } from "@/components/DeepDives";
import { HowWeWork } from "@/components/HowWeWork";
import { DoubleCta } from "@/components/DoubleCta";
import { ServiceAreas } from "@/components/ServiceAreas";
// import { References } from "@/components/References";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyOneHand />
        <About />
        <DeepDives />
        <HowWeWork />
        <DoubleCta />
        <ServiceAreas />
        {/* <References /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
