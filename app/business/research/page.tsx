import type { Metadata } from "next";
import SiteHeader from "@/components/site/Header";
import SiteFooter from "@/components/site/Footer";
import PageAnchorNav from "@/components/business/PageAnchorNav";
import Hero from "@/components/business/research/Hero";
import Why from "@/components/business/research/Why";
import Definition from "@/components/business/research/Definition";
import Method from "@/components/business/research/Method";
import Issues from "@/components/business/research/Issues";
import Offering from "@/components/business/research/Offering";
import Process from "@/components/business/research/Process";
import Value from "@/components/business/research/Value";
import Projects from "@/components/business/research/Projects";
import Relation from "@/components/business/research/Relation";
import GetStarted from "@/components/business/research/GetStarted";

const title = "COCOCHI Lab.｜心地いい体験を研究する｜WELLTOPIA";
const description =
  "COCOCHI Lab.は、体験・評価・共創を研究するWELLTOPIAの研究事業です。独自研究に加え、企業・自治体・研究機関との受託研究・共同研究を通じ、評価基準構築から体験研究、共創による実証まで行います。";
const ogTitle = "「心地いい体験」を、研究する。｜WELLTOPIA";
const ogDescription =
  "体験・評価・共創を研究し、新しい知・評価体系・方法論を生み出すWELLTOPIAの研究事業、COCOCHI Lab.。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title: ogTitle, description: ogDescription, siteName: "WELLTOPIA", locale: "ja_JP", type: "website" },
  twitter: { card: "summary_large_image", title: ogTitle, description: ogDescription },
};

const navItems = [
  { id: "why", label: "WHY" },
  { id: "definition", label: "WHAT IS COCOCHI Lab." },
  { id: "method", label: "METHOD" },
  { id: "issues", label: "ISSUES" },
  { id: "offering", label: "OFFERING" },
  { id: "process", label: "PROCESS" },
  { id: "value", label: "VALUE" },
  { id: "projects", label: "OUR RESEARCH" },
  { id: "relation", label: "RELATION" },
  { id: "get-started", label: "GET STARTED" },
];

export default function ResearchPage() {
  return (
    <>
      <SiteHeader solid />
      <main>
        <Hero />
        <PageAnchorNav items={navItems} />
        <Why />
        <Definition />
        <Method />
        <Issues />
        <Offering />
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
