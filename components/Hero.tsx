"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { SplitReveal } from "./SplitReveal";
import { Magnetic } from "./Magnetic";

const HeroField = dynamic(() => import("./three/HeroField"), { ssr: false });
const MatrixRain = dynamic(() => import("./MatrixRain").then((m) => m.MatrixRain), {
  ssr: false,
});

const meta = ["Content Security Audit", "Social Media", "Growth System", "Case Study"];
const process = ["Understand", "Identify", "Solve", "Measure", "Optimise"];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="absolute inset-0 z-0">
        <MatrixRain opacity={0.4} fontSize={20} fps={24} />
      </div>
      <div aria-hidden className="grain-grid absolute inset-0 z-0" />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <HeroField reduceMotion={Boolean(reduce)} />
      </div>

      <div className="wrap relative z-10 grid gap-16 py-24 md:py-32 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glow-text flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-signal uppercase"
          >
            <span
              aria-hidden
              className="h-1.5 w-1.5 shrink-0 animate-pulse-glow rounded-full bg-signal"
            />
            Content Security Audit — HackHalt Academy
          </motion.p>

          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.15] font-light tracking-tight text-ink sm:text-6xl md:text-7xl">
            <SplitReveal
              baseDelay={0.3}
              lines={[
                { text: "HackHalt’s Biggest Vulnerability" },
                {
                  text: "Isn’t Technical. It’s Discoverability.",
                  className: "text-signal glow-text",
                  glitch: true,
                },
              ]}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: reduce ? 0.12 : 1.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl border-l-2 border-line pl-5 text-lg leading-relaxed text-ink-soft md:text-xl"
          >
            A structured audit of HackHalt&rsquo;s social ecosystem — scoping the exposure,
            tracing it to a root cause, and shipping a repeatable fix.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: reduce ? 0.2 : 1.75 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {meta.map((m) => (
              <li key={m} className="tag bg-paper-raised text-ink-soft">
                {m}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: reduce ? 0.28 : 1.9 }}
            className="mt-14 w-fit"
          >
            <Magnetic strength={0.5}>
              <a
                href="#context"
                className="focus-ring group flex items-center gap-3 font-mono text-xs tracking-[0.1em] text-ink-soft uppercase transition-colors hover:text-signal"
              >
                Scroll to explore
                <motion.span
                  aria-hidden
                  animate={reduce ? undefined : { y: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  &darr;
                </motion.span>
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.ol
          initial={{ opacity: 0, x: reduce ? 0 : 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="glow-box flex shrink-0 flex-col border border-line bg-paper-raised/80 backdrop-blur-sm"
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
