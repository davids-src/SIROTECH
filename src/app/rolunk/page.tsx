import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { WhyGrid } from "@/components/WhyGrid";
import { References } from "@/components/References";

export const metadata = {
  title: "Rólunk | SIROTECH",
  description: "Ismerje meg a SIROTECH csapatát, történetünket és hogy miért érdemes minket választani az IT, biztonságtechnika és villanyszerelés területén.",
};

export default function RolunkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <About />
        <WhyGrid />
        <Team />
        <References />
      </main>
      <Footer />
    </>
  );
}
