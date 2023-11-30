import {Canvas, useFrame} from "@react-three/fiber";
import './App.scss';
import {Environment, MeshPortalMaterial, OrbitControls, Stats, StatsGl, useTexture} from "@react-three/drei";
import {Me} from "./Me.jsx";
import * as THREE from "three";
import {Vector3} from "three";
import {useRef} from "react";
import {Emoji} from "./Emoji.jsx";
import {Burger} from "./Burger.jsx";
import {Lollipop} from "./Lollipop.jsx";

function App() {
  const DEV = false;

  return (
    <Canvas shadows
            camera={[0, 0, .005]}
            gl={{
              preserveDrawingBuffer: true,
            }}>
      {DEV && <>
        <gridHelper/>
        <gridHelper rotation-x={Math.PI / 2} position-y={0}/>
        <Stats/>
        <StatsGl/>
        <OrbitControls enableDamping={true}
                       maxPolarAngle={1.5}
                       minPolarAngle={1.1}
                       maxAzimuthAngle={.2}
                       minAzimuthAngle={-.2}
                       enableZoom={true}
                       makeDefault/>
      </>}
      <Rig/>
      <Environment preset={'apartment'}/>

      <Scene/>
    </Canvas>
  )
}

function Scene() {
  return <>
    <group>
      <Portal/>
    </group>
    <group position={[.18, .12, 0.02]}>
      <Emoji/>
    </group>
    <group position={[-.18, .1, 0.04]}>
      <Burger/>
    </group>
    <group position={[-.2, -.05, 0.025]}
           rotation={[0, 0, 0.6]}>
      <Lollipop scale={0.015}/>
    </group>

  </>
}

function Portal() {
  const groupRef = useRef();
  const map = useTexture('./env.jpg');
  const textureRotate = Math.PI / 1.8;

  return <group ref={groupRef}>
    <mesh>
      <circleGeometry args={[.22, 35, 35]}/>
      <MeshPortalMaterial>
        <directionalLight position={[0, 1, 1]} intensity={4}/>
        <directionalLight position={[0, -1, 1]} intensity={4}/>
        <directionalLight position={[0, -1, 1]} intensity={4} colour={'#ff0000'}/>

        <group rotation={[0, textureRotate, 0]}>
          <mesh>
            <sphereGeometry args={[10, 32, 32]}/>
            <meshStandardMaterial map={map}
                                  side={THREE.BackSide}/>
            <group position={[0, -.1, 0]}
                   rotation={[0, -textureRotate, 0]}>
              <Me/>
            </group>
          </mesh>
        </group>
      </MeshPortalMaterial>
    </mesh>
  </group>
}

function Rig() {
  const vec = new Vector3();
  return useFrame(({camera, mouse}) => {
    vec.set(-mouse.x * .2, -mouse.y * .2, .5)
    camera.position.lerp(vec, 0.025)
    camera.lookAt(0, 0, 0)
  })
}

export default App
