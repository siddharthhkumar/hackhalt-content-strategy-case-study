import { ScrollProgress } from "@/components/ScrollProgress";
import { StickyNav } from "@/components/StickyNav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
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
        <div className="border-b border-line bg-ink py-4 font-mono text-xs tracking-[0.14em] text-paper/70 uppercase">
          <Marquee
            items={[
              "Discovery Gap",
              "Content Ecosystem",
              "Audience-First Messaging",
              "Repeatable Workflow",
              "Human-Led Automation",
              "Measurement Framework",
              "The Growth Loop",
            ]}
          />
        </div>
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
