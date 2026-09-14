import * as THREE from 'three';

const count = 1200;

// Spread along the whole camera path (z: +20 → -180) so dust drifts past as you travel
const { positions, colors } = (() => {
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);

  const orange = new THREE.Color('#ff7a45');
  const gold = new THREE.Color('#ffd166');
  const cream = new THREE.Color('#fff4e6');

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    pos[i3] = (Math.random() - 0.5) * 40;
    pos[i3 + 1] = (Math.random() - 0.5) * 30;
    pos[i3 + 2] = 20 - Math.random() * 200;

    const pick = Math.random();
    const c = pick < 0.4 ? orange : pick < 0.7 ? gold : cream;
    col[i3] = c.r;
    col[i3 + 1] = c.g;
    col[i3 + 2] = c.b;
  }
  return { positions: pos, colors: col };
})();

export default function ParticleField() {
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
