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
          color="#ff5b2e"
          emissive="#d9ff53"
          emissiveIntensity={0.22}
          roughness={0.18}
          metalness={0.7}
          distort={0.32}
          speed={1.6}
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
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[4, 4, 4]} intensity={1.2} />
          <pointLight position={[-3, -2, 2]} color="#ff5b2e" intensity={1.1} />
          <DistortedSphere />
        </Suspense>
      </Canvas>
    </div>
  );
}
