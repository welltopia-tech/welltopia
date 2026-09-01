import type { Metadata } from "next";
import SiteHeader from "@/components/site/Header";
import SiteFooter from "@/components/site/Footer";
import PageAnchorNav from "@/components/business/PageAnchorNav";
import Hero from "@/components/business/academy/Hero";
import Why from "@/components/business/academy/Why";
import Definition from "@/components/business/academy/Definition";
import Issues from "@/components/business/academy/Issues";
import Offering from "@/components/business/academy/Offering";
import Process from "@/components/business/academy/Process";
import Value from "@/components/business/academy/Value";
import Projects from "@/components/business/academy/Projects";
import Relation from "@/components/business/academy/Relation";
import GetStarted from "@/components/business/academy/GetStarted";

const title = "FRONPEER｜共創マネージャー育成事業｜WELLTOPIA";
const description =
  "FRONPEERは、異なる人・知識・技術・資産・想いをつなぎ、新しい価値を共創によって実装まで導く「共創マネージャー」を育成するWELLTOPIAの人材育成事業です。法人向け育成と、2027年1月開校予定の共創マネージャー育成スクールを通じて、共創を担える人材を社会に増やします。";
const ogTitle = "共創を、仕事にできる人を育てる。｜WELLTOPIA";
const ogDescription =
  "異なる可能性をつなぎ、新しい価値を実装まで導く専門職「共創マネージャー」を育成する、WELLTOPIAの人材育成事業FRONPEER。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title: ogTitle, description: ogDescription, siteName: "WELLTOPIA", locale: "ja_JP", type: "website" },
  twitter: { card: "summary_large_image", title: ogTitle, description: ogDescription },
};

const navItems = [
  { id: "why", label: "WHY" },
  { id: "definition", label: "DEFINITION" },
  { id: "issues", label: "ISSUES" },
  { id: "offering", label: "PROGRAM" },
  { id: "process", label: "PROCESS" },
  { id: "value", label: "VALUE" },
  { id: "projects", label: "PRACTICE" },
  { id: "relation", label: "RELATION" },
  { id: "get-started", label: "GET STARTED" },
];

export default function CoCreationManagerBusinessPage() {
  return (
    <>
      <SiteHeader solid />
      <main>
        <Hero />
        <PageAnchorNav items={navItems} />
        <Why />
        <Definition />
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
