import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleSystem = () => {
  const mesh = useRef();

  useFrame((state, delta) => {
    // Particle animation logic will go here
  });

  const particles = new Float32Array(5000 * 3);
  for (let i = 0; i < particles.length; i += 3) {
    particles[i] = (Math.random() - 0.5) * 10;
    particles[i + 1] = (Math.random() - 0.5) * 10;
    particles[i + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles}
          count={particles.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="white" />
    </points>
  );
};

export default ParticleSystem;
