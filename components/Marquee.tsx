"use client";

import { useReducedMotion } from "framer-motion";

export function Marquee({
  items,
  className,
  duration = 34,
}: {
  items: string[];
  className?: string;
  duration?: number;
}) {
  const reduce = useReducedMotion();

  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item, i) => (
        <span key={i} className="flex shrink-0 items-center gap-10 whitespace-nowrap">
          <span>{item}</span>
          <span aria-hidden className="text-signal">
            &#9670;
          </span>
        </span>
      ))}
    </div>
  );

  if (reduce) {
    return (
      <div className={`flex flex-wrap gap-6 ${className ?? ""}`}>
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className="flex w-max animate-marquee" style={{ animationDuration: `${duration}s` }}>
        {row}
        {row}
      </div>
    </div>
  );
}
