"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const modelPath = `${basePath}/Munieco.glb`;

function Model({ reducedMotion }: { reducedMotion: boolean }) {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);

  useFrame((_, delta) => {
    if (!ref.current || reducedMotion) return;
    ref.current.rotation.y += delta * 0.35;
  });

  return (
    <group ref={ref} position={[0.45, -0.75, 0]} scale={1.15}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(modelPath);

export function ScrollModel() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[radial-gradient(circle_at_50%_35%,#ffffff_0,transparent_32%),linear-gradient(135deg,#f5f5f5_20%,#a3a3a3_100%)]">
      <Canvas camera={{ position: [1.25, 0.5, 3.1], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, powerPreference: "high-performance" }} shadows>
        <ambientLight intensity={1.4} />
        <directionalLight castShadow position={[3, 4, 3]} intensity={2.2} />
        <Model reducedMotion={reducedMotion} />
        <mesh position={[0, -1.05, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <circleGeometry args={[1.4, 48]} />
          <meshStandardMaterial color="#111" transparent opacity={0.12} />
        </mesh>
      </Canvas>
    </div>
  );
}
