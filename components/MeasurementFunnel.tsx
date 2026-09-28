"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import { EvidenceTag } from "./EvidenceTag";
import { measurementLevels } from "@/lib/data";

export function MeasurementFunnel() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = measurementLevels[active];

  return (
    <SectionShell
      id="measurement"
      number="06"
      eyebrow="Measurement"
      title="Don't optimise for attention alone."
      lead="Reach without qualified interest is a vanity signal. Each layer below should progressively narrow toward outcomes that matter to the business."
      tag="Measurement framework"
    >
      <div className="mx-auto flex max-w-xl flex-col items-center gap-2">
        {measurementLevels.map((level, i) => {
          const isActive = active === i;
          return (
            <button
              key={level.name}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              style={{ width: `${100 - i * 16}%` }}
              className="focus-ring group"
            >
              <motion.div
                initial={{ scaleX: reduce ? 1 : 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "center" }}
                className={`flex items-center justify-between border px-5 py-4 transition-colors ${
                  isActive ? "border-signal-line bg-signal-soft" : "border-line bg-paper-raised"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-ink-faint">{level.number}</span>
                  <span className="font-display text-lg text-ink">{level.name}</span>
                </span>
                <span
                  className={`font-mono text-[11px] italic ${
                    isActive ? "text-signal-ink" : "text-ink-faint"
                  }`}
                >
                  {level.question}
                </span>
              </motion.div>
            </button>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-line pt-8 text-center">
          <EvidenceTag kind="measurement">Metrics — {current.name}</EvidenceTag>
          <div className="flex flex-wrap justify-center gap-2">
            {current.metrics.map((m) => (
              <span
                key={m}
                className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm text-ink-soft"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
