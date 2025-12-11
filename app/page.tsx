import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { PageFade } from "@/components/PageFade";

export default function HomePage() {
  return (
    <PageFade>
      <Hero />
      <ServicesSection />
    </PageFade>
  );
}
