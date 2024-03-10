import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export default function FloorGroup() {
  const groupRef = useRef(null);

  useFrame(({ clock }) => {
    groupRef.current.position.y = Math.sin(clock.getElapsedTime());
  });

  const floorsProperties = [
    { height: 0, material: <meshStandardMaterial color="purple" /> },
    { height: 5, material: <meshLambertMaterial color="purple" /> },
    { height: 10, material: <meshMatcapMaterial color="purple" /> },
    { height: 15, material: <meshNormalMaterial color="purple" /> },
    { height: 20, material: <meshPhongMaterial color="purple" /> },
    { height: 25, material: <meshPhysicalMaterial color="purple" /> },
    { height: 30, material: <meshToonMaterial color="purple" /> },
  ];

  const floors = [];

  floorsProperties.forEach((currentFloor) => {
    floors.push(
      <mesh position={[0, currentFloor.height, 0]}>
        <boxGeometry args={[100, 1, 10]} />
        {currentFloor.material}
      </mesh>
    );
  });

  return (
    <group ref={groupRef}>
      {floors}
    </group>
  );
};
