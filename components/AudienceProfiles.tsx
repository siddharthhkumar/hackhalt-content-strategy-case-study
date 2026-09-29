"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { audiencePersons } from "@/lib/data";

export function AudienceProfiles() {
  const [active, setActive] = useState<"a" | "b">("b");
  const person = audiencePersons[active];

  return (
    <Reveal>
      <div className="border border-line">
        <div className="grid grid-cols-2 border-b border-line">
          {(["a", "b"] as const).map((key) => {
            const p = audiencePersons[key];
            const isActive = active === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                aria-pressed={isActive}
                className={`focus-ring px-6 py-5 text-left transition-colors ${
                  isActive ? "bg-ink text-paper" : "bg-paper-raised text-ink hover:bg-paper"
                } ${key === "a" ? "border-r border-line" : ""}`}
              >
                <span
                  className={`font-mono text-[10px] tracking-[0.12em] uppercase ${
                    isActive ? "text-paper/60" : "text-ink-faint"
                  }`}
                >
                  {p.tag}
                </span>
                <span className="mt-1 block font-display text-2xl">{p.label}</span>
              </button>
            );
          })}
        </div>

        <div className="p-8 md:p-10">
          <p className="max-w-xl text-lg text-ink-soft">{person.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {person.path.map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span
                  className={`tag uppercase tracking-[0.08em] ${
                    active === "b"
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
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
