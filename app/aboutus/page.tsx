import type { Metadata } from "next";
import SiteHeader from "@/components/site/Header";
import SiteFooter from "@/components/site/Footer";
import Works from "@/components/site/Works";
import Company from "@/components/site/Company";
import AboutHero from "@/components/aboutus/Hero";
import Belief from "@/components/aboutus/Belief";
import Purpose from "@/components/aboutus/Purpose";
import Vision from "@/components/aboutus/Vision";
import Mission from "@/components/aboutus/Mission";
import OurRole from "@/components/aboutus/OurRole";
import AboutContactCTA from "@/components/aboutus/ContactCTA";

const title = "私たちについて｜WELLTOPIA";
const description =
  "心地よさを、社会の新しい価値基準にする。WELLTOPIAの信念、存在意義、目指す世界、社会的使命、そして体験価値を実装する役割について。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, siteName: "WELLTOPIA", locale: "ja_JP", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function AboutUsPage() {
  return (
    <>
      <SiteHeader solid />
      <main className="pt-[120px]">
        <AboutHero />
        <Belief />
        <Purpose />
        <Vision />
        <Mission />
        <OurRole />
        <Works />
        <Company />
        <AboutContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
