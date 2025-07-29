import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

export default function Hero3D() {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Canvas>
        <Stars />
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
      </Canvas>
    </div>
  );
}
