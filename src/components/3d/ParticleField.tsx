import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const count = 600;

const { positions, colors } = (() => {
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  
  const violet = new THREE.Color('#7c3aed');
  const teal = new THREE.Color('#2dd4bf');
  const white = new THREE.Color('#e2e8f0');

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    pos[i3] = (Math.random() - 0.5) * 30;
    pos[i3 + 1] = (Math.random() - 0.5) * 30;
    pos[i3 + 2] = (Math.random() - 0.5) * 30;

    const pick = Math.random();
    const c = pick < 0.4 ? violet : pick < 0.7 ? teal : white;
    col[i3] = c.r;
    col[i3 + 1] = c.g;
    col[i3 + 2] = c.b;
  }
  return { positions: pos, colors: col };
})();

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
