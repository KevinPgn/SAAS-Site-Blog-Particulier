import { DetailsSection } from "@/components/homePage/details/DetailsSection";
import { Headers } from "@/components/homePage/header/Headers";
import { Hero } from "@/components/homePage/hero/Hero";
import { Partnaires } from "@/components/homePage/partnaires/Partnaires";
export default function Home() {
  return (
  <>
    <Headers />
    <Hero />
    <Partnaires />
    <DetailsSection />
  </>
  );
}
