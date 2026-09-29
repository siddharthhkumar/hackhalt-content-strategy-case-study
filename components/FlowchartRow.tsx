"use client";

import { Reveal } from "./Reveal";

export function FlowchartRow({
  steps,
}: {
  steps: { label: string; emphasis?: boolean }[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-y-4">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center">
          <Reveal delay={i * 0.04} y={8}>
            <div
              className={`hud-corners flex min-h-[3.1rem] items-center justify-center border px-4 py-2.5 text-center font-mono text-[11px] tracking-[0.05em] uppercase ${
                step.emphasis
                  ? "glow-box border-accent2-line bg-accent2-soft text-accent2"
                  : "border-signal-line bg-paper-raised text-ink-soft"
              }`}
            >
              {step.label}
            </div>
          </Reveal>
          {i !== steps.length - 1 ? (
            <span aria-hidden className="glow-text mx-2 shrink-0 font-mono text-lg text-signal">
              &#8594;
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
