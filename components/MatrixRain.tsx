"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const CHARS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function MatrixRain({
  className,
  opacity = 0.16,
  fontSize = 16,
  fps = 22,
}: {
  className?: string;
  opacity?: number;
  fontSize?: number;
  fps?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let drops: number[] = [];

    const setup = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
      const columns = Math.max(1, Math.floor(width / fontSize));
      drops = Array.from({ length: columns }, () => Math.random() * -80);
    };
    setup();

    let rafId: number;
    let lastFrame = 0;
    const frameDelay = 1000 / fps;

    const draw = (time: number) => {
      rafId = requestAnimationFrame(draw);
      if (time - lastFrame < frameDelay) return;
      lastFrame = time;

      ctx.fillStyle = "rgba(3, 2, 8, 0.14)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "Share Tech Mono", monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const y = drops[i] * fontSize;

        ctx.fillStyle = "#00ff66";
        ctx.fillText(char, i * fontSize, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 1;
      }
    };

    rafId = requestAnimationFrame(draw);

    const onResize = () => setup();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [reduce, fontSize, fps]);

  if (reduce) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ opacity }}
      className={className ?? "h-full w-full"}
    />
  );
}
