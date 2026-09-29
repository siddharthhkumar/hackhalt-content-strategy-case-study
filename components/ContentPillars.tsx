"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";
import { contentPillars } from "@/lib/data";

export function ContentPillars() {
  const [open, setOpen] = useState<number>(0);

  return (
    <SectionShell
      id="strategy"
      number="03"
      eyebrow="Content Strategy"
      title="Five Protocols for Closing the Gap."
      lead="Each pillar is a standing protocol for a different question the audience is silently asking — not a sequence to run in order, but a set of responses the ecosystem should always be ready to serve."
      tag="Proposed framework"
    >
      <div className="grid overflow-hidden border border-line md:grid-cols-5">
        {contentPillars.map((pillar, i) => {
          const isOpen = open === i;
          return (
            <SpotlightCard
              key={pillar.name}
              className={`hud-corners border-line ${
                i !== contentPillars.length - 1 ? "border-b md:border-r md:border-b-0" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-expanded={isOpen}
                className={`focus-ring relative flex h-full w-full flex-col px-5 py-6 text-left transition-colors md:min-h-[19rem] ${
                  isOpen ? "bg-signal-soft" : "bg-paper hover:bg-paper-raised"
                }`}
              >
                <span
                  className={`font-mono text-[11px] tracking-[0.1em] ${
                    isOpen ? "text-signal-ink" : "text-ink-faint"
                  }`}
                >
                  {pillar.number}
                </span>
                <span className="mt-3 font-display text-2xl text-ink">{pillar.name}</span>
                <span className="mt-2 text-sm text-ink-soft italic">{pillar.prompt}</span>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 space-y-3 border-t border-line/60 pt-4">
                        <p>
                          <span className="font-mono text-[10px] tracking-[0.1em] text-ink-faint uppercase">
                            Example
                          </span>
                          <span className="mt-1 block text-sm text-ink">{pillar.example}</span>
                        </p>
                        <p>
                          <span className="font-mono text-[10px] tracking-[0.1em] text-ink-faint uppercase">
                            Strategic intent
                          </span>
                          <span className="mt-1 block text-sm text-ink-soft">{pillar.intent}</span>
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </SpotlightCard>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-3">
          {contentPillars.map((pillar, i, arr) => (
            <span key={pillar.name} className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-[0.08em] text-ink-soft uppercase">
                {pillar.name}
              </span>
              {i !== arr.length - 1 ? (
                <span aria-hidden className="text-ink-faint">
                  &rarr;
                </span>
              ) : null}
            </span>
          ))}
        </div>
        <p className="mt-4 max-w-xl text-sm text-ink-faint">
          These pillars collectively create the content ecosystem — individual posts don&rsquo;t
          need to march through all five in order.
        </p>
      </Reveal>
    </SectionShell>
  );
}
