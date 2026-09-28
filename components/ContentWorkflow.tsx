"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { workflowSteps } from "@/lib/data";

export function ContentWorkflow() {
  const [active, setActive] = useState<number>(0);
  const current = workflowSteps[active];

  return (
    <div>
      <Reveal>
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-4 lg:grid-cols-8">
          {workflowSteps.map((item, i) => {
            const isActive = active === i;
            return (
              <button
                key={item.step}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`focus-ring flex flex-col items-start gap-2 px-4 py-5 text-left transition-colors ${
                  isActive ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-paper-raised"
                }`}
              >
                <span
                  className={`font-mono text-[10px] tracking-[0.1em] ${
                    isActive ? "text-paper/55" : "text-ink-faint"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg">{item.step}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-2 flex items-center gap-3 border border-dashed border-signal-line bg-signal-soft px-5 py-3 font-mono text-[11px] tracking-[0.08em] text-signal-ink uppercase">
          <span aria-hidden>&#8635;</span>
          Learn feeds back into Find — the loop never stops
        </div>
      </Reveal>

      <div className="mt-8 border border-line bg-paper-raised p-7 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.step}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <p className="font-mono text-[10px] tracking-[0.14em] text-signal uppercase">
              Step {String(active + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-display text-2xl text-ink">{current.step}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {current.detail.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm text-ink-soft"
                >
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
