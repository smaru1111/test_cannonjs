import { Box, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  const defaultMaterial = <meshPhongMaterial></meshPhongMaterial>;

  return (
    <main>
      <Canvas style={{ width:"100vw", height:"100vh" }}>
        <OrbitControls></OrbitControls>
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 10]}
        ></PerspectiveCamera>
        <pointLight position={[10, 10, 10]}></pointLight>
        <ambientLight intensity={0.5}></ambientLight>
        <Box position={[-1.2, 0, 0]}>{defaultMaterial}</Box>
        <Box position={[1.2, 0, 0]}>{defaultMaterial}</Box>
      </Canvas>
    </main>
  );
}