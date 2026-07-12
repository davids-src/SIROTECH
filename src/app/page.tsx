import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { DeepDives } from "@/components/DeepDives";
import { WhyGrid } from "@/components/WhyGrid";
import { PricingCta } from "@/components/PricingCta";
import { References } from "@/components/References";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <DeepDives />
        <WhyGrid />
        <PricingCta />
        <References />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
