import {Canvas, useFrame, useThree} from "@react-three/fiber";
import './App.scss';
import {MeshPortalMaterial, OrbitControls, Stats, StatsGl, useTexture} from "@react-three/drei";
import {Me} from "./Me.jsx";
import * as THREE from "three";
import {Vector3} from "three";
import {useLayoutEffect, useRef} from "react";

function App() {
  const DEV = false;

  return (
    <Canvas shadows gl={{
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
      <Scene/>
    </Canvas>
  )
}

function Scene() {
  const groupRef = useRef();
  const map = useTexture('/env.jpg');
  const {camera, mouse} = useThree();
  useLayoutEffect(() => {
    camera.position.set(0, 0, .5);
  });


  return <group ref={groupRef}>
    <mesh>
      <sphereGeometry args={[.22, 15, 15]}/>
      <MeshPortalMaterial>
        <directionalLight position={[0, 1, 1]} intensity={5} theatreKey={'light'}/>
        <directionalLight position={[0, -1, 1]} intensity={5} theatreKey={'light'}/>

        <mesh>
          <sphereGeometry args={[10, 32, 32]}/>
          <meshStandardMaterial map={map} side={THREE.BackSide}/>
          <group position={[0, -.1, 0]}>
            <Me/>
          </group>
        </mesh>
      </MeshPortalMaterial>
    </mesh>
  </group>
}

function Rig() {
  const vec = new Vector3();
  return useFrame(({camera, mouse}) => {
    vec.set(-mouse.x * .2, -mouse.y * .2, .5)
    console.log(vec)
    camera.position.lerp(vec, 0.025)
    camera.lookAt(0, 0, 0)
  })
}

export default App
