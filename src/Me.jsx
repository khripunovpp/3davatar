import React, {useLayoutEffect, useRef} from "react";
import { useGLTF } from "@react-three/drei";
import {useThree} from "@react-three/fiber";

export function Me(props) {
  const { nodes, materials } = useGLTF("/models/me.gltf");
  const camera = useThree((state) => state.camera);
  useLayoutEffect(() => {
    camera.position.set(0, 0, .5);
  });
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