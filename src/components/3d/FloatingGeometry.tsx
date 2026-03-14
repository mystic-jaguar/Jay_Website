import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingGeometryProps {
  position: [number, number, number];
  geometry: 'icosahedron' | 'octahedron' | 'torus' | 'torusKnot';
  color: string;
  scale?: number;
  speed?: number;
  distort?: number;
  wireframe?: boolean;
}

export default function FloatingGeometry({
  position,
  geometry,
  color,
  scale = 1,
  speed = 1,
  distort = 0.3,
  wireframe = false,
}: FloatingGeometryProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.5;
    meshRef.current.rotation.x = t * 0.3;
    meshRef.current.rotation.z = t * 0.2;
  });

  const getGeometry = () => {
    switch (geometry) {
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 1]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 32]} />;
      case 'torusKnot':
        return <torusKnotGeometry args={[0.8, 0.3, 64, 16]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {getGeometry()}
      <MeshDistortMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.15}
        roughness={0.2}
        metalness={0.8}
        distort={distort}
        speed={2}
        wireframe={wireframe}
        transparent
        opacity={wireframe ? 0.4 : 0.7}
      />
    </mesh>
  );
}
