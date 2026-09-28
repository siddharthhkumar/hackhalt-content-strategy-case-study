"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { discoveryFunnel } from "@/lib/data";

export function DiscoveryGap() {
  const [active, setActive] = useState<number>(1);
  const reduce = useReducedMotion();

  return (
    <Reveal>
      <div className="border border-line bg-paper-raised p-8 md:p-10">
        <p className="font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase">
          The discovery gap
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-2">
          {discoveryFunnel.map((tier, i) => {
            const isActive = active === i;
            return (
              <button
                key={tier.label}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                style={{ width: `${28 + tier.weight * 72}%` }}
                className="focus-ring group relative"
              >
                <motion.div
                  initial={{ scaleX: reduce ? 1 : 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "center" }}
                  className={`flex items-center justify-center border py-4 text-center transition-colors ${
                    tier.gap
                      ? "border-dashed border-signal-line bg-signal-soft"
                      : "border-line bg-paper"
                  } ${isActive ? "ring-1 ring-ink" : ""}`}
                >
                  <span
                    className={`font-mono text-[11px] tracking-[0.08em] uppercase ${
                      tier.gap ? "text-signal-ink" : "text-ink"
                    }`}
                  >
                    {tier.label}
                  </span>
                </motion.div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 border-t border-line pt-6 text-center">
          <p className="mx-auto max-w-md text-sm text-ink-soft">
            {discoveryFunnel[active].gap
              ? "Discovery layer — too thin today. This is the strategic opportunity: widen this middle band before asking anyone to act."
              : "Endpoint of the funnel — where current content is concentrated."}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
