"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";

const HeroField = dynamic(() => import("./three/HeroField"), { ssr: false });

const meta = ["Content Strategy", "Social Media", "Growth System", "Case Study"];
const process = ["Understand", "Identify", "Solve", "Measure", "Optimise"];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="grain-grid absolute inset-0 z-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
      >
        <HeroField reduceMotion={Boolean(reduce)} />
      </div>

      <div className="wrap relative z-10 grid gap-16 py-24 md:py-32 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-xs tracking-[0.2em] text-signal uppercase"
          >
            HackHalt Academy — Strategic Review
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: reduce ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            From Posting Content
            <br />
            to <span className="text-signal">Building a Content System.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
          >
            A strategic review of HackHalt&rsquo;s social media ecosystem — identifying the
            discovery gap and designing a repeatable content, workflow and measurement system
            around it.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {meta.map((m) => (
              <li
                key={m}
                className="rounded-full border border-line bg-paper-raised px-3.5 py-1.5 font-mono text-[11px] tracking-[0.1em] text-ink-soft uppercase"
              >
                {m}
              </li>
            ))}
          </motion.ul>

          <motion.a
            href="#context"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="focus-ring mt-14 flex w-fit items-center gap-3 font-mono text-xs tracking-[0.1em] text-ink-soft uppercase transition-colors hover:text-signal"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Scroll to explore
          </motion.a>
        </div>

        <motion.ol
          initial={{ opacity: 0, x: reduce ? 0 : 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex shrink-0 flex-col border border-line bg-paper-raised"
        >
          {process.map((p, i) => (
            <li
              key={p}
              className={`flex items-center justify-between gap-8 px-5 py-3.5 font-mono text-xs tracking-[0.12em] uppercase ${
                i !== process.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <span className="text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
              <span className={i === process.length - 1 ? "text-signal" : "text-ink"}>{p}</span>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
