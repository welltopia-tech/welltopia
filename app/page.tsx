import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Diagnosis from "@/components/Diagnosis";
import ScoreSection from "@/components/ScoreSection";
import RouteSection from "@/components/RouteSection";
import ServiceFlow from "@/components/ServiceFlow";
import DiagnosisResult from "@/components/DiagnosisResult";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Diagnosis />
      <ScoreSection />
      <RouteSection />
      <ServiceFlow />
      <DiagnosisResult />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
