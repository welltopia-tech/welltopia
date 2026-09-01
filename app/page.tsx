import SiteHeader from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Business from "@/components/site/Business";
import Works from "@/components/site/Works";
import Company from "@/components/site/Company";
import ContactCTA from "@/components/site/ContactCTA";
import SiteFooter from "@/components/site/Footer";

export default function TopPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Business />
        <Works />
        <Company />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
