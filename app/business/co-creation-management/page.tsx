import type { Metadata } from "next";
import SiteHeader from "@/components/site/Header";
import SiteFooter from "@/components/site/Footer";
import PageAnchorNav from "@/components/business/PageAnchorNav";
import Hero from "@/components/business/ccm/Hero";
import Why from "@/components/business/ccm/Why";
import Definition from "@/components/business/ccm/Definition";
import Issues from "@/components/business/ccm/Issues";
import CcmSystem from "@/components/business/ccm/CcmSystem";
import Process from "@/components/business/ccm/Process";
import Value from "@/components/business/ccm/Value";
import Projects from "@/components/business/ccm/Projects";
import Relation from "@/components/business/ccm/Relation";
import GetStarted from "@/components/business/ccm/GetStarted";

const title = "共創マネジメント事業｜WELLTOPIA";
const description =
  "WELLTOPIAの共創マネジメントは、顧客・従業員・企業・社会の願いと資産をつなぎ、新しい体験価値を構想・実装・測定・改善するマネジメントシステムです。";
const ogTitle = "最高の共創を、科学する。｜WELLTOPIA";
const ogDescription =
  "人と企業の可能性をつなぎ、一社では生み出せない体験価値を社会に実装する、WELLTOPIAの共創マネジメント。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title: ogTitle, description: ogDescription, siteName: "WELLTOPIA", locale: "ja_JP", type: "website" },
  twitter: { card: "summary_large_image", title: ogTitle, description: ogDescription },
};

const navItems = [
  { id: "why", label: "WHY" },
  { id: "definition", label: "WHAT IS CCM" },
  { id: "issues", label: "ISSUES" },
  { id: "ccm-system", label: "CCM SYSTEM" },
  { id: "process", label: "PROCESS" },
  { id: "value", label: "VALUE" },
  { id: "projects", label: "PROJECTS" },
  { id: "relation", label: "RELATION" },
  { id: "get-started", label: "GET STARTED" },
];

export default function CoCreationManagementPage() {
  return (
    <>
      <SiteHeader solid />
      <main>
        <Hero />
        <PageAnchorNav items={navItems} />
        <Why />
        <Definition />
        <Issues />
        <CcmSystem />
        <Process />
        <Value />
        <Projects />
        <Relation />
        <GetStarted />
      </main>
      <SiteFooter />
    </>
  );
}
