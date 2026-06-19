import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyNow from "@/components/WhyNow";
import CoCreationGap from "@/components/CoCreationGap";
import ExternalComparison from "@/components/ExternalComparison";
import InternalComparison from "@/components/InternalComparison";
import ConnectionSection from "@/components/ConnectionSection";
import TypeMatrix from "@/components/TypeMatrix";
import Diagnosis from "@/components/Diagnosis";
import DiagnosisResult from "@/components/DiagnosisResult";
import AfterDiagnosis from "@/components/AfterDiagnosis";
import ServiceFlow from "@/components/ServiceFlow";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyNow />
        <CoCreationGap />
        <ExternalComparison />
        <InternalComparison />
        <ConnectionSection />
        <TypeMatrix />
        <Diagnosis />
        <DiagnosisResult />
        <AfterDiagnosis />
        <ServiceFlow />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
