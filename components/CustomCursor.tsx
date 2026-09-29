"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const reticleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, [reduce]);

  useEffect(() => {
    if (!enabled) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let groupX = mouseX;
    let groupY = mouseY;
    let hovering = false;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      hovering = Boolean(
        (e.target as HTMLElement)?.closest?.("a, button, [data-cursor-hover]")
      );
    };

    const loop = () => {
      groupX += (mouseX - groupX) * 0.2;
      groupY += (mouseY - groupY) * 0.2;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${
          hovering ? 0 : 1
        })`;
      }
      if (groupRef.current) {
        groupRef.current.style.transform = `translate3d(${groupX}px, ${groupY}px, 0) translate(-50%, -50%)`;
      }
      if (reticleRef.current) {
        reticleRef.current.dataset.hover = hovering ? "true" : "false";
      }
      rafId = requestAnimationFrame(loop);
    };

    document.body.classList.add("cursor-none-fine");
    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove("cursor-none-fine");
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        style={{ boxShadow: "0 0 8px 2px rgba(0,240,255,0.8)" }}
        className="pointer-events-none fixed top-0 left-0 z-[999] h-1 w-1 rounded-full bg-signal"
      />
      <div
        ref={groupRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[999] h-9 w-9"
      >
        <div ref={reticleRef} className="cursor-reticle relative h-full w-full" data-hover="false">
          <span className="absolute top-0 left-0 h-2.5 w-2.5 border-t-2 border-l-2 border-signal" />
          <span className="absolute top-0 right-0 h-2.5 w-2.5 border-t-2 border-r-2 border-signal" />
          <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b-2 border-l-2 border-signal" />
          <span className="absolute right-0 bottom-0 h-2.5 w-2.5 border-r-2 border-b-2 border-signal" />
        </div>
      </div>
    </>
  );
}
