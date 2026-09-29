"use client";

import dynamic from "next/dynamic";

const MatrixRain = dynamic(() => import("./MatrixRain").then((m) => m.MatrixRain), {
  ssr: false,
});

export function MatrixBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <MatrixRain opacity={0.14} fontSize={18} fps={20} />
    </div>
  );
}
