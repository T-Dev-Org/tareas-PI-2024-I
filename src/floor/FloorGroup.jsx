import React from "react";

export default function FloorGroup() {
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

  for (let i = 0; i < floorsProperties.length; i++) {

    const floor = floorsProperties[i];

    floors.push(
      <mesh key={i} position={[0, floor.height, 0]}>
        <boxGeometry args={[100, 1, 10]} />
        {floor.material}
      </mesh>
    );
  }

  return (
    <>
      {floors}
    </>
  );
};
