"use client";

import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";
import { FlowchartRow } from "./FlowchartRow";
import { automationPipeline, automationEngine, automationHuman } from "@/lib/data";

const humanSteps = new Set(["Human Strategy", "Human Approval", "Human Analysis"]);

export function AutomationPipeline() {
  return (
    <SectionShell
      id="automation"
      number="05"
      eyebrow="Automation"
      title="Automate the Noise. Escalate the Judgement Calls."
      lead="Run it the way a SOC runs triage: automation absorbs the repetitive load — research, drafting, reporting. What it never absorbs is judgement. Strategy, accuracy, tone and the final call to publish stay escalated to a person."
      tag="Proposed system"
    >
      <FlowchartRow
        steps={automationPipeline.map((step) => ({
          label: step,
          emphasis: humanSteps.has(step),
        }))}
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        <Reveal delay={0.05}>
          <SpotlightCard className="h-full border border-line bg-paper-raised p-7 md:p-8">
            <p className="font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase">
              System engine — automated
            </p>
            <ul className="mt-5 space-y-3">
              {automationEngine.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink-soft">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                  {item}
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.1}>
          <SpotlightCard className="h-full border border-signal-line bg-signal-soft p-7 md:p-8">
            <p className="font-mono text-[10px] tracking-[0.14em] text-signal-ink uppercase">
              Human control — strategic
            </p>
            <ul className="mt-5 space-y-3">
              {automationHuman.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-signal-ink">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <p className="mt-14 max-w-2xl border-l-2 border-signal py-1 pl-6 font-display text-2xl leading-snug font-bold tracking-wide text-ink md:text-3xl">
          A good automation system should reduce operational friction — not remove strategic
          judgement.
        </p>
      </Reveal>
    </SectionShell>
  );
}
