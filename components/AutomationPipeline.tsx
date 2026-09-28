"use client";

import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import { automationPipeline, automationEngine, automationHuman } from "@/lib/data";

const humanSteps = new Set(["Human Strategy", "Human Approval", "Human Analysis"]);

export function AutomationPipeline() {
  return (
    <SectionShell
      id="automation"
      number="05"
      eyebrow="Automation"
      title="Automate the repetitive work. Keep the judgement human."
      lead="An automation layer removes operational drag from research, drafting and reporting — while every strategic decision still passes through a person."
      tag="Proposed system"
    >
      <Reveal>
        <div className="flex flex-wrap items-center gap-x-1 gap-y-3">
          {automationPipeline.map((step, i, arr) => {
            const isHuman = humanSteps.has(step);
            return (
              <span key={step} className="flex items-center gap-1">
                <span
                  className={`rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-[0.04em] uppercase ${
                    isHuman
                      ? "border-signal-line bg-signal-soft text-signal-ink"
                      : "border-line text-ink-soft"
                  }`}
                >
                  {step}
                </span>
                {i !== arr.length - 1 ? (
                  <span aria-hidden className="text-ink-faint">
                    &rarr;
                  </span>
                ) : null}
              </span>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        <Reveal delay={0.05}>
          <div className="h-full border border-line bg-paper-raised p-7 md:p-8">
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
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full border border-signal-line bg-signal-soft p-7 md:p-8">
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
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <p className="mt-14 max-w-2xl border-l-2 border-signal py-1 pl-6 font-display text-2xl leading-snug text-ink md:text-3xl">
          A good automation system should reduce operational friction — not remove strategic
          judgement.
        </p>
      </Reveal>
    </SectionShell>
  );
}
