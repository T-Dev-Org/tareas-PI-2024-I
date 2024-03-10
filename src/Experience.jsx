import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import Floor from "./floor/FloorGroup";

const Experience = () => {
  const boxRef = useRef(null);

  return (
    <>
      <ambientLight />
      <directionalLight position={[10, 10, 5]} />
      <OrbitControls makeDefault />
      <Floor />
    </>
  )
}

export default Experience;