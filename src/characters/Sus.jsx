import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Sus(props) {
  const { nodes, materials } = useGLTF("/assets/models/characters/sus.glb");
  return (
    <group position={[0, 1, 0]} rotation={[0, Math.PI / 2, 0]}>
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Body.geometry} material={materials.Material} />
        <mesh
          geometry={nodes.LeftLeg.geometry}
          material={materials.Material}
          position={[0.069, -1.318, -0.42]}
          scale={0.394}
        />
        <mesh
          geometry={nodes.RightLeg.geometry}
          material={materials.Material}
          position={[0.036, -1.29, 0.443]}
          scale={0.354}
        />
        <mesh
          geometry={nodes.Visor.geometry}
          material={materials["Material.001"]}
          position={[0.758, 1.391, 0.349]}
          scale={0.368}
        />
        <mesh
          geometry={nodes.Backpack.geometry}
          material={materials.Material}
          position={[-1.709, 0.489, 0.03]}
          scale={0.898}
        />
      </group>
    </group>

  );
}

useGLTF.preload("/assets/models/characters/sus.glb");
