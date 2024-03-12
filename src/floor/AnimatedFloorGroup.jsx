import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { RepeatWrapping } from "three";

export default function FloorGroup() {
  const groupRef = useRef(null);

  const PATH = "/assets/textures/floor/";

  function createTexture(textureName) {
    const texture = useTexture({
      map: PATH + textureName + '_diff_1k.jpg',
      displacementMap: PATH + textureName + '_disp_1k.png',
      normalMap: PATH + textureName + '_nor_gl_1k.jpg',
      roughnessMap: PATH + textureName + '_rough_1k.jpg',
    });

    // texture.map.repeat.set(4, 64);
    // texture.map.wrapS = RepeatWrapping;
    // texture.map.wrapT = RepeatWrapping;

    // texture.displacementMap.repeat.set(4, 64);
    // texture.displacementMap.wrapS = RepeatWrapping;
    // texture.displacementMap.wrapT = RepeatWrapping;

    // texture.normalMap.repeat.set(4, 64);
    // texture.normalMap.wrapS = RepeatWrapping;
    // texture.normalMap.wrapT = RepeatWrapping;

    // texture.roughnessMap.repeat.set(4, 64);
    // texture.roughnessMap.wrapS = RepeatWrapping;
    // texture.roughnessMap.wrapT = RepeatWrapping;

    return texture;
  }

  const coastSandTexture = createTexture('coast_sand_01');
  const coastSandRocksTexture = createTexture('coast_sand_rocks_02');
  const coastStoneWallTexture = createTexture('coral_stone_wall');
  const gravelFloor02Texture = createTexture('gravel_floor_02');
  const grayRocksTexture = createTexture('gray_rocks');


  useFrame(({ clock }) => {
    groupRef.current.position.y = Math.sin(clock.getElapsedTime());
  });

  const floorsProperties = [
    { height: 0, material: <meshStandardMaterial {...coastSandTexture} /> },
    { height: 5, material: <meshLambertMaterial {...coastSandRocksTexture} /> },
    { height: 10, material: <meshMatcapMaterial {...coastStoneWallTexture} /> },
    { height: 15, material: <meshNormalMaterial {...gravelFloor02Texture} /> },
    { height: 20, material: <meshPhongMaterial {...grayRocksTexture} /> },
    { height: 25, material: <meshPhysicalMaterial {...coastSandTexture} /> },
    { height: 30, material: <meshToonMaterial {...grayRocksTexture} /> },
  ];

  const floors = [];

  let x = 0;
  floorsProperties.forEach((currentFloor) => {
    floors.push(
      <mesh position={[x, currentFloor.height, 0]}>
        <boxGeometry args={[100, 1, 10]} />
        {currentFloor.material}
      </mesh>
    );
    x += 10;
  });

  return (
    <group ref={groupRef} rotation={[0, Math.PI / 2, 0]}>
      {floors}
    </group>
  );
};
