import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { PainSolution } from "@/components/sections/PainSolution";
import { USPGrid } from "@/components/sections/USPGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { BranchenTeaser } from "@/components/sections/BranchenTeaser";
import { MapPreview } from "@/components/sections/MapPreview";
import { Referenzen } from "@/components/sections/Referenzen";
import { FAQ } from "@/components/sections/FAQ";
import { ExpressForm } from "@/components/sections/ExpressForm";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PainSolution />
      <USPGrid />
      <HowItWorks />
      <StatsCounter />
      <BranchenTeaser />
      <MapPreview />
      <Referenzen />
      <FAQ />
      <ExpressForm />
    </>
  );
}
