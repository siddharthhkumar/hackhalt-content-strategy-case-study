"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { growthLoop } from "@/lib/data";

const GrowthRing = dynamic(() => import("./three/GrowthRing"), { ssr: false });

export function GrowthLoop() {
  const [active, setActive] = useState(0);
  const current = growthLoop[active];
  const count = growthLoop.length;
  const reduce = useReducedMotion();

  return (
    <SectionShell
      id="growth-loop"
      number="07"
      eyebrow="Growth Loop"
      title="The Continuous Monitoring Loop."
      lead="Eight stages, closing on themselves. Optimise feeds straight back into Understand — because a review, like a monitoring system, is never actually finished. It's continuous."
      tag="Proposed framework"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-6">
        <div className="hidden lg:block">
          <div className="glow-box hud-corners aspect-square w-full max-w-[440px] border border-line bg-paper-raised">
            <GrowthRing active={active} onSelect={setActive} reduceMotion={Boolean(reduce)} />
          </div>
          <p className="mt-3 text-center font-mono text-[10px] tracking-[0.1em] text-ink-faint uppercase">
            Drag to rotate · click a stage
          </p>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:hidden">
          <div
            aria-hidden
            className="absolute inset-[10%] rounded-full border border-dashed border-line"
          />
          {growthLoop.map((stage, i) => {
            const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
            const radius = 44;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            const isActive = active === i;
            return (
              <button
                key={stage.name}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="focus-ring absolute -translate-x-1/2 -translate-y-1/2"
              >
                <span
                  className={`flex h-16 w-16 flex-col items-center justify-center rounded-full border text-center transition-colors md:h-20 md:w-20 ${
                    isActive
                      ? "border-accent2 bg-accent2 text-void glow-box"
                      : "border-signal-line bg-paper text-ink hover:border-signal"
                  }`}
                >
                  <span
                    className={`font-mono text-[9px] ${isActive ? "text-void/70" : "text-ink-faint"}`}
                  >
                    {stage.number}
                  </span>
                  <span className="font-display text-[11px] leading-tight font-semibold md:text-xs">
                    {stage.name}
                  </span>
                </span>
              </button>
            );
          })}

          <div className="absolute inset-0 flex items-center justify-center">
            <span aria-hidden className="font-mono text-[10px] tracking-[0.1em] text-ink-faint uppercase">
              &#8635; loop
            </span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="border border-line bg-paper-raised p-8 md:p-10"
          >
            <p className="font-mono text-[10px] tracking-[0.14em] text-signal uppercase">
              Stage {current.number}
            </p>
            <h3 className="mt-2 font-display text-3xl font-bold tracking-wide text-ink">
              {current.name}
            </h3>
            <p className="mt-3 font-mono text-sm text-ink-faint italic">{current.question}</p>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">{current.detail}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}
