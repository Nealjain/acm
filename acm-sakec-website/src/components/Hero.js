import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const ACM_Logo = () => {
  const textRef = useRef();

  useFrame(({ clock }) => {
    textRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.2;
  });

  return (
    <group>
      <Text
        ref={textRef}
        fontSize={1.5}
        color="#FFFFFF"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfAZ9hjg.woff"
      >
        ACM
      </Text>
    </group>
  );
};

const Hero = () => {
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        <ACM_Logo />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Hero;
