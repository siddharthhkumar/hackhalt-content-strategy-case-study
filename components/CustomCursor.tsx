"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, [reduce]);

  useEffect(() => {
    if (!enabled) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
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
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${
          hovering ? 0 : 1
        })`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${
          hovering ? 1.9 : 1
        })`;
        ringRef.current.style.opacity = hovering ? "0.55" : "1";
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
        className="pointer-events-none fixed top-0 left-0 z-[999] h-1.5 w-1.5 rounded-full bg-signal"
      />
      <div
        ref={ringRef}
        aria-hidden
        style={{ boxShadow: "0 0 16px rgba(0,240,255,0.35)" }}
        className="pointer-events-none fixed top-0 left-0 z-[999] h-8 w-8 rounded-full border border-signal transition-opacity duration-200 ease-out"
      />
    </>
  );
}
