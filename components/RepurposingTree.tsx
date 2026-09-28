"use client";

import { Reveal } from "./Reveal";
import { repurposingTree } from "@/lib/data";

export function RepurposingTree() {
  return (
    <div>
      <Reveal>
        <p className="font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase">
          Content repurposing
        </p>
        <p className="mt-2 max-w-xl font-display text-2xl leading-snug text-ink md:text-3xl">
          One strong idea should not die as one post.
        </p>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mx-auto mt-10 max-w-lg border border-line bg-ink px-6 py-5 text-center">
          <p className="font-mono text-[10px] tracking-[0.12em] text-paper/55 uppercase">
            Core idea
          </p>
          <p className="mt-2 font-display text-lg text-paper">{repurposingTree.core}</p>
        </div>
      </Reveal>

      <div aria-hidden className="mx-auto h-8 w-px bg-line" />

      <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {repurposingTree.branches.map((branch, i) => (
          <Reveal key={branch.channel} delay={0.1 + i * 0.05} className="bg-paper">
            <div className="h-full px-6 py-6">
              <span className="font-mono text-[10px] tracking-[0.1em] text-signal uppercase">
                {branch.channel}
              </span>
              <p className="mt-2 text-sm text-ink-soft">{branch.format}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
