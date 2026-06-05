import { Hero } from "@/components/sections/Hero";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ClayExplodeSection } from "@/components/sections/ClayExplodeSection";
import { GaneshaGallery } from "@/components/sections/GaneshaGallery";
import { MissionVision } from "@/components/sections/MissionVision";
import { Story } from "@/components/sections/Story";
import { EnvironmentalImpact } from "@/components/sections/EnvironmentalImpact";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Sustainability } from "@/components/sections/Sustainability";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
 
      <div id="scroll-story" className="overflow-hidden">
        <ScrollAnimation />
      </div>
      <ClayExplodeSection />
      <GaneshaGallery />
      <MissionVision />
      <Story />
      <EnvironmentalImpact />
      <ProductShowcase />
      <HowItWorks />
      <Sustainability />
      <ContactCTA />
    </>
  );
}
