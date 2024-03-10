import { OrbitControls } from "@react-three/drei";
import AnimatedFloorGroup from "./floor/AnimatedFloorGroup";

const Experience = () => {
  return (
    <>
      <ambientLight />
      <directionalLight position={[10, 10, 5]} />
      <OrbitControls makeDefault />
      <AnimatedFloorGroup />
    </>
  )
}

export default Experience;