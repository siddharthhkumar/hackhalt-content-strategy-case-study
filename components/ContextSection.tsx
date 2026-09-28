"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import { foundations } from "@/lib/data";

export function ContextSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <SectionShell
      id="context"
      number="01"
      eyebrow="Context"
      title="First, understand what we are doing."
      lead="HackHalt already has strong content ingredients. The question isn't whether the raw material exists — it's whether it's being turned into a system that attracts, teaches and earns trust."
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <ul className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {foundations.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.title} className="bg-paper">
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  onMouseEnter={() => setOpen(i)}
                  aria-expanded={isOpen}
                  className={`focus-ring block w-full px-6 py-6 text-left transition-colors ${
                    isOpen ? "bg-paper-raised" : "hover:bg-paper-raised"
                  }`}
                >
                  <span className="font-mono text-[11px] tracking-[0.12em] text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-xl text-ink">{item.title}</h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-3 border-t border-line pt-4 text-sm">
                          <p>
                            <span className="font-mono text-[10px] tracking-[0.1em] text-ink-faint uppercase">
                              Audience need
                            </span>
                            <span className="mt-1 block text-ink-soft italic">{item.need}</span>
                          </p>
                          <p>
                            <span className="font-mono text-[10px] tracking-[0.1em] text-ink-faint uppercase">
                              Content angle
                            </span>
                            <span className="mt-1 block text-ink-soft">{item.angle}</span>
                          </p>
                          <p>
                            <span className="font-mono text-[10px] tracking-[0.1em] text-ink-faint uppercase">
                              Strategic role
                            </span>
                            <span className="mt-1 block text-ink-soft">{item.role}</span>
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </li>
            );
          })}
        </ul>

        <Reveal delay={0.15}>
          <div className="border border-line bg-paper-raised p-8">
            <p className="font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase">
              Current content ecosystem
            </p>
            <ol className="mt-6 space-y-0">
              {["HackHalt", "Cybersecurity / Careers / Programs", "Student Audience", "Action"].map(
                (step, i, arr) => (
                  <li key={step}>
                    <div className="flex items-center gap-3 py-3">
                      <span className="font-mono text-xs text-ink-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg text-ink">{step}</span>
                    </div>
                    {i !== arr.length - 1 ? (
                      <div className="ml-[1.15rem] h-5 w-px bg-line" />
                    ) : null}
                  </li>
                )
              )}
            </ol>
            <p className="mt-6 border-t border-line pt-5 text-sm text-ink-soft">
              A direct broadcast model — it assumes the audience already knows HackHalt and is
              ready to act. It skips discovery entirely.
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
