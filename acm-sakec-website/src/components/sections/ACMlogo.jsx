import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const ACMlogo = (props) => {
  const { nodes, materials } = useGLTF('/models/acm-logo.gltf');
  const mesh = useRef();

  useFrame((state, delta) => {
    // Mouse-based rotation logic will go here
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      geometry={nodes.Scene.children[0].geometry}
      material={materials.Material}
    />
  );
};

useGLTF.preload('/models/acm-logo.gltf');

export default ACMlogo;
