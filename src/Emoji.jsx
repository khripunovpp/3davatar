import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Emoji(props) {
  const { nodes, materials } = useGLTF(
    "./models/emoji.glb"
  );
  const scale = 0.012;
  return (
    <group {...props} dispose={null} scale={[scale, scale, scale]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Emoticon_40.geometry}
        material={materials["M_Emoticon 40"]}
      />
    </group>
  );
}

useGLTF.preload("./models/emoji.glb");