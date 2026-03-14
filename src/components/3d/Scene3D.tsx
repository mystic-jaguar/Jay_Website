import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing';
import ParticleField from './ParticleField';
import FloatingGeometry from './FloatingGeometry';

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#7c3aed" />
        <pointLight position={[-10, -5, 5]} intensity={0.3} color="#2dd4bf" />

        <ParticleField />

        {/* Floating geometries scattered in space */}
        <FloatingGeometry
          position={[-5, 3, -5]}
          geometry="icosahedron"
          color="#7c3aed"
          scale={0.6}
          speed={0.4}
          wireframe
        />
        <FloatingGeometry
          position={[5, -2, -8]}
          geometry="octahedron"
          color="#2dd4bf"
          scale={0.5}
          speed={0.6}
          wireframe
        />
        <FloatingGeometry
          position={[-3, -4, -6]}
          geometry="torus"
          color="#a78bfa"
          scale={0.4}
          speed={0.5}
          wireframe
        />
        <FloatingGeometry
          position={[4, 4, -10]}
          geometry="torusKnot"
          color="#7c3aed"
          scale={0.35}
          speed={0.3}
          distort={0.15}
          wireframe
        />
        <FloatingGeometry
          position={[7, 0, -7]}
          geometry="icosahedron"
          color="#2dd4bf"
          scale={0.3}
          speed={0.7}
          wireframe
        />

        <EffectComposer>
          <Bloom
            intensity={0.8}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
          <Vignette offset={0.3} darkness={0.7} />
        </EffectComposer>
      </Canvas>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(124,58,237,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(45,212,191,0.05),transparent_60%)]"></div>
    </div>
  );
}
