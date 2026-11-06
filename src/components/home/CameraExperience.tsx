"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const modelPath = `${basePath}/Munieco.glb`;

type View = "frontal" | "lado" | "tres-cuartos";
const rotations: Record<View, number> = {
  frontal: Math.PI / 2,
  lado: 0,
  "tres-cuartos": Math.PI / 4,
};

function Model({ view }: { view: View }) {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);
  const model = useMemo(() => scene.clone(true), [scene]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y = THREE.MathUtils.damp(
      ref.current.rotation.y,
      rotations[view],
      5,
      delta,
    );
  });

  return (
    <group ref={ref} position={[0, -0.25, 0]} scale={1.15}>
      <primitive object={model} />
    </group>
  );
}

useGLTF.preload(modelPath);

export function CameraExperience() {
  const [view, setView] = useState<View>("frontal");

  return (
    <div className="border-2 border-black bg-zinc-200">
      <div className="relative h-[24rem] sm:h-[30rem]">
        <Canvas camera={{ position: [0, 0.2, 4], fov: 38 }} dpr={[1, 1.5]}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[3, 3, 4]} intensity={2.5} />
          <Model view={view} />
        </Canvas>
        <p className="pointer-events-none absolute bottom-4 left-4 border border-black bg-white px-2 py-1 text-[10px] font-bold uppercase">
          Muñeco YOMI Studio
        </p>
      </div>
      <div className="flex flex-wrap gap-2 border-t-2 border-black p-3">
        {(["frontal", "lado", "tres-cuartos"] as View[]).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setView(item)}
            className={`border-2 border-black px-3 py-2 text-xs font-bold uppercase ${
              view === item ? "bg-black text-white" : "bg-white hover:bg-zinc-300"
            }`}
          >
            Ver {item}
          </button>
        ))}
      </div>
    </div>
  );
}
