import { Physics, PlaneProps, SphereProps, usePlane, useSphere } from "@react-three/cannon";
import {
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Color, Mesh } from "three";


export default function Home() {
  return (
    <main>
      <Canvas style={{ width: "100vw", height: "100vh"}}>
        <OrbitControls>
          <PerspectiveCamera
            makeDefault
            position={[0, 100, 10]}
          ></PerspectiveCamera>
        </OrbitControls>
        <Physics >
          <Plane />
          <Sphere />
          <ambientLight intensity={1}></ambientLight>
        </Physics>
      </Canvas>
    </main>
  );
}


function Plane(props: PlaneProps) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // 45度傾ける
      ...props 
    }),
    useRef<Mesh>(null))
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
    </mesh>
  )
}

function Sphere(props: SphereProps) {
  const [ref] = useSphere(() => ({ 
    mass: 100, 
    position: [0, 100, 0], 
    ...props }), 
    useRef<Mesh>(null))
  // Return the mesh with a box geometry, and the reference
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1,30,30]} />
      <meshPhongMaterial color={new Color(0xff0000)} />
    </mesh>
  )
}