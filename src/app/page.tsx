import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Demos from "@/components/Demos";
import FreeResources from "@/components/FreeResources";
import Services from "@/components/Services";
import Proof from "@/components/Proof";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Demos />
      <FreeResources />
      <Services />
      <Proof />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
