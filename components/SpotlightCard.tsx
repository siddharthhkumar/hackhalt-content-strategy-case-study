"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function SpotlightCard({
  children,
  className,
  tilt = true,
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
}) {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 220, damping: 22 });
  const sry = useSpring(ry, { stiffness: 220, damping: 22 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(280px circle at ${px * 100}% ${
        py * 100
      }%, rgba(0,240,255,0.22), transparent 70%)`;
      glowRef.current.style.opacity = "1";
    }

    if (tilt && !reduce) {
      ry.set((px - 0.5) * 8);
      rx.set(-(py - 0.5) * 8);
    }
  };

  const handleLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      className={`relative ${className ?? ""}`}
    >
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300"
      />
      <div className="relative z-[1] h-full">{children}</div>
    </motion.div>
  );
}
