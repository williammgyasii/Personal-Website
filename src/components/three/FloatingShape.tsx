import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";
import { useIsMobile, usePrefersReducedMotion } from "../../hooks/useMediaQuery";

function DistortedSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={1.35}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#07c42c"
          emissive="#07c42c"
          emissiveIntensity={0.35}
          roughness={0.2}
          metalness={0.8}
          distort={0.35}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export function FloatingShape({
  className = "",
}: {
  className?: string;
}) {
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  if (isMobile || reducedMotion) {
    return null;
  }

  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} gl={{ alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[4, 4, 4]} intensity={1.2} />
          <pointLight position={[-3, -2, 2]} color="#07c42c" intensity={2} />
          <DistortedSphere />
        </Suspense>
      </Canvas>
    </div>
  );
}
