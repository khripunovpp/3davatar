import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Me(props) {
  const { nodes, materials } = useGLTF("/models/me.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_0.geometry}
        material={materials.Material_0}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/me.gltf");