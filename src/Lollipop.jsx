import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Lollipop(props) {
  const { nodes, materials } = useGLTF("./models/lollipop.glb");
  const scale = props.scale ?? 0.018;
  return (
    <group {...props}
           dispose={null}
           rotation={[Math.PI / 2, -Math.PI / 2, 0]}
           scale={[scale, scale, scale]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spiral.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spiral_1.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload("./models/lollipop.glb");
