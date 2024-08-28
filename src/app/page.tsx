import { DetailsSection } from "@/components/homePage/details/DetailsSection";
import { Footer } from "@/components/homePage/footer/Footer";
import { Headers } from "@/components/homePage/header/Headers";
import { Hero } from "@/components/homePage/hero/Hero";
import { Partnaires } from "@/components/homePage/partnaires/Partnaires";
import { PricingSection } from "@/components/homePage/pricing/PricingSection";
export default function Home() {
  return (
  <>
    <Headers />
    <Hero />
    <Partnaires />
    <DetailsSection />
    <PricingSection />
    <Footer />
  </>
  );
}
