"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SplitReveal({
  lines,
  className,
  baseDelay = 0,
  wordStagger = 0.07,
  lineGap = 0.25,
  wordDuration = 1,
}: {
  lines: { text: string; className?: string; glitch?: boolean }[];
  className?: string;
  baseDelay?: number;
  wordStagger?: number;
  lineGap?: number;
  wordDuration?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span className={className}>
        {lines.map((line, li) => (
          <span
            key={li}
            className={`block ${line.className ?? ""} ${line.glitch ? "glitch" : ""}`}
            data-text={line.glitch ? line.text : undefined}
          >
            {line.text}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={className}>
      {lines.map((line, li) => {
        const words = line.text.split(" ");
        return (
          <span
            key={li}
            className={`block ${line.className ?? ""} ${line.glitch ? "glitch" : ""}`}
            data-text={line.glitch ? line.text : undefined}
          >
            {words.map((word, wi) => (
              <span key={wi} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: "115%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: wordDuration,
                    delay: baseDelay + li * lineGap + wi * wordStagger,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                  {wi !== words.length - 1 ? " " : ""}
                </motion.span>
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
}
