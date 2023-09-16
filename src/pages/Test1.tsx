import { BoxProps, Physics, PlaneProps, useBox, usePlane } from "@react-three/cannon";
import {
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Color, Mesh } from "three";
import ChainScene from "../components/Chain";


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
        <Physics>
          <Plane />
          <Cube />
        </Physics>
      </Canvas>
      <ChainScene/>
    </main>
  );
}


function Plane(props: PlaneProps) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
      ...props 
    }),
    useRef<Mesh>(null))
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
    </mesh>
  )
}

// Create a new component called 'Cube'
function Cube(props: BoxProps) {
  const [ref] = useBox(() => ({ 
    mass: 100, 
    position: [0, 100, 0], 
    ...props }), 
    useRef<Mesh>(null))
  // Return the mesh with a box geometry, and the reference
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      {/* 赤色にする */}
      <meshPhongMaterial color={new Color(0xff0000)} />
    </mesh>
  )
}