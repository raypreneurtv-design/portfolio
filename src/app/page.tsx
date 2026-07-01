import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import {
  Hero,
  Features,
  HowItWorks,
  SocialProof,
  FinalCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
