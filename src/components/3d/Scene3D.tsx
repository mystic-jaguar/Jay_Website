import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import ParticleField from './ParticleField';
import FloatingGeometry from './FloatingGeometry';

// One camera stop per section, in DOM order (see App.tsx)
const SECTION_IDS = ['home', 'projects', 'skills', 'about', 'contact'];
const STOPS: [number, number, number][] = [
  [0, 0, 10],
  [6, 2, -30],
  [-6, -1, -70],
  [5, 1, -110],
  [0, 0, -150],
];
const PALETTE = ['#ff7a45', '#ffd166', '#ff8f45', '#ffb38a'];
const SHAPES = ['icosahedron', 'octahedron', 'torus', 'torusKnot'] as const;

// Scroll position → 0..1 progress along the path, so the camera lands on stop i
// exactly when section i reaches the top third of the viewport.
function scrollProgress() {
  const y = window.scrollY + window.innerHeight * 0.3;
  const tops = SECTION_IDS.map((id) => document.getElementById(id)?.offsetTop ?? 0);
  const last = tops.length - 1;
  if (y >= tops[last]) return 1;
  for (let i = 0; i < last; i++) {
    if (y < tops[i + 1]) {
      const frac = Math.max(0, (y - tops[i]) / (tops[i + 1] - tops[i] || 1));
      return (i + frac) / last;
    }
  }
  return 0;
}

function CameraRig() {
  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(STOPS.map((p) => new THREE.Vector3(...p))),
    [],
  );
  const progress = useRef(0);
  const look = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    progress.current = THREE.MathUtils.damp(progress.current, scrollProgress(), 3, delta);
    const p = progress.current;
    state.camera.position.copy(curve.getPointAt(p));
    // Look slightly ahead along the path, then settle straight down -z at each stop
    curve.getPointAt(Math.min(p + 0.04, 1), look.current);
    look.current.z -= 10;
    state.camera.lookAt(look.current);
  });
  return null;
}

// Three depth layers per stop, biased right so they frame the left-aligned text.
// Near layers slide past fast, far layers slowly — that's the parallax.
function StopLayers({ stop, index }: { stop: [number, number, number]; index: number }) {
  const [x, y, z] = stop;
  const layers: { pos: [number, number, number]; scale: number; wireframe: boolean }[] = [
    { pos: [x + 4.5, y - 1, z - 8], scale: 0.7, wireframe: false },
    { pos: [x - 5, y + 3, z - 20], scale: 1.1, wireframe: true },
    { pos: [x + 9, y + 2, z - 34], scale: 1.8, wireframe: true },
  ];
  return (
    <>
      {layers.map((l, i) => (
        <FloatingGeometry
          key={i}
          position={l.pos}
          geometry={SHAPES[(index + i) % SHAPES.length]}
          color={PALETTE[(index + i) % PALETTE.length]}
          scale={l.scale}
          speed={0.3 + i * 0.15}
          distort={0.15}
          wireframe={l.wireframe}
        />
      ))}
    </>
  );
}

// Glowing sun — hero sunrise and the final "arrival" sunset at Contact
function Sun({ position, radius, color }: { position: [number, number, number]; radius: number; color: string }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[radius, 48, 48]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
      {/* Sunset horizon behind the canvas */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0d0818_0%,#1a1030_55%,#3b2360_85%,#6b2f3a_100%)]" />

      <Canvas
        camera={{ position: STOPS[0], fov: 60, far: 120 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <fog attach="fog" args={['#1a1030', 15, 70]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff7a45" />
        <pointLight position={[-10, -5, -80]} intensity={0.8} color="#ffd166" />

        <CameraRig />
        <ParticleField />

        <Sun position={[14, 5, -35]} radius={3.5} color="#ff7a45" />
        <Sun position={[0, -2, -185]} radius={8} color="#ffd166" />

        {STOPS.map((stop, i) => (
          <StopLayers key={i} stop={stop} index={i} />
        ))}

        <EffectComposer>
          <Bloom intensity={0.9} luminanceThreshold={0.2} luminanceSmoothing={0.9} mipmapBlur />
          <Vignette offset={0.3} darkness={0.7} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
