import React from "react";
import {useGLTF} from "@react-three/drei";

export function Burger(props) {
  const {nodes, materials} = useGLTF("/models/burger.glb");
  const scale = 0.02;
  return (
    <group {...props}
           dispose={null}
           scale={[scale, scale, scale]}
           rotation={[.5, 0, 0]}
    >
      <group position={[0, 1.368, 0]} scale={[0.948, 1.006, 0.959]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials.bred}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials.sumsum}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bred_down001.geometry}
        material={materials.bred}
        position={[0, 0.452, 0]}
        scale={[1.259, 0.222, 1.186]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.meat001.geometry}
        material={materials.meat}
        position={[0, 0.951, 0]}
        scale={[1.047, 0.28, 1.047]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tomato004.geometry}
        material={materials.tomato}
        position={[0.475, 1.155, 0.758]}
        rotation={[0.046, -0.572, -0.02]}
        scale={[0.584, 0.109, 0.584]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.green_002.geometry}
        material={materials.green}
        position={[0, -0.187, 0]}
        rotation={[-Math.PI, 0.185, -Math.PI]}
        scale={1.434}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials.chees}
        position={[-0.025, 1.434, 0.01]}
        scale={1.136}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tomato005.geometry}
        material={materials.tomato}
        position={[-0.688, 1.213, 0.225]}
        rotation={[0.048, 0.033, 0.107]}
        scale={[0.534, 0.1, 0.534]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tomato006.geometry}
        material={materials.tomato}
        position={[-0.579, 1.194, -0.663]}
        rotation={[-0.076, 0.013, 0.067]}
        scale={[0.534, 0.1, 0.534]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tomato007.geometry}
        material={materials.tomato}
        position={[0.66, 1.198, -0.582]}
        rotation={[-0.119, 0, -0.043]}
        scale={[0.534, 0.1, 0.534]}
      />
    </group>
  );
}

useGLTF.preload("/models/burger.glb");