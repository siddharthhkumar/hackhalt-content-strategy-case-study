"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { FlowchartRow } from "./FlowchartRow";
import { messagingComparison, messagingTarget, newJourney } from "@/lib/data";

function MessageColumn({
  heading,
  tone,
  items,
  activeKey,
  columnKey,
  onHover,
}: {
  heading: string;
  tone: "current" | "target";
  items: readonly { quote: string; consequence: string }[];
  activeKey: string | null;
  columnKey: "current" | "target";
  onHover: (key: string | null) => void;
}) {
  return (
    <div
      className={`border border-line p-7 md:p-8 ${
        tone === "target" ? "bg-signal-soft" : "bg-paper-raised"
      }`}
    >
      <p
        className={`font-mono text-[10px] tracking-[0.14em] uppercase ${
          tone === "target" ? "text-signal-ink" : "text-ink-faint"
        }`}
      >
        {heading}
      </p>
      <ul className="mt-5 space-y-1">
        {items.map((item) => {
          const key = `${columnKey}-${item.quote}`;
          const isActive = activeKey === key;
          return (
            <li key={key}>
              <button
                type="button"
                onFocus={() => onHover(key)}
                onMouseEnter={() => onHover(key)}
                onClick={() => onHover(isActive ? null : key)}
                className="focus-ring block w-full border-t border-line/70 py-4 text-left first:border-t-0"
              >
                <span className="font-display text-lg text-ink italic">&ldquo;{item.quote}&rdquo;</span>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.span
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="block overflow-hidden"
                    >
                      <span
                        className={`mt-2 block font-mono text-xs tracking-[0.02em] ${
                          tone === "target" ? "text-signal-ink" : "text-ink-soft"
                        }`}
                      >
                        {item.consequence}
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function MessagingComparison() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="space-y-16">
      <div>
        <Reveal>
          <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
            The bigger question is where the content enters the audience journey.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <MessageColumn
              heading="Current — Company-first"
              tone="current"
              items={messagingComparison}
              activeKey={active}
              columnKey="current"
              onHover={setActive}
            />
            <MessageColumn
              heading="Target — Audience-first"
              tone="target"
              items={messagingTarget}
              activeKey={active}
              columnKey="target"
              onHover={setActive}
            />
          </div>
        </Reveal>
      </div>

      <div>
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase">
            The new audience journey
          </p>
        </Reveal>
        <div className="mt-6">
          <FlowchartRow
            steps={newJourney.map((step, i) => ({
              label: step,
              emphasis: i === newJourney.length - 1,
            }))}
          />
        </div>
      </div>
    </div>
  );
}
