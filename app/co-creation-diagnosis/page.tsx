import type { Metadata } from "next";
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

const title = "WELLTOPIA 共創力診断｜企業の共創力を7領域から可視化";
const description =
  "共創力、測ってる？ WELLTOPIAの共創力診断は、外部企業との連携力と従業員との共創力を7領域から可視化し、企業の強み・課題・次の一手を明らかにします。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, siteName: "WELLTOPIA", locale: "ja_JP", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

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
