"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COLS = 7;
const ROWS = 6;
const COUNT = COLS * ROWS;
const SIGNAL_RATIO = 0.22;

function Field({ reduceMotion }: { reduceMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);
  const startedAt = useRef<number | null>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduceMotion]);

  const { scatter, target, isSignal, lineGeometry } = useMemo(() => {
    const scatter: THREE.Vector3[] = [];
    const target: THREE.Vector3[] = [];
    const isSignal: boolean[] = [];
    const spacingX = 3.6 / (COLS - 1);
    const spacingY = 2.6 / (ROWS - 1);

    const idx = (c: number, r: number) => c * ROWS + r;

    for (let c = 0; c < COLS; c++) {
      for (let r = 0; r < ROWS; r++) {
        const tx = -1.8 + c * spacingX;
        const ty = -1.3 + r * spacingY;
        const tz = Math.sin(c * 0.9 + r * 0.6) * 0.3;
        target.push(new THREE.Vector3(tx, ty, tz));
        scatter.push(
          new THREE.Vector3(
            (Math.random() - 0.5) * 7.5,
            (Math.random() - 0.5) * 5.5,
            (Math.random() - 0.5) * 5.5
          )
        );
        isSignal.push(Math.random() < SIGNAL_RATIO);
      }
    }

    const segments: number[] = [];
    for (let c = 0; c < COLS; c++) {
      for (let r = 0; r < ROWS; r++) {
        const a = target[idx(c, r)];
        if (c < COLS - 1) {
          const b = target[idx(c + 1, r)];
          segments.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
        if (r < ROWS - 1) {
          const b = target[idx(c, r + 1)];
          segments.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
      }
    }
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(new Float32Array(segments), 3)
    );

    return { scatter, target, isSignal, lineGeometry };
  }, []);

  const lineMaterial = useMemo(
    () => new THREE.LineBasicMaterial({ color: "#00f0ff", transparent: true, opacity: 0 }),
    []
  );

  useFrame((state, delta) => {
    if (startedAt.current === null) startedAt.current = state.clock.elapsedTime;
    const elapsed = state.clock.elapsedTime - startedAt.current;
    const t = reduceMotion ? 1 : Math.min(1, elapsed / 2.4);
    const eased = 1 - Math.pow(1 - t, 3);

    for (let i = 0; i < COUNT; i++) {
      const m = meshRefs.current[i];
      if (!m) continue;
      m.position.lerpVectors(scatter[i], target[i], eased);
    }

    lineMaterial.opacity = THREE.MathUtils.lerp(
      lineMaterial.opacity,
      eased > 0.7 ? 0.3 : 0,
      0.05
    );

    if (group.current && !reduceMotion) {
      group.current.rotation.y += delta * 0.035;
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        pointer.current.y * 0.1,
        0.03
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        -pointer.current.x * 0.06,
        0.03
      );
    }
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeometry} material={lineMaterial} />
      {target.map((_, i) => (
        <mesh key={i} ref={(el) => { meshRefs.current[i] = el; }}>
          <sphereGeometry args={[isSignal[i] ? 0.06 : 0.034, 12, 12]} />
          <meshBasicMaterial
            color={isSignal[i] ? "#ff2ea6" : "#00f0ff"}
            transparent
            opacity={isSignal[i] ? 1 : 0.55}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroField({ reduceMotion = false }: { reduceMotion?: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      style={{ background: "transparent" }}
    >
      <Field reduceMotion={reduceMotion} />
    </Canvas>
  );
}
