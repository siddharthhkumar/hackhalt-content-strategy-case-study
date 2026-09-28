import { ScrollProgress } from "@/components/ScrollProgress";
import { StickyNav } from "@/components/StickyNav";
import { Hero } from "@/components/Hero";
import { ContextSection } from "@/components/ContextSection";
import { DiagnosisSection } from "@/components/DiagnosisSection";
import { ContentPillars } from "@/components/ContentPillars";
import { WorkflowSection } from "@/components/WorkflowSection";
import { AutomationPipeline } from "@/components/AutomationPipeline";
import { MeasurementFunnel } from "@/components/MeasurementFunnel";
import { GrowthLoop } from "@/components/GrowthLoop";
import { FinalShift } from "@/components/FinalShift";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <StickyNav />
      <main>
        <Hero />
        <ContextSection />
        <DiagnosisSection />
        <ContentPillars />
        <WorkflowSection />
        <AutomationPipeline />
        <MeasurementFunnel />
        <GrowthLoop />
        <FinalShift />
      </main>
      <Footer />
    </>
  );
}
