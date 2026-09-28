"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { growthLoop } from "@/lib/data";

const RADIUS = 2.15;
const COUNT = growthLoop.length;

function Ring({
  active,
  onSelect,
  reduceMotion,
  groupRef,
  isDragging,
}: {
  active: number;
  onSelect: (i: number) => void;
  reduceMotion: boolean;
  groupRef: React.RefObject<THREE.Group | null>;
  isDragging: React.RefObject<boolean>;
}) {
  const positions = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => {
        const angle = (i / COUNT) * Math.PI * 2;
        return new THREE.Vector3(Math.sin(angle) * RADIUS, 0, Math.cos(angle) * RADIUS);
      }),
    []
  );

  const lineGeometry = useMemo(() => {
    const pts = [...positions, positions[0]];
    const geo = new THREE.BufferGeometry();
    const flat = new Float32Array(pts.length * 3);
    pts.forEach((p, i) => {
      flat[i * 3] = p.x;
      flat[i * 3 + 1] = p.y;
      flat[i * 3 + 2] = p.z;
    });
    geo.setAttribute("position", new THREE.Float32BufferAttribute(flat, 3));
    return geo;
  }, [positions]);

  useFrame((_, delta) => {
    if (groupRef.current && !isDragging.current && !reduceMotion) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.32, 0, 0]}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#15171a" transparent opacity={0.16} />
      </lineSegments>

      {positions.map((pos, i) => {
        const isActive = active === i;
        const stage = growthLoop[i];
        return (
          <group key={stage.name} position={pos}>
            <mesh onClick={() => onSelect(i)}>
              <sphereGeometry args={[isActive ? 0.15 : 0.09, 20, 20]} />
              <meshBasicMaterial color={isActive ? "#0e6b52" : "#15171a"} />
            </mesh>
            <Html center distanceFactor={7.5} style={{ pointerEvents: "auto" }}>
              <button
                type="button"
                onClick={() => onSelect(i)}
                aria-pressed={isActive}
                className={`focus-ring flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-[0.08em] whitespace-nowrap uppercase backdrop-blur-sm transition-colors ${
                  isActive
                    ? "border-signal bg-signal text-paper"
                    : "border-line bg-paper/90 text-ink hover:border-ink"
                }`}
              >
                <span className={isActive ? "text-paper/60" : "text-ink-faint"}>
                  {stage.number}
                </span>
                {stage.name}
              </button>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export default function GrowthRing({
  active,
  onSelect,
  reduceMotion = false,
}: {
  active: number;
  onSelect: (i: number) => void;
  reduceMotion?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const isDragging = useRef(false);
  const lastX = useRef(0);

  return (
    <div
      className="h-full w-full cursor-grab touch-none active:cursor-grabbing"
      onPointerDown={(e) => {
        isDragging.current = true;
        lastX.current = e.clientX;
      }}
      onPointerMove={(e) => {
        if (!isDragging.current || !groupRef.current) return;
        const dx = e.clientX - lastX.current;
        groupRef.current.rotation.y += dx * 0.008;
        lastX.current = e.clientX;
      }}
      onPointerUp={() => {
        isDragging.current = false;
      }}
      onPointerLeave={() => {
        isDragging.current = false;
      }}
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 1.5, 6.1], fov: 40 }}
        style={{ background: "transparent" }}
      >
        <Ring
          active={active}
          onSelect={onSelect}
          reduceMotion={reduceMotion}
          groupRef={groupRef}
          isDragging={isDragging}
        />
      </Canvas>
    </div>
  );
}
