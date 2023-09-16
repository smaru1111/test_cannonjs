import * as THREE from 'three';
import { Canvas, extend } from '@react-three/fiber';
import { Physics, PlaneProps, SphereProps, usePlane, useSphere } from '@react-three/cannon';
import { FogExp2 } from 'three'; // 霧効果のために必要
import { useEffect, useRef, useState } from 'react';
import {
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

function App() {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <OrbitControls>
        <PerspectiveCamera
          makeDefault
          position={[0, 100, 10]}
        ></PerspectiveCamera>
      </OrbitControls>
      <Scene />
      <Physics>
        <Sphere />
        <Plane />
        <ambientLight intensity={0.4}></ambientLight>
        {/* オレンジ電球を追加 */}
        <pointLight position={[0, 100, 0]} color={new THREE.Color(0xffcc00)} />
      </Physics>
    </Canvas>
  );
}

// React Three FiberにFogExp2を拡張
extend({ FogExp2 });

function Scene() {

  // 霧効果の設定
  const fogColor = new THREE.Color(0xf0f0f0);
  const fogDensity = 0.01; // 霧の濃度（調整可能）

  return (
    <>
      <fogExp2 attach="fog" args={[fogColor, fogDensity]} />
      <pointLight position={[5, 5, 5]} />
    </>
  );
}

function Plane(props: PlaneProps) {

  const handleKeyPress = (event: KeyboardEvent) => {
    // 方向キーのキーコード
    const leftArrowKey = "ArrowLeft"
    const rightArrowKey = "ArrowRight";
    const upArrowKey = "ArrowUp";
    const downArrowKey = "ArrowDown";
    
    

    if (event.code === leftArrowKey) {
      // 左矢印キーが押された場合、平面を左に傾ける
      console.log(event.code);
      setRotation(new THREE.Euler(0, -Math.PI / 4, 0)); // 例: 左に45度傾ける
    } else if (event.code === rightArrowKey) {
      // 右矢印キーが押された場合、平面を右に傾ける
      setRotation(new THREE.Euler(0, Math.PI / 4, 0)); // 例: 右に45度傾ける
    } else if (event.code === upArrowKey) {
      // 上矢印キーが押された場合、平面を上に傾ける
      setRotation(new THREE.Euler(-Math.PI / 4, 0, 0)); // 例: 上に45度傾ける
    } else if (event.code === downArrowKey) {
      // 下矢印キーが押された場合、平面を下に傾ける
      setRotation(new THREE.Euler(Math.PI / 4, 0, 0)); // 例: 下に45度傾ける
    }
  };

  // キーボードイベントリスナーを追加
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const [ref] = usePlane(() => ({
    // 厚みのある平面を作成 (y軸方向に3の厚み)
    rotation: [-Math.PI / 2, 0, 0], // 45度傾ける
      ...props 
    }),
    useRef<THREE.Mesh>(null))
    // 平面の角度を状態で管理
    const [rotation, setRotation] = useState(new THREE.Euler(0, 0, 0));
  return (
    <mesh ref={ref} rotation={rotation}>
      <planeGeometry args={[100, 100]} />
      <meshPhongMaterial color={new THREE.Color(0x00ff00)} />
    </mesh>
  )
}

function Sphere(props: SphereProps) {
  const [ref] = useSphere(() => ({ 
    mass: 100, 
    position: [0, 100, 0], 
    ...props }), 
    useRef<THREE.Mesh>(null))
  // Return the mesh with a box geometry, and the reference
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1,30,30]} />
      <meshPhongMaterial color={new THREE.Color(0xff0000)} />
    </mesh>
  )
}


export default App;
